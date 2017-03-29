/*jshint -W069 */
/**
* @class StationsApi
* @example
* var api = new purecloud.platform.StationsApi(pureCloudSession);
*/
function StationsApi(session) {
    if(!(this instanceof StationsApi)) {
        return new StationsApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('StationsApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get station.
  * @memberOf StationsApi
  * @instance
  * @param {string} stationId - Station ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "description": "",
   "status": "",
   "userId": "",
   "primaryEdge": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "secondaryEdge": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "type": "",
   "lineAppearanceId": "",
   "selfUri": ""
}
  */
StationsApi.prototype.getStationId = function getStationId(stationId){
    var requestPath = '/api/v2/stations/{stationId}';
    var requestQuery = {};
    var requestBody;

    if(stationId === undefined || stationId === null){
      throw new Error('Missing required  parameter: stationId');
    }
    requestPath = requestPath.replace('{stationId}', stationId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Unassigns the user assigned to this station
  * @memberOf StationsApi
  * @instance
  * @param {string} stationId - Station ID
  */
StationsApi.prototype.deleteStationIdAssociateduser = function deleteStationIdAssociateduser(stationId){
    var requestPath = '/api/v2/stations/{stationId}/associateduser';
    var requestQuery = {};
    var requestBody;

    if(stationId === undefined || stationId === null){
      throw new Error('Missing required  parameter: stationId');
    }
    requestPath = requestPath.replace('{stationId}', stationId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of available stations.
  * @memberOf StationsApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortBy - Sort by
  * @param {string} name - Name
  * @param {string} id - Comma separated list of stationIds
  * @param {string} lineAppearanceId - lineAppearanceId
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
StationsApi.prototype.getStations = function getStations(pageSize, pageNumber, sortBy, name, id, lineAppearanceId){
    var requestPath = '/api/v2/stations';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["sortBy"] = sortBy;
    requestQuery["name"] = name;
    requestQuery["id"] = id;
    requestQuery["lineAppearanceId"] = lineAppearanceId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};


module.exports = StationsApi;
