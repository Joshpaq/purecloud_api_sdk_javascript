/**
* @class
* @example
* var api = new BillingApi(pureCloudSession);
*/
var BillingApi = function (pureCloudSession) {
	/**
     * @summary Get constumer account.
	 * @description 
	 * @memberOf BillingApi#
	*/
	function getAccount(){
		var apipath = '/api/v1/billing/account';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAccount = getAccount;
	/**
     * @summary Update customer account.
	 * @description 
	 * @memberOf BillingApi#
	* @param {} body - The account to be updated
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "isFrozen": true,
   "orgLegalName": "",
   "orgPhone": "",
   "isTaxExempt": true,
   "billingAddress": {
      "id": "",
      "name": "",
      "street": "",
      "city": "",
      "countryName": "",
      "stateName": "",
      "postalCode": "",
      "selfUri": ""
   },
   "currency": "",
   "selfUri": ""
}
	*/
	function updateAccount(body){
		var apipath = '/api/v1/billing/account';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateAccount = updateAccount;
	/**
     * @summary Create billing account.
	 * @description 
	 * @memberOf BillingApi#
	* @param {} body - The account to be created
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "orgLegalName": "",
   "billingAddressLine1": "",
   "billingAddressLine2": "",
   "billingAddressCity": "",
   "billingAddressState": "",
   "billingAddressZipCode": "",
   "billingAddressCountry": "",
   "legalAddressLine1": "",
   "legalAddressLine2": "",
   "legalAddressCity": "",
   "legalAddressState": "",
   "legalAddressZipCode": "",
   "legalAddressCountry": "",
   "billingContactFirstName": "",
   "billingContactLastName": "",
   "billingContactEmail": "",
   "billingContactPhone": "",
   "purchaseOrderNumber": "",
   "isTaxExempt": true,
   "currency": "",
   "paymentTerm": "",
   "contractTerm": 0,
   "autoRenew": true,
   "enabled": true,
   "minCommitQuantities": {},
   "estimatedQuantities": {},
   "oneTimeCharges": [],
   "selfUri": ""
}
	*/
	function createAccounts(body){
		var apipath = '/api/v1/billing/accounts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createAccounts = createAccounts;
	/**
     * @summary Get billing account.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} accountId - Identifies the account to be retrieved
	* @param {string} fields - Fields needed
	*/
	function getBillingAccount(accountId, fields){
		var apipath = '/api/v1/billing/accounts/{accountId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }


		if(fields !== undefined && fields !== null){
			queryParameters.fields = fields;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getBillingAccount = getBillingAccount;
	/**
     * @summary Updates the billing account.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} accountId - Identifies the account to be updated
	* @param {} body - The account to be updated
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "orgLegalName": "",
   "billingAddressLine1": "",
   "billingAddressLine2": "",
   "billingAddressCity": "",
   "billingAddressState": "",
   "billingAddressZipCode": "",
   "billingAddressCountry": "",
   "legalAddressLine1": "",
   "legalAddressLine2": "",
   "legalAddressCity": "",
   "legalAddressState": "",
   "legalAddressZipCode": "",
   "legalAddressCountry": "",
   "billingContactFirstName": "",
   "billingContactLastName": "",
   "billingContactEmail": "",
   "billingContactPhone": "",
   "purchaseOrderNumber": "",
   "isTaxExempt": true,
   "currency": "",
   "paymentTerm": "",
   "contractTerm": 0,
   "autoRenew": true,
   "enabled": true,
   "minCommitQuantities": {},
   "estimatedQuantities": {},
   "oneTimeCharges": [],
   "selfUri": ""
}
	*/
	function updateBillingAccount(accountId, body){
		var apipath = '/api/v1/billing/accounts/{accountId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateBillingAccount = updateBillingAccount;
	/**
     * @summary Terminates the billing account of the org.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} accountId - Identifies the account to be terminated
	*/
	function deleteAccount(accountId){
		var apipath = '/api/v1/billing/accounts/{accountId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteAccount = deleteAccount;
	/**
     * @summary Get billing account overview.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} accountId - Identifies the account whose status should be retrieved
	*/
	function getAccountOverview(accountId){
		var apipath = '/api/v1/billing/accounts/{accountId}/overview';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAccountOverview = getAccountOverview;
	/**
     * @summary Get billing account status.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} accountId - Identifies the account whose status should be retrieved
	*/
	function getAccountStatus(accountId){
		var apipath = '/api/v1/billing/accounts/{accountId}/status';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAccountStatus = getAccountStatus;
	/**
     * @summary Updates the billing account status.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} accountId - Identifies the account whose status should be updated
	* @param {} body - The account status to be updated
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "orgName": "",
   "configured": true,
   "adminUIURL": "",
   "thirdPartyAccountId": "",
   "thirdPartySubscriptionId": "",
   "thirdPartySubscriptionNonAcbId": "",
   "selfUri": ""
}
	*/
	function updateAccountStatus(accountId, body){
		var apipath = '/api/v1/billing/accounts/{accountId}/status';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateAccountStatus = updateAccountStatus;
	/**
     * @summary Get available additional services.
	 * @description 
	 * @memberOf BillingApi#
	*/
	function getAdditionalservices(){
		var apipath = '/api/v1/billing/additionalservices';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAdditionalservices = getAdditionalservices;
	/**
     * @summary Get billing addresses.
	 * @description 
	 * @memberOf BillingApi#
	*/
	function getAddresses(){
		var apipath = '/api/v1/billing/addresses';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAddresses = getAddresses;
	/**
     * @summary Create billing address.
	 * @description 
	 * @memberOf BillingApi#
	* @param {} body - The address to be created
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "street": "",
   "city": "",
   "countryName": "",
   "stateName": "",
   "postalCode": "",
   "selfUri": ""
}
	*/
	function createAddresses(body){
		var apipath = '/api/v1/billing/addresses';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createAddresses = createAddresses;
	/**
     * @summary Get a billing address
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} addressId - The ID of the address
	*/
	function getAddressesAddress(addressId){
		var apipath = '/api/v1/billing/addresses/{addressId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{addressId}', addressId);

        if(addressId === undefined && addressId !== null){
			throw 'Missing required  parameter: addressId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAddressesAddress = getAddressesAddress;
	/**
     * @summary Update billing address
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} addressId - The ID of the address
	* @param {} body - The address to be updated
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "street": "",
   "city": "",
   "countryName": "",
   "stateName": "",
   "postalCode": "",
   "selfUri": ""
}
	*/
	function updateAddressesAddress(addressId, body){
		var apipath = '/api/v1/billing/addresses/{addressId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{addressId}', addressId);

        if(addressId === undefined && addressId !== null){
			throw 'Missing required  parameter: addressId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateAddressesAddress = updateAddressesAddress;
	/**
     * @summary Delete billing address
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} addressId - The ID of the address
	*/
	function deleteAddressesAddress(addressId){
		var apipath = '/api/v1/billing/addresses/{addressId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{addressId}', addressId);

        if(addressId === undefined && addressId !== null){
			throw 'Missing required  parameter: addressId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteAddressesAddress = deleteAddressesAddress;
	/**
     * @summary Get basic products.
	 * @description 
	 * @memberOf BillingApi#
	*/
	function getBasicproducts(){
		var apipath = '/api/v1/billing/basicproducts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getBasicproducts = getBasicproducts;
	/**
     * @summary Get carrier services usage data.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} from - startDateTime
	* @param {string} to - endDateTime
	* @param {integer} limit - Limit the number of results
	*/
	function getCarrierservicesUsageCalls(from, to, limit){
		var apipath = '/api/v1/billing/carrierservices/usage/calls';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(from !== undefined && from !== null){
			queryParameters.from = from;
		}


		if(to !== undefined && to !== null){
			queryParameters.to = to;
		}


		if(limit !== undefined && limit !== null){
			queryParameters.limit = limit;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCarrierservicesUsageCalls = getCarrierservicesUsageCalls;
	/**
     * @summary Get carrier services usage data CSV.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} from - startDateTime
	* @param {string} to - endDateTime
	* @param {integer} limit - Limit the number of results
	*/
	function getCarrierservicesUsageCallsCsv(from, to, limit){
		var apipath = '/api/v1/billing/carrierservices/usage/calls/csv';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(from !== undefined && from !== null){
			queryParameters.from = from;
		}


		if(to !== undefined && to !== null){
			queryParameters.to = to;
		}


		if(limit !== undefined && limit !== null){
			queryParameters.limit = limit;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCarrierservicesUsageCallsCsv = getCarrierservicesUsageCallsCsv;
	/**
     * @summary Contact Sales.
	 * @description 
	 * @memberOf BillingApi#
	* @param {} body - The contact sales details
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "email": "",
   "firstName": "",
   "lastName": "",
   "contactPhone": "",
   "country": "",
   "title": "",
   "message": "",
   "language": "",
   "productName": "",
   "industry": "",
   "estimatedUsers": "",
   "selfUri": ""
}
	*/
	function createContactsales(body){
		var apipath = '/api/v1/billing/contactsales';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createContactsales = createContactsales;
	/**
     * @summary Create contract and signer view URL.
	 * @description 
	 * @memberOf BillingApi#
	* @param {} body - The contract to be created
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "quote": {
      "id": "",
      "name": "",
      "purchaseOrder": "",
      "status": "",
      "isSubmitted": true,
      "isPending": true,
      "isFrozen": true,
      "currency": "",
      "createdDate": "",
      "lastUpdatedDate": "",
      "billingContactEmail": "",
      "billingContactFirstName": "",
      "billingContactLastName": "",
      "billingContactPhone": "",
      "includeVoiceCharges": true,
      "charges": [],
      "edgeControlModel": "",
      "referralCodes": [],
      "discountCodes": [],
      "salesPartnerCode": "",
      "selfUri": ""
   },
   "signerUrl": "",
   "job": {
      "id": "",
      "name": "",
      "contract": {},
      "status": "",
      "selfUri": ""
   },
   "selfUri": ""
}
	*/
	function createContracts(body){
		var apipath = '/api/v1/billing/contracts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createContracts = createContracts;
	/**
     * @summary Gets a job that was started to generate a contract for a quote
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} jobId - The ID of the job
	*/
	function getContractsJob(jobId){
		var apipath = '/api/v1/billing/contracts/jobs/{jobId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{jobId}', jobId);

        if(jobId === undefined && jobId !== null){
			throw 'Missing required  parameter: jobId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContractsJob = getContractsJob;
	/**
     * @summary Get a contract that was generated for a quote
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} contractId - The ID of the contract
	*/
	function getContract(contractId){
		var apipath = '/api/v1/billing/contracts/{contractId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contractId}', contractId);

        if(contractId === undefined && contractId !== null){
			throw 'Missing required  parameter: contractId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContract = getContract;
	/**
     * @summary Get available currencies.
	 * @description 
	 * @memberOf BillingApi#
	*/
	function getCurrencies(){
		var apipath = '/api/v1/billing/currencies';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCurrencies = getCurrencies;
	/**
     * @summary Get rates for available hardware.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} productSubCategory - Filter rates by product subcategory. Examples are 'Phones' or 'PowerCords'.
	*/
	function getHardwarerates(productSubCategory){
		var apipath = '/api/v1/billing/hardwarerates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(productSubCategory !== undefined && productSubCategory !== null){
			queryParameters.productSubCategory = productSubCategory;
		}

        if(productSubCategory === undefined && productSubCategory !== null){
			throw 'Missing required  parameter: productSubCategory';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getHardwarerates = getHardwarerates;
	/**
     * @summary Get historical extended billing voice rates
	 * @description Retrieve a list of historical extended billing voice rates stored in the system.
	 * @memberOf BillingApi#
	* @param {string} currency - Filter voice rates by currency.
	* @param {string} effectiveDateStart - Filter voice rates by effective start date.
	* @param {string} effectiveDateEnd - Filter voice rates by effective end date.
	* @param {string} groupName - Filter voice rates by group.
	* @param {string} areaCode - Filter voice rates by areaCode.
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getHistoricalvoiceratesExtended(currency, effectiveDateStart, effectiveDateEnd, groupName, areaCode, pageSize, pageNumber){
		var apipath = '/api/v1/billing/historicalvoicerates/extended';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(currency !== undefined && currency !== null){
			queryParameters.currency = currency;
		}

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }


		if(effectiveDateStart !== undefined && effectiveDateStart !== null){
			queryParameters.effectiveDateStart = effectiveDateStart;
		}


		if(effectiveDateEnd !== undefined && effectiveDateEnd !== null){
			queryParameters.effectiveDateEnd = effectiveDateEnd;
		}


		if(groupName !== undefined && groupName !== null){
			queryParameters.groupName = groupName;
		}


		if(areaCode !== undefined && areaCode !== null){
			queryParameters.areaCode = areaCode;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getHistoricalvoiceratesExtended = getHistoricalvoiceratesExtended;
	/**
     * @summary Get historical inbound billing voice rates
	 * @description Retrieve a list of historical inbound billing voice rates stored in the system.
	 * @memberOf BillingApi#
	* @param {string} currency - Filter voice rates by currency.
	* @param {string} effectiveDateStart - Filter voice rates by effective start date.
	* @param {string} effectiveDateEnd - Filter voice rates by effective end date.
	* @param {string} type - Filter voice rates by 'inboundTolled', 'inboundTollFree', 'outboundInterState', 'outboundIntraState', or 'outboundLocal'.
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getHistoricalvoiceratesInbound(currency, effectiveDateStart, effectiveDateEnd, type, pageSize, pageNumber){
		var apipath = '/api/v1/billing/historicalvoicerates/inbound';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(currency !== undefined && currency !== null){
			queryParameters.currency = currency;
		}

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }


		if(effectiveDateStart !== undefined && effectiveDateStart !== null){
			queryParameters.effectiveDateStart = effectiveDateStart;
		}


		if(effectiveDateEnd !== undefined && effectiveDateEnd !== null){
			queryParameters.effectiveDateEnd = effectiveDateEnd;
		}


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getHistoricalvoiceratesInbound = getHistoricalvoiceratesInbound;
	/**
     * @summary Get historical outbound domestic billing voice rates
	 * @description Retrieve a list of historical outbound domestic billing voice rates stored in the system.
	 * @memberOf BillingApi#
	* @param {string} currency - Filter voice rates by currency.
	* @param {string} effectiveDateStart - Filter voice rates by effective start date.
	* @param {string} effectiveDateEnd - Filter voice rates by effective end date.
	* @param {string} type - Filter voice rates by 'inboundTolled', 'inboundTollFree', 'outboundInterState', 'outboundIntraState', or 'outboundLocal'.
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getHistoricalvoiceratesOutboundDomestic(currency, effectiveDateStart, effectiveDateEnd, type, pageSize, pageNumber){
		var apipath = '/api/v1/billing/historicalvoicerates/outbound/domestic';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(currency !== undefined && currency !== null){
			queryParameters.currency = currency;
		}

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }


		if(effectiveDateStart !== undefined && effectiveDateStart !== null){
			queryParameters.effectiveDateStart = effectiveDateStart;
		}


		if(effectiveDateEnd !== undefined && effectiveDateEnd !== null){
			queryParameters.effectiveDateEnd = effectiveDateEnd;
		}


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getHistoricalvoiceratesOutboundDomestic = getHistoricalvoiceratesOutboundDomestic;
	/**
     * @summary Get historical outbound international billing voice rates
	 * @description Retrieve a list of historical outbound international billing voice rates stored in the system.
	 * @memberOf BillingApi#
	* @param {string} currency - Filter voice rates by currency.
	* @param {string} effectiveDateStart - Filter voice rates by effective start date.
	* @param {string} effectiveDateEnd - Filter voice rates by effective end date.
	* @param {string} origin - Filter voice rates by origin.
	* @param {string} destination - Filter voice rates by destination.
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getHistoricalvoiceratesOutboundInternational(currency, effectiveDateStart, effectiveDateEnd, origin, destination, pageSize, pageNumber){
		var apipath = '/api/v1/billing/historicalvoicerates/outbound/international';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(currency !== undefined && currency !== null){
			queryParameters.currency = currency;
		}

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }


		if(effectiveDateStart !== undefined && effectiveDateStart !== null){
			queryParameters.effectiveDateStart = effectiveDateStart;
		}


		if(effectiveDateEnd !== undefined && effectiveDateEnd !== null){
			queryParameters.effectiveDateEnd = effectiveDateEnd;
		}


		if(origin !== undefined && origin !== null){
			queryParameters.origin = origin;
		}


		if(destination !== undefined && destination !== null){
			queryParameters.destination = destination;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getHistoricalvoiceratesOutboundInternational = getHistoricalvoiceratesOutboundInternational;
	/**
     * @summary Get invoices
	 * @description Retrieve a list of invoices stored in the system.
	 * @memberOf BillingApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getInvoices(pageSize, pageNumber){
		var apipath = '/api/v1/billing/invoices';
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getInvoices = getInvoices;
	/**
     * @summary Get invoice.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} invoiceId - Identifies the invoice to be retrieved
	*/
	function getInvoice(invoiceId){
		var apipath = '/api/v1/billing/invoices/{invoiceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{invoiceId}', invoiceId);

        if(invoiceId === undefined && invoiceId !== null){
			throw 'Missing required  parameter: invoiceId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getInvoice = getInvoice;
	/**
     * @summary Get invoice PDF.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} invoiceId - Identifies the invoice PDF to be retrieved
	*/
	function getInvoicePdf(invoiceId){
		var apipath = '/api/v1/billing/invoices/{invoiceId}/pdf';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{invoiceId}', invoiceId);

        if(invoiceId === undefined && invoiceId !== null){
			throw 'Missing required  parameter: invoiceId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getInvoicePdf = getInvoicePdf;
	/**
     * @summary Create billing order.
	 * @description 
	 * @memberOf BillingApi#
	* @param {} body - The order to be created
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "quote": {
      "id": "",
      "name": "",
      "purchaseOrder": "",
      "status": "",
      "isSubmitted": true,
      "isPending": true,
      "isFrozen": true,
      "currency": "",
      "createdDate": "",
      "lastUpdatedDate": "",
      "billingContactEmail": "",
      "billingContactFirstName": "",
      "billingContactLastName": "",
      "billingContactPhone": "",
      "includeVoiceCharges": true,
      "charges": [],
      "edgeControlModel": "",
      "referralCodes": [],
      "discountCodes": [],
      "salesPartnerCode": "",
      "selfUri": ""
   },
   "envelopeId": "",
   "selfUri": ""
}
	*/
	function createOrders(body){
		var apipath = '/api/v1/billing/orders';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createOrders = createOrders;
	/**
     * @summary Get billing periods
	 * @description Retrieve a list of billing periods stored in the system.
	 * @memberOf BillingApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getPeriods(pageSize, pageNumber){
		var apipath = '/api/v1/billing/periods';
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPeriods = getPeriods;
	/**
     * @summary Get products.
	 * @description 
	 * @memberOf BillingApi#
	*/
	function getProducts(){
		var apipath = '/api/v1/billing/products';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProducts = getProducts;
	/**
     * @summary Update products.
	 * @description 
	 * @memberOf BillingApi#
	* @param {} body - The products to activate
	*/
	function updateProducts(body){
		var apipath = '/api/v1/billing/products';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateProducts = updateProducts;
	/**
     * @summary Get billing quotes.
	 * @description 
	 * @memberOf BillingApi#
	*/
	function getQuotes(){
		var apipath = '/api/v1/billing/quotes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQuotes = getQuotes;
	/**
     * @summary Create billing quote.
	 * @description 
	 * @memberOf BillingApi#
	* @param {} body - The quote to be created
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "purchaseOrder": "",
   "status": "",
   "isSubmitted": true,
   "isPending": true,
   "isFrozen": true,
   "currency": "",
   "createdDate": "",
   "lastUpdatedDate": "",
   "billingContactEmail": "",
   "billingContactFirstName": "",
   "billingContactLastName": "",
   "billingContactPhone": "",
   "includeVoiceCharges": true,
   "charges": [],
   "edgeControlModel": "",
   "referralCodes": [],
   "discountCodes": [],
   "salesPartnerCode": "",
   "selfUri": ""
}
	*/
	function createQuotes(body){
		var apipath = '/api/v1/billing/quotes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createQuotes = createQuotes;
	/**
     * @summary Get a billing quote
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} quoteId - The ID of the quote
	*/
	function getQuote(quoteId){
		var apipath = '/api/v1/billing/quotes/{quoteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{quoteId}', quoteId);

        if(quoteId === undefined && quoteId !== null){
			throw 'Missing required  parameter: quoteId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQuote = getQuote;
	/**
     * @summary Update billing quote
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} quoteId - The ID of the quote
	* @param {} body - The quote to be updated
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "purchaseOrder": "",
   "status": "",
   "isSubmitted": true,
   "isPending": true,
   "isFrozen": true,
   "currency": "",
   "createdDate": "",
   "lastUpdatedDate": "",
   "billingContactEmail": "",
   "billingContactFirstName": "",
   "billingContactLastName": "",
   "billingContactPhone": "",
   "includeVoiceCharges": true,
   "charges": [],
   "edgeControlModel": "",
   "referralCodes": [],
   "discountCodes": [],
   "salesPartnerCode": "",
   "selfUri": ""
}
	*/
	function updateQuote(quoteId, body){
		var apipath = '/api/v1/billing/quotes/{quoteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{quoteId}', quoteId);

        if(quoteId === undefined && quoteId !== null){
			throw 'Missing required  parameter: quoteId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateQuote = updateQuote;
	/**
     * @summary Delete billing quote
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} quoteId - The ID of the quote
	*/
	function deleteQuote(quoteId){
		var apipath = '/api/v1/billing/quotes/{quoteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{quoteId}', quoteId);

        if(quoteId === undefined && quoteId !== null){
			throw 'Missing required  parameter: quoteId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteQuote = deleteQuote;
	/**
     * @summary Get billing rates
	 * @description Retrieve a list of billing rates stored in the system.
	 * @memberOf BillingApi#
	* @param {string} chargeType - Filter rates by charge type. Examples are Usage, Recurring, or OneTime.
	*/
	function getRates(chargeType){
		var apipath = '/api/v1/billing/rates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(chargeType !== undefined && chargeType !== null){
			queryParameters.chargeType = chargeType;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRates = getRates;
	/**
     * @summary Get rate.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} rateId - Identifies the rate to be retrieved
	*/
	function getRate(rateId){
		var apipath = '/api/v1/billing/rates/{rateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{rateId}', rateId);

        if(rateId === undefined && rateId !== null){
			throw 'Missing required  parameter: rateId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRate = getRate;
	/**
     * @summary Get billable usage data report CSV.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} reportId - Identifies the report CSV to be retrieved
	*/
	function getReportsBillableusagedataReportCsv(reportId){
		var apipath = '/api/v1/billing/reports/billableusagedata/{reportId}/csv';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{reportId}', reportId);

        if(reportId === undefined && reportId !== null){
			throw 'Missing required  parameter: reportId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getReportsBillableusagedataReportCsv = getReportsBillableusagedataReportCsv;
	/**
     * @summary Creates a billing snapshot
	 * @description Creates a billing snapshot which is used to determine usage counts for a billing period.
	 * @memberOf BillingApi#
	*/
	function createSnapshots(){
		var apipath = '/api/v1/billing/snapshots';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createSnapshots = createSnapshots;
	/**
     * @summary Get third party accounts
	 * @description Retrieve a list of third party accounts stored in the back-end system.
	 * @memberOf BillingApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} search - Search for accounts with this text
	*/
	function getThirdpartyaccounts(pageSize, pageNumber, search){
		var apipath = '/api/v1/billing/thirdpartyaccounts';
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


		if(search !== undefined && search !== null){
			queryParameters.search = search;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getThirdpartyaccounts = getThirdpartyaccounts;
	/**
     * @summary Get third party billing account.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} accountId - Identifies the third party account to be retrieved
	*/
	function getThirdpartyaccountsAccount(accountId){
		var apipath = '/api/v1/billing/thirdpartyaccounts/{accountId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getThirdpartyaccountsAccount = getThirdpartyaccountsAccount;
	/**
     * @summary Get third party subscriptions
	 * @description Retrieve a list of third party subscriptions stored in the back-end system.
	 * @memberOf BillingApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} accountId - Identifies the third party account to be retrieved
	*/
	function getThirdpartyaccountsAccountSubscriptions(pageSize, pageNumber, accountId){
		var apipath = '/api/v1/billing/thirdpartyaccounts/{accountId}/subscriptions';
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

        apipath = apipath.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getThirdpartyaccountsAccountSubscriptions = getThirdpartyaccountsAccountSubscriptions;
	/**
     * @summary Get third party billing subscription.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} accountId - Identifies the third party account to be retrieved
	* @param {string} subscriptionId - Identifies the third party subscription to be retrieved
	*/
	function getThirdpartyaccountsAccountSubscriptionsBySubscriptionId(accountId, subscriptionId){
		var apipath = '/api/v1/billing/thirdpartyaccounts/{accountId}/subscriptions/{subscriptionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }

        apipath = apipath.replace('{subscriptionId}', subscriptionId);

        if(subscriptionId === undefined && subscriptionId !== null){
			throw 'Missing required  parameter: subscriptionId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getThirdpartyaccountsAccountSubscriptionsBySubscriptionId = getThirdpartyaccountsAccountSubscriptionsBySubscriptionId;
	/**
     * @summary Update billing voice rate
	 * @description Update a billing voice rate currently stored in the system.
	 * @memberOf BillingApi#
	* @param {} body - The voice rate to be created
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "currency": "",
   "inboundTollFree": {
      "id": "",
      "name": "",
      "currency": "",
      "amendmentId": "",
      "type": "",
      "effectiveDate": "",
      "rate": {},
      "durationMinimumSeconds": 0,
      "durationIncrementSeconds": 0,
      "selfUri": ""
   },
   "extended": [],
   "inboundTolled": {
      "id": "",
      "name": "",
      "currency": "",
      "amendmentId": "",
      "type": "",
      "effectiveDate": "",
      "rate": {},
      "durationMinimumSeconds": 0,
      "durationIncrementSeconds": 0,
      "selfUri": ""
   },
   "outboundLocal": {
      "id": "",
      "name": "",
      "currency": "",
      "amendmentId": "",
      "type": "",
      "effectiveDate": "",
      "rate": {},
      "durationMinimumSeconds": 0,
      "durationIncrementSeconds": 0,
      "selfUri": ""
   },
   "outboundIntraState": {
      "id": "",
      "name": "",
      "currency": "",
      "amendmentId": "",
      "type": "",
      "effectiveDate": "",
      "rate": {},
      "durationMinimumSeconds": 0,
      "durationIncrementSeconds": 0,
      "selfUri": ""
   },
   "outboundInterState": {
      "id": "",
      "name": "",
      "currency": "",
      "amendmentId": "",
      "type": "",
      "effectiveDate": "",
      "rate": {},
      "durationMinimumSeconds": 0,
      "durationIncrementSeconds": 0,
      "selfUri": ""
   },
   "outboundInternational": [],
   "amendmentDate": "",
   "effectiveDate": "",
   "selfUri": ""
}
	*/
	function updateVoicerate(body){
		var apipath = '/api/v1/billing/voicerate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateVoicerate = updateVoicerate;
	/**
     * @summary Delete billing voice rate
	 * @description Delete a pending billing voice rate currently stored in the system.
	 * @memberOf BillingApi#
	* @param {string} currency - The currency of the voice rate
	* @param {string} amendmentId - The amendment Id of the voice rate
	*/
	function deleteVoicerateCurrencyByAmendmentId(currency, amendmentId){
		var apipath = '/api/v1/billing/voicerate/{currency}/{amendmentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{currency}', currency);

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }

        apipath = apipath.replace('{amendmentId}', amendmentId);

        if(amendmentId === undefined && amendmentId !== null){
			throw 'Missing required  parameter: amendmentId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteVoicerateCurrencyByAmendmentId = deleteVoicerateCurrencyByAmendmentId;
	/**
     * @summary Get current extended billing voice rates
	 * @description Retrieve a list of current extended billing voice rates stored in the system.
	 * @memberOf BillingApi#
	* @param {string} currency - Filter voice rates by currency.
	* @param {string} areaCode - Filter voice rates by area code.
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getVoiceratesExtended(currency, areaCode, pageSize, pageNumber){
		var apipath = '/api/v1/billing/voicerates/extended';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(currency !== undefined && currency !== null){
			queryParameters.currency = currency;
		}

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }


		if(areaCode !== undefined && areaCode !== null){
			queryParameters.areaCode = areaCode;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getVoiceratesExtended = getVoiceratesExtended;
	/**
     * @summary Get current inbound billing voice rates
	 * @description Retrieve a list of current inbound billing voice rates stored in the system.
	 * @memberOf BillingApi#
	* @param {string} currency - Filter voice rates by currency.
	* @param {string} type - Filter voice rates by 'inboundTolled', 'inboundTollFree', 'outboundInterState', 'outboundIntraState', or 'outboundLocal'.
	*/
	function getVoiceratesInbound(currency, type){
		var apipath = '/api/v1/billing/voicerates/inbound';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(currency !== undefined && currency !== null){
			queryParameters.currency = currency;
		}

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getVoiceratesInbound = getVoiceratesInbound;
	/**
     * @summary Get current outbound domestic billing voice rates
	 * @description Retrieve a list of current outbound domestic billing voice rates stored in the system.
	 * @memberOf BillingApi#
	* @param {string} currency - Filter voice rates by currency.
	* @param {string} type - Filter voice rates by 'inboundTolled', 'inboundTollFree', 'outboundInterState', 'outboundIntraState', or 'outboundLocal'.
	*/
	function getVoiceratesOutboundDomestic(currency, type){
		var apipath = '/api/v1/billing/voicerates/outbound/domestic';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(currency !== undefined && currency !== null){
			queryParameters.currency = currency;
		}

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getVoiceratesOutboundDomestic = getVoiceratesOutboundDomestic;
	/**
     * @summary Get current outbound international billing voice rates
	 * @description Retrieve a list of current outbound international billing voice rates stored in the system.
	 * @memberOf BillingApi#
	* @param {string} currency - Filter voice rates by currency.
	* @param {string} origin - Filter voice rates by origin.
	* @param {string} destination - Filter voice rates by destination.
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getVoiceratesOutboundInternational(currency, origin, destination, pageSize, pageNumber){
		var apipath = '/api/v1/billing/voicerates/outbound/international';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(currency !== undefined && currency !== null){
			queryParameters.currency = currency;
		}

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }


		if(origin !== undefined && origin !== null){
			queryParameters.origin = origin;
		}


		if(destination !== undefined && destination !== null){
			queryParameters.destination = destination;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getVoiceratesOutboundInternational = getVoiceratesOutboundInternational;
	/**
     * @summary Get current billing voice rates csv
	 * @description Retrieve a csv of current billing voice rates stored in the system.
	 * @memberOf BillingApi#
	*/
	function getVoiceratescsv(){
		var apipath = '/api/v1/billing/voiceratescsv';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getVoiceratescsv = getVoiceratescsv;

    return self;
};