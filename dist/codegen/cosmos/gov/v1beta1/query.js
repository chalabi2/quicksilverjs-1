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
exports.QueryTallyResultResponse = exports.QueryTallyResultRequest = exports.QueryDepositsResponse = exports.QueryDepositsRequest = exports.QueryDepositResponse = exports.QueryDepositRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryVotesResponse = exports.QueryVotesRequest = exports.QueryVoteResponse = exports.QueryVoteRequest = exports.QueryProposalsResponse = exports.QueryProposalsRequest = exports.QueryProposalResponse = exports.QueryProposalRequest = void 0;
const gov_1 = require("./gov");
const pagination_1 = require("../../base/query/v1beta1/pagination");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseQueryProposalRequest() {
    return {
        proposalId: helpers_1.Long.UZERO
    };
}
exports.QueryProposalRequest = {
    typeUrl: "/cosmos.gov.v1beta1.QueryProposalRequest",
    aminoType: "cosmos-sdk/QueryProposalRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
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
            proposalId: (0, helpers_1.isSet)(object.proposalId) ? helpers_1.Long.fromValue(object.proposalId) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? helpers_1.Long.fromValue(object.proposalId) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            proposalId: helpers_1.Long.fromString(object.proposal_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProposalRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryProposalRequest",
            value: exports.QueryProposalRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryProposalRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProposalRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryProposalRequest",
            value: exports.QueryProposalRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProposalResponse() {
    return {
        proposal: gov_1.Proposal.fromPartial({})
    };
}
exports.QueryProposalResponse = {
    typeUrl: "/cosmos.gov.v1beta1.QueryProposalResponse",
    aminoType: "cosmos-sdk/QueryProposalResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.proposal !== undefined) {
            gov_1.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal = gov_1.Proposal.decode(reader, reader.uint32());
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
            proposal: (0, helpers_1.isSet)(object.proposal) ? gov_1.Proposal.fromJSON(object.proposal) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal !== undefined && (obj.proposal = message.proposal ? gov_1.Proposal.toJSON(message.proposal) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalResponse();
        message.proposal = object.proposal !== undefined && object.proposal !== null ? gov_1.Proposal.fromPartial(object.proposal) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            proposal: object?.proposal ? gov_1.Proposal.fromAmino(object.proposal) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal = message.proposal ? gov_1.Proposal.toAmino(message.proposal) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryProposalResponse",
            value: exports.QueryProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryProposalResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryProposalResponse",
            value: exports.QueryProposalResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProposalsRequest() {
    return {
        proposalStatus: 0,
        voter: "",
        depositor: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryProposalsRequest = {
    typeUrl: "/cosmos.gov.v1beta1.QueryProposalsRequest",
    aminoType: "cosmos-sdk/QueryProposalsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.proposalStatus !== 0) {
            writer.uint32(8).int32(message.proposalStatus);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.depositor !== "") {
            writer.uint32(26).string(message.depositor);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalStatus = reader.int32();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.depositor = reader.string();
                    break;
                case 4:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            proposalStatus: (0, helpers_1.isSet)(object.proposalStatus) ? (0, gov_1.proposalStatusFromJSON)(object.proposalStatus) : -1,
            voter: (0, helpers_1.isSet)(object.voter) ? String(object.voter) : "",
            depositor: (0, helpers_1.isSet)(object.depositor) ? String(object.depositor) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalStatus !== undefined && (obj.proposalStatus = (0, gov_1.proposalStatusToJSON)(message.proposalStatus));
        message.voter !== undefined && (obj.voter = message.voter);
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalsRequest();
        message.proposalStatus = object.proposalStatus ?? 0;
        message.voter = object.voter ?? "";
        message.depositor = object.depositor ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            proposalStatus: (0, helpers_1.isSet)(object.proposal_status) ? (0, gov_1.proposalStatusFromJSON)(object.proposal_status) : -1,
            voter: object.voter,
            depositor: object.depositor,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_status = message.proposalStatus;
        obj.voter = message.voter;
        obj.depositor = message.depositor;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProposalsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryProposalsRequest",
            value: exports.QueryProposalsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryProposalsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProposalsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryProposalsRequest",
            value: exports.QueryProposalsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProposalsResponse() {
    return {
        proposals: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryProposalsResponse = {
    typeUrl: "/cosmos.gov.v1beta1.QueryProposalsResponse",
    aminoType: "cosmos-sdk/QueryProposalsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.proposals) {
            gov_1.Proposal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposals.push(gov_1.Proposal.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => gov_1.Proposal.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? gov_1.Proposal.toJSON(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalsResponse();
        message.proposals = object.proposals?.map(e => gov_1.Proposal.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => gov_1.Proposal.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? gov_1.Proposal.toAmino(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProposalsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryProposalsResponse",
            value: exports.QueryProposalsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryProposalsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProposalsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryProposalsResponse",
            value: exports.QueryProposalsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryVoteRequest() {
    return {
        proposalId: helpers_1.Long.UZERO,
        voter: ""
    };
}
exports.QueryVoteRequest = {
    typeUrl: "/cosmos.gov.v1beta1.QueryVoteRequest",
    aminoType: "cosmos-sdk/QueryVoteRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVoteRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
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
            proposalId: (0, helpers_1.isSet)(object.proposalId) ? helpers_1.Long.fromValue(object.proposalId) : helpers_1.Long.UZERO,
            voter: (0, helpers_1.isSet)(object.voter) ? String(object.voter) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || helpers_1.Long.UZERO).toString());
        message.voter !== undefined && (obj.voter = message.voter);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVoteRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? helpers_1.Long.fromValue(object.proposalId) : helpers_1.Long.UZERO;
        message.voter = object.voter ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            proposalId: helpers_1.Long.fromString(object.proposal_id),
            voter: object.voter
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        obj.voter = message.voter;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVoteRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVoteRequest",
            value: exports.QueryVoteRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryVoteRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVoteRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryVoteRequest",
            value: exports.QueryVoteRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVoteResponse() {
    return {
        vote: gov_1.Vote.fromPartial({})
    };
}
exports.QueryVoteResponse = {
    typeUrl: "/cosmos.gov.v1beta1.QueryVoteResponse",
    aminoType: "cosmos-sdk/QueryVoteResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.vote !== undefined) {
            gov_1.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVoteResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote = gov_1.Vote.decode(reader, reader.uint32());
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
            vote: (0, helpers_1.isSet)(object.vote) ? gov_1.Vote.fromJSON(object.vote) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.vote !== undefined && (obj.vote = message.vote ? gov_1.Vote.toJSON(message.vote) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVoteResponse();
        message.vote = object.vote !== undefined && object.vote !== null ? gov_1.Vote.fromPartial(object.vote) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            vote: object?.vote ? gov_1.Vote.fromAmino(object.vote) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.vote = message.vote ? gov_1.Vote.toAmino(message.vote) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVoteResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVoteResponse",
            value: exports.QueryVoteResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryVoteResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryVoteResponse",
            value: exports.QueryVoteResponse.encode(message).finish()
        };
    }
};
function createBaseQueryVotesRequest() {
    return {
        proposalId: helpers_1.Long.UZERO,
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryVotesRequest = {
    typeUrl: "/cosmos.gov.v1beta1.QueryVotesRequest",
    aminoType: "cosmos-sdk/QueryVotesRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            proposalId: (0, helpers_1.isSet)(object.proposalId) ? helpers_1.Long.fromValue(object.proposalId) : helpers_1.Long.UZERO,
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || helpers_1.Long.UZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVotesRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? helpers_1.Long.fromValue(object.proposalId) : helpers_1.Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            proposalId: helpers_1.Long.fromString(object.proposal_id),
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVotesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVotesRequest",
            value: exports.QueryVotesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryVotesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVotesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryVotesRequest",
            value: exports.QueryVotesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVotesResponse() {
    return {
        votes: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryVotesResponse = {
    typeUrl: "/cosmos.gov.v1beta1.QueryVotesResponse",
    aminoType: "cosmos-sdk/QueryVotesResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.votes) {
            gov_1.Vote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votes.push(gov_1.Vote.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => gov_1.Vote.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? gov_1.Vote.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVotesResponse();
        message.votes = object.votes?.map(e => gov_1.Vote.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => gov_1.Vote.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? gov_1.Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVotesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVotesResponse",
            value: exports.QueryVotesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryVotesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVotesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryVotesResponse",
            value: exports.QueryVotesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {
        paramsType: ""
    };
}
exports.QueryParamsRequest = {
    typeUrl: "/cosmos.gov.v1beta1.QueryParamsRequest",
    aminoType: "cosmos-sdk/QueryParamsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.paramsType !== "") {
            writer.uint32(10).string(message.paramsType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paramsType = reader.string();
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
            paramsType: (0, helpers_1.isSet)(object.paramsType) ? String(object.paramsType) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.paramsType !== undefined && (obj.paramsType = message.paramsType);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsRequest();
        message.paramsType = object.paramsType ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            paramsType: object.params_type
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params_type = message.paramsType;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsRequest",
            value: exports.QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        votingParams: gov_1.VotingParams.fromPartial({}),
        depositParams: gov_1.DepositParams.fromPartial({}),
        tallyParams: gov_1.TallyParams.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/cosmos.gov.v1beta1.QueryParamsResponse",
    aminoType: "cosmos-sdk/QueryParamsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.votingParams !== undefined) {
            gov_1.VotingParams.encode(message.votingParams, writer.uint32(10).fork()).ldelim();
        }
        if (message.depositParams !== undefined) {
            gov_1.DepositParams.encode(message.depositParams, writer.uint32(18).fork()).ldelim();
        }
        if (message.tallyParams !== undefined) {
            gov_1.TallyParams.encode(message.tallyParams, writer.uint32(26).fork()).ldelim();
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
                    message.votingParams = gov_1.VotingParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.depositParams = gov_1.DepositParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tallyParams = gov_1.TallyParams.decode(reader, reader.uint32());
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
            votingParams: (0, helpers_1.isSet)(object.votingParams) ? gov_1.VotingParams.fromJSON(object.votingParams) : undefined,
            depositParams: (0, helpers_1.isSet)(object.depositParams) ? gov_1.DepositParams.fromJSON(object.depositParams) : undefined,
            tallyParams: (0, helpers_1.isSet)(object.tallyParams) ? gov_1.TallyParams.fromJSON(object.tallyParams) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.votingParams !== undefined && (obj.votingParams = message.votingParams ? gov_1.VotingParams.toJSON(message.votingParams) : undefined);
        message.depositParams !== undefined && (obj.depositParams = message.depositParams ? gov_1.DepositParams.toJSON(message.depositParams) : undefined);
        message.tallyParams !== undefined && (obj.tallyParams = message.tallyParams ? gov_1.TallyParams.toJSON(message.tallyParams) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.votingParams = object.votingParams !== undefined && object.votingParams !== null ? gov_1.VotingParams.fromPartial(object.votingParams) : undefined;
        message.depositParams = object.depositParams !== undefined && object.depositParams !== null ? gov_1.DepositParams.fromPartial(object.depositParams) : undefined;
        message.tallyParams = object.tallyParams !== undefined && object.tallyParams !== null ? gov_1.TallyParams.fromPartial(object.tallyParams) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            votingParams: object?.voting_params ? gov_1.VotingParams.fromAmino(object.voting_params) : undefined,
            depositParams: object?.deposit_params ? gov_1.DepositParams.fromAmino(object.deposit_params) : undefined,
            tallyParams: object?.tally_params ? gov_1.TallyParams.fromAmino(object.tally_params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.voting_params = message.votingParams ? gov_1.VotingParams.toAmino(message.votingParams) : undefined;
        obj.deposit_params = message.depositParams ? gov_1.DepositParams.toAmino(message.depositParams) : undefined;
        obj.tally_params = message.tallyParams ? gov_1.TallyParams.toAmino(message.tallyParams) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsResponse",
            value: exports.QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDepositRequest() {
    return {
        proposalId: helpers_1.Long.UZERO,
        depositor: ""
    };
}
exports.QueryDepositRequest = {
    typeUrl: "/cosmos.gov.v1beta1.QueryDepositRequest",
    aminoType: "cosmos-sdk/QueryDepositRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.depositor = reader.string();
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
            proposalId: (0, helpers_1.isSet)(object.proposalId) ? helpers_1.Long.fromValue(object.proposalId) : helpers_1.Long.UZERO,
            depositor: (0, helpers_1.isSet)(object.depositor) ? String(object.depositor) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || helpers_1.Long.UZERO).toString());
        message.depositor !== undefined && (obj.depositor = message.depositor);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDepositRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? helpers_1.Long.fromValue(object.proposalId) : helpers_1.Long.UZERO;
        message.depositor = object.depositor ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            proposalId: helpers_1.Long.fromString(object.proposal_id),
            depositor: object.depositor
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        obj.depositor = message.depositor;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDepositRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDepositRequest",
            value: exports.QueryDepositRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDepositRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDepositRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryDepositRequest",
            value: exports.QueryDepositRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDepositResponse() {
    return {
        deposit: gov_1.Deposit.fromPartial({})
    };
}
exports.QueryDepositResponse = {
    typeUrl: "/cosmos.gov.v1beta1.QueryDepositResponse",
    aminoType: "cosmos-sdk/QueryDepositResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.deposit !== undefined) {
            gov_1.Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposit = gov_1.Deposit.decode(reader, reader.uint32());
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
            deposit: (0, helpers_1.isSet)(object.deposit) ? gov_1.Deposit.fromJSON(object.deposit) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.deposit !== undefined && (obj.deposit = message.deposit ? gov_1.Deposit.toJSON(message.deposit) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDepositResponse();
        message.deposit = object.deposit !== undefined && object.deposit !== null ? gov_1.Deposit.fromPartial(object.deposit) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            deposit: object?.deposit ? gov_1.Deposit.fromAmino(object.deposit) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.deposit = message.deposit ? gov_1.Deposit.toAmino(message.deposit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDepositResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDepositResponse",
            value: exports.QueryDepositResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDepositResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDepositResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryDepositResponse",
            value: exports.QueryDepositResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDepositsRequest() {
    return {
        proposalId: helpers_1.Long.UZERO,
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryDepositsRequest = {
    typeUrl: "/cosmos.gov.v1beta1.QueryDepositsRequest",
    aminoType: "cosmos-sdk/QueryDepositsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            proposalId: (0, helpers_1.isSet)(object.proposalId) ? helpers_1.Long.fromValue(object.proposalId) : helpers_1.Long.UZERO,
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || helpers_1.Long.UZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDepositsRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? helpers_1.Long.fromValue(object.proposalId) : helpers_1.Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            proposalId: helpers_1.Long.fromString(object.proposal_id),
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDepositsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDepositsRequest",
            value: exports.QueryDepositsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDepositsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDepositsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryDepositsRequest",
            value: exports.QueryDepositsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDepositsResponse() {
    return {
        deposits: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryDepositsResponse = {
    typeUrl: "/cosmos.gov.v1beta1.QueryDepositsResponse",
    aminoType: "cosmos-sdk/QueryDepositsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.deposits) {
            gov_1.Deposit.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposits.push(gov_1.Deposit.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            deposits: Array.isArray(object?.deposits) ? object.deposits.map((e) => gov_1.Deposit.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? gov_1.Deposit.toJSON(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDepositsResponse();
        message.deposits = object.deposits?.map(e => gov_1.Deposit.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            deposits: Array.isArray(object?.deposits) ? object.deposits.map((e) => gov_1.Deposit.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? gov_1.Deposit.toAmino(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDepositsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDepositsResponse",
            value: exports.QueryDepositsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDepositsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDepositsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryDepositsResponse",
            value: exports.QueryDepositsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTallyResultRequest() {
    return {
        proposalId: helpers_1.Long.UZERO
    };
}
exports.QueryTallyResultRequest = {
    typeUrl: "/cosmos.gov.v1beta1.QueryTallyResultRequest",
    aminoType: "cosmos-sdk/QueryTallyResultRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTallyResultRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
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
            proposalId: (0, helpers_1.isSet)(object.proposalId) ? helpers_1.Long.fromValue(object.proposalId) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTallyResultRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? helpers_1.Long.fromValue(object.proposalId) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            proposalId: helpers_1.Long.fromString(object.proposal_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTallyResultRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTallyResultRequest",
            value: exports.QueryTallyResultRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTallyResultRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTallyResultRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryTallyResultRequest",
            value: exports.QueryTallyResultRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTallyResultResponse() {
    return {
        tally: gov_1.TallyResult.fromPartial({})
    };
}
exports.QueryTallyResultResponse = {
    typeUrl: "/cosmos.gov.v1beta1.QueryTallyResultResponse",
    aminoType: "cosmos-sdk/QueryTallyResultResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.tally !== undefined) {
            gov_1.TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTallyResultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tally = gov_1.TallyResult.decode(reader, reader.uint32());
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
            tally: (0, helpers_1.isSet)(object.tally) ? gov_1.TallyResult.fromJSON(object.tally) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.tally !== undefined && (obj.tally = message.tally ? gov_1.TallyResult.toJSON(message.tally) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTallyResultResponse();
        message.tally = object.tally !== undefined && object.tally !== null ? gov_1.TallyResult.fromPartial(object.tally) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            tally: object?.tally ? gov_1.TallyResult.fromAmino(object.tally) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tally = message.tally ? gov_1.TallyResult.toAmino(message.tally) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTallyResultResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTallyResultResponse",
            value: exports.QueryTallyResultResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTallyResultResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTallyResultResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryTallyResultResponse",
            value: exports.QueryTallyResultResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map