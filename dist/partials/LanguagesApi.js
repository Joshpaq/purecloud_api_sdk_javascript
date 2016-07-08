/**
* @class
* @example
* var api = new LanguagesApi(pureCloudSession);
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
  * @summary Get the list of supported languages.
  * @memberOf LanguagesApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortOrder - Ascending or descending sort order
  ascending,
  descending,
  * @param {string} name - Name
  */
LanguagesApi.prototype.getLanguages = function getLanguages(pageSize, pageNumber, sortOrder, name){
    var requestPath = '/api/v2/languages';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortOrder = sortOrder;
    requestQuery.name = name;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create Language
  * @memberOf LanguagesApi#
  * @param {} body - Language
  * @example
  * Body Example:
  * {
   "name": "",
   "dateModified": "",
   "state": "",
   "version": ""
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
  * @memberOf LanguagesApi#
  * @param {string} languageId - Language ID
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
  * @summary Update Language
  * @memberOf LanguagesApi#
  * @param {string} languageId - Language ID
  * @param {} body - Language
  * @example
  * Body Example:
  * {
   "name": "",
   "dateModified": "",
   "state": "",
   "version": ""
}
  */
LanguagesApi.prototype.putLanguageId = function putLanguageId(languageId, body){
    var requestPath = '/api/v2/languages/{languageId}';
    var requestQuery = {};
    var requestBody;

    if(languageId === undefined || languageId === null){
      throw new Error('Missing required  parameter: languageId');
    }
    requestPath = requestPath.replace('{languageId}', languageId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete Language
  * @memberOf LanguagesApi#
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


module.exports = LanguagesApi;