/*jshint -W069 */
/**
* @class LocationsApi
* @example
* var api = new purecloud.platform.LocationsApi(pureCloudSession);
*/
function LocationsApi(session) {
    if(!(this instanceof LocationsApi)) {
        return new LocationsApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('LocationsApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get Location by ID.
  * @memberOf LocationsApi
  * @instance
  * @param {string} locationId - Location ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "address": {
      "city": "",
      "country": "",
      "countryName": "",
      "state": "",
      "street1": "",
      "street2": "",
      "zipcode": ""
   },
   "addressVerified": true,
   "emergencyNumber": {
      "e164": "",
      "number": "",
      "type": ""
   },
   "state": "",
   "version": 0,
   "path": [],
   "selfUri": ""
}
  */
LocationsApi.prototype.getLocationId = function getLocationId(locationId){
    var requestPath = '/api/v2/locations/{locationId}';
    var requestQuery = {};
    var requestBody;

    if(locationId === undefined || locationId === null){
      throw new Error('Missing required  parameter: locationId');
    }
    requestPath = requestPath.replace('{locationId}', locationId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search locations using the q64 value returned from a previous search
  * @memberOf LocationsApi
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
LocationsApi.prototype.getSearch = function getSearch(q64, expand){
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
  * @memberOf LocationsApi
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
LocationsApi.prototype.postSearch = function postSearch(body){
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

/**
  * @summary Get a list of all locations.
  * @memberOf LocationsApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortOrder - Sort order
  asc,
  desc,
  * @example
  * 200 Response Example:
  * [
 {
  "id": "",
  "name": "",
  "address": {
   "city": "",
   "country": "",
   "countryName": "",
   "state": "",
   "street1": "",
   "street2": "",
   "zipcode": ""
  },
  "addressVerified": true,
  "emergencyNumber": {
   "e164": "",
   "number": "",
   "type": ""
  },
  "state": "",
  "version": 0,
  "path": [],
  "selfUri": ""
 }
]
  */
LocationsApi.prototype.getLocations = function getLocations(pageSize, pageNumber, sortOrder){
    var requestPath = '/api/v2/locations';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["sortOrder"] = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};


module.exports = LocationsApi;
