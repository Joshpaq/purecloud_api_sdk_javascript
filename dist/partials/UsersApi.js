/*jshint -W069 */
/**
* @class UsersApi
* @example
* var api = new purecloud.platform.UsersApi(pureCloudSession);
*/
function UsersApi(session) {
    if(!(this instanceof UsersApi)) {
        return new UsersApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('UsersApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get a user's CallForwarding
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "user": {
      "id": "",
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "primaryContactInfo": [],
      "addresses": [],
      "state": "",
      "title": "",
      "username": "",
      "manager": {},
      "images": [],
      "version": 0,
      "routingStatus": {},
      "presence": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "geolocation": {},
      "station": {},
      "authorization": {},
      "profileSkills": [],
      "locations": [],
      "groups": [],
      "selfUri": ""
   },
   "enabled": true,
   "phoneNumber": "",
   "modifiedDate": "",
   "selfUri": ""
}
  */
UsersApi.prototype.getUserIdCallforwarding = function getUserIdCallforwarding(userId){
    var requestPath = '/api/v2/users/{userId}/callforwarding';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a user's CallForwarding
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @param {} body - Call forwarding
  * @example
  * Body Example:
  * {
   "name": "",
   "user": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "manager": {},
      "images": [],
      "version": 0
   },
   "enabled": true,
   "phoneNumber": "",
   "modifiedDate": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "user": {
      "id": "",
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "primaryContactInfo": [],
      "addresses": [],
      "state": "",
      "title": "",
      "username": "",
      "manager": {},
      "images": [],
      "version": 0,
      "routingStatus": {},
      "presence": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "geolocation": {},
      "station": {},
      "authorization": {},
      "profileSkills": [],
      "locations": [],
      "groups": [],
      "selfUri": ""
   },
   "enabled": true,
   "phoneNumber": "",
   "modifiedDate": "",
   "selfUri": ""
}
  */
UsersApi.prototype.putUserIdCallforwarding = function putUserIdCallforwarding(userId, body){
    var requestPath = '/api/v2/users/{userId}/callforwarding';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Patch a user's CallForwarding
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @param {} body - Call forwarding
  * @example
  * Body Example:
  * {
   "name": "",
   "user": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "manager": {},
      "images": [],
      "version": 0
   },
   "enabled": true,
   "phoneNumber": "",
   "modifiedDate": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "user": {
      "id": "",
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "primaryContactInfo": [],
      "addresses": [],
      "state": "",
      "title": "",
      "username": "",
      "manager": {},
      "images": [],
      "version": 0,
      "routingStatus": {},
      "presence": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "geolocation": {},
      "station": {},
      "authorization": {},
      "profileSkills": [],
      "locations": [],
      "groups": [],
      "selfUri": ""
   },
   "enabled": true,
   "phoneNumber": "",
   "modifiedDate": "",
   "selfUri": ""
}
  */
UsersApi.prototype.patchUserIdCallforwarding = function patchUserIdCallforwarding(userId, body){
    var requestPath = '/api/v2/users/{userId}/callforwarding';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get favorites
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortOrder - Sort order
  * @param {array} expand - Which fields, if any, to expand Valid Values: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, profileSkills, locations, groupMemberships
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
UsersApi.prototype.getUserIdFavorites = function getUserIdFavorites(userId, pageSize, pageNumber, sortOrder, expand){
    var requestPath = '/api/v2/users/{userId}/favorites';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["sortOrder"] = sortOrder;
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get adjacents
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @param {array} expand - Which fields, if any, to expand Valid Values: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, profileSkills, locations, groupMemberships
  * @example
  * 200 Response Example:
  * {
   "superiors": [],
   "siblings": [],
   "directReports": []
}
  */
UsersApi.prototype.getUserIdAdjacents = function getUserIdAdjacents(userId, expand){
    var requestPath = '/api/v2/users/{userId}/adjacents';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get superiors
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @param {array} expand - Which fields, if any, to expand Valid Values: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, profileSkills, locations, groupMemberships
  * @example
  * 200 Response Example:
  * [
 {
  "id": "",
  "name": "",
  "chat": {
   "jabberId": ""
  },
  "department": "",
  "email": "",
  "primaryContactInfo": [],
  "addresses": [],
  "state": "",
  "title": "",
  "username": "",
  "manager": {
   "id": "",
   "name": "",
   "chat": {},
   "department": "",
   "email": "",
   "primaryContactInfo": [],
   "addresses": [],
   "state": "",
   "title": "",
   "username": "",
   "manager": {},
   "images": [],
   "version": 0,
   "routingStatus": {},
   "presence": {},
   "conversationSummary": {},
   "outOfOffice": {},
   "geolocation": {},
   "station": {},
   "authorization": {},
   "profileSkills": [],
   "locations": [],
   "groups": [],
   "selfUri": ""
  },
  "images": [],
  "version": 0,
  "routingStatus": {
   "userId": "",
   "status": "",
   "startTime": ""
  },
  "presence": {
   "id": "",
   "name": "",
   "source": "",
   "primary": true,
   "presenceDefinition": {},
   "message": "",
   "modifiedDate": "",
   "selfUri": ""
  },
  "conversationSummary": {
   "userId": "",
   "call": {},
   "callback": {},
   "email": {},
   "chat": {},
   "socialExpression": {},
   "video": {}
  },
  "outOfOffice": {
   "id": "",
   "name": "",
   "user": {},
   "startDate": "",
   "endDate": "",
   "active": true,
   "selfUri": ""
  },
  "geolocation": {
   "id": "",
   "name": "",
   "type": "",
   "primary": true,
   "latitude": {},
   "longitude": {},
   "country": "",
   "region": "",
   "city": "",
   "locations": [],
   "selfUri": ""
  },
  "station": {
   "associatedStation": {},
   "effectiveStation": {},
   "defaultStation": {},
   "lastAssociatedStation": {}
  },
  "authorization": {
   "roles": [],
   "permissions": [],
   "permissionPolicies": []
  },
  "profileSkills": [],
  "locations": [],
  "groups": [],
  "selfUri": ""
 }
]
  */
UsersApi.prototype.getUserIdSuperiors = function getUserIdSuperiors(userId, expand){
    var requestPath = '/api/v2/users/{userId}/superiors';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get direct reports
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @param {array} expand - Which fields, if any, to expand Valid Values: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, profileSkills, locations, groupMemberships
  * @example
  * 200 Response Example:
  * [
 {
  "id": "",
  "name": "",
  "chat": {
   "jabberId": ""
  },
  "department": "",
  "email": "",
  "primaryContactInfo": [],
  "addresses": [],
  "state": "",
  "title": "",
  "username": "",
  "manager": {
   "id": "",
   "name": "",
   "chat": {},
   "department": "",
   "email": "",
   "primaryContactInfo": [],
   "addresses": [],
   "state": "",
   "title": "",
   "username": "",
   "manager": {},
   "images": [],
   "version": 0,
   "routingStatus": {},
   "presence": {},
   "conversationSummary": {},
   "outOfOffice": {},
   "geolocation": {},
   "station": {},
   "authorization": {},
   "profileSkills": [],
   "locations": [],
   "groups": [],
   "selfUri": ""
  },
  "images": [],
  "version": 0,
  "routingStatus": {
   "userId": "",
   "status": "",
   "startTime": ""
  },
  "presence": {
   "id": "",
   "name": "",
   "source": "",
   "primary": true,
   "presenceDefinition": {},
   "message": "",
   "modifiedDate": "",
   "selfUri": ""
  },
  "conversationSummary": {
   "userId": "",
   "call": {},
   "callback": {},
   "email": {},
   "chat": {},
   "socialExpression": {},
   "video": {}
  },
  "outOfOffice": {
   "id": "",
   "name": "",
   "user": {},
   "startDate": "",
   "endDate": "",
   "active": true,
   "selfUri": ""
  },
  "geolocation": {
   "id": "",
   "name": "",
   "type": "",
   "primary": true,
   "latitude": {},
   "longitude": {},
   "country": "",
   "region": "",
   "city": "",
   "locations": [],
   "selfUri": ""
  },
  "station": {
   "associatedStation": {},
   "effectiveStation": {},
   "defaultStation": {},
   "lastAssociatedStation": {}
  },
  "authorization": {
   "roles": [],
   "permissions": [],
   "permissionPolicies": []
  },
  "profileSkills": [],
  "locations": [],
  "groups": [],
  "selfUri": ""
 }
]
  */
UsersApi.prototype.getUserIdDirectreports = function getUserIdDirectreports(userId, expand){
    var requestPath = '/api/v2/users/{userId}/directreports';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Fetch field config for an entity type
  * @memberOf UsersApi
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
UsersApi.prototype.getFieldconfig = function getFieldconfig(type){
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
  * @summary Get queues for user
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {boolean} joined - Is joined to the queue
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
UsersApi.prototype.getUserIdQueues = function getUserIdQueues(userId, pageSize, pageNumber, joined){
    var requestPath = '/api/v2/users/{userId}/queues';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["joined"] = joined;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Join or unjoin a set of queues for a user
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @param {} body - User Queues
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
  "mediaSettings": {},
  "bullseye": {
   "rings": []
  },
  "acwSettings": {
   "wrapupPrompt": "",
   "timeoutMs": 0
  },
  "skillEvaluationMethod": "",
  "queueFlow": {
   "id": "",
   "name": "",
   "selfUri": ""
  },
  "callingPartyName": "",
  "callingPartyNumber": "",
  "outboundEmailAddress": {
   "domain": {},
   "route": {}
  },
  "joined": true,
  "memberCount": 0
 }
]
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
UsersApi.prototype.patchUserIdQueues = function patchUserIdQueues(userId, body){
    var requestPath = '/api/v2/users/{userId}/queues';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Fetch the routing status of a user
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @example
  * 200 Response Example:
  * {
   "userId": "",
   "status": "",
   "startTime": ""
}
  */
UsersApi.prototype.getUserIdRoutingstatus = function getUserIdRoutingstatus(userId){
    var requestPath = '/api/v2/users/{userId}/routingstatus';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the routing status of a user
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @param {} body - Routing Status
  * @example
  * Body Example:
  * {
   "userId": "",
   "status": "",
   "startTime": ""
}
  * @example
  * 200 Response Example:
  * {
   "userId": "",
   "status": "",
   "startTime": ""
}
  */
UsersApi.prototype.putUserIdRoutingstatus = function putUserIdRoutingstatus(userId, body){
    var requestPath = '/api/v2/users/{userId}/routingstatus';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get current user details.
  * @description This request is not valid when using the Client Credentials OAuth grant.
  * @memberOf UsersApi
  * @instance
  * @param {array} expand - Which fields, if any, to expand. Valid Values: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, profileSkills, locations, groupMemberships, date, geolocationsettings, organization, presencedefinitions, locationdefinitions, orgauthorization, favorites, superiors, directreports, adjacents, routingskills, fieldconfigs
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "chat": {
      "jabberId": ""
   },
   "department": "",
   "email": "",
   "primaryContactInfo": [],
   "addresses": [],
   "state": "",
   "title": "",
   "username": "",
   "manager": {
      "id": "",
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "primaryContactInfo": [],
      "addresses": [],
      "state": "",
      "title": "",
      "username": "",
      "manager": {},
      "images": [],
      "version": 0,
      "routingStatus": {},
      "presence": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "geolocation": {},
      "station": {},
      "authorization": {},
      "profileSkills": [],
      "locations": [],
      "groups": [],
      "selfUri": ""
   },
   "images": [],
   "version": 0,
   "routingStatus": {
      "userId": "",
      "status": "",
      "startTime": ""
   },
   "presence": {
      "id": "",
      "name": "",
      "source": "",
      "primary": true,
      "presenceDefinition": {},
      "message": "",
      "modifiedDate": "",
      "selfUri": ""
   },
   "conversationSummary": {
      "userId": "",
      "call": {},
      "callback": {},
      "email": {},
      "chat": {},
      "socialExpression": {},
      "video": {}
   },
   "outOfOffice": {
      "id": "",
      "name": "",
      "user": {},
      "startDate": "",
      "endDate": "",
      "active": true,
      "selfUri": ""
   },
   "geolocation": {
      "id": "",
      "name": "",
      "type": "",
      "primary": true,
      "latitude": {},
      "longitude": {},
      "country": "",
      "region": "",
      "city": "",
      "locations": [],
      "selfUri": ""
   },
   "station": {
      "associatedStation": {},
      "effectiveStation": {},
      "defaultStation": {},
      "lastAssociatedStation": {}
   },
   "authorization": {
      "roles": [],
      "permissions": [],
      "permissionPolicies": []
   },
   "profileSkills": [],
   "locations": [],
   "groups": [],
   "date": {
      "currentDate": ""
   },
   "geolocationSettings": {
      "id": "",
      "name": "",
      "enabled": true,
      "mapboxKey": "",
      "selfUri": ""
   },
   "organization": {
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
   },
   "presenceDefinitions": [],
   "locationDefinitions": [],
   "orgAuthorization": [],
   "favorites": [],
   "superiors": [],
   "directReports": [],
   "adjacents": {
      "superiors": [],
      "siblings": [],
      "directReports": []
   },
   "routingSkills": [],
   "fieldConfigs": {
      "org": {},
      "person": {},
      "group": {},
      "externalContact": {}
   },
   "selfUri": ""
}
  */
UsersApi.prototype.getMe = function getMe(expand){
    var requestPath = '/api/v2/users/me';
    var requestQuery = {};
    var requestBody;

    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary List profile skills for a user
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  */
UsersApi.prototype.getUserIdProfileskills = function getUserIdProfileskills(userId){
    var requestPath = '/api/v2/users/{userId}/profileskills';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update profile skills for a user
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @param {} body - Skills
  */
UsersApi.prototype.putUserIdProfileskills = function putUserIdProfileskills(userId, body){
    var requestPath = '/api/v2/users/{userId}/profileskills';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Set associated station
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @param {string} stationId - stationId
  */
UsersApi.prototype.putUserIdStationAssociatedstationStationId = function putUserIdStationAssociatedstationStationId(userId, stationId){
    var requestPath = '/api/v2/users/{userId}/station/associatedstation/{stationId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(stationId === undefined || stationId === null){
      throw new Error('Missing required  parameter: stationId');
    }
    requestPath = requestPath.replace('{stationId}', stationId);
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Clear associated station
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  */
UsersApi.prototype.deleteUserIdStationAssociatedstation = function deleteUserIdStationAssociatedstation(userId){
    var requestPath = '/api/v2/users/{userId}/station/associatedstation';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Set default station
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @param {string} stationId - stationId
  */
UsersApi.prototype.putUserIdStationDefaultstationStationId = function putUserIdStationDefaultstationStationId(userId, stationId){
    var requestPath = '/api/v2/users/{userId}/station/defaultstation/{stationId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(stationId === undefined || stationId === null){
      throw new Error('Missing required  parameter: stationId');
    }
    requestPath = requestPath.replace('{stationId}', stationId);
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Clear default station
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  */
UsersApi.prototype.deleteUserIdStationDefaultstation = function deleteUserIdStationDefaultstation(userId){
    var requestPath = '/api/v2/users/{userId}/station/defaultstation';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get station information for user
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @example
  * 200 Response Example:
  * {
   "associatedStation": {
      "id": "",
      "name": "",
      "type": "",
      "associatedUser": {},
      "associatedDate": "",
      "defaultUser": {},
      "providerInfo": {}
   },
   "effectiveStation": {
      "id": "",
      "name": "",
      "type": "",
      "associatedUser": {},
      "associatedDate": "",
      "defaultUser": {},
      "providerInfo": {}
   },
   "defaultStation": {
      "id": "",
      "name": "",
      "type": "",
      "associatedUser": {},
      "associatedDate": "",
      "defaultUser": {},
      "providerInfo": {}
   },
   "lastAssociatedStation": {
      "id": "",
      "name": "",
      "type": "",
      "associatedUser": {},
      "associatedDate": "",
      "defaultUser": {},
      "providerInfo": {}
   }
}
  */
UsersApi.prototype.getUserIdStation = function getUserIdStation(userId){
    var requestPath = '/api/v2/users/{userId}/station';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a user's Geolocation
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - user Id
  * @param {string} clientId - client Id
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "type": "",
   "primary": true,
   "latitude": {},
   "longitude": {},
   "country": "",
   "region": "",
   "city": "",
   "locations": [],
   "selfUri": ""
}
  */
UsersApi.prototype.getUserIdGeolocationsClientId = function getUserIdGeolocationsClientId(userId, clientId){
    var requestPath = '/api/v2/users/{userId}/geolocations/{clientId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(clientId === undefined || clientId === null){
      throw new Error('Missing required  parameter: clientId');
    }
    requestPath = requestPath.replace('{clientId}', clientId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Patch a user's Geolocation
  * @description The geolocation object can be patched one of three ways. Option 1: Set the 'primary' property to true. This will set the client as the user's primary geolocation source.  Option 2: Provide the 'latitude' and 'longitude' values.  This will enqueue an asynchronous update of the 'city', 'region', and 'country', generating a notification. A subsequent GET operation will include the new values for 'city', 'region' and 'country'.  Option 3:  Provide the 'city', 'region', 'country' values.  Option 1 can be combined with Option 2 or Option 3.  For example, update the client as primary and provide latitude and longitude values.
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - user Id
  * @param {string} clientId - client Id
  * @param {} body - Geolocation
  * @example
  * Body Example:
  * {
   "name": "",
   "type": "",
   "primary": true,
   "latitude": {},
   "longitude": {},
   "country": "",
   "region": "",
   "city": "",
   "locations": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "type": "",
   "primary": true,
   "latitude": {},
   "longitude": {},
   "country": "",
   "region": "",
   "city": "",
   "locations": [],
   "selfUri": ""
}
  */
UsersApi.prototype.patchUserIdGeolocationsClientId = function patchUserIdGeolocationsClientId(userId, clientId, body){
    var requestPath = '/api/v2/users/{userId}/geolocations/{clientId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
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
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Join or unjoin a queue for a user
  * @memberOf UsersApi
  * @instance
  * @param {string} queueId - Queue ID
  * @param {string} userId - User ID
  * @param {} body - Queue Member
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
   "mediaSettings": {},
   "bullseye": {
      "rings": []
   },
   "acwSettings": {
      "wrapupPrompt": "",
      "timeoutMs": 0
   },
   "skillEvaluationMethod": "",
   "queueFlow": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callingPartyName": "",
   "callingPartyNumber": "",
   "outboundEmailAddress": {
      "domain": {},
      "route": {}
   },
   "joined": true,
   "memberCount": 0
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
   "mediaSettings": {},
   "bullseye": {
      "rings": []
   },
   "acwSettings": {
      "wrapupPrompt": "",
      "timeoutMs": 0
   },
   "skillEvaluationMethod": "",
   "queueFlow": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callingPartyName": "",
   "callingPartyNumber": "",
   "outboundEmailAddress": {
      "domain": {},
      "route": {}
   },
   "joined": true,
   "memberCount": 0,
   "selfUri": ""
}
  */
UsersApi.prototype.patchUserIdQueuesQueueId = function patchUserIdQueuesQueueId(queueId, userId, body){
    var requestPath = '/api/v2/users/{userId}/queues/{queueId}';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a OutOfOffice
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "user": {
      "id": "",
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "primaryContactInfo": [],
      "addresses": [],
      "state": "",
      "title": "",
      "username": "",
      "manager": {},
      "images": [],
      "version": 0,
      "routingStatus": {},
      "presence": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "geolocation": {},
      "station": {},
      "authorization": {},
      "profileSkills": [],
      "locations": [],
      "groups": [],
      "selfUri": ""
   },
   "startDate": "",
   "endDate": "",
   "active": true,
   "selfUri": ""
}
  */
UsersApi.prototype.getUserIdOutofoffice = function getUserIdOutofoffice(userId){
    var requestPath = '/api/v2/users/{userId}/outofoffice';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an OutOfOffice
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @param {} body - The updated UserPresence
  * @example
  * Body Example:
  * {
   "name": "",
   "user": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "manager": {},
      "images": [],
      "version": 0
   },
   "startDate": "",
   "endDate": "",
   "active": true
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "user": {
      "id": "",
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "primaryContactInfo": [],
      "addresses": [],
      "state": "",
      "title": "",
      "username": "",
      "manager": {},
      "images": [],
      "version": 0,
      "routingStatus": {},
      "presence": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "geolocation": {},
      "station": {},
      "authorization": {},
      "profileSkills": [],
      "locations": [],
      "groups": [],
      "selfUri": ""
   },
   "startDate": "",
   "endDate": "",
   "active": true,
   "selfUri": ""
}
  */
UsersApi.prototype.putUserIdOutofoffice = function putUserIdOutofoffice(userId, body){
    var requestPath = '/api/v2/users/{userId}/outofoffice';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search users using the q64 value returned from a previous search
  * @memberOf UsersApi
  * @instance
  * @param {string} q64 - q64
  * @param {array} expand - expand
  * @example
  * 200 Response Example:
  * {
   "total": 0,
   "pageCount": 0,
   "pageSize": 0,
   "pageNumber": 0,
   "previousPage": "",
   "currentPage": "",
   "nextPage": "",
   "types": [],
   "results": []
}
  */
UsersApi.prototype.getSearch = function getSearch(q64, expand){
    var requestPath = '/api/v2/users/search';
    var requestQuery = {};
    var requestBody;

    if(q64 === undefined || q64 === null){
      throw new Error('Missing required  parameter: q64');
    }
    requestQuery["q64"] = q64;
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search users
  * @memberOf UsersApi
  * @instance
  * @param {} body - Search request options
  * @example
  * Body Example:
  * {
   "sortOrder": "",
   "sortBy": "",
   "pageSize": 0,
   "pageNumber": 0,
   "expand": [],
   "query": []
}
  * @example
  * 200 Response Example:
  * {
   "total": 0,
   "pageCount": 0,
   "pageSize": 0,
   "pageNumber": 0,
   "previousPage": "",
   "currentPage": "",
   "nextPage": "",
   "types": [],
   "results": []
}
  */
UsersApi.prototype.postSearch = function postSearch(body){
    var requestPath = '/api/v2/users/search';
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
  * @summary Returns a listing of roles and permissions for a user.
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @example
  * 200 Response Example:
  * {
   "roles": [],
   "permissions": [],
   "permissionPolicies": []
}
  */
UsersApi.prototype.getUserIdRoles = function getUserIdRoles(userId){
    var requestPath = '/api/v2/users/{userId}/roles';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Sets the user's roles
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @param {} body - List of roles
  * @example
  * 200 Response Example:
  * {
   "roles": [],
   "permissions": [],
   "permissionPolicies": []
}
  */
UsersApi.prototype.putUserIdRoles = function putUserIdRoles(userId, body){
    var requestPath = '/api/v2/users/{userId}/roles';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Removes all the roles from the user.
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  */
UsersApi.prototype.deleteUserIdRoles = function deleteUserIdRoles(userId){
    var requestPath = '/api/v2/users/{userId}/roles';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query for user details
  * @memberOf UsersApi
  * @instance
  * @param {} body - query
  * @example
  * Body Example:
  * {
   "interval": "",
   "userFilters": [],
   "presenceFilters": [],
   "routingStatusFilters": [],
   "presenceAggregations": [],
   "routingStatusAggregations": [],
   "paging": {
      "pageSize": 0,
      "pageNumber": 0
   },
   "order": ""
}
  * @example
  * 200 Response Example:
  * {
   "userDetails": [],
   "aggregations": []
}
  */
UsersApi.prototype.postUsersDetailsQuery = function postUsersDetailsQuery(body){
    var requestPath = '/api/v2/analytics/users/details/query';
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
  * @summary Query for user aggregates
  * @memberOf UsersApi
  * @instance
  * @param {} body - query
  * @example
  * Body Example:
  * {
   "interval": "",
   "granularity": "",
   "timeZone": "",
   "groupBy": [],
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": [],
   "flattenMultivaluedDimensions": true,
   "views": []
}
  * @example
  * 200 Response Example:
  * {
   "systemToOrganizationMappings": {},
   "results": []
}
  */
UsersApi.prototype.postUsersAggregatesQuery = function postUsersAggregatesQuery(body){
    var requestPath = '/api/v2/analytics/users/aggregates/query';
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
  * @summary Query for user observations
  * @memberOf UsersApi
  * @instance
  * @param {} body - query
  * @example
  * Body Example:
  * {
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": []
}
  * @example
  * 200 Response Example:
  * {
   "results": []
}
  */
UsersApi.prototype.postUsersObservationsQuery = function postUsersObservationsQuery(body){
    var requestPath = '/api/v2/analytics/users/observations/query';
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
  * @summary Get the list of available users.
  * @memberOf UsersApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {array} id - id
  * @param {string} sortOrder - Ascending or descending sort order
  ascending,
  descending,
  * @param {array} expand - Which fields, if any, to expand Valid Values: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, profileSkills, locations, groupMemberships
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
UsersApi.prototype.getUsers = function getUsers(pageSize, pageNumber, id, sortOrder, expand){
    var requestPath = '/api/v2/users';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["id"] = id;
    requestQuery["sortOrder"] = sortOrder;
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create user
  * @memberOf UsersApi
  * @instance
  * @param {} body - User
  * @example
  * Body Example:
  * {
   "name": "",
   "department": "",
   "email": "",
   "addresses": [],
   "title": "",
   "password": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "chat": {
      "jabberId": ""
   },
   "department": "",
   "email": "",
   "primaryContactInfo": [],
   "addresses": [],
   "state": "",
   "title": "",
   "username": "",
   "manager": {
      "id": "",
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "primaryContactInfo": [],
      "addresses": [],
      "state": "",
      "title": "",
      "username": "",
      "manager": {},
      "images": [],
      "version": 0,
      "routingStatus": {},
      "presence": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "geolocation": {},
      "station": {},
      "authorization": {},
      "profileSkills": [],
      "locations": [],
      "groups": [],
      "selfUri": ""
   },
   "images": [],
   "version": 0,
   "routingStatus": {
      "userId": "",
      "status": "",
      "startTime": ""
   },
   "presence": {
      "id": "",
      "name": "",
      "source": "",
      "primary": true,
      "presenceDefinition": {},
      "message": "",
      "modifiedDate": "",
      "selfUri": ""
   },
   "conversationSummary": {
      "userId": "",
      "call": {},
      "callback": {},
      "email": {},
      "chat": {},
      "socialExpression": {},
      "video": {}
   },
   "outOfOffice": {
      "id": "",
      "name": "",
      "user": {},
      "startDate": "",
      "endDate": "",
      "active": true,
      "selfUri": ""
   },
   "geolocation": {
      "id": "",
      "name": "",
      "type": "",
      "primary": true,
      "latitude": {},
      "longitude": {},
      "country": "",
      "region": "",
      "city": "",
      "locations": [],
      "selfUri": ""
   },
   "station": {
      "associatedStation": {},
      "effectiveStation": {},
      "defaultStation": {},
      "lastAssociatedStation": {}
   },
   "authorization": {
      "roles": [],
      "permissions": [],
      "permissionPolicies": []
   },
   "profileSkills": [],
   "locations": [],
   "groups": [],
   "selfUri": ""
}
  */
UsersApi.prototype.postUsers = function postUsers(body){
    var requestPath = '/api/v2/users';
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
  * @summary List routing skills for user
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortOrder - Ascending or descending sort order
  ascending,
  descending,
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
UsersApi.prototype.getUserIdRoutingskills = function getUserIdRoutingskills(userId, pageSize, pageNumber, sortOrder){
    var requestPath = '/api/v2/users/{userId}/routingskills';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["sortOrder"] = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Add routing skill to user
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @param {} body - Skill
  * @example
  * Body Example:
  * {
   "id": "",
   "proficiency": {}
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "proficiency": {},
   "state": "",
   "skillUri": "",
   "selfUri": ""
}
  */
UsersApi.prototype.postUserIdRoutingskills = function postUserIdRoutingskills(userId, body){
    var requestPath = '/api/v2/users/{userId}/routingskills';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update routing skill proficiency or state.
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @param {string} skillId - skillId
  * @param {} body - Skill
  * @example
  * Body Example:
  * {
   "name": "",
   "proficiency": {},
   "state": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "proficiency": {},
   "state": "",
   "skillUri": "",
   "selfUri": ""
}
  */
UsersApi.prototype.putUserIdRoutingskillsSkillId = function putUserIdRoutingskillsSkillId(userId, skillId, body){
    var requestPath = '/api/v2/users/{userId}/routingskills/{skillId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(skillId === undefined || skillId === null){
      throw new Error('Missing required  parameter: skillId');
    }
    requestPath = requestPath.replace('{skillId}', skillId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Remove routing skill from user
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @param {string} skillId - skillId
  */
UsersApi.prototype.deleteUserIdRoutingskillsSkillId = function deleteUserIdRoutingskillsSkillId(userId, skillId){
    var requestPath = '/api/v2/users/{userId}/routingskills/{skillId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(skillId === undefined || skillId === null){
      throw new Error('Missing required  parameter: skillId');
    }
    requestPath = requestPath.replace('{skillId}', skillId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get user.
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @param {array} expand - Which fields, if any, to expand Valid Values: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, profileSkills, locations, groupMemberships
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "chat": {
      "jabberId": ""
   },
   "department": "",
   "email": "",
   "primaryContactInfo": [],
   "addresses": [],
   "state": "",
   "title": "",
   "username": "",
   "manager": {
      "id": "",
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "primaryContactInfo": [],
      "addresses": [],
      "state": "",
      "title": "",
      "username": "",
      "manager": {},
      "images": [],
      "version": 0,
      "routingStatus": {},
      "presence": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "geolocation": {},
      "station": {},
      "authorization": {},
      "profileSkills": [],
      "locations": [],
      "groups": [],
      "selfUri": ""
   },
   "images": [],
   "version": 0,
   "routingStatus": {
      "userId": "",
      "status": "",
      "startTime": ""
   },
   "presence": {
      "id": "",
      "name": "",
      "source": "",
      "primary": true,
      "presenceDefinition": {},
      "message": "",
      "modifiedDate": "",
      "selfUri": ""
   },
   "conversationSummary": {
      "userId": "",
      "call": {},
      "callback": {},
      "email": {},
      "chat": {},
      "socialExpression": {},
      "video": {}
   },
   "outOfOffice": {
      "id": "",
      "name": "",
      "user": {},
      "startDate": "",
      "endDate": "",
      "active": true,
      "selfUri": ""
   },
   "geolocation": {
      "id": "",
      "name": "",
      "type": "",
      "primary": true,
      "latitude": {},
      "longitude": {},
      "country": "",
      "region": "",
      "city": "",
      "locations": [],
      "selfUri": ""
   },
   "station": {
      "associatedStation": {},
      "effectiveStation": {},
      "defaultStation": {},
      "lastAssociatedStation": {}
   },
   "authorization": {
      "roles": [],
      "permissions": [],
      "permissionPolicies": []
   },
   "profileSkills": [],
   "locations": [],
   "groups": [],
   "selfUri": ""
}
  */
UsersApi.prototype.getUserId = function getUserId(userId, expand){
    var requestPath = '/api/v2/users/{userId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete user
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @example
  * 200 Response Example:
  * {}
  */
UsersApi.prototype.deleteUserId = function deleteUserId(userId){
    var requestPath = '/api/v2/users/{userId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update user
  * @memberOf UsersApi
  * @instance
  * @param {string} userId - User ID
  * @param {} body - User
  * @example
  * Body Example:
  * {
   "name": "",
   "chat": {
      "jabberId": ""
   },
   "department": "",
   "email": "",
   "addresses": [],
   "title": "",
   "username": "",
   "manager": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "manager": {},
      "images": [],
      "version": 0
   },
   "images": [],
   "version": 0
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "chat": {
      "jabberId": ""
   },
   "department": "",
   "email": "",
   "primaryContactInfo": [],
   "addresses": [],
   "state": "",
   "title": "",
   "username": "",
   "manager": {
      "id": "",
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "primaryContactInfo": [],
      "addresses": [],
      "state": "",
      "title": "",
      "username": "",
      "manager": {},
      "images": [],
      "version": 0,
      "routingStatus": {},
      "presence": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "geolocation": {},
      "station": {},
      "authorization": {},
      "profileSkills": [],
      "locations": [],
      "groups": [],
      "selfUri": ""
   },
   "images": [],
   "version": 0,
   "routingStatus": {
      "userId": "",
      "status": "",
      "startTime": ""
   },
   "presence": {
      "id": "",
      "name": "",
      "source": "",
      "primary": true,
      "presenceDefinition": {},
      "message": "",
      "modifiedDate": "",
      "selfUri": ""
   },
   "conversationSummary": {
      "userId": "",
      "call": {},
      "callback": {},
      "email": {},
      "chat": {},
      "socialExpression": {},
      "video": {}
   },
   "outOfOffice": {
      "id": "",
      "name": "",
      "user": {},
      "startDate": "",
      "endDate": "",
      "active": true,
      "selfUri": ""
   },
   "geolocation": {
      "id": "",
      "name": "",
      "type": "",
      "primary": true,
      "latitude": {},
      "longitude": {},
      "country": "",
      "region": "",
      "city": "",
      "locations": [],
      "selfUri": ""
   },
   "station": {
      "associatedStation": {},
      "effectiveStation": {},
      "defaultStation": {},
      "lastAssociatedStation": {}
   },
   "authorization": {
      "roles": [],
      "permissions": [],
      "permissionPolicies": []
   },
   "profileSkills": [],
   "locations": [],
   "groups": [],
   "selfUri": ""
}
  */
UsersApi.prototype.patchUserId = function patchUserId(userId, body){
    var requestPath = '/api/v2/users/{userId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};


module.exports = UsersApi;
