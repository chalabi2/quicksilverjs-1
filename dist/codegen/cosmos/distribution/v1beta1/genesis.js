"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.ValidatorSlashEventRecord = exports.DelegatorStartingInfoRecord = exports.ValidatorCurrentRewardsRecord = exports.ValidatorHistoricalRewardsRecord = exports.ValidatorAccumulatedCommissionRecord = exports.ValidatorOutstandingRewardsRecord = exports.DelegatorWithdrawInfo = void 0;
const coin_1 = require("../../base/v1beta1/coin");
const distribution_1 = require("./distribution");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseDelegatorWithdrawInfo() {
    return {
        delegatorAddress: "",
        withdrawAddress: ""
    };
}
exports.DelegatorWithdrawInfo = {
    typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo",
    aminoType: "cosmos-sdk/DelegatorWithdrawInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.withdrawAddress !== "") {
            writer.uint32(18).string(message.withdrawAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorWithdrawInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.withdrawAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegatorAddress: (0, helpers_1.isSet)(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            withdrawAddress: (0, helpers_1.isSet)(object.withdrawAddress) ? String(object.withdrawAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegatorWithdrawInfo();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.withdrawAddress = object.withdrawAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegatorAddress: object.delegator_address,
            withdrawAddress: object.withdraw_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.withdraw_address = message.withdrawAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DelegatorWithdrawInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegatorWithdrawInfo",
            value: exports.DelegatorWithdrawInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DelegatorWithdrawInfo.decode(message.value);
    },
    toProto(message) {
        return exports.DelegatorWithdrawInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo",
            value: exports.DelegatorWithdrawInfo.encode(message).finish()
        };
    }
};
function createBaseValidatorOutstandingRewardsRecord() {
    return {
        validatorAddress: "",
        outstandingRewards: []
    };
}
exports.ValidatorOutstandingRewardsRecord = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord",
    aminoType: "cosmos-sdk/ValidatorOutstandingRewardsRecord",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        for (const v of message.outstandingRewards) {
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorOutstandingRewardsRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.outstandingRewards.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress) ? String(object.validatorAddress) : "",
            outstandingRewards: Array.isArray(object?.outstandingRewards) ? object.outstandingRewards.map((e) => coin_1.DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        if (message.outstandingRewards) {
            obj.outstandingRewards = message.outstandingRewards.map(e => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.outstandingRewards = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorOutstandingRewardsRecord();
        message.validatorAddress = object.validatorAddress ?? "";
        message.outstandingRewards = object.outstandingRewards?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            validatorAddress: object.validator_address,
            outstandingRewards: Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e) => coin_1.DecCoin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        if (message.outstandingRewards) {
            obj.outstanding_rewards = message.outstandingRewards.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.outstanding_rewards = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorOutstandingRewardsRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorOutstandingRewardsRecord",
            value: exports.ValidatorOutstandingRewardsRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorOutstandingRewardsRecord.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorOutstandingRewardsRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord",
            value: exports.ValidatorOutstandingRewardsRecord.encode(message).finish()
        };
    }
};
function createBaseValidatorAccumulatedCommissionRecord() {
    return {
        validatorAddress: "",
        accumulated: distribution_1.ValidatorAccumulatedCommission.fromPartial({})
    };
}
exports.ValidatorAccumulatedCommissionRecord = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord",
    aminoType: "cosmos-sdk/ValidatorAccumulatedCommissionRecord",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.accumulated !== undefined) {
            distribution_1.ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorAccumulatedCommissionRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.accumulated = distribution_1.ValidatorAccumulatedCommission.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress) ? String(object.validatorAddress) : "",
            accumulated: (0, helpers_1.isSet)(object.accumulated) ? distribution_1.ValidatorAccumulatedCommission.fromJSON(object.accumulated) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.accumulated !== undefined && (obj.accumulated = message.accumulated ? distribution_1.ValidatorAccumulatedCommission.toJSON(message.accumulated) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorAccumulatedCommissionRecord();
        message.validatorAddress = object.validatorAddress ?? "";
        message.accumulated = object.accumulated !== undefined && object.accumulated !== null ? distribution_1.ValidatorAccumulatedCommission.fromPartial(object.accumulated) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            validatorAddress: object.validator_address,
            accumulated: object?.accumulated ? distribution_1.ValidatorAccumulatedCommission.fromAmino(object.accumulated) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        obj.accumulated = message.accumulated ? distribution_1.ValidatorAccumulatedCommission.toAmino(message.accumulated) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorAccumulatedCommissionRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorAccumulatedCommissionRecord",
            value: exports.ValidatorAccumulatedCommissionRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorAccumulatedCommissionRecord.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorAccumulatedCommissionRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord",
            value: exports.ValidatorAccumulatedCommissionRecord.encode(message).finish()
        };
    }
};
function createBaseValidatorHistoricalRewardsRecord() {
    return {
        validatorAddress: "",
        period: helpers_1.Long.UZERO,
        rewards: distribution_1.ValidatorHistoricalRewards.fromPartial({})
    };
}
exports.ValidatorHistoricalRewardsRecord = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord",
    aminoType: "cosmos-sdk/ValidatorHistoricalRewardsRecord",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (!message.period.isZero()) {
            writer.uint32(16).uint64(message.period);
        }
        if (message.rewards !== undefined) {
            distribution_1.ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorHistoricalRewardsRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.period = reader.uint64();
                    break;
                case 3:
                    message.rewards = distribution_1.ValidatorHistoricalRewards.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress) ? String(object.validatorAddress) : "",
            period: (0, helpers_1.isSet)(object.period) ? helpers_1.Long.fromValue(object.period) : helpers_1.Long.UZERO,
            rewards: (0, helpers_1.isSet)(object.rewards) ? distribution_1.ValidatorHistoricalRewards.fromJSON(object.rewards) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.period !== undefined && (obj.period = (message.period || helpers_1.Long.UZERO).toString());
        message.rewards !== undefined && (obj.rewards = message.rewards ? distribution_1.ValidatorHistoricalRewards.toJSON(message.rewards) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorHistoricalRewardsRecord();
        message.validatorAddress = object.validatorAddress ?? "";
        message.period = object.period !== undefined && object.period !== null ? helpers_1.Long.fromValue(object.period) : helpers_1.Long.UZERO;
        message.rewards = object.rewards !== undefined && object.rewards !== null ? distribution_1.ValidatorHistoricalRewards.fromPartial(object.rewards) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            validatorAddress: object.validator_address,
            period: helpers_1.Long.fromString(object.period),
            rewards: object?.rewards ? distribution_1.ValidatorHistoricalRewards.fromAmino(object.rewards) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        obj.period = message.period ? message.period.toString() : undefined;
        obj.rewards = message.rewards ? distribution_1.ValidatorHistoricalRewards.toAmino(message.rewards) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorHistoricalRewardsRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorHistoricalRewardsRecord",
            value: exports.ValidatorHistoricalRewardsRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorHistoricalRewardsRecord.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorHistoricalRewardsRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord",
            value: exports.ValidatorHistoricalRewardsRecord.encode(message).finish()
        };
    }
};
function createBaseValidatorCurrentRewardsRecord() {
    return {
        validatorAddress: "",
        rewards: distribution_1.ValidatorCurrentRewards.fromPartial({})
    };
}
exports.ValidatorCurrentRewardsRecord = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord",
    aminoType: "cosmos-sdk/ValidatorCurrentRewardsRecord",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.rewards !== undefined) {
            distribution_1.ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorCurrentRewardsRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.rewards = distribution_1.ValidatorCurrentRewards.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress) ? String(object.validatorAddress) : "",
            rewards: (0, helpers_1.isSet)(object.rewards) ? distribution_1.ValidatorCurrentRewards.fromJSON(object.rewards) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.rewards !== undefined && (obj.rewards = message.rewards ? distribution_1.ValidatorCurrentRewards.toJSON(message.rewards) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorCurrentRewardsRecord();
        message.validatorAddress = object.validatorAddress ?? "";
        message.rewards = object.rewards !== undefined && object.rewards !== null ? distribution_1.ValidatorCurrentRewards.fromPartial(object.rewards) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            validatorAddress: object.validator_address,
            rewards: object?.rewards ? distribution_1.ValidatorCurrentRewards.fromAmino(object.rewards) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        obj.rewards = message.rewards ? distribution_1.ValidatorCurrentRewards.toAmino(message.rewards) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorCurrentRewardsRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorCurrentRewardsRecord",
            value: exports.ValidatorCurrentRewardsRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorCurrentRewardsRecord.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorCurrentRewardsRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord",
            value: exports.ValidatorCurrentRewardsRecord.encode(message).finish()
        };
    }
};
function createBaseDelegatorStartingInfoRecord() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        startingInfo: distribution_1.DelegatorStartingInfo.fromPartial({})
    };
}
exports.DelegatorStartingInfoRecord = {
    typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord",
    aminoType: "cosmos-sdk/DelegatorStartingInfoRecord",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.startingInfo !== undefined) {
            distribution_1.DelegatorStartingInfo.encode(message.startingInfo, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorStartingInfoRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.startingInfo = distribution_1.DelegatorStartingInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegatorAddress: (0, helpers_1.isSet)(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress) ? String(object.validatorAddress) : "",
            startingInfo: (0, helpers_1.isSet)(object.startingInfo) ? distribution_1.DelegatorStartingInfo.fromJSON(object.startingInfo) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.startingInfo !== undefined && (obj.startingInfo = message.startingInfo ? distribution_1.DelegatorStartingInfo.toJSON(message.startingInfo) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegatorStartingInfoRecord();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.startingInfo = object.startingInfo !== undefined && object.startingInfo !== null ? distribution_1.DelegatorStartingInfo.fromPartial(object.startingInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            delegatorAddress: object.delegator_address,
            validatorAddress: object.validator_address,
            startingInfo: object?.starting_info ? distribution_1.DelegatorStartingInfo.fromAmino(object.starting_info) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_address = message.validatorAddress;
        obj.starting_info = message.startingInfo ? distribution_1.DelegatorStartingInfo.toAmino(message.startingInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DelegatorStartingInfoRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegatorStartingInfoRecord",
            value: exports.DelegatorStartingInfoRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DelegatorStartingInfoRecord.decode(message.value);
    },
    toProto(message) {
        return exports.DelegatorStartingInfoRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord",
            value: exports.DelegatorStartingInfoRecord.encode(message).finish()
        };
    }
};
function createBaseValidatorSlashEventRecord() {
    return {
        validatorAddress: "",
        height: helpers_1.Long.UZERO,
        period: helpers_1.Long.UZERO,
        validatorSlashEvent: distribution_1.ValidatorSlashEvent.fromPartial({})
    };
}
exports.ValidatorSlashEventRecord = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord",
    aminoType: "cosmos-sdk/ValidatorSlashEventRecord",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (!message.height.isZero()) {
            writer.uint32(16).uint64(message.height);
        }
        if (!message.period.isZero()) {
            writer.uint32(24).uint64(message.period);
        }
        if (message.validatorSlashEvent !== undefined) {
            distribution_1.ValidatorSlashEvent.encode(message.validatorSlashEvent, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSlashEventRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.height = reader.uint64();
                    break;
                case 3:
                    message.period = reader.uint64();
                    break;
                case 4:
                    message.validatorSlashEvent = distribution_1.ValidatorSlashEvent.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress) ? String(object.validatorAddress) : "",
            height: (0, helpers_1.isSet)(object.height) ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.UZERO,
            period: (0, helpers_1.isSet)(object.period) ? helpers_1.Long.fromValue(object.period) : helpers_1.Long.UZERO,
            validatorSlashEvent: (0, helpers_1.isSet)(object.validatorSlashEvent) ? distribution_1.ValidatorSlashEvent.fromJSON(object.validatorSlashEvent) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.height !== undefined && (obj.height = (message.height || helpers_1.Long.UZERO).toString());
        message.period !== undefined && (obj.period = (message.period || helpers_1.Long.UZERO).toString());
        message.validatorSlashEvent !== undefined && (obj.validatorSlashEvent = message.validatorSlashEvent ? distribution_1.ValidatorSlashEvent.toJSON(message.validatorSlashEvent) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorSlashEventRecord();
        message.validatorAddress = object.validatorAddress ?? "";
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.UZERO;
        message.period = object.period !== undefined && object.period !== null ? helpers_1.Long.fromValue(object.period) : helpers_1.Long.UZERO;
        message.validatorSlashEvent = object.validatorSlashEvent !== undefined && object.validatorSlashEvent !== null ? distribution_1.ValidatorSlashEvent.fromPartial(object.validatorSlashEvent) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            validatorAddress: object.validator_address,
            height: helpers_1.Long.fromString(object.height),
            period: helpers_1.Long.fromString(object.period),
            validatorSlashEvent: object?.validator_slash_event ? distribution_1.ValidatorSlashEvent.fromAmino(object.validator_slash_event) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.period = message.period ? message.period.toString() : undefined;
        obj.validator_slash_event = message.validatorSlashEvent ? distribution_1.ValidatorSlashEvent.toAmino(message.validatorSlashEvent) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorSlashEventRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorSlashEventRecord",
            value: exports.ValidatorSlashEventRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorSlashEventRecord.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorSlashEventRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord",
            value: exports.ValidatorSlashEventRecord.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        params: distribution_1.Params.fromPartial({}),
        feePool: distribution_1.FeePool.fromPartial({}),
        delegatorWithdrawInfos: [],
        previousProposer: "",
        outstandingRewards: [],
        validatorAccumulatedCommissions: [],
        validatorHistoricalRewards: [],
        validatorCurrentRewards: [],
        delegatorStartingInfos: [],
        validatorSlashEvents: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.distribution.v1beta1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            distribution_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.feePool !== undefined) {
            distribution_1.FeePool.encode(message.feePool, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.delegatorWithdrawInfos) {
            exports.DelegatorWithdrawInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.previousProposer !== "") {
            writer.uint32(34).string(message.previousProposer);
        }
        for (const v of message.outstandingRewards) {
            exports.ValidatorOutstandingRewardsRecord.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.validatorAccumulatedCommissions) {
            exports.ValidatorAccumulatedCommissionRecord.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.validatorHistoricalRewards) {
            exports.ValidatorHistoricalRewardsRecord.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.validatorCurrentRewards) {
            exports.ValidatorCurrentRewardsRecord.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.delegatorStartingInfos) {
            exports.DelegatorStartingInfoRecord.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.validatorSlashEvents) {
            exports.ValidatorSlashEventRecord.encode(v, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = distribution_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.feePool = distribution_1.FeePool.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.delegatorWithdrawInfos.push(exports.DelegatorWithdrawInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.previousProposer = reader.string();
                    break;
                case 5:
                    message.outstandingRewards.push(exports.ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.validatorAccumulatedCommissions.push(exports.ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.validatorHistoricalRewards.push(exports.ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.validatorCurrentRewards.push(exports.ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.delegatorStartingInfos.push(exports.DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.validatorSlashEvents.push(exports.ValidatorSlashEventRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            params: (0, helpers_1.isSet)(object.params) ? distribution_1.Params.fromJSON(object.params) : undefined,
            feePool: (0, helpers_1.isSet)(object.feePool) ? distribution_1.FeePool.fromJSON(object.feePool) : undefined,
            delegatorWithdrawInfos: Array.isArray(object?.delegatorWithdrawInfos) ? object.delegatorWithdrawInfos.map((e) => exports.DelegatorWithdrawInfo.fromJSON(e)) : [],
            previousProposer: (0, helpers_1.isSet)(object.previousProposer) ? String(object.previousProposer) : "",
            outstandingRewards: Array.isArray(object?.outstandingRewards) ? object.outstandingRewards.map((e) => exports.ValidatorOutstandingRewardsRecord.fromJSON(e)) : [],
            validatorAccumulatedCommissions: Array.isArray(object?.validatorAccumulatedCommissions) ? object.validatorAccumulatedCommissions.map((e) => exports.ValidatorAccumulatedCommissionRecord.fromJSON(e)) : [],
            validatorHistoricalRewards: Array.isArray(object?.validatorHistoricalRewards) ? object.validatorHistoricalRewards.map((e) => exports.ValidatorHistoricalRewardsRecord.fromJSON(e)) : [],
            validatorCurrentRewards: Array.isArray(object?.validatorCurrentRewards) ? object.validatorCurrentRewards.map((e) => exports.ValidatorCurrentRewardsRecord.fromJSON(e)) : [],
            delegatorStartingInfos: Array.isArray(object?.delegatorStartingInfos) ? object.delegatorStartingInfos.map((e) => exports.DelegatorStartingInfoRecord.fromJSON(e)) : [],
            validatorSlashEvents: Array.isArray(object?.validatorSlashEvents) ? object.validatorSlashEvents.map((e) => exports.ValidatorSlashEventRecord.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? distribution_1.Params.toJSON(message.params) : undefined);
        message.feePool !== undefined && (obj.feePool = message.feePool ? distribution_1.FeePool.toJSON(message.feePool) : undefined);
        if (message.delegatorWithdrawInfos) {
            obj.delegatorWithdrawInfos = message.delegatorWithdrawInfos.map(e => e ? exports.DelegatorWithdrawInfo.toJSON(e) : undefined);
        }
        else {
            obj.delegatorWithdrawInfos = [];
        }
        message.previousProposer !== undefined && (obj.previousProposer = message.previousProposer);
        if (message.outstandingRewards) {
            obj.outstandingRewards = message.outstandingRewards.map(e => e ? exports.ValidatorOutstandingRewardsRecord.toJSON(e) : undefined);
        }
        else {
            obj.outstandingRewards = [];
        }
        if (message.validatorAccumulatedCommissions) {
            obj.validatorAccumulatedCommissions = message.validatorAccumulatedCommissions.map(e => e ? exports.ValidatorAccumulatedCommissionRecord.toJSON(e) : undefined);
        }
        else {
            obj.validatorAccumulatedCommissions = [];
        }
        if (message.validatorHistoricalRewards) {
            obj.validatorHistoricalRewards = message.validatorHistoricalRewards.map(e => e ? exports.ValidatorHistoricalRewardsRecord.toJSON(e) : undefined);
        }
        else {
            obj.validatorHistoricalRewards = [];
        }
        if (message.validatorCurrentRewards) {
            obj.validatorCurrentRewards = message.validatorCurrentRewards.map(e => e ? exports.ValidatorCurrentRewardsRecord.toJSON(e) : undefined);
        }
        else {
            obj.validatorCurrentRewards = [];
        }
        if (message.delegatorStartingInfos) {
            obj.delegatorStartingInfos = message.delegatorStartingInfos.map(e => e ? exports.DelegatorStartingInfoRecord.toJSON(e) : undefined);
        }
        else {
            obj.delegatorStartingInfos = [];
        }
        if (message.validatorSlashEvents) {
            obj.validatorSlashEvents = message.validatorSlashEvents.map(e => e ? exports.ValidatorSlashEventRecord.toJSON(e) : undefined);
        }
        else {
            obj.validatorSlashEvents = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? distribution_1.Params.fromPartial(object.params) : undefined;
        message.feePool = object.feePool !== undefined && object.feePool !== null ? distribution_1.FeePool.fromPartial(object.feePool) : undefined;
        message.delegatorWithdrawInfos = object.delegatorWithdrawInfos?.map(e => exports.DelegatorWithdrawInfo.fromPartial(e)) || [];
        message.previousProposer = object.previousProposer ?? "";
        message.outstandingRewards = object.outstandingRewards?.map(e => exports.ValidatorOutstandingRewardsRecord.fromPartial(e)) || [];
        message.validatorAccumulatedCommissions = object.validatorAccumulatedCommissions?.map(e => exports.ValidatorAccumulatedCommissionRecord.fromPartial(e)) || [];
        message.validatorHistoricalRewards = object.validatorHistoricalRewards?.map(e => exports.ValidatorHistoricalRewardsRecord.fromPartial(e)) || [];
        message.validatorCurrentRewards = object.validatorCurrentRewards?.map(e => exports.ValidatorCurrentRewardsRecord.fromPartial(e)) || [];
        message.delegatorStartingInfos = object.delegatorStartingInfos?.map(e => exports.DelegatorStartingInfoRecord.fromPartial(e)) || [];
        message.validatorSlashEvents = object.validatorSlashEvents?.map(e => exports.ValidatorSlashEventRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? distribution_1.Params.fromAmino(object.params) : undefined,
            feePool: object?.fee_pool ? distribution_1.FeePool.fromAmino(object.fee_pool) : undefined,
            delegatorWithdrawInfos: Array.isArray(object?.delegator_withdraw_infos) ? object.delegator_withdraw_infos.map((e) => exports.DelegatorWithdrawInfo.fromAmino(e)) : [],
            previousProposer: object.previous_proposer,
            outstandingRewards: Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e) => exports.ValidatorOutstandingRewardsRecord.fromAmino(e)) : [],
            validatorAccumulatedCommissions: Array.isArray(object?.validator_accumulated_commissions) ? object.validator_accumulated_commissions.map((e) => exports.ValidatorAccumulatedCommissionRecord.fromAmino(e)) : [],
            validatorHistoricalRewards: Array.isArray(object?.validator_historical_rewards) ? object.validator_historical_rewards.map((e) => exports.ValidatorHistoricalRewardsRecord.fromAmino(e)) : [],
            validatorCurrentRewards: Array.isArray(object?.validator_current_rewards) ? object.validator_current_rewards.map((e) => exports.ValidatorCurrentRewardsRecord.fromAmino(e)) : [],
            delegatorStartingInfos: Array.isArray(object?.delegator_starting_infos) ? object.delegator_starting_infos.map((e) => exports.DelegatorStartingInfoRecord.fromAmino(e)) : [],
            validatorSlashEvents: Array.isArray(object?.validator_slash_events) ? object.validator_slash_events.map((e) => exports.ValidatorSlashEventRecord.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? distribution_1.Params.toAmino(message.params) : undefined;
        obj.fee_pool = message.feePool ? distribution_1.FeePool.toAmino(message.feePool) : undefined;
        if (message.delegatorWithdrawInfos) {
            obj.delegator_withdraw_infos = message.delegatorWithdrawInfos.map(e => e ? exports.DelegatorWithdrawInfo.toAmino(e) : undefined);
        }
        else {
            obj.delegator_withdraw_infos = [];
        }
        obj.previous_proposer = message.previousProposer;
        if (message.outstandingRewards) {
            obj.outstanding_rewards = message.outstandingRewards.map(e => e ? exports.ValidatorOutstandingRewardsRecord.toAmino(e) : undefined);
        }
        else {
            obj.outstanding_rewards = [];
        }
        if (message.validatorAccumulatedCommissions) {
            obj.validator_accumulated_commissions = message.validatorAccumulatedCommissions.map(e => e ? exports.ValidatorAccumulatedCommissionRecord.toAmino(e) : undefined);
        }
        else {
            obj.validator_accumulated_commissions = [];
        }
        if (message.validatorHistoricalRewards) {
            obj.validator_historical_rewards = message.validatorHistoricalRewards.map(e => e ? exports.ValidatorHistoricalRewardsRecord.toAmino(e) : undefined);
        }
        else {
            obj.validator_historical_rewards = [];
        }
        if (message.validatorCurrentRewards) {
            obj.validator_current_rewards = message.validatorCurrentRewards.map(e => e ? exports.ValidatorCurrentRewardsRecord.toAmino(e) : undefined);
        }
        else {
            obj.validator_current_rewards = [];
        }
        if (message.delegatorStartingInfos) {
            obj.delegator_starting_infos = message.delegatorStartingInfos.map(e => e ? exports.DelegatorStartingInfoRecord.toAmino(e) : undefined);
        }
        else {
            obj.delegator_starting_infos = [];
        }
        if (message.validatorSlashEvents) {
            obj.validator_slash_events = message.validatorSlashEvents.map(e => e ? exports.ValidatorSlashEventRecord.toAmino(e) : undefined);
        }
        else {
            obj.validator_slash_events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map