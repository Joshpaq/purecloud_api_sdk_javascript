/**
* @class
* @example
* var api = new OutboundApi(pureCloudSession);
*/
var OutboundApi = function (pureCloudSession) {
	/**
     * Retrieves audits for dialer.
	 * @memberOf OutboundApi#
	* @param {} body - AuditSearch
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	* @param {boolean} facetsOnly - Facets only
	 * @example
	 * Body Example:
	 * {
   "queryPhrase": "",
   "queryFields": [],
   "facets": [],
   "filters": []
}
	*/
	function createAudits(body, pageSize, pageNumber, sortBy, sortOrder, facetsOnly){
		var apipath = '/api/v1/outbound/audits';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(facetsOnly !== undefined && facetsOnly !== null){
			queryParameters.facetsOnly = facetsOnly;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createAudits = createAudits;
	/**
     * Query callable time set list
	 * @memberOf OutboundApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} filterType - Filter type
	EQUALS,
	REGEX,
	CONTAINS,
	PREFIX,
	LESSTHAN,
	LESSTHANEQUALTO,
	GREATERTHAN,
	GREATERTHANEQUALTO,
	BEGINSWITH,
	ENDSWITH,
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	ascending,
	descending,
	*/
	function getCallabletimesets(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v1/outbound/callabletimesets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallabletimesets = getCallabletimesets;
	/**
     * Create callable time set
	 * @memberOf OutboundApi#
	* @param {} body - DialerCallableTimeSet
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "callableTimes": [],
   "selfUri": ""
}
	*/
	function createCallabletimesets(body){
		var apipath = '/api/v1/outbound/callabletimesets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createCallabletimesets = createCallabletimesets;
	/**
     * Get callable time set
	 * @memberOf OutboundApi#
	* @param {string} callableTimeSetId - Callable Time Set ID
	*/
	function getCallabletimesetsCallableTimeSet(callableTimeSetId){
		var apipath = '/api/v1/outbound/callabletimesets/{callableTimeSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callableTimeSetId}', callableTimeSetId);

        if(callableTimeSetId === undefined && callableTimeSetId !== null){
			throw 'Missing required  parameter: callableTimeSetId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallabletimesetsCallableTimeSet = getCallabletimesetsCallableTimeSet;
	/**
     * Update callable time set
	 * @memberOf OutboundApi#
	* @param {string} callableTimeSetId - Callable Time Set ID
	* @param {} body - DialerCallableTimeSet
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "callableTimes": [],
   "selfUri": ""
}
	*/
	function updateCallabletimesetsCallableTimeSet(callableTimeSetId, body){
		var apipath = '/api/v1/outbound/callabletimesets/{callableTimeSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callableTimeSetId}', callableTimeSetId);

        if(callableTimeSetId === undefined && callableTimeSetId !== null){
			throw 'Missing required  parameter: callableTimeSetId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateCallabletimesetsCallableTimeSet = updateCallabletimesetsCallableTimeSet;
	/**
     * Delete callable time set
	 * @memberOf OutboundApi#
	* @param {string} callableTimeSetId - Callable Time Set ID
	*/
	function deleteCallabletimesetsCallableTimeSet(callableTimeSetId){
		var apipath = '/api/v1/outbound/callabletimesets/{callableTimeSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callableTimeSetId}', callableTimeSetId);

        if(callableTimeSetId === undefined && callableTimeSetId !== null){
			throw 'Missing required  parameter: callableTimeSetId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteCallabletimesetsCallableTimeSet = deleteCallabletimesetsCallableTimeSet;
	/**
     * Query a list of dialer call analysis response sets.
	 * @memberOf OutboundApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} filterType - Filter type
	EQUALS,
	REGEX,
	CONTAINS,
	PREFIX,
	LESSTHAN,
	LESSTHANEQUALTO,
	GREATERTHAN,
	GREATERTHANEQUALTO,
	BEGINSWITH,
	ENDSWITH,
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	ascending,
	descending,
	*/
	function getCallanalysisresponsesets(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v1/outbound/callanalysisresponsesets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallanalysisresponsesets = getCallanalysisresponsesets;
	/**
     * Create a dialer call analysis response set.
	 * @memberOf OutboundApi#
	* @param {} body - ResponseSet
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "responses": {},
   "selfUri": ""
}
	*/
	function createCallanalysisresponsesets(body){
		var apipath = '/api/v1/outbound/callanalysisresponsesets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createCallanalysisresponsesets = createCallanalysisresponsesets;
	/**
     * Get a dialer call analysis response set.
	 * @memberOf OutboundApi#
	* @param {string} callAnalysisSetId - Call Analysis Response Set ID
	*/
	function getCallanalysisresponsesetsCallAnalysisSet(callAnalysisSetId){
		var apipath = '/api/v1/outbound/callanalysisresponsesets/{callAnalysisSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callAnalysisSetId}', callAnalysisSetId);

        if(callAnalysisSetId === undefined && callAnalysisSetId !== null){
			throw 'Missing required  parameter: callAnalysisSetId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallanalysisresponsesetsCallAnalysisSet = getCallanalysisresponsesetsCallAnalysisSet;
	/**
     * Update a dialer call analysis response set.
	 * @memberOf OutboundApi#
	* @param {string} callAnalysisSetId - Call Analysis Response Set ID
	* @param {} body - ResponseSet
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "responses": {},
   "selfUri": ""
}
	*/
	function updateCallanalysisresponsesetsCallAnalysisSet(callAnalysisSetId, body){
		var apipath = '/api/v1/outbound/callanalysisresponsesets/{callAnalysisSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callAnalysisSetId}', callAnalysisSetId);

        if(callAnalysisSetId === undefined && callAnalysisSetId !== null){
			throw 'Missing required  parameter: callAnalysisSetId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateCallanalysisresponsesetsCallAnalysisSet = updateCallanalysisresponsesetsCallAnalysisSet;
	/**
     * Delete a dialer call analysis response set.
	 * @memberOf OutboundApi#
	* @param {string} callAnalysisSetId - Call Analysis Response Set ID
	*/
	function deleteCallanalysisresponsesetsCallAnalysisSet(callAnalysisSetId){
		var apipath = '/api/v1/outbound/callanalysisresponsesets/{callAnalysisSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callAnalysisSetId}', callAnalysisSetId);

        if(callAnalysisSetId === undefined && callAnalysisSetId !== null){
			throw 'Missing required  parameter: callAnalysisSetId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteCallanalysisresponsesetsCallAnalysisSet = deleteCallanalysisresponsesetsCallAnalysisSet;
	/**
     * Query a list of dialer campaigns.
	 * @memberOf OutboundApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} filterType - Filter type
	EQUALS,
	REGEX,
	CONTAINS,
	PREFIX,
	LESSTHAN,
	LESSTHANEQUALTO,
	GREATERTHAN,
	GREATERTHANEQUALTO,
	BEGINSWITH,
	ENDSWITH,
	* @param {string} name - Name
	* @param {string} contactListId - Contact List ID
	* @param {string} dncListId - DNC list ID
	* @param {string} distributionQueueId - Distribution queue ID
	* @param {string} edgeGroupId - Edge group ID
	* @param {string} callAnalysisResponseSetId - Call analysis response set ID
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	ascending,
	descending,
	*/
	function getCampaigns(pageSize, pageNumber, filterType, name, contactListId, dncListId, distributionQueueId, edgeGroupId, callAnalysisResponseSetId, sortBy, sortOrder){
		var apipath = '/api/v1/outbound/campaigns';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(contactListId !== undefined && contactListId !== null){
			queryParameters.contactListId = contactListId;
		}


		if(dncListId !== undefined && dncListId !== null){
			queryParameters.dncListId = dncListId;
		}


		if(distributionQueueId !== undefined && distributionQueueId !== null){
			queryParameters.distributionQueueId = distributionQueueId;
		}


		if(edgeGroupId !== undefined && edgeGroupId !== null){
			queryParameters.edgeGroupId = edgeGroupId;
		}


		if(callAnalysisResponseSetId !== undefined && callAnalysisResponseSetId !== null){
			queryParameters.callAnalysisResponseSetId = callAnalysisResponseSetId;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCampaigns = getCampaigns;
	/**
     * Create a campaign.
	 * @memberOf OutboundApi#
	* @param {} body - Campaign
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "selfUri": "",
   "phoneNumberColumns": [],
   "skipPreviewDisabled": true,
   "previewTimeOutSeconds": 0
}
	*/
	function createCampaigns(body){
		var apipath = '/api/v1/outbound/campaigns';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createCampaigns = createCampaigns;
	/**
     * Get dialer campaign.
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function getCampaignsCampaign(campaignId){
		var apipath = '/api/v1/outbound/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCampaignsCampaign = getCampaignsCampaign;
	/**
     * Update a campaign.
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	* @param {} body - Campaign
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "selfUri": "",
   "phoneNumberColumns": [],
   "skipPreviewDisabled": true,
   "previewTimeOutSeconds": 0
}
	*/
	function updateCampaignsCampaign(campaignId, body){
		var apipath = '/api/v1/outbound/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateCampaignsCampaign = updateCampaignsCampaign;
	/**
     * Delete a campaign.
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function deleteCampaignsCampaign(campaignId){
		var apipath = '/api/v1/outbound/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteCampaignsCampaign = deleteCampaignsCampaign;
	/**
     * Send notification that an agent's state changed 
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	* @param {string} userId - Agent's user ID
	* @param {} body - agent
	 * @example
	 * Body Example:
	 * {
   "stage": ""
}
	*/
	function updateCampaignsCampaignAgentsByUserId(campaignId, userId, body){
		var apipath = '/api/v1/outbound/campaigns/{campaignId}/agents/{userId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateCampaignsCampaignAgentsByUserId = updateCampaignsCampaignAgentsByUserId;
	/**
     * Schedule a Callback for a Dialer Campaign
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	* @param {} body - ContactCallbackRequest
	 * @example
	 * Body Example:
	 * {
   "campaignId": "",
   "contactListId": "",
   "contactId": "",
   "phoneColumn": "",
   "schedule": ""
}
	*/
	function createCampaignsCampaignCallbackSchedule(campaignId, body){
		var apipath = '/api/v1/outbound/campaigns/{campaignId}/callback/schedule';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createCampaignsCampaignCallbackSchedule = createCampaignsCampaignCallbackSchedule;
	/**
     * Get campaign diagnostics
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function getCampaignsCampaignDiagnostics(campaignId){
		var apipath = '/api/v1/outbound/campaigns/{campaignId}/diagnostics';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCampaignsCampaignDiagnostics = getCampaignsCampaignDiagnostics;
	/**
     * Get statistics about a Dialer Campaign
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function getCampaignsCampaignStats(campaignId){
		var apipath = '/api/v1/outbound/campaigns/{campaignId}/stats';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCampaignsCampaignStats = getCampaignsCampaignStats;
	/**
     * Query a list of contact lists.
	 * @memberOf OutboundApi#
	* @param {boolean} importStatus - Import status
	* @param {boolean} includeSize - Include size
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} filterType - Filter type
	EQUALS,
	REGEX,
	CONTAINS,
	PREFIX,
	LESSTHAN,
	LESSTHANEQUALTO,
	GREATERTHAN,
	GREATERTHANEQUALTO,
	BEGINSWITH,
	ENDSWITH,
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	ascending,
	descending,
	*/
	function getContactlists(importStatus, includeSize, pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v1/outbound/contactlists';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(importStatus !== undefined && importStatus !== null){
			queryParameters.importStatus = importStatus;
		}


		if(includeSize !== undefined && includeSize !== null){
			queryParameters.includeSize = includeSize;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactlists = getContactlists;
	/**
     * Create a contact List.
	 * @memberOf OutboundApi#
	* @param {} body - ContactList
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "columnNames": [],
   "phoneColumns": [],
   "importStatus": {
      "state": "",
      "totalRecords": 0,
      "completedRecords": 0,
      "percentComplete": 0,
      "failureReason": ""
   },
   "previewModeColumnName": "",
   "previewModeAcceptedValues": [],
   "size": 0,
   "selfUri": ""
}
	*/
	function createContactlists(body){
		var apipath = '/api/v1/outbound/contactlists';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createContactlists = createContactlists;
	/**
     * Get penetration rates for a list of penetration rate identifiers (contact list id and qualifier id)
	 * @memberOf OutboundApi#
	* @param {} body - PenetrationRateIdentifierList
	*/
	function createContactlistsPenetrationrates(body){
		var apipath = '/api/v1/outbound/contactlists/penetrationrates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createContactlistsPenetrationrates = createContactlistsPenetrationrates;
	/**
     * Get dialer contactList.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	* @param {boolean} importStatus - Import status
	* @param {boolean} includeSize - Include size
	*/
	function getContactlistsContactList(contactListId, importStatus, includeSize){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }


		if(importStatus !== undefined && importStatus !== null){
			queryParameters.importStatus = importStatus;
		}


		if(includeSize !== undefined && includeSize !== null){
			queryParameters.includeSize = includeSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactlistsContactList = getContactlistsContactList;
	/**
     * Update a contact list.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	* @param {} body - ContactList
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "columnNames": [],
   "phoneColumns": [],
   "importStatus": {
      "state": "",
      "totalRecords": 0,
      "completedRecords": 0,
      "percentComplete": 0,
      "failureReason": ""
   },
   "previewModeColumnName": "",
   "previewModeAcceptedValues": [],
   "size": 0,
   "selfUri": ""
}
	*/
	function updateContactlistsContactList(contactListId, body){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateContactlistsContactList = updateContactlistsContactList;
	/**
     * Delete a contact list.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	*/
	function deleteContactlistsContactList(contactListId){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteContactlistsContactList = deleteContactlistsContactList;
	/**
     * Add contacts to a contact list.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - Contact List ID
	* @param {} body - Contact
	* @param {boolean} priority - 
	*/
	function createContactlistsContactListContacts(contactListId, body, priority){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}/contacts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(priority !== undefined && priority !== null){
			queryParameters.priority = priority;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createContactlistsContactListContacts = createContactlistsContactListContacts;
	/**
     * Get dialer contactList.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - Contact List ID
	* @param {string} contactId - Contact ID
	*/
	function getContactlistsContactListContactsByContactId(contactListId, contactId){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactlistsContactListContactsByContactId = getContactlistsContactListContactsByContactId;
	/**
     * Update a contact.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - Contact List ID
	* @param {string} contactId - Contact ID
	* @param {} body - Contact
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "contactListId": "",
   "data": {
      "nodeType": "",
      "object": true,
      "pojo": true,
      "number": true,
      "integralNumber": true,
      "floatingPointNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "float": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "boolean": true,
      "binary": true,
      "valueNode": true,
      "containerNode": true,
      "missingNode": true,
      "array": true,
      "null": true
   },
   "callRecords": {},
   "callable": true,
   "phoneNumberStatus": {},
   "selfUri": ""
}
	*/
	function updateContactlistsContactListContactsByContactId(contactListId, contactId, body){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateContactlistsContactListContactsByContactId = updateContactlistsContactListContactsByContactId;
	/**
     * Delete a contact.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - Contact List ID
	* @param {string} contactId - Contact ID
	*/
	function deleteContactlistsContactListContactsByContactId(contactListId, contactId){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteContactlistsContactListContactsByContactId = deleteContactlistsContactListContactsByContactId;
	/**
     * Initiate the export of a contact list.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	*/
	function createContactlistsContactListExport(contactListId){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}/export';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createContactlistsContactListExport = createContactlistsContactListExport;
	/**
     * Get dialer contactList import status.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	*/
	function getContactlistsContactListImportstatus(contactListId){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}/importstatus';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactlistsContactListImportstatus = getContactlistsContactListImportstatus;
	/**
     * Get Dialer campaign's penetration rate
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	* @param {string} campaignId - Campaign ID
	*/
	function getContactlistsContactListByCampaignIdPenetrationrate(contactListId, campaignId){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}/{campaignId}/penetrationrate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactlistsContactListByCampaignIdPenetrationrate = getContactlistsContactListByCampaignIdPenetrationrate;
	/**
     * Add phone numbers to a Dialer DNC list.
	 * @memberOf OutboundApi#
	* @param {string} conversationId - Conversation ID
	*/
	function createConversationsConversationDnc(conversationId){
		var apipath = '/api/v1/outbound/conversations/{conversationId}/dnc';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createConversationsConversationDnc = createConversationsConversationDnc;
	/**
     * Query dialer DNC lists
	 * @memberOf OutboundApi#
	* @param {boolean} importStatus - Import status
	* @param {boolean} includeSize - Include size
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} filterType - Filter type
	EQUALS,
	REGEX,
	CONTAINS,
	PREFIX,
	LESSTHAN,
	LESSTHANEQUALTO,
	GREATERTHAN,
	GREATERTHANEQUALTO,
	BEGINSWITH,
	ENDSWITH,
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	ascending,
	descending,
	*/
	function getDnclists(importStatus, includeSize, pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v1/outbound/dnclists';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(importStatus !== undefined && importStatus !== null){
			queryParameters.importStatus = importStatus;
		}


		if(includeSize !== undefined && includeSize !== null){
			queryParameters.includeSize = includeSize;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDnclists = getDnclists;
	/**
     * Create dialer DNC list
	 * @memberOf OutboundApi#
	* @param {} body - DncList
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "phoneNumberColumns": [],
   "importStatus": {
      "state": "",
      "totalRecords": 0,
      "completedRecords": 0,
      "percentComplete": 0,
      "failureReason": ""
   },
   "fileKey": "",
   "size": 0,
   "selfUri": ""
}
	*/
	function createDnclists(body){
		var apipath = '/api/v1/outbound/dnclists';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createDnclists = createDnclists;
	/**
     * Get dialer DNC list
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	* @param {boolean} importStatus - Import status
	* @param {boolean} includeSize - Include size
	*/
	function getDnclistsDncList(dncListId, importStatus, includeSize){
		var apipath = '/api/v1/outbound/dnclists/{dncListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }


		if(importStatus !== undefined && importStatus !== null){
			queryParameters.importStatus = importStatus;
		}


		if(includeSize !== undefined && includeSize !== null){
			queryParameters.includeSize = includeSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDnclistsDncList = getDnclistsDncList;
	/**
     * Update dialer DNC list
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	* @param {} body - DncList
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "phoneNumberColumns": [],
   "importStatus": {
      "state": "",
      "totalRecords": 0,
      "completedRecords": 0,
      "percentComplete": 0,
      "failureReason": ""
   },
   "fileKey": "",
   "size": 0,
   "selfUri": ""
}
	*/
	function updateDnclistsDncList(dncListId, body){
		var apipath = '/api/v1/outbound/dnclists/{dncListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateDnclistsDncList = updateDnclistsDncList;
	/**
     * Delete dialer DNC list
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	*/
	function deleteDnclistsDncList(dncListId){
		var apipath = '/api/v1/outbound/dnclists/{dncListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteDnclistsDncList = deleteDnclistsDncList;
	/**
     * Initiate the export of a dnc list.
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	*/
	function createDnclistsDncListExport(dncListId){
		var apipath = '/api/v1/outbound/dnclists/{dncListId}/export';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createDnclistsDncListExport = createDnclistsDncListExport;
	/**
     * Get dialer dncList import status.
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	*/
	function getDnclistsDncListImportstatus(dncListId){
		var apipath = '/api/v1/outbound/dnclists/{dncListId}/importstatus';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDnclistsDncListImportstatus = getDnclistsDncListImportstatus;
	/**
     * Add phone numbers to a Dialer DNC list.
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	* @param {} body - DNC Phone Numbers
	*/
	function createDnclistsDncListPhonenumbers(dncListId, body){
		var apipath = '/api/v1/outbound/dnclists/{dncListId}/phonenumbers';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createDnclistsDncListPhonenumbers = createDnclistsDncListPhonenumbers;
	/**
     * Get dialer preview for user
	 * @memberOf OutboundApi#
	*/
	function getPreviews(){
		var apipath = '/api/v1/outbound/previews';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPreviews = getPreviews;
	/**
     * Get dialer preview
	 * @memberOf OutboundApi#
	* @param {string} previewId - preview ID
	*/
	function getPreviewsPreview(previewId){
		var apipath = '/api/v1/outbound/previews/{previewId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{previewId}', previewId);

        if(previewId === undefined && previewId !== null){
			throw 'Missing required  parameter: previewId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPreviewsPreview = getPreviewsPreview;
	/**
     * Disposition preview call
	 * @memberOf OutboundApi#
	* @param {string} previewId - preview ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "callId": "",
   "wrapupCodeId": "",
   "contact": {
      "id": "",
      "name": "",
      "contactListId": "",
      "data": {},
      "callRecords": {},
      "callable": true,
      "phoneNumberStatus": {},
      "selfUri": ""
   }
}
	*/
	function createPreviewsPreviewDispositioncall(previewId, body){
		var apipath = '/api/v1/outbound/previews/{previewId}/dispositioncall';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{previewId}', previewId);

        if(previewId === undefined && previewId !== null){
			throw 'Missing required  parameter: previewId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createPreviewsPreviewDispositioncall = createPreviewsPreviewDispositioncall;
	/**
     * place preview call
	 * @memberOf OutboundApi#
	* @param {string} previewId - preview ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "callId": "",
   "phoneNumber": ""
}
	*/
	function createPreviewsPreviewPlacecall(previewId, body){
		var apipath = '/api/v1/outbound/previews/{previewId}/placecall';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{previewId}', previewId);

        if(previewId === undefined && previewId !== null){
			throw 'Missing required  parameter: previewId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createPreviewsPreviewPlacecall = createPreviewsPreviewPlacecall;
	/**
     * Query a list of Rule Sets.
	 * @memberOf OutboundApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} filterType - Filter type
	EQUALS,
	REGEX,
	CONTAINS,
	PREFIX,
	LESSTHAN,
	LESSTHANEQUALTO,
	GREATERTHAN,
	GREATERTHANEQUALTO,
	BEGINSWITH,
	ENDSWITH,
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	ascending,
	descending,
	*/
	function getRulesets(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v1/outbound/rulesets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRulesets = getRulesets;
	/**
     * Create a Dialer Call Analysis Response Set.
	 * @memberOf OutboundApi#
	* @param {} body - RuleSet
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "rules": [],
   "selfUri": ""
}
	*/
	function createRulesets(body){
		var apipath = '/api/v1/outbound/rulesets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createRulesets = createRulesets;
	/**
     * Get a Rule Set by ID.
	 * @memberOf OutboundApi#
	* @param {string} ruleSetId - Rule Set ID
	*/
	function getRulesetsRuleSet(ruleSetId){
		var apipath = '/api/v1/outbound/rulesets/{ruleSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ruleSetId}', ruleSetId);

        if(ruleSetId === undefined && ruleSetId !== null){
			throw 'Missing required  parameter: ruleSetId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRulesetsRuleSet = getRulesetsRuleSet;
	/**
     * Update a RuleSet.
	 * @memberOf OutboundApi#
	* @param {string} ruleSetId - Rule Set ID
	* @param {} body - RuleSet
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "rules": [],
   "selfUri": ""
}
	*/
	function updateRulesetsRuleSet(ruleSetId, body){
		var apipath = '/api/v1/outbound/rulesets/{ruleSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ruleSetId}', ruleSetId);

        if(ruleSetId === undefined && ruleSetId !== null){
			throw 'Missing required  parameter: ruleSetId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateRulesetsRuleSet = updateRulesetsRuleSet;
	/**
     * Delete a Rule set.
	 * @memberOf OutboundApi#
	* @param {string} ruleSetId - Rule Set ID
	*/
	function deleteRulesetsRuleSet(ruleSetId){
		var apipath = '/api/v1/outbound/rulesets/{ruleSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ruleSetId}', ruleSetId);

        if(ruleSetId === undefined && ruleSetId !== null){
			throw 'Missing required  parameter: ruleSetId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteRulesetsRuleSet = deleteRulesetsRuleSet;
	/**
     * Query for a list of dialer campaign schedules.
	 * @memberOf OutboundApi#
	*/
	function getSchedulesCampaigns(){
		var apipath = '/api/v1/outbound/schedules/campaigns';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchedulesCampaigns = getSchedulesCampaigns;
	/**
     * Get a dialer campaign schedule.
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function getSchedulesCampaignsCampaign(campaignId){
		var apipath = '/api/v1/outbound/schedules/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchedulesCampaignsCampaign = getSchedulesCampaignsCampaign;
	/**
     * Update a new campaign schedule.
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	* @param {} body - CampaignSchedule
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "intervals": [],
   "timeZone": "",
   "campaign": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "selfUri": ""
}
	*/
	function updateSchedulesCampaignsCampaign(campaignId, body){
		var apipath = '/api/v1/outbound/schedules/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateSchedulesCampaignsCampaign = updateSchedulesCampaignsCampaign;
	/**
     * Delete a dialer campaign schedule.
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function deleteSchedulesCampaignsCampaign(campaignId){
		var apipath = '/api/v1/outbound/schedules/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSchedulesCampaignsCampaign = deleteSchedulesCampaignsCampaign;
	/**
     * Query for a list of dialer sequence schedules.
	 * @memberOf OutboundApi#
	*/
	function getSchedulesSequences(){
		var apipath = '/api/v1/outbound/schedules/sequences';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchedulesSequences = getSchedulesSequences;
	/**
     * Get a dialer sequence schedule.
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Sequence ID
	*/
	function getSchedulesSequencesSequence(sequenceId){
		var apipath = '/api/v1/outbound/schedules/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchedulesSequencesSequence = getSchedulesSequencesSequence;
	/**
     * Update a new sequence schedule.
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Sequence ID
	* @param {} body - SequenceSchedule
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "intervals": [],
   "timeZone": "",
   "sequence": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "selfUri": ""
}
	*/
	function updateSchedulesSequencesSequence(sequenceId, body){
		var apipath = '/api/v1/outbound/schedules/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateSchedulesSequencesSequence = updateSchedulesSequencesSequence;
	/**
     * Delete a dialer sequence schedule.
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Sequence ID
	*/
	function deleteSchedulesSequencesSequence(sequenceId){
		var apipath = '/api/v1/outbound/schedules/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSchedulesSequencesSequence = deleteSchedulesSequencesSequence;
	/**
     * Query a list of dialer campaign sequences.
	 * @memberOf OutboundApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} filterType - Filter type
	EQUALS,
	REGEX,
	CONTAINS,
	PREFIX,
	LESSTHAN,
	LESSTHANEQUALTO,
	GREATERTHAN,
	GREATERTHANEQUALTO,
	BEGINSWITH,
	ENDSWITH,
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	ascending,
	descending,
	*/
	function getSequences(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v1/outbound/sequences';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSequences = getSequences;
	/**
     * Create a new campaign sequence.
	 * @memberOf OutboundApi#
	* @param {} body - Organization
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "campaigns": [],
   "currentCampaign": 0,
   "status": "",
   "stopMessage": "",
   "selfUri": ""
}
	*/
	function createSequences(body){
		var apipath = '/api/v1/outbound/sequences';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createSequences = createSequences;
	/**
     * Get a dialer campaign sequence.
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Campaign Sequence ID
	*/
	function getSequencesSequence(sequenceId){
		var apipath = '/api/v1/outbound/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSequencesSequence = getSequencesSequence;
	/**
     * Update a new campaign sequence.
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Campaign Sequence ID
	* @param {} body - Organization
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "campaigns": [],
   "currentCampaign": 0,
   "status": "",
   "stopMessage": "",
   "selfUri": ""
}
	*/
	function updateSequencesSequence(sequenceId, body){
		var apipath = '/api/v1/outbound/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateSequencesSequence = updateSequencesSequence;
	/**
     * Delete a dialer campaign sequence.
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Campaign Sequence ID
	*/
	function deleteSequencesSequence(sequenceId){
		var apipath = '/api/v1/outbound/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSequencesSequence = deleteSequencesSequence;
	/**
     * Get the Dialer wrap up code mapping.
	 * @memberOf OutboundApi#
	*/
	function getWrapupcodemappings(){
		var apipath = '/api/v1/outbound/wrapupcodemappings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWrapupcodemappings = getWrapupcodemappings;
	/**
     * Update the Dialer wrap up code mapping.
	 * @memberOf OutboundApi#
	* @param {} body - wrapUpCodeMapping
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "defaultSet": [],
   "mapping": {},
   "selfUri": ""
}
	*/
	function updateWrapupcodemappings(body){
		var apipath = '/api/v1/outbound/wrapupcodemappings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateWrapupcodemappings = updateWrapupcodemappings;

    return self;
};
