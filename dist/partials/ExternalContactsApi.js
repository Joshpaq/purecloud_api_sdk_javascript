/*jshint -W069 */
/**
* @class ExternalContactsApi
* @example
* var api = new purecloud.platform.ExternalContactsApi(pureCloudSession);
*/
function ExternalContactsApi(session) {
    if(!(this instanceof ExternalContactsApi)) {
        return new ExternalContactsApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('ExternalContactsApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary List notes for an external contact
  * @memberOf ExternalContactsApi
  * @instance
  * @param {string} contactId - ExternalContact Id
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortOrder - Sort order
  * @param {array} expand - which fields, if any, to expand Valid Values: author, externalDataSources
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
ExternalContactsApi.prototype.getContactsContactIdNotes = function getContactsContactIdNotes(contactId, pageSize, pageNumber, sortOrder, expand){
    var requestPath = '/api/v2/externalcontacts/contacts/{contactId}/notes';
    var requestQuery = {};
    var requestBody;

    if(contactId === undefined || contactId === null){
      throw new Error('Missing required  parameter: contactId');
    }
    requestPath = requestPath.replace('{contactId}', contactId);
    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["sortOrder"] = sortOrder;
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a note for an external contact
  * @memberOf ExternalContactsApi
  * @instance
  * @param {string} contactId - ExternalContact Id
  * @param {} body - ExternalContact
  * @example
  * Body Example:
  * {
   "name": "",
   "noteText": "",
   "modifyDate": "",
   "createDate": "",
   "createdBy": {
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
   }
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "noteText": "",
   "modifyDate": "",
   "createDate": "",
   "createdBy": {
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
   "externalDataSources": [],
   "selfUri": ""
}
  */
ExternalContactsApi.prototype.postContactsContactIdNotes = function postContactsContactIdNotes(contactId, body){
    var requestPath = '/api/v2/externalcontacts/contacts/{contactId}/notes';
    var requestQuery = {};
    var requestBody;

    if(contactId === undefined || contactId === null){
      throw new Error('Missing required  parameter: contactId');
    }
    requestPath = requestPath.replace('{contactId}', contactId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Fetch an external contact
  * @memberOf ExternalContactsApi
  * @instance
  * @param {string} contactId - ExternalContact ID
  * @param {array} expand - which fields, if any, to expand (externalOrganization,externalDataSources) Valid Values: externalOrganization, externalDataSources
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "firstName": "",
   "middleName": "",
   "lastName": "",
   "salutation": "",
   "title": "",
   "workPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "cellPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "homePhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "otherPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "workEmail": "",
   "personalEmail": "",
   "otherEmail": "",
   "address": {
      "address1": "",
      "address2": "",
      "city": "",
      "state": "",
      "postalCode": "",
      "countryCode": ""
   },
   "twitterId": {
      "id": "",
      "name": "",
      "screenName": "",
      "verified": true,
      "profileUrl": ""
   },
   "modifyDate": "",
   "createDate": "",
   "externalOrganization": {
      "id": "",
      "name": "",
      "companyType": "",
      "industry": "",
      "primaryContactId": "",
      "address": {},
      "phoneNumber": {},
      "faxNumber": {},
      "employeeCount": 0,
      "revenue": 0,
      "tags": [],
      "websites": [],
      "tickers": [],
      "twitterId": {},
      "modifyDate": "",
      "createDate": "",
      "externalDataSources": [],
      "selfUri": ""
   },
   "externalDataSources": [],
   "selfUri": ""
}
  */
ExternalContactsApi.prototype.getContactsContactId = function getContactsContactId(contactId, expand){
    var requestPath = '/api/v2/externalcontacts/contacts/{contactId}';
    var requestQuery = {};
    var requestBody;

    if(contactId === undefined || contactId === null){
      throw new Error('Missing required  parameter: contactId');
    }
    requestPath = requestPath.replace('{contactId}', contactId);
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an external contact
  * @memberOf ExternalContactsApi
  * @instance
  * @param {string} contactId - ExternalContact ID
  * @param {} body - ExternalContact
  * @example
  * Body Example:
  * {
   "firstName": "",
   "middleName": "",
   "lastName": "",
   "salutation": "",
   "title": "",
   "workPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "cellPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "homePhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "otherPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "workEmail": "",
   "personalEmail": "",
   "otherEmail": "",
   "address": {
      "address1": "",
      "address2": "",
      "city": "",
      "state": "",
      "postalCode": "",
      "countryCode": ""
   },
   "twitterId": {
      "id": "",
      "name": "",
      "screenName": ""
   },
   "modifyDate": "",
   "createDate": "",
   "externalOrganization": {
      "name": "",
      "companyType": "",
      "industry": "",
      "primaryContactId": "",
      "address": {},
      "phoneNumber": {},
      "faxNumber": {},
      "employeeCount": 0,
      "revenue": 0,
      "tags": [],
      "websites": [],
      "tickers": [],
      "twitterId": {},
      "modifyDate": "",
      "createDate": ""
   }
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "firstName": "",
   "middleName": "",
   "lastName": "",
   "salutation": "",
   "title": "",
   "workPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "cellPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "homePhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "otherPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "workEmail": "",
   "personalEmail": "",
   "otherEmail": "",
   "address": {
      "address1": "",
      "address2": "",
      "city": "",
      "state": "",
      "postalCode": "",
      "countryCode": ""
   },
   "twitterId": {
      "id": "",
      "name": "",
      "screenName": "",
      "verified": true,
      "profileUrl": ""
   },
   "modifyDate": "",
   "createDate": "",
   "externalOrganization": {
      "id": "",
      "name": "",
      "companyType": "",
      "industry": "",
      "primaryContactId": "",
      "address": {},
      "phoneNumber": {},
      "faxNumber": {},
      "employeeCount": 0,
      "revenue": 0,
      "tags": [],
      "websites": [],
      "tickers": [],
      "twitterId": {},
      "modifyDate": "",
      "createDate": "",
      "externalDataSources": [],
      "selfUri": ""
   },
   "externalDataSources": [],
   "selfUri": ""
}
  */
ExternalContactsApi.prototype.putContactsContactId = function putContactsContactId(contactId, body){
    var requestPath = '/api/v2/externalcontacts/contacts/{contactId}';
    var requestQuery = {};
    var requestBody;

    if(contactId === undefined || contactId === null){
      throw new Error('Missing required  parameter: contactId');
    }
    requestPath = requestPath.replace('{contactId}', contactId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an external contact
  * @memberOf ExternalContactsApi
  * @instance
  * @param {string} contactId - ExternalContact ID
  */
ExternalContactsApi.prototype.deleteContactsContactId = function deleteContactsContactId(contactId){
    var requestPath = '/api/v2/externalcontacts/contacts/{contactId}';
    var requestQuery = {};
    var requestBody;

    if(contactId === undefined || contactId === null){
      throw new Error('Missing required  parameter: contactId');
    }
    requestPath = requestPath.replace('{contactId}', contactId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search for external contacts
  * @memberOf ExternalContactsApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} q - User supplied search keywords (no special syntax is currently supported)
  * @param {string} sortOrder - Sort order
  * @param {array} expand - which fields, if any, to expand Valid Values: externalOrganization, externalDataSources
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
ExternalContactsApi.prototype.getContacts = function getContacts(pageSize, pageNumber, q, sortOrder, expand){
    var requestPath = '/api/v2/externalcontacts/contacts';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["q"] = q;
    requestQuery["sortOrder"] = sortOrder;
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create an external contact
  * @memberOf ExternalContactsApi
  * @instance
  * @param {} body - ExternalContact
  * @example
  * Body Example:
  * {
   "firstName": "",
   "middleName": "",
   "lastName": "",
   "salutation": "",
   "title": "",
   "workPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "cellPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "homePhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "otherPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "workEmail": "",
   "personalEmail": "",
   "otherEmail": "",
   "address": {
      "address1": "",
      "address2": "",
      "city": "",
      "state": "",
      "postalCode": "",
      "countryCode": ""
   },
   "twitterId": {
      "id": "",
      "name": "",
      "screenName": ""
   },
   "modifyDate": "",
   "createDate": "",
   "externalOrganization": {
      "name": "",
      "companyType": "",
      "industry": "",
      "primaryContactId": "",
      "address": {},
      "phoneNumber": {},
      "faxNumber": {},
      "employeeCount": 0,
      "revenue": 0,
      "tags": [],
      "websites": [],
      "tickers": [],
      "twitterId": {},
      "modifyDate": "",
      "createDate": ""
   }
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "firstName": "",
   "middleName": "",
   "lastName": "",
   "salutation": "",
   "title": "",
   "workPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "cellPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "homePhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "otherPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "workEmail": "",
   "personalEmail": "",
   "otherEmail": "",
   "address": {
      "address1": "",
      "address2": "",
      "city": "",
      "state": "",
      "postalCode": "",
      "countryCode": ""
   },
   "twitterId": {
      "id": "",
      "name": "",
      "screenName": "",
      "verified": true,
      "profileUrl": ""
   },
   "modifyDate": "",
   "createDate": "",
   "externalOrganization": {
      "id": "",
      "name": "",
      "companyType": "",
      "industry": "",
      "primaryContactId": "",
      "address": {},
      "phoneNumber": {},
      "faxNumber": {},
      "employeeCount": 0,
      "revenue": 0,
      "tags": [],
      "websites": [],
      "tickers": [],
      "twitterId": {},
      "modifyDate": "",
      "createDate": "",
      "externalDataSources": [],
      "selfUri": ""
   },
   "externalDataSources": [],
   "selfUri": ""
}
  */
ExternalContactsApi.prototype.postContacts = function postContacts(body){
    var requestPath = '/api/v2/externalcontacts/contacts';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Associate an external contact with a conversation
  * @memberOf ExternalContactsApi
  * @instance
  * @param {string} contactId - ExternalContact ID
  * @param {} body - ConversationAssociation
  * @example
  * Body Example:
  * {
   "conversationId": "",
   "communicationId": "",
   "mediaType": ""
}
  */
ExternalContactsApi.prototype.postContactsContactIdAssociateconversation = function postContactsContactIdAssociateconversation(contactId, body){
    var requestPath = '/api/v2/externalcontacts/contacts/{contactId}/associateconversation';
    var requestQuery = {};
    var requestBody;

    if(contactId === undefined || contactId === null){
      throw new Error('Missing required  parameter: contactId');
    }
    requestPath = requestPath.replace('{contactId}', contactId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Fetch a relationship
  * @memberOf ExternalContactsApi
  * @instance
  * @param {string} relationshipId - Relationship Id
  * @param {string} expand - which fields, if any, to expand
  externalDataSources,
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
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
   "externalOrganization": {
      "id": "",
      "name": "",
      "companyType": "",
      "industry": "",
      "primaryContactId": "",
      "address": {},
      "phoneNumber": {},
      "faxNumber": {},
      "employeeCount": 0,
      "revenue": 0,
      "tags": [],
      "websites": [],
      "tickers": [],
      "twitterId": {},
      "modifyDate": "",
      "createDate": "",
      "externalDataSources": [],
      "selfUri": ""
   },
   "relationship": "",
   "externalDataSources": [],
   "selfUri": ""
}
  */
ExternalContactsApi.prototype.getRelationshipsRelationshipId = function getRelationshipsRelationshipId(relationshipId, expand){
    var requestPath = '/api/v2/externalcontacts/relationships/{relationshipId}';
    var requestQuery = {};
    var requestBody;

    if(relationshipId === undefined || relationshipId === null){
      throw new Error('Missing required  parameter: relationshipId');
    }
    requestPath = requestPath.replace('{relationshipId}', relationshipId);
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a relationship
  * @memberOf ExternalContactsApi
  * @instance
  * @param {string} relationshipId - Relationship Id
  * @param {} body - Relationship
  * @example
  * Body Example:
  * {
   "name": "",
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
   "externalOrganization": {
      "name": "",
      "companyType": "",
      "industry": "",
      "primaryContactId": "",
      "address": {},
      "phoneNumber": {},
      "faxNumber": {},
      "employeeCount": 0,
      "revenue": 0,
      "tags": [],
      "websites": [],
      "tickers": [],
      "twitterId": {},
      "modifyDate": "",
      "createDate": ""
   },
   "relationship": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
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
   "externalOrganization": {
      "id": "",
      "name": "",
      "companyType": "",
      "industry": "",
      "primaryContactId": "",
      "address": {},
      "phoneNumber": {},
      "faxNumber": {},
      "employeeCount": 0,
      "revenue": 0,
      "tags": [],
      "websites": [],
      "tickers": [],
      "twitterId": {},
      "modifyDate": "",
      "createDate": "",
      "externalDataSources": [],
      "selfUri": ""
   },
   "relationship": "",
   "externalDataSources": [],
   "selfUri": ""
}
  */
ExternalContactsApi.prototype.putRelationshipsRelationshipId = function putRelationshipsRelationshipId(relationshipId, body){
    var requestPath = '/api/v2/externalcontacts/relationships/{relationshipId}';
    var requestQuery = {};
    var requestBody;

    if(relationshipId === undefined || relationshipId === null){
      throw new Error('Missing required  parameter: relationshipId');
    }
    requestPath = requestPath.replace('{relationshipId}', relationshipId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a relationship
  * @memberOf ExternalContactsApi
  * @instance
  * @param {string} relationshipId - Relationship Id
  */
ExternalContactsApi.prototype.deleteRelationshipsRelationshipId = function deleteRelationshipsRelationshipId(relationshipId){
    var requestPath = '/api/v2/externalcontacts/relationships/{relationshipId}';
    var requestQuery = {};
    var requestBody;

    if(relationshipId === undefined || relationshipId === null){
      throw new Error('Missing required  parameter: relationshipId');
    }
    requestPath = requestPath.replace('{relationshipId}', relationshipId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Fetch a relationship for an external organization
  * @memberOf ExternalContactsApi
  * @instance
  * @param {string} externalOrganizationId - External Organization ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} expand - which fields, if any, to expand
  externalDataSources,
  * @param {string} sortOrder - Sort order
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
ExternalContactsApi.prototype.getOrganizationsExternalorganizationIdRelationships = function getOrganizationsExternalorganizationIdRelationships(externalOrganizationId, pageSize, pageNumber, expand, sortOrder){
    var requestPath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}/relationships';
    var requestQuery = {};
    var requestBody;

    if(externalOrganizationId === undefined || externalOrganizationId === null){
      throw new Error('Missing required  parameter: externalOrganizationId');
    }
    requestPath = requestPath.replace('{externalOrganizationId}', externalOrganizationId);
    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["expand"] = expand;
    requestQuery["sortOrder"] = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a relationship
  * @memberOf ExternalContactsApi
  * @instance
  * @param {} body - Relationship
  * @example
  * Body Example:
  * {
   "name": "",
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
   "externalOrganization": {
      "name": "",
      "companyType": "",
      "industry": "",
      "primaryContactId": "",
      "address": {},
      "phoneNumber": {},
      "faxNumber": {},
      "employeeCount": 0,
      "revenue": 0,
      "tags": [],
      "websites": [],
      "tickers": [],
      "twitterId": {},
      "modifyDate": "",
      "createDate": ""
   },
   "relationship": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
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
   "externalOrganization": {
      "id": "",
      "name": "",
      "companyType": "",
      "industry": "",
      "primaryContactId": "",
      "address": {},
      "phoneNumber": {},
      "faxNumber": {},
      "employeeCount": 0,
      "revenue": 0,
      "tags": [],
      "websites": [],
      "tickers": [],
      "twitterId": {},
      "modifyDate": "",
      "createDate": "",
      "externalDataSources": [],
      "selfUri": ""
   },
   "relationship": "",
   "externalDataSources": [],
   "selfUri": ""
}
  */
ExternalContactsApi.prototype.postRelationships = function postRelationships(body){
    var requestPath = '/api/v2/externalcontacts/relationships';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Fetch a note for an external organization
  * @memberOf ExternalContactsApi
  * @instance
  * @param {string} externalOrganizationId - External Organization Id
  * @param {string} noteId - Note Id
  * @param {array} expand - which fields, if any, to expand Valid Values: author, externalDataSources
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "noteText": "",
   "modifyDate": "",
   "createDate": "",
   "createdBy": {
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
   "externalDataSources": [],
   "selfUri": ""
}
  */
ExternalContactsApi.prototype.getOrganizationsExternalorganizationIdNotesNoteId = function getOrganizationsExternalorganizationIdNotesNoteId(externalOrganizationId, noteId, expand){
    var requestPath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}';
    var requestQuery = {};
    var requestBody;

    if(externalOrganizationId === undefined || externalOrganizationId === null){
      throw new Error('Missing required  parameter: externalOrganizationId');
    }
    requestPath = requestPath.replace('{externalOrganizationId}', externalOrganizationId);
    if(noteId === undefined || noteId === null){
      throw new Error('Missing required  parameter: noteId');
    }
    requestPath = requestPath.replace('{noteId}', noteId);
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a note for an external organization
  * @memberOf ExternalContactsApi
  * @instance
  * @param {string} externalOrganizationId - External Organization Id
  * @param {string} noteId - Note Id
  * @param {} body - Note
  * @example
  * Body Example:
  * {
   "name": "",
   "noteText": "",
   "modifyDate": "",
   "createDate": "",
   "createdBy": {
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
   }
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "noteText": "",
   "modifyDate": "",
   "createDate": "",
   "createdBy": {
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
   "externalDataSources": [],
   "selfUri": ""
}
  */
ExternalContactsApi.prototype.putOrganizationsExternalorganizationIdNotesNoteId = function putOrganizationsExternalorganizationIdNotesNoteId(externalOrganizationId, noteId, body){
    var requestPath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}';
    var requestQuery = {};
    var requestBody;

    if(externalOrganizationId === undefined || externalOrganizationId === null){
      throw new Error('Missing required  parameter: externalOrganizationId');
    }
    requestPath = requestPath.replace('{externalOrganizationId}', externalOrganizationId);
    if(noteId === undefined || noteId === null){
      throw new Error('Missing required  parameter: noteId');
    }
    requestPath = requestPath.replace('{noteId}', noteId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a note for an external organization
  * @memberOf ExternalContactsApi
  * @instance
  * @param {string} externalOrganizationId - External Organization Id
  * @param {string} noteId - Note Id
  */
ExternalContactsApi.prototype.deleteOrganizationsExternalorganizationIdNotesNoteId = function deleteOrganizationsExternalorganizationIdNotesNoteId(externalOrganizationId, noteId){
    var requestPath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}';
    var requestQuery = {};
    var requestBody;

    if(externalOrganizationId === undefined || externalOrganizationId === null){
      throw new Error('Missing required  parameter: externalOrganizationId');
    }
    requestPath = requestPath.replace('{externalOrganizationId}', externalOrganizationId);
    if(noteId === undefined || noteId === null){
      throw new Error('Missing required  parameter: noteId');
    }
    requestPath = requestPath.replace('{noteId}', noteId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary List notes for an external organization
  * @memberOf ExternalContactsApi
  * @instance
  * @param {string} externalOrganizationId - External Organization Id
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortOrder - Sort order
  * @param {array} expand - which fields, if any, to expand Valid Values: author, externalDataSources
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
ExternalContactsApi.prototype.getOrganizationsExternalorganizationIdNotes = function getOrganizationsExternalorganizationIdNotes(externalOrganizationId, pageSize, pageNumber, sortOrder, expand){
    var requestPath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes';
    var requestQuery = {};
    var requestBody;

    if(externalOrganizationId === undefined || externalOrganizationId === null){
      throw new Error('Missing required  parameter: externalOrganizationId');
    }
    requestPath = requestPath.replace('{externalOrganizationId}', externalOrganizationId);
    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["sortOrder"] = sortOrder;
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a note for an external organization
  * @memberOf ExternalContactsApi
  * @instance
  * @param {string} externalOrganizationId - External Organization Id
  * @param {} body - ExternalContact
  * @example
  * Body Example:
  * {
   "name": "",
   "noteText": "",
   "modifyDate": "",
   "createDate": "",
   "createdBy": {
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
   }
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "noteText": "",
   "modifyDate": "",
   "createDate": "",
   "createdBy": {
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
   "externalDataSources": [],
   "selfUri": ""
}
  */
ExternalContactsApi.prototype.postOrganizationsExternalorganizationIdNotes = function postOrganizationsExternalorganizationIdNotes(externalOrganizationId, body){
    var requestPath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes';
    var requestQuery = {};
    var requestBody;

    if(externalOrganizationId === undefined || externalOrganizationId === null){
      throw new Error('Missing required  parameter: externalOrganizationId');
    }
    requestPath = requestPath.replace('{externalOrganizationId}', externalOrganizationId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search for external organizations
  * @memberOf ExternalContactsApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} q - Search query
  * @param {string} sortOrder - Sort order
  * @param {string} expand - which fields, if any, to expand
  externalDataSources,
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
ExternalContactsApi.prototype.getOrganizations = function getOrganizations(pageSize, pageNumber, q, sortOrder, expand){
    var requestPath = '/api/v2/externalcontacts/organizations';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["q"] = q;
    requestQuery["sortOrder"] = sortOrder;
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create an external organization
  * @memberOf ExternalContactsApi
  * @instance
  * @param {} body - ExternalOrganization
  * @example
  * Body Example:
  * {
   "name": "",
   "companyType": "",
   "industry": "",
   "primaryContactId": "",
   "address": {
      "address1": "",
      "address2": "",
      "city": "",
      "state": "",
      "postalCode": "",
      "countryCode": ""
   },
   "phoneNumber": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "faxNumber": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "employeeCount": 0,
   "revenue": 0,
   "tags": [],
   "websites": [],
   "tickers": [],
   "twitterId": {
      "id": "",
      "name": "",
      "screenName": ""
   },
   "modifyDate": "",
   "createDate": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "companyType": "",
   "industry": "",
   "primaryContactId": "",
   "address": {
      "address1": "",
      "address2": "",
      "city": "",
      "state": "",
      "postalCode": "",
      "countryCode": ""
   },
   "phoneNumber": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "faxNumber": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "employeeCount": 0,
   "revenue": 0,
   "tags": [],
   "websites": [],
   "tickers": [],
   "twitterId": {
      "id": "",
      "name": "",
      "screenName": "",
      "verified": true,
      "profileUrl": ""
   },
   "modifyDate": "",
   "createDate": "",
   "externalDataSources": [],
   "selfUri": ""
}
  */
ExternalContactsApi.prototype.postOrganizations = function postOrganizations(body){
    var requestPath = '/api/v2/externalcontacts/organizations';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Lookup contacts and externalOrganizations based on an attribute
  * @memberOf ExternalContactsApi
  * @instance
  * @param {string} lookupVal - User supplied value to lookup contacts/externalOrganizations (supports email addresses, e164 phone numbers, Twitter screen names)
  * @param {array} expand - which field, if any, to expand Valid Values: contacts.externalOrganization, externalDataSources
  * @example
  * 200 Response Example:
  * {
   "contacts": [],
   "externalOrganizations": []
}
  */
ExternalContactsApi.prototype.getReversewhitepageslookup = function getReversewhitepageslookup(lookupVal, expand){
    var requestPath = '/api/v2/externalcontacts/reversewhitepageslookup';
    var requestQuery = {};
    var requestBody;

    if(lookupVal === undefined || lookupVal === null){
      throw new Error('Missing required  parameter: lookupVal');
    }
    requestQuery["lookupVal"] = lookupVal;
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Associate an external contact with a conversation
  * @memberOf ExternalContactsApi
  * @instance
  * @param {string} conversationId - Conversation ID
  * @param {} body - ConversationAssociation
  * @example
  * Body Example:
  * {
   "conversationId": "",
   "communicationId": "",
   "mediaType": ""
}
  */
ExternalContactsApi.prototype.putConversationsConversationId = function putConversationsConversationId(conversationId, body){
    var requestPath = '/api/v2/externalcontacts/conversations/{conversationId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Fetch an external organization
  * @memberOf ExternalContactsApi
  * @instance
  * @param {string} externalOrganizationId - External Organization ID
  * @param {array} expand - which fields, if any, to expand (externalDataSources) Valid Values: externalDataSources
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "companyType": "",
   "industry": "",
   "primaryContactId": "",
   "address": {
      "address1": "",
      "address2": "",
      "city": "",
      "state": "",
      "postalCode": "",
      "countryCode": ""
   },
   "phoneNumber": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "faxNumber": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "employeeCount": 0,
   "revenue": 0,
   "tags": [],
   "websites": [],
   "tickers": [],
   "twitterId": {
      "id": "",
      "name": "",
      "screenName": "",
      "verified": true,
      "profileUrl": ""
   },
   "modifyDate": "",
   "createDate": "",
   "externalDataSources": [],
   "selfUri": ""
}
  */
ExternalContactsApi.prototype.getOrganizationsExternalorganizationId = function getOrganizationsExternalorganizationId(externalOrganizationId, expand){
    var requestPath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}';
    var requestQuery = {};
    var requestBody;

    if(externalOrganizationId === undefined || externalOrganizationId === null){
      throw new Error('Missing required  parameter: externalOrganizationId');
    }
    requestPath = requestPath.replace('{externalOrganizationId}', externalOrganizationId);
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an external organization
  * @memberOf ExternalContactsApi
  * @instance
  * @param {string} externalOrganizationId - External Organization ID
  * @param {} body - ExternalOrganization
  * @example
  * Body Example:
  * {
   "name": "",
   "companyType": "",
   "industry": "",
   "primaryContactId": "",
   "address": {
      "address1": "",
      "address2": "",
      "city": "",
      "state": "",
      "postalCode": "",
      "countryCode": ""
   },
   "phoneNumber": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "faxNumber": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "employeeCount": 0,
   "revenue": 0,
   "tags": [],
   "websites": [],
   "tickers": [],
   "twitterId": {
      "id": "",
      "name": "",
      "screenName": ""
   },
   "modifyDate": "",
   "createDate": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "companyType": "",
   "industry": "",
   "primaryContactId": "",
   "address": {
      "address1": "",
      "address2": "",
      "city": "",
      "state": "",
      "postalCode": "",
      "countryCode": ""
   },
   "phoneNumber": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "faxNumber": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "employeeCount": 0,
   "revenue": 0,
   "tags": [],
   "websites": [],
   "tickers": [],
   "twitterId": {
      "id": "",
      "name": "",
      "screenName": "",
      "verified": true,
      "profileUrl": ""
   },
   "modifyDate": "",
   "createDate": "",
   "externalDataSources": [],
   "selfUri": ""
}
  */
ExternalContactsApi.prototype.putOrganizationsExternalorganizationId = function putOrganizationsExternalorganizationId(externalOrganizationId, body){
    var requestPath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}';
    var requestQuery = {};
    var requestBody;

    if(externalOrganizationId === undefined || externalOrganizationId === null){
      throw new Error('Missing required  parameter: externalOrganizationId');
    }
    requestPath = requestPath.replace('{externalOrganizationId}', externalOrganizationId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an external organization
  * @memberOf ExternalContactsApi
  * @instance
  * @param {string} externalOrganizationId - External Organization ID
  */
ExternalContactsApi.prototype.deleteOrganizationsExternalorganizationId = function deleteOrganizationsExternalorganizationId(externalOrganizationId){
    var requestPath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}';
    var requestQuery = {};
    var requestBody;

    if(externalOrganizationId === undefined || externalOrganizationId === null){
      throw new Error('Missing required  parameter: externalOrganizationId');
    }
    requestPath = requestPath.replace('{externalOrganizationId}', externalOrganizationId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search for external contacts in an external organization
  * @memberOf ExternalContactsApi
  * @instance
  * @param {string} externalOrganizationId - External Organization ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} q - User supplied search keywords (no special syntax is currently supported)
  * @param {string} sortOrder - Sort order
  * @param {array} expand - which fields, if any, to expand (externalOrganization) Valid Values: externalOrganization
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
ExternalContactsApi.prototype.getOrganizationsExternalorganizationIdContacts = function getOrganizationsExternalorganizationIdContacts(externalOrganizationId, pageSize, pageNumber, q, sortOrder, expand){
    var requestPath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}/contacts';
    var requestQuery = {};
    var requestBody;

    if(externalOrganizationId === undefined || externalOrganizationId === null){
      throw new Error('Missing required  parameter: externalOrganizationId');
    }
    requestPath = requestPath.replace('{externalOrganizationId}', externalOrganizationId);
    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["q"] = q;
    requestQuery["sortOrder"] = sortOrder;
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Fetch a note for an external contact
  * @memberOf ExternalContactsApi
  * @instance
  * @param {string} contactId - ExternalContact Id
  * @param {string} noteId - Note Id
  * @param {array} expand - which fields, if any, to expand Valid Values: author, externalDataSources
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "noteText": "",
   "modifyDate": "",
   "createDate": "",
   "createdBy": {
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
   "externalDataSources": [],
   "selfUri": ""
}
  */
ExternalContactsApi.prototype.getContactsContactIdNotesNoteId = function getContactsContactIdNotesNoteId(contactId, noteId, expand){
    var requestPath = '/api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}';
    var requestQuery = {};
    var requestBody;

    if(contactId === undefined || contactId === null){
      throw new Error('Missing required  parameter: contactId');
    }
    requestPath = requestPath.replace('{contactId}', contactId);
    if(noteId === undefined || noteId === null){
      throw new Error('Missing required  parameter: noteId');
    }
    requestPath = requestPath.replace('{noteId}', noteId);
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a note for an external contact
  * @memberOf ExternalContactsApi
  * @instance
  * @param {string} contactId - ExternalContact Id
  * @param {string} noteId - Note Id
  * @param {} body - Note
  * @example
  * Body Example:
  * {
   "name": "",
   "noteText": "",
   "modifyDate": "",
   "createDate": "",
   "createdBy": {
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
   }
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "noteText": "",
   "modifyDate": "",
   "createDate": "",
   "createdBy": {
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
   "externalDataSources": [],
   "selfUri": ""
}
  */
ExternalContactsApi.prototype.putContactsContactIdNotesNoteId = function putContactsContactIdNotesNoteId(contactId, noteId, body){
    var requestPath = '/api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}';
    var requestQuery = {};
    var requestBody;

    if(contactId === undefined || contactId === null){
      throw new Error('Missing required  parameter: contactId');
    }
    requestPath = requestPath.replace('{contactId}', contactId);
    if(noteId === undefined || noteId === null){
      throw new Error('Missing required  parameter: noteId');
    }
    requestPath = requestPath.replace('{noteId}', noteId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a note for an external contact
  * @memberOf ExternalContactsApi
  * @instance
  * @param {string} contactId - ExternalContact Id
  * @param {string} noteId - Note Id
  */
ExternalContactsApi.prototype.deleteContactsContactIdNotesNoteId = function deleteContactsContactIdNotesNoteId(contactId, noteId){
    var requestPath = '/api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}';
    var requestQuery = {};
    var requestBody;

    if(contactId === undefined || contactId === null){
      throw new Error('Missing required  parameter: contactId');
    }
    requestPath = requestPath.replace('{contactId}', contactId);
    if(noteId === undefined || noteId === null){
      throw new Error('Missing required  parameter: noteId');
    }
    requestPath = requestPath.replace('{noteId}', noteId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};


module.exports = ExternalContactsApi;
