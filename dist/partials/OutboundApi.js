/*jshint -W069 */
/**
* @class OutboundApi
* @example
* var api = new purecloud.platform.OutboundApi(pureCloudSession);
*/
function OutboundApi(session) {
    if(!(this instanceof OutboundApi)) {
        return new OutboundApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('OutboundApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Query a list of dialer campaigns.
  * @memberOf OutboundApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} filterType - Filter type
  Equals,
  RegEx,
  Contains,
  Prefix,
  LessThan,
  LessThanEqualTo,
  GreaterThan,
  GreaterThanEqualTo,
  BeginsWith,
  EndsWith,
  * @param {string} name - Name
  * @param {string} contactListId - Contact List ID
  * @param {string} dncListId - DNC list ID
  * @param {string} distributionQueueId - Distribution queue ID
  * @param {string} edgeGroupId - Edge group ID
  * @param {string} callAnalysisResponseSetId - Call analysis response set ID
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
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
OutboundApi.prototype.getCampaigns = function getCampaigns(pageSize, pageNumber, filterType, name, contactListId, dncListId, distributionQueueId, edgeGroupId, callAnalysisResponseSetId, sortBy, sortOrder){
    var requestPath = '/api/v2/outbound/campaigns';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["filterType"] = filterType;
    requestQuery["name"] = name;
    requestQuery["contactListId"] = contactListId;
    requestQuery["dncListId"] = dncListId;
    requestQuery["distributionQueueId"] = distributionQueueId;
    requestQuery["edgeGroupId"] = edgeGroupId;
    requestQuery["callAnalysisResponseSetId"] = callAnalysisResponseSetId;
    requestQuery["sortBy"] = sortBy;
    requestQuery["sortOrder"] = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a campaign.
  * @memberOf OutboundApi
  * @instance
  * @param {} body - Campaign
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dialingMode": "",
   "script": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "edgeGroup": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "campaignStatus": "",
   "phoneColumns": [],
   "abandonRate": {},
   "dncLists": [],
   "callableTimeSet": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callAnalysisResponseSet": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callerName": "",
   "callerAddress": "",
   "outboundLineCount": 0,
   "ruleSets": [],
   "skipPreviewDisabled": true,
   "previewTimeOutSeconds": 0,
   "contactSort": {
      "fieldName": "",
      "direction": "",
      "numeric": true
   },
   "noAnswerTimeout": 0,
   "callAnalysisLanguage": "",
   "priority": 0
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dialingMode": "",
   "script": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "edgeGroup": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "campaignStatus": "",
   "phoneColumns": [],
   "abandonRate": {},
   "dncLists": [],
   "callableTimeSet": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callAnalysisResponseSet": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "errors": [],
   "callerName": "",
   "callerAddress": "",
   "outboundLineCount": 0,
   "ruleSets": [],
   "skipPreviewDisabled": true,
   "previewTimeOutSeconds": 0,
   "contactSort": {
      "fieldName": "",
      "direction": "",
      "numeric": true
   },
   "noAnswerTimeout": 0,
   "callAnalysisLanguage": "",
   "priority": 0,
   "selfUri": ""
}
  */
OutboundApi.prototype.postCampaigns = function postCampaigns(body){
    var requestPath = '/api/v2/outbound/campaigns';
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
  * @summary Query a list of contact lists.
  * @memberOf OutboundApi
  * @instance
  * @param {boolean} includeImportStatus - Include import status
  * @param {boolean} includeSize - Include size
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} filterType - Filter type
  Equals,
  RegEx,
  Contains,
  Prefix,
  LessThan,
  LessThanEqualTo,
  GreaterThan,
  GreaterThanEqualTo,
  BeginsWith,
  EndsWith,
  * @param {string} name - Name
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
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
OutboundApi.prototype.getContactlists = function getContactlists(includeImportStatus, includeSize, pageSize, pageNumber, filterType, name, sortBy, sortOrder){
    var requestPath = '/api/v2/outbound/contactlists';
    var requestQuery = {};
    var requestBody;

    requestQuery["includeImportStatus"] = includeImportStatus;
    requestQuery["includeSize"] = includeSize;
    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["filterType"] = filterType;
    requestQuery["name"] = name;
    requestQuery["sortBy"] = sortBy;
    requestQuery["sortOrder"] = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a contact List.
  * @memberOf OutboundApi
  * @instance
  * @param {} body - ContactList
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "columnNames": [],
   "phoneColumns": [],
   "previewModeColumnName": "",
   "previewModeAcceptedValues": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "columnNames": [],
   "phoneColumns": [],
   "importStatus": {
      "state": "",
      "totalRecords": 0,
      "completedRecords": 0,
      "percentComplete": 0,
      "failureReason": ""
   },
   "previewModeColumnName": "",
   "previewModeAcceptedValues": [],
   "size": 0,
   "selfUri": ""
}
  */
OutboundApi.prototype.postContactlists = function postContactlists(body){
    var requestPath = '/api/v2/outbound/contactlists';
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
  * @summary Get dialer contactList import status.
  * @memberOf OutboundApi
  * @instance
  * @param {string} contactListId - ContactList ID
  * @example
  * 200 Response Example:
  * {
   "state": "",
   "totalRecords": 0,
   "completedRecords": 0,
   "percentComplete": 0,
   "failureReason": ""
}
  */
OutboundApi.prototype.getContactlistsContactlistIdImportstatus = function getContactlistsContactlistIdImportstatus(contactListId){
    var requestPath = '/api/v2/outbound/contactlists/{contactListId}/importstatus';
    var requestQuery = {};
    var requestBody;

    if(contactListId === undefined || contactListId === null){
      throw new Error('Missing required  parameter: contactListId');
    }
    requestPath = requestPath.replace('{contactListId}', contactListId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Add phone numbers to a Dialer DNC list.
  * @memberOf OutboundApi
  * @instance
  * @param {string} conversationId - Conversation ID
  */
OutboundApi.prototype.postConversationsConversationIdDnc = function postConversationsConversationIdDnc(conversationId){
    var requestPath = '/api/v2/outbound/conversations/{conversationId}/dnc';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query a list of Rule Sets.
  * @memberOf OutboundApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} filterType - Filter type
  Equals,
  RegEx,
  Contains,
  Prefix,
  LessThan,
  LessThanEqualTo,
  GreaterThan,
  GreaterThanEqualTo,
  BeginsWith,
  EndsWith,
  * @param {string} name - Name
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
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
OutboundApi.prototype.getRulesets = function getRulesets(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
    var requestPath = '/api/v2/outbound/rulesets';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["filterType"] = filterType;
    requestQuery["name"] = name;
    requestQuery["sortBy"] = sortBy;
    requestQuery["sortOrder"] = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a Dialer Call Analysis Response Set.
  * @memberOf OutboundApi
  * @instance
  * @param {} body - RuleSet
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "rules": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "rules": [],
   "selfUri": ""
}
  */
OutboundApi.prototype.postRulesets = function postRulesets(body){
    var requestPath = '/api/v2/outbound/rulesets';
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
  * @summary Get the Dialer wrap up code mapping.
  * @memberOf OutboundApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "defaultSet": [],
   "mapping": {},
   "selfUri": ""
}
  */
OutboundApi.prototype.getWrapupcodemappings = function getWrapupcodemappings(){
    var requestPath = '/api/v2/outbound/wrapupcodemappings';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the Dialer wrap up code mapping.
  * @memberOf OutboundApi
  * @instance
  * @param {} body - wrapUpCodeMapping
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "defaultSet": [],
   "mapping": {}
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "defaultSet": [],
   "mapping": {},
   "selfUri": ""
}
  */
OutboundApi.prototype.putWrapupcodemappings = function putWrapupcodemappings(body){
    var requestPath = '/api/v2/outbound/wrapupcodemappings';
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
  * @summary Query a list of dialer campaign sequences.
  * @memberOf OutboundApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} filterType - Filter type
  Equals,
  RegEx,
  Contains,
  Prefix,
  LessThan,
  LessThanEqualTo,
  GreaterThan,
  GreaterThanEqualTo,
  BeginsWith,
  EndsWith,
  * @param {string} name - Name
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
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
OutboundApi.prototype.getSequences = function getSequences(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
    var requestPath = '/api/v2/outbound/sequences';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["filterType"] = filterType;
    requestQuery["name"] = name;
    requestQuery["sortBy"] = sortBy;
    requestQuery["sortOrder"] = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a new campaign sequence.
  * @memberOf OutboundApi
  * @instance
  * @param {} body - Organization
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "campaigns": [],
   "status": "",
   "repeat": true
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "campaigns": [],
   "currentCampaign": 0,
   "status": "",
   "stopMessage": "",
   "repeat": true,
   "selfUri": ""
}
  */
OutboundApi.prototype.postSequences = function postSequences(body){
    var requestPath = '/api/v2/outbound/sequences';
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
  * @summary Get a dialer campaign schedule.
  * @memberOf OutboundApi
  * @instance
  * @param {string} campaignId - Campaign ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "intervals": [],
   "timeZone": "",
   "campaign": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "selfUri": ""
}
  */
OutboundApi.prototype.getSchedulesCampaignsCampaignId = function getSchedulesCampaignsCampaignId(campaignId){
    var requestPath = '/api/v2/outbound/schedules/campaigns/{campaignId}';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a new campaign schedule.
  * @memberOf OutboundApi
  * @instance
  * @param {string} campaignId - Campaign ID
  * @param {} body - CampaignSchedule
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "intervals": [],
   "timeZone": "",
   "campaign": {
      "id": "",
      "name": "",
      "selfUri": ""
   }
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "intervals": [],
   "timeZone": "",
   "campaign": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "selfUri": ""
}
  */
OutboundApi.prototype.putSchedulesCampaignsCampaignId = function putSchedulesCampaignsCampaignId(campaignId, body){
    var requestPath = '/api/v2/outbound/schedules/campaigns/{campaignId}';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a dialer campaign schedule.
  * @memberOf OutboundApi
  * @instance
  * @param {string} campaignId - Campaign ID
  */
OutboundApi.prototype.deleteSchedulesCampaignsCampaignId = function deleteSchedulesCampaignsCampaignId(campaignId){
    var requestPath = '/api/v2/outbound/schedules/campaigns/{campaignId}';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Rule Set by ID.
  * @memberOf OutboundApi
  * @instance
  * @param {string} ruleSetId - Rule Set ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "rules": [],
   "selfUri": ""
}
  */
OutboundApi.prototype.getRulesetsRulesetId = function getRulesetsRulesetId(ruleSetId){
    var requestPath = '/api/v2/outbound/rulesets/{ruleSetId}';
    var requestQuery = {};
    var requestBody;

    if(ruleSetId === undefined || ruleSetId === null){
      throw new Error('Missing required  parameter: ruleSetId');
    }
    requestPath = requestPath.replace('{ruleSetId}', ruleSetId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a RuleSet.
  * @memberOf OutboundApi
  * @instance
  * @param {string} ruleSetId - Rule Set ID
  * @param {} body - RuleSet
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "rules": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "rules": [],
   "selfUri": ""
}
  */
OutboundApi.prototype.putRulesetsRulesetId = function putRulesetsRulesetId(ruleSetId, body){
    var requestPath = '/api/v2/outbound/rulesets/{ruleSetId}';
    var requestQuery = {};
    var requestBody;

    if(ruleSetId === undefined || ruleSetId === null){
      throw new Error('Missing required  parameter: ruleSetId');
    }
    requestPath = requestPath.replace('{ruleSetId}', ruleSetId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a Rule set.
  * @memberOf OutboundApi
  * @instance
  * @param {string} ruleSetId - Rule Set ID
  */
OutboundApi.prototype.deleteRulesetsRulesetId = function deleteRulesetsRulesetId(ruleSetId){
    var requestPath = '/api/v2/outbound/rulesets/{ruleSetId}';
    var requestQuery = {};
    var requestBody;

    if(ruleSetId === undefined || ruleSetId === null){
      throw new Error('Missing required  parameter: ruleSetId');
    }
    requestPath = requestPath.replace('{ruleSetId}', ruleSetId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Add contacts to a contact list.
  * @memberOf OutboundApi
  * @instance
  * @param {string} contactListId - Contact List ID
  * @param {} body - Contact
  * @param {boolean} priority - Contact priority.  True means the contact(s) will go to the beginning of the list, false means at the end.
  * @param {boolean} clearSystemData - Clear system data.  True means the system data stored on the contact will be cleared if the contact already exists (attempts, callable status, etc), false means it won't.
  * @example
  * Body Example:
  * [
 {
  "name": "",
  "contactListId": "",
  "data": {},
  "callable": true,
  "phoneNumberStatus": {}
 }
]
  * @example
  * 200 Response Example:
  * [
 {
  "id": "",
  "name": "",
  "contactListId": "",
  "data": {},
  "callRecords": {},
  "callable": true,
  "phoneNumberStatus": {},
  "selfUri": ""
 }
]
  */
OutboundApi.prototype.postContactlistsContactlistIdContacts = function postContactlistsContactlistIdContacts(contactListId, body, priority, clearSystemData){
    var requestPath = '/api/v2/outbound/contactlists/{contactListId}/contacts';
    var requestQuery = {};
    var requestBody;

    if(contactListId === undefined || contactListId === null){
      throw new Error('Missing required  parameter: contactListId');
    }
    requestPath = requestPath.replace('{contactListId}', contactListId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery["priority"] = priority;
    requestQuery["clearSystemData"] = clearSystemData;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get dialer campaign.
  * @memberOf OutboundApi
  * @instance
  * @param {string} campaignId - Campaign ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dialingMode": "",
   "script": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "edgeGroup": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "campaignStatus": "",
   "phoneColumns": [],
   "abandonRate": {},
   "dncLists": [],
   "callableTimeSet": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callAnalysisResponseSet": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "errors": [],
   "callerName": "",
   "callerAddress": "",
   "outboundLineCount": 0,
   "ruleSets": [],
   "skipPreviewDisabled": true,
   "previewTimeOutSeconds": 0,
   "contactSort": {
      "fieldName": "",
      "direction": "",
      "numeric": true
   },
   "noAnswerTimeout": 0,
   "callAnalysisLanguage": "",
   "priority": 0,
   "selfUri": ""
}
  */
OutboundApi.prototype.getCampaignsCampaignId = function getCampaignsCampaignId(campaignId){
    var requestPath = '/api/v2/outbound/campaigns/{campaignId}';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a campaign.
  * @memberOf OutboundApi
  * @instance
  * @param {string} campaignId - Campaign ID
  * @param {} body - Campaign
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dialingMode": "",
   "script": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "edgeGroup": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "campaignStatus": "",
   "phoneColumns": [],
   "abandonRate": {},
   "dncLists": [],
   "callableTimeSet": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callAnalysisResponseSet": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callerName": "",
   "callerAddress": "",
   "outboundLineCount": 0,
   "ruleSets": [],
   "skipPreviewDisabled": true,
   "previewTimeOutSeconds": 0,
   "contactSort": {
      "fieldName": "",
      "direction": "",
      "numeric": true
   },
   "noAnswerTimeout": 0,
   "callAnalysisLanguage": "",
   "priority": 0
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dialingMode": "",
   "script": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "edgeGroup": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "campaignStatus": "",
   "phoneColumns": [],
   "abandonRate": {},
   "dncLists": [],
   "callableTimeSet": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callAnalysisResponseSet": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "errors": [],
   "callerName": "",
   "callerAddress": "",
   "outboundLineCount": 0,
   "ruleSets": [],
   "skipPreviewDisabled": true,
   "previewTimeOutSeconds": 0,
   "contactSort": {
      "fieldName": "",
      "direction": "",
      "numeric": true
   },
   "noAnswerTimeout": 0,
   "callAnalysisLanguage": "",
   "priority": 0,
   "selfUri": ""
}
  */
OutboundApi.prototype.putCampaignsCampaignId = function putCampaignsCampaignId(campaignId, body){
    var requestPath = '/api/v2/outbound/campaigns/{campaignId}';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a campaign.
  * @memberOf OutboundApi
  * @instance
  * @param {string} campaignId - Campaign ID
  */
OutboundApi.prototype.deleteCampaignsCampaignId = function deleteCampaignsCampaignId(campaignId){
    var requestPath = '/api/v2/outbound/campaigns/{campaignId}';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get campaign diagnostics
  * @memberOf OutboundApi
  * @instance
  * @param {string} campaignId - Campaign ID
  * @example
  * 200 Response Example:
  * {
   "callableContacts": {
      "attemptLimits": {},
      "dncLists": [],
      "callableTimeSet": {},
      "ruleSets": []
   },
   "queueUtilizationDiagnostic": {
      "queue": {},
      "usersInQueue": 0,
      "activeUsersInQueue": 0,
      "usersOnQueue": 0,
      "usersNotUtilized": 0,
      "usersOnQueueWithStation": 0,
      "usersOnACampaignCall": 0,
      "usersOnDifferentEdgeGroup": 0,
      "usersOnANonCampaignCall": 0
   },
   "ruleSetDiagnostics": [],
   "outstandingInteractionsCount": 0
}
  */
OutboundApi.prototype.getCampaignsCampaignIdDiagnostics = function getCampaignsCampaignIdDiagnostics(campaignId){
    var requestPath = '/api/v2/outbound/campaigns/{campaignId}/diagnostics';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get campaign progress
  * @memberOf OutboundApi
  * @instance
  * @param {string} campaignId - Campaign ID
  * @example
  * 200 Response Example:
  * {
   "campaign": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "numberOfContactsCalled": 0,
   "totalNumberOfContacts": 0,
   "percentage": 0
}
  */
OutboundApi.prototype.getCampaignsCampaignIdProgress = function getCampaignsCampaignIdProgress(campaignId){
    var requestPath = '/api/v2/outbound/campaigns/{campaignId}/progress';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Reset campaign progress and recycle the campaign
  * @memberOf OutboundApi
  * @instance
  * @param {string} campaignId - Campaign ID
  */
OutboundApi.prototype.deleteCampaignsCampaignIdProgress = function deleteCampaignsCampaignIdProgress(campaignId){
    var requestPath = '/api/v2/outbound/campaigns/{campaignId}/progress';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query attempt limits list
  * @memberOf OutboundApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} filterType - Filter type
  Equals,
  RegEx,
  Contains,
  Prefix,
  LessThan,
  LessThanEqualTo,
  GreaterThan,
  GreaterThanEqualTo,
  BeginsWith,
  EndsWith,
  * @param {string} name - Name
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
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
OutboundApi.prototype.getAttemptlimits = function getAttemptlimits(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
    var requestPath = '/api/v2/outbound/attemptlimits';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["filterType"] = filterType;
    requestQuery["name"] = name;
    requestQuery["sortBy"] = sortBy;
    requestQuery["sortOrder"] = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create attempt limits
  * @memberOf OutboundApi
  * @instance
  * @param {} body - AttemptLimits
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "maxAttemptsPerContact": 0,
   "maxAttemptsPerNumber": 0,
   "timeZoneId": "",
   "resetPeriod": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "maxAttemptsPerContact": 0,
   "maxAttemptsPerNumber": 0,
   "timeZoneId": "",
   "resetPeriod": "",
   "selfUri": ""
}
  */
OutboundApi.prototype.postAttemptlimits = function postAttemptlimits(body){
    var requestPath = '/api/v2/outbound/attemptlimits';
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
  * @summary Get a contact.
  * @memberOf OutboundApi
  * @instance
  * @param {string} contactListId - Contact List ID
  * @param {string} contactId - Contact ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "contactListId": "",
   "data": {},
   "callRecords": {},
   "callable": true,
   "phoneNumberStatus": {},
   "selfUri": ""
}
  */
OutboundApi.prototype.getContactlistsContactlistIdContactsContactId = function getContactlistsContactlistIdContactsContactId(contactListId, contactId){
    var requestPath = '/api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}';
    var requestQuery = {};
    var requestBody;

    if(contactListId === undefined || contactListId === null){
      throw new Error('Missing required  parameter: contactListId');
    }
    requestPath = requestPath.replace('{contactListId}', contactListId);
    if(contactId === undefined || contactId === null){
      throw new Error('Missing required  parameter: contactId');
    }
    requestPath = requestPath.replace('{contactId}', contactId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a contact.
  * @memberOf OutboundApi
  * @instance
  * @param {string} contactListId - Contact List ID
  * @param {string} contactId - Contact ID
  * @param {} body - Contact
  * @example
  * Body Example:
  * {
   "name": "",
   "contactListId": "",
   "data": {},
   "callable": true,
   "phoneNumberStatus": {}
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "contactListId": "",
   "data": {},
   "callRecords": {},
   "callable": true,
   "phoneNumberStatus": {},
   "selfUri": ""
}
  */
OutboundApi.prototype.putContactlistsContactlistIdContactsContactId = function putContactlistsContactlistIdContactsContactId(contactListId, contactId, body){
    var requestPath = '/api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}';
    var requestQuery = {};
    var requestBody;

    if(contactListId === undefined || contactListId === null){
      throw new Error('Missing required  parameter: contactListId');
    }
    requestPath = requestPath.replace('{contactListId}', contactListId);
    if(contactId === undefined || contactId === null){
      throw new Error('Missing required  parameter: contactId');
    }
    requestPath = requestPath.replace('{contactId}', contactId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a contact.
  * @memberOf OutboundApi
  * @instance
  * @param {string} contactListId - Contact List ID
  * @param {string} contactId - Contact ID
  */
OutboundApi.prototype.deleteContactlistsContactlistIdContactsContactId = function deleteContactlistsContactlistIdContactsContactId(contactListId, contactId){
    var requestPath = '/api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}';
    var requestQuery = {};
    var requestBody;

    if(contactListId === undefined || contactListId === null){
      throw new Error('Missing required  parameter: contactListId');
    }
    requestPath = requestPath.replace('{contactListId}', contactListId);
    if(contactId === undefined || contactId === null){
      throw new Error('Missing required  parameter: contactId');
    }
    requestPath = requestPath.replace('{contactId}', contactId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Retrieves audits for dialer.
  * @memberOf OutboundApi
  * @instance
  * @param {} body - AuditSearch
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
  * @param {boolean} facetsOnly - Facets only
  * @example
  * Body Example:
  * {
   "queryPhrase": "",
   "queryFields": [],
   "facets": [],
   "filters": []
}
  * @example
  * 200 Response Example:
  * {
   "pageNumber": 0,
   "pageSize": 0,
   "total": 0,
   "pageCount": 0,
   "facetInfo": [],
   "auditMessages": []
}
  */
OutboundApi.prototype.postAudits = function postAudits(body, pageSize, pageNumber, sortBy, sortOrder, facetsOnly){
    var requestPath = '/api/v2/outbound/audits';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["sortBy"] = sortBy;
    requestQuery["sortOrder"] = sortOrder;
    requestQuery["facetsOnly"] = facetsOnly;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get dialer DNC list
  * @memberOf OutboundApi
  * @instance
  * @param {string} dncListId - DncList ID
  * @param {boolean} includeImportStatus - Import status
  * @param {boolean} includeSize - Include size
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "importStatus": {
      "state": "",
      "totalRecords": 0,
      "completedRecords": 0,
      "percentComplete": 0,
      "failureReason": ""
   },
   "size": 0,
   "dncSourceType": "",
   "loginId": "",
   "dncCodes": [],
   "licenseId": "",
   "selfUri": ""
}
  */
OutboundApi.prototype.getDnclistsDnclistId = function getDnclistsDnclistId(dncListId, includeImportStatus, includeSize){
    var requestPath = '/api/v2/outbound/dnclists/{dncListId}';
    var requestQuery = {};
    var requestBody;

    if(dncListId === undefined || dncListId === null){
      throw new Error('Missing required  parameter: dncListId');
    }
    requestPath = requestPath.replace('{dncListId}', dncListId);
    requestQuery["includeImportStatus"] = includeImportStatus;
    requestQuery["includeSize"] = includeSize;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update dialer DNC list
  * @memberOf OutboundApi
  * @instance
  * @param {string} dncListId - DncList ID
  * @param {} body - DncList
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "importStatus": {
      "state": "",
      "totalRecords": 0,
      "completedRecords": 0,
      "percentComplete": 0,
      "failureReason": ""
   },
   "size": 0,
   "dncSourceType": "",
   "loginId": "",
   "dncCodes": [],
   "licenseId": "",
   "selfUri": ""
}
  */
OutboundApi.prototype.putDnclistsDnclistId = function putDnclistsDnclistId(dncListId, body){
    var requestPath = '/api/v2/outbound/dnclists/{dncListId}';
    var requestQuery = {};
    var requestBody;

    if(dncListId === undefined || dncListId === null){
      throw new Error('Missing required  parameter: dncListId');
    }
    requestPath = requestPath.replace('{dncListId}', dncListId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete dialer DNC list
  * @memberOf OutboundApi
  * @instance
  * @param {string} dncListId - DncList ID
  */
OutboundApi.prototype.deleteDnclistsDnclistId = function deleteDnclistsDnclistId(dncListId){
    var requestPath = '/api/v2/outbound/dnclists/{dncListId}';
    var requestQuery = {};
    var requestBody;

    if(dncListId === undefined || dncListId === null){
      throw new Error('Missing required  parameter: dncListId');
    }
    requestPath = requestPath.replace('{dncListId}', dncListId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query dialer DNC lists
  * @memberOf OutboundApi
  * @instance
  * @param {boolean} includeImportStatus - Import status
  * @param {boolean} includeSize - Include size
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} filterType - Filter type
  Equals,
  RegEx,
  Contains,
  Prefix,
  LessThan,
  LessThanEqualTo,
  GreaterThan,
  GreaterThanEqualTo,
  BeginsWith,
  EndsWith,
  * @param {string} name - Name
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
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
OutboundApi.prototype.getDnclists = function getDnclists(includeImportStatus, includeSize, pageSize, pageNumber, filterType, name, sortBy, sortOrder){
    var requestPath = '/api/v2/outbound/dnclists';
    var requestQuery = {};
    var requestBody;

    requestQuery["includeImportStatus"] = includeImportStatus;
    requestQuery["includeSize"] = includeSize;
    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["filterType"] = filterType;
    requestQuery["name"] = name;
    requestQuery["sortBy"] = sortBy;
    requestQuery["sortOrder"] = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create dialer DNC list
  * @memberOf OutboundApi
  * @instance
  * @param {} body - DncList
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "importStatus": {
      "state": "",
      "totalRecords": 0,
      "completedRecords": 0,
      "percentComplete": 0,
      "failureReason": ""
   },
   "size": 0,
   "dncSourceType": "",
   "loginId": "",
   "dncCodes": [],
   "licenseId": "",
   "selfUri": ""
}
  */
OutboundApi.prototype.postDnclists = function postDnclists(body){
    var requestPath = '/api/v2/outbound/dnclists';
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
  * @summary Get a dialer call analysis response set.
  * @memberOf OutboundApi
  * @instance
  * @param {string} callAnalysisSetId - Call Analysis Response Set ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "responses": {},
   "selfUri": ""
}
  */
OutboundApi.prototype.getCallanalysisresponsesetsCallanalysissetId = function getCallanalysisresponsesetsCallanalysissetId(callAnalysisSetId){
    var requestPath = '/api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}';
    var requestQuery = {};
    var requestBody;

    if(callAnalysisSetId === undefined || callAnalysisSetId === null){
      throw new Error('Missing required  parameter: callAnalysisSetId');
    }
    requestPath = requestPath.replace('{callAnalysisSetId}', callAnalysisSetId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a dialer call analysis response set.
  * @memberOf OutboundApi
  * @instance
  * @param {string} callAnalysisSetId - Call Analysis Response Set ID
  * @param {} body - ResponseSet
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "responses": {}
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "responses": {},
   "selfUri": ""
}
  */
OutboundApi.prototype.putCallanalysisresponsesetsCallanalysissetId = function putCallanalysisresponsesetsCallanalysissetId(callAnalysisSetId, body){
    var requestPath = '/api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}';
    var requestQuery = {};
    var requestBody;

    if(callAnalysisSetId === undefined || callAnalysisSetId === null){
      throw new Error('Missing required  parameter: callAnalysisSetId');
    }
    requestPath = requestPath.replace('{callAnalysisSetId}', callAnalysisSetId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a dialer call analysis response set.
  * @memberOf OutboundApi
  * @instance
  * @param {string} callAnalysisSetId - Call Analysis Response Set ID
  */
OutboundApi.prototype.deleteCallanalysisresponsesetsCallanalysissetId = function deleteCallanalysisresponsesetsCallanalysissetId(callAnalysisSetId){
    var requestPath = '/api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}';
    var requestQuery = {};
    var requestBody;

    if(callAnalysisSetId === undefined || callAnalysisSetId === null){
      throw new Error('Missing required  parameter: callAnalysisSetId');
    }
    requestPath = requestPath.replace('{callAnalysisSetId}', callAnalysisSetId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get progress for a list of campaigns
  * @memberOf OutboundApi
  * @instance
  * @param {} body - Campaign IDs
  * @example
  * 200 Response Example:
  * [
 {
  "campaign": {
   "id": "",
   "name": "",
   "selfUri": ""
  },
  "contactList": {
   "id": "",
   "name": "",
   "selfUri": ""
  },
  "numberOfContactsCalled": 0,
  "totalNumberOfContacts": 0,
  "percentage": 0
 }
]
  */
OutboundApi.prototype.postCampaignsProgress = function postCampaignsProgress(body){
    var requestPath = '/api/v2/outbound/campaigns/progress';
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
  * @summary Get callable time set
  * @memberOf OutboundApi
  * @instance
  * @param {string} callableTimeSetId - Callable Time Set ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "callableTimes": [],
   "selfUri": ""
}
  */
OutboundApi.prototype.getCallabletimesetsCallabletimesetId = function getCallabletimesetsCallabletimesetId(callableTimeSetId){
    var requestPath = '/api/v2/outbound/callabletimesets/{callableTimeSetId}';
    var requestQuery = {};
    var requestBody;

    if(callableTimeSetId === undefined || callableTimeSetId === null){
      throw new Error('Missing required  parameter: callableTimeSetId');
    }
    requestPath = requestPath.replace('{callableTimeSetId}', callableTimeSetId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update callable time set
  * @memberOf OutboundApi
  * @instance
  * @param {string} callableTimeSetId - Callable Time Set ID
  * @param {} body - DialerCallableTimeSet
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "callableTimes": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "callableTimes": [],
   "selfUri": ""
}
  */
OutboundApi.prototype.putCallabletimesetsCallabletimesetId = function putCallabletimesetsCallabletimesetId(callableTimeSetId, body){
    var requestPath = '/api/v2/outbound/callabletimesets/{callableTimeSetId}';
    var requestQuery = {};
    var requestBody;

    if(callableTimeSetId === undefined || callableTimeSetId === null){
      throw new Error('Missing required  parameter: callableTimeSetId');
    }
    requestPath = requestPath.replace('{callableTimeSetId}', callableTimeSetId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete callable time set
  * @memberOf OutboundApi
  * @instance
  * @param {string} callableTimeSetId - Callable Time Set ID
  */
OutboundApi.prototype.deleteCallabletimesetsCallabletimesetId = function deleteCallabletimesetsCallabletimesetId(callableTimeSetId){
    var requestPath = '/api/v2/outbound/callabletimesets/{callableTimeSetId}';
    var requestQuery = {};
    var requestBody;

    if(callableTimeSetId === undefined || callableTimeSetId === null){
      throw new Error('Missing required  parameter: callableTimeSetId');
    }
    requestPath = requestPath.replace('{callableTimeSetId}', callableTimeSetId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query for a list of dialer campaign schedules.
  * @memberOf OutboundApi
  * @instance
  * @example
  * 200 Response Example:
  * [
 {
  "id": "",
  "name": "",
  "dateCreated": "",
  "dateModified": "",
  "version": 0,
  "intervals": [],
  "timeZone": "",
  "campaign": {
   "id": "",
   "name": "",
   "selfUri": ""
  },
  "selfUri": ""
 }
]
  */
OutboundApi.prototype.getSchedulesCampaigns = function getSchedulesCampaigns(){
    var requestPath = '/api/v2/outbound/schedules/campaigns';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Add phone numbers to a Dialer DNC list.
  * @description Only Internal DNC lists may be appended to
  * @memberOf OutboundApi
  * @instance
  * @param {string} dncListId - DncList ID
  * @param {} body - DNC Phone Numbers
  */
OutboundApi.prototype.postDnclistsDnclistIdPhonenumbers = function postDnclistsDnclistIdPhonenumbers(dncListId, body){
    var requestPath = '/api/v2/outbound/dnclists/{dncListId}/phonenumbers';
    var requestQuery = {};
    var requestBody;

    if(dncListId === undefined || dncListId === null){
      throw new Error('Missing required  parameter: dncListId');
    }
    requestPath = requestPath.replace('{dncListId}', dncListId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Schedule a Callback for a Dialer Campaign (Deprecated)
  * @description This endpoint is deprecated and may have unexpected results. Please use "/conversations/{conversationId}/participants/{participantId}/callbacks instead."
  * @memberOf OutboundApi
  * @instance
  * @param {string} campaignId - Campaign ID
  * @param {} body - ContactCallbackRequest
  * @example
  * Body Example:
  * {
   "campaignId": "",
   "contactListId": "",
   "contactId": "",
   "phoneColumn": "",
   "schedule": ""
}
  * @example
  * 200 Response Example:
  * {
   "campaignId": "",
   "contactListId": "",
   "contactId": "",
   "phoneColumn": "",
   "schedule": ""
}
  */
OutboundApi.prototype.postCampaignsCampaignIdCallbackSchedule = function postCampaignsCampaignIdCallbackSchedule(campaignId, body){
    var requestPath = '/api/v2/outbound/campaigns/{campaignId}/callback/schedule';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a dialer campaign sequence.
  * @memberOf OutboundApi
  * @instance
  * @param {string} sequenceId - Campaign Sequence ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "campaigns": [],
   "currentCampaign": 0,
   "status": "",
   "stopMessage": "",
   "repeat": true,
   "selfUri": ""
}
  */
OutboundApi.prototype.getSequencesSequenceId = function getSequencesSequenceId(sequenceId){
    var requestPath = '/api/v2/outbound/sequences/{sequenceId}';
    var requestQuery = {};
    var requestBody;

    if(sequenceId === undefined || sequenceId === null){
      throw new Error('Missing required  parameter: sequenceId');
    }
    requestPath = requestPath.replace('{sequenceId}', sequenceId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a new campaign sequence.
  * @memberOf OutboundApi
  * @instance
  * @param {string} sequenceId - Campaign Sequence ID
  * @param {} body - Organization
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "campaigns": [],
   "status": "",
   "repeat": true
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "campaigns": [],
   "currentCampaign": 0,
   "status": "",
   "stopMessage": "",
   "repeat": true,
   "selfUri": ""
}
  */
OutboundApi.prototype.putSequencesSequenceId = function putSequencesSequenceId(sequenceId, body){
    var requestPath = '/api/v2/outbound/sequences/{sequenceId}';
    var requestQuery = {};
    var requestBody;

    if(sequenceId === undefined || sequenceId === null){
      throw new Error('Missing required  parameter: sequenceId');
    }
    requestPath = requestPath.replace('{sequenceId}', sequenceId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a dialer campaign sequence.
  * @memberOf OutboundApi
  * @instance
  * @param {string} sequenceId - Campaign Sequence ID
  */
OutboundApi.prototype.deleteSequencesSequenceId = function deleteSequencesSequenceId(sequenceId){
    var requestPath = '/api/v2/outbound/sequences/{sequenceId}';
    var requestQuery = {};
    var requestBody;

    if(sequenceId === undefined || sequenceId === null){
      throw new Error('Missing required  parameter: sequenceId');
    }
    requestPath = requestPath.replace('{sequenceId}', sequenceId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get Campaign Rule
  * @memberOf OutboundApi
  * @instance
  * @param {string} campaignRuleId - Campaign Rule ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "campaignRuleEntities": {
      "campaigns": [],
      "sequences": []
   },
   "campaignRuleConditions": [],
   "campaignRuleActions": [],
   "matchAnyConditions": true,
   "enabled": true,
   "selfUri": ""
}
  */
OutboundApi.prototype.getCampaignrulesCampaignruleId = function getCampaignrulesCampaignruleId(campaignRuleId){
    var requestPath = '/api/v2/outbound/campaignrules/{campaignRuleId}';
    var requestQuery = {};
    var requestBody;

    if(campaignRuleId === undefined || campaignRuleId === null){
      throw new Error('Missing required  parameter: campaignRuleId');
    }
    requestPath = requestPath.replace('{campaignRuleId}', campaignRuleId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update Campaign Rule
  * @memberOf OutboundApi
  * @instance
  * @param {string} campaignRuleId - Campaign Rule ID
  * @param {} body - CampaignRule
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "campaignRuleEntities": {
      "campaigns": [],
      "sequences": []
   },
   "campaignRuleConditions": [],
   "campaignRuleActions": [],
   "matchAnyConditions": true,
   "enabled": true
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "campaignRuleEntities": {
      "campaigns": [],
      "sequences": []
   },
   "campaignRuleConditions": [],
   "campaignRuleActions": [],
   "matchAnyConditions": true,
   "enabled": true,
   "selfUri": ""
}
  */
OutboundApi.prototype.putCampaignrulesCampaignruleId = function putCampaignrulesCampaignruleId(campaignRuleId, body){
    var requestPath = '/api/v2/outbound/campaignrules/{campaignRuleId}';
    var requestQuery = {};
    var requestBody;

    if(campaignRuleId === undefined || campaignRuleId === null){
      throw new Error('Missing required  parameter: campaignRuleId');
    }
    requestPath = requestPath.replace('{campaignRuleId}', campaignRuleId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete Campaign Rule
  * @memberOf OutboundApi
  * @instance
  * @param {string} campaignRuleId - Campaign Rule ID
  */
OutboundApi.prototype.deleteCampaignrulesCampaignruleId = function deleteCampaignrulesCampaignruleId(campaignRuleId){
    var requestPath = '/api/v2/outbound/campaignrules/{campaignRuleId}';
    var requestQuery = {};
    var requestBody;

    if(campaignRuleId === undefined || campaignRuleId === null){
      throw new Error('Missing required  parameter: campaignRuleId');
    }
    requestPath = requestPath.replace('{campaignRuleId}', campaignRuleId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get statistics about a Dialer Campaign
  * @memberOf OutboundApi
  * @instance
  * @param {string} campaignId - Campaign ID
  * @example
  * 200 Response Example:
  * {
   "contactRate": {
      "attempts": 0,
      "connects": 0,
      "connectRatio": {}
   },
   "idleAgents": 0,
   "adjustedCallsPerAgent": {},
   "outstandingCalls": 0
}
  */
OutboundApi.prototype.getCampaignsCampaignIdStats = function getCampaignsCampaignIdStats(campaignId){
    var requestPath = '/api/v2/outbound/campaigns/{campaignId}/stats';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a dialer sequence schedule.
  * @memberOf OutboundApi
  * @instance
  * @param {string} sequenceId - Sequence ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "intervals": [],
   "timeZone": "",
   "sequence": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "selfUri": ""
}
  */
OutboundApi.prototype.getSchedulesSequencesSequenceId = function getSchedulesSequencesSequenceId(sequenceId){
    var requestPath = '/api/v2/outbound/schedules/sequences/{sequenceId}';
    var requestQuery = {};
    var requestBody;

    if(sequenceId === undefined || sequenceId === null){
      throw new Error('Missing required  parameter: sequenceId');
    }
    requestPath = requestPath.replace('{sequenceId}', sequenceId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a new sequence schedule.
  * @memberOf OutboundApi
  * @instance
  * @param {string} sequenceId - Sequence ID
  * @param {} body - SequenceSchedule
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "intervals": [],
   "timeZone": "",
   "sequence": {
      "id": "",
      "name": "",
      "selfUri": ""
   }
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "intervals": [],
   "timeZone": "",
   "sequence": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "selfUri": ""
}
  */
OutboundApi.prototype.putSchedulesSequencesSequenceId = function putSchedulesSequencesSequenceId(sequenceId, body){
    var requestPath = '/api/v2/outbound/schedules/sequences/{sequenceId}';
    var requestQuery = {};
    var requestBody;

    if(sequenceId === undefined || sequenceId === null){
      throw new Error('Missing required  parameter: sequenceId');
    }
    requestPath = requestPath.replace('{sequenceId}', sequenceId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a dialer sequence schedule.
  * @memberOf OutboundApi
  * @instance
  * @param {string} sequenceId - Sequence ID
  */
OutboundApi.prototype.deleteSchedulesSequencesSequenceId = function deleteSchedulesSequencesSequenceId(sequenceId){
    var requestPath = '/api/v2/outbound/schedules/sequences/{sequenceId}';
    var requestQuery = {};
    var requestBody;

    if(sequenceId === undefined || sequenceId === null){
      throw new Error('Missing required  parameter: sequenceId');
    }
    requestPath = requestPath.replace('{sequenceId}', sequenceId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query for a list of dialer sequence schedules.
  * @memberOf OutboundApi
  * @instance
  * @example
  * 200 Response Example:
  * [
 {
  "id": "",
  "name": "",
  "dateCreated": "",
  "dateModified": "",
  "version": 0,
  "intervals": [],
  "timeZone": "",
  "sequence": {
   "id": "",
   "name": "",
   "selfUri": ""
  },
  "selfUri": ""
 }
]
  */
OutboundApi.prototype.getSchedulesSequences = function getSchedulesSequences(){
    var requestPath = '/api/v2/outbound/schedules/sequences';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a dialer contact list.
  * @memberOf OutboundApi
  * @instance
  * @param {string} contactListId - ContactList ID
  * @param {boolean} includeImportStatus - Import status
  * @param {boolean} includeSize - Include size
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "columnNames": [],
   "phoneColumns": [],
   "importStatus": {
      "state": "",
      "totalRecords": 0,
      "completedRecords": 0,
      "percentComplete": 0,
      "failureReason": ""
   },
   "previewModeColumnName": "",
   "previewModeAcceptedValues": [],
   "size": 0,
   "selfUri": ""
}
  */
OutboundApi.prototype.getContactlistsContactlistId = function getContactlistsContactlistId(contactListId, includeImportStatus, includeSize){
    var requestPath = '/api/v2/outbound/contactlists/{contactListId}';
    var requestQuery = {};
    var requestBody;

    if(contactListId === undefined || contactListId === null){
      throw new Error('Missing required  parameter: contactListId');
    }
    requestPath = requestPath.replace('{contactListId}', contactListId);
    requestQuery["includeImportStatus"] = includeImportStatus;
    requestQuery["includeSize"] = includeSize;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a contact list.
  * @memberOf OutboundApi
  * @instance
  * @param {string} contactListId - ContactList ID
  * @param {} body - ContactList
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "columnNames": [],
   "phoneColumns": [],
   "previewModeColumnName": "",
   "previewModeAcceptedValues": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "columnNames": [],
   "phoneColumns": [],
   "importStatus": {
      "state": "",
      "totalRecords": 0,
      "completedRecords": 0,
      "percentComplete": 0,
      "failureReason": ""
   },
   "previewModeColumnName": "",
   "previewModeAcceptedValues": [],
   "size": 0,
   "selfUri": ""
}
  */
OutboundApi.prototype.putContactlistsContactlistId = function putContactlistsContactlistId(contactListId, body){
    var requestPath = '/api/v2/outbound/contactlists/{contactListId}';
    var requestQuery = {};
    var requestBody;

    if(contactListId === undefined || contactListId === null){
      throw new Error('Missing required  parameter: contactListId');
    }
    requestPath = requestPath.replace('{contactListId}', contactListId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a contact list.
  * @memberOf OutboundApi
  * @instance
  * @param {string} contactListId - ContactList ID
  */
OutboundApi.prototype.deleteContactlistsContactlistId = function deleteContactlistsContactlistId(contactListId){
    var requestPath = '/api/v2/outbound/contactlists/{contactListId}';
    var requestQuery = {};
    var requestBody;

    if(contactListId === undefined || contactListId === null){
      throw new Error('Missing required  parameter: contactListId');
    }
    requestPath = requestPath.replace('{contactListId}', contactListId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query a list of dialer call analysis response sets.
  * @memberOf OutboundApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} filterType - Filter type
  Equals,
  RegEx,
  Contains,
  Prefix,
  LessThan,
  LessThanEqualTo,
  GreaterThan,
  GreaterThanEqualTo,
  BeginsWith,
  EndsWith,
  * @param {string} name - Name
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
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
OutboundApi.prototype.getCallanalysisresponsesets = function getCallanalysisresponsesets(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
    var requestPath = '/api/v2/outbound/callanalysisresponsesets';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["filterType"] = filterType;
    requestQuery["name"] = name;
    requestQuery["sortBy"] = sortBy;
    requestQuery["sortOrder"] = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a dialer call analysis response set.
  * @memberOf OutboundApi
  * @instance
  * @param {} body - ResponseSet
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "responses": {}
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "responses": {},
   "selfUri": ""
}
  */
OutboundApi.prototype.postCallanalysisresponsesets = function postCallanalysisresponsesets(body){
    var requestPath = '/api/v2/outbound/callanalysisresponsesets';
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
  * @summary Get the URI of a contact list export.
  * @memberOf OutboundApi
  * @instance
  * @param {string} contactListId - ContactList ID
  * @param {string} download - Redirect to download uri
  * @example
  * 200 Response Example:
  * {
   "uri": "",
   "exportTimestamp": ""
}
  */
OutboundApi.prototype.getContactlistsContactlistIdExport = function getContactlistsContactlistIdExport(contactListId, download){
    var requestPath = '/api/v2/outbound/contactlists/{contactListId}/export';
    var requestQuery = {};
    var requestBody;

    if(contactListId === undefined || contactListId === null){
      throw new Error('Missing required  parameter: contactListId');
    }
    requestPath = requestPath.replace('{contactListId}', contactListId);
    requestQuery["download"] = download;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Initiate the export of a contact list.
  * @description Returns 200 if received OK.
  * @memberOf OutboundApi
  * @instance
  * @param {string} contactListId - ContactList ID
  */
OutboundApi.prototype.postContactlistsContactlistIdExport = function postContactlistsContactlistIdExport(contactListId){
    var requestPath = '/api/v2/outbound/contactlists/{contactListId}/export';
    var requestQuery = {};
    var requestBody;

    if(contactListId === undefined || contactListId === null){
      throw new Error('Missing required  parameter: contactListId');
    }
    requestPath = requestPath.replace('{contactListId}', contactListId);
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query callable time set list
  * @memberOf OutboundApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} filterType - Filter type
  Equals,
  RegEx,
  Contains,
  Prefix,
  LessThan,
  LessThanEqualTo,
  GreaterThan,
  GreaterThanEqualTo,
  BeginsWith,
  EndsWith,
  * @param {string} name - Name
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
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
OutboundApi.prototype.getCallabletimesets = function getCallabletimesets(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
    var requestPath = '/api/v2/outbound/callabletimesets';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["filterType"] = filterType;
    requestQuery["name"] = name;
    requestQuery["sortBy"] = sortBy;
    requestQuery["sortOrder"] = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create callable time set
  * @memberOf OutboundApi
  * @instance
  * @param {} body - DialerCallableTimeSet
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "callableTimes": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "callableTimes": [],
   "selfUri": ""
}
  */
OutboundApi.prototype.postCallabletimesets = function postCallabletimesets(body){
    var requestPath = '/api/v2/outbound/callabletimesets';
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
  * @summary Get dialer campaign interactions.
  * @memberOf OutboundApi
  * @instance
  * @param {string} campaignId - Campaign ID
  * @example
  * 200 Response Example:
  * {
   "campaign": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "pendingInteractions": [],
   "proceedingInteractions": [],
   "previewingInteractions": [],
   "interactingInteractions": [],
   "scheduledInteractions": []
}
  */
OutboundApi.prototype.getCampaignsCampaignIdInteractions = function getCampaignsCampaignIdInteractions(campaignId){
    var requestPath = '/api/v2/outbound/campaigns/{campaignId}/interactions';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the URI of a DNC list export.
  * @memberOf OutboundApi
  * @instance
  * @param {string} dncListId - DncList ID
  * @param {string} download - Redirect to download uri
  * @example
  * 200 Response Example:
  * {
   "uri": "",
   "exportTimestamp": ""
}
  */
OutboundApi.prototype.getDnclistsDnclistIdExport = function getDnclistsDnclistIdExport(dncListId, download){
    var requestPath = '/api/v2/outbound/dnclists/{dncListId}/export';
    var requestQuery = {};
    var requestBody;

    if(dncListId === undefined || dncListId === null){
      throw new Error('Missing required  parameter: dncListId');
    }
    requestPath = requestPath.replace('{dncListId}', dncListId);
    requestQuery["download"] = download;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Initiate the export of a dnc list.
  * @description Returns 200 if received OK.
  * @memberOf OutboundApi
  * @instance
  * @param {string} dncListId - DncList ID
  */
OutboundApi.prototype.postDnclistsDnclistIdExport = function postDnclistsDnclistIdExport(dncListId){
    var requestPath = '/api/v2/outbound/dnclists/{dncListId}/export';
    var requestQuery = {};
    var requestBody;

    if(dncListId === undefined || dncListId === null){
      throw new Error('Missing required  parameter: dncListId');
    }
    requestPath = requestPath.replace('{dncListId}', dncListId);
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get dialer dncList import status.
  * @memberOf OutboundApi
  * @instance
  * @param {string} dncListId - DncList ID
  * @example
  * 200 Response Example:
  * {
   "state": "",
   "totalRecords": 0,
   "completedRecords": 0,
   "percentComplete": 0,
   "failureReason": ""
}
  */
OutboundApi.prototype.getDnclistsDnclistIdImportstatus = function getDnclistsDnclistIdImportstatus(dncListId){
    var requestPath = '/api/v2/outbound/dnclists/{dncListId}/importstatus';
    var requestQuery = {};
    var requestBody;

    if(dncListId === undefined || dncListId === null){
      throw new Error('Missing required  parameter: dncListId');
    }
    requestPath = requestPath.replace('{dncListId}', dncListId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Send notification that an agent's state changed 
  * @description New agent state.
  * @memberOf OutboundApi
  * @instance
  * @param {string} campaignId - Campaign ID
  * @param {string} userId - Agent's user ID
  * @param {} body - agent
  * @example
  * Body Example:
  * {
   "stage": ""
}
  */
OutboundApi.prototype.putCampaignsCampaignIdAgentsUserId = function putCampaignsCampaignIdAgentsUserId(campaignId, userId, body){
    var requestPath = '/api/v2/outbound/campaigns/{campaignId}/agents/{userId}';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
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
  * @summary Get attempt limits
  * @memberOf OutboundApi
  * @instance
  * @param {string} attemptLimitsId - Attempt limits ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "maxAttemptsPerContact": 0,
   "maxAttemptsPerNumber": 0,
   "timeZoneId": "",
   "resetPeriod": "",
   "selfUri": ""
}
  */
OutboundApi.prototype.getAttemptlimitsAttemptlimitsId = function getAttemptlimitsAttemptlimitsId(attemptLimitsId){
    var requestPath = '/api/v2/outbound/attemptlimits/{attemptLimitsId}';
    var requestQuery = {};
    var requestBody;

    if(attemptLimitsId === undefined || attemptLimitsId === null){
      throw new Error('Missing required  parameter: attemptLimitsId');
    }
    requestPath = requestPath.replace('{attemptLimitsId}', attemptLimitsId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update attempt limits
  * @memberOf OutboundApi
  * @instance
  * @param {string} attemptLimitsId - Attempt limits ID
  * @param {} body - AttemptLimits
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "maxAttemptsPerContact": 0,
   "maxAttemptsPerNumber": 0,
   "timeZoneId": "",
   "resetPeriod": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "maxAttemptsPerContact": 0,
   "maxAttemptsPerNumber": 0,
   "timeZoneId": "",
   "resetPeriod": "",
   "selfUri": ""
}
  */
OutboundApi.prototype.putAttemptlimitsAttemptlimitsId = function putAttemptlimitsAttemptlimitsId(attemptLimitsId, body){
    var requestPath = '/api/v2/outbound/attemptlimits/{attemptLimitsId}';
    var requestQuery = {};
    var requestBody;

    if(attemptLimitsId === undefined || attemptLimitsId === null){
      throw new Error('Missing required  parameter: attemptLimitsId');
    }
    requestPath = requestPath.replace('{attemptLimitsId}', attemptLimitsId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete attempt limits
  * @memberOf OutboundApi
  * @instance
  * @param {string} attemptLimitsId - Attempt limits ID
  */
OutboundApi.prototype.deleteAttemptlimitsAttemptlimitsId = function deleteAttemptlimitsAttemptlimitsId(attemptLimitsId){
    var requestPath = '/api/v2/outbound/attemptlimits/{attemptLimitsId}';
    var requestQuery = {};
    var requestBody;

    if(attemptLimitsId === undefined || attemptLimitsId === null){
      throw new Error('Missing required  parameter: attemptLimitsId');
    }
    requestPath = requestPath.replace('{attemptLimitsId}', attemptLimitsId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query Campaign Rule list
  * @memberOf OutboundApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} filterType - Filter type
  Equals,
  RegEx,
  Contains,
  Prefix,
  LessThan,
  LessThanEqualTo,
  GreaterThan,
  GreaterThanEqualTo,
  BeginsWith,
  EndsWith,
  * @param {string} name - Name
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
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
OutboundApi.prototype.getCampaignrules = function getCampaignrules(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
    var requestPath = '/api/v2/outbound/campaignrules';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["filterType"] = filterType;
    requestQuery["name"] = name;
    requestQuery["sortBy"] = sortBy;
    requestQuery["sortOrder"] = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create Campaign Rule
  * @memberOf OutboundApi
  * @instance
  * @param {} body - CampaignRule
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "campaignRuleEntities": {
      "campaigns": [],
      "sequences": []
   },
   "campaignRuleConditions": [],
   "campaignRuleActions": [],
   "matchAnyConditions": true,
   "enabled": true
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "campaignRuleEntities": {
      "campaigns": [],
      "sequences": []
   },
   "campaignRuleConditions": [],
   "campaignRuleActions": [],
   "matchAnyConditions": true,
   "enabled": true,
   "selfUri": ""
}
  */
OutboundApi.prototype.postCampaignrules = function postCampaignrules(body){
    var requestPath = '/api/v2/outbound/campaignrules';
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


module.exports = OutboundApi;
