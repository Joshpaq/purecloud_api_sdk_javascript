/*jshint -W069 */
/**
* @class UserRecordingsApi
* @example
* var api = new purecloud.platform.UserRecordingsApi(pureCloudSession);
*/
function UserRecordingsApi(session) {
    if(!(this instanceof UserRecordingsApi)) {
        return new UserRecordingsApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('UserRecordingsApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Download a user recording.
  * @memberOf UserRecordingsApi
  * @instance
  * @param {string} recordingId - User Recording ID
  * @param {string} formatId - The desired media format.
  WAV,
  WEBM,
  WAV_ULAW,
  OGG_VORBIS,
  OGG_OPUS,
  NONE,
  * @example
  * 200 Response Example:
  * {
   "contentLocationUri": "",
   "imageUri": "",
   "thumbnails": []
}
  */
UserRecordingsApi.prototype.getRecordingIdMedia = function getRecordingIdMedia(recordingId, formatId){
    var requestPath = '/api/v2/userrecordings/{recordingId}/media';
    var requestQuery = {};
    var requestBody;

    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    requestQuery["formatId"] = formatId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get user recording summary
  * @memberOf UserRecordingsApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "readCount": 0,
   "unreadCount": 0,
   "totalCount": 0
}
  */
UserRecordingsApi.prototype.getSummary = function getSummary(){
    var requestPath = '/api/v2/userrecordings/summary';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of user recordings.
  * @memberOf UserRecordingsApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {array} expand - Which fields, if any, to expand. Valid Values: conversation
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
UserRecordingsApi.prototype.getUserrecordings = function getUserrecordings(pageSize, pageNumber, expand){
    var requestPath = '/api/v2/userrecordings';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a user recording.
  * @memberOf UserRecordingsApi
  * @instance
  * @param {string} recordingId - User Recording ID
  * @param {array} expand - Which fields, if any, to expand. Valid Values: conversation
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
   "conversation": {
      "id": "",
      "name": "",
      "startTime": "",
      "endTime": "",
      "address": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": "",
      "state": "",
      "selfUri": ""
   },
   "contentLength": 0,
   "durationMilliseconds": 0,
   "thumbnails": [],
   "read": true,
   "selfUri": ""
}
  */
UserRecordingsApi.prototype.getRecordingId = function getRecordingId(recordingId, expand){
    var requestPath = '/api/v2/userrecordings/{recordingId}';
    var requestQuery = {};
    var requestBody;

    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a user recording.
  * @memberOf UserRecordingsApi
  * @instance
  * @param {string} recordingId - User Recording ID
  * @param {} body - UserRecording
  * @param {array} expand - Which fields, if any, to expand. Valid Values: conversation
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
   "conversation": {
      "name": "",
      "startTime": "",
      "endTime": "",
      "address": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": "",
      "state": ""
   },
   "contentLength": 0,
   "durationMilliseconds": 0,
   "thumbnails": [],
   "read": true
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
   "conversation": {
      "id": "",
      "name": "",
      "startTime": "",
      "endTime": "",
      "address": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": "",
      "state": "",
      "selfUri": ""
   },
   "contentLength": 0,
   "durationMilliseconds": 0,
   "thumbnails": [],
   "read": true,
   "selfUri": ""
}
  */
UserRecordingsApi.prototype.putRecordingId = function putRecordingId(recordingId, body, expand){
    var requestPath = '/api/v2/userrecordings/{recordingId}';
    var requestQuery = {};
    var requestBody;

    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery["expand"] = expand;
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a user recording.
  * @memberOf UserRecordingsApi
  * @instance
  * @param {string} recordingId - User Recording ID
  */
UserRecordingsApi.prototype.deleteRecordingId = function deleteRecordingId(recordingId){
    var requestPath = '/api/v2/userrecordings/{recordingId}';
    var requestQuery = {};
    var requestBody;

    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};


module.exports = UserRecordingsApi;
