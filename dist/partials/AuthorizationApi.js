/*jshint -W069 */
/**
* @class AuthorizationApi
* @example
* var api = new purecloud.platform.AuthorizationApi(pureCloudSession);
*/
function AuthorizationApi(session) {
    if(!(this instanceof AuthorizationApi)) {
        return new AuthorizationApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('AuthorizationApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get a single organization role.
  * @description Get the organization role specified by its ID.
  * @memberOf AuthorizationApi
  * @instance
  * @param {string} roleId - Role ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "permissionPolicies": [],
   "userCount": 0,
   "roleNeedsUpdate": true,
   "base": true,
   "default": true,
   "selfUri": ""
}
  */
AuthorizationApi.prototype.getRolesRoleId = function getRolesRoleId(roleId){
    var requestPath = '/api/v2/authorization/roles/{roleId}';
    var requestQuery = {};
    var requestBody;

    if(roleId === undefined || roleId === null){
      throw new Error('Missing required  parameter: roleId');
    }
    requestPath = requestPath.replace('{roleId}', roleId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an organization role.
  * @description Update
  * @memberOf AuthorizationApi
  * @instance
  * @param {string} roleId - Role ID
  * @param {} body - Organization role
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "permissionPolicies": [],
   "userCount": 0,
   "roleNeedsUpdate": true,
   "base": true,
   "default": true
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "permissionPolicies": [],
   "userCount": 0,
   "roleNeedsUpdate": true,
   "base": true,
   "default": true,
   "selfUri": ""
}
  */
AuthorizationApi.prototype.putRolesRoleId = function putRolesRoleId(roleId, body){
    var requestPath = '/api/v2/authorization/roles/{roleId}';
    var requestQuery = {};
    var requestBody;

    if(roleId === undefined || roleId === null){
      throw new Error('Missing required  parameter: roleId');
    }
    requestPath = requestPath.replace('{roleId}', roleId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an organization role.
  * @memberOf AuthorizationApi
  * @instance
  * @param {string} roleId - Role ID
  */
AuthorizationApi.prototype.deleteRolesRoleId = function deleteRolesRoleId(roleId){
    var requestPath = '/api/v2/authorization/roles/{roleId}';
    var requestQuery = {};
    var requestBody;

    if(roleId === undefined || roleId === null){
      throw new Error('Missing required  parameter: roleId');
    }
    requestPath = requestPath.replace('{roleId}', roleId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Patch Organization Role for needsUpdate Field
  * @description Patch Organization Role for needsUpdate Field
  * @memberOf AuthorizationApi
  * @instance
  * @param {string} roleId - Role ID
  * @param {} body - Organization role
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "permissionPolicies": [],
   "userCount": 0,
   "roleNeedsUpdate": true,
   "base": true,
   "default": true
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "permissionPolicies": [],
   "userCount": 0,
   "roleNeedsUpdate": true,
   "base": true,
   "default": true,
   "selfUri": ""
}
  */
AuthorizationApi.prototype.patchRolesRoleId = function patchRolesRoleId(roleId, body){
    var requestPath = '/api/v2/authorization/roles/{roleId}';
    var requestQuery = {};
    var requestBody;

    if(roleId === undefined || roleId === null){
      throw new Error('Missing required  parameter: roleId');
    }
    requestPath = requestPath.replace('{roleId}', roleId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get all permissions.
  * @description Retrieve a list of all permission defined in the system.
  * @memberOf AuthorizationApi
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
AuthorizationApi.prototype.getPermissions = function getPermissions(pageSize, pageNumber){
    var requestPath = '/api/v2/authorization/permissions';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of enabled products
  * @description Gets the list of enabled products. Some example product names are: collaborateFree, collaboratePro, communicate, and engage.
  * @memberOf AuthorizationApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "pageCount": 0
}
  */
AuthorizationApi.prototype.getProducts = function getProducts(){
    var requestPath = '/api/v2/authorization/products';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get an org role to default role comparison comparison
  * @description Compares any organization role to a default role id and show differences
  * @memberOf AuthorizationApi
  * @instance
  * @param {string} leftRoleId - Left Role ID
  * @param {string} rightRoleId - Right Role id
  * @example
  * 200 Response Example:
  * {
   "removedPermissionPolicies": [],
   "addedPermissionPolicies": [],
   "samePermissionPolicies": [],
   "userOrgRole": {
      "id": "",
      "name": "",
      "description": "",
      "defaultRoleId": "",
      "permissions": [],
      "permissionPolicies": [],
      "userCount": 0,
      "roleNeedsUpdate": true,
      "base": true,
      "default": true,
      "selfUri": ""
   },
   "roleFromDefault": {
      "id": "",
      "name": "",
      "description": "",
      "defaultRoleId": "",
      "permissions": [],
      "permissionPolicies": [],
      "userCount": 0,
      "roleNeedsUpdate": true,
      "base": true,
      "default": true,
      "selfUri": ""
   }
}
  */
AuthorizationApi.prototype.getRolesLeftroleIdComparedefaultRightroleId = function getRolesLeftroleIdComparedefaultRightroleId(leftRoleId, rightRoleId){
    var requestPath = '/api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}';
    var requestQuery = {};
    var requestBody;

    if(leftRoleId === undefined || leftRoleId === null){
      throw new Error('Missing required  parameter: leftRoleId');
    }
    requestPath = requestPath.replace('{leftRoleId}', leftRoleId);
    if(rightRoleId === undefined || rightRoleId === null){
      throw new Error('Missing required  parameter: rightRoleId');
    }
    requestPath = requestPath.replace('{rightRoleId}', rightRoleId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get an unsaved org role to default role comparison
  * @description Allows users to compare their existing roles in an unsaved state to its default role
  * @memberOf AuthorizationApi
  * @instance
  * @param {string} leftRoleId - Left Role ID
  * @param {string} rightRoleId - Right Role id
  * @param {} body - Organization role
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "permissionPolicies": [],
   "userCount": 0,
   "roleNeedsUpdate": true,
   "base": true,
   "default": true
}
  * @example
  * 200 Response Example:
  * {
   "removedPermissionPolicies": [],
   "addedPermissionPolicies": [],
   "samePermissionPolicies": [],
   "userOrgRole": {
      "id": "",
      "name": "",
      "description": "",
      "defaultRoleId": "",
      "permissions": [],
      "permissionPolicies": [],
      "userCount": 0,
      "roleNeedsUpdate": true,
      "base": true,
      "default": true,
      "selfUri": ""
   },
   "roleFromDefault": {
      "id": "",
      "name": "",
      "description": "",
      "defaultRoleId": "",
      "permissions": [],
      "permissionPolicies": [],
      "userCount": 0,
      "roleNeedsUpdate": true,
      "base": true,
      "default": true,
      "selfUri": ""
   }
}
  */
AuthorizationApi.prototype.postRolesLeftroleIdComparedefaultRightroleId = function postRolesLeftroleIdComparedefaultRightroleId(leftRoleId, rightRoleId, body){
    var requestPath = '/api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}';
    var requestQuery = {};
    var requestBody;

    if(leftRoleId === undefined || leftRoleId === null){
      throw new Error('Missing required  parameter: leftRoleId');
    }
    requestPath = requestPath.replace('{leftRoleId}', leftRoleId);
    if(rightRoleId === undefined || rightRoleId === null){
      throw new Error('Missing required  parameter: rightRoleId');
    }
    requestPath = requestPath.replace('{rightRoleId}', rightRoleId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Restores all default roles
  * @description This endpoint serves several purposes. 1. It provides the org with default roles. This is important for default roles that will be added after go-live (they can retroactively add the new default-role). Note: When not using a query param of force=true, it only adds the default roles not configured for the org; it does not overwrite roles. 2. Using the query param force=true, you can restore all default roles. Note: This does not have an effect on custom roles.
  * @memberOf AuthorizationApi
  * @instance
  * @param {boolean} force - Restore default roles
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
AuthorizationApi.prototype.postRolesDefault = function postRolesDefault(force){
    var requestPath = '/api/v2/authorization/roles/default';
    var requestQuery = {};
    var requestBody;

    requestQuery["force"] = force;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Restore specified default roles
  * @memberOf AuthorizationApi
  * @instance
  * @param {} body - Organization roles list
  * @example
  * Body Example:
  * [
 {
  "name": "",
  "description": "",
  "defaultRoleId": "",
  "permissions": [],
  "permissionPolicies": [],
  "userCount": 0,
  "roleNeedsUpdate": true,
  "base": true,
  "default": true
 }
]
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
AuthorizationApi.prototype.putRolesDefault = function putRolesDefault(body){
    var requestPath = '/api/v2/authorization/roles/default';
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
  * @summary Sets the users for the role
  * @memberOf AuthorizationApi
  * @instance
  * @param {string} roleId - Role ID
  * @param {} body - List of user IDs
  */
AuthorizationApi.prototype.putRolesRoleIdUsersAdd = function putRolesRoleIdUsersAdd(roleId, body){
    var requestPath = '/api/v2/authorization/roles/{roleId}/users/add';
    var requestQuery = {};
    var requestBody;

    if(roleId === undefined || roleId === null){
      throw new Error('Missing required  parameter: roleId');
    }
    requestPath = requestPath.replace('{roleId}', roleId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Removes the users from the role
  * @memberOf AuthorizationApi
  * @instance
  * @param {string} roleId - Role ID
  * @param {} body - List of user IDs
  */
AuthorizationApi.prototype.putRolesRoleIdUsersRemove = function putRolesRoleIdUsersRemove(roleId, body){
    var requestPath = '/api/v2/authorization/roles/{roleId}/users/remove';
    var requestQuery = {};
    var requestBody;

    if(roleId === undefined || roleId === null){
      throw new Error('Missing required  parameter: roleId');
    }
    requestPath = requestPath.replace('{roleId}', roleId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Retrieve a list of all roles defined for the organization
  * @memberOf AuthorizationApi
  * @instance
  * @param {integer} pageSize - The total page size requested
  * @param {integer} pageNumber - The page number requested
  * @param {string} sortBy - variable name requested to sort by
  * @param {array} expand - variable name requested by expand list
  * @param {string} nextPage - next page token
  * @param {string} previousPage - Previous page token
  * @param {array} permission - 
  * @param {boolean} userCount - 
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
AuthorizationApi.prototype.getRoles = function getRoles(pageSize, pageNumber, sortBy, expand, nextPage, previousPage, permission, userCount){
    var requestPath = '/api/v2/authorization/roles';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["sortBy"] = sortBy;
    requestQuery["expand"] = expand;
    requestQuery["nextPage"] = nextPage;
    requestQuery["previousPage"] = previousPage;
    requestQuery["permission"] = permission;
    requestQuery["userCount"] = userCount;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create an organization role.
  * @memberOf AuthorizationApi
  * @instance
  * @param {} body - Organization role
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "permissionPolicies": [],
   "userCount": 0,
   "roleNeedsUpdate": true,
   "base": true,
   "default": true
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "permissionPolicies": [],
   "userCount": 0,
   "roleNeedsUpdate": true,
   "base": true,
   "default": true,
   "selfUri": ""
}
  */
AuthorizationApi.prototype.postRoles = function postRoles(body){
    var requestPath = '/api/v2/authorization/roles';
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
  * @memberOf AuthorizationApi
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
AuthorizationApi.prototype.getUserIdRoles = function getUserIdRoles(userId){
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
  * @memberOf AuthorizationApi
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
AuthorizationApi.prototype.putUserIdRoles = function putUserIdRoles(userId, body){
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
  * @memberOf AuthorizationApi
  * @instance
  * @param {string} userId - User ID
  */
AuthorizationApi.prototype.deleteUserIdRoles = function deleteUserIdRoles(userId){
    var requestPath = '/api/v2/users/{userId}/roles';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};


module.exports = AuthorizationApi;
