/*jshint -W069 */
/**
* @class LanguagesApi
* @example
* var api = new purecloud.platform.LanguagesApi(pureCloudSession);
*/
function LanguagesApi(session) {
    if(!(this instanceof LanguagesApi)) {
        return new LanguagesApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('LanguagesApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get language (Deprecated)
  * @description This endpoint is deprecated. It has been moved to /routing/languages/{languageId}
  * @memberOf LanguagesApi
  * @instance
  * @param {string} languageId - Language ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateModified": "",
   "state": "",
   "version": "",
   "selfUri": ""
}
  */
LanguagesApi.prototype.getLanguageId = function getLanguageId(languageId){
    var requestPath = '/api/v2/languages/{languageId}';
    var requestQuery = {};
    var requestBody;

    if(languageId === undefined || languageId === null){
      throw new Error('Missing required  parameter: languageId');
    }
    requestPath = requestPath.replace('{languageId}', languageId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete Language (Deprecated)
  * @description This endpoint is deprecated. It has been moved to /routing/languages/{languageId}
  * @memberOf LanguagesApi
  * @instance
  * @param {string} languageId - Language ID
  */
LanguagesApi.prototype.deleteLanguageId = function deleteLanguageId(languageId){
    var requestPath = '/api/v2/languages/{languageId}';
    var requestQuery = {};
    var requestBody;

    if(languageId === undefined || languageId === null){
      throw new Error('Missing required  parameter: languageId');
    }
    requestPath = requestPath.replace('{languageId}', languageId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of supported languages. (Deprecated)
  * @description This endpoint is deprecated. It has been moved to /routing/languages
  * @memberOf LanguagesApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortOrder - Ascending or descending sort order
  ascending,
  descending,
  * @param {string} name - Name
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
LanguagesApi.prototype.getLanguages = function getLanguages(pageSize, pageNumber, sortOrder, name){
    var requestPath = '/api/v2/languages';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    requestQuery["sortOrder"] = sortOrder;
    requestQuery["name"] = name;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create Language (Deprecated)
  * @description This endpoint is deprecated. It has been moved to /routing/languages
  * @memberOf LanguagesApi
  * @instance
  * @param {} body - Language
  * @example
  * Body Example:
  * {
   "name": "",
   "dateModified": "",
   "state": "",
   "version": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateModified": "",
   "state": "",
   "version": "",
   "selfUri": ""
}
  */
LanguagesApi.prototype.postLanguages = function postLanguages(body){
    var requestPath = '/api/v2/languages';
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
  * @summary Get language
  * @memberOf LanguagesApi
  * @instance
  * @param {string} languageId - Language ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dateModified": "",
   "state": "",
   "version": "",
   "selfUri": ""
}
  */
LanguagesApi.prototype.getLanguagesLanguageId = function getLanguagesLanguageId(languageId){
    var requestPath = '/api/v2/routing/languages/{languageId}';
    var requestQuery = {};
    var requestBody;

    if(languageId === undefined || languageId === null){
      throw new Error('Missing required  parameter: languageId');
    }
    requestPath = requestPath.replace('{languageId}', languageId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete Language
  * @memberOf LanguagesApi
  * @instance
  * @param {string} languageId - Language ID
  */
LanguagesApi.prototype.deleteLanguagesLanguageId = function deleteLanguagesLanguageId(languageId){
    var requestPath = '/api/v2/routing/languages/{languageId}';
    var requestQuery = {};
    var requestBody;

    if(languageId === undefined || languageId === null){
      throw new Error('Missing required  parameter: languageId');
    }
    requestPath = requestPath.replace('{languageId}', languageId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the builtin translation for a language
  * @memberOf LanguagesApi
  * @instance
  * @param {string} language - The language of the builtin translation to retrieve
  */
LanguagesApi.prototype.getTranslationsBuiltin = function getTranslationsBuiltin(language){
    var requestPath = '/api/v2/languages/translations/builtin';
    var requestQuery = {};
    var requestBody;

    if(language === undefined || language === null){
      throw new Error('Missing required  parameter: language');
    }
    requestQuery["language"] = language;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get effective translation for an organization by language
  * @memberOf LanguagesApi
  * @instance
  * @param {string} language - The language of the translation to retrieve for the organization
  */
LanguagesApi.prototype.getTranslationsOrganization = function getTranslationsOrganization(language){
    var requestPath = '/api/v2/languages/translations/organization';
    var requestQuery = {};
    var requestBody;

    if(language === undefined || language === null){
      throw new Error('Missing required  parameter: language');
    }
    requestQuery["language"] = language;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get effective language translation for a user
  * @memberOf LanguagesApi
  * @instance
  * @param {string} userId - The user id
  */
LanguagesApi.prototype.getTranslationsUsersUserId = function getTranslationsUsersUserId(userId){
    var requestPath = '/api/v2/languages/translations/users/{userId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get all available languages for translation
  * @memberOf LanguagesApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "orgSpecific": [],
   "builtin": []
}
  */
LanguagesApi.prototype.getTranslations = function getTranslations(){
    var requestPath = '/api/v2/languages/translations';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};


module.exports = LanguagesApi;
