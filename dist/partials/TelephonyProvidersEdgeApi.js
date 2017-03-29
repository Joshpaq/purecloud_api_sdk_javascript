/*jshint -W069 */
/**
* @class TelephonyProvidersEdgeApi
* @example
* var api = new purecloud.platform.TelephonyProvidersEdgeApi(pureCloudSession);
*/
function TelephonyProvidersEdgeApi(session) {
    if(!(this instanceof TelephonyProvidersEdgeApi)) {
        return new TelephonyProvidersEdgeApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('TelephonyProvidersEdgeApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Triggers the rebalance operation.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} siteId - Site ID
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesSitesSiteIdRebalance = function postProvidersEdgesSitesSiteIdRebalance(siteId){
    var requestPath = '/api/v2/telephony/providers/edges/sites/{siteId}/rebalance';
    var requestQuery = {};
    var requestBody;

    if(siteId === undefined || siteId === null){
      throw new Error('Missing required  parameter: siteId');
    }
    requestPath = requestPath.replace('{siteId}', siteId);
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Trunk Base Settings object by ID
  * @description Managed properties will not be returned unless the user is assigned the managed:all:all permission.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} trunkBaseSettingsId - Trunk Base ID
  * @param {boolean} ignoreHidden - Set this to true to not receive trunk properties that are meant to be hidden or for internal system usage only.
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "trunkMetabase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {},
   "trunkType": "",
   "managed": true,
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesTrunkbasesettingsTrunkbasesettingsId = function getProvidersEdgesTrunkbasesettingsTrunkbasesettingsId(trunkBaseSettingsId, ignoreHidden){
    var requestPath = '/api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}';
    var requestQuery = {};
    var requestBody;

    if(trunkBaseSettingsId === undefined || trunkBaseSettingsId === null){
      throw new Error('Missing required  parameter: trunkBaseSettingsId');
    }
    requestPath = requestPath.replace('{trunkBaseSettingsId}', trunkBaseSettingsId);
    requestQuery["ignoreHidden"] = ignoreHidden;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a Trunk Base Settings object by ID
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} trunkBaseSettingsId - Trunk Base ID
  * @param {} body - Trunk base settings
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "trunkMetabase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {},
   "trunkType": "",
   "managed": true
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "trunkMetabase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {},
   "trunkType": "",
   "managed": true,
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesTrunkbasesettingsTrunkbasesettingsId = function putProvidersEdgesTrunkbasesettingsTrunkbasesettingsId(trunkBaseSettingsId, body){
    var requestPath = '/api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}';
    var requestQuery = {};
    var requestBody;

    if(trunkBaseSettingsId === undefined || trunkBaseSettingsId === null){
      throw new Error('Missing required  parameter: trunkBaseSettingsId');
    }
    requestPath = requestPath.replace('{trunkBaseSettingsId}', trunkBaseSettingsId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a Trunk Base Settings object by ID
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} trunkBaseSettingsId - Trunk Base ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesTrunkbasesettingsTrunkbasesettingsId = function deleteProvidersEdgesTrunkbasesettingsTrunkbasesettingsId(trunkBaseSettingsId){
    var requestPath = '/api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}';
    var requestQuery = {};
    var requestBody;

    if(trunkBaseSettingsId === undefined || trunkBaseSettingsId === null){
      throw new Error('Missing required  parameter: trunkBaseSettingsId');
    }
    requestPath = requestPath.replace('{trunkBaseSettingsId}', trunkBaseSettingsId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the setup package for a locally deployed edge device. This is needed to complete the setup process for the virtual edge.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeId - Edge ID
  * @example
  * 200 Response Example:
  * {
   "meta-data": {
      "pairing-token": "",
      "pairing-trust": [],
      "pairing-url": ""
   },
   "edge-id": "",
   "auth-token": "",
   "org-id": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgeIdSetuppackage = function getProvidersEdgesEdgeIdSetuppackage(edgeId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/setuppackage';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a listing of DID Pools
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortBy - Sort by
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesDidpools = function getProvidersEdgesDidpools(pageSize, pageNumber, sortBy){
    var requestPath = '/api/v2/telephony/providers/edges/didpools';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["sortBy"] = sortBy;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a new DID pool
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {} body - DID pool
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "startPhoneNumber": "",
   "endPhoneNumber": "",
   "comments": "",
   "provider": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "startPhoneNumber": "",
   "endPhoneNumber": "",
   "comments": "",
   "provider": "",
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesDidpools = function postProvidersEdgesDidpools(body){
    var requestPath = '/api/v2/telephony/providers/edges/didpools';
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
  * @summary List schemas of a specific category (Deprecated)
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} schemaCategory - Schema category
  * @param {string} schemaType - Schema type
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getSchemasEdgesVnextSchemacategorySchematype = function getSchemasEdgesVnextSchemacategorySchematype(schemaCategory, schemaType, pageSize, pageNumber){
    var requestPath = '/api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}';
    var requestQuery = {};
    var requestBody;

    if(schemaCategory === undefined || schemaCategory === null){
      throw new Error('Missing required  parameter: schemaCategory');
    }
    requestPath = requestPath.replace('{schemaCategory}', schemaCategory);
    if(schemaType === undefined || schemaType === null){
      throw new Error('Missing required  parameter: schemaType');
    }
    requestPath = requestPath.replace('{schemaType}', schemaType);
    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary List schemas of a specific category (Deprecated)
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} schemaCategory - Schema category
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getSchemasEdgesVnextSchemacategory = function getSchemasEdgesVnextSchemacategory(schemaCategory, pageSize, pageNumber){
    var requestPath = '/api/v2/configuration/schemas/edges/vnext/{schemaCategory}';
    var requestQuery = {};
    var requestBody;

    if(schemaCategory === undefined || schemaCategory === null){
      throw new Error('Missing required  parameter: schemaCategory');
    }
    requestPath = requestPath.replace('{schemaCategory}', schemaCategory);
    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get edge.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeId - Edge ID
  * @param {array} expand - Fields to expand in the response, comma-separated Valid Values: site
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "interfaces": [],
   "make": "",
   "model": "",
   "apiVersion": "",
   "softwareVersion": "",
   "softwareVersionTimestamp": "",
   "softwareVersionPlatform": "",
   "softwareVersionConfiguration": "",
   "fullSoftwareVersion": "",
   "pairingId": "",
   "fingerprint": "",
   "fingerprintHint": "",
   "currentVersion": "",
   "stagedVersion": "",
   "patch": "",
   "statusCode": "",
   "edgeGroup": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "managed": true,
      "edgeTrunkBaseAssignment": {},
      "phoneTrunkBases": [],
      "selfUri": ""
   },
   "site": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "primarySites": [],
      "secondarySites": [],
      "primaryEdges": [],
      "secondaryEdges": [],
      "addresses": [],
      "edges": [],
      "edgeAutoUpdateConfig": {},
      "location": {},
      "managed": true,
      "selfUri": ""
   },
   "softwareStatus": {
      "version": {},
      "maxDownloadRate": 0,
      "downloadStartTime": "",
      "executeStartTime": "",
      "executeStopTime": "",
      "executeOnIdle": true,
      "status": "",
      "edgeUri": "",
      "callDrainingWaitTimeSeconds": 0,
      "current": true
   },
   "onlineStatus": "",
   "serialNumber": "",
   "physicalEdge": true,
   "managed": true,
   "edgeDeploymentType": "",
   "callDrainingState": "",
   "conversationCount": 0,
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgeId = function getProvidersEdgesEdgeId(edgeId, expand){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a edge.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeId - Edge ID
  * @param {} body - Edge
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "interfaces": [],
   "make": "",
   "model": "",
   "apiVersion": "",
   "softwareVersion": "",
   "softwareVersionTimestamp": "",
   "softwareVersionPlatform": "",
   "softwareVersionConfiguration": "",
   "fullSoftwareVersion": "",
   "pairingId": "",
   "fingerprint": "",
   "fingerprintHint": "",
   "currentVersion": "",
   "stagedVersion": "",
   "patch": "",
   "statusCode": "",
   "edgeGroup": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "managed": true,
      "edgeTrunkBaseAssignment": {},
      "phoneTrunkBases": []
   },
   "site": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "primarySites": [],
      "secondarySites": [],
      "primaryEdges": [],
      "secondaryEdges": [],
      "addresses": [],
      "edges": [],
      "edgeAutoUpdateConfig": {},
      "location": {},
      "managed": true
   },
   "softwareStatus": {
      "version": {},
      "maxDownloadRate": 0,
      "downloadStartTime": "",
      "executeStartTime": "",
      "executeStopTime": "",
      "executeOnIdle": true,
      "status": "",
      "edgeUri": "",
      "callDrainingWaitTimeSeconds": 0,
      "current": true
   },
   "onlineStatus": "",
   "serialNumber": "",
   "physicalEdge": true,
   "managed": true,
   "edgeDeploymentType": "",
   "callDrainingState": "",
   "conversationCount": 0
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "interfaces": [],
   "make": "",
   "model": "",
   "apiVersion": "",
   "softwareVersion": "",
   "softwareVersionTimestamp": "",
   "softwareVersionPlatform": "",
   "softwareVersionConfiguration": "",
   "fullSoftwareVersion": "",
   "pairingId": "",
   "fingerprint": "",
   "fingerprintHint": "",
   "currentVersion": "",
   "stagedVersion": "",
   "patch": "",
   "statusCode": "",
   "edgeGroup": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "managed": true,
      "edgeTrunkBaseAssignment": {},
      "phoneTrunkBases": [],
      "selfUri": ""
   },
   "site": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "primarySites": [],
      "secondarySites": [],
      "primaryEdges": [],
      "secondaryEdges": [],
      "addresses": [],
      "edges": [],
      "edgeAutoUpdateConfig": {},
      "location": {},
      "managed": true,
      "selfUri": ""
   },
   "softwareStatus": {
      "version": {},
      "maxDownloadRate": 0,
      "downloadStartTime": "",
      "executeStartTime": "",
      "executeStopTime": "",
      "executeOnIdle": true,
      "status": "",
      "edgeUri": "",
      "callDrainingWaitTimeSeconds": 0,
      "current": true
   },
   "onlineStatus": "",
   "serialNumber": "",
   "physicalEdge": true,
   "managed": true,
   "edgeDeploymentType": "",
   "callDrainingState": "",
   "conversationCount": 0,
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesEdgeId = function putProvidersEdgesEdgeId(edgeId, body){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a edge.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeId - Edge ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesEdgeId = function deleteProvidersEdgesEdgeId(edgeId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of lines.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeId - Edge ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgeIdLines = function getProvidersEdgesEdgeIdLines(edgeId, pageSize, pageNumber){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/lines';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of available makes and models to create a new Phone Base Settings
  * @memberOf TelephonyProvidersEdgeApi
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
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesPhonebasesettingsAvailablemetabases = function getProvidersEdgesPhonebasesettingsAvailablemetabases(pageSize, pageNumber){
    var requestPath = '/api/v2/telephony/providers/edges/phonebasesettings/availablemetabases';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a certificate authority.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} certificateId - Certificate ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "certificate": "",
   "type": "",
   "services": [],
   "certificateDetails": [],
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesCertificateauthoritiesCertificateId = function getProvidersEdgesCertificateauthoritiesCertificateId(certificateId){
    var requestPath = '/api/v2/telephony/providers/edges/certificateauthorities/{certificateId}';
    var requestQuery = {};
    var requestBody;

    if(certificateId === undefined || certificateId === null){
      throw new Error('Missing required  parameter: certificateId');
    }
    requestPath = requestPath.replace('{certificateId}', certificateId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a certificate authority.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} certificateId - Certificate ID
  * @param {} body - Certificate authority
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "certificate": "",
   "type": "",
   "services": [],
   "certificateDetails": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "certificate": "",
   "type": "",
   "services": [],
   "certificateDetails": [],
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesCertificateauthoritiesCertificateId = function putProvidersEdgesCertificateauthoritiesCertificateId(certificateId, body){
    var requestPath = '/api/v2/telephony/providers/edges/certificateauthorities/{certificateId}';
    var requestQuery = {};
    var requestBody;

    if(certificateId === undefined || certificateId === null){
      throw new Error('Missing required  parameter: certificateId');
    }
    requestPath = requestPath.replace('{certificateId}', certificateId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a certificate authority.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} certificateId - Certificate ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesCertificateauthoritiesCertificateId = function deleteProvidersEdgesCertificateauthoritiesCertificateId(certificateId){
    var requestPath = '/api/v2/telephony/providers/edges/certificateauthorities/{certificateId}';
    var requestQuery = {};
    var requestBody;

    if(certificateId === undefined || certificateId === null){
      throw new Error('Missing required  parameter: certificateId');
    }
    requestPath = requestPath.replace('{certificateId}', certificateId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get Trunk Base Settings listing
  * @description Managed properties will not be returned unless the user is assigned the managed:all:all permission.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
  * @param {string} sortBy - Value by which to sort
  * @param {string} sortOrder - Sort order
  * @param {boolean} recordingEnabled - Filter trunks by recording enabled
  * @param {boolean} ignoreHidden - Set this to true to not receive trunk properties that are meant to be hidden or for internal system usage only.
  * @param {boolean} managed - Filter by managed
  * @param {array} expand - Fields to expand in the response, comma-separated Valid Values: properties
  * @param {string} name - Name of the TrunkBase to filter by
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesTrunkbasesettings = function getProvidersEdgesTrunkbasesettings(pageNumber, pageSize, sortBy, sortOrder, recordingEnabled, ignoreHidden, managed, expand, name){
    var requestPath = '/api/v2/telephony/providers/edges/trunkbasesettings';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageNumber"] = pageNumber;
    requestQuery["pageSize"] = pageSize;
    requestQuery["sortBy"] = sortBy;
    requestQuery["sortOrder"] = sortOrder;
    requestQuery["recordingEnabled"] = recordingEnabled;
    requestQuery["ignoreHidden"] = ignoreHidden;
    requestQuery["managed"] = managed;
    requestQuery["expand"] = expand;
    requestQuery["name"] = name;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a Trunk Base Settings object
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {} body - Trunk base settings
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "trunkMetabase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {},
   "trunkType": "",
   "managed": true
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "trunkMetabase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {},
   "trunkType": "",
   "managed": true,
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesTrunkbasesettings = function postProvidersEdgesTrunkbasesettings(body){
    var requestPath = '/api/v2/telephony/providers/edges/trunkbasesettings';
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
  * @summary Get a listing of DIDs
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
  * @param {string} phoneNumber - Filter by phoneNumber
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesDids = function getProvidersEdgesDids(pageSize, pageNumber, sortBy, sortOrder, phoneNumber){
    var requestPath = '/api/v2/telephony/providers/edges/dids';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["sortBy"] = sortBy;
    requestQuery["sortOrder"] = sortOrder;
    requestQuery["phoneNumber"] = phoneNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Unpair an Edge
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeId - Edge Id
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesEdgeIdUnpair = function postProvidersEdgesEdgeIdUnpair(edgeId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/unpair';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Line instance template based on a Line Base Settings object. This object can then be modified and saved as a new Line instance
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} lineBaseSettingsId - The id of a Line Base Settings object upon which to base this Line
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "properties": {},
   "edgeGroup": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "template": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lineBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "primaryEdge": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "interfaces": [],
      "make": "",
      "model": "",
      "apiVersion": "",
      "softwareVersion": "",
      "softwareVersionTimestamp": "",
      "softwareVersionPlatform": "",
      "softwareVersionConfiguration": "",
      "fullSoftwareVersion": "",
      "pairingId": "",
      "fingerprint": "",
      "fingerprintHint": "",
      "currentVersion": "",
      "stagedVersion": "",
      "patch": "",
      "statusCode": "",
      "edgeGroup": {},
      "site": {},
      "softwareStatus": {},
      "onlineStatus": "",
      "serialNumber": "",
      "physicalEdge": true,
      "managed": true,
      "edgeDeploymentType": "",
      "callDrainingState": "",
      "conversationCount": 0,
      "selfUri": ""
   },
   "secondaryEdge": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "interfaces": [],
      "make": "",
      "model": "",
      "apiVersion": "",
      "softwareVersion": "",
      "softwareVersionTimestamp": "",
      "softwareVersionPlatform": "",
      "softwareVersionConfiguration": "",
      "fullSoftwareVersion": "",
      "pairingId": "",
      "fingerprint": "",
      "fingerprintHint": "",
      "currentVersion": "",
      "stagedVersion": "",
      "patch": "",
      "statusCode": "",
      "edgeGroup": {},
      "site": {},
      "softwareStatus": {},
      "onlineStatus": "",
      "serialNumber": "",
      "physicalEdge": true,
      "managed": true,
      "edgeDeploymentType": "",
      "callDrainingState": "",
      "conversationCount": 0,
      "selfUri": ""
   },
   "loggedInUser": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "defaultForUser": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesLinesTemplate = function getProvidersEdgesLinesTemplate(lineBaseSettingsId){
    var requestPath = '/api/v2/telephony/providers/edges/lines/template';
    var requestQuery = {};
    var requestBody;

    if(lineBaseSettingsId === undefined || lineBaseSettingsId === null){
      throw new Error('Missing required  parameter: lineBaseSettingsId');
    }
    requestQuery["lineBaseSettingsId"] = lineBaseSettingsId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Validates a street address
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {} body - Address
  * @example
  * Body Example:
  * {
   "address": {
      "country": "",
      "A1": "",
      "A3": "",
      "RD": "",
      "HNO": "",
      "LOC": "",
      "NAM": "",
      "PC": ""
   }
}
  * @example
  * 200 Response Example:
  * {
   "valid": true,
   "response": {
      "messageReturned": [],
      "status": ""
   }
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesAddressvalidation = function postProvidersEdgesAddressvalidation(body){
    var requestPath = '/api/v2/telephony/providers/edges/addressvalidation';
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
  * @summary Lists available schema categories (Deprecated)
  * @memberOf TelephonyProvidersEdgeApi
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
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getSchemasEdgesVnext = function getSchemasEdgesVnext(pageSize, pageNumber){
    var requestPath = '/api/v2/configuration/schemas/edges/vnext';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a DID Pool by ID.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} didPoolId - DID pool ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "startPhoneNumber": "",
   "endPhoneNumber": "",
   "comments": "",
   "provider": "",
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesDidpoolsDidpoolId = function getProvidersEdgesDidpoolsDidpoolId(didPoolId){
    var requestPath = '/api/v2/telephony/providers/edges/didpools/{didPoolId}';
    var requestQuery = {};
    var requestBody;

    if(didPoolId === undefined || didPoolId === null){
      throw new Error('Missing required  parameter: didPoolId');
    }
    requestPath = requestPath.replace('{didPoolId}', didPoolId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a DID Pool by ID.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} didPoolId - DID pool ID
  * @param {} body - DID pool
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "startPhoneNumber": "",
   "endPhoneNumber": "",
   "comments": "",
   "provider": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "startPhoneNumber": "",
   "endPhoneNumber": "",
   "comments": "",
   "provider": "",
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesDidpoolsDidpoolId = function putProvidersEdgesDidpoolsDidpoolId(didPoolId, body){
    var requestPath = '/api/v2/telephony/providers/edges/didpools/{didPoolId}';
    var requestQuery = {};
    var requestBody;

    if(didPoolId === undefined || didPoolId === null){
      throw new Error('Missing required  parameter: didPoolId');
    }
    requestPath = requestPath.replace('{didPoolId}', didPoolId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a DID Pool by ID.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} didPoolId - DID pool ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesDidpoolsDidpoolId = function deleteProvidersEdgesDidpoolsDidpoolId(didPoolId){
    var requestPath = '/api/v2/telephony/providers/edges/didpools/{didPoolId}';
    var requestQuery = {};
    var requestBody;

    if(didPoolId === undefined || didPoolId === null){
      throw new Error('Missing required  parameter: didPoolId');
    }
    requestPath = requestPath.replace('{didPoolId}', didPoolId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get edge logical interfaces.
  * @description Retrieve the configured logical interfaces for a list edges. Only 100 edges can be requested at a time.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeIds - Comma separated list of Edge Id's
  * @param {array} expand - Field to expand in the response Valid Values: externalTrunkBaseAssignments, phoneTrunkBaseAssignments
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesLogicalinterfaces = function getProvidersEdgesLogicalinterfaces(edgeIds, expand){
    var requestPath = '/api/v2/telephony/providers/edges/logicalinterfaces';
    var requestQuery = {};
    var requestBody;

    if(edgeIds === undefined || edgeIds === null){
      throw new Error('Missing required  parameter: edgeIds');
    }
    requestQuery["edgeIds"] = edgeIds;
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get an edge logical interface
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeId - Edge ID
  * @param {string} interfaceId - Interface ID
  * @param {array} expand - Field to expand in the response Valid Values: externalTrunkBaseAssignments, phoneTrunkBaseAssignments
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "edgeUri": "",
   "edgeAssignedId": "",
   "friendlyName": "",
   "vlanTagId": 0,
   "hardwareAddress": "",
   "physicalAdapterId": "",
   "ifStatus": "",
   "interfaceType": "",
   "routes": [],
   "addresses": [],
   "ipv4Capabilities": {
      "enabled": true,
      "dhcp": true,
      "metric": 0,
      "autoMetric": true,
      "supportsMetric": true
   },
   "ipv6Capabilities": {
      "enabled": true,
      "dhcp": true,
      "metric": 0,
      "autoMetric": true,
      "supportsMetric": true
   },
   "currentState": "",
   "lastModifiedUserId": "",
   "lastModifiedCorrelationId": "",
   "commandResponses": [],
   "inheritPhoneTrunkBasesIPv4": true,
   "inheritPhoneTrunkBasesIPv6": true,
   "useForInternalEdgeCommunication": true,
   "externalTrunkBaseAssignments": [],
   "phoneTrunkBaseAssignments": [],
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgeIdLogicalinterfacesInterfaceId = function getProvidersEdgesEdgeIdLogicalinterfacesInterfaceId(edgeId, interfaceId, expand){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(interfaceId === undefined || interfaceId === null){
      throw new Error('Missing required  parameter: interfaceId');
    }
    requestPath = requestPath.replace('{interfaceId}', interfaceId);
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an edge logical interface.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeId - Edge ID
  * @param {string} interfaceId - Interface ID
  * @param {} body - Logical interface
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "edgeUri": "",
   "edgeAssignedId": "",
   "friendlyName": "",
   "vlanTagId": 0,
   "hardwareAddress": "",
   "physicalAdapterId": "",
   "ifStatus": "",
   "routes": [],
   "addresses": [],
   "ipv4Capabilities": {
      "enabled": true,
      "dhcp": true,
      "metric": 0,
      "autoMetric": true
   },
   "ipv6Capabilities": {
      "enabled": true,
      "dhcp": true,
      "metric": 0,
      "autoMetric": true
   },
   "currentState": "",
   "lastModifiedUserId": "",
   "lastModifiedCorrelationId": "",
   "commandResponses": [],
   "inheritPhoneTrunkBasesIPv4": true,
   "inheritPhoneTrunkBasesIPv6": true,
   "useForInternalEdgeCommunication": true,
   "externalTrunkBaseAssignments": [],
   "phoneTrunkBaseAssignments": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "edgeUri": "",
   "edgeAssignedId": "",
   "friendlyName": "",
   "vlanTagId": 0,
   "hardwareAddress": "",
   "physicalAdapterId": "",
   "ifStatus": "",
   "interfaceType": "",
   "routes": [],
   "addresses": [],
   "ipv4Capabilities": {
      "enabled": true,
      "dhcp": true,
      "metric": 0,
      "autoMetric": true,
      "supportsMetric": true
   },
   "ipv6Capabilities": {
      "enabled": true,
      "dhcp": true,
      "metric": 0,
      "autoMetric": true,
      "supportsMetric": true
   },
   "currentState": "",
   "lastModifiedUserId": "",
   "lastModifiedCorrelationId": "",
   "commandResponses": [],
   "inheritPhoneTrunkBasesIPv4": true,
   "inheritPhoneTrunkBasesIPv6": true,
   "useForInternalEdgeCommunication": true,
   "externalTrunkBaseAssignments": [],
   "phoneTrunkBaseAssignments": [],
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesEdgeIdLogicalinterfacesInterfaceId = function putProvidersEdgesEdgeIdLogicalinterfacesInterfaceId(edgeId, interfaceId, body){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(interfaceId === undefined || interfaceId === null){
      throw new Error('Missing required  parameter: interfaceId');
    }
    requestPath = requestPath.replace('{interfaceId}', interfaceId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an edge logical interface
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeId - Edge ID
  * @param {string} interfaceId - Interface ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesEdgeIdLogicalinterfacesInterfaceId = function deleteProvidersEdgesEdgeIdLogicalinterfacesInterfaceId(edgeId, interfaceId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(interfaceId === undefined || interfaceId === null){
      throw new Error('Missing required  parameter: interfaceId');
    }
    requestPath = requestPath.replace('{interfaceId}', interfaceId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get an extension by ID.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} extensionId - Extension ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "number": "",
   "owner": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "extensionPool": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "ownerType": "",
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesExtensionsExtensionId = function getProvidersEdgesExtensionsExtensionId(extensionId){
    var requestPath = '/api/v2/telephony/providers/edges/extensions/{extensionId}';
    var requestQuery = {};
    var requestBody;

    if(extensionId === undefined || extensionId === null){
      throw new Error('Missing required  parameter: extensionId');
    }
    requestPath = requestPath.replace('{extensionId}', extensionId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an extension by ID.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} extensionId - Extension ID
  * @param {} body - Extension
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "number": "",
   "owner": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "extensionPool": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "ownerType": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "number": "",
   "owner": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "extensionPool": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "ownerType": "",
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesExtensionsExtensionId = function putProvidersEdgesExtensionsExtensionId(extensionId, body){
    var requestPath = '/api/v2/telephony/providers/edges/extensions/{extensionId}';
    var requestQuery = {};
    var requestBody;

    if(extensionId === undefined || extensionId === null){
      throw new Error('Missing required  parameter: extensionId');
    }
    requestPath = requestPath.replace('{extensionId}', extensionId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Gets all the available software versions for this edge.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeId - Edge ID
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgeIdSoftwareversions = function getProvidersEdgesEdgeIdSoftwareversions(edgeId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/softwareversions';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of Number Plans for this Site.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} siteId - Site ID
  * @example
  * 200 Response Example:
  * [
 {
  "id": "",
  "name": "",
  "description": "",
  "version": 0,
  "dateCreated": "",
  "dateModified": "",
  "modifiedBy": "",
  "createdBy": "",
  "state": "",
  "modifiedByApp": "",
  "createdByApp": "",
  "match": "",
  "normalizedFormat": "",
  "priority": 0,
  "numbers": [],
  "digitLength": {
   "start": "",
   "end": ""
  },
  "classification": "",
  "matchType": "",
  "selfUri": ""
 }
]
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesSitesSiteIdNumberplans = function getProvidersEdgesSitesSiteIdNumberplans(siteId){
    var requestPath = '/api/v2/telephony/providers/edges/sites/{siteId}/numberplans';
    var requestQuery = {};
    var requestBody;

    if(siteId === undefined || siteId === null){
      throw new Error('Missing required  parameter: siteId');
    }
    requestPath = requestPath.replace('{siteId}', siteId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the list of Number Plans.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} siteId - Site ID
  * @param {} body - List of number plans
  * @example
  * Body Example:
  * [
 {
  "name": "",
  "description": "",
  "version": 0,
  "dateCreated": "",
  "dateModified": "",
  "modifiedBy": "",
  "createdBy": "",
  "state": "",
  "modifiedByApp": "",
  "createdByApp": "",
  "match": "",
  "normalizedFormat": "",
  "priority": 0,
  "numbers": [],
  "digitLength": {
   "start": "",
   "end": ""
  },
  "classification": "",
  "matchType": ""
 }
]
  * @example
  * 200 Response Example:
  * [
 {
  "id": "",
  "name": "",
  "description": "",
  "version": 0,
  "dateCreated": "",
  "dateModified": "",
  "modifiedBy": "",
  "createdBy": "",
  "state": "",
  "modifiedByApp": "",
  "createdByApp": "",
  "match": "",
  "normalizedFormat": "",
  "priority": 0,
  "numbers": [],
  "digitLength": {
   "start": "",
   "end": ""
  },
  "classification": "",
  "matchType": "",
  "selfUri": ""
 }
]
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesSitesSiteIdNumberplans = function putProvidersEdgesSitesSiteIdNumberplans(siteId, body){
    var requestPath = '/api/v2/telephony/providers/edges/sites/{siteId}/numberplans';
    var requestQuery = {};
    var requestBody;

    if(siteId === undefined || siteId === null){
      throw new Error('Missing required  parameter: siteId');
    }
    requestPath = requestPath.replace('{siteId}', siteId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of edges.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} name - Name
  * @param {string} siteid - Filter by site.id
  * @param {string} edgeGroupid - Filter by edgeGroup.id
  * @param {string} sortBy - Sort by
  * @param {boolean} managed - Filter by managed
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdges = function getProvidersEdges(pageSize, pageNumber, name, siteid, edgeGroupid, sortBy, managed){
    var requestPath = '/api/v2/telephony/providers/edges';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["name"] = name;
    requestQuery["site.id"] = siteid;
    requestQuery["edgeGroup.id"] = edgeGroupid;
    requestQuery["sortBy"] = sortBy;
    requestQuery["managed"] = managed;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create an edge.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {} body - Edge
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "interfaces": [],
   "make": "",
   "model": "",
   "apiVersion": "",
   "softwareVersion": "",
   "softwareVersionTimestamp": "",
   "softwareVersionPlatform": "",
   "softwareVersionConfiguration": "",
   "fullSoftwareVersion": "",
   "pairingId": "",
   "fingerprint": "",
   "fingerprintHint": "",
   "currentVersion": "",
   "stagedVersion": "",
   "patch": "",
   "statusCode": "",
   "edgeGroup": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "managed": true,
      "edgeTrunkBaseAssignment": {},
      "phoneTrunkBases": []
   },
   "site": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "primarySites": [],
      "secondarySites": [],
      "primaryEdges": [],
      "secondaryEdges": [],
      "addresses": [],
      "edges": [],
      "edgeAutoUpdateConfig": {},
      "location": {},
      "managed": true
   },
   "softwareStatus": {
      "version": {},
      "maxDownloadRate": 0,
      "downloadStartTime": "",
      "executeStartTime": "",
      "executeStopTime": "",
      "executeOnIdle": true,
      "status": "",
      "edgeUri": "",
      "callDrainingWaitTimeSeconds": 0,
      "current": true
   },
   "onlineStatus": "",
   "serialNumber": "",
   "physicalEdge": true,
   "managed": true,
   "edgeDeploymentType": "",
   "callDrainingState": "",
   "conversationCount": 0
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "interfaces": [],
   "make": "",
   "model": "",
   "apiVersion": "",
   "softwareVersion": "",
   "softwareVersionTimestamp": "",
   "softwareVersionPlatform": "",
   "softwareVersionConfiguration": "",
   "fullSoftwareVersion": "",
   "pairingId": "",
   "fingerprint": "",
   "fingerprintHint": "",
   "currentVersion": "",
   "stagedVersion": "",
   "patch": "",
   "statusCode": "",
   "edgeGroup": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "managed": true,
      "edgeTrunkBaseAssignment": {},
      "phoneTrunkBases": [],
      "selfUri": ""
   },
   "site": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "primarySites": [],
      "secondarySites": [],
      "primaryEdges": [],
      "secondaryEdges": [],
      "addresses": [],
      "edges": [],
      "edgeAutoUpdateConfig": {},
      "location": {},
      "managed": true,
      "selfUri": ""
   },
   "softwareStatus": {
      "version": {},
      "maxDownloadRate": 0,
      "downloadStartTime": "",
      "executeStartTime": "",
      "executeStopTime": "",
      "executeOnIdle": true,
      "status": "",
      "edgeUri": "",
      "callDrainingWaitTimeSeconds": 0,
      "current": true
   },
   "onlineStatus": "",
   "serialNumber": "",
   "physicalEdge": true,
   "managed": true,
   "edgeDeploymentType": "",
   "callDrainingState": "",
   "conversationCount": 0,
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdges = function postProvidersEdges(body){
    var requestPath = '/api/v2/telephony/providers/edges';
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
  * @summary Get a Phone by ID
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} phoneId - Phone ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "phoneBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lineBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "status": {
      "id": "",
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "eventCreationTime": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {},
      "selfUri": ""
   },
   "secondaryStatus": {
      "id": "",
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "eventCreationTime": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {},
      "selfUri": ""
   },
   "userAgentInfo": {
      "firmwareVersion": "",
      "manufacturer": "",
      "model": ""
   },
   "properties": {},
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true,
      "noRebalance": true
   },
   "webRtcUser": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "primaryEdge": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "interfaces": [],
      "make": "",
      "model": "",
      "apiVersion": "",
      "softwareVersion": "",
      "softwareVersionTimestamp": "",
      "softwareVersionPlatform": "",
      "softwareVersionConfiguration": "",
      "fullSoftwareVersion": "",
      "pairingId": "",
      "fingerprint": "",
      "fingerprintHint": "",
      "currentVersion": "",
      "stagedVersion": "",
      "patch": "",
      "statusCode": "",
      "edgeGroup": {},
      "site": {},
      "softwareStatus": {},
      "onlineStatus": "",
      "serialNumber": "",
      "physicalEdge": true,
      "managed": true,
      "edgeDeploymentType": "",
      "callDrainingState": "",
      "conversationCount": 0,
      "selfUri": ""
   },
   "secondaryEdge": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "interfaces": [],
      "make": "",
      "model": "",
      "apiVersion": "",
      "softwareVersion": "",
      "softwareVersionTimestamp": "",
      "softwareVersionPlatform": "",
      "softwareVersionConfiguration": "",
      "fullSoftwareVersion": "",
      "pairingId": "",
      "fingerprint": "",
      "fingerprintHint": "",
      "currentVersion": "",
      "stagedVersion": "",
      "patch": "",
      "statusCode": "",
      "edgeGroup": {},
      "site": {},
      "softwareStatus": {},
      "onlineStatus": "",
      "serialNumber": "",
      "physicalEdge": true,
      "managed": true,
      "edgeDeploymentType": "",
      "callDrainingState": "",
      "conversationCount": 0,
      "selfUri": ""
   },
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesPhonesPhoneId = function getProvidersEdgesPhonesPhoneId(phoneId){
    var requestPath = '/api/v2/telephony/providers/edges/phones/{phoneId}';
    var requestQuery = {};
    var requestBody;

    if(phoneId === undefined || phoneId === null){
      throw new Error('Missing required  parameter: phoneId');
    }
    requestPath = requestPath.replace('{phoneId}', phoneId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a Phone by ID
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} phoneId - Phone ID
  * @param {} body - Phone
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "phoneBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lineBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "status": {
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "eventCreationTime": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {}
   },
   "secondaryStatus": {
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "eventCreationTime": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {}
   },
   "properties": {},
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true,
      "noRebalance": true
   },
   "webRtcUser": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "primaryEdge": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "interfaces": [],
      "make": "",
      "model": "",
      "apiVersion": "",
      "softwareVersion": "",
      "softwareVersionTimestamp": "",
      "softwareVersionPlatform": "",
      "softwareVersionConfiguration": "",
      "fullSoftwareVersion": "",
      "pairingId": "",
      "fingerprint": "",
      "fingerprintHint": "",
      "currentVersion": "",
      "stagedVersion": "",
      "patch": "",
      "statusCode": "",
      "edgeGroup": {},
      "site": {},
      "softwareStatus": {},
      "onlineStatus": "",
      "serialNumber": "",
      "physicalEdge": true,
      "managed": true,
      "edgeDeploymentType": "",
      "callDrainingState": "",
      "conversationCount": 0
   },
   "secondaryEdge": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "interfaces": [],
      "make": "",
      "model": "",
      "apiVersion": "",
      "softwareVersion": "",
      "softwareVersionTimestamp": "",
      "softwareVersionPlatform": "",
      "softwareVersionConfiguration": "",
      "fullSoftwareVersion": "",
      "pairingId": "",
      "fingerprint": "",
      "fingerprintHint": "",
      "currentVersion": "",
      "stagedVersion": "",
      "patch": "",
      "statusCode": "",
      "edgeGroup": {},
      "site": {},
      "softwareStatus": {},
      "onlineStatus": "",
      "serialNumber": "",
      "physicalEdge": true,
      "managed": true,
      "edgeDeploymentType": "",
      "callDrainingState": "",
      "conversationCount": 0
   }
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "phoneBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lineBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "status": {
      "id": "",
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "eventCreationTime": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {},
      "selfUri": ""
   },
   "secondaryStatus": {
      "id": "",
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "eventCreationTime": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {},
      "selfUri": ""
   },
   "userAgentInfo": {
      "firmwareVersion": "",
      "manufacturer": "",
      "model": ""
   },
   "properties": {},
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true,
      "noRebalance": true
   },
   "webRtcUser": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "primaryEdge": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "interfaces": [],
      "make": "",
      "model": "",
      "apiVersion": "",
      "softwareVersion": "",
      "softwareVersionTimestamp": "",
      "softwareVersionPlatform": "",
      "softwareVersionConfiguration": "",
      "fullSoftwareVersion": "",
      "pairingId": "",
      "fingerprint": "",
      "fingerprintHint": "",
      "currentVersion": "",
      "stagedVersion": "",
      "patch": "",
      "statusCode": "",
      "edgeGroup": {},
      "site": {},
      "softwareStatus": {},
      "onlineStatus": "",
      "serialNumber": "",
      "physicalEdge": true,
      "managed": true,
      "edgeDeploymentType": "",
      "callDrainingState": "",
      "conversationCount": 0,
      "selfUri": ""
   },
   "secondaryEdge": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "interfaces": [],
      "make": "",
      "model": "",
      "apiVersion": "",
      "softwareVersion": "",
      "softwareVersionTimestamp": "",
      "softwareVersionPlatform": "",
      "softwareVersionConfiguration": "",
      "fullSoftwareVersion": "",
      "pairingId": "",
      "fingerprint": "",
      "fingerprintHint": "",
      "currentVersion": "",
      "stagedVersion": "",
      "patch": "",
      "statusCode": "",
      "edgeGroup": {},
      "site": {},
      "softwareStatus": {},
      "onlineStatus": "",
      "serialNumber": "",
      "physicalEdge": true,
      "managed": true,
      "edgeDeploymentType": "",
      "callDrainingState": "",
      "conversationCount": 0,
      "selfUri": ""
   },
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesPhonesPhoneId = function putProvidersEdgesPhonesPhoneId(phoneId, body){
    var requestPath = '/api/v2/telephony/providers/edges/phones/{phoneId}';
    var requestQuery = {};
    var requestBody;

    if(phoneId === undefined || phoneId === null){
      throw new Error('Missing required  parameter: phoneId');
    }
    requestPath = requestPath.replace('{phoneId}', phoneId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a Phone by ID
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} phoneId - Phone ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesPhonesPhoneId = function deleteProvidersEdgesPhonesPhoneId(phoneId){
    var requestPath = '/api/v2/telephony/providers/edges/phones/{phoneId}';
    var requestQuery = {};
    var requestBody;

    if(phoneId === undefined || phoneId === null){
      throw new Error('Missing required  parameter: phoneId');
    }
    requestPath = requestPath.replace('{phoneId}', phoneId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get endpoints
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} name - Name
  * @param {string} sortBy - Sort by
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEndpoints = function getProvidersEdgesEndpoints(pageSize, pageNumber, name, sortBy){
    var requestPath = '/api/v2/telephony/providers/edges/endpoints';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["name"] = name;
    requestQuery["sortBy"] = sortBy;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create endpoint
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {} body - EndpointTemplate
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "count": 0,
   "properties": {},
   "schema": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "enabled": true,
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dids": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "count": 0,
   "properties": {},
   "schema": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "enabled": true,
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dids": [],
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesEndpoints = function postProvidersEdgesEndpoints(body){
    var requestPath = '/api/v2/telephony/providers/edges/endpoints';
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
  * @summary Get a Phone instance template based on a Phone Base Settings object. This object can then be modified and saved as a new Phone instance
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} phoneBaseSettingsId - The id of a Phone Base Settings object upon which to base this Phone
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "phoneBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lineBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "status": {
      "id": "",
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "eventCreationTime": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {},
      "selfUri": ""
   },
   "secondaryStatus": {
      "id": "",
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "eventCreationTime": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {},
      "selfUri": ""
   },
   "userAgentInfo": {
      "firmwareVersion": "",
      "manufacturer": "",
      "model": ""
   },
   "properties": {},
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true,
      "noRebalance": true
   },
   "webRtcUser": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "primaryEdge": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "interfaces": [],
      "make": "",
      "model": "",
      "apiVersion": "",
      "softwareVersion": "",
      "softwareVersionTimestamp": "",
      "softwareVersionPlatform": "",
      "softwareVersionConfiguration": "",
      "fullSoftwareVersion": "",
      "pairingId": "",
      "fingerprint": "",
      "fingerprintHint": "",
      "currentVersion": "",
      "stagedVersion": "",
      "patch": "",
      "statusCode": "",
      "edgeGroup": {},
      "site": {},
      "softwareStatus": {},
      "onlineStatus": "",
      "serialNumber": "",
      "physicalEdge": true,
      "managed": true,
      "edgeDeploymentType": "",
      "callDrainingState": "",
      "conversationCount": 0,
      "selfUri": ""
   },
   "secondaryEdge": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "interfaces": [],
      "make": "",
      "model": "",
      "apiVersion": "",
      "softwareVersion": "",
      "softwareVersionTimestamp": "",
      "softwareVersionPlatform": "",
      "softwareVersionConfiguration": "",
      "fullSoftwareVersion": "",
      "pairingId": "",
      "fingerprint": "",
      "fingerprintHint": "",
      "currentVersion": "",
      "stagedVersion": "",
      "patch": "",
      "statusCode": "",
      "edgeGroup": {},
      "site": {},
      "softwareStatus": {},
      "onlineStatus": "",
      "serialNumber": "",
      "physicalEdge": true,
      "managed": true,
      "edgeDeploymentType": "",
      "callDrainingState": "",
      "conversationCount": 0,
      "selfUri": ""
   },
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesPhonesTemplate = function getProvidersEdgesPhonesTemplate(phoneBaseSettingsId){
    var requestPath = '/api/v2/telephony/providers/edges/phones/template';
    var requestQuery = {};
    var requestBody;

    if(phoneBaseSettingsId === undefined || phoneBaseSettingsId === null){
      throw new Error('Missing required  parameter: phoneBaseSettingsId');
    }
    requestQuery["phoneBaseSettingsId"] = phoneBaseSettingsId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Phone Base Settings instance template from a given make and model. This object can then be modified and saved as a new Phone Base Settings instance
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} phoneMetabaseId - The id of a metabase object upon which to base this Phone Base Settings
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "properties": {},
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true,
      "noRebalance": true
   },
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesPhonebasesettingsTemplate = function getProvidersEdgesPhonebasesettingsTemplate(phoneMetabaseId){
    var requestPath = '/api/v2/telephony/providers/edges/phonebasesettings/template';
    var requestQuery = {};
    var requestBody;

    if(phoneMetabaseId === undefined || phoneMetabaseId === null){
      throw new Error('Missing required  parameter: phoneMetabaseId');
    }
    requestQuery["phoneMetabaseId"] = phoneMetabaseId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of available languages.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "languages": []
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesAvailablelanguages = function getProvidersEdgesAvailablelanguages(){
    var requestPath = '/api/v2/telephony/providers/edges/availablelanguages';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a job to upload a list of Edge logs.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeId - Edge ID
  * @param {} body - EdgeLogsJobRequest
  * @example
  * Body Example:
  * {
   "path": "",
   "query": "",
   "recurse": true
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesEdgeIdLogsJobs = function postProvidersEdgesEdgeIdLogsJobs(edgeId, body){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/logs/jobs';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of available trunks.
  * @description Trunks are created by assigning trunk base settings to an Edge or Edge Group.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
  * @param {string} sortBy - Value by which to sort
  * @param {string} sortOrder - Sort order
  * @param {string} edgeid - Filter by Edge Ids
  * @param {string} trunkBaseid - Filter by Trunk Base Ids
  * @param {string} trunkType - Filter by a Trunk type
  EXTERNAL,
  PHONE,
  EDGE,
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesTrunks = function getProvidersEdgesTrunks(pageNumber, pageSize, sortBy, sortOrder, edgeid, trunkBaseid, trunkType){
    var requestPath = '/api/v2/telephony/providers/edges/trunks';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageNumber"] = pageNumber;
    requestQuery["pageSize"] = pageSize;
    requestQuery["sortBy"] = sortBy;
    requestQuery["sortOrder"] = sortOrder;
    requestQuery["edge.id"] = edgeid;
    requestQuery["trunkBase.id"] = trunkBaseid;
    requestQuery["trunkType"] = trunkType;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get outbound routes
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} siteId - Site ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} name - Name
  * @param {string} sortBy - Sort by
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesSitesSiteIdOutboundroutes = function getProvidersEdgesSitesSiteIdOutboundroutes(siteId, pageSize, pageNumber, name, sortBy){
    var requestPath = '/api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes';
    var requestQuery = {};
    var requestBody;

    if(siteId === undefined || siteId === null){
      throw new Error('Missing required  parameter: siteId');
    }
    requestPath = requestPath.replace('{siteId}', siteId);
    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["name"] = name;
    requestQuery["sortBy"] = sortBy;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create outbound route
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} siteId - Site ID
  * @param {} body - OutboundRoute
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "classificationTypes": [],
   "enabled": true,
   "distribution": "",
   "externalTrunkBases": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "classificationTypes": [],
   "enabled": true,
   "distribution": "",
   "externalTrunkBases": [],
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesSitesSiteIdOutboundroutes = function postProvidersEdgesSitesSiteIdOutboundroutes(siteId, body){
    var requestPath = '/api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes';
    var requestQuery = {};
    var requestBody;

    if(siteId === undefined || siteId === null){
      throw new Error('Missing required  parameter: siteId');
    }
    requestPath = requestPath.replace('{siteId}', siteId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of Phone Instances
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
  * @param {string} sortBy - Value by which to sort
  * @param {string} sortOrder - Sort order
  * @param {string} siteid - Filter by site.id
  * @param {string} webRtcUserid - Filter by webRtcUser.id
  * @param {string} phoneBaseSettingsid - Filter by phoneBaseSettings.id
  * @param {string} linesloggedInUserid - Filter by lines.loggedInUser.id
  * @param {string} linesdefaultForUserid - Filter by lines.defaultForUser.id
  * @param {string} phone_hardwareId - Filter by phone_hardwareId
  * @param {string} linesid - Filter by lines.id
  * @param {string} linesname - Filter by lines.name
  * @param {array} expand - Fields to expand in the response, comma-separated Valid Values: properties, site, status, status.primaryEdgesStatus, status.secondaryEdgesStatus, phoneBaseSettings, lines
  * @param {array} fields - Fields and properties to get, comma-separated Valid Values: webRtcUser, properties.*, lines.loggedInUser, lines.defaultForUser
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesPhones = function getProvidersEdgesPhones(pageNumber, pageSize, sortBy, sortOrder, siteid, webRtcUserid, phoneBaseSettingsid, linesloggedInUserid, linesdefaultForUserid, phone_hardwareId, linesid, linesname, expand, fields){
    var requestPath = '/api/v2/telephony/providers/edges/phones';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageNumber"] = pageNumber;
    requestQuery["pageSize"] = pageSize;
    requestQuery["sortBy"] = sortBy;
    requestQuery["sortOrder"] = sortOrder;
    requestQuery["site.id"] = siteid;
    requestQuery["webRtcUser.id"] = webRtcUserid;
    requestQuery["phoneBaseSettings.id"] = phoneBaseSettingsid;
    requestQuery["lines.loggedInUser.id"] = linesloggedInUserid;
    requestQuery["lines.defaultForUser.id"] = linesdefaultForUserid;
    requestQuery["phone_hardwareId"] = phone_hardwareId;
    requestQuery["lines.id"] = linesid;
    requestQuery["lines.name"] = linesname;
    requestQuery["expand"] = expand;
    requestQuery["fields"] = fields;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a new Phone
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {} body - Phone
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "phoneBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lineBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "status": {
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "eventCreationTime": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {}
   },
   "secondaryStatus": {
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "eventCreationTime": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {}
   },
   "properties": {},
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true,
      "noRebalance": true
   },
   "webRtcUser": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "primaryEdge": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "interfaces": [],
      "make": "",
      "model": "",
      "apiVersion": "",
      "softwareVersion": "",
      "softwareVersionTimestamp": "",
      "softwareVersionPlatform": "",
      "softwareVersionConfiguration": "",
      "fullSoftwareVersion": "",
      "pairingId": "",
      "fingerprint": "",
      "fingerprintHint": "",
      "currentVersion": "",
      "stagedVersion": "",
      "patch": "",
      "statusCode": "",
      "edgeGroup": {},
      "site": {},
      "softwareStatus": {},
      "onlineStatus": "",
      "serialNumber": "",
      "physicalEdge": true,
      "managed": true,
      "edgeDeploymentType": "",
      "callDrainingState": "",
      "conversationCount": 0
   },
   "secondaryEdge": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "interfaces": [],
      "make": "",
      "model": "",
      "apiVersion": "",
      "softwareVersion": "",
      "softwareVersionTimestamp": "",
      "softwareVersionPlatform": "",
      "softwareVersionConfiguration": "",
      "fullSoftwareVersion": "",
      "pairingId": "",
      "fingerprint": "",
      "fingerprintHint": "",
      "currentVersion": "",
      "stagedVersion": "",
      "patch": "",
      "statusCode": "",
      "edgeGroup": {},
      "site": {},
      "softwareStatus": {},
      "onlineStatus": "",
      "serialNumber": "",
      "physicalEdge": true,
      "managed": true,
      "edgeDeploymentType": "",
      "callDrainingState": "",
      "conversationCount": 0
   }
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "phoneBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lineBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "status": {
      "id": "",
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "eventCreationTime": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {},
      "selfUri": ""
   },
   "secondaryStatus": {
      "id": "",
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "eventCreationTime": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {},
      "selfUri": ""
   },
   "userAgentInfo": {
      "firmwareVersion": "",
      "manufacturer": "",
      "model": ""
   },
   "properties": {},
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true,
      "noRebalance": true
   },
   "webRtcUser": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "primaryEdge": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "interfaces": [],
      "make": "",
      "model": "",
      "apiVersion": "",
      "softwareVersion": "",
      "softwareVersionTimestamp": "",
      "softwareVersionPlatform": "",
      "softwareVersionConfiguration": "",
      "fullSoftwareVersion": "",
      "pairingId": "",
      "fingerprint": "",
      "fingerprintHint": "",
      "currentVersion": "",
      "stagedVersion": "",
      "patch": "",
      "statusCode": "",
      "edgeGroup": {},
      "site": {},
      "softwareStatus": {},
      "onlineStatus": "",
      "serialNumber": "",
      "physicalEdge": true,
      "managed": true,
      "edgeDeploymentType": "",
      "callDrainingState": "",
      "conversationCount": 0,
      "selfUri": ""
   },
   "secondaryEdge": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "interfaces": [],
      "make": "",
      "model": "",
      "apiVersion": "",
      "softwareVersion": "",
      "softwareVersionTimestamp": "",
      "softwareVersionPlatform": "",
      "softwareVersionConfiguration": "",
      "fullSoftwareVersion": "",
      "pairingId": "",
      "fingerprint": "",
      "fingerprintHint": "",
      "currentVersion": "",
      "stagedVersion": "",
      "patch": "",
      "statusCode": "",
      "edgeGroup": {},
      "site": {},
      "softwareStatus": {},
      "onlineStatus": "",
      "serialNumber": "",
      "physicalEdge": true,
      "managed": true,
      "edgeDeploymentType": "",
      "callDrainingState": "",
      "conversationCount": 0,
      "selfUri": ""
   },
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesPhones = function postProvidersEdgesPhones(body){
    var requestPath = '/api/v2/telephony/providers/edges/phones';
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
  * @summary Get an Edge logs job.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeId - Edge ID
  * @param {string} jobId - Job ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "files": [],
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgeIdLogsJobsJobId = function getProvidersEdgesEdgeIdLogsJobsJobId(edgeId, jobId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId}';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(jobId === undefined || jobId === null){
      throw new Error('Missing required  parameter: jobId');
    }
    requestPath = requestPath.replace('{jobId}', jobId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Number Plan by ID.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} siteId - Site ID
  * @param {string} numberPlanId - Number Plan ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "match": "",
   "normalizedFormat": "",
   "priority": 0,
   "numbers": [],
   "digitLength": {
      "start": "",
      "end": ""
   },
   "classification": "",
   "matchType": "",
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesSitesSiteIdNumberplansNumberplanId = function getProvidersEdgesSitesSiteIdNumberplansNumberplanId(siteId, numberPlanId){
    var requestPath = '/api/v2/telephony/providers/edges/sites/{siteId}/numberplans/{numberPlanId}';
    var requestQuery = {};
    var requestBody;

    if(siteId === undefined || siteId === null){
      throw new Error('Missing required  parameter: siteId');
    }
    requestPath = requestPath.replace('{siteId}', siteId);
    if(numberPlanId === undefined || numberPlanId === null){
      throw new Error('Missing required  parameter: numberPlanId');
    }
    requestPath = requestPath.replace('{numberPlanId}', numberPlanId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Phone Base Settings object by ID
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} phoneBaseId - Phone base ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "properties": {},
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true,
      "noRebalance": true
   },
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesPhonebasesettingsPhonebaseId = function getProvidersEdgesPhonebasesettingsPhonebaseId(phoneBaseId){
    var requestPath = '/api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}';
    var requestQuery = {};
    var requestBody;

    if(phoneBaseId === undefined || phoneBaseId === null){
      throw new Error('Missing required  parameter: phoneBaseId');
    }
    requestPath = requestPath.replace('{phoneBaseId}', phoneBaseId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a Phone Base Settings by ID
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} phoneBaseId - Phone base ID
  * @param {} body - Phone base settings
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "properties": {},
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true,
      "noRebalance": true
   }
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "properties": {},
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true,
      "noRebalance": true
   },
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesPhonebasesettingsPhonebaseId = function putProvidersEdgesPhonebasesettingsPhonebaseId(phoneBaseId, body){
    var requestPath = '/api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}';
    var requestQuery = {};
    var requestBody;

    if(phoneBaseId === undefined || phoneBaseId === null){
      throw new Error('Missing required  parameter: phoneBaseId');
    }
    requestPath = requestPath.replace('{phoneBaseId}', phoneBaseId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a Phone Base Settings by ID
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} phoneBaseId - Phone base ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesPhonebasesettingsPhonebaseId = function deleteProvidersEdgesPhonebasesettingsPhonebaseId(phoneBaseId){
    var requestPath = '/api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}';
    var requestQuery = {};
    var requestBody;

    if(phoneBaseId === undefined || phoneBaseId === null){
      throw new Error('Missing required  parameter: phoneBaseId');
    }
    requestPath = requestPath.replace('{phoneBaseId}', phoneBaseId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Request that the specified fileIds be uploaded from the Edge.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeId - Edge ID
  * @param {string} jobId - Job ID
  * @param {} body - Log upload request
  * @example
  * Body Example:
  * {
   "fileIds": []
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesEdgeIdLogsJobsJobIdUpload = function postProvidersEdgesEdgeIdLogsJobsJobIdUpload(edgeId, jobId, body){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId}/upload';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(jobId === undefined || jobId === null){
      throw new Error('Missing required  parameter: jobId');
    }
    requestPath = requestPath.replace('{jobId}', jobId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Line by ID
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} lineId - Line ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "properties": {},
   "edgeGroup": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "template": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lineBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "primaryEdge": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "interfaces": [],
      "make": "",
      "model": "",
      "apiVersion": "",
      "softwareVersion": "",
      "softwareVersionTimestamp": "",
      "softwareVersionPlatform": "",
      "softwareVersionConfiguration": "",
      "fullSoftwareVersion": "",
      "pairingId": "",
      "fingerprint": "",
      "fingerprintHint": "",
      "currentVersion": "",
      "stagedVersion": "",
      "patch": "",
      "statusCode": "",
      "edgeGroup": {},
      "site": {},
      "softwareStatus": {},
      "onlineStatus": "",
      "serialNumber": "",
      "physicalEdge": true,
      "managed": true,
      "edgeDeploymentType": "",
      "callDrainingState": "",
      "conversationCount": 0,
      "selfUri": ""
   },
   "secondaryEdge": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "interfaces": [],
      "make": "",
      "model": "",
      "apiVersion": "",
      "softwareVersion": "",
      "softwareVersionTimestamp": "",
      "softwareVersionPlatform": "",
      "softwareVersionConfiguration": "",
      "fullSoftwareVersion": "",
      "pairingId": "",
      "fingerprint": "",
      "fingerprintHint": "",
      "currentVersion": "",
      "stagedVersion": "",
      "patch": "",
      "statusCode": "",
      "edgeGroup": {},
      "site": {},
      "softwareStatus": {},
      "onlineStatus": "",
      "serialNumber": "",
      "physicalEdge": true,
      "managed": true,
      "edgeDeploymentType": "",
      "callDrainingState": "",
      "conversationCount": 0,
      "selfUri": ""
   },
   "loggedInUser": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "defaultForUser": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesLinesLineId = function getProvidersEdgesLinesLineId(lineId){
    var requestPath = '/api/v2/telephony/providers/edges/lines/{lineId}';
    var requestQuery = {};
    var requestBody;

    if(lineId === undefined || lineId === null){
      throw new Error('Missing required  parameter: lineId');
    }
    requestPath = requestPath.replace('{lineId}', lineId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of Phone Base Settings objects
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortBy - Value by which to sort
  * @param {string} sortOrder - Sort order
  * @param {string} name - Name
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesPhonebasesettings = function getProvidersEdgesPhonebasesettings(pageSize, pageNumber, sortBy, sortOrder, name){
    var requestPath = '/api/v2/telephony/providers/edges/phonebasesettings';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["sortBy"] = sortBy;
    requestQuery["sortOrder"] = sortOrder;
    requestQuery["name"] = name;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a new Phone Base Settings object
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {} body - Phone base settings
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "properties": {},
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true,
      "noRebalance": true
   }
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "properties": {},
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true,
      "noRebalance": true
   },
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesPhonebasesettings = function postProvidersEdgesPhonebasesettings(body){
    var requestPath = '/api/v2/telephony/providers/edges/phonebasesettings';
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
  * @summary Get a listing of extension pools
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortBy - Sort by
  * @param {string} number - Number
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesExtensionpools = function getProvidersEdgesExtensionpools(pageSize, pageNumber, sortBy, number){
    var requestPath = '/api/v2/telephony/providers/edges/extensionpools';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["sortBy"] = sortBy;
    requestQuery["number"] = number;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a new extension pool
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {} body - ExtensionPool
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "startNumber": "",
   "endNumber": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "startNumber": "",
   "endNumber": "",
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesExtensionpools = function postProvidersEdgesExtensionpools(body){
    var requestPath = '/api/v2/telephony/providers/edges/extensionpools';
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
  * @summary Reboot Multiple Phones
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {} body - Phones
  * @example
  * Body Example:
  * {
   "phoneIds": [],
   "siteId": ""
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesPhonesReboot = function postProvidersEdgesPhonesReboot(body){
    var requestPath = '/api/v2/telephony/providers/edges/phones/reboot';
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
  * @summary Get a list of available makes and models to create a new Trunk Base Settings
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} type - 
  EXTERNAL,
  PHONE,
  EDGE,
  * @param {integer} pageSize - 
  * @param {integer} pageNumber - 
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesTrunkbasesettingsAvailablemetabases = function getProvidersEdgesTrunkbasesettingsAvailablemetabases(type, pageSize, pageNumber){
    var requestPath = '/api/v2/telephony/providers/edges/trunkbasesettings/availablemetabases';
    var requestQuery = {};
    var requestBody;

    requestQuery["type"] = type;
    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get an extension pool by ID
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} extensionPoolId - Extension pool ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "startNumber": "",
   "endNumber": "",
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesExtensionpoolsExtensionpoolId = function getProvidersEdgesExtensionpoolsExtensionpoolId(extensionPoolId){
    var requestPath = '/api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}';
    var requestQuery = {};
    var requestBody;

    if(extensionPoolId === undefined || extensionPoolId === null){
      throw new Error('Missing required  parameter: extensionPoolId');
    }
    requestPath = requestPath.replace('{extensionPoolId}', extensionPoolId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an extension pool by ID
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} extensionPoolId - Extension pool ID
  * @param {} body - ExtensionPool
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "startNumber": "",
   "endNumber": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "startNumber": "",
   "endNumber": "",
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesExtensionpoolsExtensionpoolId = function putProvidersEdgesExtensionpoolsExtensionpoolId(extensionPoolId, body){
    var requestPath = '/api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}';
    var requestQuery = {};
    var requestBody;

    if(extensionPoolId === undefined || extensionPoolId === null){
      throw new Error('Missing required  parameter: extensionPoolId');
    }
    requestPath = requestPath.replace('{extensionPoolId}', extensionPoolId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an extension pool by ID
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} extensionPoolId - Extension pool ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesExtensionpoolsExtensionpoolId = function deleteProvidersEdgesExtensionpoolsExtensionpoolId(extensionPoolId){
    var requestPath = '/api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}';
    var requestQuery = {};
    var requestBody;

    if(extensionPoolId === undefined || extensionPoolId === null){
      throw new Error('Missing required  parameter: extensionPoolId');
    }
    requestPath = requestPath.replace('{extensionPoolId}', extensionPoolId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Site by ID.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} siteId - Site ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "primarySites": [],
   "secondarySites": [],
   "primaryEdges": [],
   "secondaryEdges": [],
   "addresses": [],
   "edges": [],
   "edgeAutoUpdateConfig": {
      "timeZone": "",
      "rrule": "",
      "start": "",
      "end": ""
   },
   "location": {
      "id": "",
      "name": "",
      "address": {},
      "addressVerified": true,
      "emergencyNumber": {},
      "state": "",
      "version": 0,
      "path": [],
      "selfUri": ""
   },
   "managed": true,
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesSitesSiteId = function getProvidersEdgesSitesSiteId(siteId){
    var requestPath = '/api/v2/telephony/providers/edges/sites/{siteId}';
    var requestQuery = {};
    var requestBody;

    if(siteId === undefined || siteId === null){
      throw new Error('Missing required  parameter: siteId');
    }
    requestPath = requestPath.replace('{siteId}', siteId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a Site by ID.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} siteId - Site ID
  * @param {} body - Site
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "primarySites": [],
   "secondarySites": [],
   "primaryEdges": [],
   "secondaryEdges": [],
   "addresses": [],
   "edges": [],
   "edgeAutoUpdateConfig": {
      "timeZone": "",
      "rrule": "",
      "start": "",
      "end": ""
   },
   "location": {
      "name": "",
      "address": {},
      "addressVerified": true,
      "emergencyNumber": {},
      "state": "",
      "version": 0,
      "path": []
   },
   "managed": true
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "primarySites": [],
   "secondarySites": [],
   "primaryEdges": [],
   "secondaryEdges": [],
   "addresses": [],
   "edges": [],
   "edgeAutoUpdateConfig": {
      "timeZone": "",
      "rrule": "",
      "start": "",
      "end": ""
   },
   "location": {
      "id": "",
      "name": "",
      "address": {},
      "addressVerified": true,
      "emergencyNumber": {},
      "state": "",
      "version": 0,
      "path": [],
      "selfUri": ""
   },
   "managed": true,
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesSitesSiteId = function putProvidersEdgesSitesSiteId(siteId, body){
    var requestPath = '/api/v2/telephony/providers/edges/sites/{siteId}';
    var requestQuery = {};
    var requestBody;

    if(siteId === undefined || siteId === null){
      throw new Error('Missing required  parameter: siteId');
    }
    requestPath = requestPath.replace('{siteId}', siteId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a Site by ID
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} siteId - Site ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesSitesSiteId = function deleteProvidersEdgesSitesSiteId(siteId){
    var requestPath = '/api/v2/telephony/providers/edges/sites/{siteId}';
    var requestQuery = {};
    var requestBody;

    if(siteId === undefined || siteId === null){
      throw new Error('Missing required  parameter: siteId');
    }
    requestPath = requestPath.replace('{siteId}', siteId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a listing of line base settings objects
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
  * @param {string} sortBy - Value by which to sort
  * @param {string} sortOrder - Sort order
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesLinebasesettings = function getProvidersEdgesLinebasesettings(pageNumber, pageSize, sortBy, sortOrder){
    var requestPath = '/api/v2/telephony/providers/edges/linebasesettings';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageNumber"] = pageNumber;
    requestQuery["pageSize"] = pageSize;
    requestQuery["sortBy"] = sortBy;
    requestQuery["sortOrder"] = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of Sites.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
  * @param {string} name - Name
  * @param {string} locationid - Location Id
  * @param {boolean} managed - Filter by managed
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesSites = function getProvidersEdgesSites(pageSize, pageNumber, sortBy, sortOrder, name, locationid, managed){
    var requestPath = '/api/v2/telephony/providers/edges/sites';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["sortBy"] = sortBy;
    requestQuery["sortOrder"] = sortOrder;
    requestQuery["name"] = name;
    requestQuery["location.id"] = locationid;
    requestQuery["managed"] = managed;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a Site.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {} body - Site
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "primarySites": [],
   "secondarySites": [],
   "primaryEdges": [],
   "secondaryEdges": [],
   "addresses": [],
   "edges": [],
   "edgeAutoUpdateConfig": {
      "timeZone": "",
      "rrule": "",
      "start": "",
      "end": ""
   },
   "location": {
      "name": "",
      "address": {},
      "addressVerified": true,
      "emergencyNumber": {},
      "state": "",
      "version": 0,
      "path": []
   },
   "managed": true
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "primarySites": [],
   "secondarySites": [],
   "primaryEdges": [],
   "secondaryEdges": [],
   "addresses": [],
   "edges": [],
   "edgeAutoUpdateConfig": {
      "timeZone": "",
      "rrule": "",
      "start": "",
      "end": ""
   },
   "location": {
      "id": "",
      "name": "",
      "address": {},
      "addressVerified": true,
      "emergencyNumber": {},
      "state": "",
      "version": 0,
      "path": [],
      "selfUri": ""
   },
   "managed": true,
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesSites = function postProvidersEdgesSites(body){
    var requestPath = '/api/v2/telephony/providers/edges/sites';
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
  * @summary Get outbound routes
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} name - Name
  * @param {string} siteid - Filter by site.id
  * @param {string} sortBy - Sort by
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesOutboundroutes = function getProvidersEdgesOutboundroutes(pageSize, pageNumber, name, siteid, sortBy){
    var requestPath = '/api/v2/telephony/providers/edges/outboundroutes';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["name"] = name;
    requestQuery["site.id"] = siteid;
    requestQuery["sortBy"] = sortBy;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create outbound rule
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {} body - OutboundRoute
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "classificationTypes": [],
   "enabled": true,
   "distribution": "",
   "externalTrunkBases": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "classificationTypes": [],
   "enabled": true,
   "distribution": "",
   "externalTrunkBases": [],
   "site": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "primarySites": [],
      "secondarySites": [],
      "primaryEdges": [],
      "secondaryEdges": [],
      "addresses": [],
      "edges": [],
      "edgeAutoUpdateConfig": {},
      "location": {},
      "managed": true,
      "selfUri": ""
   },
   "managed": true,
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesOutboundroutes = function postProvidersEdgesOutboundroutes(body){
    var requestPath = '/api/v2/telephony/providers/edges/outboundroutes';
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
  * @summary Get a listing of extensions
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
  * @param {string} number - Filter by number
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesExtensions = function getProvidersEdgesExtensions(pageSize, pageNumber, sortBy, sortOrder, number){
    var requestPath = '/api/v2/telephony/providers/edges/extensions';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["sortBy"] = sortBy;
    requestQuery["sortOrder"] = sortOrder;
    requestQuery["number"] = number;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get Counts of trunks that have recording disabled or enabled
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} trunkType - The type of this trunk base.
  EXTERNAL,
  PHONE,
  EDGE,
  * @example
  * 200 Response Example:
  * {
   "enabledCount": 0,
   "disabledCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesTrunkswithrecording = function getProvidersEdgesTrunkswithrecording(trunkType){
    var requestPath = '/api/v2/telephony/providers/edges/trunkswithrecording';
    var requestQuery = {};
    var requestBody;

    requestQuery["trunkType"] = trunkType;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get line
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeId - Edge ID
  * @param {string} lineId - Line ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "schema": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {},
   "edge": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "interfaces": [],
      "make": "",
      "model": "",
      "apiVersion": "",
      "softwareVersion": "",
      "softwareVersionTimestamp": "",
      "softwareVersionPlatform": "",
      "softwareVersionConfiguration": "",
      "fullSoftwareVersion": "",
      "pairingId": "",
      "fingerprint": "",
      "fingerprintHint": "",
      "currentVersion": "",
      "stagedVersion": "",
      "patch": "",
      "statusCode": "",
      "edgeGroup": {},
      "site": {},
      "softwareStatus": {},
      "onlineStatus": "",
      "serialNumber": "",
      "physicalEdge": true,
      "managed": true,
      "edgeDeploymentType": "",
      "callDrainingState": "",
      "conversationCount": 0,
      "selfUri": ""
   },
   "edgeGroup": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "managed": true,
      "edgeTrunkBaseAssignment": {},
      "phoneTrunkBases": [],
      "selfUri": ""
   },
   "lineType": "",
   "endpoint": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "count": 0,
      "properties": {},
      "schema": {},
      "enabled": true,
      "site": {},
      "dids": [],
      "selfUri": ""
   },
   "ipAddress": "",
   "logicalInterfaceId": "",
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgeIdLinesLineId = function getProvidersEdgesEdgeIdLinesLineId(edgeId, lineId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/lines/{lineId}';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(lineId === undefined || lineId === null){
      throw new Error('Missing required  parameter: lineId');
    }
    requestPath = requestPath.replace('{lineId}', lineId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a line.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeId - Edge ID
  * @param {string} lineId - Line ID
  * @param {} body - Line
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "schema": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {},
   "edge": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "interfaces": [],
      "make": "",
      "model": "",
      "apiVersion": "",
      "softwareVersion": "",
      "softwareVersionTimestamp": "",
      "softwareVersionPlatform": "",
      "softwareVersionConfiguration": "",
      "fullSoftwareVersion": "",
      "pairingId": "",
      "fingerprint": "",
      "fingerprintHint": "",
      "currentVersion": "",
      "stagedVersion": "",
      "patch": "",
      "statusCode": "",
      "edgeGroup": {},
      "site": {},
      "softwareStatus": {},
      "onlineStatus": "",
      "serialNumber": "",
      "physicalEdge": true,
      "managed": true,
      "edgeDeploymentType": "",
      "callDrainingState": "",
      "conversationCount": 0
   },
   "edgeGroup": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "managed": true,
      "edgeTrunkBaseAssignment": {},
      "phoneTrunkBases": []
   },
   "lineType": "",
   "endpoint": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "count": 0,
      "properties": {},
      "schema": {},
      "enabled": true,
      "site": {},
      "dids": []
   },
   "ipAddress": "",
   "logicalInterfaceId": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "schema": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {},
   "edge": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "interfaces": [],
      "make": "",
      "model": "",
      "apiVersion": "",
      "softwareVersion": "",
      "softwareVersionTimestamp": "",
      "softwareVersionPlatform": "",
      "softwareVersionConfiguration": "",
      "fullSoftwareVersion": "",
      "pairingId": "",
      "fingerprint": "",
      "fingerprintHint": "",
      "currentVersion": "",
      "stagedVersion": "",
      "patch": "",
      "statusCode": "",
      "edgeGroup": {},
      "site": {},
      "softwareStatus": {},
      "onlineStatus": "",
      "serialNumber": "",
      "physicalEdge": true,
      "managed": true,
      "edgeDeploymentType": "",
      "callDrainingState": "",
      "conversationCount": 0,
      "selfUri": ""
   },
   "edgeGroup": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "managed": true,
      "edgeTrunkBaseAssignment": {},
      "phoneTrunkBases": [],
      "selfUri": ""
   },
   "lineType": "",
   "endpoint": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "count": 0,
      "properties": {},
      "schema": {},
      "enabled": true,
      "site": {},
      "dids": [],
      "selfUri": ""
   },
   "ipAddress": "",
   "logicalInterfaceId": "",
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesEdgeIdLinesLineId = function putProvidersEdgesEdgeIdLinesLineId(edgeId, lineId, body){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/lines/{lineId}';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(lineId === undefined || lineId === null){
      throw new Error('Missing required  parameter: lineId');
    }
    requestPath = requestPath.replace('{lineId}', lineId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a DID by ID.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} didId - DID ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "phoneNumber": "",
   "didPool": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "owner": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "ownerType": "",
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesDidsDidId = function getProvidersEdgesDidsDidId(didId){
    var requestPath = '/api/v2/telephony/providers/edges/dids/{didId}';
    var requestQuery = {};
    var requestBody;

    if(didId === undefined || didId === null){
      throw new Error('Missing required  parameter: didId');
    }
    requestPath = requestPath.replace('{didId}', didId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a DID by ID.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} didId - DID ID
  * @param {} body - DID
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "phoneNumber": "",
   "didPool": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "owner": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "ownerType": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "phoneNumber": "",
   "didPool": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "owner": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "ownerType": "",
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesDidsDidId = function putProvidersEdgesDidsDidId(didId, body){
    var requestPath = '/api/v2/telephony/providers/edges/dids/{didId}';
    var requestQuery = {};
    var requestBody;

    if(didId === undefined || didId === null){
      throw new Error('Missing required  parameter: didId');
    }
    requestPath = requestPath.replace('{didId}', didId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get endpoint
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} endpointId - Endpoint ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "count": 0,
   "properties": {},
   "schema": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "enabled": true,
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dids": [],
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEndpointsEndpointId = function getProvidersEdgesEndpointsEndpointId(endpointId){
    var requestPath = '/api/v2/telephony/providers/edges/endpoints/{endpointId}';
    var requestQuery = {};
    var requestBody;

    if(endpointId === undefined || endpointId === null){
      throw new Error('Missing required  parameter: endpointId');
    }
    requestPath = requestPath.replace('{endpointId}', endpointId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update endpoint
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} endpointId - Endpoint ID
  * @param {} body - EndpointTemplate
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "count": 0,
   "properties": {},
   "schema": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "enabled": true,
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dids": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "count": 0,
   "properties": {},
   "schema": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "enabled": true,
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dids": [],
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesEndpointsEndpointId = function putProvidersEdgesEndpointsEndpointId(endpointId, body){
    var requestPath = '/api/v2/telephony/providers/edges/endpoints/{endpointId}';
    var requestQuery = {};
    var requestBody;

    if(endpointId === undefined || endpointId === null){
      throw new Error('Missing required  parameter: endpointId');
    }
    requestPath = requestPath.replace('{endpointId}', endpointId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete endpoint
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} endpointId - Endpoint ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesEndpointsEndpointId = function deleteProvidersEdgesEndpointsEndpointId(endpointId){
    var requestPath = '/api/v2/telephony/providers/edges/endpoints/{endpointId}';
    var requestQuery = {};
    var requestBody;

    if(endpointId === undefined || endpointId === null){
      throw new Error('Missing required  parameter: endpointId');
    }
    requestPath = requestPath.replace('{endpointId}', endpointId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a line base settings object by ID
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} lineBaseId - Line base ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "lineMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {},
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesLinebasesettingsLinebaseId = function getProvidersEdgesLinebasesettingsLinebaseId(lineBaseId){
    var requestPath = '/api/v2/telephony/providers/edges/linebasesettings/{lineBaseId}';
    var requestQuery = {};
    var requestBody;

    if(lineBaseId === undefined || lineBaseId === null){
      throw new Error('Missing required  parameter: lineBaseId');
    }
    requestPath = requestPath.replace('{lineBaseId}', lineBaseId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Reboot a Phone
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} phoneId - Phone Id
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesPhonesPhoneIdReboot = function postProvidersEdgesPhonesPhoneIdReboot(phoneId){
    var requestPath = '/api/v2/telephony/providers/edges/phones/{phoneId}/reboot';
    var requestQuery = {};
    var requestBody;

    if(phoneId === undefined || phoneId === null){
      throw new Error('Missing required  parameter: phoneId');
    }
    requestPath = requestPath.replace('{phoneId}', phoneId);
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Gets the edge trunk base associated with the edge group
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgegroupId - Edge Group ID
  * @param {string} edgetrunkbaseId - Edge Trunk Base ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "trunkMetabase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {},
   "trunkType": "",
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgegroupsEdgegroupIdEdgetrunkbasesEdgetrunkbaseId = function getProvidersEdgesEdgegroupsEdgegroupIdEdgetrunkbasesEdgetrunkbaseId(edgegroupId, edgetrunkbaseId){
    var requestPath = '/api/v2/telephony/providers/edges/edgegroups/{edgegroupId}/edgetrunkbases/{edgetrunkbaseId}';
    var requestQuery = {};
    var requestBody;

    if(edgegroupId === undefined || edgegroupId === null){
      throw new Error('Missing required  parameter: edgegroupId');
    }
    requestPath = requestPath.replace('{edgegroupId}', edgegroupId);
    if(edgetrunkbaseId === undefined || edgetrunkbaseId === null){
      throw new Error('Missing required  parameter: edgetrunkbaseId');
    }
    requestPath = requestPath.replace('{edgetrunkbaseId}', edgetrunkbaseId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the edge trunk base associated with the edge group
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgegroupId - Edge Group ID
  * @param {string} edgetrunkbaseId - Edge Trunk Base ID
  * @param {} body - EdgeTrunkBase
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "trunkMetabase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {},
   "trunkType": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "trunkMetabase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {},
   "trunkType": "",
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesEdgegroupsEdgegroupIdEdgetrunkbasesEdgetrunkbaseId = function putProvidersEdgesEdgegroupsEdgegroupIdEdgetrunkbasesEdgetrunkbaseId(edgegroupId, edgetrunkbaseId, body){
    var requestPath = '/api/v2/telephony/providers/edges/edgegroups/{edgegroupId}/edgetrunkbases/{edgetrunkbaseId}';
    var requestQuery = {};
    var requestBody;

    if(edgegroupId === undefined || edgegroupId === null){
      throw new Error('Missing required  parameter: edgegroupId');
    }
    requestPath = requestPath.replace('{edgegroupId}', edgegroupId);
    if(edgetrunkbaseId === undefined || edgetrunkbaseId === null){
      throw new Error('Missing required  parameter: edgetrunkbaseId');
    }
    requestPath = requestPath.replace('{edgetrunkbaseId}', edgetrunkbaseId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the edge version report.
  * @description The report will not have consistent data about the edge version(s) until all edges have been reset.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "oldestVersion": {
      "softwareVersion": ""
   },
   "newestVersion": {
      "softwareVersion": ""
   }
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgeversionreport = function getProvidersEdgesEdgeversionreport(){
    var requestPath = '/api/v2/telephony/providers/edges/edgeversionreport';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Take an Edge in or out of service
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeId - Edge ID
  * @param {} body - Edge Service State
  * @example
  * Body Example:
  * {
   "inService": true,
   "callDrainingWaitTimeSeconds": 0
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesEdgeIdStatuscode = function postProvidersEdgesEdgeIdStatuscode(edgeId, body){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/statuscode';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get an outbound route
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} siteId - Site ID
  * @param {string} outboundRouteId - Outbound route ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "classificationTypes": [],
   "enabled": true,
   "distribution": "",
   "externalTrunkBases": [],
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesSitesSiteIdOutboundroutesOutboundrouteId = function getProvidersEdgesSitesSiteIdOutboundroutesOutboundrouteId(siteId, outboundRouteId){
    var requestPath = '/api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}';
    var requestQuery = {};
    var requestBody;

    if(siteId === undefined || siteId === null){
      throw new Error('Missing required  parameter: siteId');
    }
    requestPath = requestPath.replace('{siteId}', siteId);
    if(outboundRouteId === undefined || outboundRouteId === null){
      throw new Error('Missing required  parameter: outboundRouteId');
    }
    requestPath = requestPath.replace('{outboundRouteId}', outboundRouteId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update outbound route
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} siteId - Site ID
  * @param {string} outboundRouteId - Outbound route ID
  * @param {} body - OutboundRoute
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "classificationTypes": [],
   "enabled": true,
   "distribution": "",
   "externalTrunkBases": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "classificationTypes": [],
   "enabled": true,
   "distribution": "",
   "externalTrunkBases": [],
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesSitesSiteIdOutboundroutesOutboundrouteId = function putProvidersEdgesSitesSiteIdOutboundroutesOutboundrouteId(siteId, outboundRouteId, body){
    var requestPath = '/api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}';
    var requestQuery = {};
    var requestBody;

    if(siteId === undefined || siteId === null){
      throw new Error('Missing required  parameter: siteId');
    }
    requestPath = requestPath.replace('{siteId}', siteId);
    if(outboundRouteId === undefined || outboundRouteId === null){
      throw new Error('Missing required  parameter: outboundRouteId');
    }
    requestPath = requestPath.replace('{outboundRouteId}', outboundRouteId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete Outbound Route
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} siteId - Site ID
  * @param {string} outboundRouteId - Outbound route ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesSitesSiteIdOutboundroutesOutboundrouteId = function deleteProvidersEdgesSitesSiteIdOutboundroutesOutboundrouteId(siteId, outboundRouteId){
    var requestPath = '/api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}';
    var requestQuery = {};
    var requestBody;

    if(siteId === undefined || siteId === null){
      throw new Error('Missing required  parameter: siteId');
    }
    requestPath = requestPath.replace('{siteId}', siteId);
    if(outboundRouteId === undefined || outboundRouteId === null){
      throw new Error('Missing required  parameter: outboundRouteId');
    }
    requestPath = requestPath.replace('{outboundRouteId}', outboundRouteId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Gets software update status information about any edge.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeId - Edge ID
  * @example
  * 200 Response Example:
  * {
   "version": {
      "id": "",
      "name": "",
      "edgeVersion": "",
      "publishDate": "",
      "edgeUri": "",
      "latestRelease": true,
      "current": true,
      "selfUri": ""
   },
   "maxDownloadRate": 0,
   "downloadStartTime": "",
   "executeStartTime": "",
   "executeStopTime": "",
   "executeOnIdle": true,
   "status": "",
   "edgeUri": "",
   "callDrainingWaitTimeSeconds": 0,
   "current": true
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgeIdSoftwareupdate = function getProvidersEdgesEdgeIdSoftwareupdate(edgeId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/softwareupdate';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Starts a software update for this edge.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeId - Edge ID
  * @param {} body - Software update request
  * @example
  * Body Example:
  * {
   "version": {
      "name": "",
      "edgeVersion": "",
      "publishDate": "",
      "edgeUri": "",
      "latestRelease": true,
      "current": true
   },
   "maxDownloadRate": 0,
   "downloadStartTime": "",
   "executeStartTime": "",
   "executeStopTime": "",
   "executeOnIdle": true,
   "status": "",
   "edgeUri": "",
   "callDrainingWaitTimeSeconds": 0,
   "current": true
}
  * @example
  * 200 Response Example:
  * {
   "version": {
      "id": "",
      "name": "",
      "edgeVersion": "",
      "publishDate": "",
      "edgeUri": "",
      "latestRelease": true,
      "current": true,
      "selfUri": ""
   },
   "maxDownloadRate": 0,
   "downloadStartTime": "",
   "executeStartTime": "",
   "executeStopTime": "",
   "executeOnIdle": true,
   "status": "",
   "edgeUri": "",
   "callDrainingWaitTimeSeconds": 0,
   "current": true
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesEdgeIdSoftwareupdate = function postProvidersEdgesEdgeIdSoftwareupdate(edgeId, body){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/softwareupdate';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Cancels any in-progress update for this edge.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeId - Edge ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesEdgeIdSoftwareupdate = function deleteProvidersEdgesEdgeIdSoftwareupdate(edgeId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/softwareupdate';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of edge groups.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} name - Name
  * @param {string} sortBy - Sort by
  * @param {boolean} managed - Filter by managed
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgegroups = function getProvidersEdgesEdgegroups(pageSize, pageNumber, name, sortBy, managed){
    var requestPath = '/api/v2/telephony/providers/edges/edgegroups';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["name"] = name;
    requestQuery["sortBy"] = sortBy;
    requestQuery["managed"] = managed;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create an edge group.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {} body - EdgeGroup
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "managed": true,
   "edgeTrunkBaseAssignment": {
      "family": 0,
      "trunkBase": {}
   },
   "phoneTrunkBases": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "managed": true,
   "edgeTrunkBaseAssignment": {
      "family": 0,
      "trunkBase": {}
   },
   "phoneTrunkBases": [],
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesEdgegroups = function postProvidersEdgesEdgegroups(body){
    var requestPath = '/api/v2/telephony/providers/edges/edgegroups';
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
  * @summary Reboot an Edge
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeId - Edge ID
  * @param {} body - Parameters for the edge reboot
  * @example
  * Body Example:
  * {
   "callDrainingWaitTimeSeconds": 0
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesEdgeIdReboot = function postProvidersEdgesEdgeIdReboot(edgeId, body){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/reboot';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get edge physical interface.
  * @description Retrieve a physical interface from a specific edge.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeId - Edge ID
  * @param {string} interfaceId - Interface ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "edgeUri": "",
   "friendlyName": "",
   "hardwareAddress": "",
   "portLabel": "",
   "physicalCapabilities": {
      "vlan": true,
      "team": true
   },
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgeIdPhysicalinterfacesInterfaceId = function getProvidersEdgesEdgeIdPhysicalinterfacesInterfaceId(edgeId, interfaceId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces/{interfaceId}';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(interfaceId === undefined || interfaceId === null){
      throw new Error('Missing required  parameter: interfaceId');
    }
    requestPath = requestPath.replace('{interfaceId}', interfaceId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get edge group.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeGroupId - Edge group ID
  * @param {array} expand - Fields to expand in the response Valid Values: phoneTrunkBases, edgeTrunkBaseAssignment
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "managed": true,
   "edgeTrunkBaseAssignment": {
      "family": 0,
      "trunkBase": {}
   },
   "phoneTrunkBases": [],
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgegroupsEdgegroupId = function getProvidersEdgesEdgegroupsEdgegroupId(edgeGroupId, expand){
    var requestPath = '/api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}';
    var requestQuery = {};
    var requestBody;

    if(edgeGroupId === undefined || edgeGroupId === null){
      throw new Error('Missing required  parameter: edgeGroupId');
    }
    requestPath = requestPath.replace('{edgeGroupId}', edgeGroupId);
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an edge group.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeGroupId - Edge group ID
  * @param {} body - EdgeGroup
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "managed": true,
   "edgeTrunkBaseAssignment": {
      "family": 0,
      "trunkBase": {}
   },
   "phoneTrunkBases": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "managed": true,
   "edgeTrunkBaseAssignment": {
      "family": 0,
      "trunkBase": {}
   },
   "phoneTrunkBases": [],
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesEdgegroupsEdgegroupId = function putProvidersEdgesEdgegroupsEdgegroupId(edgeGroupId, body){
    var requestPath = '/api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}';
    var requestQuery = {};
    var requestBody;

    if(edgeGroupId === undefined || edgeGroupId === null){
      throw new Error('Missing required  parameter: edgeGroupId');
    }
    requestPath = requestPath.replace('{edgeGroupId}', edgeGroupId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an edge group.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeGroupId - Edge group ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesEdgegroupsEdgegroupId = function deleteProvidersEdgesEdgegroupsEdgegroupId(edgeGroupId){
    var requestPath = '/api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}';
    var requestQuery = {};
    var requestBody;

    if(edgeGroupId === undefined || edgeGroupId === null){
      throw new Error('Missing required  parameter: edgeGroupId');
    }
    requestPath = requestPath.replace('{edgeGroupId}', edgeGroupId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of Classifications for this Site
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} siteId - Site ID
  * @param {string} classification - Classification
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesSitesSiteIdNumberplansClassifications = function getProvidersEdgesSitesSiteIdNumberplansClassifications(siteId, classification){
    var requestPath = '/api/v2/telephony/providers/edges/sites/{siteId}/numberplans/classifications';
    var requestQuery = {};
    var requestBody;

    if(siteId === undefined || siteId === null){
      throw new Error('Missing required  parameter: siteId');
    }
    requestPath = requestPath.replace('{siteId}', siteId);
    requestQuery["classification"] = classification;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of Lines
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} name - Name
  * @param {string} sortBy - Value by which to sort
  * @param {array} expand - Fields to expand in the response, comma-separated Valid Values: properties, site, edgeGroup, primaryEdge, secondaryEdge, edges, assignedUser
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesLines = function getProvidersEdgesLines(pageSize, pageNumber, name, sortBy, expand){
    var requestPath = '/api/v2/telephony/providers/edges/lines';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["name"] = name;
    requestQuery["sortBy"] = sortBy;
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of Edge-compatible time zones
  * @memberOf TelephonyProvidersEdgeApi
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
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesTimezones = function getProvidersEdgesTimezones(pageSize, pageNumber){
    var requestPath = '/api/v2/telephony/providers/edges/timezones';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get edge logical interfaces.
  * @description Retrieve a list of all configured logical interfaces from a specific edge.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeId - Edge ID
  * @param {array} expand - Field to expand in the response Valid Values: externalTrunkBaseAssignments, phoneTrunkBaseAssignments
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgeIdLogicalinterfaces = function getProvidersEdgesEdgeIdLogicalinterfaces(edgeId, expand){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create an edge logical interface.
  * @description Create
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeId - Edge ID
  * @param {} body - Logical interface
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "edgeUri": "",
   "edgeAssignedId": "",
   "friendlyName": "",
   "vlanTagId": 0,
   "hardwareAddress": "",
   "physicalAdapterId": "",
   "ifStatus": "",
   "routes": [],
   "addresses": [],
   "ipv4Capabilities": {
      "enabled": true,
      "dhcp": true,
      "metric": 0,
      "autoMetric": true
   },
   "ipv6Capabilities": {
      "enabled": true,
      "dhcp": true,
      "metric": 0,
      "autoMetric": true
   },
   "currentState": "",
   "lastModifiedUserId": "",
   "lastModifiedCorrelationId": "",
   "commandResponses": [],
   "inheritPhoneTrunkBasesIPv4": true,
   "inheritPhoneTrunkBasesIPv6": true,
   "useForInternalEdgeCommunication": true,
   "externalTrunkBaseAssignments": [],
   "phoneTrunkBaseAssignments": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "edgeUri": "",
   "edgeAssignedId": "",
   "friendlyName": "",
   "vlanTagId": 0,
   "hardwareAddress": "",
   "physicalAdapterId": "",
   "ifStatus": "",
   "interfaceType": "",
   "routes": [],
   "addresses": [],
   "ipv4Capabilities": {
      "enabled": true,
      "dhcp": true,
      "metric": 0,
      "autoMetric": true,
      "supportsMetric": true
   },
   "ipv6Capabilities": {
      "enabled": true,
      "dhcp": true,
      "metric": 0,
      "autoMetric": true,
      "supportsMetric": true
   },
   "currentState": "",
   "lastModifiedUserId": "",
   "lastModifiedCorrelationId": "",
   "commandResponses": [],
   "inheritPhoneTrunkBasesIPv4": true,
   "inheritPhoneTrunkBasesIPv6": true,
   "useForInternalEdgeCommunication": true,
   "externalTrunkBaseAssignments": [],
   "phoneTrunkBaseAssignments": [],
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesEdgeIdLogicalinterfaces = function postProvidersEdgesEdgeIdLogicalinterfaces(edgeId, body){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Retrieve a list of all configured physical interfaces from a specific edge.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} edgeId - Edge ID
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgeIdPhysicalinterfaces = function getProvidersEdgesEdgeIdPhysicalinterfaces(edgeId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get outbound route
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} outboundRouteId - Outbound route ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "classificationTypes": [],
   "enabled": true,
   "distribution": "",
   "externalTrunkBases": [],
   "site": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "primarySites": [],
      "secondarySites": [],
      "primaryEdges": [],
      "secondaryEdges": [],
      "addresses": [],
      "edges": [],
      "edgeAutoUpdateConfig": {},
      "location": {},
      "managed": true,
      "selfUri": ""
   },
   "managed": true,
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesOutboundroutesOutboundrouteId = function getProvidersEdgesOutboundroutesOutboundrouteId(outboundRouteId){
    var requestPath = '/api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}';
    var requestQuery = {};
    var requestBody;

    if(outboundRouteId === undefined || outboundRouteId === null){
      throw new Error('Missing required  parameter: outboundRouteId');
    }
    requestPath = requestPath.replace('{outboundRouteId}', outboundRouteId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update outbound route
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} outboundRouteId - Outbound route ID
  * @param {} body - OutboundRoute
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "classificationTypes": [],
   "enabled": true,
   "distribution": "",
   "externalTrunkBases": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "classificationTypes": [],
   "enabled": true,
   "distribution": "",
   "externalTrunkBases": [],
   "site": {
      "id": "",
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "primarySites": [],
      "secondarySites": [],
      "primaryEdges": [],
      "secondaryEdges": [],
      "addresses": [],
      "edges": [],
      "edgeAutoUpdateConfig": {},
      "location": {},
      "managed": true,
      "selfUri": ""
   },
   "managed": true,
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesOutboundroutesOutboundrouteId = function putProvidersEdgesOutboundroutesOutboundrouteId(outboundRouteId, body){
    var requestPath = '/api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}';
    var requestQuery = {};
    var requestBody;

    if(outboundRouteId === undefined || outboundRouteId === null){
      throw new Error('Missing required  parameter: outboundRouteId');
    }
    requestPath = requestPath.replace('{outboundRouteId}', outboundRouteId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete Outbound Route
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} outboundRouteId - Outbound route ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesOutboundroutesOutboundrouteId = function deleteProvidersEdgesOutboundroutesOutboundrouteId(outboundRouteId){
    var requestPath = '/api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}';
    var requestQuery = {};
    var requestBody;

    if(outboundRouteId === undefined || outboundRouteId === null){
      throw new Error('Missing required  parameter: outboundRouteId');
    }
    requestPath = requestPath.replace('{outboundRouteId}', outboundRouteId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Trunk Base Settings instance template from a given make and model. This object can then be modified and saved as a new Trunk Base Settings instance
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} trunkMetabaseId - The id of a metabase object upon which to base this Trunk Base Settings
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "trunkMetabase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {},
   "trunkType": "",
   "managed": true,
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesTrunkbasesettingsTemplate = function getProvidersEdgesTrunkbasesettingsTemplate(trunkMetabaseId){
    var requestPath = '/api/v2/telephony/providers/edges/trunkbasesettings/template';
    var requestQuery = {};
    var requestBody;

    if(trunkMetabaseId === undefined || trunkMetabaseId === null){
      throw new Error('Missing required  parameter: trunkMetabaseId');
    }
    requestQuery["trunkMetabaseId"] = trunkMetabaseId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Trunk by ID
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} trunkId - Trunk ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "trunkType": "",
   "edge": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "trunkBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "trunkMetabase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "edgeGroup": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "inService": true,
   "enabled": true,
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesTrunksTrunkId = function getProvidersEdgesTrunksTrunkId(trunkId){
    var requestPath = '/api/v2/telephony/providers/edges/trunks/{trunkId}';
    var requestQuery = {};
    var requestBody;

    if(trunkId === undefined || trunkId === null){
      throw new Error('Missing required  parameter: trunkId');
    }
    requestPath = requestPath.replace('{trunkId}', trunkId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of certificate authorities.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesCertificateauthorities = function getProvidersEdgesCertificateauthorities(){
    var requestPath = '/api/v2/telephony/providers/edges/certificateauthorities';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a certificate authority.
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {} body - CertificateAuthority
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "certificate": "",
   "type": "",
   "services": [],
   "certificateDetails": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "certificate": "",
   "type": "",
   "services": [],
   "certificateDetails": [],
   "selfUri": ""
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesCertificateauthorities = function postProvidersEdgesCertificateauthorities(body){
    var requestPath = '/api/v2/telephony/providers/edges/certificateauthorities';
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
  * @summary Get a json schema (Deprecated)
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} schemaCategory - Schema category
  * @param {string} schemaType - Schema type
  * @param {string} schemaId - Schema ID
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
TelephonyProvidersEdgeApi.prototype.getSchemasEdgesVnextSchemacategorySchematypeSchemaId = function getSchemasEdgesVnextSchemacategorySchematypeSchemaId(schemaCategory, schemaType, schemaId){
    var requestPath = '/api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}';
    var requestQuery = {};
    var requestBody;

    if(schemaCategory === undefined || schemaCategory === null){
      throw new Error('Missing required  parameter: schemaCategory');
    }
    requestPath = requestPath.replace('{schemaCategory}', schemaCategory);
    if(schemaType === undefined || schemaType === null){
      throw new Error('Missing required  parameter: schemaType');
    }
    requestPath = requestPath.replace('{schemaType}', schemaType);
    if(schemaId === undefined || schemaId === null){
      throw new Error('Missing required  parameter: schemaId');
    }
    requestPath = requestPath.replace('{schemaId}', schemaId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get metadata for a schema (Deprecated)
  * @memberOf TelephonyProvidersEdgeApi
  * @instance
  * @param {string} schemaCategory - Schema category
  * @param {string} schemaType - Schema type
  * @param {string} schemaId - Schema ID
  * @param {string} extensionType - extension
  * @param {string} metadataId - Metadata ID
  * @param {string} type - Type
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
TelephonyProvidersEdgeApi.prototype.getSchemasEdgesVnextSchemacategorySchematypeSchemaIdExtensiontypeMetadataId = function getSchemasEdgesVnextSchemacategorySchematypeSchemaIdExtensiontypeMetadataId(schemaCategory, schemaType, schemaId, extensionType, metadataId, type){
    var requestPath = '/api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}/{extensionType}/{metadataId}';
    var requestQuery = {};
    var requestBody;

    if(schemaCategory === undefined || schemaCategory === null){
      throw new Error('Missing required  parameter: schemaCategory');
    }
    requestPath = requestPath.replace('{schemaCategory}', schemaCategory);
    if(schemaType === undefined || schemaType === null){
      throw new Error('Missing required  parameter: schemaType');
    }
    requestPath = requestPath.replace('{schemaType}', schemaType);
    if(schemaId === undefined || schemaId === null){
      throw new Error('Missing required  parameter: schemaId');
    }
    requestPath = requestPath.replace('{schemaId}', schemaId);
    if(extensionType === undefined || extensionType === null){
      throw new Error('Missing required  parameter: extensionType');
    }
    requestPath = requestPath.replace('{extensionType}', extensionType);
    if(metadataId === undefined || metadataId === null){
      throw new Error('Missing required  parameter: metadataId');
    }
    requestPath = requestPath.replace('{metadataId}', metadataId);
    requestQuery["type"] = type;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};


module.exports = TelephonyProvidersEdgeApi;
