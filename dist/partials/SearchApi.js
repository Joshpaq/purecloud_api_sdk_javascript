/*jshint -W069 */
/**
* @class SearchApi
* @example
* var api = new purecloud.platform.SearchApi(pureCloudSession);
*/
function SearchApi(session) {
    if(!(this instanceof SearchApi)) {
        return new SearchApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('SearchApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Suggest resources using the q64 value returned from a previous suggest query.
  * @memberOf SearchApi
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
      "nodeType": "",
      "float": true,
      "object": true,
      "boolean": true,
      "number": true,
      "valueNode": true,
      "containerNode": true,
      "missingNode": true,
      "binary": true,
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
      "array": true,
      "null": true
   },
   "aggregations": {
      "nodeType": "",
      "float": true,
      "object": true,
      "boolean": true,
      "number": true,
      "valueNode": true,
      "containerNode": true,
      "missingNode": true,
      "binary": true,
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
      "array": true,
      "null": true
   }
}
  */
SearchApi.prototype.getSuggest = function getSuggest(q64, expand, profile){
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
  * @memberOf SearchApi
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
      "nodeType": "",
      "float": true,
      "object": true,
      "boolean": true,
      "number": true,
      "valueNode": true,
      "containerNode": true,
      "missingNode": true,
      "binary": true,
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
      "array": true,
      "null": true
   },
   "aggregations": {
      "nodeType": "",
      "float": true,
      "object": true,
      "boolean": true,
      "number": true,
      "valueNode": true,
      "containerNode": true,
      "missingNode": true,
      "binary": true,
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
      "array": true,
      "null": true
   }
}
  */
SearchApi.prototype.postSuggest = function postSuggest(body, profile){
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

/**
  * @summary Search using the q64 value returned from a previous search.
  * @memberOf SearchApi
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
      "nodeType": "",
      "float": true,
      "object": true,
      "boolean": true,
      "number": true,
      "valueNode": true,
      "containerNode": true,
      "missingNode": true,
      "binary": true,
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
      "array": true,
      "null": true
   },
   "aggregations": {
      "nodeType": "",
      "float": true,
      "object": true,
      "boolean": true,
      "number": true,
      "valueNode": true,
      "containerNode": true,
      "missingNode": true,
      "binary": true,
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
      "array": true,
      "null": true
   }
}
  */
SearchApi.prototype.getSearch = function getSearch(q64, expand, profile){
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
  * @memberOf SearchApi
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
      "nodeType": "",
      "float": true,
      "object": true,
      "boolean": true,
      "number": true,
      "valueNode": true,
      "containerNode": true,
      "missingNode": true,
      "binary": true,
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
      "array": true,
      "null": true
   },
   "aggregations": {
      "nodeType": "",
      "float": true,
      "object": true,
      "boolean": true,
      "number": true,
      "valueNode": true,
      "containerNode": true,
      "missingNode": true,
      "binary": true,
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
      "array": true,
      "null": true
   }
}
  */
SearchApi.prototype.postSearch = function postSearch(body, profile){
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
  * @summary Search voicemails using the q64 value returned from a previous search
  * @memberOf SearchApi
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
SearchApi.prototype.getSearch = function getSearch(q64, expand){
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
  * @memberOf SearchApi
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
SearchApi.prototype.postSearch = function postSearch(body){
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
  * @summary Search documentation using the q64 value returned from a previous search
  * @memberOf SearchApi
  * @instance
  * @param {string} q64 - q64
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
SearchApi.prototype.getSearch = function getSearch(q64){
    var requestPath = '/api/v2/documentation/search';
    var requestQuery = {};
    var requestBody;

    if(q64 === undefined || q64 === null){
      throw new Error('Missing required  parameter: q64');
    }
    requestQuery["q64"] = q64;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search documentation
  * @memberOf SearchApi
  * @instance
  * @param {} body - Search request options
  * @example
  * Body Example:
  * {
   "sortOrder": "",
   "sortBy": "",
   "pageSize": 0,
   "pageNumber": 0,
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
SearchApi.prototype.postSearch = function postSearch(body){
    var requestPath = '/api/v2/documentation/search';
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
  * @summary Search groups using the q64 value returned from a previous search
  * @memberOf SearchApi
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
SearchApi.prototype.getSearch = function getSearch(q64, expand){
    var requestPath = '/api/v2/groups/search';
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
  * @summary Search groups
  * @memberOf SearchApi
  * @instance
  * @param {} body - Search request options
  * @example
  * Body Example:
  * {
   "sortOrder": "",
   "sortBy": "",
   "pageSize": 0,
   "pageNumber": 0,
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
SearchApi.prototype.postSearch = function postSearch(body){
    var requestPath = '/api/v2/groups/search';
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
  * @summary Search users using the q64 value returned from a previous search
  * @memberOf SearchApi
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
SearchApi.prototype.getSearch = function getSearch(q64, expand){
    var requestPath = '/api/v2/users/search';
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
  * @summary Search users
  * @memberOf SearchApi
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
SearchApi.prototype.postSearch = function postSearch(body){
    var requestPath = '/api/v2/users/search';
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
  * @summary Search locations using the q64 value returned from a previous search
  * @memberOf SearchApi
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
SearchApi.prototype.getSearch = function getSearch(q64, expand){
    var requestPath = '/api/v2/locations/search';
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
  * @summary Search locations
  * @memberOf SearchApi
  * @instance
  * @param {} body - Search request options
  * @example
  * Body Example:
  * {
   "sortOrder": "",
   "sortBy": "",
   "pageSize": 0,
   "pageNumber": 0,
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
SearchApi.prototype.postSearch = function postSearch(body){
    var requestPath = '/api/v2/locations/search';
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


module.exports = SearchApi;
