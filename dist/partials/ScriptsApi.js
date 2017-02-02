/*jshint -W069 */
/**
* @class ScriptsApi
* @example
* var api = new purecloud.platform.ScriptsApi(pureCloudSession);
*/
function ScriptsApi(session) {
    if(!(this instanceof ScriptsApi)) {
        return new ScriptsApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('ScriptsApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get the published variables
  * @memberOf ScriptsApi
  * @instance
  * @param {string} scriptId - Script ID
  */
ScriptsApi.prototype.getPublishedScriptIdVariables = function getPublishedScriptIdVariables(scriptId){
    var requestPath = '/api/v2/scripts/published/{scriptId}/variables';
    var requestQuery = {};
    var requestBody;

    if(scriptId === undefined || scriptId === null){
      throw new Error('Missing required  parameter: scriptId');
    }
    requestPath = requestPath.replace('{scriptId}', scriptId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of pages
  * @memberOf ScriptsApi
  * @instance
  * @param {string} scriptId - Script ID
  * @example
  * 200 Response Example:
  * [
 {
  "id": "",
  "name": "",
  "versionId": "",
  "createdDate": "",
  "modifiedDate": "",
  "rootContainer": {},
  "properties": {},
  "selfUri": ""
 }
]
  */
ScriptsApi.prototype.getScriptIdPages = function getScriptIdPages(scriptId){
    var requestPath = '/api/v2/scripts/{scriptId}/pages';
    var requestQuery = {};
    var requestBody;

    if(scriptId === undefined || scriptId === null){
      throw new Error('Missing required  parameter: scriptId');
    }
    requestPath = requestPath.replace('{scriptId}', scriptId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the published scripts.
  * @memberOf ScriptsApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} expand - Expand
  * @param {string} name - Name filter
  * @param {string} feature - Feature filter
  * @param {string} flowId - Secure flow id filter
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
ScriptsApi.prototype.getPublished = function getPublished(pageSize, pageNumber, expand, name, feature, flowId){
    var requestPath = '/api/v2/scripts/published';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["expand"] = expand;
    requestQuery["name"] = name;
    requestQuery["feature"] = feature;
    requestQuery["flowId"] = flowId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of scripts
  * @memberOf ScriptsApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} expand - Expand
  * @param {string} name - Name filter
  * @param {string} feature - Feature filter
  * @param {string} flowId - Secure flow id filter
  * @param {string} sortBy - SortBy
  modifiedDate,
  createdDate,
  * @param {string} sortOrder - SortOrder
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
   "lastUri": "",
   "previousUri": "",
   "nextUri": "",
   "pageCount": 0
}
  */
ScriptsApi.prototype.getScripts = function getScripts(pageSize, pageNumber, expand, name, feature, flowId, sortBy, sortOrder){
    var requestPath = '/api/v2/scripts';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["expand"] = expand;
    requestQuery["name"] = name;
    requestQuery["feature"] = feature;
    requestQuery["flowId"] = flowId;
    requestQuery["sortBy"] = sortBy;
    requestQuery["sortOrder"] = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of published pages
  * @memberOf ScriptsApi
  * @instance
  * @param {string} scriptId - Script ID
  * @example
  * 200 Response Example:
  * [
 {
  "id": "",
  "name": "",
  "versionId": "",
  "createdDate": "",
  "modifiedDate": "",
  "rootContainer": {},
  "properties": {},
  "selfUri": ""
 }
]
  */
ScriptsApi.prototype.getPublishedScriptIdPages = function getPublishedScriptIdPages(scriptId){
    var requestPath = '/api/v2/scripts/published/{scriptId}/pages';
    var requestQuery = {};
    var requestBody;

    if(scriptId === undefined || scriptId === null){
      throw new Error('Missing required  parameter: scriptId');
    }
    requestPath = requestPath.replace('{scriptId}', scriptId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the published page.
  * @memberOf ScriptsApi
  * @instance
  * @param {string} scriptId - Script ID
  * @param {string} pageId - Page ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "versionId": "",
   "createdDate": "",
   "modifiedDate": "",
   "rootContainer": {},
   "properties": {},
   "selfUri": ""
}
  */
ScriptsApi.prototype.getPublishedScriptIdPagesPageId = function getPublishedScriptIdPagesPageId(scriptId, pageId){
    var requestPath = '/api/v2/scripts/published/{scriptId}/pages/{pageId}';
    var requestQuery = {};
    var requestBody;

    if(scriptId === undefined || scriptId === null){
      throw new Error('Missing required  parameter: scriptId');
    }
    requestPath = requestPath.replace('{scriptId}', scriptId);
    if(pageId === undefined || pageId === null){
      throw new Error('Missing required  parameter: pageId');
    }
    requestPath = requestPath.replace('{pageId}', pageId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a page
  * @memberOf ScriptsApi
  * @instance
  * @param {string} scriptId - Script ID
  * @param {string} pageId - Page ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "versionId": "",
   "createdDate": "",
   "modifiedDate": "",
   "rootContainer": {},
   "properties": {},
   "selfUri": ""
}
  */
ScriptsApi.prototype.getScriptIdPagesPageId = function getScriptIdPagesPageId(scriptId, pageId){
    var requestPath = '/api/v2/scripts/{scriptId}/pages/{pageId}';
    var requestQuery = {};
    var requestBody;

    if(scriptId === undefined || scriptId === null){
      throw new Error('Missing required  parameter: scriptId');
    }
    requestPath = requestPath.replace('{scriptId}', scriptId);
    if(pageId === undefined || pageId === null){
      throw new Error('Missing required  parameter: pageId');
    }
    requestPath = requestPath.replace('{pageId}', pageId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a script
  * @memberOf ScriptsApi
  * @instance
  * @param {string} scriptId - Script ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "versionId": "",
   "createdDate": "",
   "modifiedDate": "",
   "publishedDate": "",
   "versionDate": "",
   "startPageId": "",
   "startPageName": "",
   "features": {},
   "variables": {},
   "customActions": {},
   "pages": [],
   "selfUri": ""
}
  */
ScriptsApi.prototype.getScriptId = function getScriptId(scriptId){
    var requestPath = '/api/v2/scripts/{scriptId}';
    var requestQuery = {};
    var requestBody;

    if(scriptId === undefined || scriptId === null){
      throw new Error('Missing required  parameter: scriptId');
    }
    requestPath = requestPath.replace('{scriptId}', scriptId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the published script.
  * @memberOf ScriptsApi
  * @instance
  * @param {string} scriptId - Script ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "versionId": "",
   "createdDate": "",
   "modifiedDate": "",
   "publishedDate": "",
   "versionDate": "",
   "startPageId": "",
   "startPageName": "",
   "features": {},
   "variables": {},
   "customActions": {},
   "pages": [],
   "selfUri": ""
}
  */
ScriptsApi.prototype.getPublishedScriptId = function getPublishedScriptId(scriptId){
    var requestPath = '/api/v2/scripts/published/{scriptId}';
    var requestQuery = {};
    var requestBody;

    if(scriptId === undefined || scriptId === null){
      throw new Error('Missing required  parameter: scriptId');
    }
    requestPath = requestPath.replace('{scriptId}', scriptId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};


module.exports = ScriptsApi;
