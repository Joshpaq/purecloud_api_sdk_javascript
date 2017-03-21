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
  * @summary Update organization
  * @memberOf OrganizationApi
  * @instance
  * @param {string} featureName - Organization feature
  realtimeCIC,
  purecloud,
  hipaa,
  ucEnabled,
  pci,
  purecloudVoice,
  xmppFederation,
  chat,
  informalPhotos,
  directory,
  contactCenter,
  unifiedCommunications,
  custserv,
  * @param {} enabled - New state of feature
  * @example
  * Body Example:
  * {
   "enabled": true
}
  * @example
  * 200 Response Example:
  * {
   "realtimeCIC": true,
   "purecloud": true,
   "hipaa": true,
   "ucEnabled": true,
   "pci": true,
   "purecloudVoice": true,
   "xmppFederation": true,
   "chat": true,
   "informalPhotos": true,
   "directory": true,
   "contactCenter": true,
   "unifiedCommunications": true,
   "custserv": true
}
  */
OrganizationApi.prototype.patchFeaturesFeaturename = function patchFeaturesFeaturename(featureName, enabled){
    var requestPath = '/api/v2/organizations/features/{featureName}';
    var requestQuery = {};
    var requestBody;

    if(featureName === undefined || featureName === null){
      throw new Error('Missing required  parameter: featureName');
    }
    requestPath = requestPath.replace('{featureName}', featureName);
    if(enabled === undefined || enabled === null){
      throw new Error('Missing required  parameter: enabled');
    }
    if(enabled !== undefined && enabled !== null){
      requestBody = enabled;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get organization.
  * @memberOf OrganizationApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "defaultLanguage": "",
   "defaultCountryCode": "",
   "thirdPartyOrgName": "",
   "thirdPartyURI": "",
   "domain": "",
   "version": 0,
   "state": "",
   "defaultSiteId": "",
   "voicemailEnabled": true,
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
  * @summary Update organization.
  * @memberOf OrganizationApi
  * @instance
  * @param {} body - Organization
  * @example
  * Body Example:
  * {
   "name": "",
   "defaultLanguage": "",
   "defaultCountryCode": "",
   "thirdPartyURI": "",
   "domain": "",
   "version": 0,
   "state": "",
   "defaultSiteId": "",
   "voicemailEnabled": true
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "defaultLanguage": "",
   "defaultCountryCode": "",
   "thirdPartyOrgName": "",
   "thirdPartyURI": "",
   "domain": "",
   "version": 0,
   "state": "",
   "defaultSiteId": "",
   "voicemailEnabled": true,
   "selfUri": "",
   "features": {}
}
  */
OrganizationApi.prototype.putMe = function putMe(body){
    var requestPath = '/api/v2/organizations/me';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
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


module.exports = OrganizationApi;
