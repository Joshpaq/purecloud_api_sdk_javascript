/*jshint -W069 */
/**
* @class ConversationsApi
* @example
* var api = new purecloud.platform.ConversationsApi(pureCloudSession);
*/
function ConversationsApi(session) {
    if(!(this instanceof ConversationsApi)) {
        return new ConversationsApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('ConversationsApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get conversations
  * @memberOf ConversationsApi
  * @instance
  * @param {string} communicationType - Call or Chat communication filtering
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
ConversationsApi.prototype.getConversations = function getConversations(communicationType){
    var requestPath = '/api/v2/conversations';
    var requestQuery = {};
    var requestBody;

    requestQuery["communicationType"] = communicationType;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get recent chat conversations
  * @memberOf ConversationsApi
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
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
ConversationsApi.prototype.getChats = function getChats(){
    var requestPath = '/api/v2/conversations/chats';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a web chat conversation
  * @memberOf ConversationsApi
  * @instance
  * @param {} body - Create web chat request
  * @example
  * Body Example:
  * {
   "queueId": "",
   "provider": "",
   "skillIds": [],
   "languageId": "",
   "priority": 0,
   "attributes": {},
   "customerName": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "participants": [],
   "otherMediaUris": [],
   "selfUri": ""
}
  */
ConversationsApi.prototype.postChats = function postChats(body){
    var requestPath = '/api/v2/conversations/chats';
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
  * @summary Get list of wrapup codes for this conversation participant
  * @memberOf ConversationsApi
  * @instance
  * @param {string} chatId - chatId
  * @param {string} participantId - participantId
  * @example
  * 200 Response Example:
  * [
 {
  "id": "",
  "name": "",
  "dateCreated": "",
  "dateModified": "",
  "modifiedBy": "",
  "createdBy": "",
  "selfUri": ""
 }
]
  */
ConversationsApi.prototype.getChatsChatIdParticipantsParticipantIdWrapupcodes = function getChatsChatIdParticipantsParticipantIdWrapupcodes(chatId, participantId){
    var requestPath = '/api/v2/conversations/chats/{chatId}/participants/{participantId}/wrapupcodes';
    var requestQuery = {};
    var requestBody;

    if(chatId === undefined || chatId === null){
      throw new Error('Missing required  parameter: chatId');
    }
    requestPath = requestPath.replace('{chatId}', chatId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get chat conversation
  * @memberOf ConversationsApi
  * @instance
  * @param {string} chatId - chatId
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "participants": [],
   "otherMediaUris": [],
   "selfUri": ""
}
  */
ConversationsApi.prototype.getChatsChatId = function getChatsChatId(chatId){
    var requestPath = '/api/v2/conversations/chats/{chatId}';
    var requestQuery = {};
    var requestBody;

    if(chatId === undefined || chatId === null){
      throw new Error('Missing required  parameter: chatId');
    }
    requestPath = requestPath.replace('{chatId}', chatId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a conversation by disconnecting all of the participants
  * @memberOf ConversationsApi
  * @instance
  * @param {string} chatId - chatId
  * @param {} body - Conversation
  * @example
  * Body Example:
  * {
   "name": "",
   "startTime": "",
   "endTime": "",
   "address": "",
   "participants": [],
   "conversationIds": [],
   "maxParticipants": 0,
   "recordingState": "",
   "state": ""
}
  * @example
  * 200 Response Example:
  * {
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
}
  */
ConversationsApi.prototype.patchChatsChatId = function patchChatsChatId(chatId, body){
    var requestPath = '/api/v2/conversations/chats/{chatId}';
    var requestQuery = {};
    var requestBody;

    if(chatId === undefined || chatId === null){
      throw new Error('Missing required  parameter: chatId');
    }
    requestPath = requestPath.replace('{chatId}', chatId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the wrap-up for this conversation participant. 
  * @memberOf ConversationsApi
  * @instance
  * @param {string} chatId - chatId
  * @param {string} participantId - participantId
  * @param {boolean} provisional - Indicates if the wrap-up code is provisional.
  * @example
  * 200 Response Example:
  * {
   "code": "",
   "name": "",
   "notes": "",
   "tags": [],
   "durationSeconds": 0,
   "endTime": "",
   "provisional": true
}
  */
ConversationsApi.prototype.getChatsChatIdParticipantsParticipantIdWrapup = function getChatsChatIdParticipantsParticipantIdWrapup(chatId, participantId, provisional){
    var requestPath = '/api/v2/conversations/chats/{chatId}/participants/{participantId}/wrapup';
    var requestQuery = {};
    var requestBody;

    if(chatId === undefined || chatId === null){
      throw new Error('Missing required  parameter: chatId');
    }
    requestPath = requestPath.replace('{chatId}', chatId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    requestQuery["provisional"] = provisional;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the attributes on a conversation participant.
  * @memberOf ConversationsApi
  * @instance
  * @param {string} chatId - chatId
  * @param {string} participantId - participantId
  * @param {} body - Participant attributes
  * @example
  * Body Example:
  * {
   "attributes": {}
}
  */
ConversationsApi.prototype.patchChatsChatIdParticipantsParticipantIdAttributes = function patchChatsChatIdParticipantsParticipantIdAttributes(chatId, participantId, body){
    var requestPath = '/api/v2/conversations/chats/{chatId}/participants/{participantId}/attributes';
    var requestQuery = {};
    var requestBody;

    if(chatId === undefined || chatId === null){
      throw new Error('Missing required  parameter: chatId');
    }
    requestPath = requestPath.replace('{chatId}', chatId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update conversation participant's communication by disconnecting it.
  * @memberOf ConversationsApi
  * @instance
  * @param {string} chatId - chatId
  * @param {string} participantId - participantId
  * @param {string} communicationId - communicationId
  * @param {} body - Participant
  * @example
  * Body Example:
  * {
   "wrapup": {
      "code": "",
      "name": "",
      "notes": "",
      "tags": [],
      "durationSeconds": 0,
      "endTime": "",
      "provisional": true
   },
   "state": "",
   "recording": true,
   "muted": true,
   "confined": true,
   "held": true,
   "wrapupSkipped": true
}
  * @example
  * 200 Response Example:
  * {}
  */
ConversationsApi.prototype.patchChatsChatIdParticipantsParticipantIdCommunicationsCommunicationId = function patchChatsChatIdParticipantsParticipantIdCommunicationsCommunicationId(chatId, participantId, communicationId, body){
    var requestPath = '/api/v2/conversations/chats/{chatId}/participants/{participantId}/communications/{communicationId}';
    var requestQuery = {};
    var requestBody;

    if(chatId === undefined || chatId === null){
      throw new Error('Missing required  parameter: chatId');
    }
    requestPath = requestPath.replace('{chatId}', chatId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(communicationId === undefined || communicationId === null){
      throw new Error('Missing required  parameter: communicationId');
    }
    requestPath = requestPath.replace('{communicationId}', communicationId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update conversation participant
  * @memberOf ConversationsApi
  * @instance
  * @param {string} chatId - chatId
  * @param {string} participantId - participantId
  * @param {} body - Update request
  * @example
  * Body Example:
  * {
   "wrapup": {
      "code": "",
      "name": "",
      "notes": "",
      "tags": [],
      "durationSeconds": 0,
      "endTime": "",
      "provisional": true
   },
   "state": "",
   "recording": true,
   "muted": true,
   "confined": true,
   "held": true,
   "wrapupSkipped": true
}
  */
ConversationsApi.prototype.patchChatsChatIdParticipantsParticipantId = function patchChatsChatIdParticipantsParticipantId(chatId, participantId, body){
    var requestPath = '/api/v2/conversations/chats/{chatId}/participants/{participantId}';
    var requestQuery = {};
    var requestBody;

    if(chatId === undefined || chatId === null){
      throw new Error('Missing required  parameter: chatId');
    }
    requestPath = requestPath.replace('{chatId}', chatId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Replace this participant with the specified user and/or address
  * @memberOf ConversationsApi
  * @instance
  * @param {string} chatId - chatId
  * @param {string} participantId - participantId
  * @param {} body - Transfer request
  * @example
  * Body Example:
  * {
   "userId": "",
   "address": "",
   "userName": "",
   "queueId": "",
   "voicemail": true
}
  */
ConversationsApi.prototype.postChatsChatIdParticipantsParticipantIdReplace = function postChatsChatIdParticipantsParticipantIdReplace(chatId, participantId, body){
    var requestPath = '/api/v2/conversations/chats/{chatId}/participants/{participantId}/replace';
    var requestQuery = {};
    var requestBody;

    if(chatId === undefined || chatId === null){
      throw new Error('Missing required  parameter: chatId');
    }
    requestPath = requestPath.replace('{chatId}', chatId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a code used to add a communication to this participant
  * @memberOf ConversationsApi
  * @instance
  * @param {string} conversationId - conversation ID
  * @param {string} participantId - participant ID
  * @param {string} addCommunicationCode - addCommunicationCode
  */
ConversationsApi.prototype.deleteConversationIdParticipantsParticipantIdCodesAddcommunicationcode = function deleteConversationIdParticipantsParticipantIdCodesAddcommunicationcode(conversationId, participantId, addCommunicationCode){
    var requestPath = '/api/v2/conversations/{conversationId}/participants/{participantId}/codes/{addCommunicationCode}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(addCommunicationCode === undefined || addCommunicationCode === null){
      throw new Error('Missing required  parameter: addCommunicationCode');
    }
    requestPath = requestPath.replace('{addCommunicationCode}', addCommunicationCode);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get recent cobrowse conversations
  * @memberOf ConversationsApi
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
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
ConversationsApi.prototype.getCobrowsesessions = function getCobrowsesessions(){
    var requestPath = '/api/v2/conversations/cobrowsesessions';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get list of wrapup codes for this conversation participant
  * @memberOf ConversationsApi
  * @instance
  * @param {string} cobrowseId - cobrowseId
  * @param {string} participantId - participantId
  * @example
  * 200 Response Example:
  * [
 {
  "id": "",
  "name": "",
  "dateCreated": "",
  "dateModified": "",
  "modifiedBy": "",
  "createdBy": "",
  "selfUri": ""
 }
]
  */
ConversationsApi.prototype.getCobrowsesessionsCobrowseIdParticipantsParticipantIdWrapupcodes = function getCobrowsesessionsCobrowseIdParticipantsParticipantIdWrapupcodes(cobrowseId, participantId){
    var requestPath = '/api/v2/conversations/cobrowsesessions/{cobrowseId}/participants/{participantId}/wrapupcodes';
    var requestQuery = {};
    var requestBody;

    if(cobrowseId === undefined || cobrowseId === null){
      throw new Error('Missing required  parameter: cobrowseId');
    }
    requestPath = requestPath.replace('{cobrowseId}', cobrowseId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get cobrowse conversation
  * @memberOf ConversationsApi
  * @instance
  * @param {string} cobrowseId - cobrowseId
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "participants": [],
   "otherMediaUris": [],
   "selfUri": ""
}
  */
ConversationsApi.prototype.getCobrowsesessionsCobrowseId = function getCobrowsesessionsCobrowseId(cobrowseId){
    var requestPath = '/api/v2/conversations/cobrowsesessions/{cobrowseId}';
    var requestQuery = {};
    var requestBody;

    if(cobrowseId === undefined || cobrowseId === null){
      throw new Error('Missing required  parameter: cobrowseId');
    }
    requestPath = requestPath.replace('{cobrowseId}', cobrowseId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a conversation by disconnecting all of the participants
  * @memberOf ConversationsApi
  * @instance
  * @param {string} cobrowseId - cobrowseId
  * @param {} body - Conversation
  * @example
  * Body Example:
  * {
   "name": "",
   "startTime": "",
   "endTime": "",
   "address": "",
   "participants": [],
   "conversationIds": [],
   "maxParticipants": 0,
   "recordingState": "",
   "state": ""
}
  * @example
  * 200 Response Example:
  * {
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
}
  */
ConversationsApi.prototype.patchCobrowsesessionsCobrowseId = function patchCobrowsesessionsCobrowseId(cobrowseId, body){
    var requestPath = '/api/v2/conversations/cobrowsesessions/{cobrowseId}';
    var requestQuery = {};
    var requestBody;

    if(cobrowseId === undefined || cobrowseId === null){
      throw new Error('Missing required  parameter: cobrowseId');
    }
    requestPath = requestPath.replace('{cobrowseId}', cobrowseId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the wrap-up for this conversation participant. 
  * @memberOf ConversationsApi
  * @instance
  * @param {string} cobrowseId - cobrowseId
  * @param {string} participantId - participantId
  * @param {boolean} provisional - Indicates if the wrap-up code is provisional.
  * @example
  * 200 Response Example:
  * {
   "code": "",
   "name": "",
   "notes": "",
   "tags": [],
   "durationSeconds": 0,
   "endTime": "",
   "provisional": true
}
  */
ConversationsApi.prototype.getCobrowsesessionsCobrowseIdParticipantsParticipantIdWrapup = function getCobrowsesessionsCobrowseIdParticipantsParticipantIdWrapup(cobrowseId, participantId, provisional){
    var requestPath = '/api/v2/conversations/cobrowsesessions/{cobrowseId}/participants/{participantId}/wrapup';
    var requestQuery = {};
    var requestBody;

    if(cobrowseId === undefined || cobrowseId === null){
      throw new Error('Missing required  parameter: cobrowseId');
    }
    requestPath = requestPath.replace('{cobrowseId}', cobrowseId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    requestQuery["provisional"] = provisional;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the attributes on a conversation participant.
  * @memberOf ConversationsApi
  * @instance
  * @param {string} cobrowseId - cobrowseId
  * @param {string} participantId - participantId
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "attributes": {}
}
  */
ConversationsApi.prototype.patchCobrowsesessionsCobrowseIdParticipantsParticipantIdAttributes = function patchCobrowsesessionsCobrowseIdParticipantsParticipantIdAttributes(cobrowseId, participantId, body){
    var requestPath = '/api/v2/conversations/cobrowsesessions/{cobrowseId}/participants/{participantId}/attributes';
    var requestQuery = {};
    var requestBody;

    if(cobrowseId === undefined || cobrowseId === null){
      throw new Error('Missing required  parameter: cobrowseId');
    }
    requestPath = requestPath.replace('{cobrowseId}', cobrowseId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update conversation participant's communication by disconnecting it.
  * @memberOf ConversationsApi
  * @instance
  * @param {string} cobrowseId - cobrowseId
  * @param {string} participantId - participantId
  * @param {string} communicationId - communicationId
  * @param {} body - Participant
  * @example
  * Body Example:
  * {
   "wrapup": {
      "code": "",
      "name": "",
      "notes": "",
      "tags": [],
      "durationSeconds": 0,
      "endTime": "",
      "provisional": true
   },
   "state": "",
   "recording": true,
   "muted": true,
   "confined": true,
   "held": true,
   "wrapupSkipped": true
}
  * @example
  * 200 Response Example:
  * {}
  */
ConversationsApi.prototype.patchCobrowsesessionsCobrowseIdParticipantsParticipantIdCommunicationsCommunicationId = function patchCobrowsesessionsCobrowseIdParticipantsParticipantIdCommunicationsCommunicationId(cobrowseId, participantId, communicationId, body){
    var requestPath = '/api/v2/conversations/cobrowsesessions/{cobrowseId}/participants/{participantId}/communications/{communicationId}';
    var requestQuery = {};
    var requestBody;

    if(cobrowseId === undefined || cobrowseId === null){
      throw new Error('Missing required  parameter: cobrowseId');
    }
    requestPath = requestPath.replace('{cobrowseId}', cobrowseId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(communicationId === undefined || communicationId === null){
      throw new Error('Missing required  parameter: communicationId');
    }
    requestPath = requestPath.replace('{communicationId}', communicationId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update conversation participant
  * @memberOf ConversationsApi
  * @instance
  * @param {string} cobrowseId - cobrowseId
  * @param {string} participantId - participantId
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "wrapup": {
      "code": "",
      "name": "",
      "notes": "",
      "tags": [],
      "durationSeconds": 0,
      "endTime": "",
      "provisional": true
   },
   "state": "",
   "recording": true,
   "muted": true,
   "confined": true,
   "held": true,
   "wrapupSkipped": true
}
  */
ConversationsApi.prototype.patchCobrowsesessionsCobrowseIdParticipantsParticipantId = function patchCobrowsesessionsCobrowseIdParticipantsParticipantId(cobrowseId, participantId, body){
    var requestPath = '/api/v2/conversations/cobrowsesessions/{cobrowseId}/participants/{participantId}';
    var requestQuery = {};
    var requestBody;

    if(cobrowseId === undefined || cobrowseId === null){
      throw new Error('Missing required  parameter: cobrowseId');
    }
    requestPath = requestPath.replace('{cobrowseId}', cobrowseId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Replace this participant with the specified user and/or address
  * @memberOf ConversationsApi
  * @instance
  * @param {string} cobrowseId - cobrowseId
  * @param {string} participantId - participantId
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "userId": "",
   "address": "",
   "userName": "",
   "queueId": "",
   "voicemail": true
}
  */
ConversationsApi.prototype.postCobrowsesessionsCobrowseIdParticipantsParticipantIdReplace = function postCobrowsesessionsCobrowseIdParticipantsParticipantIdReplace(cobrowseId, participantId, body){
    var requestPath = '/api/v2/conversations/cobrowsesessions/{cobrowseId}/participants/{participantId}/replace';
    var requestQuery = {};
    var requestBody;

    if(cobrowseId === undefined || cobrowseId === null){
      throw new Error('Missing required  parameter: cobrowseId');
    }
    requestPath = requestPath.replace('{cobrowseId}', cobrowseId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a conversation by id
  * @memberOf ConversationsApi
  * @instance
  * @param {string} conversationId - conversationId
  * @example
  * 200 Response Example:
  * {
   "conversationId": "",
   "conversationStart": "",
   "conversationEnd": "",
   "participants": [],
   "evaluations": []
}
  */
ConversationsApi.prototype.getConversationsConversationIdDetails = function getConversationsConversationIdDetails(conversationId){
    var requestPath = '/api/v2/analytics/conversations/{conversationId}/details';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query for conversation aggregates
  * @memberOf ConversationsApi
  * @instance
  * @param {} body - query
  * @example
  * Body Example:
  * {
   "interval": "",
   "granularity": "",
   "timeZone": "",
   "groupBy": [],
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": [],
   "flattenMultivaluedDimensions": true
}
  * @example
  * 200 Response Example:
  * {
   "results": []
}
  */
ConversationsApi.prototype.postConversationsAggregatesQuery = function postConversationsAggregatesQuery(body){
    var requestPath = '/api/v2/analytics/conversations/aggregates/query';
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
  * @summary Query for conversation details
  * @memberOf ConversationsApi
  * @instance
  * @param {} body - query
  * @example
  * Body Example:
  * {
   "interval": "",
   "conversationFilters": [],
   "evaluationFilters": [],
   "segmentFilters": [],
   "aggregations": [],
   "paging": {
      "pageSize": 0,
      "pageNumber": 0
   },
   "order": "",
   "orderBy": ""
}
  * @example
  * 200 Response Example:
  * {
   "conversations": [],
   "aggregations": []
}
  */
ConversationsApi.prototype.postConversationsDetailsQuery = function postConversationsDetailsQuery(body){
    var requestPath = '/api/v2/analytics/conversations/details/query';
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
  * @summary Index conversation properties
  * @memberOf ConversationsApi
  * @instance
  * @param {string} conversationId - conversationId
  * @param {} body - request
  * @example
  * Body Example:
  * {
   "sessionId": "",
   "targetDate": "",
   "properties": []
}
  */
ConversationsApi.prototype.postConversationsConversationIdDetailsProperties = function postConversationsConversationIdDetailsProperties(conversationId, body){
    var requestPath = '/api/v2/analytics/conversations/{conversationId}/details/properties';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create Fax Conversation
  * @memberOf ConversationsApi
  * @instance
  * @param {} body - Fax
  * @example
  * Body Example:
  * {
   "name": "",
   "addresses": [],
   "documentId": "",
   "contentType": "",
   "workspace": {
      "name": "",
      "type": "",
      "isCurrentUserWorkspace": true,
      "user": {},
      "bucket": "",
      "dateCreated": "",
      "dateModified": "",
      "summary": {},
      "acl": [],
      "description": ""
   },
   "coverSheet": {
      "notes": "",
      "locale": ""
   },
   "timeZoneOffsetMinutes": 0
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "uploadDestinationUri": "",
   "uploadMethodType": "",
   "selfUri": ""
}
  */
ConversationsApi.prototype.postFaxes = function postFaxes(body){
    var requestPath = '/api/v2/conversations/faxes';
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
  * @summary Get recent conversations
  * @memberOf ConversationsApi
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
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
ConversationsApi.prototype.getCalls = function getCalls(){
    var requestPath = '/api/v2/conversations/calls';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a call conversation
  * @memberOf ConversationsApi
  * @instance
  * @param {} body - Call request
  * @example
  * Body Example:
  * {
   "phoneNumber": "",
   "callFromQueueId": "",
   "callQueueId": "",
   "callUserId": "",
   "priority": 0,
   "languageId": "",
   "routingSkillsIds": [],
   "conversationIds": [],
   "participants": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "selfUri": ""
}
  */
ConversationsApi.prototype.postCalls = function postCalls(body){
    var requestPath = '/api/v2/conversations/calls';
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
  * @summary Listen in on the conversation from the point of view of a given participant.
  * @memberOf ConversationsApi
  * @instance
  * @param {string} callId - callId
  * @param {string} participantId - participantId
  */
ConversationsApi.prototype.postCallsCallIdParticipantsParticipantIdMonitor = function postCallsCallIdParticipantsParticipantIdMonitor(callId, participantId){
    var requestPath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/monitor';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Initiate and update consult transfer
  * @memberOf ConversationsApi
  * @instance
  * @param {string} callId - callId
  * @param {string} participantId - participantId
  * @param {} body - Destination address & initial speak to
  * @example
  * Body Example:
  * {
   "speakTo": "",
   "destination": {
      "address": "",
      "name": "",
      "userId": "",
      "queueId": ""
   }
}
  * @example
  * 200 Response Example:
  * {
   "destinationParticipantId": ""
}
  */
ConversationsApi.prototype.postCallsCallIdParticipantsParticipantIdConsult = function postCallsCallIdParticipantsParticipantIdConsult(callId, participantId, body){
    var requestPath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/consult';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Cancel the transfer
  * @memberOf ConversationsApi
  * @instance
  * @param {string} callId - callId
  * @param {string} participantId - participantId
  */
ConversationsApi.prototype.deleteCallsCallIdParticipantsParticipantIdConsult = function deleteCallsCallIdParticipantsParticipantIdConsult(callId, participantId){
    var requestPath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/consult';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Change who can speak
  * @memberOf ConversationsApi
  * @instance
  * @param {string} callId - callId
  * @param {string} participantId - participantId
  * @param {} body - new speak to
  * @example
  * Body Example:
  * {
   "speakTo": ""
}
  * @example
  * 200 Response Example:
  * {
   "destinationParticipantId": ""
}
  */
ConversationsApi.prototype.patchCallsCallIdParticipantsParticipantIdConsult = function patchCallsCallIdParticipantsParticipantIdConsult(callId, participantId, body){
    var requestPath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/consult';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get list of wrapup codes for this conversation participant
  * @memberOf ConversationsApi
  * @instance
  * @param {string} callId - callId
  * @param {string} participantId - participantId
  * @example
  * 200 Response Example:
  * [
 {
  "id": "",
  "name": "",
  "dateCreated": "",
  "dateModified": "",
  "modifiedBy": "",
  "createdBy": "",
  "selfUri": ""
 }
]
  */
ConversationsApi.prototype.getCallsCallIdParticipantsParticipantIdWrapupcodes = function getCallsCallIdParticipantsParticipantIdWrapupcodes(callId, participantId){
    var requestPath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/wrapupcodes';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get call conversation
  * @memberOf ConversationsApi
  * @instance
  * @param {string} callId - callId
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "participants": [],
   "otherMediaUris": [],
   "recordingState": "",
   "selfUri": ""
}
  */
ConversationsApi.prototype.getCallsCallId = function getCallsCallId(callId){
    var requestPath = '/api/v2/conversations/calls/{callId}';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Add a new call to a conversation
  * @memberOf ConversationsApi
  * @instance
  * @param {string} callId - callId
  * @param {} body - Conversation
  * @example
  * Body Example:
  * {
   "callNumber": ""
}
  * @example
  * 200 Response Example:
  * {
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
}
  */
ConversationsApi.prototype.postCallsCallId = function postCallsCallId(callId, body){
    var requestPath = '/api/v2/conversations/calls/{callId}';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a conversation by setting it's recording state, merging in other conversations to create a conference, or disconnecting all of the participants
  * @memberOf ConversationsApi
  * @instance
  * @param {string} callId - callId
  * @param {} body - Conversation
  * @example
  * Body Example:
  * {
   "name": "",
   "startTime": "",
   "endTime": "",
   "address": "",
   "participants": [],
   "conversationIds": [],
   "maxParticipants": 0,
   "recordingState": "",
   "state": ""
}
  * @example
  * 200 Response Example:
  * {
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
}
  */
ConversationsApi.prototype.patchCallsCallId = function patchCallsCallId(callId, body){
    var requestPath = '/api/v2/conversations/calls/{callId}';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the wrap-up for this conversation participant. 
  * @memberOf ConversationsApi
  * @instance
  * @param {string} callId - callId
  * @param {string} participantId - participantId
  * @param {boolean} provisional - Indicates if the wrap-up code is provisional.
  * @example
  * 200 Response Example:
  * {
   "code": "",
   "name": "",
   "notes": "",
   "tags": [],
   "durationSeconds": 0,
   "endTime": "",
   "provisional": true
}
  */
ConversationsApi.prototype.getCallsCallIdParticipantsParticipantIdWrapup = function getCallsCallIdParticipantsParticipantIdWrapup(callId, participantId, provisional){
    var requestPath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/wrapup';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    requestQuery["provisional"] = provisional;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the attributes on a conversation participant.
  * @memberOf ConversationsApi
  * @instance
  * @param {string} callId - callId
  * @param {string} participantId - participantId
  * @param {} body - Participant attributes
  * @example
  * Body Example:
  * {
   "attributes": {}
}
  */
ConversationsApi.prototype.patchCallsCallIdParticipantsParticipantIdAttributes = function patchCallsCallIdParticipantsParticipantIdAttributes(callId, participantId, body){
    var requestPath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/attributes';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the maximum number of participants that this user can have on a conference
  * @memberOf ConversationsApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "maxParticipants": 0
}
  */
ConversationsApi.prototype.getCallsMaximumconferenceparties = function getCallsMaximumconferenceparties(){
    var requestPath = '/api/v2/conversations/calls/maximumconferenceparties';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Add participants to a conversation
  * @memberOf ConversationsApi
  * @instance
  * @param {string} callId - callId
  * @param {} body - Conversation
  * @example
  * Body Example:
  * {
   "name": "",
   "startTime": "",
   "endTime": "",
   "address": "",
   "participants": [],
   "conversationIds": [],
   "maxParticipants": 0,
   "recordingState": "",
   "state": ""
}
  * @example
  * 200 Response Example:
  * {
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
}
  */
ConversationsApi.prototype.postCallsCallIdParticipants = function postCallsCallIdParticipants(callId, body){
    var requestPath = '/api/v2/conversations/calls/{callId}/participants';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get call history
  * @memberOf ConversationsApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} interval - Interval string; format is ISO-8601. Separate start and end times with forward slash '/'
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
ConversationsApi.prototype.getCallsHistory = function getCallsHistory(pageSize, pageNumber, interval){
    var requestPath = '/api/v2/conversations/calls/history';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["interval"] = interval;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update conversation participant's communication by disconnecting it.
  * @memberOf ConversationsApi
  * @instance
  * @param {string} callId - callId
  * @param {string} participantId - participantId
  * @param {string} communicationId - communicationId
  * @param {} body - Participant
  * @example
  * Body Example:
  * {
   "wrapup": {
      "code": "",
      "name": "",
      "notes": "",
      "tags": [],
      "durationSeconds": 0,
      "endTime": "",
      "provisional": true
   },
   "state": "",
   "recording": true,
   "muted": true,
   "confined": true,
   "held": true,
   "wrapupSkipped": true
}
  * @example
  * 200 Response Example:
  * {}
  */
ConversationsApi.prototype.patchCallsCallIdParticipantsParticipantIdCommunicationsCommunicationId = function patchCallsCallIdParticipantsParticipantIdCommunicationsCommunicationId(callId, participantId, communicationId, body){
    var requestPath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/communications/{communicationId}';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(communicationId === undefined || communicationId === null){
      throw new Error('Missing required  parameter: communicationId');
    }
    requestPath = requestPath.replace('{communicationId}', communicationId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update conversation participant
  * @memberOf ConversationsApi
  * @instance
  * @param {string} callId - callId
  * @param {string} participantId - participantId
  * @param {} body - Participant request
  * @example
  * Body Example:
  * {
   "wrapup": {
      "code": "",
      "name": "",
      "notes": "",
      "tags": [],
      "durationSeconds": 0,
      "endTime": "",
      "provisional": true
   },
   "state": "",
   "recording": true,
   "muted": true,
   "confined": true,
   "held": true,
   "wrapupSkipped": true
}
  */
ConversationsApi.prototype.patchCallsCallIdParticipantsParticipantId = function patchCallsCallIdParticipantsParticipantId(callId, participantId, body){
    var requestPath = '/api/v2/conversations/calls/{callId}/participants/{participantId}';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Replace this participant with the specified user and/or address
  * @memberOf ConversationsApi
  * @instance
  * @param {string} callId - callId
  * @param {string} participantId - participantId
  * @param {} body - Transfer request
  * @example
  * Body Example:
  * {
   "userId": "",
   "address": "",
   "userName": "",
   "queueId": "",
   "voicemail": true
}
  */
ConversationsApi.prototype.postCallsCallIdParticipantsParticipantIdReplace = function postCallsCallIdParticipantsParticipantIdReplace(callId, participantId, body){
    var requestPath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/replace';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get list of wrapup codes for this conversation participant
  * @memberOf ConversationsApi
  * @instance
  * @param {string} conversationId - conversation ID
  * @param {string} participantId - participant ID
  * @example
  * 200 Response Example:
  * [
 {
  "id": "",
  "name": "",
  "dateCreated": "",
  "dateModified": "",
  "modifiedBy": "",
  "createdBy": "",
  "selfUri": ""
 }
]
  */
ConversationsApi.prototype.getConversationIdParticipantsParticipantIdWrapupcodes = function getConversationIdParticipantsParticipantIdWrapupcodes(conversationId, participantId){
    var requestPath = '/api/v2/conversations/{conversationId}/participants/{participantId}/wrapupcodes';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the wrap-up for this conversation participant. 
  * @memberOf ConversationsApi
  * @instance
  * @param {string} conversationId - conversation ID
  * @param {string} participantId - participant ID
  * @param {boolean} provisional - Indicates if the wrap-up code is provisional.
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "selfUri": ""
}
  */
ConversationsApi.prototype.getConversationIdParticipantsParticipantIdWrapup = function getConversationIdParticipantsParticipantIdWrapup(conversationId, participantId, provisional){
    var requestPath = '/api/v2/conversations/{conversationId}/participants/{participantId}/wrapup';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    requestQuery["provisional"] = provisional;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a new callback for the specified participant on the conversation.
  * @memberOf ConversationsApi
  * @instance
  * @param {string} conversationId - conversation ID
  * @param {string} participantId - participant ID
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "scriptId": "",
   "queueId": "",
   "routingData": {
      "queueId": "",
      "languageId": "",
      "priority": 0,
      "skillIds": [],
      "preferredAgentIds": []
   },
   "callbackUserName": "",
   "callbackNumbers": [],
   "callbackScheduledTime": "",
   "countryCode": "",
   "data": {}
}
  */
ConversationsApi.prototype.postConversationIdParticipantsParticipantIdCallbacks = function postConversationIdParticipantsParticipantIdCallbacks(conversationId, participantId, body){
    var requestPath = '/api/v2/conversations/{conversationId}/participants/{participantId}/callbacks';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the attributes on a conversation participant.
  * @memberOf ConversationsApi
  * @instance
  * @param {string} conversationId - conversation ID
  * @param {string} participantId - participant ID
  * @param {} body - Participant attributes
  * @example
  * Body Example:
  * {
   "attributes": {}
}
  */
ConversationsApi.prototype.patchConversationIdParticipantsParticipantIdAttributes = function patchConversationIdParticipantsParticipantIdAttributes(conversationId, participantId, body){
    var requestPath = '/api/v2/conversations/{conversationId}/participants/{participantId}/attributes';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a participant.
  * @description Update conversation participant.
  * @memberOf ConversationsApi
  * @instance
  * @param {string} conversationId - conversation ID
  * @param {string} participantId - participant ID
  * @param {} body - Update request
  * @example
  * Body Example:
  * {
   "wrapup": {
      "code": "",
      "name": "",
      "notes": "",
      "tags": [],
      "durationSeconds": 0,
      "endTime": "",
      "provisional": true
   },
   "state": "",
   "recording": true,
   "muted": true,
   "confined": true,
   "held": true,
   "wrapupSkipped": true
}
  */
ConversationsApi.prototype.patchConversationIdParticipantsParticipantId = function patchConversationIdParticipantsParticipantId(conversationId, participantId, body){
    var requestPath = '/api/v2/conversations/{conversationId}/participants/{participantId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Replace this participant with the specified user and/or address
  * @memberOf ConversationsApi
  * @instance
  * @param {string} conversationId - conversation ID
  * @param {string} participantId - participant ID
  * @param {} body - Transfer request
  * @example
  * Body Example:
  * {
   "userId": "",
   "address": "",
   "userName": "",
   "queueId": "",
   "voicemail": true
}
  */
ConversationsApi.prototype.postConversationIdParticipantsParticipantIdReplace = function postConversationIdParticipantsParticipantIdReplace(conversationId, participantId, body){
    var requestPath = '/api/v2/conversations/{conversationId}/participants/{participantId}/replace';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get recent email conversations
  * @memberOf ConversationsApi
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
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
ConversationsApi.prototype.getEmails = function getEmails(){
    var requestPath = '/api/v2/conversations/emails';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create an email conversation
  * @memberOf ConversationsApi
  * @instance
  * @param {} body - Create email request
  * @example
  * Body Example:
  * {
   "queueId": "",
   "provider": "",
   "skillIds": [],
   "languageId": "",
   "priority": 0,
   "attributes": {},
   "toAddress": "",
   "toName": "",
   "fromAddress": "",
   "fromName": "",
   "subject": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "participants": [],
   "otherMediaUris": [],
   "selfUri": ""
}
  */
ConversationsApi.prototype.postEmails = function postEmails(body){
    var requestPath = '/api/v2/conversations/emails';
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
  * @summary Get list of wrapup codes for this conversation participant
  * @memberOf ConversationsApi
  * @instance
  * @param {string} emailId - emailId
  * @param {string} participantId - participantId
  * @example
  * 200 Response Example:
  * [
 {
  "id": "",
  "name": "",
  "dateCreated": "",
  "dateModified": "",
  "modifiedBy": "",
  "createdBy": "",
  "selfUri": ""
 }
]
  */
ConversationsApi.prototype.getEmailsEmailIdParticipantsParticipantIdWrapupcodes = function getEmailsEmailIdParticipantsParticipantIdWrapupcodes(emailId, participantId){
    var requestPath = '/api/v2/conversations/emails/{emailId}/participants/{participantId}/wrapupcodes';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get email conversation
  * @memberOf ConversationsApi
  * @instance
  * @param {string} emailId - emailId
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "participants": [],
   "otherMediaUris": [],
   "selfUri": ""
}
  */
ConversationsApi.prototype.getEmailsEmailId = function getEmailsEmailId(emailId){
    var requestPath = '/api/v2/conversations/emails/{emailId}';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a conversation by disconnecting all of the participants
  * @memberOf ConversationsApi
  * @instance
  * @param {string} emailId - emailId
  * @param {} body - Conversation
  * @example
  * Body Example:
  * {
   "name": "",
   "startTime": "",
   "endTime": "",
   "address": "",
   "participants": [],
   "conversationIds": [],
   "maxParticipants": 0,
   "recordingState": "",
   "state": ""
}
  * @example
  * 200 Response Example:
  * {
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
}
  */
ConversationsApi.prototype.patchEmailsEmailId = function patchEmailsEmailId(emailId, body){
    var requestPath = '/api/v2/conversations/emails/{emailId}';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the wrap-up for this conversation participant. 
  * @memberOf ConversationsApi
  * @instance
  * @param {string} emailId - emailId
  * @param {string} participantId - participantId
  * @param {boolean} provisional - Indicates if the wrap-up code is provisional.
  * @example
  * 200 Response Example:
  * {
   "code": "",
   "name": "",
   "notes": "",
   "tags": [],
   "durationSeconds": 0,
   "endTime": "",
   "provisional": true
}
  */
ConversationsApi.prototype.getEmailsEmailIdParticipantsParticipantIdWrapup = function getEmailsEmailIdParticipantsParticipantIdWrapup(emailId, participantId, provisional){
    var requestPath = '/api/v2/conversations/emails/{emailId}/participants/{participantId}/wrapup';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    requestQuery["provisional"] = provisional;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the attributes on a conversation participant.
  * @memberOf ConversationsApi
  * @instance
  * @param {string} emailId - emailId
  * @param {string} participantId - participantId
  * @param {} body - Participant attributes
  * @example
  * Body Example:
  * {
   "attributes": {}
}
  */
ConversationsApi.prototype.patchEmailsEmailIdParticipantsParticipantIdAttributes = function patchEmailsEmailIdParticipantsParticipantIdAttributes(emailId, participantId, body){
    var requestPath = '/api/v2/conversations/emails/{emailId}/participants/{participantId}/attributes';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get conversation messages
  * @memberOf ConversationsApi
  * @instance
  * @param {string} emailId - emailId
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
ConversationsApi.prototype.getEmailsEmailIdMessages = function getEmailsEmailIdMessages(emailId){
    var requestPath = '/api/v2/conversations/emails/{emailId}/messages';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Send an email reply
  * @memberOf ConversationsApi
  * @instance
  * @param {string} emailId - emailId
  * @param {} body - Reply
  * @example
  * Body Example:
  * {
   "name": "",
   "to": [],
   "cc": [],
   "bcc": [],
   "from": {
      "email": "",
      "name": ""
   },
   "subject": "",
   "attachments": [],
   "textBody": "",
   "htmlBody": "",
   "time": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "to": [],
   "cc": [],
   "bcc": [],
   "from": {
      "email": "",
      "name": ""
   },
   "subject": "",
   "attachments": [],
   "textBody": "",
   "htmlBody": "",
   "time": "",
   "selfUri": ""
}
  */
ConversationsApi.prototype.postEmailsEmailIdMessages = function postEmailsEmailIdMessages(emailId, body){
    var requestPath = '/api/v2/conversations/emails/{emailId}/messages';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete attachment from draft
  * @memberOf ConversationsApi
  * @instance
  * @param {string} emailId - emailId
  * @param {string} attachmentId - attachmentId
  */
ConversationsApi.prototype.deleteEmailsEmailIdMessagesDraftAttachmentsAttachmentId = function deleteEmailsEmailIdMessagesDraftAttachmentsAttachmentId(emailId, attachmentId){
    var requestPath = '/api/v2/conversations/emails/{emailId}/messages/draft/attachments/{attachmentId}';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    if(attachmentId === undefined || attachmentId === null){
      throw new Error('Missing required  parameter: attachmentId');
    }
    requestPath = requestPath.replace('{attachmentId}', attachmentId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get conversation draft reply
  * @memberOf ConversationsApi
  * @instance
  * @param {string} emailId - emailId
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "to": [],
   "cc": [],
   "bcc": [],
   "from": {
      "email": "",
      "name": ""
   },
   "subject": "",
   "attachments": [],
   "textBody": "",
   "htmlBody": "",
   "time": "",
   "selfUri": ""
}
  */
ConversationsApi.prototype.getEmailsEmailIdMessagesDraft = function getEmailsEmailIdMessagesDraft(emailId){
    var requestPath = '/api/v2/conversations/emails/{emailId}/messages/draft';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update conversation draft reply
  * @memberOf ConversationsApi
  * @instance
  * @param {string} emailId - emailId
  * @param {} body - Draft
  * @example
  * Body Example:
  * {
   "name": "",
   "to": [],
   "cc": [],
   "bcc": [],
   "from": {
      "email": "",
      "name": ""
   },
   "subject": "",
   "attachments": [],
   "textBody": "",
   "htmlBody": "",
   "time": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "to": [],
   "cc": [],
   "bcc": [],
   "from": {
      "email": "",
      "name": ""
   },
   "subject": "",
   "attachments": [],
   "textBody": "",
   "htmlBody": "",
   "time": "",
   "selfUri": ""
}
  */
ConversationsApi.prototype.putEmailsEmailIdMessagesDraft = function putEmailsEmailIdMessagesDraft(emailId, body){
    var requestPath = '/api/v2/conversations/emails/{emailId}/messages/draft';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update conversation participant
  * @memberOf ConversationsApi
  * @instance
  * @param {string} emailId - emailId
  * @param {string} participantId - participantId
  * @param {} body - Update request
  * @example
  * Body Example:
  * {
   "wrapup": {
      "code": "",
      "name": "",
      "notes": "",
      "tags": [],
      "durationSeconds": 0,
      "endTime": "",
      "provisional": true
   },
   "state": "",
   "recording": true,
   "muted": true,
   "confined": true,
   "held": true,
   "wrapupSkipped": true
}
  */
ConversationsApi.prototype.patchEmailsEmailIdParticipantsParticipantId = function patchEmailsEmailIdParticipantsParticipantId(emailId, participantId, body){
    var requestPath = '/api/v2/conversations/emails/{emailId}/participants/{participantId}';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update conversation participant's communication by disconnecting it.
  * @memberOf ConversationsApi
  * @instance
  * @param {string} emailId - emailId
  * @param {string} participantId - participantId
  * @param {string} communicationId - communicationId
  * @param {} body - Participant
  * @example
  * Body Example:
  * {
   "wrapup": {
      "code": "",
      "name": "",
      "notes": "",
      "tags": [],
      "durationSeconds": 0,
      "endTime": "",
      "provisional": true
   },
   "state": "",
   "recording": true,
   "muted": true,
   "confined": true,
   "held": true,
   "wrapupSkipped": true
}
  * @example
  * 200 Response Example:
  * {}
  */
ConversationsApi.prototype.patchEmailsEmailIdParticipantsParticipantIdCommunicationsCommunicationId = function patchEmailsEmailIdParticipantsParticipantIdCommunicationsCommunicationId(emailId, participantId, communicationId, body){
    var requestPath = '/api/v2/conversations/emails/{emailId}/participants/{participantId}/communications/{communicationId}';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(communicationId === undefined || communicationId === null){
      throw new Error('Missing required  parameter: communicationId');
    }
    requestPath = requestPath.replace('{communicationId}', communicationId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Replace this participant with the specified user and/or address
  * @memberOf ConversationsApi
  * @instance
  * @param {string} emailId - emailId
  * @param {string} participantId - participantId
  * @param {} body - Transfer request
  * @example
  * Body Example:
  * {
   "userId": "",
   "address": "",
   "userName": "",
   "queueId": "",
   "voicemail": true
}
  */
ConversationsApi.prototype.postEmailsEmailIdParticipantsParticipantIdReplace = function postEmailsEmailIdParticipantsParticipantIdReplace(emailId, participantId, body){
    var requestPath = '/api/v2/conversations/emails/{emailId}/participants/{participantId}/replace';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get conversation message
  * @memberOf ConversationsApi
  * @instance
  * @param {string} emailId - emailId
  * @param {string} messageId - messageId
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "to": [],
   "cc": [],
   "bcc": [],
   "from": {
      "email": "",
      "name": ""
   },
   "subject": "",
   "attachments": [],
   "textBody": "",
   "htmlBody": "",
   "time": "",
   "selfUri": ""
}
  */
ConversationsApi.prototype.getEmailsEmailIdMessagesMessageId = function getEmailsEmailIdMessagesMessageId(emailId, messageId){
    var requestPath = '/api/v2/conversations/emails/{emailId}/messages/{messageId}';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    if(messageId === undefined || messageId === null){
      throw new Error('Missing required  parameter: messageId');
    }
    requestPath = requestPath.replace('{messageId}', messageId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get conversation
  * @memberOf ConversationsApi
  * @instance
  * @param {string} conversationId - conversation ID
  * @example
  * 200 Response Example:
  * {
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
}
  */
ConversationsApi.prototype.getConversationId = function getConversationId(conversationId){
    var requestPath = '/api/v2/conversations/{conversationId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get list of wrapup codes for this conversation participant
  * @memberOf ConversationsApi
  * @instance
  * @param {string} callbackId - callbackId
  * @param {string} participantId - participantId
  * @example
  * 200 Response Example:
  * [
 {
  "id": "",
  "name": "",
  "dateCreated": "",
  "dateModified": "",
  "modifiedBy": "",
  "createdBy": "",
  "selfUri": ""
 }
]
  */
ConversationsApi.prototype.getCallbacksCallbackIdParticipantsParticipantIdWrapupcodes = function getCallbacksCallbackIdParticipantsParticipantIdWrapupcodes(callbackId, participantId){
    var requestPath = '/api/v2/conversations/callbacks/{callbackId}/participants/{participantId}/wrapupcodes';
    var requestQuery = {};
    var requestBody;

    if(callbackId === undefined || callbackId === null){
      throw new Error('Missing required  parameter: callbackId');
    }
    requestPath = requestPath.replace('{callbackId}', callbackId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get callback conversation
  * @memberOf ConversationsApi
  * @instance
  * @param {string} callbackId - callbackId
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "participants": [],
   "otherMediaUris": [],
   "selfUri": ""
}
  */
ConversationsApi.prototype.getCallbacksCallbackId = function getCallbacksCallbackId(callbackId){
    var requestPath = '/api/v2/conversations/callbacks/{callbackId}';
    var requestQuery = {};
    var requestBody;

    if(callbackId === undefined || callbackId === null){
      throw new Error('Missing required  parameter: callbackId');
    }
    requestPath = requestPath.replace('{callbackId}', callbackId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a conversation by disconnecting all of the participants
  * @memberOf ConversationsApi
  * @instance
  * @param {string} callbackId - callbackId
  * @param {} body - Conversation
  * @example
  * Body Example:
  * {
   "name": "",
   "startTime": "",
   "endTime": "",
   "address": "",
   "participants": [],
   "conversationIds": [],
   "maxParticipants": 0,
   "recordingState": "",
   "state": ""
}
  * @example
  * 200 Response Example:
  * {
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
}
  */
ConversationsApi.prototype.patchCallbacksCallbackId = function patchCallbacksCallbackId(callbackId, body){
    var requestPath = '/api/v2/conversations/callbacks/{callbackId}';
    var requestQuery = {};
    var requestBody;

    if(callbackId === undefined || callbackId === null){
      throw new Error('Missing required  parameter: callbackId');
    }
    requestPath = requestPath.replace('{callbackId}', callbackId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the wrap-up for this conversation participant. 
  * @memberOf ConversationsApi
  * @instance
  * @param {string} callbackId - callbackId
  * @param {string} participantId - participantId
  * @param {boolean} provisional - Indicates if the wrap-up code is provisional.
  * @example
  * 200 Response Example:
  * {
   "code": "",
   "name": "",
   "notes": "",
   "tags": [],
   "durationSeconds": 0,
   "endTime": "",
   "provisional": true
}
  */
ConversationsApi.prototype.getCallbacksCallbackIdParticipantsParticipantIdWrapup = function getCallbacksCallbackIdParticipantsParticipantIdWrapup(callbackId, participantId, provisional){
    var requestPath = '/api/v2/conversations/callbacks/{callbackId}/participants/{participantId}/wrapup';
    var requestQuery = {};
    var requestBody;

    if(callbackId === undefined || callbackId === null){
      throw new Error('Missing required  parameter: callbackId');
    }
    requestPath = requestPath.replace('{callbackId}', callbackId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    requestQuery["provisional"] = provisional;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the attributes on a conversation participant.
  * @memberOf ConversationsApi
  * @instance
  * @param {string} callbackId - callbackId
  * @param {string} participantId - participantId
  * @param {} body - Attributes
  * @example
  * Body Example:
  * {
   "attributes": {}
}
  */
ConversationsApi.prototype.patchCallbacksCallbackIdParticipantsParticipantIdAttributes = function patchCallbacksCallbackIdParticipantsParticipantIdAttributes(callbackId, participantId, body){
    var requestPath = '/api/v2/conversations/callbacks/{callbackId}/participants/{participantId}/attributes';
    var requestQuery = {};
    var requestBody;

    if(callbackId === undefined || callbackId === null){
      throw new Error('Missing required  parameter: callbackId');
    }
    requestPath = requestPath.replace('{callbackId}', callbackId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get callback conversations
  * @memberOf ConversationsApi
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
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
ConversationsApi.prototype.getCallbacks = function getCallbacks(){
    var requestPath = '/api/v2/conversations/callbacks';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a Callback
  * @memberOf ConversationsApi
  * @instance
  * @param {} body - Callback
  * @example
  * Body Example:
  * {
   "scriptId": "",
   "queueId": "",
   "routingData": {
      "queueId": "",
      "languageId": "",
      "priority": 0,
      "skillIds": [],
      "preferredAgentIds": []
   },
   "callbackUserName": "",
   "callbackNumbers": [],
   "callbackScheduledTime": "",
   "countryCode": "",
   "data": {}
}
  * @example
  * 200 Response Example:
  * {
   "conversation": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callbackIdentifiers": []
}
  */
ConversationsApi.prototype.postCallbacks = function postCallbacks(body){
    var requestPath = '/api/v2/conversations/callbacks';
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
  * @summary Update conversation participant
  * @memberOf ConversationsApi
  * @instance
  * @param {string} callbackId - callbackId
  * @param {string} participantId - participantId
  * @param {} body - Participant
  * @example
  * Body Example:
  * {
   "wrapup": {
      "code": "",
      "name": "",
      "notes": "",
      "tags": [],
      "durationSeconds": 0,
      "endTime": "",
      "provisional": true
   },
   "state": "",
   "recording": true,
   "muted": true,
   "confined": true,
   "held": true,
   "wrapupSkipped": true
}
  */
ConversationsApi.prototype.patchCallbacksCallbackIdParticipantsParticipantId = function patchCallbacksCallbackIdParticipantsParticipantId(callbackId, participantId, body){
    var requestPath = '/api/v2/conversations/callbacks/{callbackId}/participants/{participantId}';
    var requestQuery = {};
    var requestBody;

    if(callbackId === undefined || callbackId === null){
      throw new Error('Missing required  parameter: callbackId');
    }
    requestPath = requestPath.replace('{callbackId}', callbackId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update conversation participant's communication by disconnecting it.
  * @memberOf ConversationsApi
  * @instance
  * @param {string} callbackId - callbackId
  * @param {string} participantId - participantId
  * @param {string} communicationId - communicationId
  * @param {} body - Participant
  * @example
  * Body Example:
  * {
   "wrapup": {
      "code": "",
      "name": "",
      "notes": "",
      "tags": [],
      "durationSeconds": 0,
      "endTime": "",
      "provisional": true
   },
   "state": "",
   "recording": true,
   "muted": true,
   "confined": true,
   "held": true,
   "wrapupSkipped": true
}
  * @example
  * 200 Response Example:
  * {}
  */
ConversationsApi.prototype.patchCallbacksCallbackIdParticipantsParticipantIdCommunicationsCommunicationId = function patchCallbacksCallbackIdParticipantsParticipantIdCommunicationsCommunicationId(callbackId, participantId, communicationId, body){
    var requestPath = '/api/v2/conversations/callbacks/{callbackId}/participants/{participantId}/communications/{communicationId}';
    var requestQuery = {};
    var requestBody;

    if(callbackId === undefined || callbackId === null){
      throw new Error('Missing required  parameter: callbackId');
    }
    requestPath = requestPath.replace('{callbackId}', callbackId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(communicationId === undefined || communicationId === null){
      throw new Error('Missing required  parameter: communicationId');
    }
    requestPath = requestPath.replace('{communicationId}', communicationId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Replace this participant with the specified user and/or address
  * @memberOf ConversationsApi
  * @instance
  * @param {string} callbackId - callbackId
  * @param {string} participantId - participantId
  * @param {} body - Transfer request
  * @example
  * Body Example:
  * {
   "userId": "",
   "address": "",
   "userName": "",
   "queueId": "",
   "voicemail": true
}
  */
ConversationsApi.prototype.postCallbacksCallbackIdParticipantsParticipantIdReplace = function postCallbacksCallbackIdParticipantsParticipantIdReplace(callbackId, participantId, body){
    var requestPath = '/api/v2/conversations/callbacks/{callbackId}/participants/{participantId}/replace';
    var requestQuery = {};
    var requestBody;

    if(callbackId === undefined || callbackId === null){
      throw new Error('Missing required  parameter: callbackId');
    }
    requestPath = requestPath.replace('{callbackId}', callbackId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};


module.exports = ConversationsApi;
