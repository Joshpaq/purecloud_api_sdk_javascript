/*jshint -W069 */
/**
* @class OAuthApi
* @example
* var api = new purecloud.platform.OAuthApi(pureCloudSession);
*/
function OAuthApi(session) {
    if(!(this instanceof OAuthApi)) {
        return new OAuthApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('OAuthApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary The list of OAuth clients
  * @memberOf OAuthApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "selfUri": "",
   "firstUri": "",
   "lastUri": "",
   "previousUri": "",
   "nextUri": "",
   "pageCount": 0
}
  */
OAuthApi.prototype.getClients = function getClients(){
    var requestPath = '/api/v2/oauth/clients';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create OAuth client
  * @description The OAuth Grant/Client is required in order to create an authentication token and gain access to PureCloud. 
The preferred authorizedGrantTypes is 'CODE' which requires applications to send a client ID and client secret. This is typically a web server. 
If the client is unable to secure the client secret then the 'TOKEN' grant type aka IMPLICIT should be used. This is would be for browser or mobile apps. 
If a client is to be used outside of the context of a user then the 'CLIENT-CREDENTIALS' grant may be used. In this case the client must be granted roles 
via the 'roleIds' field.
  * @memberOf OAuthApi
  * @instance
  * @param {} body - Client
  * @example
  * Body Example:
  * {
   "name": "",
   "accessTokenValiditySeconds": 0,
   "description": "",
   "registeredRedirectUri": [],
   "secret": "",
   "roleIds": [],
   "authorizedGrantType": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "accessTokenValiditySeconds": 0,
   "description": "",
   "registeredRedirectUri": [],
   "secret": "",
   "roleIds": [],
   "authorizedGrantType": "",
   "selfUri": ""
}
  */
OAuthApi.prototype.postClients = function postClients(body){
    var requestPath = '/api/v2/oauth/clients';
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

/**
  * @summary Get OAuth Client
  * @memberOf OAuthApi
  * @instance
  * @param {string} clientId - Client ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "accessTokenValiditySeconds": 0,
   "description": "",
   "registeredRedirectUri": [],
   "secret": "",
   "roleIds": [],
   "authorizedGrantType": "",
   "selfUri": ""
}
  */
OAuthApi.prototype.getClientsClientId = function getClientsClientId(clientId){
    var requestPath = '/api/v2/oauth/clients/{clientId}';
    var requestQuery = {};
    var requestBody;

    if(clientId === undefined || clientId === null){
      throw new Error('Missing required  parameter: clientId');
    }
    requestPath = requestPath.replace('{clientId}', clientId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update OAuth Client
  * @memberOf OAuthApi
  * @instance
  * @param {string} clientId - Client ID
  * @param {} body - Client
  * @example
  * Body Example:
  * {
   "name": "",
   "accessTokenValiditySeconds": 0,
   "description": "",
   "registeredRedirectUri": [],
   "secret": "",
   "roleIds": [],
   "authorizedGrantType": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "accessTokenValiditySeconds": 0,
   "description": "",
   "registeredRedirectUri": [],
   "secret": "",
   "roleIds": [],
   "authorizedGrantType": "",
   "selfUri": ""
}
  */
OAuthApi.prototype.putClientsClientId = function putClientsClientId(clientId, body){
    var requestPath = '/api/v2/oauth/clients/{clientId}';
    var requestQuery = {};
    var requestBody;

    if(clientId === undefined || clientId === null){
      throw new Error('Missing required  parameter: clientId');
    }
    requestPath = requestPath.replace('{clientId}', clientId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete OAuth Client
  * @memberOf OAuthApi
  * @instance
  * @param {string} clientId - Client ID
  */
OAuthApi.prototype.deleteClientsClientId = function deleteClientsClientId(clientId){
    var requestPath = '/api/v2/oauth/clients/{clientId}';
    var requestQuery = {};
    var requestBody;

    if(clientId === undefined || clientId === null){
      throw new Error('Missing required  parameter: clientId');
    }
    requestPath = requestPath.replace('{clientId}', clientId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Regenerate Client Secret
  * @description This operation will set the client secret to a randomly generated cryptographically random value. All clients must be updated with the new secret. This operation should be used with caution.
  * @memberOf OAuthApi
  * @instance
  * @param {string} clientId - Client ID
  */
OAuthApi.prototype.postClientsClientIdSecret = function postClientsClientIdSecret(clientId){
    var requestPath = '/api/v2/oauth/clients/{clientId}/secret';
    var requestQuery = {};
    var requestBody;

    if(clientId === undefined || clientId === null){
      throw new Error('Missing required  parameter: clientId');
    }
    requestPath = requestPath.replace('{clientId}', clientId);
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};


module.exports = OAuthApi;
