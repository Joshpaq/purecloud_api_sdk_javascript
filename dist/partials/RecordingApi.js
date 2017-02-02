/*jshint -W069 */
/**
* @class RecordingApi
* @example
* var api = new purecloud.platform.RecordingApi(pureCloudSession);
*/
function RecordingApi(session) {
    if(!(this instanceof RecordingApi)) {
        return new RecordingApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('RecordingApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Gets media retention policy list with query options to filter on name and enabled.
  * @description for a less verbose response, add summary=true to this endpoint
  * @memberOf RecordingApi
  * @instance
  * @param {integer} pageSize - The total page size requested
  * @param {integer} pageNumber - The page number requested
  * @param {string} sortBy - variable name requested to sort by
  * @param {array} expand - variable name requested by expand list
  * @param {string} nextPage - next page token
  * @param {string} previousPage - Previous page token
  * @param {string} name - the policy name - used for filtering results in searches.
  * @param {boolean} enabled - checks to see if policy is enabled - use enabled = true or enabled = false
  * @param {boolean} summary - provides a less verbose response of policy lists.
  * @param {boolean} hasErrors - provides a way to fetch all policies with errors or policies that do not have errors
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
RecordingApi.prototype.getMediaretentionpolicies = function getMediaretentionpolicies(pageSize, pageNumber, sortBy, expand, nextPage, previousPage, name, enabled, summary, hasErrors){
    var requestPath = '/api/v2/recording/mediaretentionpolicies';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["sortBy"] = sortBy;
    requestQuery["expand"] = expand;
    requestQuery["nextPage"] = nextPage;
    requestQuery["previousPage"] = previousPage;
    requestQuery["name"] = name;
    requestQuery["enabled"] = enabled;
    requestQuery["summary"] = summary;
    requestQuery["hasErrors"] = hasErrors;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create media retention policy
  * @memberOf RecordingApi
  * @instance
  * @param {} body - Policy
  * @example
  * Body Example:
  * {
   "name": "",
   "modifiedDate": "",
   "createdDate": "",
   "order": 0,
   "description": "",
   "enabled": true,
   "mediaPolicies": {
      "callPolicy": {},
      "chatPolicy": {},
      "emailPolicy": {}
   },
   "conditions": {
      "forUsers": [],
      "directions": [],
      "dateRanges": [],
      "mediaTypes": [],
      "forQueues": [],
      "duration": {},
      "wrapupCodes": [],
      "timeAllowed": {}
   },
   "actions": {
      "retainRecording": true,
      "deleteRecording": true,
      "alwaysDelete": true,
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {},
      "initiateScreenRecording": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   }
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "modifiedDate": "",
   "createdDate": "",
   "order": 0,
   "description": "",
   "enabled": true,
   "mediaPolicies": {
      "callPolicy": {},
      "chatPolicy": {},
      "emailPolicy": {}
   },
   "conditions": {
      "forUsers": [],
      "directions": [],
      "dateRanges": [],
      "mediaTypes": [],
      "forQueues": [],
      "duration": {},
      "wrapupCodes": [],
      "timeAllowed": {}
   },
   "actions": {
      "retainRecording": true,
      "deleteRecording": true,
      "alwaysDelete": true,
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {},
      "initiateScreenRecording": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   },
   "selfUri": ""
}
  */
RecordingApi.prototype.postMediaretentionpolicies = function postMediaretentionpolicies(body){
    var requestPath = '/api/v2/recording/mediaretentionpolicies';
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
  * @summary Delete media retention policies
  * @description Bulk delete of media retention policies, this will only delete the polices that match the ids specified in the query param.
  * @memberOf RecordingApi
  * @instance
  * @param {string} ids - Bulk delete of media retention policies, this will only delete the polices that match the ids specified in the query param.
  */
RecordingApi.prototype.deleteMediaretentionpolicies = function deleteMediaretentionpolicies(ids){
    var requestPath = '/api/v2/recording/mediaretentionpolicies';
    var requestQuery = {};
    var requestBody;

    if(ids === undefined || ids === null){
      throw new Error('Missing required  parameter: ids');
    }
    requestQuery["ids"] = ids;
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Gets the media of a single orphan recording
  * @description A 202 response means the orphaned media is currently transcoding and will be available shortly.A 200 response denotes the transcoded orphan media is available now and is contained in the response body.
  * @memberOf RecordingApi
  * @instance
  * @param {string} orphanId - Orphan ID
  * @param {string} formatId - The desired media format.
  WAV,
  WEBM,
  WAV_ULAW,
  OGG_VORBIS,
  OGG_OPUS,
  NONE,
  * @param {boolean} download - requesting a download format of the recording
  true,
  false,
  * @param {string} fileName - the name of the downloaded fileName
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "conversationId": "",
   "path": "",
   "startTime": "",
   "endTime": "",
   "media": "",
   "annotations": [],
   "transcript": [],
   "emailTranscript": [],
   "fileState": "",
   "restoreExpirationTime": "",
   "mediaUris": {},
   "estimatedTranscodeTimeMs": 0,
   "actualTranscodeTimeMs": 0,
   "archiveDate": "",
   "archiveMedium": "",
   "deleteDate": "",
   "maxAllowedRestorationsForOrg": 0,
   "remainingRestorationsAllowedForOrg": 0,
   "sessionId": "",
   "selfUri": ""
}
  */
RecordingApi.prototype.getOrphanIdMedia = function getOrphanIdMedia(orphanId, formatId, download, fileName){
    var requestPath = '/api/v2/orphanrecordings/{orphanId}/media';
    var requestQuery = {};
    var requestBody;

    if(orphanId === undefined || orphanId === null){
      throw new Error('Missing required  parameter: orphanId');
    }
    requestPath = requestPath.replace('{orphanId}', orphanId);
    requestQuery["formatId"] = formatId;
    requestQuery["download"] = download;
    requestQuery["fileName"] = fileName;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Gets all orphan recordings
  * @memberOf RecordingApi
  * @instance
  * @param {integer} pageSize - The total page size requested
  * @param {integer} pageNumber - The page number requested
  * @param {string} sortBy - variable name requested to sort by
  * @param {array} expand - variable name requested by expand list
  * @param {string} nextPage - next page token
  * @param {string} previousPage - Previous page token
  * @param {boolean} hasConversation - Filter resulting orphans by whether the conversation is known. False returns all orphans for the organization.
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
RecordingApi.prototype.getOrphanrecordings = function getOrphanrecordings(pageSize, pageNumber, sortBy, expand, nextPage, previousPage, hasConversation){
    var requestPath = '/api/v2/orphanrecordings';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["sortBy"] = sortBy;
    requestQuery["expand"] = expand;
    requestQuery["nextPage"] = nextPage;
    requestQuery["previousPage"] = previousPage;
    requestQuery["hasConversation"] = hasConversation;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Gets a specific recording.
  * @memberOf RecordingApi
  * @instance
  * @param {string} conversationId - Conversation ID
  * @param {string} recordingId - Recording ID
  * @param {string} formatId - The desired media format.
  WAV,
  WEBM,
  WAV_ULAW,
  OGG_VORBIS,
  OGG_OPUS,
  NONE,
  * @param {boolean} download - requesting a download format of the recording
  true,
  false,
  * @param {string} fileName - the name of the downloaded fileName
  */
RecordingApi.prototype.getConversationIdRecordingsRecordingId = function getConversationIdRecordingsRecordingId(conversationId, recordingId, formatId, download, fileName){
    var requestPath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    requestQuery["formatId"] = formatId;
    requestQuery["download"] = download;
    requestQuery["fileName"] = fileName;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Updates the retention records on a recording.
  * @description Currently supports updating and removing both archive and delete dates for eligible recordings. A request to change the archival date of an archived recording will result in a restoration of the recording until the new date set. 
  * @memberOf RecordingApi
  * @instance
  * @param {string} conversationId - Conversation ID
  * @param {string} recordingId - Recording ID
  * @param {} body - recording
  * @example
  * Body Example:
  * {
   "name": "",
   "conversationId": "",
   "path": "",
   "startTime": "",
   "endTime": "",
   "media": "",
   "annotations": [],
   "transcript": [],
   "emailTranscript": [],
   "fileState": "",
   "restoreExpirationTime": "",
   "mediaUris": {},
   "estimatedTranscodeTimeMs": 0,
   "actualTranscodeTimeMs": 0,
   "archiveDate": "",
   "archiveMedium": "",
   "deleteDate": "",
   "maxAllowedRestorationsForOrg": 0,
   "remainingRestorationsAllowedForOrg": 0,
   "sessionId": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "conversationId": "",
   "path": "",
   "startTime": "",
   "endTime": "",
   "media": "",
   "annotations": [],
   "transcript": [],
   "emailTranscript": [],
   "fileState": "",
   "restoreExpirationTime": "",
   "mediaUris": {},
   "estimatedTranscodeTimeMs": 0,
   "actualTranscodeTimeMs": 0,
   "archiveDate": "",
   "archiveMedium": "",
   "deleteDate": "",
   "maxAllowedRestorationsForOrg": 0,
   "remainingRestorationsAllowedForOrg": 0,
   "sessionId": "",
   "selfUri": ""
}
  */
RecordingApi.prototype.putConversationIdRecordingsRecordingId = function putConversationIdRecordingsRecordingId(conversationId, recordingId, body){
    var requestPath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
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
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary gets a list local key settings data
  * @memberOf RecordingApi
  * @instance
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
RecordingApi.prototype.getLocalkeysSettings = function getLocalkeysSettings(){
    var requestPath = '/api/v2/recording/localkeys/settings';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary create settings for local key creation
  * @memberOf RecordingApi
  * @instance
  * @param {} body - Local Encryption Configuration
  * @example
  * Body Example:
  * {
   "name": "",
   "url": "",
   "apiId": "",
   "apiKey": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "url": "",
   "apiId": "",
   "apiKey": "",
   "selfUri": ""
}
  */
RecordingApi.prototype.postLocalkeysSettings = function postLocalkeysSettings(body){
    var requestPath = '/api/v2/recording/localkeys/settings';
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
  * @summary Get all of a Conversation's Recordings.
  * @memberOf RecordingApi
  * @instance
  * @param {string} conversationId - Conversation ID
  * @param {integer} maxWaitMs - The maximum number of milliseconds to wait for the recording to be ready. Must be a positive value.
  * @param {string} formatId - The desired media format
  WAV,
  WEBM,
  WAV_ULAW,
  OGG_VORBIS,
  OGG_OPUS,
  NONE,
  * @example
  * 200 Response Example:
  * [
 {
  "id": "",
  "name": "",
  "conversationId": "",
  "path": "",
  "startTime": "",
  "endTime": "",
  "media": "",
  "annotations": [],
  "transcript": [],
  "emailTranscript": [],
  "fileState": "",
  "restoreExpirationTime": "",
  "mediaUris": {},
  "estimatedTranscodeTimeMs": 0,
  "actualTranscodeTimeMs": 0,
  "archiveDate": "",
  "archiveMedium": "",
  "deleteDate": "",
  "maxAllowedRestorationsForOrg": 0,
  "remainingRestorationsAllowedForOrg": 0,
  "sessionId": "",
  "selfUri": ""
 }
]
  */
RecordingApi.prototype.getConversationIdRecordings = function getConversationIdRecordings(conversationId, maxWaitMs, formatId){
    var requestPath = '/api/v2/conversations/{conversationId}/recordings';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    requestQuery["maxWaitMs"] = maxWaitMs;
    requestQuery["formatId"] = formatId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Gets a single orphan recording
  * @memberOf RecordingApi
  * @instance
  * @param {string} orphanId - Orphan ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "createdTime": "",
   "recoveredTime": "",
   "providerType": "",
   "mediaSizeBytes": 0,
   "mediaType": "",
   "fileState": "",
   "providerEndpoint": {
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
   "recording": {
      "id": "",
      "name": "",
      "conversationId": "",
      "path": "",
      "startTime": "",
      "endTime": "",
      "media": "",
      "annotations": [],
      "transcript": [],
      "emailTranscript": [],
      "fileState": "",
      "restoreExpirationTime": "",
      "mediaUris": {},
      "estimatedTranscodeTimeMs": 0,
      "actualTranscodeTimeMs": 0,
      "archiveDate": "",
      "archiveMedium": "",
      "deleteDate": "",
      "maxAllowedRestorationsForOrg": 0,
      "remainingRestorationsAllowedForOrg": 0,
      "sessionId": "",
      "selfUri": ""
   },
   "orphanStatus": "",
   "selfUri": ""
}
  */
RecordingApi.prototype.getOrphanId = function getOrphanId(orphanId){
    var requestPath = '/api/v2/orphanrecordings/{orphanId}';
    var requestQuery = {};
    var requestBody;

    if(orphanId === undefined || orphanId === null){
      throw new Error('Missing required  parameter: orphanId');
    }
    requestPath = requestPath.replace('{orphanId}', orphanId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Updates an orphan recording to a regular recording with retention values
  * @description If this operation is successful the orphan will no longer exist. It will be replaced by the resulting recording in the response. This replacement recording is accessible by the normal Recording api.
  * @memberOf RecordingApi
  * @instance
  * @param {string} orphanId - Orphan ID
  * @param {} body - If this operation is successful the orphan will no longer exist. It will be replaced by the resulting recording in the response. This replacement recording is accessible by the normal Recording api.
  * @example
  * Body Example:
  * {
   "archiveDate": "",
   "deleteDate": "",
   "conversationId": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "conversationId": "",
   "path": "",
   "startTime": "",
   "endTime": "",
   "media": "",
   "annotations": [],
   "transcript": [],
   "emailTranscript": [],
   "fileState": "",
   "restoreExpirationTime": "",
   "mediaUris": {},
   "estimatedTranscodeTimeMs": 0,
   "actualTranscodeTimeMs": 0,
   "archiveDate": "",
   "archiveMedium": "",
   "deleteDate": "",
   "maxAllowedRestorationsForOrg": 0,
   "remainingRestorationsAllowedForOrg": 0,
   "sessionId": "",
   "selfUri": ""
}
  */
RecordingApi.prototype.putOrphanId = function putOrphanId(orphanId, body){
    var requestPath = '/api/v2/orphanrecordings/{orphanId}';
    var requestQuery = {};
    var requestBody;

    if(orphanId === undefined || orphanId === null){
      throw new Error('Missing required  parameter: orphanId');
    }
    requestPath = requestPath.replace('{orphanId}', orphanId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Deletes a single orphan recording
  * @memberOf RecordingApi
  * @instance
  * @param {string} orphanId - Orphan ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "createdTime": "",
   "recoveredTime": "",
   "providerType": "",
   "mediaSizeBytes": 0,
   "mediaType": "",
   "fileState": "",
   "providerEndpoint": {
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
   "recording": {
      "id": "",
      "name": "",
      "conversationId": "",
      "path": "",
      "startTime": "",
      "endTime": "",
      "media": "",
      "annotations": [],
      "transcript": [],
      "emailTranscript": [],
      "fileState": "",
      "restoreExpirationTime": "",
      "mediaUris": {},
      "estimatedTranscodeTimeMs": 0,
      "actualTranscodeTimeMs": 0,
      "archiveDate": "",
      "archiveMedium": "",
      "deleteDate": "",
      "maxAllowedRestorationsForOrg": 0,
      "remainingRestorationsAllowedForOrg": 0,
      "sessionId": "",
      "selfUri": ""
   },
   "orphanStatus": "",
   "selfUri": ""
}
  */
RecordingApi.prototype.deleteOrphanId = function deleteOrphanId(orphanId){
    var requestPath = '/api/v2/orphanrecordings/{orphanId}';
    var requestQuery = {};
    var requestBody;

    if(orphanId === undefined || orphanId === null){
      throw new Error('Missing required  parameter: orphanId');
    }
    requestPath = requestPath.replace('{orphanId}', orphanId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get key rotation schedule
  * @memberOf RecordingApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "period": "",
   "selfUri": ""
}
  */
RecordingApi.prototype.getRecordingkeysRotationschedule = function getRecordingkeysRotationschedule(){
    var requestPath = '/api/v2/recording/recordingkeys/rotationschedule';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update key rotation schedule
  * @memberOf RecordingApi
  * @instance
  * @param {} body - KeyRotationSchedule
  * @example
  * Body Example:
  * {
   "name": "",
   "period": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "period": "",
   "selfUri": ""
}
  */
RecordingApi.prototype.putRecordingkeysRotationschedule = function putRecordingkeysRotationschedule(body){
    var requestPath = '/api/v2/recording/recordingkeys/rotationschedule';
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
  * @summary Retrieves a paged listing of screen recording sessions
  * @memberOf RecordingApi
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
   "lastUri": "",
   "previousUri": "",
   "nextUri": "",
   "pageCount": 0
}
  */
RecordingApi.prototype.getsScreensessions = function getsScreensessions(pageSize, pageNumber){
    var requestPath = '/api/v2/recordings/screensessions';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get encryption key list
  * @memberOf RecordingApi
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
   "lastUri": "",
   "previousUri": "",
   "nextUri": "",
   "pageCount": 0
}
  */
RecordingApi.prototype.getRecordingkeys = function getRecordingkeys(pageSize, pageNumber){
    var requestPath = '/api/v2/recording/recordingkeys';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create encryption key
  * @memberOf RecordingApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "createDate": "",
   "keydataSummary": "",
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
      "selfUri": ""
   },
   "selfUri": ""
}
  */
RecordingApi.prototype.postRecordingkeys = function postRecordingkeys(){
    var requestPath = '/api/v2/recording/recordingkeys';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the Recording Settings for the Organization
  * @memberOf RecordingApi
  * @instance
  * @param {boolean} createDefault - If no settings are found, a new one is created with default values
  * @example
  * 200 Response Example:
  * {
   "maxSimultaneousStreams": 0
}
  */
RecordingApi.prototype.getSettings = function getSettings(createDefault){
    var requestPath = '/api/v2/recording/settings';
    var requestQuery = {};
    var requestBody;

    requestQuery["createDefault"] = createDefault;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the Recording Settings for the Organization
  * @memberOf RecordingApi
  * @instance
  * @param {} body - Recording settings
  * @example
  * Body Example:
  * {
   "maxSimultaneousStreams": 0
}
  * @example
  * 200 Response Example:
  * {
   "maxSimultaneousStreams": 0
}
  */
RecordingApi.prototype.putSettings = function putSettings(body){
    var requestPath = '/api/v2/recording/settings';
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
  * @summary Get the local encryption settings
  * @memberOf RecordingApi
  * @instance
  * @param {string} settingsId - Settings Id
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "url": "",
   "apiId": "",
   "apiKey": "",
   "selfUri": ""
}
  */
RecordingApi.prototype.getLocalkeysSettingsSettingsId = function getLocalkeysSettingsSettingsId(settingsId){
    var requestPath = '/api/v2/recording/localkeys/settings/{settingsId}';
    var requestQuery = {};
    var requestBody;

    if(settingsId === undefined || settingsId === null){
      throw new Error('Missing required  parameter: settingsId');
    }
    requestPath = requestPath.replace('{settingsId}', settingsId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the local encryption settings
  * @memberOf RecordingApi
  * @instance
  * @param {string} settingsId - Settings Id
  * @param {} body - Local Encryption metadata
  * @example
  * Body Example:
  * {
   "name": "",
   "url": "",
   "apiId": "",
   "apiKey": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "url": "",
   "apiId": "",
   "apiKey": "",
   "selfUri": ""
}
  */
RecordingApi.prototype.putLocalkeysSettingsSettingsId = function putLocalkeysSettingsSettingsId(settingsId, body){
    var requestPath = '/api/v2/recording/localkeys/settings/{settingsId}';
    var requestQuery = {};
    var requestBody;

    if(settingsId === undefined || settingsId === null){
      throw new Error('Missing required  parameter: settingsId');
    }
    requestPath = requestPath.replace('{settingsId}', settingsId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a screen recording session
  * @memberOf RecordingApi
  * @instance
  * @param {string} recordingSessionId - Screen recording session ID
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "state": "",
   "archiveDate": "",
   "deleteDate": ""
}
  */
RecordingApi.prototype.patchsScreensessionsRecordingsessionId = function patchsScreensessionsRecordingsessionId(recordingSessionId, body){
    var requestPath = '/api/v2/recordings/screensessions/{recordingSessionId}';
    var requestQuery = {};
    var requestBody;

    if(recordingSessionId === undefined || recordingSessionId === null){
      throw new Error('Missing required  parameter: recordingSessionId');
    }
    requestPath = requestPath.replace('{recordingSessionId}', recordingSessionId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary create a local recording key
  * @memberOf RecordingApi
  * @instance
  * @param {} body - Local Encryption body
  * @example
  * Body Example:
  * {
   "configId": "",
   "publicKey": "",
   "keypairId": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "createDate": "",
   "keydataSummary": "",
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
      "selfUri": ""
   },
   "selfUri": ""
}
  */
RecordingApi.prototype.postLocalkeys = function postLocalkeys(body){
    var requestPath = '/api/v2/recording/localkeys';
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
  * @summary Get annotations for recording
  * @memberOf RecordingApi
  * @instance
  * @param {string} conversationId - Conversation ID
  * @param {string} recordingId - Recording ID
  * @example
  * 200 Response Example:
  * [
 {
  "id": "",
  "name": "",
  "type": "",
  "location": 0,
  "durationMs": 0,
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
   "selfUri": ""
  },
  "description": "",
  "keywordName": "",
  "confidence": {},
  "keywordSetId": "",
  "keywordSetName": "",
  "utterance": "",
  "timeBegin": "",
  "timeEnd": "",
  "keywordConfidenceThreshold": "",
  "agentScoreModifier": "",
  "customerScoreModifier": "",
  "selfUri": ""
 }
]
  */
RecordingApi.prototype.getConversationIdRecordingsRecordingIdAnnotations = function getConversationIdRecordingsRecordingIdAnnotations(conversationId, recordingId){
    var requestPath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create annotation
  * @memberOf RecordingApi
  * @instance
  * @param {string} conversationId - Conversation ID
  * @param {string} recordingId - Recording ID
  * @param {} body - annotation
  * @example
  * Body Example:
  * {
   "name": "",
   "type": "",
   "location": 0,
   "durationMs": 0,
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
   "description": "",
   "keywordName": "",
   "confidence": {},
   "keywordSetId": "",
   "keywordSetName": "",
   "utterance": "",
   "timeBegin": "",
   "timeEnd": "",
   "keywordConfidenceThreshold": "",
   "agentScoreModifier": "",
   "customerScoreModifier": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "type": "",
   "location": 0,
   "durationMs": 0,
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
      "selfUri": ""
   },
   "description": "",
   "keywordName": "",
   "confidence": {},
   "keywordSetId": "",
   "keywordSetName": "",
   "utterance": "",
   "timeBegin": "",
   "timeEnd": "",
   "keywordConfidenceThreshold": "",
   "agentScoreModifier": "",
   "customerScoreModifier": "",
   "selfUri": ""
}
  */
RecordingApi.prototype.postConversationIdRecordingsRecordingIdAnnotations = function postConversationIdRecordingsRecordingIdAnnotations(conversationId, recordingId, body){
    var requestPath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
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
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a media retention policy
  * @memberOf RecordingApi
  * @instance
  * @param {string} policyId - Policy ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "modifiedDate": "",
   "createdDate": "",
   "order": 0,
   "description": "",
   "enabled": true,
   "mediaPolicies": {
      "callPolicy": {},
      "chatPolicy": {},
      "emailPolicy": {}
   },
   "conditions": {
      "forUsers": [],
      "directions": [],
      "dateRanges": [],
      "mediaTypes": [],
      "forQueues": [],
      "duration": {},
      "wrapupCodes": [],
      "timeAllowed": {}
   },
   "actions": {
      "retainRecording": true,
      "deleteRecording": true,
      "alwaysDelete": true,
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {},
      "initiateScreenRecording": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   },
   "selfUri": ""
}
  */
RecordingApi.prototype.getMediaretentionpoliciesPolicyId = function getMediaretentionpoliciesPolicyId(policyId){
    var requestPath = '/api/v2/recording/mediaretentionpolicies/{policyId}';
    var requestQuery = {};
    var requestBody;

    if(policyId === undefined || policyId === null){
      throw new Error('Missing required  parameter: policyId');
    }
    requestPath = requestPath.replace('{policyId}', policyId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a media retention policy
  * @memberOf RecordingApi
  * @instance
  * @param {string} policyId - Policy ID
  * @param {} body - Policy
  * @example
  * Body Example:
  * {
   "name": "",
   "modifiedDate": "",
   "createdDate": "",
   "order": 0,
   "description": "",
   "enabled": true,
   "mediaPolicies": {
      "callPolicy": {},
      "chatPolicy": {},
      "emailPolicy": {}
   },
   "conditions": {
      "forUsers": [],
      "directions": [],
      "dateRanges": [],
      "mediaTypes": [],
      "forQueues": [],
      "duration": {},
      "wrapupCodes": [],
      "timeAllowed": {}
   },
   "actions": {
      "retainRecording": true,
      "deleteRecording": true,
      "alwaysDelete": true,
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {},
      "initiateScreenRecording": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   }
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "modifiedDate": "",
   "createdDate": "",
   "order": 0,
   "description": "",
   "enabled": true,
   "mediaPolicies": {
      "callPolicy": {},
      "chatPolicy": {},
      "emailPolicy": {}
   },
   "conditions": {
      "forUsers": [],
      "directions": [],
      "dateRanges": [],
      "mediaTypes": [],
      "forQueues": [],
      "duration": {},
      "wrapupCodes": [],
      "timeAllowed": {}
   },
   "actions": {
      "retainRecording": true,
      "deleteRecording": true,
      "alwaysDelete": true,
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {},
      "initiateScreenRecording": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   },
   "selfUri": ""
}
  */
RecordingApi.prototype.putMediaretentionpoliciesPolicyId = function putMediaretentionpoliciesPolicyId(policyId, body){
    var requestPath = '/api/v2/recording/mediaretentionpolicies/{policyId}';
    var requestQuery = {};
    var requestBody;

    if(policyId === undefined || policyId === null){
      throw new Error('Missing required  parameter: policyId');
    }
    requestPath = requestPath.replace('{policyId}', policyId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a media retention policy
  * @memberOf RecordingApi
  * @instance
  * @param {string} policyId - Policy ID
  */
RecordingApi.prototype.deleteMediaretentionpoliciesPolicyId = function deleteMediaretentionpoliciesPolicyId(policyId){
    var requestPath = '/api/v2/recording/mediaretentionpolicies/{policyId}';
    var requestQuery = {};
    var requestBody;

    if(policyId === undefined || policyId === null){
      throw new Error('Missing required  parameter: policyId');
    }
    requestPath = requestPath.replace('{policyId}', policyId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Patch a media retention policy
  * @memberOf RecordingApi
  * @instance
  * @param {string} policyId - Policy ID
  * @param {} body - Policy
  * @example
  * Body Example:
  * {
   "name": "",
   "modifiedDate": "",
   "createdDate": "",
   "order": 0,
   "description": "",
   "enabled": true,
   "mediaPolicies": {
      "callPolicy": {},
      "chatPolicy": {},
      "emailPolicy": {}
   },
   "conditions": {
      "forUsers": [],
      "directions": [],
      "dateRanges": [],
      "mediaTypes": [],
      "forQueues": [],
      "duration": {},
      "wrapupCodes": [],
      "timeAllowed": {}
   },
   "actions": {
      "retainRecording": true,
      "deleteRecording": true,
      "alwaysDelete": true,
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {},
      "initiateScreenRecording": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   }
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "modifiedDate": "",
   "createdDate": "",
   "order": 0,
   "description": "",
   "enabled": true,
   "mediaPolicies": {
      "callPolicy": {},
      "chatPolicy": {},
      "emailPolicy": {}
   },
   "conditions": {
      "forUsers": [],
      "directions": [],
      "dateRanges": [],
      "mediaTypes": [],
      "forQueues": [],
      "duration": {},
      "wrapupCodes": [],
      "timeAllowed": {}
   },
   "actions": {
      "retainRecording": true,
      "deleteRecording": true,
      "alwaysDelete": true,
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {},
      "initiateScreenRecording": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   },
   "selfUri": ""
}
  */
RecordingApi.prototype.patchMediaretentionpoliciesPolicyId = function patchMediaretentionpoliciesPolicyId(policyId, body){
    var requestPath = '/api/v2/recording/mediaretentionpolicies/{policyId}';
    var requestQuery = {};
    var requestBody;

    if(policyId === undefined || policyId === null){
      throw new Error('Missing required  parameter: policyId');
    }
    requestPath = requestPath.replace('{policyId}', policyId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get annotation
  * @memberOf RecordingApi
  * @instance
  * @param {string} conversationId - Conversation ID
  * @param {string} recordingId - Recording ID
  * @param {string} annotationId - Annotation ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "type": "",
   "location": 0,
   "durationMs": 0,
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
      "selfUri": ""
   },
   "description": "",
   "keywordName": "",
   "confidence": {},
   "keywordSetId": "",
   "keywordSetName": "",
   "utterance": "",
   "timeBegin": "",
   "timeEnd": "",
   "keywordConfidenceThreshold": "",
   "agentScoreModifier": "",
   "customerScoreModifier": "",
   "selfUri": ""
}
  */
RecordingApi.prototype.getConversationIdRecordingsRecordingIdAnnotationsAnnotationId = function getConversationIdRecordingsRecordingIdAnnotationsAnnotationId(conversationId, recordingId, annotationId){
    var requestPath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    if(annotationId === undefined || annotationId === null){
      throw new Error('Missing required  parameter: annotationId');
    }
    requestPath = requestPath.replace('{annotationId}', annotationId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update annotation
  * @memberOf RecordingApi
  * @instance
  * @param {string} conversationId - Conversation ID
  * @param {string} recordingId - Recording ID
  * @param {string} annotationId - Annotation ID
  * @param {} body - annotation
  * @example
  * Body Example:
  * {
   "name": "",
   "type": "",
   "location": 0,
   "durationMs": 0,
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
   "description": "",
   "keywordName": "",
   "confidence": {},
   "keywordSetId": "",
   "keywordSetName": "",
   "utterance": "",
   "timeBegin": "",
   "timeEnd": "",
   "keywordConfidenceThreshold": "",
   "agentScoreModifier": "",
   "customerScoreModifier": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "type": "",
   "location": 0,
   "durationMs": 0,
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
      "selfUri": ""
   },
   "description": "",
   "keywordName": "",
   "confidence": {},
   "keywordSetId": "",
   "keywordSetName": "",
   "utterance": "",
   "timeBegin": "",
   "timeEnd": "",
   "keywordConfidenceThreshold": "",
   "agentScoreModifier": "",
   "customerScoreModifier": "",
   "selfUri": ""
}
  */
RecordingApi.prototype.putConversationIdRecordingsRecordingIdAnnotationsAnnotationId = function putConversationIdRecordingsRecordingIdAnnotationsAnnotationId(conversationId, recordingId, annotationId, body){
    var requestPath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    if(annotationId === undefined || annotationId === null){
      throw new Error('Missing required  parameter: annotationId');
    }
    requestPath = requestPath.replace('{annotationId}', annotationId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete annotation
  * @memberOf RecordingApi
  * @instance
  * @param {string} conversationId - Conversation ID
  * @param {string} recordingId - Recording ID
  * @param {string} annotationId - Annotation ID
  */
RecordingApi.prototype.deleteConversationIdRecordingsRecordingIdAnnotationsAnnotationId = function deleteConversationIdRecordingsRecordingIdAnnotationsAnnotationId(conversationId, recordingId, annotationId){
    var requestPath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    if(annotationId === undefined || annotationId === null){
      throw new Error('Missing required  parameter: annotationId');
    }
    requestPath = requestPath.replace('{annotationId}', annotationId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};


module.exports = RecordingApi;
