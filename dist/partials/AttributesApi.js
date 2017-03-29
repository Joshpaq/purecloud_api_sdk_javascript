/*jshint -W069 */
/**
* @class AttributesApi
* @example
* var api = new purecloud.platform.AttributesApi(pureCloudSession);
*/
function AttributesApi(session) {
    if(!(this instanceof AttributesApi)) {
        return new AttributesApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('AttributesApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get details about an existing attribute.
  * @memberOf AttributesApi
  * @instance
  * @param {string} attributeId - Attribute ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "version": 0,
   "description": "",
   "createdBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dateCreated": "",
   "modifiedBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dateModified": "",
   "selfUri": ""
}
  */
AttributesApi.prototype.getAttributeId = function getAttributeId(attributeId){
    var requestPath = '/api/v2/attributes/{attributeId}';
    var requestQuery = {};
    var requestBody;

    if(attributeId === undefined || attributeId === null){
      throw new Error('Missing required  parameter: attributeId');
    }
    requestPath = requestPath.replace('{attributeId}', attributeId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an existing attribute.
  * @description Fields that can be updated: name, description. The most recent version is required for updates.
  * @memberOf AttributesApi
  * @instance
  * @param {string} attributeId - Attribute ID
  * @param {} body - Attribute
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "description": "",
   "createdBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dateCreated": "",
   "modifiedBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dateModified": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "version": 0,
   "description": "",
   "createdBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dateCreated": "",
   "modifiedBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dateModified": "",
   "selfUri": ""
}
  */
AttributesApi.prototype.putAttributeId = function putAttributeId(attributeId, body){
    var requestPath = '/api/v2/attributes/{attributeId}';
    var requestQuery = {};
    var requestBody;

    if(attributeId === undefined || attributeId === null){
      throw new Error('Missing required  parameter: attributeId');
    }
    requestPath = requestPath.replace('{attributeId}', attributeId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an existing Attribute.
  * @description This will remove attribute.
  * @memberOf AttributesApi
  * @instance
  * @param {string} attributeId - Attribute ID
  */
AttributesApi.prototype.deleteAttributeId = function deleteAttributeId(attributeId){
    var requestPath = '/api/v2/attributes/{attributeId}';
    var requestQuery = {};
    var requestBody;

    if(attributeId === undefined || attributeId === null){
      throw new Error('Missing required  parameter: attributeId');
    }
    requestPath = requestPath.replace('{attributeId}', attributeId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query attributes
  * @memberOf AttributesApi
  * @instance
  * @param {} body - query
  * @example
  * Body Example:
  * {
   "query": "",
   "pageSize": 0,
   "pageNumber": 0
}
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
AttributesApi.prototype.postQuery = function postQuery(body){
    var requestPath = '/api/v2/attributes/query';
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
  * @summary Gets a list of existing attributes.
  * @memberOf AttributesApi
  * @instance
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
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
AttributesApi.prototype.getAttributes = function getAttributes(pageNumber, pageSize){
    var requestPath = '/api/v2/attributes';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageNumber"] = pageNumber;
    requestQuery["pageSize"] = pageSize;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create an attribute.
  * @memberOf AttributesApi
  * @instance
  * @param {} body - Attribute
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "description": "",
   "createdBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dateCreated": "",
   "modifiedBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dateModified": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "version": 0,
   "description": "",
   "createdBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dateCreated": "",
   "modifiedBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dateModified": "",
   "selfUri": ""
}
  */
AttributesApi.prototype.postAttributes = function postAttributes(body){
    var requestPath = '/api/v2/attributes';
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


module.exports = AttributesApi;
