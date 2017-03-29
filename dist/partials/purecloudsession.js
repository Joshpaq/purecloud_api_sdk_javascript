
var superagent = require('superagent');
var Promise = require('es6-promise').Promise;
require('es6-promise').polyfill();

//API VERSION - 0.88.8
/**
  * @description With the PureCloud Platform API, you can control all aspects of your PureCloud environment. With the APIs you can access the system configuration, manage conversations and more.
  * @class
  * @param {string} options.strategy - Authentication strategy: "token", "implicit", "client-credentials"
  * @param {string} options.environment - (Optional, default "mypurecloud.com") Environment the session use, e.g. mypurecloud.ie, mypurecloud.com.au, etc.
  * @param {string} options.clientId - (Optional) Client identifier for "implicit" or "client-credentials" strategies
  * @param {string} options.clientSecret - (Optional) Client secret key for "client-credentials" strategy
  * @param {string} options.redirectUrl - (Optional) Callback URL for "implicit" strategy
  * @param {string} options.token - (Optional) Existing token for "token" strategy
  * @param {string} options.storageKey - (Optional) Key to set in localStorage with the authentication token
  * @param {number} options.timeout - (Optional) Request timeout in milliseconds
  **/
function PureCloudSession(options) {
    if(!(this instanceof PureCloudSession)) {
        return new PureCloudSession(options);
    }

    if(!options.timeout){
        options.timeout = 5000;
    }

    this.options = options;

    this._setValuesFromUrlHash();

    this.options.token = this._getToken();
    this.setEnvironment(this.options.environment);

}

/**
  * @description Sets the environment used by the session
  * @param {string} environment - (Optional, default "mypurecloud.com") Environment the session use, e.g. mypurecloud.ie, mypurecloud.com.au, etc.
  **/
PureCloudSession.prototype.setEnvironment = function setEnvironment(environment) {
    this.options.environment = environment || 'mypurecloud.com';
    this.apiUrl = 'https://api.' + this.options.environment;
    this.authUrl = 'https://login.' + this.options.environment;
};


/**
  * @description Sets an error handler to be called any time there is a 401 Unauthenticated error returned by the api
  * @param {function} errorHandler - The function to call.
  **/
PureCloudSession.prototype.setUnauthenticatedErrorHandler = function setEnvironment(errorHandler) {
    this.unauthenticatedErrorHandler = errorHandler;
};

/**
  * @description Attempts to login with the appropriate authentication strategy
  * @returns Promise which resolves on successful authentication, otherwise rejects with an error
  **/
PureCloudSession.prototype.login = function login() {
    var self = this;
    return this.options.token ? this._testTokenAccess().catch(function(){
            self._authenticate();
        }) : this._authenticate();
};

PureCloudSession.prototype._authenticate = function _authenticate() {
  var strategy = this.options.strategy;
  switch(strategy) {
    case 'token':
      var token = this.options.token;
      return this._loginWithToken(token);
    case 'implicit':
      var implicitclientId = this.options.clientId;
      var redirectUrl = this.options.redirectUrl;
      var state = this.options.state;
      return this._loginWithImplicitGrant(implicitclientId, redirectUrl, state);
    case 'client-credentials':
      var clientId = this.options.clientId;
      var clientSecret = this.options.clientSecret;
      return this._loginWithClientCredentials(clientId, clientSecret);
    default:
      throw new Error('Authentication strategy "'+strategy+'" is not supported.');
  }
};

PureCloudSession.prototype._testTokenAccess = function _testTokenAccess() {
    if(this.options.strategy === 'implicit') {
      var checkUrl = this.apiUrl + "/api/v2/users/me";
      return this._makeRequest('get', checkUrl);
    }
    return Promise.resolve();
};

PureCloudSession.prototype._loginWithToken = function _loginWithToken(token) {
    if(!token) {
        throw new Error('Options requires a "token" key for the "token" strategy');
    }
    return Promise.resolve();
};

PureCloudSession.prototype._loginWithImplicitGrant = function(clientId, redirectUrl, state) {
    var query = {
        response_type: 'token',
        client_id: encodeURIComponent(clientId),
        redirect_uri: encodeURI(redirectUrl),
        state: state
    };

    var url = this._buildAuthUrl('authorize', query);
    window.location.replace(url);
};

PureCloudSession.prototype._buildAuthUrl = function(path, query) {
  function qs(url, key) {
      var val = query[key];
      if(!val) return url;
      return url + '&' + key + '=' + val;
  }

  if (!query) {
    query = {};
  }

  var baseUrl = this.authUrl + '/' + path + '?';
  return Object.keys(query).reduce(qs, baseUrl);
};

PureCloudSession.prototype._setValuesFromUrlHash = function setValuesFromUrlHash() {
    if(!(typeof window !== 'undefined' && window.location.hash)) return;
    var hash = window.location.hash
        .slice(1).split('&')
        .reduce(function(obj, pair) {
            var keyValue = pair.split('=');
            obj[keyValue[0]] = keyValue[1];
            return obj;
        }, {});

    if(hash.access_token) this._setToken(hash.access_token);
    if(hash.state) this.options.state = hash.state;
};

PureCloudSession.prototype._loginWithClientCredentials = function(clientId, clientSecret) {
    var self = this;
    var url = this.authUrl + '/token';
    var data = {grant_type: 'client_credentials'};
    var request = this._baseRequest('post', url)
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .auth(clientId, clientSecret)
        .send(data);
    return this._sendRequest(request)
        .then(function(body) {
            self._setToken(body.access_token);
        });
};

PureCloudSession.prototype._getToken = function _getToken() {
    if(this.options.token) return this.options.token;
    if(this.options.storageKey && PureCloudSession.hasLocalStorage) {
        return localStorage.getItem(this.options.storageKey);
    }
};

PureCloudSession.prototype._setToken = function _setToken(token) {
    this.options.token = token;
    if(this.options.storageKey && PureCloudSession.hasLocalStorage) {
      if (token) {
        localStorage.setItem(this.options.storageKey, token);
      } else {
        localStorage.removeItem(this.options.storageKey);
      }
    }
};

PureCloudSession.hasLocalStorage = (function() {
    try {
        localStorage.setItem("mod", "mod");
        localStorage.removeItem("mod");
        return true;
    } catch(e) {
        return false;
    }
}).call(this);

/**
  * @description Deauthenticates the session and removes any stored token
  **/
PureCloudSession.prototype.logout = function logout() {
    if(PureCloudSession.hasLocalStorage) {
        this._setToken(null);
    }

    var query = {
        client_id: encodeURIComponent(this.options.clientId),
        redirect_uri: encodeURI(this.options.redirectUrl)
    };

    var url = this._buildAuthUrl('logout', query);
    window.location.replace(url);
};

/**
  * @description Makes authenticated requests to PureCloud
  * @param {string} method - HTTP method verb, e.g. "get", "post"
  * @param {string} url - URL to request
  * @param {object} query - (Optional) query parameters
  * @param {object} body - (Optional) request body payload
  * @returns Promise resolving to the response body, otherwise rejects with an error
  */
PureCloudSession.prototype.makeRequest = function makeRequest(method, url, query, body) {
    return this._makeRequest(method, url, query, body);
};

PureCloudSession.prototype._makeRequest = function _makeRequest(method, url, query, body) {
    var bearer = 'bearer ' + this.options.token;

    if(this.debugLog){
        var trace = method + " " + url;
        if(query && Object.keys(query).count > 0 && query[Object.keys(query)[0]]){
            trace += "\nQuery Params: " + JSON.stringify(query);
        }

        if(body){
            trace += "\nBody: " + JSON.stringify(body);
        }

        this.debugLog(trace);
    }

    var request = this._baseRequest(method, url)
        .set('Authorization', bearer)
        .query(query)
        .send(body);
    return this._sendRequest(request);
};

PureCloudSession.prototype._baseRequest = function _baseRequest(method, url) {
    method = method.toLowerCase();
    if(url.charAt(0) === '/') url = this.apiUrl + url;

    var request = superagent[method](url)
        .type('json')
        .accept('json')
        .timeout(this.options.timeout);

    if (typeof window === 'undefined' ) {
        var userAgent = 'KEVIN GLINSKI';
        request = request.set('User-Agent', userAgent);
    }

    return request;
};

PureCloudSession.prototype._buildErrorResponse = function (error,res){
    if(typeof res === "undefined"){
        res = {
            statusCode: 0
        };
    }

    var returnError = {
        statusCode: res.statusCode,
        headers: res.headers
    };

    if(res.error){
        returnError.body= res.error.text;
        try{
            returnError.body= JSON.parse(res.error.text);
        }catch(e){}
    }
    else if(error){
        returnError.body = res.body;
    }
    else{
        return null;
    }

    return returnError;
};

PureCloudSession.prototype._sendRequest = function _sendRequest(request) {
    var self = this;
    return new Promise(function(resolve, reject) {
        request.end(function(error, res) {
            if(self.debugLog){
                if(res){
                    self.debugLog(res.headers);
                }

                self.debugLog(error || res.error || res.body);
            }

            if(res && res.unauthorized && self.unauthenticatedErrorHandler){
                self.unauthenticatedErrorHandler(error);
            }

            var returnError = self._buildErrorResponse(error, res);

            if(returnError){
                reject(returnError);
            }else{
                resolve(res.body);
            }


        });
    });
};

/**
  * @description Conveinence method for making GET requests
  * @param {string} url - URL to request
  * @param {object} query - (Optional) query parameters
  * @returns Promise resolving to the response body, otherwise rejects with an error
  */
PureCloudSession.prototype.get = function get(url, query) {
  return this.makeRequest('get', url, query);
};

module.exports = PureCloudSession;
