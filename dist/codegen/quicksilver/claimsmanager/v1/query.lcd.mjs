import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.claims = this.claims.bind(this);
        this.lastEpochClaims = this.lastEpochClaims.bind(this);
        this.userClaims = this.userClaims.bind(this);
        this.userLastEpochClaims = this.userLastEpochClaims.bind(this);
    }
    /* Claims returns all zone claims from the current epoch. */
    async claims(params) {
        const options = {
            params: {}
        };
        if (typeof params?.address !== "undefined") {
            options.params.address = params.address;
        }
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `quicksilver/claimsmanager/v1/claims/${params.chain_id}`;
        return await this.req.get(endpoint, options);
    }
    /* LastEpochClaims returns all zone claims from the last epoch. */
    async lastEpochClaims(params) {
        const options = {
            params: {}
        };
        if (typeof params?.address !== "undefined") {
            options.params.address = params.address;
        }
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `quicksilver/claimsmanager/v1/previous_epoch_claims/${params.chain_id}`;
        return await this.req.get(endpoint, options);
    }
    /* UserClaims returns all zone claims for a given address from the current epoch. */
    async userClaims(params) {
        const options = {
            params: {}
        };
        if (typeof params?.chain_id !== "undefined") {
            options.params.chain_id = params.chain_id;
        }
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `quicksilver/claimsmanager/v1/user/${params.address}/claims`;
        return await this.req.get(endpoint, options);
    }
    /* UserLastEpochClaims returns all zone claims for a given address from the last epoch. */
    async userLastEpochClaims(params) {
        const options = {
            params: {}
        };
        if (typeof params?.chain_id !== "undefined") {
            options.params.chain_id = params.chain_id;
        }
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `quicksilver/claimsmanager/v1/user/${params.address}/previous_epoch_claims`;
        return await this.req.get(endpoint, options);
    }
}
//# sourceMappingURL=query.lcd.js.map