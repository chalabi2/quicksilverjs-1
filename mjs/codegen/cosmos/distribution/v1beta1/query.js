import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Params, ValidatorOutstandingRewards, ValidatorAccumulatedCommission, ValidatorSlashEvent, DelegationDelegatorReward } from "./distribution";
import { DecCoin } from "../../base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryParamsRequest",
    aminoType: "cosmos-sdk/QueryParamsRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsRequest",
            value: QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryParamsResponse",
    aminoType: "cosmos-sdk/QueryParamsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsResponse",
            value: QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorOutstandingRewardsRequest() {
    return {
        validatorAddress: ""
    };
}
export const QueryValidatorOutstandingRewardsRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest",
    aminoType: "cosmos-sdk/QueryValidatorOutstandingRewardsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorOutstandingRewardsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorOutstandingRewardsRequest();
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            validatorAddress: object.validator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorOutstandingRewardsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorOutstandingRewardsRequest",
            value: QueryValidatorOutstandingRewardsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryValidatorOutstandingRewardsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorOutstandingRewardsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest",
            value: QueryValidatorOutstandingRewardsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorOutstandingRewardsResponse() {
    return {
        rewards: ValidatorOutstandingRewards.fromPartial({})
    };
}
export const QueryValidatorOutstandingRewardsResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse",
    aminoType: "cosmos-sdk/QueryValidatorOutstandingRewardsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.rewards !== undefined) {
            ValidatorOutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorOutstandingRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards = ValidatorOutstandingRewards.decode(reader, reader.uint32());
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
            rewards: isSet(object.rewards) ? ValidatorOutstandingRewards.fromJSON(object.rewards) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.rewards !== undefined && (obj.rewards = message.rewards ? ValidatorOutstandingRewards.toJSON(message.rewards) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorOutstandingRewardsResponse();
        message.rewards = object.rewards !== undefined && object.rewards !== null ? ValidatorOutstandingRewards.fromPartial(object.rewards) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            rewards: object?.rewards ? ValidatorOutstandingRewards.fromAmino(object.rewards) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.rewards = message.rewards ? ValidatorOutstandingRewards.toAmino(message.rewards) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorOutstandingRewardsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorOutstandingRewardsResponse",
            value: QueryValidatorOutstandingRewardsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryValidatorOutstandingRewardsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorOutstandingRewardsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse",
            value: QueryValidatorOutstandingRewardsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorCommissionRequest() {
    return {
        validatorAddress: ""
    };
}
export const QueryValidatorCommissionRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest",
    aminoType: "cosmos-sdk/QueryValidatorCommissionRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorCommissionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorCommissionRequest();
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            validatorAddress: object.validator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorCommissionRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorCommissionRequest",
            value: QueryValidatorCommissionRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryValidatorCommissionRequest.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorCommissionRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest",
            value: QueryValidatorCommissionRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorCommissionResponse() {
    return {
        commission: ValidatorAccumulatedCommission.fromPartial({})
    };
}
export const QueryValidatorCommissionResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse",
    aminoType: "cosmos-sdk/QueryValidatorCommissionResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.commission !== undefined) {
            ValidatorAccumulatedCommission.encode(message.commission, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorCommissionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commission = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
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
            commission: isSet(object.commission) ? ValidatorAccumulatedCommission.fromJSON(object.commission) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.commission !== undefined && (obj.commission = message.commission ? ValidatorAccumulatedCommission.toJSON(message.commission) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorCommissionResponse();
        message.commission = object.commission !== undefined && object.commission !== null ? ValidatorAccumulatedCommission.fromPartial(object.commission) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            commission: object?.commission ? ValidatorAccumulatedCommission.fromAmino(object.commission) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.commission = message.commission ? ValidatorAccumulatedCommission.toAmino(message.commission) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorCommissionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorCommissionResponse",
            value: QueryValidatorCommissionResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryValidatorCommissionResponse.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorCommissionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse",
            value: QueryValidatorCommissionResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorSlashesRequest() {
    return {
        validatorAddress: "",
        startingHeight: Long.UZERO,
        endingHeight: Long.UZERO,
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryValidatorSlashesRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest",
    aminoType: "cosmos-sdk/QueryValidatorSlashesRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (!message.startingHeight.isZero()) {
            writer.uint32(16).uint64(message.startingHeight);
        }
        if (!message.endingHeight.isZero()) {
            writer.uint32(24).uint64(message.endingHeight);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorSlashesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.startingHeight = reader.uint64();
                    break;
                case 3:
                    message.endingHeight = reader.uint64();
                    break;
                case 4:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            startingHeight: isSet(object.startingHeight) ? Long.fromValue(object.startingHeight) : Long.UZERO,
            endingHeight: isSet(object.endingHeight) ? Long.fromValue(object.endingHeight) : Long.UZERO,
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.startingHeight !== undefined && (obj.startingHeight = (message.startingHeight || Long.UZERO).toString());
        message.endingHeight !== undefined && (obj.endingHeight = (message.endingHeight || Long.UZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorSlashesRequest();
        message.validatorAddress = object.validatorAddress ?? "";
        message.startingHeight = object.startingHeight !== undefined && object.startingHeight !== null ? Long.fromValue(object.startingHeight) : Long.UZERO;
        message.endingHeight = object.endingHeight !== undefined && object.endingHeight !== null ? Long.fromValue(object.endingHeight) : Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            validatorAddress: object.validator_address,
            startingHeight: Long.fromString(object.starting_height),
            endingHeight: Long.fromString(object.ending_height),
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        obj.starting_height = message.startingHeight ? message.startingHeight.toString() : undefined;
        obj.ending_height = message.endingHeight ? message.endingHeight.toString() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorSlashesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorSlashesRequest",
            value: QueryValidatorSlashesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryValidatorSlashesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorSlashesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest",
            value: QueryValidatorSlashesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorSlashesResponse() {
    return {
        slashes: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryValidatorSlashesResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse",
    aminoType: "cosmos-sdk/QueryValidatorSlashesResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.slashes) {
            ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorSlashesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.slashes.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            slashes: Array.isArray(object?.slashes) ? object.slashes.map((e) => ValidatorSlashEvent.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.slashes) {
            obj.slashes = message.slashes.map(e => e ? ValidatorSlashEvent.toJSON(e) : undefined);
        }
        else {
            obj.slashes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorSlashesResponse();
        message.slashes = object.slashes?.map(e => ValidatorSlashEvent.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            slashes: Array.isArray(object?.slashes) ? object.slashes.map((e) => ValidatorSlashEvent.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.slashes) {
            obj.slashes = message.slashes.map(e => e ? ValidatorSlashEvent.toAmino(e) : undefined);
        }
        else {
            obj.slashes = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorSlashesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorSlashesResponse",
            value: QueryValidatorSlashesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryValidatorSlashesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorSlashesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse",
            value: QueryValidatorSlashesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegationRewardsRequest() {
    return {
        delegatorAddress: "",
        validatorAddress: ""
    };
}
export const QueryDelegationRewardsRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest",
    aminoType: "cosmos-sdk/QueryDelegationRewardsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationRewardsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
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
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegationRewardsRequest();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegatorAddress: object.delegator_address,
            validatorAddress: object.validator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_address = message.validatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegationRewardsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegationRewardsRequest",
            value: QueryDelegationRewardsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegationRewardsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDelegationRewardsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest",
            value: QueryDelegationRewardsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegationRewardsResponse() {
    return {
        rewards: []
    };
}
export const QueryDelegationRewardsResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse",
    aminoType: "cosmos-sdk/QueryDelegationRewardsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rewards) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(DecCoin.decode(reader, reader.uint32()));
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
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegationRewardsResponse();
        message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => DecCoin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegationRewardsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegationRewardsResponse",
            value: QueryDelegationRewardsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegationRewardsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDelegationRewardsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse",
            value: QueryDelegationRewardsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegationTotalRewardsRequest() {
    return {
        delegatorAddress: ""
    };
}
export const QueryDelegationTotalRewardsRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest",
    aminoType: "cosmos-sdk/QueryDelegationTotalRewardsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationTotalRewardsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
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
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegationTotalRewardsRequest();
        message.delegatorAddress = object.delegatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegatorAddress: object.delegator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegationTotalRewardsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegationTotalRewardsRequest",
            value: QueryDelegationTotalRewardsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegationTotalRewardsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDelegationTotalRewardsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest",
            value: QueryDelegationTotalRewardsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegationTotalRewardsResponse() {
    return {
        rewards: [],
        total: []
    };
}
export const QueryDelegationTotalRewardsResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse",
    aminoType: "cosmos-sdk/QueryDelegationTotalRewardsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rewards) {
            DelegationDelegatorReward.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.total) {
            DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationTotalRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(DelegationDelegatorReward.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.total.push(DecCoin.decode(reader, reader.uint32()));
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
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => DelegationDelegatorReward.fromJSON(e)) : [],
            total: Array.isArray(object?.total) ? object.total.map((e) => DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? DelegationDelegatorReward.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        if (message.total) {
            obj.total = message.total.map(e => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.total = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegationTotalRewardsResponse();
        message.rewards = object.rewards?.map(e => DelegationDelegatorReward.fromPartial(e)) || [];
        message.total = object.total?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => DelegationDelegatorReward.fromAmino(e)) : [],
            total: Array.isArray(object?.total) ? object.total.map((e) => DecCoin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? DelegationDelegatorReward.toAmino(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        if (message.total) {
            obj.total = message.total.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.total = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegationTotalRewardsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegationTotalRewardsResponse",
            value: QueryDelegationTotalRewardsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegationTotalRewardsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDelegationTotalRewardsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse",
            value: QueryDelegationTotalRewardsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorValidatorsRequest() {
    return {
        delegatorAddress: ""
    };
}
export const QueryDelegatorValidatorsRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest",
    aminoType: "cosmos-sdk/QueryDelegatorValidatorsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorValidatorsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
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
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorValidatorsRequest();
        message.delegatorAddress = object.delegatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegatorAddress: object.delegator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegatorValidatorsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorValidatorsRequest",
            value: QueryDelegatorValidatorsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegatorValidatorsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDelegatorValidatorsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest",
            value: QueryDelegatorValidatorsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorValidatorsResponse() {
    return {
        validators: []
    };
}
export const QueryDelegatorValidatorsResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse",
    aminoType: "cosmos-sdk/QueryDelegatorValidatorsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.validators) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorValidatorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(reader.string());
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
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e);
        }
        else {
            obj.validators = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorValidatorsResponse();
        message.validators = object.validators?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e);
        }
        else {
            obj.validators = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegatorValidatorsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorValidatorsResponse",
            value: QueryDelegatorValidatorsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegatorValidatorsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDelegatorValidatorsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse",
            value: QueryDelegatorValidatorsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorWithdrawAddressRequest() {
    return {
        delegatorAddress: ""
    };
}
export const QueryDelegatorWithdrawAddressRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest",
    aminoType: "cosmos-sdk/QueryDelegatorWithdrawAddressRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorWithdrawAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
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
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorWithdrawAddressRequest();
        message.delegatorAddress = object.delegatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegatorAddress: object.delegator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegatorWithdrawAddressRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorWithdrawAddressRequest",
            value: QueryDelegatorWithdrawAddressRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegatorWithdrawAddressRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDelegatorWithdrawAddressRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest",
            value: QueryDelegatorWithdrawAddressRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorWithdrawAddressResponse() {
    return {
        withdrawAddress: ""
    };
}
export const QueryDelegatorWithdrawAddressResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse",
    aminoType: "cosmos-sdk/QueryDelegatorWithdrawAddressResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.withdrawAddress !== "") {
            writer.uint32(10).string(message.withdrawAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorWithdrawAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorWithdrawAddressResponse();
        message.withdrawAddress = object.withdrawAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            withdrawAddress: object.withdraw_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.withdraw_address = message.withdrawAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegatorWithdrawAddressResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorWithdrawAddressResponse",
            value: QueryDelegatorWithdrawAddressResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegatorWithdrawAddressResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDelegatorWithdrawAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse",
            value: QueryDelegatorWithdrawAddressResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCommunityPoolRequest() {
    return {};
}
export const QueryCommunityPoolRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolRequest",
    aminoType: "cosmos-sdk/QueryCommunityPoolRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCommunityPoolRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryCommunityPoolRequest();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCommunityPoolRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryCommunityPoolRequest",
            value: QueryCommunityPoolRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCommunityPoolRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCommunityPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolRequest",
            value: QueryCommunityPoolRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCommunityPoolResponse() {
    return {
        pool: []
    };
}
export const QueryCommunityPoolResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolResponse",
    aminoType: "cosmos-sdk/QueryCommunityPoolResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pool) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCommunityPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool.push(DecCoin.decode(reader, reader.uint32()));
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
            pool: Array.isArray(object?.pool) ? object.pool.map((e) => DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pool) {
            obj.pool = message.pool.map(e => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.pool = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCommunityPoolResponse();
        message.pool = object.pool?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            pool: Array.isArray(object?.pool) ? object.pool.map((e) => DecCoin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.pool) {
            obj.pool = message.pool.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.pool = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCommunityPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryCommunityPoolResponse",
            value: QueryCommunityPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCommunityPoolResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCommunityPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolResponse",
            value: QueryCommunityPoolResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map