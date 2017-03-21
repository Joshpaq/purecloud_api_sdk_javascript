/*jshint -W069 */
/**
* @class GroupsApi
* @example
* var api = new purecloud.platform.GroupsApi(pureCloudSession);
*/
function GroupsApi(session) {
    if(!(this instanceof GroupsApi)) {
        return new GroupsApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('GroupsApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get group members
  * @memberOf GroupsApi
  * @instance
  * @param {string} groupId - Group ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
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
   "selfUri": "",
   "firstUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
GroupsApi.prototype.getGroupIdMembers = function getGroupIdMembers(groupId, pageSize, pageNumber, sortOrder, expand){
    var requestPath = '/api/v2/groups/{groupId}/members';
    var requestQuery = {};
    var requestBody;

    if(groupId === undefined || groupId === null){
      throw new Error('Missing required  parameter: groupId');
    }
    requestPath = requestPath.replace('{groupId}', groupId);
    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["sortOrder"] = sortOrder;
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Add members
  * @memberOf GroupsApi
  * @instance
  * @param {string} groupId - Group ID
  * @param {} body - Add members
  * @example
  * Body Example:
  * {
   "memberIds": [],
   "version": 0
}
  */
GroupsApi.prototype.postGroupIdMembers = function postGroupIdMembers(groupId, body){
    var requestPath = '/api/v2/groups/{groupId}/members';
    var requestQuery = {};
    var requestBody;

    if(groupId === undefined || groupId === null){
      throw new Error('Missing required  parameter: groupId');
    }
    requestPath = requestPath.replace('{groupId}', groupId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Remove members
  * @memberOf GroupsApi
  * @instance
  * @param {string} groupId - Group ID
  * @param {string} ids - Comma separated list of userIds to remove
  */
GroupsApi.prototype.deleteGroupIdMembers = function deleteGroupIdMembers(groupId, ids){
    var requestPath = '/api/v2/groups/{groupId}/members';
    var requestQuery = {};
    var requestBody;

    if(groupId === undefined || groupId === null){
      throw new Error('Missing required  parameter: groupId');
    }
    requestPath = requestPath.replace('{groupId}', groupId);
    if(ids === undefined || ids === null){
      throw new Error('Missing required  parameter: ids');
    }
    requestQuery["ids"] = ids;
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search groups using the q64 value returned from a previous search
  * @memberOf GroupsApi
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
GroupsApi.prototype.getSearch = function getSearch(q64, expand){
    var requestPath = '/api/v2/groups/search';
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
  * @summary Search groups
  * @memberOf GroupsApi
  * @instance
  * @param {} body - Search request options
  * @example
  * Body Example:
  * {
   "sortOrder": "",
   "sortBy": "",
   "pageSize": 0,
   "pageNumber": 0,
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
GroupsApi.prototype.postSearch = function postSearch(body){
    var requestPath = '/api/v2/groups/search';
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
  * @summary Fetch field config for an entity type
  * @memberOf GroupsApi
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
GroupsApi.prototype.getFieldconfig = function getFieldconfig(type){
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
  * @summary Get group
  * @memberOf GroupsApi
  * @instance
  * @param {string} groupId - Group ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "dateModified": "",
   "memberCount": 0,
   "state": "",
   "version": 0,
   "type": "",
   "images": [],
   "addresses": [],
   "rulesVisible": true,
   "visibility": "",
   "selfUri": ""
}
  */
GroupsApi.prototype.getGroupId = function getGroupId(groupId){
    var requestPath = '/api/v2/groups/{groupId}';
    var requestQuery = {};
    var requestBody;

    if(groupId === undefined || groupId === null){
      throw new Error('Missing required  parameter: groupId');
    }
    requestPath = requestPath.replace('{groupId}', groupId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update group
  * @memberOf GroupsApi
  * @instance
  * @param {string} groupId - Group ID
  * @param {} body - Group
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "state": "",
   "version": 0,
   "images": [],
   "addresses": [],
   "rulesVisible": true,
   "visibility": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "dateModified": "",
   "memberCount": 0,
   "state": "",
   "version": 0,
   "type": "",
   "images": [],
   "addresses": [],
   "rulesVisible": true,
   "visibility": "",
   "selfUri": ""
}
  */
GroupsApi.prototype.putGroupId = function putGroupId(groupId, body){
    var requestPath = '/api/v2/groups/{groupId}';
    var requestQuery = {};
    var requestBody;

    if(groupId === undefined || groupId === null){
      throw new Error('Missing required  parameter: groupId');
    }
    requestPath = requestPath.replace('{groupId}', groupId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete group
  * @memberOf GroupsApi
  * @instance
  * @param {string} groupId - Group ID
  */
GroupsApi.prototype.deleteGroupId = function deleteGroupId(groupId){
    var requestPath = '/api/v2/groups/{groupId}';
    var requestQuery = {};
    var requestBody;

    if(groupId === undefined || groupId === null){
      throw new Error('Missing required  parameter: groupId');
    }
    requestPath = requestPath.replace('{groupId}', groupId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a group list
  * @memberOf GroupsApi
  * @instance
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
   "selfUri": "",
   "firstUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
GroupsApi.prototype.getGroups = function getGroups(pageSize, pageNumber, sortOrder){
    var requestPath = '/api/v2/groups';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["sortOrder"] = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a group
  * @memberOf GroupsApi
  * @instance
  * @param {} body - Group
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "type": "",
   "images": [],
   "addresses": [],
   "rulesVisible": true,
   "visibility": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "dateModified": "",
   "memberCount": 0,
   "state": "",
   "version": 0,
   "type": "",
   "images": [],
   "addresses": [],
   "rulesVisible": true,
   "visibility": "",
   "selfUri": ""
}
  */
GroupsApi.prototype.postGroups = function postGroups(body){
    var requestPath = '/api/v2/groups';
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


module.exports = GroupsApi;
