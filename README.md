---
title: Javascript SDK
---
Javascript wrapper around the PureCloud Platform API

[![GitHub release](https://img.shields.io/github/release/mypurecloud/purecloud_api_sdk_javascript.svg)]()
![Bower version](https://img.shields.io/bower/v/purecloud-api.svg)
[![npm](https://img.shields.io/npm/v/purecloud_api_sdk_javascript.svg)](https://www.npmjs.com/package/purecloud_api_sdk_javascript)

# Platform API Javascript Client

Install with [Bower](http://bower.io):

~~~sh
bower install purecloud-api
~~~

Install with [NPM](https://www.npmjs.com/package/purecloud_api_sdk_javascript):

~~~sh
npm install purecloud_api_sdk_javascript
~~~

Reference from the CDN:

~~~html
<!-- Replace `0.51.1` with the version you want to use. -->
<script src="https://sdk-cdn.mypurecloud.com/javascript/0.51.1/purecloud-api.min.js"></script>
~~~

View the documentation on the [PureCloud Developer Center](https://developer.mypurecloud.com/api/rest/client-libraries/javascript/latest/).
View the source code on [Github](https://github.com/MyPureCloud/purecloud_api_sdk_javascript).

# Usage

## Client-side usage

For convenience, all modules are bundled together.

~~~ html
<!-- Include the full library -->
<script type="text/javascript" src="purecloud-api.js"></script>

~~~

## NodeJS usage

Start by requireing the purecloud package

~~~ js
var purecloud = require('purecloud_api_sdk_javascript');
~~~

When using the sdk in the browser, the classes are all in the purecloud.platform namespace, but when using in Node, everything is just on that new purecloud object that was created from the require. Subsequent calls would look similar to this usage.

~~~ js
let session = purecloud.PureCloudSession({...});
let authApi = purecloud.AuthorizationApi(session);

session.login().then(function(){
    authApi.getRoles()
      .then((roles) => {
        ...
      });
});
~~~

## Authentication

Every module uses a ~PureCloudSession~ to make authenticated requests to the PureCloud API.

**Auth Type Restrictions!**

The **client-credentials** strategy only works when used in node.js. This is restricted intentionally because it is impossible for client credentials to be handled securely in a browser application.

The **implicit** strategy only works when used in a browser. This is because a node.js application does not have a browser interface to display the PureCloud login window.

~~~js
// Node.js - Client credentials strategy
var purecloud = require('purecloud_api_sdk_javascript');
var pureCloudSession = purecloud.PureCloudSession({
  strategy: 'client-credentials',
  clientId: yourPurecloudClientId,
  clientSecret: yourPurecloudSecretKey
});

// Browser - Implicit strategy
var pureCloudSession = purecloud.platform.PureCloudSession({
  strategy: 'implicit',
  clientId: yourClientId,
  redirectUrl: yourCallbackUrl
});

// Browser - Token strategy
var pureCloudSession = purecloud.platform.PureCloudSession({
  strategy: 'token',
  token: yourToken
});
~~~

After creating the session object, invoke the login method to authenticate with PureCloud.

~~~js
pureCloudSession.login()
  .then(function() {
    // Do authenticated things
  });
~~~

## Environments
If connecting to a PureCloud environment other than mypurecloud.com (e.g. mypurecloud.ie), set the ~environment~ in ~PureCloudSession~.

~~~js
var session = purecloud.platform.PureCloudSession({
  // ... your other settings
  environment: 'mypurecloud.ie'
});
~~~

## Local Storage
To persist a token across web pages when navigating between them, set the ~storageKey~ in ~PureCloudSession~.
~storageKey~ will be used to store the token in LocalStorage if supported so make it unique if multiple sessions may exist in the same page.

~~~js
var session = purecloud.platform.PureCloudSession({
  // ... your other settings
  storageKey: 'myAuthToken'
});
~~~

## Making Requests

All API requests return a Promise which resolves to the response body,
otherwise it rejects with an error.

~~~js
var session = purecloud.platform.PureCloudSession({ /* your settings */ });
pureCloudSession.login()
  .then(function(){
    var users = new purecloud.platform.UsersApi(session);
    users.getMe()
      .then(function(user) {
        // successfully got the user object, do something with it here
      })
      .catch(function(error) {
        // an error occurred getting the user object
      })
      .finally(function() {
        // this will be called for successes and failures
      });
});
~~~

### Error Responses

Error responses will contain an object with the HTTP status code, response headers, and the body of the error response.  e.g.

~~~ js
{
  "statusCode": 400,
  "headers": {
    "date": "Fri, 24 Feb 2017 16:36:21 GMT",
    "content-type": "application/json",
    "content-length": "135",
    "connection": "close",
    "inin-correlation-id": "391a2855-53ae-4f2b-bc9d-728ef989fd08",
    "inin-ratelimit-count": "1",
    "inin-ratelimit-allowed": "300",
    "inin-ratelimit-reset": "60",
    "cache-control": "no-cache, no-store, must-revalidate",
    "pragma": "no-cache",
    "expires": "0"
  },
  "body": {
    "status": 400,
    "code": "invalid.value",
    "message": "Value [] is not valid for field type [QueryFilterType]. Allowable values are: and, or"
  }
}
~~~

## Debug Logging

There are hooks to trace requests and responses.  To enable tracing, override the .debugLog method on the session object.

~~~js
pureCloudSession.debugLog = console.log;
~~~

## Proxy Support

If behind a corporate proxy, provide an ```options.proxy``` property when creating a session:

~~~js
var session = purecloud.PureCloudSession({proxy: 'http://my-corporate-proxy:1080'})
~~~
