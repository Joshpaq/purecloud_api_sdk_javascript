/*jshint -W069 */
/**
* @class AnalyticsApi
* @example
* var api = new purecloud.platform.AnalyticsApi(pureCloudSession);
*/
function AnalyticsApi(session) {
    if(!(this instanceof AnalyticsApi)) {
        return new AnalyticsApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('AnalyticsApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get most recently completed scheduled report job.
  * @memberOf AnalyticsApi
  * @instance
  * @param {string} scheduleId - Schedule ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "reportId": "",
   "runTime": "",
   "runStatus": "",
   "errorMessage": "",
   "runDurationMsec": 0,
   "reportUrl": "",
   "reportFormat": "",
   "scheduleUri": "",
   "selfUri": ""
}
  */
AnalyticsApi.prototype.getReportingSchedulesScheduleIdHistoryLatest = function getReportingSchedulesScheduleIdHistoryLatest(scheduleId){
    var requestPath = '/api/v2/analytics/reporting/schedules/{scheduleId}/history/latest';
    var requestQuery = {};
    var requestBody;

    if(scheduleId === undefined || scheduleId === null){
      throw new Error('Missing required  parameter: scheduleId');
    }
    requestPath = requestPath.replace('{scheduleId}', scheduleId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get list of completed scheduled report jobs.
  * @memberOf AnalyticsApi
  * @instance
  * @param {string} scheduleId - Schedule ID
  * @param {integer} pageNumber - 
  * @param {integer} pageSize - 
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
AnalyticsApi.prototype.getReportingSchedulesScheduleIdHistory = function getReportingSchedulesScheduleIdHistory(scheduleId, pageNumber, pageSize){
    var requestPath = '/api/v2/analytics/reporting/schedules/{scheduleId}/history';
    var requestQuery = {};
    var requestBody;

    if(scheduleId === undefined || scheduleId === null){
      throw new Error('Missing required  parameter: scheduleId');
    }
    requestPath = requestPath.replace('{scheduleId}', scheduleId);
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["pageSize"] = pageSize;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a scheduled report job.
  * @memberOf AnalyticsApi
  * @instance
  * @param {string} scheduleId - Schedule ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "quartzCronExpression": "",
   "nextFireTime": "",
   "dateCreated": "",
   "dateModified": "",
   "description": "",
   "timeZone": "",
   "timePeriod": "",
   "interval": "",
   "reportFormat": "",
   "locale": "",
   "enabled": true,
   "reportId": "",
   "parameters": {},
   "lastRun": {
      "id": "",
      "name": "",
      "reportId": "",
      "runTime": "",
      "runStatus": "",
      "errorMessage": "",
      "runDurationMsec": 0,
      "reportUrl": "",
      "reportFormat": "",
      "scheduleUri": "",
      "selfUri": ""
   },
   "selfUri": ""
}
  */
AnalyticsApi.prototype.getReportingSchedulesScheduleId = function getReportingSchedulesScheduleId(scheduleId){
    var requestPath = '/api/v2/analytics/reporting/schedules/{scheduleId}';
    var requestQuery = {};
    var requestBody;

    if(scheduleId === undefined || scheduleId === null){
      throw new Error('Missing required  parameter: scheduleId');
    }
    requestPath = requestPath.replace('{scheduleId}', scheduleId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a scheduled report job.
  * @memberOf AnalyticsApi
  * @instance
  * @param {string} scheduleId - Schedule ID
  * @param {} body - ReportSchedule
  * @example
  * Body Example:
  * {
   "name": "",
   "quartzCronExpression": "",
   "nextFireTime": "",
   "dateCreated": "",
   "dateModified": "",
   "description": "",
   "timeZone": "",
   "timePeriod": "",
   "interval": "",
   "reportFormat": "",
   "locale": "",
   "enabled": true,
   "reportId": "",
   "parameters": {},
   "lastRun": {
      "name": "",
      "reportId": "",
      "runTime": "",
      "runStatus": "",
      "errorMessage": "",
      "runDurationMsec": 0,
      "reportUrl": "",
      "reportFormat": "",
      "scheduleUri": ""
   }
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "quartzCronExpression": "",
   "nextFireTime": "",
   "dateCreated": "",
   "dateModified": "",
   "description": "",
   "timeZone": "",
   "timePeriod": "",
   "interval": "",
   "reportFormat": "",
   "locale": "",
   "enabled": true,
   "reportId": "",
   "parameters": {},
   "lastRun": {
      "id": "",
      "name": "",
      "reportId": "",
      "runTime": "",
      "runStatus": "",
      "errorMessage": "",
      "runDurationMsec": 0,
      "reportUrl": "",
      "reportFormat": "",
      "scheduleUri": "",
      "selfUri": ""
   },
   "selfUri": ""
}
  */
AnalyticsApi.prototype.putReportingSchedulesScheduleId = function putReportingSchedulesScheduleId(scheduleId, body){
    var requestPath = '/api/v2/analytics/reporting/schedules/{scheduleId}';
    var requestQuery = {};
    var requestBody;

    if(scheduleId === undefined || scheduleId === null){
      throw new Error('Missing required  parameter: scheduleId');
    }
    requestPath = requestPath.replace('{scheduleId}', scheduleId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a scheduled report job.
  * @memberOf AnalyticsApi
  * @instance
  * @param {string} scheduleId - Schedule ID
  */
AnalyticsApi.prototype.deleteReportingSchedulesScheduleId = function deleteReportingSchedulesScheduleId(scheduleId){
    var requestPath = '/api/v2/analytics/reporting/schedules/{scheduleId}';
    var requestQuery = {};
    var requestBody;

    if(scheduleId === undefined || scheduleId === null){
      throw new Error('Missing required  parameter: scheduleId');
    }
    requestPath = requestPath.replace('{scheduleId}', scheduleId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of report formats
  * @description Get a list of report formats.
  * @memberOf AnalyticsApi
  * @instance
  */
AnalyticsApi.prototype.getReportingReportformats = function getReportingReportformats(){
    var requestPath = '/api/v2/analytics/reporting/reportformats';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary A completed scheduled report job
  * @description A completed scheduled report job.
  * @memberOf AnalyticsApi
  * @instance
  * @param {string} runId - Run ID
  * @param {string} scheduleId - Schedule ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "reportId": "",
   "runTime": "",
   "runStatus": "",
   "errorMessage": "",
   "runDurationMsec": 0,
   "reportUrl": "",
   "reportFormat": "",
   "scheduleUri": "",
   "selfUri": ""
}
  */
AnalyticsApi.prototype.getReportingSchedulesScheduleIdHistoryRunId = function getReportingSchedulesScheduleIdHistoryRunId(runId, scheduleId){
    var requestPath = '/api/v2/analytics/reporting/schedules/{scheduleId}/history/{runId}';
    var requestQuery = {};
    var requestBody;

    if(runId === undefined || runId === null){
      throw new Error('Missing required  parameter: runId');
    }
    requestPath = requestPath.replace('{runId}', runId);
    if(scheduleId === undefined || scheduleId === null){
      throw new Error('Missing required  parameter: scheduleId');
    }
    requestPath = requestPath.replace('{scheduleId}', scheduleId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Place a scheduled report immediately into the reporting queue
  * @memberOf AnalyticsApi
  * @instance
  * @param {string} scheduleId - Schedule ID
  */
AnalyticsApi.prototype.postReportingSchedulesScheduleIdRunreport = function postReportingSchedulesScheduleIdRunreport(scheduleId){
    var requestPath = '/api/v2/analytics/reporting/schedules/{scheduleId}/runreport';
    var requestQuery = {};
    var requestBody;

    if(scheduleId === undefined || scheduleId === null){
      throw new Error('Missing required  parameter: scheduleId');
    }
    requestPath = requestPath.replace('{scheduleId}', scheduleId);
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get list of reporting metadata.
  * @memberOf AnalyticsApi
  * @instance
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
  * @param {string} locale - Locale
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
AnalyticsApi.prototype.getReportingMetadata = function getReportingMetadata(pageNumber, pageSize, locale){
    var requestPath = '/api/v2/analytics/reporting/metadata';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageNumber"] = pageNumber;
    requestQuery["pageSize"] = pageSize;
    requestQuery["locale"] = locale;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a conversation by id
  * @memberOf AnalyticsApi
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
AnalyticsApi.prototype.getConversationsConversationIdDetails = function getConversationsConversationIdDetails(conversationId){
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
  * @memberOf AnalyticsApi
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
AnalyticsApi.prototype.postConversationsAggregatesQuery = function postConversationsAggregatesQuery(body){
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
  * @memberOf AnalyticsApi
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
AnalyticsApi.prototype.postConversationsDetailsQuery = function postConversationsDetailsQuery(body){
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
  * @memberOf AnalyticsApi
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
AnalyticsApi.prototype.postConversationsConversationIdDetailsProperties = function postConversationsConversationIdDetailsProperties(conversationId, body){
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
  * @summary Get a list of scheduled report jobs
  * @description Get a list of scheduled report jobs.
  * @memberOf AnalyticsApi
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
   "selfUri": "",
   "firstUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
AnalyticsApi.prototype.getReportingSchedules = function getReportingSchedules(pageNumber, pageSize){
    var requestPath = '/api/v2/analytics/reporting/schedules';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageNumber"] = pageNumber;
    requestQuery["pageSize"] = pageSize;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a scheduled report job
  * @description Create a scheduled report job.
  * @memberOf AnalyticsApi
  * @instance
  * @param {} body - ReportSchedule
  * @example
  * Body Example:
  * {
   "name": "",
   "quartzCronExpression": "",
   "nextFireTime": "",
   "dateCreated": "",
   "dateModified": "",
   "description": "",
   "timeZone": "",
   "timePeriod": "",
   "interval": "",
   "reportFormat": "",
   "locale": "",
   "enabled": true,
   "reportId": "",
   "parameters": {},
   "lastRun": {
      "name": "",
      "reportId": "",
      "runTime": "",
      "runStatus": "",
      "errorMessage": "",
      "runDurationMsec": 0,
      "reportUrl": "",
      "reportFormat": "",
      "scheduleUri": ""
   }
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "quartzCronExpression": "",
   "nextFireTime": "",
   "dateCreated": "",
   "dateModified": "",
   "description": "",
   "timeZone": "",
   "timePeriod": "",
   "interval": "",
   "reportFormat": "",
   "locale": "",
   "enabled": true,
   "reportId": "",
   "parameters": {},
   "lastRun": {
      "id": "",
      "name": "",
      "reportId": "",
      "runTime": "",
      "runStatus": "",
      "errorMessage": "",
      "runDurationMsec": 0,
      "reportUrl": "",
      "reportFormat": "",
      "scheduleUri": "",
      "selfUri": ""
   },
   "selfUri": ""
}
  */
AnalyticsApi.prototype.postReportingSchedules = function postReportingSchedules(body){
    var requestPath = '/api/v2/analytics/reporting/schedules';
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
  * @summary Get a list of report time periods.
  * @memberOf AnalyticsApi
  * @instance
  */
AnalyticsApi.prototype.getReportingTimeperiods = function getReportingTimeperiods(){
    var requestPath = '/api/v2/analytics/reporting/timeperiods';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query for user observations
  * @memberOf AnalyticsApi
  * @instance
  * @param {} body - query
  * @example
  * Body Example:
  * {
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": []
}
  * @example
  * 200 Response Example:
  * {
   "results": []
}
  */
AnalyticsApi.prototype.postUsersObservationsQuery = function postUsersObservationsQuery(body){
    var requestPath = '/api/v2/analytics/users/observations/query';
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
  * @summary Query for user aggregates
  * @memberOf AnalyticsApi
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
   "systemToOrganizationMappings": {},
   "results": []
}
  */
AnalyticsApi.prototype.postUsersAggregatesQuery = function postUsersAggregatesQuery(body){
    var requestPath = '/api/v2/analytics/users/aggregates/query';
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
  * @summary Query for user details
  * @memberOf AnalyticsApi
  * @instance
  * @param {} body - query
  * @example
  * Body Example:
  * {
   "interval": "",
   "userFilters": [],
   "presenceFilters": [],
   "routingStatusFilters": [],
   "presenceAggregations": [],
   "routingStatusAggregations": [],
   "paging": {
      "pageSize": 0,
      "pageNumber": 0
   },
   "order": ""
}
  * @example
  * 200 Response Example:
  * {
   "userDetails": [],
   "aggregations": []
}
  */
AnalyticsApi.prototype.postUsersDetailsQuery = function postUsersDetailsQuery(body){
    var requestPath = '/api/v2/analytics/users/details/query';
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
  * @summary Query for queue observations
  * @memberOf AnalyticsApi
  * @instance
  * @param {} body - query
  * @example
  * Body Example:
  * {
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": []
}
  * @example
  * 200 Response Example:
  * {
   "systemToOrganizationMappings": {},
   "results": []
}
  */
AnalyticsApi.prototype.postQueuesObservationsQuery = function postQueuesObservationsQuery(body){
    var requestPath = '/api/v2/analytics/queues/observations/query';
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
  * @summary Query for evaluation aggregates
  * @memberOf AnalyticsApi
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
AnalyticsApi.prototype.postEvaluationsAggregatesQuery = function postEvaluationsAggregatesQuery(body){
    var requestPath = '/api/v2/analytics/evaluations/aggregates/query';
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
  * @summary Get a reporting metadata.
  * @memberOf AnalyticsApi
  * @instance
  * @param {string} reportId - Report ID
  * @param {string} locale - Locale
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "title": "",
   "description": "",
   "keywords": [],
   "availableLocales": [],
   "parameters": [],
   "exampleUrl": "",
   "selfUri": ""
}
  */
AnalyticsApi.prototype.getReportingReportIdMetadata = function getReportingReportIdMetadata(reportId, locale){
    var requestPath = '/api/v2/analytics/reporting/{reportId}/metadata';
    var requestQuery = {};
    var requestBody;

    if(reportId === undefined || reportId === null){
      throw new Error('Missing required  parameter: reportId');
    }
    requestPath = requestPath.replace('{reportId}', reportId);
    requestQuery["locale"] = locale;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};


module.exports = AnalyticsApi;
