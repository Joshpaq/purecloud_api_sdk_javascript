/**
* @class
* @example
* var api = new ContentManagementApi(pureCloudSession);
*/
function ContentManagementApi(session) {
    if(!(this instanceof ContentManagementApi)) {
        return new ContentManagementApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('ContentManagementApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Query audits
  * @memberOf ContentManagementApi#
  * @param {} body - Allows for a filtered query returning facet information
  * @example
  * Body Example:
  * {
   "queryPhrase": "",
   "pageNumber": 0,
   "pageSize": 0,
   "facetNameRequests": [],
   "sort": [],
   "filters": [],
   "attributeFilters": [],
   "includeShares": true
}
  */
ContentManagementApi.prototype.postAuditquery = function postAuditquery(body){
    var requestPath = '/api/v2/contentmanagement/auditquery';
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
  * @summary Get a list of documents.
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {string} name - Name
  * @param {string} expand - Expand some document fields
  acl,
  workspace,
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortBy - name or dateCreated
  * @param {string} sortOrder - ascending or descending
  */
ContentManagementApi.prototype.getDocuments = function getDocuments(workspaceId, name, expand, pageSize, pageNumber, sortBy, sortOrder){
    var requestPath = '/api/v2/contentmanagement/documents';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestQuery.workspaceId = workspaceId;
    requestQuery.name = name;
    requestQuery.expand = expand;
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.sortOrder = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Add a document.
  * @memberOf ContentManagementApi#
  * @param {} body - Document
  * @param {string} copySource - Copy a document within a workspace or to a new workspace. Provide a document ID as the copy source.
  * @param {string} moveSource - Move a document to a new workspace. Provide a document ID as the move source.
  * @param {boolean} override - Override any lock on the source document
  * @example
  * Body Example:
  * {
   "name": "",
   "workspace": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "tags": [],
   "tagIds": []
}
  */
ContentManagementApi.prototype.postDocuments = function postDocuments(body, copySource, moveSource, override){
    var requestPath = '/api/v2/contentmanagement/documents';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.copySource = copySource;
    requestQuery.moveSource = moveSource;
    requestQuery.override = override;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a document.
  * @memberOf ContentManagementApi#
  * @param {string} documentId - Document ID
  * @param {string} expand - Expand some document fields
  lockInfo,
  acl,
  workspace,
  */
ContentManagementApi.prototype.getDocumentsDocumentId = function getDocumentsDocumentId(documentId, expand){
    var requestPath = '/api/v2/contentmanagement/documents/{documentId}';
    var requestQuery = {};
    var requestBody;

    if(documentId === undefined || documentId === null){
      throw new Error('Missing required  parameter: documentId');
    }
    requestPath = requestPath.replace('{documentId}', documentId);
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a document.
  * @memberOf ContentManagementApi#
  * @param {string} documentId - Document ID
  * @param {} body - Document
  * @param {string} expand - Expand some document fields
  acl,
  * @param {boolean} override - Override any lock on the document
  * @example
  * Body Example:
  * {
   "changeNumber": 0,
   "name": "",
   "read": true,
   "addTags": [],
   "removeTags": [],
   "addTagIds": [],
   "removeTagIds": [],
   "updateAttributes": [],
   "removeAttributes": []
}
  */
ContentManagementApi.prototype.postDocumentsDocumentId = function postDocumentsDocumentId(documentId, body, expand, override){
    var requestPath = '/api/v2/contentmanagement/documents/{documentId}';
    var requestQuery = {};
    var requestBody;

    if(documentId === undefined || documentId === null){
      throw new Error('Missing required  parameter: documentId');
    }
    requestPath = requestPath.replace('{documentId}', documentId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.expand = expand;
    requestQuery.override = override;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a document.
  * @memberOf ContentManagementApi#
  * @param {string} documentId - Document ID
  * @param {boolean} override - Override any lock on the document
  */
ContentManagementApi.prototype.deleteDocumentsDocumentId = function deleteDocumentsDocumentId(documentId, override){
    var requestPath = '/api/v2/contentmanagement/documents/{documentId}';
    var requestQuery = {};
    var requestBody;

    if(documentId === undefined || documentId === null){
      throw new Error('Missing required  parameter: documentId');
    }
    requestPath = requestPath.replace('{documentId}', documentId);
    requestQuery.override = override;
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of audits for a document.
  * @memberOf ContentManagementApi#
  * @param {string} documentId - Document ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} transactionFilter - Transaction filter
  * @param {string} level - level
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
  */
ContentManagementApi.prototype.getDocumentsDocumentIdAudits = function getDocumentsDocumentIdAudits(documentId, pageSize, pageNumber, transactionFilter, level, sortBy, sortOrder){
    var requestPath = '/api/v2/contentmanagement/documents/{documentId}/audits';
    var requestQuery = {};
    var requestBody;

    if(documentId === undefined || documentId === null){
      throw new Error('Missing required  parameter: documentId');
    }
    requestPath = requestPath.replace('{documentId}', documentId);
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.transactionFilter = transactionFilter;
    requestQuery.level = level;
    requestQuery.sortBy = sortBy;
    requestQuery.sortOrder = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Download a document.
  * @memberOf ContentManagementApi#
  * @param {string} documentId - Document ID
  * @param {string} disposition - Request how the content will be downloaded: attached as a file or inline. Default is attachment.
  attachment,
  inline,
  * @param {string} contentType - The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav
  */
ContentManagementApi.prototype.getDocumentsDocumentIdContent = function getDocumentsDocumentIdContent(documentId, disposition, contentType){
    var requestPath = '/api/v2/contentmanagement/documents/{documentId}/content';
    var requestQuery = {};
    var requestBody;

    if(documentId === undefined || documentId === null){
      throw new Error('Missing required  parameter: documentId');
    }
    requestPath = requestPath.replace('{documentId}', documentId);
    requestQuery.disposition = disposition;
    requestQuery.contentType = contentType;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Replace the contents of a document.
  * @memberOf ContentManagementApi#
  * @param {string} documentId - Document ID
  * @param {} body - Replace Request
  * @param {boolean} override - Override any lock on the document
  * @example
  * Body Example:
  * {
   "changeNumber": 0,
   "name": "",
   "authToken": ""
}
  */
ContentManagementApi.prototype.postDocumentsDocumentIdContent = function postDocumentsDocumentIdContent(documentId, body, override){
    var requestPath = '/api/v2/contentmanagement/documents/{documentId}/content';
    var requestQuery = {};
    var requestBody;

    if(documentId === undefined || documentId === null){
      throw new Error('Missing required  parameter: documentId');
    }
    requestPath = requestPath.replace('{documentId}', documentId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.override = override;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query content
  * @memberOf ContentManagementApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortBy - name or dateCreated
  * @param {string} sortOrder - ascending or descending
  * @param {string} queryPhrase - Phrase tokens are ANDed together over all searchable fields
  * @param {string} expand - Expand some document fields
  acl,
  workspace,
  */
ContentManagementApi.prototype.getQuery = function getQuery(pageSize, pageNumber, sortBy, sortOrder, queryPhrase, expand){
    var requestPath = '/api/v2/contentmanagement/query';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.sortOrder = sortOrder;
    if(queryPhrase === undefined || queryPhrase === null){
      throw new Error('Missing required  parameter: queryPhrase');
    }
    requestQuery.queryPhrase = queryPhrase;
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query content
  * @memberOf ContentManagementApi#
  * @param {} body - Allows for a filtered query returning facet information
  * @param {string} expand - Expand some document fields
  acl,
  workspace,
  * @example
  * Body Example:
  * {
   "queryPhrase": "",
   "pageNumber": 0,
   "pageSize": 0,
   "facetNameRequests": [],
   "sort": [],
   "filters": [],
   "attributeFilters": [],
   "includeShares": true
}
  */
ContentManagementApi.prototype.postQuery = function postQuery(body, expand){
    var requestPath = '/api/v2/contentmanagement/query';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.expand = expand;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a List of Security Profiles
  * @memberOf ContentManagementApi#
  */
ContentManagementApi.prototype.getSecurityprofiles = function getSecurityprofiles(){
    var requestPath = '/api/v2/contentmanagement/securityprofiles';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Security Profile
  * @memberOf ContentManagementApi#
  * @param {string} securityProfileId - Security Profile Id
  */
ContentManagementApi.prototype.getSecurityprofilesSecurityprofileId = function getSecurityprofilesSecurityprofileId(securityProfileId){
    var requestPath = '/api/v2/contentmanagement/securityprofiles/{securityProfileId}';
    var requestQuery = {};
    var requestBody;

    if(securityProfileId === undefined || securityProfileId === null){
      throw new Error('Missing required  parameter: securityProfileId');
    }
    requestPath = requestPath.replace('{securityProfileId}', securityProfileId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get shared documents. Securely download a shared document.
  * @description This method requires the download sharing URI obtained in the get document response (downloadSharingUri). Documents may be shared between users in the same workspace. Documents may also be shared between any user by creating a content management share.
  * @memberOf ContentManagementApi#
  * @param {string} sharedId - Shared ID
  * @param {boolean} redirect - Turn on or off redirect
  * @param {string} disposition - Request how the share content will be downloaded: attached as a file or inline. Default is attachment.
  attachment,
  inline,
  none,
  * @param {string} contentType - The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav
  * @param {string} expand - Expand some document fields
  document.acl,
  */
ContentManagementApi.prototype.getSharedSharedId = function getSharedSharedId(sharedId, redirect, disposition, contentType, expand){
    var requestPath = '/api/v2/contentmanagement/shared/{sharedId}';
    var requestQuery = {};
    var requestBody;

    if(sharedId === undefined || sharedId === null){
      throw new Error('Missing required  parameter: sharedId');
    }
    requestPath = requestPath.replace('{sharedId}', sharedId);
    requestQuery.redirect = redirect;
    requestQuery.disposition = disposition;
    requestQuery.contentType = contentType;
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Gets a list of shares.  You must specify at least one filter (e.g. entityId).
  * @description Failing to specify a filter will return 400.
  * @memberOf ContentManagementApi#
  * @param {string} entityId - Filters the shares returned to only the entity specified by the value of this parameter.
  * @param {string} expand - Expand share fields
  member,
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  */
ContentManagementApi.prototype.getShares = function getShares(entityId, expand, pageSize, pageNumber){
    var requestPath = '/api/v2/contentmanagement/shares';
    var requestQuery = {};
    var requestBody;

    requestQuery.entityId = entityId;
    requestQuery.expand = expand;
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Creates a new share or updates an existing share if the entity has already been shared
  * @memberOf ContentManagementApi#
  * @param {} body - CreateShareRequest - entity id and type and a single member or list of members are required
  * @example
  * Body Example:
  * {
   "sharedEntityType": "",
   "sharedEntity": {
      "id": ""
   },
   "memberType": "",
   "member": {
      "id": ""
   },
   "members": []
}
  */
ContentManagementApi.prototype.postShares = function postShares(body){
    var requestPath = '/api/v2/contentmanagement/shares';
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
  * @summary Retrieve details about an existing share.
  * @memberOf ContentManagementApi#
  * @param {string} shareId - Share ID
  * @param {string} expand - Expand share fields
  member,
  */
ContentManagementApi.prototype.getSharesShareId = function getSharesShareId(shareId, expand){
    var requestPath = '/api/v2/contentmanagement/shares/{shareId}';
    var requestQuery = {};
    var requestBody;

    if(shareId === undefined || shareId === null){
      throw new Error('Missing required  parameter: shareId');
    }
    requestPath = requestPath.replace('{shareId}', shareId);
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Deletes an existing share.
  * @description This revokes sharing rights specified in the share record
  * @memberOf ContentManagementApi#
  * @param {string} shareId - Share ID
  */
ContentManagementApi.prototype.deleteSharesShareId = function deleteSharesShareId(shareId){
    var requestPath = '/api/v2/contentmanagement/shares/{shareId}';
    var requestQuery = {};
    var requestBody;

    if(shareId === undefined || shareId === null){
      throw new Error('Missing required  parameter: shareId');
    }
    requestPath = requestPath.replace('{shareId}', shareId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of statuses for pending operations
  * @memberOf ContentManagementApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  */
ContentManagementApi.prototype.getStatus = function getStatus(pageSize, pageNumber){
    var requestPath = '/api/v2/contentmanagement/status';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a status.
  * @memberOf ContentManagementApi#
  * @param {string} statusId - Status ID
  */
ContentManagementApi.prototype.getStatusStatusId = function getStatusStatusId(statusId){
    var requestPath = '/api/v2/contentmanagement/status/{statusId}';
    var requestQuery = {};
    var requestBody;

    if(statusId === undefined || statusId === null){
      throw new Error('Missing required  parameter: statusId');
    }
    requestPath = requestPath.replace('{statusId}', statusId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Cancel the command for this status
  * @memberOf ContentManagementApi#
  * @param {string} statusId - Status ID
  */
ContentManagementApi.prototype.deleteStatusStatusId = function deleteStatusStatusId(statusId){
    var requestPath = '/api/v2/contentmanagement/status/{statusId}';
    var requestQuery = {};
    var requestBody;

    if(statusId === undefined || statusId === null){
      throw new Error('Missing required  parameter: statusId');
    }
    requestPath = requestPath.replace('{statusId}', statusId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get usage details.
  * @memberOf ContentManagementApi#
  */
ContentManagementApi.prototype.getUsage = function getUsage(){
    var requestPath = '/api/v2/contentmanagement/usage';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of workspaces.
  * @description Specifying 'content' access will return all workspaces the user has document access to, while 'admin' access will return all group workspaces the user has administrative rights to.
  * @memberOf ContentManagementApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} access - Requested access level
  content,
  admin,
  document:create,
  document:viewContent,
  document:viewMetadata,
  document:download,
  document:delete,
  document:update,
  document:share,
  document:shareView,
  document:email,
  document:print,
  document:auditView,
  document:replace,
  document:tag,
  tag:create,
  tag:view,
  tag:update,
  tag:apply,
  tag:remove,
  tag:delete,
  * @param {string} expand - Expand some workspace fields
  summary,
  acl,
  */
ContentManagementApi.prototype.getWorkspaces = function getWorkspaces(pageSize, pageNumber, access, expand){
    var requestPath = '/api/v2/contentmanagement/workspaces';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.access = access;
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a group workspace
  * @memberOf ContentManagementApi#
  * @param {} body - Workspace
  * @example
  * Body Example:
  * {
   "name": "",
   "bucket": "",
   "description": ""
}
  */
ContentManagementApi.prototype.postWorkspaces = function postWorkspaces(body){
    var requestPath = '/api/v2/contentmanagement/workspaces';
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
  * @summary Get a workspace.
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {string} expand - Expand some workspace fields
  summary,
  acl,
  */
ContentManagementApi.prototype.getWorkspacesWorkspaceId = function getWorkspacesWorkspaceId(workspaceId, expand){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a workspace
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {} body - Workspace
  * @example
  * Body Example:
  * {
   "name": "",
   "type": "",
   "isCurrentUserWorkspace": true,
   "user": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "bucket": "",
   "dateCreated": "",
   "dateModified": "",
   "summary": {
      "totalDocumentCount": 0,
      "totalDocumentByteCount": 0
   },
   "acl": [],
   "description": ""
}
  */
ContentManagementApi.prototype.putWorkspacesWorkspaceId = function putWorkspacesWorkspaceId(workspaceId, body){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a workspace
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {string} moveChildrenToWorkspaceId - New location for objects in deleted workspace.
  */
ContentManagementApi.prototype.deleteWorkspacesWorkspaceId = function deleteWorkspacesWorkspaceId(workspaceId, moveChildrenToWorkspaceId){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    requestQuery.moveChildrenToWorkspaceId = moveChildrenToWorkspaceId;
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list workspace members
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} expand - Expand workspace member fields
  member,
  */
ContentManagementApi.prototype.getWorkspacesWorkspaceIdMembers = function getWorkspacesWorkspaceIdMembers(workspaceId, pageSize, pageNumber, expand){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}/members';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a workspace member
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {string} memberId - Member ID
  * @param {string} expand - Expand workspace member fields
  member,
  */
ContentManagementApi.prototype.getWorkspacesWorkspaceIdMembersMemberId = function getWorkspacesWorkspaceIdMembersMemberId(workspaceId, memberId, expand){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    if(memberId === undefined || memberId === null){
      throw new Error('Missing required  parameter: memberId');
    }
    requestPath = requestPath.replace('{memberId}', memberId);
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Add a member to a workspace
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {string} memberId - Member ID
  * @param {} body - Workspace
  * @example
  * Body Example:
  * {
   "name": "",
   "workspace": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "memberType": "",
   "member": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "user": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": [],
      "version": 0
   },
   "group": {
      "name": "",
      "description": "",
      "type": "",
      "images": [],
      "addresses": [],
      "rulesVisible": true,
      "visibility": ""
   },
   "securityProfile": {
      "name": "",
      "permissions": []
   }
}
  */
ContentManagementApi.prototype.putWorkspacesWorkspaceIdMembersMemberId = function putWorkspacesWorkspaceIdMembersMemberId(workspaceId, memberId, body){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    if(memberId === undefined || memberId === null){
      throw new Error('Missing required  parameter: memberId');
    }
    requestPath = requestPath.replace('{memberId}', memberId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a member from a workspace
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {string} memberId - Member ID
  */
ContentManagementApi.prototype.deleteWorkspacesWorkspaceIdMembersMemberId = function deleteWorkspacesWorkspaceIdMembersMemberId(workspaceId, memberId){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    if(memberId === undefined || memberId === null){
      throw new Error('Missing required  parameter: memberId');
    }
    requestPath = requestPath.replace('{memberId}', memberId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of workspace tags
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {string} value - filter the list of tags returned
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} expand - Expand some document fields
  acl,
  */
ContentManagementApi.prototype.getWorkspacesWorkspaceIdTagvalues = function getWorkspacesWorkspaceIdTagvalues(workspaceId, value, pageSize, pageNumber, expand){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    requestQuery.value = value;
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a workspace tag
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {} body - tag
  * @example
  * Body Example:
  * {
   "name": "",
   "inUse": true,
   "acl": []
}
  */
ContentManagementApi.prototype.postWorkspacesWorkspaceIdTagvalues = function postWorkspacesWorkspaceIdTagvalues(workspaceId, body){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Perform a prefix query on tags in the workspace
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {} body - query
  * @param {string} expand - Expand some document fields
  acl,
  * @example
  * Body Example:
  * {
   "query": "",
   "pageNumber": 0,
   "pageSize": 0
}
  */
ContentManagementApi.prototype.postWorkspacesWorkspaceIdTagvaluesQuery = function postWorkspacesWorkspaceIdTagvaluesQuery(workspaceId, body, expand){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/query';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.expand = expand;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a workspace tag
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {string} tagId - Tag ID
  * @param {string} expand - Expand some document fields
  acl,
  */
ContentManagementApi.prototype.getWorkspacesWorkspaceIdTagvaluesTagId = function getWorkspacesWorkspaceIdTagvaluesTagId(workspaceId, tagId, expand){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    if(tagId === undefined || tagId === null){
      throw new Error('Missing required  parameter: tagId');
    }
    requestPath = requestPath.replace('{tagId}', tagId);
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a workspace tag. Will update all documents with the new tag value.
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {string} tagId - Tag ID
  * @param {} body - Workspace
  * @example
  * Body Example:
  * {
   "name": "",
   "inUse": true,
   "acl": []
}
  */
ContentManagementApi.prototype.putWorkspacesWorkspaceIdTagvaluesTagId = function putWorkspacesWorkspaceIdTagvaluesTagId(workspaceId, tagId, body){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    if(tagId === undefined || tagId === null){
      throw new Error('Missing required  parameter: tagId');
    }
    requestPath = requestPath.replace('{tagId}', tagId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete workspace tag
  * @description Delete a tag from a workspace. Will remove this tag from all documents.
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {string} tagId - Tag ID
  */
ContentManagementApi.prototype.deleteWorkspacesWorkspaceIdTagvaluesTagId = function deleteWorkspacesWorkspaceIdTagvaluesTagId(workspaceId, tagId){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    if(tagId === undefined || tagId === null){
      throw new Error('Missing required  parameter: tagId');
    }
    requestPath = requestPath.replace('{tagId}', tagId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};


module.exports = ContentManagementApi;
