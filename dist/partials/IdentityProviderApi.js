/*jshint -W069 */
/**
* @class IdentityProviderApi
* @example
* var api = new purecloud.platform.IdentityProviderApi(pureCloudSession);
*/
function IdentityProviderApi(session) {
    if(!(this instanceof IdentityProviderApi)) {
        return new IdentityProviderApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('IdentityProviderApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get Customer Interaction Center (CIC) Identity Provider
  * @memberOf IdentityProviderApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": "",
   "disabled": true,
   "selfUri": ""
}
  */
IdentityProviderApi.prototype.getCic = function getCic(){
    var requestPath = '/api/v2/identityproviders/cic';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update/Create Customer Interaction Center (CIC) Identity Provider
  * @memberOf IdentityProviderApi
  * @instance
  * @param {} body - Provider
  * @example
  * Body Example:
  * {
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": "",
   "disabled": true
}
  */
IdentityProviderApi.prototype.putCic = function putCic(body){
    var requestPath = '/api/v2/identityproviders/cic';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete Customer Interaction Center (CIC) Identity Provider
  * @memberOf IdentityProviderApi
  * @instance
  */
IdentityProviderApi.prototype.deleteCic = function deleteCic(){
    var requestPath = '/api/v2/identityproviders/cic';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary The list of identity providers
  * @memberOf IdentityProviderApi
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
IdentityProviderApi.prototype.getIdentityproviders = function getIdentityproviders(){
    var requestPath = '/api/v2/identityproviders';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get ADFS Identity Provider
  * @memberOf IdentityProviderApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "relyingPartyIdentifier": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": "",
   "disabled": true,
   "selfUri": ""
}
  */
IdentityProviderApi.prototype.getAdfs = function getAdfs(){
    var requestPath = '/api/v2/identityproviders/adfs';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update/Create ADFS Identity Provider
  * @memberOf IdentityProviderApi
  * @instance
  * @param {} body - Provider
  * @example
  * Body Example:
  * {
   "name": "",
   "relyingPartyIdentifier": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": "",
   "disabled": true
}
  */
IdentityProviderApi.prototype.putAdfs = function putAdfs(body){
    var requestPath = '/api/v2/identityproviders/adfs';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete ADFS Identity Provider
  * @memberOf IdentityProviderApi
  * @instance
  */
IdentityProviderApi.prototype.deleteAdfs = function deleteAdfs(){
    var requestPath = '/api/v2/identityproviders/adfs';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get OneLogin Identity Provider
  * @memberOf IdentityProviderApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": "",
   "disabled": true,
   "selfUri": ""
}
  */
IdentityProviderApi.prototype.getOnelogin = function getOnelogin(){
    var requestPath = '/api/v2/identityproviders/onelogin';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update/Create OneLogin Identity Provider
  * @memberOf IdentityProviderApi
  * @instance
  * @param {} body - Provider
  * @example
  * Body Example:
  * {
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": "",
   "disabled": true
}
  */
IdentityProviderApi.prototype.putOnelogin = function putOnelogin(body){
    var requestPath = '/api/v2/identityproviders/onelogin';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete OneLogin Identity Provider
  * @memberOf IdentityProviderApi
  * @instance
  */
IdentityProviderApi.prototype.deleteOnelogin = function deleteOnelogin(){
    var requestPath = '/api/v2/identityproviders/onelogin';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get PureCloud Identity Provider
  * @memberOf IdentityProviderApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "disabled": true,
   "selfUri": ""
}
  */
IdentityProviderApi.prototype.getPurecloud = function getPurecloud(){
    var requestPath = '/api/v2/identityproviders/purecloud';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update/Create PureCloud Identity Provider
  * @memberOf IdentityProviderApi
  * @instance
  * @param {} body - Provider
  * @example
  * Body Example:
  * {
   "name": "",
   "disabled": true
}
  */
IdentityProviderApi.prototype.putPurecloud = function putPurecloud(body){
    var requestPath = '/api/v2/identityproviders/purecloud';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete PureCloud Identity Provider
  * @memberOf IdentityProviderApi
  * @instance
  */
IdentityProviderApi.prototype.deletePurecloud = function deletePurecloud(){
    var requestPath = '/api/v2/identityproviders/purecloud';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get Okta Identity Provider
  * @memberOf IdentityProviderApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": "",
   "disabled": true,
   "selfUri": ""
}
  */
IdentityProviderApi.prototype.getOkta = function getOkta(){
    var requestPath = '/api/v2/identityproviders/okta';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update/Create Okta Identity Provider
  * @memberOf IdentityProviderApi
  * @instance
  * @param {} body - Provider
  * @example
  * Body Example:
  * {
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": "",
   "disabled": true
}
  */
IdentityProviderApi.prototype.putOkta = function putOkta(body){
    var requestPath = '/api/v2/identityproviders/okta';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete Okta Identity Provider
  * @memberOf IdentityProviderApi
  * @instance
  */
IdentityProviderApi.prototype.deleteOkta = function deleteOkta(){
    var requestPath = '/api/v2/identityproviders/okta';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get an identity provider
  * @memberOf IdentityProviderApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "disabled": true,
   "selfUri": ""
}
  */
IdentityProviderApi.prototype.getProviderId = function getProviderId(){
    var requestPath = '/api/v2/identityproviders/{providerId}';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an identity provider
  * @memberOf IdentityProviderApi
  * @instance
  * @param {} body - Provider
  * @example
  * Body Example:
  * {
   "name": "",
   "disabled": true
}
  */
IdentityProviderApi.prototype.putProviderId = function putProviderId(body){
    var requestPath = '/api/v2/identityproviders/{providerId}';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an identity provider
  * @memberOf IdentityProviderApi
  * @instance
  */
IdentityProviderApi.prototype.deleteProviderId = function deleteProviderId(){
    var requestPath = '/api/v2/identityproviders/{providerId}';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get Salesforce Identity Provider
  * @memberOf IdentityProviderApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": "",
   "disabled": true,
   "selfUri": ""
}
  */
IdentityProviderApi.prototype.getSalesforce = function getSalesforce(){
    var requestPath = '/api/v2/identityproviders/salesforce';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update/Create Salesforce Identity Provider
  * @memberOf IdentityProviderApi
  * @instance
  * @param {} body - Provider
  * @example
  * Body Example:
  * {
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": "",
   "disabled": true
}
  */
IdentityProviderApi.prototype.putSalesforce = function putSalesforce(body){
    var requestPath = '/api/v2/identityproviders/salesforce';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete Salesforce Identity Provider
  * @memberOf IdentityProviderApi
  * @instance
  */
IdentityProviderApi.prototype.deleteSalesforce = function deleteSalesforce(){
    var requestPath = '/api/v2/identityproviders/salesforce';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};


module.exports = IdentityProviderApi;
