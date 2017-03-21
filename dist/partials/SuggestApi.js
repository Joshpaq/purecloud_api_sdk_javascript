/*jshint -W069 */
/**
* @class SuggestApi
* @example
* var api = new purecloud.platform.SuggestApi(pureCloudSession);
*/
function SuggestApi(session) {
    if(!(this instanceof SuggestApi)) {
        return new SuggestApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('SuggestApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Search using the q64 value returned from a previous search.
  * @memberOf SuggestApi
  * @instance
  * @param {string} q64 - q64
  * @param {array} expand - Which fields, if any, to expand Valid Values: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, profileSkills, locations, groupMemberships, callerUser.routingStatus, callerUser.primaryPresence, callerUser.conversationSummary, callerUser.outOfOffice, callerUser.geolocation
  * @param {boolean} profile - profile
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
   "results": {
      "array": true,
      "null": true,
      "nodeType": "",
      "float": true,
      "boolean": true,
      "number": true,
      "object": true,
      "missingNode": true,
      "pojo": true,
      "integralNumber": true,
      "floatingPointNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "binary": true,
      "valueNode": true,
      "containerNode": true
   },
   "aggregations": {
      "array": true,
      "null": true,
      "nodeType": "",
      "float": true,
      "boolean": true,
      "number": true,
      "object": true,
      "missingNode": true,
      "pojo": true,
      "integralNumber": true,
      "floatingPointNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "binary": true,
      "valueNode": true,
      "containerNode": true
   }
}
  */
SuggestApi.prototype.getSearch = function getSearch(q64, expand, profile){
    var requestPath = '/api/v2/search';
    var requestQuery = {};
    var requestBody;

    if(q64 === undefined || q64 === null){
      throw new Error('Missing required  parameter: q64');
    }
    requestQuery["q64"] = q64;
    requestQuery["expand"] = expand;
    requestQuery["profile"] = profile;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search resources.
  * @memberOf SuggestApi
  * @instance
  * @param {} body - Search request options
  * @param {boolean} profile - profile
  * @example
  * Body Example:
  * {
   "sortOrder": "",
   "sortBy": "",
   "pageSize": 0,
   "pageNumber": 0,
   "returnFields": [],
   "expand": [],
   "types": [],
   "query": [],
   "aggregations": []
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
   "results": {
      "array": true,
      "null": true,
      "nodeType": "",
      "float": true,
      "boolean": true,
      "number": true,
      "object": true,
      "missingNode": true,
      "pojo": true,
      "integralNumber": true,
      "floatingPointNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "binary": true,
      "valueNode": true,
      "containerNode": true
   },
   "aggregations": {
      "array": true,
      "null": true,
      "nodeType": "",
      "float": true,
      "boolean": true,
      "number": true,
      "object": true,
      "missingNode": true,
      "pojo": true,
      "integralNumber": true,
      "floatingPointNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "binary": true,
      "valueNode": true,
      "containerNode": true
   }
}
  */
SuggestApi.prototype.postSearch = function postSearch(body, profile){
    var requestPath = '/api/v2/search';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery["profile"] = profile;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Suggest resources using the q64 value returned from a previous suggest query.
  * @memberOf SuggestApi
  * @instance
  * @param {string} q64 - q64
  * @param {array} expand - Which fields, if any, to expand Valid Values: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, profileSkills, locations, groupMemberships, callerUser.routingStatus, callerUser.primaryPresence, callerUser.conversationSummary, callerUser.outOfOffice, callerUser.geolocation
  * @param {boolean} profile - profile
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
   "results": {
      "array": true,
      "null": true,
      "nodeType": "",
      "float": true,
      "boolean": true,
      "number": true,
      "object": true,
      "missingNode": true,
      "pojo": true,
      "integralNumber": true,
      "floatingPointNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "binary": true,
      "valueNode": true,
      "containerNode": true
   },
   "aggregations": {
      "array": true,
      "null": true,
      "nodeType": "",
      "float": true,
      "boolean": true,
      "number": true,
      "object": true,
      "missingNode": true,
      "pojo": true,
      "integralNumber": true,
      "floatingPointNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "binary": true,
      "valueNode": true,
      "containerNode": true
   }
}
  */
SuggestApi.prototype.getSuggest = function getSuggest(q64, expand, profile){
    var requestPath = '/api/v2/search/suggest';
    var requestQuery = {};
    var requestBody;

    if(q64 === undefined || q64 === null){
      throw new Error('Missing required  parameter: q64');
    }
    requestQuery["q64"] = q64;
    requestQuery["expand"] = expand;
    requestQuery["profile"] = profile;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Suggest resources.
  * @memberOf SuggestApi
  * @instance
  * @param {} body - Search request options
  * @param {boolean} profile - profile
  * @example
  * Body Example:
  * {
   "expand": [],
   "types": [],
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
   "results": {
      "array": true,
      "null": true,
      "nodeType": "",
      "float": true,
      "boolean": true,
      "number": true,
      "object": true,
      "missingNode": true,
      "pojo": true,
      "integralNumber": true,
      "floatingPointNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "binary": true,
      "valueNode": true,
      "containerNode": true
   },
   "aggregations": {
      "array": true,
      "null": true,
      "nodeType": "",
      "float": true,
      "boolean": true,
      "number": true,
      "object": true,
      "missingNode": true,
      "pojo": true,
      "integralNumber": true,
      "floatingPointNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "binary": true,
      "valueNode": true,
      "containerNode": true
   }
}
  */
SuggestApi.prototype.postSuggest = function postSuggest(body, profile){
    var requestPath = '/api/v2/search/suggest';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery["profile"] = profile;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};


module.exports = SuggestApi;
