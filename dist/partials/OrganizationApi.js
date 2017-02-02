/*jshint -W069 */
/**
* @class OrganizationApi
* @example
* var api = new purecloud.platform.OrganizationApi(pureCloudSession);
*/
function OrganizationApi(session) {
    if(!(this instanceof OrganizationApi)) {
        return new OrganizationApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('OrganizationApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get organization.
  * @memberOf OrganizationApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "thirdPartyOrgId": "",
   "thirdPartyOrgName": "",
   "thirdPartyURI": "",
   "domain": "",
   "version": 0,
   "state": "",
   "defaultSiteId": "",
   "deletable": true,
   "selfUri": "",
   "features": {}
}
  */
OrganizationApi.prototype.getMe = function getMe(){
    var requestPath = '/api/v2/organizations/me';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Fetch field config for an entity type
  * @memberOf OrganizationApi
  * @instance
  * @param {string} type - Field type
  person,
  group,
  org,
  externalContact,
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "entityType": "",
   "state": "",
   "sections": [],
   "version": "",
   "schemaVersion": "",
   "selfUri": ""
}
  */
OrganizationApi.prototype.getFieldconfig = function getFieldconfig(type){
    var requestPath = '/api/v2/fieldconfig';
    var requestQuery = {};
    var requestBody;

    if(type === undefined || type === null){
      throw new Error('Missing required  parameter: type');
    }
    requestQuery["type"] = type;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update organization
  * @memberOf OrganizationApi
  * @instance
  * @param {} body - Feature to update.
  * @example
  * Body Example:
  * {
   "value": true,
   "key": ""
}
  */
OrganizationApi.prototype.patchFeatures = function patchFeatures(body){
    var requestPath = '/api/v2/organizations/features';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};


module.exports = OrganizationApi;
