"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
const helpers_1 = require("../../../../helpers");
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.clientState = this.clientState.bind(this);
        this.clientStates = this.clientStates.bind(this);
        this.consensusState = this.consensusState.bind(this);
        this.consensusStates = this.consensusStates.bind(this);
        this.clientStatus = this.clientStatus.bind(this);
        this.clientParams = this.clientParams.bind(this);
        this.upgradedClientState = this.upgradedClientState.bind(this);
        this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
    }
    /* ClientState queries an IBC light client. */
    async clientState(params) {
        const endpoint = `ibc/core/client/v1/client_states/${params.clientId}`;
        return await this.req.get(endpoint);
    }
    /* ClientStates queries all the IBC light clients of a chain. */
    async clientStates(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `ibc/core/client/v1/client_states`;
        return await this.req.get(endpoint, options);
    }
    /* ConsensusState queries a consensus state associated with a client state at
     a given height. */
    async consensusState(params) {
        const options = {
            params: {}
        };
        if (typeof params?.latestHeight !== "undefined") {
            options.params.latest_height = params.latestHeight;
        }
        const endpoint = `ibc/core/client/v1/consensus_states/${params.clientId}/revision/${params.revisionNumber}/height/${params.revisionHeight}`;
        return await this.req.get(endpoint, options);
    }
    /* ConsensusStates queries all the consensus state associated with a given
     client. */
    async consensusStates(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `ibc/core/client/v1/consensus_states/${params.clientId}`;
        return await this.req.get(endpoint, options);
    }
    /* Status queries the status of an IBC client. */
    async clientStatus(params) {
        const endpoint = `ibc/core/client/v1/client_status/${params.clientId}`;
        return await this.req.get(endpoint);
    }
    /* ClientParams queries all parameters of the ibc client. */
    async clientParams(_params = {}) {
        const endpoint = `ibc/client/v1/params`;
        return await this.req.get(endpoint);
    }
    /* UpgradedClientState queries an Upgraded IBC light client. */
    async upgradedClientState(_params = {}) {
        const endpoint = `ibc/core/client/v1/upgraded_client_states`;
        return await this.req.get(endpoint);
    }
    /* UpgradedConsensusState queries an Upgraded IBC consensus state. */
    async upgradedConsensusState(_params = {}) {
        const endpoint = `ibc/core/client/v1/upgraded_consensus_states`;
        return await this.req.get(endpoint);
    }
}
exports.LCDQueryClient = LCDQueryClient;
//# sourceMappingURL=query.lcd.js.map