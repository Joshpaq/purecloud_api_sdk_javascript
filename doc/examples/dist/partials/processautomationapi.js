/**
* @class
* @example
* var api = new ProcessautomationApi(pureCloudSession);
*/
var ProcessautomationApi = function (pureCloudSession) {
	/**
     * @summary Get flow history by Document
	 * @description Gets the flow history elements for flows that related to the given document.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	*/
	function getAssociationsDocumentsIdHistory(id){
		var apipath = '/api/v1/processautomation/associations/documents/{id}/history';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAssociationsDocumentsIdHistory = getAssociationsDocumentsIdHistory;
	/**
     * @summary Get all base flows for an organization
	 * @description This method will get all the flows defined in your organization.<br> The method will get the flows without regard to individual versions.  So a particular flow might have many versions but only a single entry representing them all as a unit will be returned.<br><br>The method supports two kinds of filters on what data gets returned:<br><p>+  The 'typeFilter' param can be a comma-separated list of flow types that you want, or empty/omitted to get them all. Currently only the Workflow type is supported, but in the future other might be supported as well.</p><br><p>+  The 'stateFilter' param can be a comma-separated list of state types, or empty/omitted to get them all.
 So values like "Active,Inactive,Deleted" or any combination thereof are appropriate here.</p><br><p>+  The 'permissionFilter' param can be a comma-separated list of permissions you want to limit the list to, or empty/omitted to get them all.
 So a value like "Launch" is useful here to just get the flows you're permitted to launch.</p>
	 * @memberOf ProcessautomationApi#
	* @param {integer} pageSize - The number of entries to return per page, or omitted for the default.
	* @param {integer} pageNumber - The page number to return, or omitted for the first page.
	* @param {string} typeFilter - A comma-separated list of flow types that you want, or empty/omitted to get them all.
	* @param {string} stateFilter - A comma-separated list of state types, or empty/omitted to get them all.
	* @param {string} permissionFilter - A comma-separated list of permissions to restrict by, or empty/omitted to get them all.
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	workspace,
	queues,
	document,
	flowconfigid,
	workitemcache,
	* @param {array} sortFields - A list of field names of the format xxx.ASC or xxx.DESC. Declare each entry SEPARATELY on the parameter list (EG &sortFields=name.ASC&sortFields=user.DESC
	*/
	function getFlowsDefinitions(pageSize, pageNumber, typeFilter, stateFilter, permissionFilter, expand, sortFields){
		var apipath = '/api/v1/processautomation/flows/definitions';
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


		if(typeFilter !== undefined && typeFilter !== null){
			queryParameters.typeFilter = typeFilter;
		}


		if(stateFilter !== undefined && stateFilter !== null){
			queryParameters.stateFilter = stateFilter;
		}


		if(permissionFilter !== undefined && permissionFilter !== null){
			queryParameters.permissionFilter = permissionFilter;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(sortFields !== undefined && sortFields !== null){
			queryParameters.sortFields = sortFields;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlowsDefinitions = getFlowsDefinitions;
	/**
     * @summary create a new base flow object
	 * @description The base flows are the flow that don't consider the specific versions of that flow - the base flow refers to all of its versions as one unit.  So base flows have a one-to-many relationship with versioned flows.<br><br>This method will create a new base flow object, and assign it a new id.<br><br>The usual process is that you'll want to create a base flow first, giving the flow a name and description which apply to all the versions as a whole, then create one or more versioned flows that reference that base.
	 * @memberOf ProcessautomationApi#
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	workspace,
	queues,
	document,
	flowconfigid,
	workitemcache,
	* @param {} body - The base flows are the flow that don't consider the specific versions of that flow - the base flow refers to all of its versions as one unit.  So base flows have a one-to-many relationship with versioned flows.<br><br>This method will create a new base flow object, and assign it a new id.<br><br>The usual process is that you'll want to create a base flow first, giving the flow a name and description which apply to all the versions as a whole, then create one or more versioned flows that reference that base.
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "configState": "",
   "flowType": "",
   "lockedByUser": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "newestPublishedVersion": "",
   "newestVersion": "",
   "associatedWorkspaces": [],
   "description": "",
   "selfUri": ""
}
	*/
	function createFlowsDefinitions(expand, body){
		var apipath = '/api/v1/processautomation/flows/definitions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsDefinitions = createFlowsDefinitions;
	/**
     * @summary Get a specific base flow meta-data by flow id
	 * @description This returns the stuff about a given flow that is not specific to individual versions of that flow, like its name, description, activation state, and current locking owner, etc.<br>NOTE: be careful to check the Deleted state of the object you get back, and don't let the UI change it if it's marked as deleted!<br>The requesting user must have permission to view the flow information.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	workspace,
	queues,
	document,
	flowconfigid,
	workitemcache,
	*/
	function getFlowsDefinitionsId(id, expand){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlowsDefinitionsId = getFlowsDefinitionsId;
	/**
     * @summary Updates the Activation state of a flow, which in part controls whether or not it is publicly launchable
	 * @description Updates the Activation state of a flow, which in part controls whether or not it is publicly launchable
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	* @param {} body - activate options
	 * @example
	 * Body Example:
	 * {
   "activated": true
}
	*/
	function createFlowsDefinitionsIdCommandsActivate(id, body){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}/commands/activate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsDefinitionsIdCommandsActivate = createFlowsDefinitionsIdCommandsActivate;
	/**
     * @summary Adjusts the association between a flow and zero or more Workspaces.
	 * @description Adjusts the association between a flow and zero or more Workspaces.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	* @param {} body - activate options
	 * @example
	 * Body Example:
	 * {
   "workspaces": []
}
	*/
	function createFlowsDefinitionsIdCommandsAssociatewithworkspaces(id, body){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}/commands/associatewithworkspaces';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsDefinitionsIdCommandsAssociatewithworkspaces = createFlowsDefinitionsIdCommandsAssociatewithworkspaces;
	/**
     * @summary Permanently marks the base flow as deleted.
	 * @description Permanently marks the base flow as deleted.  It is still available for historical use; the flow will no longer be launchable.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	*/
	function createFlowsDefinitionsIdCommandsDelete(id){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}/commands/delete';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsDefinitionsIdCommandsDelete = createFlowsDefinitionsIdCommandsDelete;
	/**
     * @summary Updates the locked state of a flow, which affects a caller's ability to make changes to a flow
	 * @description Updates the locked state of a flow, which affects a caller's ability to make changes to a flow
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	* @param {} body - lock options
	 * @example
	 * Body Example:
	 * {
   "locked": true
}
	*/
	function createFlowsDefinitionsIdCommandsLock(id, body){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}/commands/lock';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsDefinitionsIdCommandsLock = createFlowsDefinitionsIdCommandsLock;
	/**
     * @summary Rename a flow (both the name and the description)
	 * @description Rename a flow.  Both the name and the description should be included, as both are eligible to be changed with this endpoint.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	workspace,
	queues,
	document,
	flowconfigid,
	workitemcache,
	* @param {} body - Rename a flow.  Both the name and the description should be included, as both are eligible to be changed with this endpoint.
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "configState": "",
   "flowType": "",
   "lockedByUser": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "newestPublishedVersion": "",
   "newestVersion": "",
   "associatedWorkspaces": [],
   "description": "",
   "selfUri": ""
}
	*/
	function createFlowsDefinitionsIdCommandsRename(id, expand, body){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}/commands/rename';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsDefinitionsIdCommandsRename = createFlowsDefinitionsIdCommandsRename;
	/**
     * @summary Gets an optional cache for a given flow definition.
	 * @description Gets a user saved version of a flow definition.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	*/
	function getFlowsDefinitionsIdFlowcache(id){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}/flowcache';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlowsDefinitionsIdFlowcache = getFlowsDefinitionsIdFlowcache;
	/**
     * @summary Saves a flow definition to a temporary location for flows that are not ready to be added to a versioned flow.
	 * @description This cache is used to save a flow's definition that is still in progress and is not ready to be made official.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	* @param {} body - flow definition data
	*/
	function updateFlowsDefinitionsIdFlowcache(id, body){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}/flowcache';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateFlowsDefinitionsIdFlowcache = updateFlowsDefinitionsIdFlowcache;
	/**
     * @summary Publishes what is saved in the flow definition cache.
	 * @description Publishes what is saved in the flow definition cache. The contents are first validated to ensure they constitute a legal workflow definition. The calling user must have the lock on the flow in order to call this method.  The return value will be the newly created FlowVersionConfigMetaData object.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	*/
	function createFlowsDefinitionsIdFlowcacheCommandsPublish(id, expand){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}/flowcache/commands/publish';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsDefinitionsIdFlowcacheCommandsPublish = createFlowsDefinitionsIdFlowcacheCommandsPublish;
	/**
     * @summary Get all versioned flows for one particular base flow.
	 * @description This is for getting a list of all versioned flows.  So there could potentially be a lot of data here. Like if some designer guy decides to publish one hundred versions of his workflow they might all get returned here.<br>NOTE: be careful because this API does not check to see if the base flow is marked as Deleted or not.<br>You probably won't want to call this API very often, usually for situations like where the UI has a "restore a previous version of the flow" listbox.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Flow ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	workspace,
	queues,
	document,
	flowconfigid,
	workitemcache,
	*/
	function getFlowsDefinitionsIdVersions(id, pageSize, pageNumber, expand){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}/versions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlowsDefinitionsIdVersions = getFlowsDefinitionsIdVersions;
	/**
     * @summary Create a new versioned flow
	 * @description This method requires the base flow to be already created... and then (with permission) you can create a versioned flow that references it.  This method will set the meta-data of that versioned flow you're creating, and return to you a Uri of the user-upload-service where you can supply the bits of the flow definition.<br><br>There is a Process Definition File for each version of a process.  The Process Definition File contains all of the definitions for everything used by the process.  Eventually, we may support Shared Data Types, Shared Sequences, etc. that are defined in separate files, are organization-global and useable across multiple process definitions for the same organization, but such shared objects are beyond the scope of the initial release.<br><br>The Process Definition File contains Data Type Definitions, Variable Definitions, Sequence Definitions, and Actions, Outputs and Connections.<br><br>Variable Definitions can be created in process-scope or sequence-scope.  A Variable Definition always references a Data Type Definition, regardless of whether the Variable Definition is defining a basic, simple or complex variable.  ( In IPA, basic variables did not have a separate data type definition, but simple and complex variables did.)  The Data Type Definition does not indicate whether a variable is or is not a collection; that configuration is on the Variable Definition.  Variable Definitions scoped to the Process Definition or a Task Definition may be marked as Input Parameters and/or Output Parameters, but Variable Definitions scoped to a State Sequence Definition can marked as neither Input nor Output Parameters.<br><br>An Action is the smallest unit of executable.  Actions are added to Sequence Definitions, and no Action can exist outside of a Sequence Definition.  There are currently two types of Sequence Definitions: State Sequence Definitions and Task Sequence Definitions.  They are very similar, and may generally contain the same kinds of actions, with few restrictions.  A State Sequence Definition is called via a ChangeState action, cannot have input or output parameters, does not induce any Outputs onto the ChangeState action that calls the sequence, and cannot use the ExitTask action.  A Task Sequence Definition is called via the CallTaskSync action, can have input and/or output parameters, may induce Outputs onto the CallTaskSync action that calls the sequence, and can use the ExitTask action.<br><br>An Action may have zero or more Outputs, where each Output is essentially just a pointer to another Action within the same Sequence Definition via an associated Connection object.  An Action with no Outputs is a Terminating Action because it causes the current sequence to end.  Examples of terminating actions are ChangeState, ExitTask and EndProcess.  All non-terminating actions will have at least one Output.  Some actions have a fixed set of outputs (i.e. Conditional if with true/false).  Many actions will have a Default Output that is always present.  Sometimes the Default Output may be the only Output (i.e. UpdateVariables).  Sometimes Outputs get induced into an action by something the action references (i.e. RunProcessSync has a Default Output, but may also gets induced outputs due to Process End Reasons from the referenced Process Definition).<br><br>A Connection connects a specific Output of a specific Action to another Action, or even back to the same Action.  Think of Connections as the "arrows" that the server follows while the server is executing a flow: the server runs an Action; if it is a non-terminating Action, then after the action has completed the server selects an Output on that Action; once the Output is selected, the server looks for a Connection from that Output to another Action, but if there is no Connection for that output then the server exits the sequence (i.e. ExitTask(Default) if it is a Task Sequence Definition, or EndProcess(Default) if it is a State Sequence Definition).<br><br>Note:  There is no need for a Loop action.  This is because a Connection can point from an Output of an Action back to the same action, which is itself inherently a loop.<br><br><br>Page Definition JSON Guidelines<br>The following subsections list the general guides lines to follow when creating JSON objects to be include on the Process Definition File.<br><br>Keep the JSON Shallow Instead of Deep<br>There will always be some level of nesting within JSON: JSON itself always has one root object that contains everything else.  But, as a general rule, we want to keep the JSON shallow instead of deep.  This necessarily implies that fields that reference really complex objects are preferred over fields that contain really complex objects.  For example, rather than nest actions inside of actions that are also nested inside of other actions, all actions within the same sequence are defined within a single list because they are in the scope.  Then, there is another list at sequence scope that contains all of the connections between all of the actions.  Keep things shallow generally makes it easy to find the object you are looking for given it's ID, and nesting deep does not easily allow for structures like actions that connect back to another action earlier in the flow.<br><br>Mind the Well-Known Field Names<br>This file format uses several well-known field names, such as the ones below:<br>    "_meta"<br>    "id"<br>    "refId"<br>    "designer"<br>    "config"<br><br>That list of well-known field names above is not necessarily complete at this time, and will be extended as necessary.  All of the field names within that list should be discussed in this page.
<br>The well-known field names shall only be used for their intended purposes.  Other fields may contain the well known names within a substring of their entire field names. (i.e. "designer" must conform to the rules for "designer", but "myDesigner" could be used for something else.
<br>The "_meta" Field
<br>For deserialization or interpretation purposes, some objects may need a meta section to capture information such as the version of a serialization format.  When present, the field name shall be "_meta", and it shall always be the first field within the object.
<br>There is not currently a specific set of what may or may not appear in a meta object.  Each meta object will likely have the "objectType" field, which holds a string that indicates what type of data is contained by the object with the "_meta" field.  Other possible fields that may be used are "formatType" and/or "formatVersion".  The idea is that the meta object should contain any information that may be necessary for an application to know or understand the other fields that are siblings of the "_meta" field within the same object. 
<br>Generally speaking, the fields within a JSON object are allowed to be in any order, and some serializers may choose to always write the fields in alphabetic order by default.  But, it is somewhat pointless to even have the "_meta" field if it is not first since it's information could not then be used to know what to expect while deserializing the remainder of the object.  Therefore, the meta field intentionally starts with an underscore character to force it to the top if the fields get sorted during serialization.
<br>Also, it is intended that the meta can really appear within almost any object.  Basically, if a bit of extra information is is needed to understand or parse something, a "_meta" field can be added to help interpret the other fields that are siblings of the _meta field.  All "definition" objects should have a meta object that, at a minimum, indicates "objectType".
<br><br><pre>{    // This field, if present, must always be first!<br>    "_meta":<br>    {<br>        // These are some suggest field names, but may not apply in all cases<br>        "objectType": <string><br>        "formatType": <string>,<br>        "formatRevision": <version>,<br> <br>        // Could really have just about anything else here, too<br>        ....<br>    },<br> <br>    // More fields for this specific object must come after the "_meta"<br>    ...<br>}<br> <br>// Null "_meta" is allowed<br>{<br>    "_meta": null,<br>    ...<br>}<br> <br>// Empty object "_meta" is allowed<br>{<br>    "_meta: {},<br>    ...<br>}<br>// Omitted "_meta" is allowed<br>{<br>    ...<br>}</pre><br><br><br>IDs and "id" & "refId" Fields<br><br>The process definition uses IDs!!!  Think of an ID as something that uniquely identifies an object definition.  Conceptually, they are like GUIDs.  However, in reality, something a bit less verbose than GUIDs may be used.<br><br>In an attempt to more easily figure out which object owns/defines/declares the ID vs. which objects just reference the ID, the field name of all owned IDs will be "id" and the field name for all referenced IDs will be "refId".  Additionally, the "refId" shall always be inside a container object, which is intended to<br><br>    Allow for additional information that describe the scope/context in which the ID indicated by "refId" can be found, if necessary<br>    Accommodate the need to reference multiple objects from within the same parent object<br>    Eventually support the ability to reference objects defined outside of the Process Definition, such as shared Data Type Definitins or PureCloud Composer Scripts.<br><br>The field name of the "refId" container object should generally end with "Ref".<br><pre>// Object definition that is assigning an ID to itself; The "id" field does not have to be first<br>{<br>    ...,<br>    "id": <id>,<br>    ...<br>}</pre><br> <br>// Object definition that is referencing the object above via the "refId" field<br><pre>{<br>    // Container object for the "fieldOne" reference<br>    "fieldOneRef":<br>    {<br>        ...,<br> <br>        // This field indicates the ID of that other object that is being referenced<br>        "refId": <id>,<br> <br>        // If necessary, we can add additional fields that describe the scope/context in which<br>        // the object being referenced is expected to be found.<br>        ...<br>    },<br> <br>    // Since "refId" is a well-known field name but the containing object's field names are not<br>    // (i.e. "fieldOneRef" and "fieldTwoRef" are not well-known field names) the same parent object<br>    // can easily reference multiple other objects, while keeping the "refId" field name consistent.<br>    "fieldTwoRef":<br>    {<br>        ...,<br>        "refId": <id>,<br>        ...<br>    }<br>}</pre><br><br>The "identity" Field
<br>Everything about declaring the identity of the object is stored in the "identity" field.  This includes things like the "id" field, if necessary, as well as optional "name" and "description" fields in which store information entered by the user via the designer; it is unclear at this point whether the designer will or will not actually allow the user to view and/or enter a label and/or description for every major object, but the format will at least support it wherever the designer chooses to allow it!  Other information specific to certain object types, such as the revision of the Process Definition, could potentially also be stored in this object.<br><pre>{<br>    "identity":<br>    {<br>        "id":<id>,<br>        "name":string,<br>        "description":<string><br>    }<br>}</pre><br><br>Note:  The "name" and "description" fields should generally be treated as user-mutable, display only – so don't write any code to make any decisions based on a string value in "name or description"!  For example, don't look for an output named "true" on a ConditionalIf action, because it could be localized to another language, or the user may have changed it to "yes", "on", etc.<br>The "designer" Field<br><br>Any designer-specific information shall be isolated into an object under a "designer" field.  This is a well-known field name, and is intended to better faciliate the creation of a streamlined, compiled version of the process definition, etc. should the server decide that it wants to do so.  It is assumed that anything within an object used as the value for a "designer" field is not needed at runtime by the server or by clients.<br><pre>{<br>    "designer":<br>    {<br>        ...,<br>        "notes": <string>,<br>        ...<br>    }<br>}</pre><br><br>A "designer" field can occur at many levels within the JSON, and can always be ignored by the server.  As an example of something that may be added to a designer field, consider the Connections between an Action's Output an the next Action.  The server needs to know what the connection is (i.e. Action's Output points to another Action), but does not need how the connection looks when "drawn" by the user (i.e. goes up, right, down, right, etc.)<br><br>The sample JSON above shows a "notes" field in object used as the value for the "designer" field.  The "identity" section mentioned previously had "name" and "description" fields.  The idea of adding "notes" into the designer field is to allow people designing the process to add very verbose notes about design decisions, etc.  That differs from the identity.descripion, which is intended to be more of a an end-user viewable description, such as a description that assists the user to select the correct Process Definition to launch.<br>The "config" Field<br><br>Many of the objects may have a "config" field.  The contents of this field will generally be specific to the object.  This is were details about Action configuration, Variables configuration, etc. will be located.<br>The "definitions" field and Definition Lists<br><br>Many of the JSON definition objects will themselves also contain definition lists.  For example the Process Definition objects will have a Data Type Definitions list, Variable Definitions list, Sequence Definitions list, End Process Reasons List,. etc.  The Sequence Definition will have an Action Definitions List, Connection Definitions List, Exit Reasons Definitions List, etc. <br><br>When an object definition itself needs to include one or more definition lists, the object shall have a "definitions" field, and the value of that field is an object where the field names are the names of the definition lists.  Additionally, each of those field names that contains a single definition list will generally end with "Def", and every object definition within a definition list will have an "identity" field.  If the objects with a specific definition list have identity.name fields, then each of those identity.name fields shall be unique among all of the objects within that same definition list!<br>// This is a definition object.  Generally speaking, definition lists will exist within some other definition object.<br><pre>{<br>    ...,<br> <br>    // This field contains all of the definition lists,if any<br>    "definitions":<br>    {<br>        // This is the definition list for abcDef objects<br>        "abcDefs":<br>        [<br>            // Each abcDef object has an identity.id<br>            {<br>                "identity":<br>                {<br>                    "id":<id>,<br>                    "name":<string>,<br>                }<br>            },<br> <br>            // There can be any number of definition objects within this definition list,<br>            // but each of them must have a different value for identity.name.<br>            ...<br>        ],<br> <br>        // This is the definition list of xyzDef objects<br>        "xyzDefs":<br>        [<br>            // Each xyzDef object has an identity.id<br>            {<br>                "identity":<br>                {<br>                    "id":<id>,<br> <br>                    // The value of this identity.name field could be the same as a definition<br>                    // object within the "abcDefs" definition list above because the definition<br>                    // objects exist within different definition lists.<br>                    "name":<string><br>                }<br>            },<br>            ...<br>        ]<br>    },<br> <br>    ...,<br>}</pre><br>No Back-Pointers<br><br>Generally speaking, the JSON should stay away from back-pointers.  A back-pointer is a reference back to the parent object definition that has the definitions list that contains the object doing the back-pointing.  For example, a StateSequenceDefinition exists within the ProcessDefinition.definitions.stateSequenceDefs list:<br><br>    Process Definition<br>        definitions<br>            stateSequenceDefs<br>                StateSequenceDefinition<br><br> <br><br>In the example above, the JSON for the StateSeqenceDefinition should not point back to the stateSequenceDefs definitions list, or to the definitions field that contains that definitions list, or the Process Definition that contains that definitions field.  There is no need for such back-pointers because the relationship is already implied by the structure of the JSON.  With that said, however, it is likely that applications may find it useful to create such back-pointers in memory for the purpose of navigating through and manipulating the object graph; they just don't need to serialize it into the JSON.<br>Object Definition Template<br><br>Given the guidelines above, the following is kind of a template for all JSON object definitions.  For any specific definition, however, some of the sections or fields within those sections may not apply.<br><pre>{<br>    "_meta":<br>    {<br>    },<br> <br>    "identity":<br>    {<br>    },<br> <br>    // Keep in mind that the "designer" fields can really exist anywhere,<br>    // not just at the top of a definition.<br>    "designer":<br>    {<br>    },<br> <br>    "config":<br>    {<br>    },<br> <br>    "definitions":<br>    {<br>    }<br>}</pre><br>
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Flow ID
	* @param {boolean} keepFlowCache - Keep flow definition cache
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	workspace,
	queues,
	document,
	flowconfigid,
	workitemcache,
	* @param {} body - This method requires the base flow to be already created... and then (with permission) you can create a versioned flow that references it.  This method will set the meta-data of that versioned flow you're creating, and return to you a Uri of the user-upload-service where you can supply the bits of the flow definition.<br><br>There is a Process Definition File for each version of a process.  The Process Definition File contains all of the definitions for everything used by the process.  Eventually, we may support Shared Data Types, Shared Sequences, etc. that are defined in separate files, are organization-global and useable across multiple process definitions for the same organization, but such shared objects are beyond the scope of the initial release.<br><br>The Process Definition File contains Data Type Definitions, Variable Definitions, Sequence Definitions, and Actions, Outputs and Connections.<br><br>Variable Definitions can be created in process-scope or sequence-scope.  A Variable Definition always references a Data Type Definition, regardless of whether the Variable Definition is defining a basic, simple or complex variable.  ( In IPA, basic variables did not have a separate data type definition, but simple and complex variables did.)  The Data Type Definition does not indicate whether a variable is or is not a collection; that configuration is on the Variable Definition.  Variable Definitions scoped to the Process Definition or a Task Definition may be marked as Input Parameters and/or Output Parameters, but Variable Definitions scoped to a State Sequence Definition can marked as neither Input nor Output Parameters.<br><br>An Action is the smallest unit of executable.  Actions are added to Sequence Definitions, and no Action can exist outside of a Sequence Definition.  There are currently two types of Sequence Definitions: State Sequence Definitions and Task Sequence Definitions.  They are very similar, and may generally contain the same kinds of actions, with few restrictions.  A State Sequence Definition is called via a ChangeState action, cannot have input or output parameters, does not induce any Outputs onto the ChangeState action that calls the sequence, and cannot use the ExitTask action.  A Task Sequence Definition is called via the CallTaskSync action, can have input and/or output parameters, may induce Outputs onto the CallTaskSync action that calls the sequence, and can use the ExitTask action.<br><br>An Action may have zero or more Outputs, where each Output is essentially just a pointer to another Action within the same Sequence Definition via an associated Connection object.  An Action with no Outputs is a Terminating Action because it causes the current sequence to end.  Examples of terminating actions are ChangeState, ExitTask and EndProcess.  All non-terminating actions will have at least one Output.  Some actions have a fixed set of outputs (i.e. Conditional if with true/false).  Many actions will have a Default Output that is always present.  Sometimes the Default Output may be the only Output (i.e. UpdateVariables).  Sometimes Outputs get induced into an action by something the action references (i.e. RunProcessSync has a Default Output, but may also gets induced outputs due to Process End Reasons from the referenced Process Definition).<br><br>A Connection connects a specific Output of a specific Action to another Action, or even back to the same Action.  Think of Connections as the "arrows" that the server follows while the server is executing a flow: the server runs an Action; if it is a non-terminating Action, then after the action has completed the server selects an Output on that Action; once the Output is selected, the server looks for a Connection from that Output to another Action, but if there is no Connection for that output then the server exits the sequence (i.e. ExitTask(Default) if it is a Task Sequence Definition, or EndProcess(Default) if it is a State Sequence Definition).<br><br>Note:  There is no need for a Loop action.  This is because a Connection can point from an Output of an Action back to the same action, which is itself inherently a loop.<br><br><br>Page Definition JSON Guidelines<br>The following subsections list the general guides lines to follow when creating JSON objects to be include on the Process Definition File.<br><br>Keep the JSON Shallow Instead of Deep<br>There will always be some level of nesting within JSON: JSON itself always has one root object that contains everything else.  But, as a general rule, we want to keep the JSON shallow instead of deep.  This necessarily implies that fields that reference really complex objects are preferred over fields that contain really complex objects.  For example, rather than nest actions inside of actions that are also nested inside of other actions, all actions within the same sequence are defined within a single list because they are in the scope.  Then, there is another list at sequence scope that contains all of the connections between all of the actions.  Keep things shallow generally makes it easy to find the object you are looking for given it's ID, and nesting deep does not easily allow for structures like actions that connect back to another action earlier in the flow.<br><br>Mind the Well-Known Field Names<br>This file format uses several well-known field names, such as the ones below:<br>    "_meta"<br>    "id"<br>    "refId"<br>    "designer"<br>    "config"<br><br>That list of well-known field names above is not necessarily complete at this time, and will be extended as necessary.  All of the field names within that list should be discussed in this page.
<br>The well-known field names shall only be used for their intended purposes.  Other fields may contain the well known names within a substring of their entire field names. (i.e. "designer" must conform to the rules for "designer", but "myDesigner" could be used for something else.
<br>The "_meta" Field
<br>For deserialization or interpretation purposes, some objects may need a meta section to capture information such as the version of a serialization format.  When present, the field name shall be "_meta", and it shall always be the first field within the object.
<br>There is not currently a specific set of what may or may not appear in a meta object.  Each meta object will likely have the "objectType" field, which holds a string that indicates what type of data is contained by the object with the "_meta" field.  Other possible fields that may be used are "formatType" and/or "formatVersion".  The idea is that the meta object should contain any information that may be necessary for an application to know or understand the other fields that are siblings of the "_meta" field within the same object. 
<br>Generally speaking, the fields within a JSON object are allowed to be in any order, and some serializers may choose to always write the fields in alphabetic order by default.  But, it is somewhat pointless to even have the "_meta" field if it is not first since it's information could not then be used to know what to expect while deserializing the remainder of the object.  Therefore, the meta field intentionally starts with an underscore character to force it to the top if the fields get sorted during serialization.
<br>Also, it is intended that the meta can really appear within almost any object.  Basically, if a bit of extra information is is needed to understand or parse something, a "_meta" field can be added to help interpret the other fields that are siblings of the _meta field.  All "definition" objects should have a meta object that, at a minimum, indicates "objectType".
<br><br><pre>{    // This field, if present, must always be first!<br>    "_meta":<br>    {<br>        // These are some suggest field names, but may not apply in all cases<br>        "objectType": <string><br>        "formatType": <string>,<br>        "formatRevision": <version>,<br> <br>        // Could really have just about anything else here, too<br>        ....<br>    },<br> <br>    // More fields for this specific object must come after the "_meta"<br>    ...<br>}<br> <br>// Null "_meta" is allowed<br>{<br>    "_meta": null,<br>    ...<br>}<br> <br>// Empty object "_meta" is allowed<br>{<br>    "_meta: {},<br>    ...<br>}<br>// Omitted "_meta" is allowed<br>{<br>    ...<br>}</pre><br><br><br>IDs and "id" & "refId" Fields<br><br>The process definition uses IDs!!!  Think of an ID as something that uniquely identifies an object definition.  Conceptually, they are like GUIDs.  However, in reality, something a bit less verbose than GUIDs may be used.<br><br>In an attempt to more easily figure out which object owns/defines/declares the ID vs. which objects just reference the ID, the field name of all owned IDs will be "id" and the field name for all referenced IDs will be "refId".  Additionally, the "refId" shall always be inside a container object, which is intended to<br><br>    Allow for additional information that describe the scope/context in which the ID indicated by "refId" can be found, if necessary<br>    Accommodate the need to reference multiple objects from within the same parent object<br>    Eventually support the ability to reference objects defined outside of the Process Definition, such as shared Data Type Definitins or PureCloud Composer Scripts.<br><br>The field name of the "refId" container object should generally end with "Ref".<br><pre>// Object definition that is assigning an ID to itself; The "id" field does not have to be first<br>{<br>    ...,<br>    "id": <id>,<br>    ...<br>}</pre><br> <br>// Object definition that is referencing the object above via the "refId" field<br><pre>{<br>    // Container object for the "fieldOne" reference<br>    "fieldOneRef":<br>    {<br>        ...,<br> <br>        // This field indicates the ID of that other object that is being referenced<br>        "refId": <id>,<br> <br>        // If necessary, we can add additional fields that describe the scope/context in which<br>        // the object being referenced is expected to be found.<br>        ...<br>    },<br> <br>    // Since "refId" is a well-known field name but the containing object's field names are not<br>    // (i.e. "fieldOneRef" and "fieldTwoRef" are not well-known field names) the same parent object<br>    // can easily reference multiple other objects, while keeping the "refId" field name consistent.<br>    "fieldTwoRef":<br>    {<br>        ...,<br>        "refId": <id>,<br>        ...<br>    }<br>}</pre><br><br>The "identity" Field
<br>Everything about declaring the identity of the object is stored in the "identity" field.  This includes things like the "id" field, if necessary, as well as optional "name" and "description" fields in which store information entered by the user via the designer; it is unclear at this point whether the designer will or will not actually allow the user to view and/or enter a label and/or description for every major object, but the format will at least support it wherever the designer chooses to allow it!  Other information specific to certain object types, such as the revision of the Process Definition, could potentially also be stored in this object.<br><pre>{<br>    "identity":<br>    {<br>        "id":<id>,<br>        "name":string,<br>        "description":<string><br>    }<br>}</pre><br><br>Note:  The "name" and "description" fields should generally be treated as user-mutable, display only – so don't write any code to make any decisions based on a string value in "name or description"!  For example, don't look for an output named "true" on a ConditionalIf action, because it could be localized to another language, or the user may have changed it to "yes", "on", etc.<br>The "designer" Field<br><br>Any designer-specific information shall be isolated into an object under a "designer" field.  This is a well-known field name, and is intended to better faciliate the creation of a streamlined, compiled version of the process definition, etc. should the server decide that it wants to do so.  It is assumed that anything within an object used as the value for a "designer" field is not needed at runtime by the server or by clients.<br><pre>{<br>    "designer":<br>    {<br>        ...,<br>        "notes": <string>,<br>        ...<br>    }<br>}</pre><br><br>A "designer" field can occur at many levels within the JSON, and can always be ignored by the server.  As an example of something that may be added to a designer field, consider the Connections between an Action's Output an the next Action.  The server needs to know what the connection is (i.e. Action's Output points to another Action), but does not need how the connection looks when "drawn" by the user (i.e. goes up, right, down, right, etc.)<br><br>The sample JSON above shows a "notes" field in object used as the value for the "designer" field.  The "identity" section mentioned previously had "name" and "description" fields.  The idea of adding "notes" into the designer field is to allow people designing the process to add very verbose notes about design decisions, etc.  That differs from the identity.descripion, which is intended to be more of a an end-user viewable description, such as a description that assists the user to select the correct Process Definition to launch.<br>The "config" Field<br><br>Many of the objects may have a "config" field.  The contents of this field will generally be specific to the object.  This is were details about Action configuration, Variables configuration, etc. will be located.<br>The "definitions" field and Definition Lists<br><br>Many of the JSON definition objects will themselves also contain definition lists.  For example the Process Definition objects will have a Data Type Definitions list, Variable Definitions list, Sequence Definitions list, End Process Reasons List,. etc.  The Sequence Definition will have an Action Definitions List, Connection Definitions List, Exit Reasons Definitions List, etc. <br><br>When an object definition itself needs to include one or more definition lists, the object shall have a "definitions" field, and the value of that field is an object where the field names are the names of the definition lists.  Additionally, each of those field names that contains a single definition list will generally end with "Def", and every object definition within a definition list will have an "identity" field.  If the objects with a specific definition list have identity.name fields, then each of those identity.name fields shall be unique among all of the objects within that same definition list!<br>// This is a definition object.  Generally speaking, definition lists will exist within some other definition object.<br><pre>{<br>    ...,<br> <br>    // This field contains all of the definition lists,if any<br>    "definitions":<br>    {<br>        // This is the definition list for abcDef objects<br>        "abcDefs":<br>        [<br>            // Each abcDef object has an identity.id<br>            {<br>                "identity":<br>                {<br>                    "id":<id>,<br>                    "name":<string>,<br>                }<br>            },<br> <br>            // There can be any number of definition objects within this definition list,<br>            // but each of them must have a different value for identity.name.<br>            ...<br>        ],<br> <br>        // This is the definition list of xyzDef objects<br>        "xyzDefs":<br>        [<br>            // Each xyzDef object has an identity.id<br>            {<br>                "identity":<br>                {<br>                    "id":<id>,<br> <br>                    // The value of this identity.name field could be the same as a definition<br>                    // object within the "abcDefs" definition list above because the definition<br>                    // objects exist within different definition lists.<br>                    "name":<string><br>                }<br>            },<br>            ...<br>        ]<br>    },<br> <br>    ...,<br>}</pre><br>No Back-Pointers<br><br>Generally speaking, the JSON should stay away from back-pointers.  A back-pointer is a reference back to the parent object definition that has the definitions list that contains the object doing the back-pointing.  For example, a StateSequenceDefinition exists within the ProcessDefinition.definitions.stateSequenceDefs list:<br><br>    Process Definition<br>        definitions<br>            stateSequenceDefs<br>                StateSequenceDefinition<br><br> <br><br>In the example above, the JSON for the StateSeqenceDefinition should not point back to the stateSequenceDefs definitions list, or to the definitions field that contains that definitions list, or the Process Definition that contains that definitions field.  There is no need for such back-pointers because the relationship is already implied by the structure of the JSON.  With that said, however, it is likely that applications may find it useful to create such back-pointers in memory for the purpose of navigating through and manipulating the object graph; they just don't need to serialize it into the JSON.<br>Object Definition Template<br><br>Given the guidelines above, the following is kind of a template for all JSON object definitions.  For any specific definition, however, some of the sections or fields within those sections may not apply.<br><pre>{<br>    "_meta":<br>    {<br>    },<br> <br>    "identity":<br>    {<br>    },<br> <br>    // Keep in mind that the "designer" fields can really exist anywhere,<br>    // not just at the top of a definition.<br>    "designer":<br>    {<br>    },<br> <br>    "config":<br>    {<br>    },<br> <br>    "definitions":<br>    {<br>    }<br>}</pre><br>
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "versionSpecificComment": "",
   "flowDefinitionUri": "",
   "flowDefinitionUploaded": true,
   "createdByUser": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "createdDate": "",
   "selfUri": "",
   "version": ""
}
	*/
	function createFlowsDefinitionsIdVersions(id, keepFlowCache, expand, body){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}/versions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(keepFlowCache !== undefined && keepFlowCache !== null){
			queryParameters.keepFlowCache = keepFlowCache;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsDefinitionsIdVersions = createFlowsDefinitionsIdVersions;
	/**
     * @summary Get the meta-data about a versioned flow
	 * @description This will get the meta-data about a particular version of a flow.<br>Also, if you specify a query parameter of  'wantDownloadUri=true', the service will return to you an Uri of a location where you can download the flow  definition content.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Flow ID
	* @param {string} version - Flow Version
	* @param {boolean} wantDownloadUri - True if you want an Uri to download the flow definition content.
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	workspace,
	queues,
	document,
	flowconfigid,
	workitemcache,
	*/
	function getFlowsDefinitionsIdVersionsByVersion(id, version, wantDownloadUri, expand){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}/versions/{version}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        apipath = apipath.replace('{version}', version);

        if(version === undefined && version !== null){
			throw 'Missing required  parameter: version';
        }


		if(wantDownloadUri !== undefined && wantDownloadUri !== null){
			queryParameters.wantDownloadUri = wantDownloadUri;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlowsDefinitionsIdVersionsByVersion = getFlowsDefinitionsIdVersionsByVersion;
	/**
     * @summary publish a minor version of a flow to a major version
	 * @description Minor versions are not "seen" by regular agents, they're only seen by the Designer for intermediate work. <br>When a flow is considered suitable for general use, it gets promoted to a major version with this API, which then makes it visible to regular agents for use. <br>Note that there is no "unpublish" action, if you find there's a problem with your flow then you can either mark is as inactive (so nobody can launch that flow) or re-publish a prior version that you have from some export over the top of the one you don't like.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Flow ID
	* @param {string} version - Flow Version
	*/
	function createFlowsDefinitionsIdVersionsByVersionCommandsPublish(id, version){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}/versions/{version}/commands/publish';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        apipath = apipath.replace('{version}', version);

        if(version === undefined && version !== null){
			throw 'Missing required  parameter: version';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsDefinitionsIdVersionsByVersionCommandsPublish = createFlowsDefinitionsIdVersionsByVersionCommandsPublish;
	/**
     * @summary Launches a flow
	 * @description Launches the most recently published version of the flow.  Accepts a FlowLaunch data object as a payload.
	 * @memberOf ProcessautomationApi#
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	workspace,
	queues,
	document,
	flowconfigid,
	workitemcache,
	* @param {} flowLaunch - Launches the most recently published version of the flow.  Accepts a FlowLaunch data object as a payload.
	 * @example
	 * Body Example:
	 * {
   "flowConfigId": {
      "id": "",
      "name": "",
      "selfUri": "",
      "version": ""
   },
   "flowInstanceName": "",
   "inputData": {
      "linkedDocumentIds": []
   },
   "launchType": ""
}
	*/
	function createFlowsInstances(expand, flowLaunch){
		var apipath = '/api/v1/processautomation/flows/instances';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}

        if(flowLaunch !== undefined && flowLaunch !== null){
            requestBody = flowLaunch;
        }

        if(flowLaunch === undefined && flowLaunch !== null){
			throw 'Missing required  parameter: flowLaunch';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsInstances = createFlowsInstances;
	/**
     * @summary Search the currently running flow instances
	 * @description Searches the pool of running flow instances given a SearchRequest object and returns the matching results. Some Search Examples:<br>Note the various filters, sort and searchPhrase options can be combined/omitted as needed.<br>Search for a specific definition id:<br>{<br>&nbsp;&nbsp;&nbsp;"filters": [<br>&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "flowConfigId.id",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "STRING",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"operator": "EQUALS",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"values": [<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"e88db9fb-aaa0-46f8-81d5-4a30e323bdfa"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br>&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;]<br>}<br><br>Search for a specific execution instance and sort on the config name:<br>{<br>&nbsp;&nbsp;&nbsp;"filters": [<br>&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "flowExecId",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "STRING",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"operator": "EQUALS",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"values": [<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"99"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br>&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;],<br>&nbsp;&nbsp;&nbsp;"sort" : [<br>&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name":"flowConfigName",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"sortType":"ASCENDING"<br>&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;]<br>}<br>Search for a specific phrase:<br>{<br>&nbsp;&nbsp;&nbsp;"searchPhrase" : "hi mom!" <br>}<br>
	 * @memberOf ProcessautomationApi#
	* @param {} body - SearchRequest data containing search parameters and paging response.
	 * @example
	 * Body Example:
	 * {
   "searchPhrase": "",
   "pageNumber": 0,
   "pageSize": 0,
   "searchFields": [],
   "facetRequests": [],
   "sort": [],
   "filters": []
}
	*/
	function createFlowsInstancesCommandsSearch(body){
		var apipath = '/api/v1/processautomation/flows/instances/commands/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsInstancesCommandsSearch = createFlowsInstancesCommandsSearch;
	/**
     * @summary Get the data for a running flow
	 * @description This will get the information about the current running state of the flow.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Flow Exec ID
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	workspace,
	queues,
	document,
	flowconfigid,
	workitemcache,
	*/
	function getFlowsInstancesId(id, expand){
		var apipath = '/api/v1/processautomation/flows/instances/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlowsInstancesId = getFlowsInstancesId;
	/**
     * @summary Retries a flow instance
	 * @description Retries a flow instance
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Flow Exec ID
	*/
	function createFlowsInstancesIdCommandsRetry(id){
		var apipath = '/api/v1/processautomation/flows/instances/{id}/commands/retry';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsInstancesIdCommandsRetry = createFlowsInstancesIdCommandsRetry;
	/**
     * @summary Terminates a flow instance
	 * @description Terminates a flow instance
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Flow Exec ID
	* @param {} body - terminate options
	 * @example
	 * Body Example:
	 * {
   "force": true,
   "reason": ""
}
	*/
	function createFlowsInstancesIdCommandsTerminate(id, body){
		var apipath = '/api/v1/processautomation/flows/instances/{id}/commands/terminate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsInstancesIdCommandsTerminate = createFlowsInstancesIdCommandsTerminate;
	/**
     * @summary Get the history of a flow instance
	 * @description Get the history of a flow instance
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Flow Exec ID
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	workspace,
	queues,
	document,
	flowconfigid,
	workitemcache,
	*/
	function getFlowsInstancesIdHistory(id, expand){
		var apipath = '/api/v1/processautomation/flows/instances/{id}/history';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlowsInstancesIdHistory = getFlowsInstancesIdHistory;
	/**
     * @summary Get all queues for an organization
	 * @description This method will get all the queues defined in your organization.
	 * @memberOf ProcessautomationApi#
	* @param {integer} pageSize - The number of entries to return per page, or omitted for the default.
	* @param {integer} pageNumber - The page number to return, or omitted for the first page.
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	*/
	function getQueues(pageSize, pageNumber, expand){
		var apipath = '/api/v1/processautomation/queues';
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


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueues = getQueues;
	/**
     * @summary Create a new queue object
	 * @description This method will create a new queue and assign it a new id.
	 * @memberOf ProcessautomationApi#
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	* @param {} body - This method will create a new queue and assign it a new id.
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "members": [],
   "selfUri": ""
}
	*/
	function createQueues(expand, body){
		var apipath = '/api/v1/processautomation/queues';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createQueues = createQueues;
	/**
     * @summary Get details about this queue
	 * @description This returns details about the queue like the name and description.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	*/
	function getQueuesId(id, expand){
		var apipath = '/api/v1/processautomation/queues/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueuesId = getQueuesId;
	/**
     * @summary Update a queue
	 * @description Update the name and description of a queue.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	* @param {} body - updated queue
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "members": [],
   "selfUri": ""
}
	*/
	function updateQueuesId(id, body){
		var apipath = '/api/v1/processautomation/queues/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateQueuesId = updateQueuesId;
	/**
     * @summary Delete a queue
	 * @description Removes a queue for an organization.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	*/
	function deleteQueuesId(id){
		var apipath = '/api/v1/processautomation/queues/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteQueuesId = deleteQueuesId;
	/**
     * @summary Get members in a queue
	 * @description Get the list of members in a queue.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Queue ID
	* @param {integer} pageSize - The number of entries to return per page, or omitted for the default.
	* @param {integer} pageNumber - The page number to return, or omitted for the first page.
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	*/
	function getQueuesIdMembers(id, pageSize, pageNumber, expand){
		var apipath = '/api/v1/processautomation/queues/{id}/members';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueuesIdMembers = getQueuesIdMembers;
	/**
     * @summary Edit the members in a queue
	 * @description Updates the members of the specified queue from the given list.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Queue ID
	* @param {integer} pageSize - The number of entries to return per page, or omitted for the default.
	* @param {integer} pageNumber - The page number to return, or omitted for the first page.
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	* @param {} body - Queue Member List
	*/
	function updateQueuesIdMembers(id, pageSize, pageNumber, expand, body){
		var apipath = '/api/v1/processautomation/queues/{id}/members';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateQueuesIdMembers = updateQueuesIdMembers;
	/**
     * @summary Get a member from a queue
	 * @description This will get the specified member from the queue.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Queue ID
	* @param {string} memberId - Member ID
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	*/
	function getQueuesIdMembersByMemberId(id, memberId, expand){
		var apipath = '/api/v1/processautomation/queues/{id}/members/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        apipath = apipath.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueuesIdMembersByMemberId = getQueuesIdMembersByMemberId;
	/**
     * @summary Add a member to a queue
	 * @description This will add the specified member to the given queue.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Queue ID
	* @param {string} memberId - Member ID
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	* @param {} body - Queue Member
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "user": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "selfUri": ""
}
	*/
	function updateQueuesIdMembersByMemberId(id, memberId, expand, body){
		var apipath = '/api/v1/processautomation/queues/{id}/members/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        apipath = apipath.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateQueuesIdMembersByMemberId = updateQueuesIdMembersByMemberId;
	/**
     * @summary Delete a member from a queue
	 * @description This will delete the specified member from the given queue.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Queue ID
	* @param {string} memberId - Member ID
	*/
	function deleteQueuesIdMembersByMemberId(id, memberId){
		var apipath = '/api/v1/processautomation/queues/{id}/members/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        apipath = apipath.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteQueuesIdMembersByMemberId = deleteQueuesIdMembersByMemberId;
	/**
     * @summary Generates a list of active and/or completed flows based upon the specified filters and facets.
	 * @description Searches the pool of running and completed flow instances given a ReportRequest object and returns the matching results.
	 * @memberOf ProcessautomationApi#
	* @param {} body - ReportRequest data containing search parameters and paging response.
	 * @example
	 * Body Example:
	 * {
   "pageNumber": 0,
   "pageSize": 0,
   "facetRequests": [],
   "sort": [],
   "filters": [],
   "groupBy": []
}
	*/
	function createReportsFlowSearch(body){
		var apipath = '/api/v1/processautomation/reports/flow/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createReportsFlowSearch = createReportsFlowSearch;
	/**
     * @summary Search the currently running workitems
	 * @description Searches the pool of running workitems given a SearchRequest object and returns the results.  Some search examples:<br>Note the various filters, sort and searchPhrase options can be combined/omitted as needed.<br>Search for a specific definition id:<br>{<br>&nbsp;&nbsp;&nbsp;"filters": [<br>&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "flowConfigId.id",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "STRING",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"operator": "EQUALS",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"values": [<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"e88db9fb-aaa0-46f8-81d5-4a30e323bdfa"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br>&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;]<br>}<br><br>Search for a specific execution instance and sort on the config name:<br>{<br>&nbsp;&nbsp;&nbsp;"filters": [<br>&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "flowExecId",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "STRING",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"operator": "EQUALS",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"values": [<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"99"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br>&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;],<br>&nbsp;&nbsp;&nbsp;"sort" : [<br>&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name":"flowConfigName",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"sortType":"ASCENDING"<br>&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;]<br>}<br>Search for a specific phrase:<br>{<br>&nbsp;&nbsp;&nbsp;"searchPhrase" : "hi mom!" <br>}<br>
	 * @memberOf ProcessautomationApi#
	* @param {} body - SearchRequest data containing search parameters and paging response.
	 * @example
	 * Body Example:
	 * {
   "searchPhrase": "",
   "pageNumber": 0,
   "pageSize": 0,
   "searchFields": [],
   "facetRequests": [],
   "sort": [],
   "filters": []
}
	*/
	function createWorkitemsInstancesCommandsSearch(body){
		var apipath = '/api/v1/processautomation/workitems/instances/commands/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createWorkitemsInstancesCommandsSearch = createWorkitemsInstancesCommandsSearch;
	/**
     * @summary Get a Work Item's Details
	 * @description Gets the details of a work item including the information needed to display its simple form, if it has one.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Work Item Exec ID
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	workspace,
	queues,
	document,
	flowconfigid,
	workitemcache,
	*/
	function getWorkitemsInstancesId(id, expand){
		var apipath = '/api/v1/processautomation/workitems/instances/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkitemsInstancesId = getWorkitemsInstancesId;
	/**
     * @summary Submits a work item
	 * @description <p>Signals the flow to continue executing using the specified command of the given work item.</p><p>Common error conditions to be aware of are:<dl><dd>error.workflow.flows.workItem.ownership - the given user was denied the ability to own the work item</dd><dd>error.workflow.flows.workItem.owned - the work item is already owned by somebody else</dd><dd>error.workflow.flows.workItem.notExist - the work item does not exist, possibly because it was already submitted by someone else</dd><dd>error.workflow.flows.workItem.submit - some other error submitting the work item</dd></dl></p>
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Work Item Exec ID
	* @param {} body - submit request data
	 * @example
	 * Body Example:
	 * {
   "commandId": "",
   "dataItems": []
}
	*/
	function createWorkitemsInstancesIdCommandsSubmit(id, body){
		var apipath = '/api/v1/processautomation/workitems/instances/{id}/commands/submit';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createWorkitemsInstancesIdCommandsSubmit = createWorkitemsInstancesIdCommandsSubmit;
	/**
     * @summary Attempts to take ownership of a work item
	 * @description Basically, this is called by a client to assign ownership to the currently connected user.  Only the user that has ownership can submit against a work item.  This will be rejected is someone else owns it, like if it’s in a queue and somebody grabs it at the same time.  The first guy wins the ownership. 
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Work Item Exec ID
	*/
	function createWorkitemsInstancesIdCommandsTakeownership(id){
		var apipath = '/api/v1/processautomation/workitems/instances/{id}/commands/takeownership';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createWorkitemsInstancesIdCommandsTakeownership = createWorkitemsInstancesIdCommandsTakeownership;
	/**
     * @summary Transfers a work item
	 * @description Unassigns a work item, if currently assigned, and offers a work item to another user or queue; the work item is initially unassigned (meaning un-owned).   You have to own the item to transfer it, unless you’re an admin and using a “force” flag.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Work Item Exec ID
	* @param {} body - transfer request data
	 * @example
	 * Body Example:
	 * {
   "transferTargetType": "",
   "transferTarget": ""
}
	*/
	function createWorkitemsInstancesIdCommandsTransfer(id, body){
		var apipath = '/api/v1/processautomation/workitems/instances/{id}/commands/transfer';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createWorkitemsInstancesIdCommandsTransfer = createWorkitemsInstancesIdCommandsTransfer;
	/**
     * @summary Gets an optional cache for a given workItem.
	 * @description Gets a user saved cache of workItem data.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Work Item Exec ID
	*/
	function getWorkitemsInstancesIdWorkitemcache(id){
		var apipath = '/api/v1/processautomation/workitems/instances/{id}/workitemcache';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkitemsInstancesIdWorkitemcache = getWorkitemsInstancesIdWorkitemcache;
	/**
     * @summary Saves workItem data to a temporary location.
	 * @description The cache is automatically deleted when a workItem is submitted.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Work Item Exec ID
	* @param {} body - workItem cache data
	 * @example
	 * Body Example:
	 * {
   "workItemExecId": "",
   "saveTime": "",
   "saveUser": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "saveComment": "",
   "dataItems": []
}
	*/
	function updateWorkitemsInstancesIdWorkitemcache(id, body){
		var apipath = '/api/v1/processautomation/workitems/instances/{id}/workitemcache';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateWorkitemsInstancesIdWorkitemcache = updateWorkitemsInstancesIdWorkitemcache;

    return self;
};