/*jshint -W069 */
/**
* @class FaxApi
* @example
* var api = new purecloud.platform.FaxApi(pureCloudSession);
*/
function FaxApi(session) {
    if(!(this instanceof FaxApi)) {
        return new FaxApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('FaxApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get a document.
  * @memberOf FaxApi
  * @instance
  * @param {string} documentId - Document ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "contentUri": "",
   "workspace": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "createdBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "contentType": "",
   "contentLength": 0,
   "filename": "",
   "read": true,
   "pageCount": 0,
   "callerAddress": "",
   "receiverAddress": "",
   "thumbnails": [],
   "sharingUri": "",
   "downloadSharingUri": "",
   "selfUri": ""
}
  */
FaxApi.prototype.getDocumentsDocumentId = function getDocumentsDocumentId(documentId){
    var requestPath = '/api/v2/fax/documents/{documentId}';
    var requestQuery = {};
    var requestBody;

    if(documentId === undefined || documentId === null){
      throw new Error('Missing required  parameter: documentId');
    }
    requestPath = requestPath.replace('{documentId}', documentId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a fax document.
  * @memberOf FaxApi
  * @instance
  * @param {string} documentId - Document ID
  * @param {} body - Document
  * @example
  * Body Example:
  * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "contentUri": "",
   "workspace": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "createdBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "contentType": "",
   "contentLength": 0,
   "filename": "",
   "read": true,
   "pageCount": 0,
   "callerAddress": "",
   "receiverAddress": "",
   "thumbnails": [],
   "sharingUri": "",
   "downloadSharingUri": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "contentUri": "",
   "workspace": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "createdBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "contentType": "",
   "contentLength": 0,
   "filename": "",
   "read": true,
   "pageCount": 0,
   "callerAddress": "",
   "receiverAddress": "",
   "thumbnails": [],
   "sharingUri": "",
   "downloadSharingUri": "",
   "selfUri": ""
}
  */
FaxApi.prototype.putDocumentsDocumentId = function putDocumentsDocumentId(documentId, body){
    var requestPath = '/api/v2/fax/documents/{documentId}';
    var requestQuery = {};
    var requestBody;

    if(documentId === undefined || documentId === null){
      throw new Error('Missing required  parameter: documentId');
    }
    requestPath = requestPath.replace('{documentId}', documentId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a fax document.
  * @memberOf FaxApi
  * @instance
  * @param {string} documentId - Document ID
  */
FaxApi.prototype.deleteDocumentsDocumentId = function deleteDocumentsDocumentId(documentId){
    var requestPath = '/api/v2/fax/documents/{documentId}';
    var requestQuery = {};
    var requestBody;

    if(documentId === undefined || documentId === null){
      throw new Error('Missing required  parameter: documentId');
    }
    requestPath = requestPath.replace('{documentId}', documentId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get fax summary
  * @memberOf FaxApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "readCount": 0,
   "unreadCount": 0,
   "totalCount": 0
}
  */
FaxApi.prototype.getSummary = function getSummary(){
    var requestPath = '/api/v2/fax/summary';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of fax documents.
  * @memberOf FaxApi
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
FaxApi.prototype.getDocuments = function getDocuments(pageSize, pageNumber){
    var requestPath = '/api/v2/fax/documents';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Download a fax document.
  * @memberOf FaxApi
  * @instance
  * @param {string} documentId - Document ID
  * @example
  * 200 Response Example:
  * {
   "contentLocationUri": "",
   "imageUri": "",
   "thumbnails": []
}
  */
FaxApi.prototype.getDocumentsDocumentIdContent = function getDocumentsDocumentIdContent(documentId){
    var requestPath = '/api/v2/fax/documents/{documentId}/content';
    var requestQuery = {};
    var requestBody;

    if(documentId === undefined || documentId === null){
      throw new Error('Missing required  parameter: documentId');
    }
    requestPath = requestPath.replace('{documentId}', documentId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};


module.exports = FaxApi;
