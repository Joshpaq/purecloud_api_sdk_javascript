/*jshint -W069 */
/**
* @class UtilitiesApi
* @example
* var api = new purecloud.platform.UtilitiesApi(pureCloudSession);
*/
function UtilitiesApi(session) {
    if(!(this instanceof UtilitiesApi)) {
        return new UtilitiesApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('UtilitiesApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get time zones list
  * @memberOf UtilitiesApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "selfUri": "",
   "firstUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
UtilitiesApi.prototype.getTimezones = function getTimezones(pageSize, pageNumber){
    var requestPath = '/api/v2/timezones';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the current system date/time
  * @memberOf UtilitiesApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "currentDate": ""
}
  */
UtilitiesApi.prototype.getDate = function getDate(){
    var requestPath = '/api/v2/date';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Returns the information about an X509 PEM encoded certificate or certificate chain.
  * @memberOf UtilitiesApi
  * @instance
  * @param {} body - Certificate
  * @example
  * Body Example:
  * {
   "certificate": ""
}
  * @example
  * 200 Response Example:
  * {
   "certificateDetails": []
}
  */
UtilitiesApi.prototype.postDetails = function postDetails(body){
    var requestPath = '/api/v2/certificate/details';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};


module.exports = UtilitiesApi;
