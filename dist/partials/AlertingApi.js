/*jshint -W069 */
/**
* @class AlertingApi
* @example
* var api = new purecloud.platform.AlertingApi(pureCloudSession);
*/
function AlertingApi(session) {
    if(!(this instanceof AlertingApi)) {
        return new AlertingApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('AlertingApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get routing status alert list.
  * @memberOf AlertingApi
  * @instance
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers, agent
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
AlertingApi.prototype.getRoutingstatusAlerts = function getRoutingstatusAlerts(expand){
    var requestPath = '/api/v2/alerting/routingstatus/alerts';
    var requestQuery = {};
    var requestBody;

    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a user presence rule.
  * @memberOf AlertingApi
  * @instance
  * @param {string} ruleId - Rule ID
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers, presenceUser
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "presenceUser": {
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
   "presenceType": "",
   "presenceValue": "",
   "presenceLimitInSeconds": 0,
   "enabled": true,
   "inAlarm": true,
   "notificationUsers": [],
   "alertTypes": [],
   "selfUri": ""
}
  */
AlertingApi.prototype.getUserpresenceRulesRuleId = function getUserpresenceRulesRuleId(ruleId, expand){
    var requestPath = '/api/v2/alerting/userpresence/rules/{ruleId}';
    var requestQuery = {};
    var requestBody;

    if(ruleId === undefined || ruleId === null){
      throw new Error('Missing required  parameter: ruleId');
    }
    requestPath = requestPath.replace('{ruleId}', ruleId);
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a user presence rule
  * @memberOf AlertingApi
  * @instance
  * @param {string} ruleId - Rule ID
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers, presenceUser
  * @param {} body - UserPresenceRule
  * @example
  * Body Example:
  * {
   "name": "",
   "presenceUser": {
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
   "presenceType": "",
   "presenceValue": "",
   "presenceLimitInSeconds": 0,
   "enabled": true,
   "notificationUsers": [],
   "alertTypes": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "presenceUser": {
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
   "presenceType": "",
   "presenceValue": "",
   "presenceLimitInSeconds": 0,
   "enabled": true,
   "inAlarm": true,
   "notificationUsers": [],
   "alertTypes": [],
   "selfUri": ""
}
  */
AlertingApi.prototype.putUserpresenceRulesRuleId = function putUserpresenceRulesRuleId(ruleId, expand, body){
    var requestPath = '/api/v2/alerting/userpresence/rules/{ruleId}';
    var requestQuery = {};
    var requestBody;

    if(ruleId === undefined || ruleId === null){
      throw new Error('Missing required  parameter: ruleId');
    }
    requestPath = requestPath.replace('{ruleId}', ruleId);
    requestQuery["expand"] = expand;
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a user presence rule.
  * @memberOf AlertingApi
  * @instance
  * @param {string} ruleId - Rule ID
  */
AlertingApi.prototype.deleteUserpresenceRulesRuleId = function deleteUserpresenceRulesRuleId(ruleId){
    var requestPath = '/api/v2/alerting/userpresence/rules/{ruleId}';
    var requestQuery = {};
    var requestBody;

    if(ruleId === undefined || ruleId === null){
      throw new Error('Missing required  parameter: ruleId');
    }
    requestPath = requestPath.replace('{ruleId}', ruleId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get user presence alert list.
  * @memberOf AlertingApi
  * @instance
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers, presenceUser
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
AlertingApi.prototype.getUserpresenceAlerts = function getUserpresenceAlerts(expand){
    var requestPath = '/api/v2/alerting/userpresence/alerts';
    var requestQuery = {};
    var requestBody;

    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a user presence alert
  * @memberOf AlertingApi
  * @instance
  * @param {string} alertId - Alert ID
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers, presenceUser
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "presenceUser": {
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
   "presenceType": "",
   "presenceValue": "",
   "presenceLimitInSeconds": 0,
   "ruleId": "",
   "startDate": "",
   "endDate": "",
   "notificationUsers": [],
   "alertTypes": [],
   "ruleUri": "",
   "selfUri": ""
}
  */
AlertingApi.prototype.getUserpresenceAlertsAlertId = function getUserpresenceAlertsAlertId(alertId, expand){
    var requestPath = '/api/v2/alerting/userpresence/alerts/{alertId}';
    var requestQuery = {};
    var requestBody;

    if(alertId === undefined || alertId === null){
      throw new Error('Missing required  parameter: alertId');
    }
    requestPath = requestPath.replace('{alertId}', alertId);
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a user presence alert
  * @memberOf AlertingApi
  * @instance
  * @param {string} alertId - Alert ID
  */
AlertingApi.prototype.deleteUserpresenceAlertsAlertId = function deleteUserpresenceAlertsAlertId(alertId){
    var requestPath = '/api/v2/alerting/userpresence/alerts/{alertId}';
    var requestQuery = {};
    var requestBody;

    if(alertId === undefined || alertId === null){
      throw new Error('Missing required  parameter: alertId');
    }
    requestPath = requestPath.replace('{alertId}', alertId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a heart beat rule.
  * @memberOf AlertingApi
  * @instance
  * @param {string} ruleId - Rule ID
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "senderId": "",
   "heartBeatTimeoutInMinutes": 0,
   "enabled": true,
   "inAlarm": true,
   "notificationUsers": [],
   "alertTypes": [],
   "ruleType": "",
   "selfUri": ""
}
  */
AlertingApi.prototype.getHeartbeatRulesRuleId = function getHeartbeatRulesRuleId(ruleId, expand){
    var requestPath = '/api/v2/alerting/heartbeat/rules/{ruleId}';
    var requestQuery = {};
    var requestBody;

    if(ruleId === undefined || ruleId === null){
      throw new Error('Missing required  parameter: ruleId');
    }
    requestPath = requestPath.replace('{ruleId}', ruleId);
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a heart beat rule
  * @memberOf AlertingApi
  * @instance
  * @param {string} ruleId - Rule ID
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers
  * @param {} body - HeartBeatRule
  * @example
  * Body Example:
  * {
   "name": "",
   "senderId": "",
   "heartBeatTimeoutInMinutes": 0,
   "enabled": true,
   "notificationUsers": [],
   "alertTypes": [],
   "ruleType": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "senderId": "",
   "heartBeatTimeoutInMinutes": 0,
   "enabled": true,
   "inAlarm": true,
   "notificationUsers": [],
   "alertTypes": [],
   "ruleType": "",
   "selfUri": ""
}
  */
AlertingApi.prototype.putHeartbeatRulesRuleId = function putHeartbeatRulesRuleId(ruleId, expand, body){
    var requestPath = '/api/v2/alerting/heartbeat/rules/{ruleId}';
    var requestQuery = {};
    var requestBody;

    if(ruleId === undefined || ruleId === null){
      throw new Error('Missing required  parameter: ruleId');
    }
    requestPath = requestPath.replace('{ruleId}', ruleId);
    requestQuery["expand"] = expand;
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a heart beat rule.
  * @memberOf AlertingApi
  * @instance
  * @param {string} ruleId - Rule ID
  */
AlertingApi.prototype.deleteHeartbeatRulesRuleId = function deleteHeartbeatRulesRuleId(ruleId){
    var requestPath = '/api/v2/alerting/heartbeat/rules/{ruleId}';
    var requestQuery = {};
    var requestBody;

    if(ruleId === undefined || ruleId === null){
      throw new Error('Missing required  parameter: ruleId');
    }
    requestPath = requestPath.replace('{ruleId}', ruleId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get an interaction stats alert
  * @memberOf AlertingApi
  * @instance
  * @param {string} alertId - Alert ID
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dimension": "",
   "dimensionValue": "",
   "metric": "",
   "mediaType": "",
   "numericRange": "",
   "statistic": "",
   "value": {},
   "ruleId": "",
   "unread": true,
   "startDate": "",
   "endDate": "",
   "notificationUsers": [],
   "alertTypes": [],
   "ruleUri": "",
   "selfUri": ""
}
  */
AlertingApi.prototype.getInteractionstatsAlertsAlertId = function getInteractionstatsAlertsAlertId(alertId, expand){
    var requestPath = '/api/v2/alerting/interactionstats/alerts/{alertId}';
    var requestQuery = {};
    var requestBody;

    if(alertId === undefined || alertId === null){
      throw new Error('Missing required  parameter: alertId');
    }
    requestPath = requestPath.replace('{alertId}', alertId);
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an interaction stats alert read status
  * @memberOf AlertingApi
  * @instance
  * @param {string} alertId - Alert ID
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers
  * @param {} body - InteractionStatsAlert
  * @example
  * Body Example:
  * {
   "unread": true
}
  * @example
  * 200 Response Example:
  * {
   "unread": true
}
  */
AlertingApi.prototype.putInteractionstatsAlertsAlertId = function putInteractionstatsAlertsAlertId(alertId, expand, body){
    var requestPath = '/api/v2/alerting/interactionstats/alerts/{alertId}';
    var requestQuery = {};
    var requestBody;

    if(alertId === undefined || alertId === null){
      throw new Error('Missing required  parameter: alertId');
    }
    requestPath = requestPath.replace('{alertId}', alertId);
    requestQuery["expand"] = expand;
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an interaction stats alert
  * @memberOf AlertingApi
  * @instance
  * @param {string} alertId - Alert ID
  */
AlertingApi.prototype.deleteInteractionstatsAlertsAlertId = function deleteInteractionstatsAlertsAlertId(alertId){
    var requestPath = '/api/v2/alerting/interactionstats/alerts/{alertId}';
    var requestQuery = {};
    var requestBody;

    if(alertId === undefined || alertId === null){
      throw new Error('Missing required  parameter: alertId');
    }
    requestPath = requestPath.replace('{alertId}', alertId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get interaction stats alert list.
  * @memberOf AlertingApi
  * @instance
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers
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
AlertingApi.prototype.getInteractionstatsAlerts = function getInteractionstatsAlerts(expand){
    var requestPath = '/api/v2/alerting/interactionstats/alerts';
    var requestQuery = {};
    var requestBody;

    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a heart beat rule list.
  * @memberOf AlertingApi
  * @instance
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers
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
AlertingApi.prototype.getHeartbeatRules = function getHeartbeatRules(expand){
    var requestPath = '/api/v2/alerting/heartbeat/rules';
    var requestQuery = {};
    var requestBody;

    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a heart beat rule.
  * @memberOf AlertingApi
  * @instance
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers
  * @param {} body - HeartBeatRule
  * @example
  * Body Example:
  * {
   "name": "",
   "senderId": "",
   "heartBeatTimeoutInMinutes": 0,
   "enabled": true,
   "notificationUsers": [],
   "alertTypes": [],
   "ruleType": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "senderId": "",
   "heartBeatTimeoutInMinutes": 0,
   "enabled": true,
   "inAlarm": true,
   "notificationUsers": [],
   "alertTypes": [],
   "ruleType": "",
   "selfUri": ""
}
  */
AlertingApi.prototype.postHeartbeatRules = function postHeartbeatRules(expand, body){
    var requestPath = '/api/v2/alerting/heartbeat/rules';
    var requestQuery = {};
    var requestBody;

    requestQuery["expand"] = expand;
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get heart beat alert list.
  * @memberOf AlertingApi
  * @instance
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers
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
AlertingApi.prototype.getHeartbeatAlerts = function getHeartbeatAlerts(expand){
    var requestPath = '/api/v2/alerting/heartbeat/alerts';
    var requestQuery = {};
    var requestBody;

    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a heart beat alert
  * @memberOf AlertingApi
  * @instance
  * @param {string} alertId - Alert ID
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "senderId": "",
   "heartBeatTimeoutInMinutes": 0,
   "ruleId": "",
   "startDate": "",
   "endDate": "",
   "notificationUsers": [],
   "alertTypes": [],
   "ruleType": "",
   "ruleUri": "",
   "selfUri": ""
}
  */
AlertingApi.prototype.getHeartbeatAlertsAlertId = function getHeartbeatAlertsAlertId(alertId, expand){
    var requestPath = '/api/v2/alerting/heartbeat/alerts/{alertId}';
    var requestQuery = {};
    var requestBody;

    if(alertId === undefined || alertId === null){
      throw new Error('Missing required  parameter: alertId');
    }
    requestPath = requestPath.replace('{alertId}', alertId);
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a heart beat alert
  * @memberOf AlertingApi
  * @instance
  * @param {string} alertId - Alert ID
  */
AlertingApi.prototype.deleteHeartbeatAlertsAlertId = function deleteHeartbeatAlertsAlertId(alertId){
    var requestPath = '/api/v2/alerting/heartbeat/alerts/{alertId}';
    var requestQuery = {};
    var requestBody;

    if(alertId === undefined || alertId === null){
      throw new Error('Missing required  parameter: alertId');
    }
    requestPath = requestPath.replace('{alertId}', alertId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a user presence rule list.
  * @memberOf AlertingApi
  * @instance
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers, presenceUser
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
AlertingApi.prototype.getUserpresenceRules = function getUserpresenceRules(expand){
    var requestPath = '/api/v2/alerting/userpresence/rules';
    var requestQuery = {};
    var requestBody;

    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a user presence rule.
  * @memberOf AlertingApi
  * @instance
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers, presenceUser
  * @param {} body - UserPresenceRule
  * @example
  * Body Example:
  * {
   "name": "",
   "presenceUser": {
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
   "presenceType": "",
   "presenceValue": "",
   "presenceLimitInSeconds": 0,
   "enabled": true,
   "notificationUsers": [],
   "alertTypes": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "presenceUser": {
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
   "presenceType": "",
   "presenceValue": "",
   "presenceLimitInSeconds": 0,
   "enabled": true,
   "inAlarm": true,
   "notificationUsers": [],
   "alertTypes": [],
   "selfUri": ""
}
  */
AlertingApi.prototype.postUserpresenceRules = function postUserpresenceRules(expand, body){
    var requestPath = '/api/v2/alerting/userpresence/rules';
    var requestQuery = {};
    var requestBody;

    requestQuery["expand"] = expand;
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Gets user unread count of interaction stats alerts.
  * @memberOf AlertingApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "count": 0
}
  */
AlertingApi.prototype.getInteractionstatsAlertsUnread = function getInteractionstatsAlertsUnread(){
    var requestPath = '/api/v2/alerting/interactionstats/alerts/unread';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a routing status alert
  * @memberOf AlertingApi
  * @instance
  * @param {string} alertId - Alert ID
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers, agent
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "agent": {
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
   "routingStatus": "",
   "routingLimitInSeconds": 0,
   "ruleId": "",
   "startDate": "",
   "endDate": "",
   "notificationUsers": [],
   "alertTypes": [],
   "selfUri": ""
}
  */
AlertingApi.prototype.getRoutingstatusAlertsAlertId = function getRoutingstatusAlertsAlertId(alertId, expand){
    var requestPath = '/api/v2/alerting/routingstatus/alerts/{alertId}';
    var requestQuery = {};
    var requestBody;

    if(alertId === undefined || alertId === null){
      throw new Error('Missing required  parameter: alertId');
    }
    requestPath = requestPath.replace('{alertId}', alertId);
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a routing status alert
  * @memberOf AlertingApi
  * @instance
  * @param {string} alertId - Alert ID
  */
AlertingApi.prototype.deleteRoutingstatusAlertsAlertId = function deleteRoutingstatusAlertsAlertId(alertId){
    var requestPath = '/api/v2/alerting/routingstatus/alerts/{alertId}';
    var requestQuery = {};
    var requestBody;

    if(alertId === undefined || alertId === null){
      throw new Error('Missing required  parameter: alertId');
    }
    requestPath = requestPath.replace('{alertId}', alertId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a routing status rule list.
  * @memberOf AlertingApi
  * @instance
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers, agent
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
AlertingApi.prototype.getRoutingstatusRules = function getRoutingstatusRules(expand){
    var requestPath = '/api/v2/alerting/routingstatus/rules';
    var requestQuery = {};
    var requestBody;

    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a routing status rule.
  * @memberOf AlertingApi
  * @instance
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers, agent
  * @param {} body - RoutingStatusRule
  * @example
  * Body Example:
  * {
   "name": "",
   "agent": {
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
   "routingStatus": "",
   "routingLimitInSeconds": 0,
   "enabled": true,
   "notificationUsers": [],
   "alertTypes": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "agent": {
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
   "routingStatus": "",
   "routingLimitInSeconds": 0,
   "enabled": true,
   "inAlarm": true,
   "notificationUsers": [],
   "alertTypes": [],
   "selfUri": ""
}
  */
AlertingApi.prototype.postRoutingstatusRules = function postRoutingstatusRules(expand, body){
    var requestPath = '/api/v2/alerting/routingstatus/rules';
    var requestQuery = {};
    var requestBody;

    requestQuery["expand"] = expand;
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a routing status rule.
  * @memberOf AlertingApi
  * @instance
  * @param {string} ruleId - Rule ID
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers, agent
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "agent": {
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
   "routingStatus": "",
   "routingLimitInSeconds": 0,
   "enabled": true,
   "inAlarm": true,
   "notificationUsers": [],
   "alertTypes": [],
   "selfUri": ""
}
  */
AlertingApi.prototype.getRoutingstatusRulesRuleId = function getRoutingstatusRulesRuleId(ruleId, expand){
    var requestPath = '/api/v2/alerting/routingstatus/rules/{ruleId}';
    var requestQuery = {};
    var requestBody;

    if(ruleId === undefined || ruleId === null){
      throw new Error('Missing required  parameter: ruleId');
    }
    requestPath = requestPath.replace('{ruleId}', ruleId);
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a routing status rule
  * @memberOf AlertingApi
  * @instance
  * @param {string} ruleId - Rule ID
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers, agent
  * @param {} body - RoutingStatusRule
  * @example
  * Body Example:
  * {
   "name": "",
   "agent": {
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
   "routingStatus": "",
   "routingLimitInSeconds": 0,
   "enabled": true,
   "notificationUsers": [],
   "alertTypes": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "agent": {
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
   "routingStatus": "",
   "routingLimitInSeconds": 0,
   "enabled": true,
   "inAlarm": true,
   "notificationUsers": [],
   "alertTypes": [],
   "selfUri": ""
}
  */
AlertingApi.prototype.putRoutingstatusRulesRuleId = function putRoutingstatusRulesRuleId(ruleId, expand, body){
    var requestPath = '/api/v2/alerting/routingstatus/rules/{ruleId}';
    var requestQuery = {};
    var requestBody;

    if(ruleId === undefined || ruleId === null){
      throw new Error('Missing required  parameter: ruleId');
    }
    requestPath = requestPath.replace('{ruleId}', ruleId);
    requestQuery["expand"] = expand;
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a routing status rule.
  * @memberOf AlertingApi
  * @instance
  * @param {string} ruleId - Rule ID
  */
AlertingApi.prototype.deleteRoutingstatusRulesRuleId = function deleteRoutingstatusRulesRuleId(ruleId){
    var requestPath = '/api/v2/alerting/routingstatus/rules/{ruleId}';
    var requestQuery = {};
    var requestBody;

    if(ruleId === undefined || ruleId === null){
      throw new Error('Missing required  parameter: ruleId');
    }
    requestPath = requestPath.replace('{ruleId}', ruleId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get an interaction stats rule.
  * @memberOf AlertingApi
  * @instance
  * @param {string} ruleId - Rule ID
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dimension": "",
   "dimensionValue": "",
   "metric": "",
   "mediaType": "",
   "numericRange": "",
   "statistic": "",
   "value": {},
   "enabled": true,
   "inAlarm": true,
   "notificationUsers": [],
   "alertTypes": [],
   "selfUri": ""
}
  */
AlertingApi.prototype.getInteractionstatsRulesRuleId = function getInteractionstatsRulesRuleId(ruleId, expand){
    var requestPath = '/api/v2/alerting/interactionstats/rules/{ruleId}';
    var requestQuery = {};
    var requestBody;

    if(ruleId === undefined || ruleId === null){
      throw new Error('Missing required  parameter: ruleId');
    }
    requestPath = requestPath.replace('{ruleId}', ruleId);
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an interaction stats rule
  * @memberOf AlertingApi
  * @instance
  * @param {string} ruleId - Rule ID
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers
  * @param {} body - AlertingRule
  * @example
  * Body Example:
  * {
   "name": "",
   "dimension": "",
   "dimensionValue": "",
   "metric": "",
   "mediaType": "",
   "numericRange": "",
   "statistic": "",
   "value": {},
   "enabled": true,
   "notificationUsers": [],
   "alertTypes": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dimension": "",
   "dimensionValue": "",
   "metric": "",
   "mediaType": "",
   "numericRange": "",
   "statistic": "",
   "value": {},
   "enabled": true,
   "inAlarm": true,
   "notificationUsers": [],
   "alertTypes": [],
   "selfUri": ""
}
  */
AlertingApi.prototype.putInteractionstatsRulesRuleId = function putInteractionstatsRulesRuleId(ruleId, expand, body){
    var requestPath = '/api/v2/alerting/interactionstats/rules/{ruleId}';
    var requestQuery = {};
    var requestBody;

    if(ruleId === undefined || ruleId === null){
      throw new Error('Missing required  parameter: ruleId');
    }
    requestPath = requestPath.replace('{ruleId}', ruleId);
    requestQuery["expand"] = expand;
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an interaction stats rule.
  * @memberOf AlertingApi
  * @instance
  * @param {string} ruleId - Rule ID
  */
AlertingApi.prototype.deleteInteractionstatsRulesRuleId = function deleteInteractionstatsRulesRuleId(ruleId){
    var requestPath = '/api/v2/alerting/interactionstats/rules/{ruleId}';
    var requestQuery = {};
    var requestBody;

    if(ruleId === undefined || ruleId === null){
      throw new Error('Missing required  parameter: ruleId');
    }
    requestPath = requestPath.replace('{ruleId}', ruleId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get an interaction stats rule list.
  * @memberOf AlertingApi
  * @instance
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers
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
AlertingApi.prototype.getInteractionstatsRules = function getInteractionstatsRules(expand){
    var requestPath = '/api/v2/alerting/interactionstats/rules';
    var requestQuery = {};
    var requestBody;

    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create an interaction stats rule.
  * @memberOf AlertingApi
  * @instance
  * @param {array} expand - Which fields, if any, to expand Valid Values: notificationUsers
  * @param {} body - AlertingRule
  * @example
  * Body Example:
  * {
   "name": "",
   "dimension": "",
   "dimensionValue": "",
   "metric": "",
   "mediaType": "",
   "numericRange": "",
   "statistic": "",
   "value": {},
   "enabled": true,
   "notificationUsers": [],
   "alertTypes": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dimension": "",
   "dimensionValue": "",
   "metric": "",
   "mediaType": "",
   "numericRange": "",
   "statistic": "",
   "value": {},
   "enabled": true,
   "inAlarm": true,
   "notificationUsers": [],
   "alertTypes": [],
   "selfUri": ""
}
  */
AlertingApi.prototype.postInteractionstatsRules = function postInteractionstatsRules(expand, body){
    var requestPath = '/api/v2/alerting/interactionstats/rules';
    var requestQuery = {};
    var requestBody;

    requestQuery["expand"] = expand;
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};


module.exports = AlertingApi;
