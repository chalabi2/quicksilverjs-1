import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.zones = this.zones.bind(this);
        this.zone = this.zone.bind(this);
        this.zoneValidators = this.zoneValidators.bind(this);
        this.depositAccount = this.depositAccount.bind(this);
        this.delegatorIntent = this.delegatorIntent.bind(this);
        this.delegatorIntents = this.delegatorIntents.bind(this);
        this.delegations = this.delegations.bind(this);
        this.receipts = this.receipts.bind(this);
        this.txStatus = this.txStatus.bind(this);
        this.zoneWithdrawalRecords = this.zoneWithdrawalRecords.bind(this);
        this.withdrawalRecords = this.withdrawalRecords.bind(this);
        this.userWithdrawalRecords = this.userWithdrawalRecords.bind(this);
        this.unbondingRecords = this.unbondingRecords.bind(this);
        this.redelegationRecords = this.redelegationRecords.bind(this);
        this.mappedAccounts = this.mappedAccounts.bind(this);
    }
    /* Zones provides meta data on connected zones. */
    async zones(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `quicksilver/interchainstaking/v1/zones`;
        return await this.req.get(endpoint, options);
    }
    /* Zone provides meta data on a specific zone. */
    async zone(params) {
        const endpoint = `quicksilver/interchainstaking/v1/zone/${params.chainId}`;
        return await this.req.get(endpoint);
    }
    /* ZoneValidators */
    async zoneValidators(params) {
        const options = {
            params: {}
        };
        if (typeof params?.status !== "undefined") {
            options.params.status = params.status;
        }
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chainId}/validators`;
        return await this.req.get(endpoint, options);
    }
    /* DepositAccount provides data on the deposit address for a connected zone. */
    async depositAccount(params) {
        const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chainId}/deposit_address`;
        return await this.req.get(endpoint);
    }
    /* DelegatorIntent provides data on the intent of the delegator for the given
     zone. */
    async delegatorIntent(params) {
        const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chainId}/delegator_intent/${params.delegatorAddress}`;
        return await this.req.get(endpoint);
    }
    /* DelegatorIntents provides data on the intent of the delegator for all zones */
    async delegatorIntents(params) {
        const endpoint = `quicksilver/interchainstaking/v1/delegator_intents/${params.delegatorAddress}`;
        return await this.req.get(endpoint);
    }
    /* Delegations provides data on the delegations for the given zone. */
    async delegations(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chainId}/delegations`;
        return await this.req.get(endpoint, options);
    }
    /* Delegations provides data on the delegations for the given zone. */
    async receipts(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chainId}/receipts`;
        return await this.req.get(endpoint, options);
    }
    /* TxStatus */
    async txStatus(params) {
        const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chainId}/deposits/${params.txHash}`;
        return await this.req.get(endpoint);
    }
    /* WithdrawalRecords provides data on the active withdrawals. */
    async zoneWithdrawalRecords(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chainId}/withdrawal_records/${params.delegatorAddress}`;
        return await this.req.get(endpoint, options);
    }
    /* WithdrawalRecords provides data on the active withdrawals. */
    async withdrawalRecords(params) {
        const options = {
            params: {}
        };
        if (typeof params?.delegatorAddress !== "undefined") {
            options.params.delegator_address = params.delegatorAddress;
        }
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chainId}/withdrawal_records`;
        return await this.req.get(endpoint, options);
    }
    /* WithdrawalRecords provides data on the active withdrawals. */
    async userWithdrawalRecords(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `quicksilver/interchainstaking/v1/users/${params.userAddress}/withdrawal_records`;
        return await this.req.get(endpoint, options);
    }
    /* UnbondingRecords provides data on the active unbondings. */
    async unbondingRecords(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chainId}/unbonding_records`;
        return await this.req.get(endpoint, options);
    }
    /* RedelegationRecords provides data on the active unbondings. */
    async redelegationRecords(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chainId}/redelegation_records`;
        return await this.req.get(endpoint, options);
    }
    /* MappedAccounts provides data on the mapped accounts for a given user over different host chains. */
    async mappedAccounts(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `quicksilver/interchainstaking/v1/mapped_addresses/${params.address}`;
        return await this.req.get(endpoint, options);
    }
}
//# sourceMappingURL=query.lcd.js.map