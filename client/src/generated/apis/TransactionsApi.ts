/* tslint:disable */
/* eslint-disable */
/**
 * Stacks 2.0 Blockchain API
 * This is the documentation for the Stacks 2.0 Blockchain API.  It is comprised of two parts; the Stacks Blockchain API and the Stacks Core API.  [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/614feab5c108d292bffa#?env%5BStacks%20Blockchain%20API%5D=W3sia2V5Ijoic3R4X2FkZHJlc3MiLCJ2YWx1ZSI6IlNUMlRKUkhESE1ZQlE0MTdIRkIwQkRYNDMwVFFBNVBYUlg2NDk1RzFWIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJibG9ja19pZCIsInZhbHVlIjoiMHgiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6Im9mZnNldCIsInZhbHVlIjoiMCIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoibGltaXRfdHgiLCJ2YWx1ZSI6IjIwMCIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoibGltaXRfYmxvY2siLCJ2YWx1ZSI6IjMwIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJ0eF9pZCIsInZhbHVlIjoiMHg1NDA5MGMxNmE3MDJiNzUzYjQzMTE0ZTg4NGJjMTlhODBhNzk2MzhmZDQ0OWE0MGY4MDY4Y2RmMDAzY2RlNmUwIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJjb250cmFjdF9pZCIsInZhbHVlIjoiU1RKVFhFSlBKUFBWRE5BOUIwNTJOU1JSQkdRQ0ZOS1ZTMTc4VkdIMS5oZWxsb193b3JsZFxuIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJidGNfYWRkcmVzcyIsInZhbHVlIjoiYWJjIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJjb250cmFjdF9hZGRyZXNzIiwidmFsdWUiOiJTVEpUWEVKUEpQUFZETkE5QjA1Mk5TUlJCR1FDRk5LVlMxNzhWR0gxIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJjb250cmFjdF9uYW1lIiwidmFsdWUiOiJoZWxsb193b3JsZCIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiY29udHJhY3RfbWFwIiwidmFsdWUiOiJzdG9yZSIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiY29udHJhY3RfbWV0aG9kIiwidmFsdWUiOiJnZXQtdmFsdWUiLCJlbmFibGVkIjp0cnVlfV0=) 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    MempoolTransactionListResponse,
    MempoolTransactionListResponseFromJSON,
    MempoolTransactionListResponseToJSON,
    PostCoreNodeTransactionsError,
    PostCoreNodeTransactionsErrorFromJSON,
    PostCoreNodeTransactionsErrorToJSON,
    TransactionResults,
    TransactionResultsFromJSON,
    TransactionResultsToJSON,
} from '../models';

export interface GetMempoolTransactionListRequest {
    senderAddress?: string;
    recipientAddress?: string;
    address?: string;
    limit?: number;
    offset?: number;
}

export interface GetTransactionByIdRequest {
    txId: string;
    eventOffset?: number;
    eventLimit?: number;
}

export interface GetTransactionListRequest {
    limit?: number;
    offset?: number;
    type?: Array<GetTransactionListTypeEnum>;
}

export interface PostCoreNodeTransactionsRequest {
    body?: Blob;
}

/**
 * TransactionsApi - interface
 * 
 * @export
 * @interface TransactionsApiInterface
 */
export interface TransactionsApiInterface {
    /**
     * Get all recently-broadcast mempool transactions
     * @summary Get mempool transactions
     * @param {string} [senderAddress] Filter to only STX transfer transactions with this sender address.
     * @param {string} [recipientAddress] Filter to only STX transfer transactions with this recipient address.
     * @param {string} [address] Filter to only show STX transfer transactions with this address as the recipient or sender.
     * @param {number} [limit] max number of mempool transactions to fetch
     * @param {number} [offset] index of first mempool transaction to fetch
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApiInterface
     */
    getMempoolTransactionListRaw(requestParameters: GetMempoolTransactionListRequest): Promise<runtime.ApiResponse<MempoolTransactionListResponse>>;

    /**
     * Get all recently-broadcast mempool transactions
     * Get mempool transactions
     */
    getMempoolTransactionList(requestParameters: GetMempoolTransactionListRequest): Promise<MempoolTransactionListResponse>;

    /**
     * Get a specific transaction by ID  `import type { Transaction } from \'@stacks/stacks-blockchain-api-types\';` 
     * @summary Get transaction
     * @param {string} txId Hash of transaction
     * @param {number} [eventOffset] The number of events to skip
     * @param {number} [eventLimit] The numbers of events to return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApiInterface
     */
    getTransactionByIdRaw(requestParameters: GetTransactionByIdRequest): Promise<runtime.ApiResponse<object>>;

    /**
     * Get a specific transaction by ID  `import type { Transaction } from \'@stacks/stacks-blockchain-api-types\';` 
     * Get transaction
     */
    getTransactionById(requestParameters: GetTransactionByIdRequest): Promise<object>;

    /**
     * Get all recently mined transactions  If using TypeScript, import typings for this response from our types package:  `import type { TransactionResults } from \'@stacks/stacks-blockchain-api-types\';` 
     * @summary Get recent transactions
     * @param {number} [limit] max number of transactions to fetch
     * @param {number} [offset] index of first transaction to fetch
     * @param {Array<'coinbase' | 'token_transfer' | 'smart_contract' | 'contract_call' | 'poison_microblock'>} [type] Filter by transaction type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApiInterface
     */
    getTransactionListRaw(requestParameters: GetTransactionListRequest): Promise<runtime.ApiResponse<TransactionResults>>;

    /**
     * Get all recently mined transactions  If using TypeScript, import typings for this response from our types package:  `import type { TransactionResults } from \'@stacks/stacks-blockchain-api-types\';` 
     * Get recent transactions
     */
    getTransactionList(requestParameters: GetTransactionListRequest): Promise<TransactionResults>;

    /**
     * Broadcast raw transactions on the network. You can use the [@stacks/transactions](https://github.com/hirosystems/stacks.js) project to generate a raw transaction payload.
     * @summary Broadcast raw transaction
     * @param {Blob} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApiInterface
     */
    postCoreNodeTransactionsRaw(requestParameters: PostCoreNodeTransactionsRequest): Promise<runtime.ApiResponse<string>>;

    /**
     * Broadcast raw transactions on the network. You can use the [@stacks/transactions](https://github.com/hirosystems/stacks.js) project to generate a raw transaction payload.
     * Broadcast raw transaction
     */
    postCoreNodeTransactions(requestParameters: PostCoreNodeTransactionsRequest): Promise<string>;

}

/**
 * 
 */
export class TransactionsApi extends runtime.BaseAPI implements TransactionsApiInterface {

    /**
     * Get all recently-broadcast mempool transactions
     * Get mempool transactions
     */
    async getMempoolTransactionListRaw(requestParameters: GetMempoolTransactionListRequest): Promise<runtime.ApiResponse<MempoolTransactionListResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.senderAddress !== undefined) {
            queryParameters['sender_address'] = requestParameters.senderAddress;
        }

        if (requestParameters.recipientAddress !== undefined) {
            queryParameters['recipient_address'] = requestParameters.recipientAddress;
        }

        if (requestParameters.address !== undefined) {
            queryParameters['address'] = requestParameters.address;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/extended/v1/tx/mempool`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MempoolTransactionListResponseFromJSON(jsonValue));
    }

    /**
     * Get all recently-broadcast mempool transactions
     * Get mempool transactions
     */
    async getMempoolTransactionList(requestParameters: GetMempoolTransactionListRequest): Promise<MempoolTransactionListResponse> {
        const response = await this.getMempoolTransactionListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get a specific transaction by ID  `import type { Transaction } from \'@stacks/stacks-blockchain-api-types\';` 
     * Get transaction
     */
    async getTransactionByIdRaw(requestParameters: GetTransactionByIdRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.txId === null || requestParameters.txId === undefined) {
            throw new runtime.RequiredError('txId','Required parameter requestParameters.txId was null or undefined when calling getTransactionById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.eventOffset !== undefined) {
            queryParameters['event_offset'] = requestParameters.eventOffset;
        }

        if (requestParameters.eventLimit !== undefined) {
            queryParameters['event_limit'] = requestParameters.eventLimit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/extended/v1/tx/{tx_id}`.replace(`{${"tx_id"}}`, encodeURIComponent(String(requestParameters.txId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get a specific transaction by ID  `import type { Transaction } from \'@stacks/stacks-blockchain-api-types\';` 
     * Get transaction
     */
    async getTransactionById(requestParameters: GetTransactionByIdRequest): Promise<object> {
        const response = await this.getTransactionByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get all recently mined transactions  If using TypeScript, import typings for this response from our types package:  `import type { TransactionResults } from \'@stacks/stacks-blockchain-api-types\';` 
     * Get recent transactions
     */
    async getTransactionListRaw(requestParameters: GetTransactionListRequest): Promise<runtime.ApiResponse<TransactionResults>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.type) {
            queryParameters['type'] = requestParameters.type;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/extended/v1/tx`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionResultsFromJSON(jsonValue));
    }

    /**
     * Get all recently mined transactions  If using TypeScript, import typings for this response from our types package:  `import type { TransactionResults } from \'@stacks/stacks-blockchain-api-types\';` 
     * Get recent transactions
     */
    async getTransactionList(requestParameters: GetTransactionListRequest): Promise<TransactionResults> {
        const response = await this.getTransactionListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Broadcast raw transactions on the network. You can use the [@stacks/transactions](https://github.com/hirosystems/stacks.js) project to generate a raw transaction payload.
     * Broadcast raw transaction
     */
    async postCoreNodeTransactionsRaw(requestParameters: PostCoreNodeTransactionsRequest): Promise<runtime.ApiResponse<string>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/octet-stream';

        const response = await this.request({
            path: `/v2/transactions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Broadcast raw transactions on the network. You can use the [@stacks/transactions](https://github.com/hirosystems/stacks.js) project to generate a raw transaction payload.
     * Broadcast raw transaction
     */
    async postCoreNodeTransactions(requestParameters: PostCoreNodeTransactionsRequest): Promise<string> {
        const response = await this.postCoreNodeTransactionsRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetTransactionListTypeEnum {
    coinbase = 'coinbase',
    token_transfer = 'token_transfer',
    smart_contract = 'smart_contract',
    contract_call = 'contract_call',
    poison_microblock = 'poison_microblock'
}
