/**
* @class
* @example
* var api = new GeolocationApi(pureCloudSession);
*/
function GeolocationApi(session) {
    if(!(this instanceof GeolocationApi)) {
        return new GeolocationApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('GeolocationApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get a organization's GeolocationSettings
  * @memberOf GeolocationApi#
  */
GeolocationApi.prototype.getSettings = function getSettings(){
    var requestPath = '/api/v2/geolocations/settings';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Patch a organization's GeolocationSettings
  * @memberOf GeolocationApi#
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "enabled": true
}
  */
GeolocationApi.prototype.patchSettings = function patchSettings(body){
    var requestPath = '/api/v2/geolocations/settings';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a user's Geolocation
  * @memberOf GeolocationApi#
  * @param {string} userId - user Id
  * @param {string} clientId - client Id
  */
GeolocationApi.prototype.getUserIdGeolocationsClientId = function getUserIdGeolocationsClientId(userId, clientId){
    var requestPath = '/api/v2/users/{userId}/geolocations/{clientId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(clientId === undefined || clientId === null){
      throw new Error('Missing required  parameter: clientId');
    }
    requestPath = requestPath.replace('{clientId}', clientId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Patch a user's Geolocation
  * @description The geolocation object can be patched one of three ways. Option 1: Set the 'primary' property to true. This will set the client as the user's primary geolocation source.  Option 2: Provide the 'latitude' and 'longitude' values.  This will enqueue an asynchronous update of the 'city', 'region', and 'country', generating a notification. A subsequent GET operation will include the new values for 'city', 'region' and 'country'.  Option 3:  Provide the 'city', 'region', 'country' values.  Option 1 can be combined with Option 2 or Option 3.  For example, update the client as primary and provide latitude and longitude values.
  * @memberOf GeolocationApi#
  * @param {string} userId - user Id
  * @param {string} clientId - client Id
  * @param {} body - The geolocation object can be patched one of three ways. Option 1: Set the 'primary' property to true. This will set the client as the user's primary geolocation source.  Option 2: Provide the 'latitude' and 'longitude' values.  This will enqueue an asynchronous update of the 'city', 'region', and 'country', generating a notification. A subsequent GET operation will include the new values for 'city', 'region' and 'country'.  Option 3:  Provide the 'city', 'region', 'country' values.  Option 1 can be combined with Option 2 or Option 3.  For example, update the client as primary and provide latitude and longitude values.
  * @example
  * Body Example:
  * {
   "name": "",
   "type": "",
   "primary": true,
   "latitude": {},
   "longitude": {},
   "country": "",
   "region": "",
   "city": ""
}
  */
GeolocationApi.prototype.patchUserIdGeolocationsClientId = function patchUserIdGeolocationsClientId(userId, clientId, body){
    var requestPath = '/api/v2/users/{userId}/geolocations/{clientId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(clientId === undefined || clientId === null){
      throw new Error('Missing required  parameter: clientId');
    }
    requestPath = requestPath.replace('{clientId}', clientId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};


