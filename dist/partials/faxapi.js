/**
* @class
* @example
* var api = new FaxApi(pureCloudSession);
*/
var FaxApi = function (pureCloudSession) {
	/**
     * Get a list of fax documents.
	 * @memberOf FaxApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getDocuments(pageSize, pageNumber){
		var apipath = '/api/v1/fax/documents';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDocuments = getDocuments;
	/**
     * Get a document.
	 * @memberOf FaxApi#
	* @param {string} documentId - Document ID
	*/
	function getDocumentsDocument(documentId){
		var apipath = '/api/v1/fax/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDocumentsDocument = getDocumentsDocument;
	/**
     * Update a fax document.
	 * @memberOf FaxApi#
	* @param {string} documentId - Document ID
	* @param {} body - Document
	 * @example
	 * Body Example:
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
	function updateDocumentsDocument(documentId, body){
		var apipath = '/api/v1/fax/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateDocumentsDocument = updateDocumentsDocument;
	/**
     * Delete a fax document.
	 * @memberOf FaxApi#
	* @param {string} documentId - Document ID
	*/
	function deleteDocumentsDocument(documentId){
		var apipath = '/api/v1/fax/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteDocumentsDocument = deleteDocumentsDocument;
	/**
     * Download a fax document.
	 * @memberOf FaxApi#
	* @param {string} documentId - Document ID
	*/
	function getDocumentsDocumentContent(documentId){
		var apipath = '/api/v1/fax/documents/{documentId}/content';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDocumentsDocumentContent = getDocumentsDocumentContent;
	/**
     * Get fax summary
	 * @memberOf FaxApi#
	*/
	function getSummary(){
		var apipath = '/api/v1/fax/summary';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSummary = getSummary;

    return self;
};