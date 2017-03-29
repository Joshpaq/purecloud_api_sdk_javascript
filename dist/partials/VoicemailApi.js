/*jshint -W069 */
/**
* @class VoicemailApi
* @example
* var api = new purecloud.platform.VoicemailApi(pureCloudSession);
*/
function VoicemailApi(session) {
    if(!(this instanceof VoicemailApi)) {
        return new VoicemailApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('VoicemailApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Search voicemails using the q64 value returned from a previous search
  * @memberOf VoicemailApi
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
VoicemailApi.prototype.getSearch = function getSearch(q64, expand){
    var requestPath = '/api/v2/voicemail/search';
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
  * @summary Search voicemails
  * @memberOf VoicemailApi
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
VoicemailApi.prototype.postSearch = function postSearch(body){
    var requestPath = '/api/v2/voicemail/search';
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
  * @summary Get a group's voicemail policy
  * @memberOf VoicemailApi
  * @instance
  * @param {string} groupId - Group ID
  * @example
  * 200 Response Example:
  * {
   "name": "",
   "group": {
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
   },
   "enabled": true,
   "sendEmailNotifications": true,
   "rotateCallsSecs": 0,
   "stopRingingAfterRotations": 0
}
  */
VoicemailApi.prototype.getGroupsGroupIdPolicy = function getGroupsGroupIdPolicy(groupId){
    var requestPath = '/api/v2/voicemail/groups/{groupId}/policy';
    var requestQuery = {};
    var requestBody;

    if(groupId === undefined || groupId === null){
      throw new Error('Missing required  parameter: groupId');
    }
    requestPath = requestPath.replace('{groupId}', groupId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a group's voicemail policy
  * @memberOf VoicemailApi
  * @instance
  * @param {string} groupId - Group ID
  * @param {} body - The group's voicemail policy
  * @example
  * Body Example:
  * {
   "name": "",
   "enabled": true,
   "sendEmailNotifications": true,
   "rotateCallsSecs": 0,
   "stopRingingAfterRotations": 0
}
  * @example
  * 200 Response Example:
  * {
   "name": "",
   "group": {
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
   },
   "enabled": true,
   "sendEmailNotifications": true,
   "rotateCallsSecs": 0,
   "stopRingingAfterRotations": 0
}
  */
VoicemailApi.prototype.patchGroupsGroupIdPolicy = function patchGroupsGroupIdPolicy(groupId, body){
    var requestPath = '/api/v2/voicemail/groups/{groupId}/policy';
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
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the current user's voicemail policy
  * @memberOf VoicemailApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "enabled": true,
   "alertTimeoutSeconds": 0,
   "pin": "",
   "modifiedDate": ""
}
  */
VoicemailApi.prototype.getMePolicy = function getMePolicy(){
    var requestPath = '/api/v2/voicemail/me/policy';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the current user's voicemail policy
  * @memberOf VoicemailApi
  * @instance
  * @param {} body - The user's voicemail policy
  * @example
  * Body Example:
  * {
   "alertTimeoutSeconds": 0,
   "pin": ""
}
  * @example
  * 200 Response Example:
  * {
   "enabled": true,
   "alertTimeoutSeconds": 0,
   "pin": "",
   "modifiedDate": ""
}
  */
VoicemailApi.prototype.patchMePolicy = function patchMePolicy(body){
    var requestPath = '/api/v2/voicemail/me/policy';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a user's voicemail policy
  * @memberOf VoicemailApi
  * @instance
  * @param {string} userId - User ID
  * @example
  * 200 Response Example:
  * {
   "enabled": true,
   "alertTimeoutSeconds": 0,
   "pin": "",
   "modifiedDate": ""
}
  */
VoicemailApi.prototype.getUserpoliciesUserId = function getUserpoliciesUserId(userId){
    var requestPath = '/api/v2/voicemail/userpolicies/{userId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a user's voicemail policy
  * @memberOf VoicemailApi
  * @instance
  * @param {string} userId - User ID
  * @param {} body - The user's voicemail policy
  * @example
  * Body Example:
  * {
   "alertTimeoutSeconds": 0,
   "pin": ""
}
  * @example
  * 200 Response Example:
  * {
   "enabled": true,
   "alertTimeoutSeconds": 0,
   "pin": "",
   "modifiedDate": ""
}
  */
VoicemailApi.prototype.patchUserpoliciesUserId = function patchUserpoliciesUserId(userId, body){
    var requestPath = '/api/v2/voicemail/userpolicies/{userId}';
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
  * @summary Get a policy
  * @memberOf VoicemailApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "enabled": true,
   "alertTimeoutSeconds": 0,
   "pinConfiguration": {
      "minimumLength": 0,
      "maximumLength": 0
   },
   "voicemailExtension": "",
   "pinRequired": true,
   "sendEmailNotifications": true,
   "modifiedDate": ""
}
  */
VoicemailApi.prototype.getPolicy = function getPolicy(){
    var requestPath = '/api/v2/voicemail/policy';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a policy
  * @memberOf VoicemailApi
  * @instance
  * @param {} body - Policy
  * @example
  * Body Example:
  * {
   "alertTimeoutSeconds": 0,
   "pinConfiguration": {
      "minimumLength": 0,
      "maximumLength": 0
   },
   "voicemailExtension": "",
   "pinRequired": true,
   "sendEmailNotifications": true
}
  * @example
  * 200 Response Example:
  * {
   "enabled": true,
   "alertTimeoutSeconds": 0,
   "pinConfiguration": {
      "minimumLength": 0,
      "maximumLength": 0
   },
   "voicemailExtension": "",
   "pinRequired": true,
   "sendEmailNotifications": true,
   "modifiedDate": ""
}
  */
VoicemailApi.prototype.putPolicy = function putPolicy(body){
    var requestPath = '/api/v2/voicemail/policy';
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
  * @summary List voicemail messages
  * @memberOf VoicemailApi
  * @instance
  * @param {string} ids - An optional comma separated list of VoicemailMessage ids
  * @param {array} expand - If the caller is a known user, which fields, if any, to expand Valid Values: callerUser.routingStatus, callerUser.primaryPresence, callerUser.conversationSummary, callerUser.outOfOffice, callerUser.geolocation
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
VoicemailApi.prototype.getMessages = function getMessages(ids, expand){
    var requestPath = '/api/v2/voicemail/messages';
    var requestQuery = {};
    var requestBody;

    requestQuery["ids"] = ids;
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Copy a voicemail message to a user or group
  * @memberOf VoicemailApi
  * @instance
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "voicemailMessageId": "",
   "userId": "",
   "groupId": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
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
   "read": true,
   "audioRecordingDurationSeconds": 0,
   "audioRecordingSizeBytes": 0,
   "createdDate": "",
   "modifiedDate": "",
   "callerAddress": "",
   "callerName": "",
   "callerUser": {
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
   "deleted": true,
   "note": "",
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
   "group": {
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
   },
   "copiedFrom": {
      "user": {},
      "group": {},
      "date": ""
   },
   "copiedTo": [],
   "selfUri": ""
}
  */
VoicemailApi.prototype.postMessages = function postMessages(body){
    var requestPath = '/api/v2/voicemail/messages';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete all voicemail messages
  * @memberOf VoicemailApi
  * @instance
  */
VoicemailApi.prototype.deleteMessages = function deleteMessages(){
    var requestPath = '/api/v2/voicemail/messages';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary List voicemail messages
  * @memberOf VoicemailApi
  * @instance
  * @param {string} groupId - Group ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
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
VoicemailApi.prototype.getGroupsGroupIdMessages = function getGroupsGroupIdMessages(groupId, pageSize, pageNumber){
    var requestPath = '/api/v2/voicemail/groups/{groupId}/messages';
    var requestQuery = {};
    var requestBody;

    if(groupId === undefined || groupId === null){
      throw new Error('Missing required  parameter: groupId');
    }
    requestPath = requestPath.replace('{groupId}', groupId);
    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the current user's mailbox information
  * @memberOf VoicemailApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "usageSizeBytes": 0,
   "totalCount": 0,
   "unreadCount": 0,
   "deletedCount": 0,
   "createdDate": "",
   "modifiedDate": ""
}
  */
VoicemailApi.prototype.getMailbox = function getMailbox(){
    var requestPath = '/api/v2/voicemail/mailbox';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the current user's mailbox information
  * @memberOf VoicemailApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "usageSizeBytes": 0,
   "totalCount": 0,
   "unreadCount": 0,
   "deletedCount": 0,
   "createdDate": "",
   "modifiedDate": ""
}
  */
VoicemailApi.prototype.getMeMailbox = function getMeMailbox(){
    var requestPath = '/api/v2/voicemail/me/mailbox';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the group's mailbox information
  * @memberOf VoicemailApi
  * @instance
  * @param {string} groupId - groupId
  * @example
  * 200 Response Example:
  * {
   "usageSizeBytes": 0,
   "totalCount": 0,
   "unreadCount": 0,
   "deletedCount": 0,
   "createdDate": "",
   "modifiedDate": ""
}
  */
VoicemailApi.prototype.getGroupsGroupIdMailbox = function getGroupsGroupIdMailbox(groupId){
    var requestPath = '/api/v2/voicemail/groups/{groupId}/mailbox';
    var requestQuery = {};
    var requestBody;

    if(groupId === undefined || groupId === null){
      throw new Error('Missing required  parameter: groupId');
    }
    requestPath = requestPath.replace('{groupId}', groupId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary List voicemail messages
  * @memberOf VoicemailApi
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
   "firstUri": "",
   "selfUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
VoicemailApi.prototype.getMeMessages = function getMeMessages(pageSize, pageNumber){
    var requestPath = '/api/v2/voicemail/me/messages';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get message.
  * @memberOf VoicemailApi
  * @instance
  * @param {string} messageId - Message ID
  * @param {array} expand - If the caller is a known user, which fields, if any, to expand Valid Values: callerUser.routingStatus, callerUser.primaryPresence, callerUser.conversationSummary, callerUser.outOfOffice, callerUser.geolocation
  * @example
  * 200 Response Example:
  * {
   "id": "",
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
   "read": true,
   "audioRecordingDurationSeconds": 0,
   "audioRecordingSizeBytes": 0,
   "createdDate": "",
   "modifiedDate": "",
   "callerAddress": "",
   "callerName": "",
   "callerUser": {
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
   "deleted": true,
   "note": "",
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
   "group": {
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
   },
   "copiedFrom": {
      "user": {},
      "group": {},
      "date": ""
   },
   "copiedTo": [],
   "selfUri": ""
}
  */
VoicemailApi.prototype.getMessagesMessageId = function getMessagesMessageId(messageId, expand){
    var requestPath = '/api/v2/voicemail/messages/{messageId}';
    var requestQuery = {};
    var requestBody;

    if(messageId === undefined || messageId === null){
      throw new Error('Missing required  parameter: messageId');
    }
    requestPath = requestPath.replace('{messageId}', messageId);
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a message.
  * @memberOf VoicemailApi
  * @instance
  * @param {string} messageId - Message ID
  * @param {} body - VoicemailMessage
  * @example
  * Body Example:
  * {
   "read": true,
   "deleted": true,
   "note": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
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
   "read": true,
   "audioRecordingDurationSeconds": 0,
   "audioRecordingSizeBytes": 0,
   "createdDate": "",
   "modifiedDate": "",
   "callerAddress": "",
   "callerName": "",
   "callerUser": {
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
   "deleted": true,
   "note": "",
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
   "group": {
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
   },
   "copiedFrom": {
      "user": {},
      "group": {},
      "date": ""
   },
   "copiedTo": [],
   "selfUri": ""
}
  */
VoicemailApi.prototype.putMessagesMessageId = function putMessagesMessageId(messageId, body){
    var requestPath = '/api/v2/voicemail/messages/{messageId}';
    var requestQuery = {};
    var requestBody;

    if(messageId === undefined || messageId === null){
      throw new Error('Missing required  parameter: messageId');
    }
    requestPath = requestPath.replace('{messageId}', messageId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a message.
  * @memberOf VoicemailApi
  * @instance
  * @param {string} messageId - Message ID
  */
VoicemailApi.prototype.deleteMessagesMessageId = function deleteMessagesMessageId(messageId){
    var requestPath = '/api/v2/voicemail/messages/{messageId}';
    var requestQuery = {};
    var requestBody;

    if(messageId === undefined || messageId === null){
      throw new Error('Missing required  parameter: messageId');
    }
    requestPath = requestPath.replace('{messageId}', messageId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get media playback URI for this message
  * @memberOf VoicemailApi
  * @instance
  * @param {string} messageId - Message ID
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
   "id": "",
   "mediaFileUri": "",
   "mediaImageUri": ""
}
  */
VoicemailApi.prototype.getMessagesMessageIdMedia = function getMessagesMessageIdMedia(messageId, formatId){
    var requestPath = '/api/v2/voicemail/messages/{messageId}/media';
    var requestQuery = {};
    var requestBody;

    if(messageId === undefined || messageId === null){
      throw new Error('Missing required  parameter: messageId');
    }
    requestPath = requestPath.replace('{messageId}', messageId);
    requestQuery["formatId"] = formatId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};


module.exports = VoicemailApi;
