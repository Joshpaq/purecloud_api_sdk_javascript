/*jshint -W069 */
/**
* @class NotificationsApi
* @example
* var api = new purecloud.platform.NotificationsApi(pureCloudSession);
*/
function NotificationsApi(session) {
    if(!(this instanceof NotificationsApi)) {
        return new NotificationsApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('NotificationsApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary The list of all subscriptions for this channel
  * @memberOf NotificationsApi
  * @instance
  * @param {string} channelId - Channel ID
  * @example
  * 200 Response Example:
  * {
   "entities": []
}
  */
NotificationsApi.prototype.getChannelsChannelIdSubscriptions = function getChannelsChannelIdSubscriptions(channelId){
    var requestPath = '/api/v2/notifications/channels/{channelId}/subscriptions';
    var requestQuery = {};
    var requestBody;

    if(channelId === undefined || channelId === null){
      throw new Error('Missing required  parameter: channelId');
    }
    requestPath = requestPath.replace('{channelId}', channelId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Add a list of subscriptions to the existing list of subscriptions
  * @memberOf NotificationsApi
  * @instance
  * @param {string} channelId - Channel ID
  * @param {} body - Body
  * @example
  * Body Example:
  * [
 {
  "id": ""
 }
]
  * @example
  * 200 Response Example:
  * {
   "entities": []
}
  */
NotificationsApi.prototype.postChannelsChannelIdSubscriptions = function postChannelsChannelIdSubscriptions(channelId, body){
    var requestPath = '/api/v2/notifications/channels/{channelId}/subscriptions';
    var requestQuery = {};
    var requestBody;

    if(channelId === undefined || channelId === null){
      throw new Error('Missing required  parameter: channelId');
    }
    requestPath = requestPath.replace('{channelId}', channelId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Replace the current list of subscriptions with a new list.
  * @memberOf NotificationsApi
  * @instance
  * @param {string} channelId - Channel ID
  * @param {} body - Body
  * @example
  * Body Example:
  * [
 {
  "id": ""
 }
]
  * @example
  * 200 Response Example:
  * {
   "entities": []
}
  */
NotificationsApi.prototype.putChannelsChannelIdSubscriptions = function putChannelsChannelIdSubscriptions(channelId, body){
    var requestPath = '/api/v2/notifications/channels/{channelId}/subscriptions';
    var requestQuery = {};
    var requestBody;

    if(channelId === undefined || channelId === null){
      throw new Error('Missing required  parameter: channelId');
    }
    requestPath = requestPath.replace('{channelId}', channelId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Remove all subscriptions
  * @memberOf NotificationsApi
  * @instance
  * @param {string} channelId - Channel ID
  */
NotificationsApi.prototype.deleteChannelsChannelIdSubscriptions = function deleteChannelsChannelIdSubscriptions(channelId){
    var requestPath = '/api/v2/notifications/channels/{channelId}/subscriptions';
    var requestQuery = {};
    var requestBody;

    if(channelId === undefined || channelId === null){
      throw new Error('Missing required  parameter: channelId');
    }
    requestPath = requestPath.replace('{channelId}', channelId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get available notification topics.
  * @memberOf NotificationsApi
  * @instance
  * @param {array} expand - Which fields, if any, to expand Valid Values: description, requiresPermissions, schema
  * @example
  * 200 Response Example:
  * {
   "entities": []
}
  */
NotificationsApi.prototype.getAvailabletopics = function getAvailabletopics(expand){
    var requestPath = '/api/v2/notifications/availabletopics';
    var requestQuery = {};
    var requestBody;

    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary The list of existing channels
  * @memberOf NotificationsApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "entities": []
}
  */
NotificationsApi.prototype.getChannels = function getChannels(){
    var requestPath = '/api/v2/notifications/channels';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a new channel
  * @description There is a limit of 10 channels. Creating an 11th channel will remove the channel with oldest last used date.
  * @memberOf NotificationsApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "connectUri": "",
   "id": ""
}
  */
NotificationsApi.prototype.postChannels = function postChannels(){
    var requestPath = '/api/v2/notifications/channels';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};


module.exports = NotificationsApi;
