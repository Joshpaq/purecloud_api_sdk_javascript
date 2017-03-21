/*jshint -W069 */
/**
* @class ArchitectApi
* @example
* var api = new purecloud.platform.ArchitectApi(pureCloudSession);
*/
function ArchitectApi(session) {
    if(!(this instanceof ArchitectApi)) {
        return new ArchitectApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('ArchitectApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get System Prompts
  * @memberOf ArchitectApi
  * @instance
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
  * @param {string} name - Name
  * @param {string} description - Description
  * @param {string} nameOrDescription - Name or description
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
ArchitectApi.prototype.getSystemprompts = function getSystemprompts(pageNumber, pageSize, sortBy, sortOrder, name, description, nameOrDescription){
    var requestPath = '/api/v2/architect/systemprompts';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageNumber"] = pageNumber;
    requestQuery["pageSize"] = pageSize;
    requestQuery["sortBy"] = sortBy;
    requestQuery["sortOrder"] = sortOrder;
    requestQuery["name"] = name;
    requestQuery["description"] = description;
    requestQuery["nameOrDescription"] = nameOrDescription;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a system prompt
  * @memberOf ArchitectApi
  * @instance
  * @param {string} promptId - promptId
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "resources": [],
   "selfUri": ""
}
  */
ArchitectApi.prototype.getSystempromptsPromptId = function getSystempromptsPromptId(promptId){
    var requestPath = '/api/v2/architect/systemprompts/{promptId}';
    var requestQuery = {};
    var requestBody;

    if(promptId === undefined || promptId === null){
      throw new Error('Missing required  parameter: promptId');
    }
    requestPath = requestPath.replace('{promptId}', promptId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get specified user prompt resource
  * @memberOf ArchitectApi
  * @instance
  * @param {string} promptId - Prompt ID
  * @param {string} languageCode - Language
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "promptId": "",
   "language": "",
   "mediaUri": "",
   "ttsString": "",
   "uploadStatus": "",
   "uploadUri": "",
   "languageDefault": true,
   "tags": {},
   "durationSeconds": {},
   "selfUri": ""
}
  */
ArchitectApi.prototype.getPromptsPromptIdResourcesLanguagecode = function getPromptsPromptIdResourcesLanguagecode(promptId, languageCode){
    var requestPath = '/api/v2/architect/prompts/{promptId}/resources/{languageCode}';
    var requestQuery = {};
    var requestBody;

    if(promptId === undefined || promptId === null){
      throw new Error('Missing required  parameter: promptId');
    }
    requestPath = requestPath.replace('{promptId}', promptId);
    if(languageCode === undefined || languageCode === null){
      throw new Error('Missing required  parameter: languageCode');
    }
    requestPath = requestPath.replace('{languageCode}', languageCode);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update specified user prompt resource
  * @memberOf ArchitectApi
  * @instance
  * @param {string} promptId - Prompt ID
  * @param {string} languageCode - Language
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "promptId": "",
   "language": "",
   "mediaUri": "",
   "ttsString": "",
   "uploadStatus": "",
   "uploadUri": "",
   "languageDefault": true,
   "tags": {},
   "durationSeconds": {}
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "promptId": "",
   "language": "",
   "mediaUri": "",
   "ttsString": "",
   "uploadStatus": "",
   "uploadUri": "",
   "languageDefault": true,
   "tags": {},
   "durationSeconds": {},
   "selfUri": ""
}
  */
ArchitectApi.prototype.putPromptsPromptIdResourcesLanguagecode = function putPromptsPromptIdResourcesLanguagecode(promptId, languageCode, body){
    var requestPath = '/api/v2/architect/prompts/{promptId}/resources/{languageCode}';
    var requestQuery = {};
    var requestBody;

    if(promptId === undefined || promptId === null){
      throw new Error('Missing required  parameter: promptId');
    }
    requestPath = requestPath.replace('{promptId}', promptId);
    if(languageCode === undefined || languageCode === null){
      throw new Error('Missing required  parameter: languageCode');
    }
    requestPath = requestPath.replace('{languageCode}', languageCode);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete specified user prompt resource
  * @memberOf ArchitectApi
  * @instance
  * @param {string} promptId - Prompt ID
  * @param {string} languageCode - Language
  */
ArchitectApi.prototype.deletePromptsPromptIdResourcesLanguagecode = function deletePromptsPromptIdResourcesLanguagecode(promptId, languageCode){
    var requestPath = '/api/v2/architect/prompts/{promptId}/resources/{languageCode}';
    var requestQuery = {};
    var requestBody;

    if(promptId === undefined || promptId === null){
      throw new Error('Missing required  parameter: promptId');
    }
    requestPath = requestPath.replace('{promptId}', promptId);
    if(languageCode === undefined || languageCode === null){
      throw new Error('Missing required  parameter: languageCode');
    }
    requestPath = requestPath.replace('{languageCode}', languageCode);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a system prompt resource.
  * @memberOf ArchitectApi
  * @instance
  * @param {string} promptId - Prompt ID
  * @param {string} languageCode - Language
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "promptId": "",
   "language": "",
   "durationSeconds": {},
   "mediaUri": "",
   "ttsString": "",
   "uploadUri": "",
   "uploadStatus": "",
   "hasDefault": true,
   "languageDefault": true,
   "tags": {},
   "selfUri": ""
}
  */
ArchitectApi.prototype.getSystempromptsPromptIdResourcesLanguagecode = function getSystempromptsPromptIdResourcesLanguagecode(promptId, languageCode){
    var requestPath = '/api/v2/architect/systemprompts/{promptId}/resources/{languageCode}';
    var requestQuery = {};
    var requestBody;

    if(promptId === undefined || promptId === null){
      throw new Error('Missing required  parameter: promptId');
    }
    requestPath = requestPath.replace('{promptId}', promptId);
    if(languageCode === undefined || languageCode === null){
      throw new Error('Missing required  parameter: languageCode');
    }
    requestPath = requestPath.replace('{languageCode}', languageCode);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Updates a system prompt resource override.
  * @memberOf ArchitectApi
  * @instance
  * @param {string} promptId - Prompt ID
  * @param {string} languageCode - Language
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "promptId": "",
   "language": "",
   "durationSeconds": {},
   "mediaUri": "",
   "ttsString": "",
   "uploadUri": "",
   "uploadStatus": "",
   "hasDefault": true,
   "languageDefault": true,
   "tags": {}
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "promptId": "",
   "language": "",
   "durationSeconds": {},
   "mediaUri": "",
   "ttsString": "",
   "uploadUri": "",
   "uploadStatus": "",
   "hasDefault": true,
   "languageDefault": true,
   "tags": {},
   "selfUri": ""
}
  */
ArchitectApi.prototype.putSystempromptsPromptIdResourcesLanguagecode = function putSystempromptsPromptIdResourcesLanguagecode(promptId, languageCode, body){
    var requestPath = '/api/v2/architect/systemprompts/{promptId}/resources/{languageCode}';
    var requestQuery = {};
    var requestBody;

    if(promptId === undefined || promptId === null){
      throw new Error('Missing required  parameter: promptId');
    }
    requestPath = requestPath.replace('{promptId}', promptId);
    if(languageCode === undefined || languageCode === null){
      throw new Error('Missing required  parameter: languageCode');
    }
    requestPath = requestPath.replace('{languageCode}', languageCode);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a system prompt resource override.
  * @memberOf ArchitectApi
  * @instance
  * @param {string} promptId - Prompt ID
  * @param {string} languageCode - Language
  */
ArchitectApi.prototype.deleteSystempromptsPromptIdResourcesLanguagecode = function deleteSystempromptsPromptIdResourcesLanguagecode(promptId, languageCode){
    var requestPath = '/api/v2/architect/systemprompts/{promptId}/resources/{languageCode}';
    var requestQuery = {};
    var requestBody;

    if(promptId === undefined || promptId === null){
      throw new Error('Missing required  parameter: promptId');
    }
    requestPath = requestPath.replace('{promptId}', promptId);
    if(languageCode === undefined || languageCode === null){
      throw new Error('Missing required  parameter: languageCode');
    }
    requestPath = requestPath.replace('{languageCode}', languageCode);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a pageable list of flows, filtered by query parameters
  * @description Multiple IDs can be specified, in which case all matching flows will be returned, and no other parameters will be evaluated.
  * @memberOf ArchitectApi
  * @instance
  * @param {string} type - Type
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
  * @param {array} id - ID
  * @param {string} name - Name
  * @param {string} description - Description
  * @param {string} nameOrDescription - Name or description
  * @param {string} publishVersionId - Publish version ID
  * @param {string} editableBy - Editable by
  * @param {string} lockedBy - Locked by
  * @param {string} secure - Secure
  any,
  checkedin,
  published,
  * @param {boolean} doDeleted - Include deleted
  * @param {boolean} includeSchemas - Include variable schemas
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
ArchitectApi.prototype.getFlows = function getFlows(type, pageNumber, pageSize, sortBy, sortOrder, id, name, description, nameOrDescription, publishVersionId, editableBy, lockedBy, secure, doDeleted, includeSchemas){
    var requestPath = '/api/v2/flows';
    var requestQuery = {};
    var requestBody;

    if(type === undefined || type === null){
      throw new Error('Missing required  parameter: type');
    }
    requestQuery["type"] = type;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["pageSize"] = pageSize;
    requestQuery["sortBy"] = sortBy;
    requestQuery["sortOrder"] = sortOrder;
    requestQuery["id"] = id;
    requestQuery["name"] = name;
    requestQuery["description"] = description;
    requestQuery["nameOrDescription"] = nameOrDescription;
    requestQuery["publishVersionId"] = publishVersionId;
    requestQuery["editableBy"] = editableBy;
    requestQuery["lockedBy"] = lockedBy;
    requestQuery["secure"] = secure;
    requestQuery["deleted"] = doDeleted;
    requestQuery["includeSchemas"] = includeSchemas;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a pageable list of user prompts
  * @description The returned list is pageable, and query parameters can be used for filtering.  Multiple names can be specified, in which case all matching prompts will be returned, and no other filters will be evaluated.
  * @memberOf ArchitectApi
  * @instance
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
  * @param {string} name - Name
  * @param {string} description - Description
  * @param {string} nameOrDescription - Name or description
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
ArchitectApi.prototype.getPrompts = function getPrompts(pageNumber, pageSize, name, description, nameOrDescription){
    var requestPath = '/api/v2/architect/prompts';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageNumber"] = pageNumber;
    requestQuery["pageSize"] = pageSize;
    requestQuery["name"] = name;
    requestQuery["description"] = description;
    requestQuery["nameOrDescription"] = nameOrDescription;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a new user prompt
  * @memberOf ArchitectApi
  * @instance
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "resources": [],
   "currentOperation": {
      "id": "",
      "complete": true,
      "user": {},
      "errorMessage": "",
      "errorCode": "",
      "errorDetails": [],
      "errorMessageParams": {},
      "actionName": "",
      "actionStatus": ""
   }
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "resources": [],
   "currentOperation": {
      "id": "",
      "complete": true,
      "user": {},
      "errorMessage": "",
      "errorCode": "",
      "errorDetails": [],
      "errorMessageParams": {},
      "actionName": "",
      "actionStatus": ""
   },
   "selfUri": ""
}
  */
ArchitectApi.prototype.postPrompts = function postPrompts(body){
    var requestPath = '/api/v2/architect/prompts';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Batch-delete a list of prompts asynchronously
  * @description Multiple IDs can be specified, in which case all specified prompts will be deleted.
  * @memberOf ArchitectApi
  * @instance
  * @param {array} id - List of Prompt IDs
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "complete": true,
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
   "errorMessage": "",
   "errorCode": "",
   "errorDetails": [],
   "errorMessageParams": {},
   "actionName": "",
   "actionStatus": ""
}
  */
ArchitectApi.prototype.deletePrompts = function deletePrompts(id){
    var requestPath = '/api/v2/architect/prompts';
    var requestQuery = {};
    var requestBody;

    if(id === undefined || id === null){
      throw new Error('Missing required  parameter: id');
    }
    requestQuery["id"] = id;
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get specified user prompt
  * @memberOf ArchitectApi
  * @instance
  * @param {string} promptId - Prompt ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "resources": [],
   "currentOperation": {
      "id": "",
      "complete": true,
      "user": {},
      "errorMessage": "",
      "errorCode": "",
      "errorDetails": [],
      "errorMessageParams": {},
      "actionName": "",
      "actionStatus": ""
   },
   "selfUri": ""
}
  */
ArchitectApi.prototype.getPromptsPromptId = function getPromptsPromptId(promptId){
    var requestPath = '/api/v2/architect/prompts/{promptId}';
    var requestQuery = {};
    var requestBody;

    if(promptId === undefined || promptId === null){
      throw new Error('Missing required  parameter: promptId');
    }
    requestPath = requestPath.replace('{promptId}', promptId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update specified user prompt
  * @memberOf ArchitectApi
  * @instance
  * @param {string} promptId - Prompt ID
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "resources": [],
   "currentOperation": {
      "id": "",
      "complete": true,
      "user": {},
      "errorMessage": "",
      "errorCode": "",
      "errorDetails": [],
      "errorMessageParams": {},
      "actionName": "",
      "actionStatus": ""
   }
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "resources": [],
   "currentOperation": {
      "id": "",
      "complete": true,
      "user": {},
      "errorMessage": "",
      "errorCode": "",
      "errorDetails": [],
      "errorMessageParams": {},
      "actionName": "",
      "actionStatus": ""
   },
   "selfUri": ""
}
  */
ArchitectApi.prototype.putPromptsPromptId = function putPromptsPromptId(promptId, body){
    var requestPath = '/api/v2/architect/prompts/{promptId}';
    var requestQuery = {};
    var requestBody;

    if(promptId === undefined || promptId === null){
      throw new Error('Missing required  parameter: promptId');
    }
    requestPath = requestPath.replace('{promptId}', promptId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete specified user prompt
  * @memberOf ArchitectApi
  * @instance
  * @param {string} promptId - Prompt ID
  * @param {boolean} allResources - Whether or not to delete all the prompt resources
  */
ArchitectApi.prototype.deletePromptsPromptId = function deletePromptsPromptId(promptId, allResources){
    var requestPath = '/api/v2/architect/prompts/{promptId}';
    var requestQuery = {};
    var requestBody;

    if(promptId === undefined || promptId === null){
      throw new Error('Missing required  parameter: promptId');
    }
    requestPath = requestPath.replace('{promptId}', promptId);
    requestQuery["allResources"] = allResources;
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get IVR System Prompt resources.
  * @memberOf ArchitectApi
  * @instance
  * @param {string} promptId - Prompt ID
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
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
ArchitectApi.prototype.getSystempromptsPromptIdResources = function getSystempromptsPromptIdResources(promptId, pageNumber, pageSize, sortBy, sortOrder){
    var requestPath = '/api/v2/architect/systemprompts/{promptId}/resources';
    var requestQuery = {};
    var requestBody;

    if(promptId === undefined || promptId === null){
      throw new Error('Missing required  parameter: promptId');
    }
    requestPath = requestPath.replace('{promptId}', promptId);
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["pageSize"] = pageSize;
    requestQuery["sortBy"] = sortBy;
    requestQuery["sortOrder"] = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create system prompt resource override.
  * @memberOf ArchitectApi
  * @instance
  * @param {string} promptId - Prompt ID
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "promptId": "",
   "language": "",
   "durationSeconds": {},
   "mediaUri": "",
   "ttsString": "",
   "uploadUri": "",
   "uploadStatus": "",
   "hasDefault": true,
   "languageDefault": true,
   "tags": {}
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "promptId": "",
   "language": "",
   "durationSeconds": {},
   "mediaUri": "",
   "ttsString": "",
   "uploadUri": "",
   "uploadStatus": "",
   "hasDefault": true,
   "languageDefault": true,
   "tags": {},
   "selfUri": ""
}
  */
ArchitectApi.prototype.postSystempromptsPromptIdResources = function postSystempromptsPromptIdResources(promptId, body){
    var requestPath = '/api/v2/architect/systemprompts/{promptId}/resources';
    var requestQuery = {};
    var requestBody;

    if(promptId === undefined || promptId === null){
      throw new Error('Missing required  parameter: promptId');
    }
    requestPath = requestPath.replace('{promptId}', promptId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a pageable list of user prompt resources
  * @description The returned list is pageable, and query parameters can be used for filtering.
  * @memberOf ArchitectApi
  * @instance
  * @param {string} promptId - Prompt ID
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
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
ArchitectApi.prototype.getPromptsPromptIdResources = function getPromptsPromptIdResources(promptId, pageNumber, pageSize){
    var requestPath = '/api/v2/architect/prompts/{promptId}/resources';
    var requestQuery = {};
    var requestBody;

    if(promptId === undefined || promptId === null){
      throw new Error('Missing required  parameter: promptId');
    }
    requestPath = requestPath.replace('{promptId}', promptId);
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["pageSize"] = pageSize;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a new user prompt resource
  * @memberOf ArchitectApi
  * @instance
  * @param {string} promptId - Prompt ID
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "promptId": "",
   "language": "",
   "mediaUri": "",
   "ttsString": "",
   "uploadStatus": "",
   "uploadUri": "",
   "languageDefault": true,
   "tags": {},
   "durationSeconds": {}
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "promptId": "",
   "language": "",
   "mediaUri": "",
   "ttsString": "",
   "uploadStatus": "",
   "uploadUri": "",
   "languageDefault": true,
   "tags": {},
   "durationSeconds": {},
   "selfUri": ""
}
  */
ArchitectApi.prototype.postPromptsPromptIdResources = function postPromptsPromptIdResources(promptId, body){
    var requestPath = '/api/v2/architect/prompts/{promptId}/resources';
    var requestQuery = {};
    var requestBody;

    if(promptId === undefined || promptId === null){
      throw new Error('Missing required  parameter: promptId');
    }
    requestPath = requestPath.replace('{promptId}', promptId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};


module.exports = ArchitectApi;
