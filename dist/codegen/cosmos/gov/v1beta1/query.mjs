import { Proposal, Vote, VotingParams, DepositParams, TallyParams, Deposit, TallyResult, proposalStatusFromJSON, proposalStatusToJSON } from "./gov";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseQueryProposalRequest() {
    return {
        proposalId: Long.UZERO
    };
}
export const QueryProposalRequest = {
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
            proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            proposalId: Long.fromString(object.proposal_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProposalRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryProposalRequest",
            value: QueryProposalRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryProposalRequest.decode(message.value);
    },
    toProto(message) {
        return QueryProposalRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryProposalRequest",
            value: QueryProposalRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProposalResponse() {
    return {
        proposal: Proposal.fromPartial({})
    };
}
export const QueryProposalResponse = {
    typeUrl: "/cosmos.gov.v1beta1.QueryProposalResponse",
    aminoType: "cosmos-sdk/QueryProposalResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.proposal !== undefined) {
            Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
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
                    message.proposal = Proposal.decode(reader, reader.uint32());
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
            proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalResponse();
        message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            proposal: object?.proposal ? Proposal.fromAmino(object.proposal) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal = message.proposal ? Proposal.toAmino(message.proposal) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryProposalResponse",
            value: QueryProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryProposalResponse.decode(message.value);
    },
    toProto(message) {
        return QueryProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryProposalResponse",
            value: QueryProposalResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProposalsRequest() {
    return {
        proposalStatus: 0,
        voter: "",
        depositor: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryProposalsRequest = {
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
            PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
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
            proposalStatus: isSet(object.proposalStatus) ? proposalStatusFromJSON(object.proposalStatus) : -1,
            voter: isSet(object.voter) ? String(object.voter) : "",
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalStatus !== undefined && (obj.proposalStatus = proposalStatusToJSON(message.proposalStatus));
        message.voter !== undefined && (obj.voter = message.voter);
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalsRequest();
        message.proposalStatus = object.proposalStatus ?? 0;
        message.voter = object.voter ?? "";
        message.depositor = object.depositor ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            proposalStatus: isSet(object.proposal_status) ? proposalStatusFromJSON(object.proposal_status) : -1,
            voter: object.voter,
            depositor: object.depositor,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_status = message.proposalStatus;
        obj.voter = message.voter;
        obj.depositor = message.depositor;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProposalsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryProposalsRequest",
            value: QueryProposalsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryProposalsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryProposalsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryProposalsRequest",
            value: QueryProposalsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProposalsResponse() {
    return {
        proposals: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryProposalsResponse = {
    typeUrl: "/cosmos.gov.v1beta1.QueryProposalsResponse",
    aminoType: "cosmos-sdk/QueryProposalsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.proposals) {
            Proposal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.proposals.push(Proposal.decode(reader, reader.uint32()));
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
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => Proposal.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? Proposal.toJSON(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalsResponse();
        message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => Proposal.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProposalsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryProposalsResponse",
            value: QueryProposalsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryProposalsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryProposalsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryProposalsResponse",
            value: QueryProposalsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryVoteRequest() {
    return {
        proposalId: Long.UZERO,
        voter: ""
    };
}
export const QueryVoteRequest = {
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
            proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
            voter: isSet(object.voter) ? String(object.voter) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
        message.voter !== undefined && (obj.voter = message.voter);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVoteRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
        message.voter = object.voter ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            proposalId: Long.fromString(object.proposal_id),
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
        return QueryVoteRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVoteRequest",
            value: QueryVoteRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryVoteRequest.decode(message.value);
    },
    toProto(message) {
        return QueryVoteRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryVoteRequest",
            value: QueryVoteRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVoteResponse() {
    return {
        vote: Vote.fromPartial({})
    };
}
export const QueryVoteResponse = {
    typeUrl: "/cosmos.gov.v1beta1.QueryVoteResponse",
    aminoType: "cosmos-sdk/QueryVoteResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.vote !== undefined) {
            Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
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
                    message.vote = Vote.decode(reader, reader.uint32());
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
            vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.vote !== undefined && (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVoteResponse();
        message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            vote: object?.vote ? Vote.fromAmino(object.vote) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.vote = message.vote ? Vote.toAmino(message.vote) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVoteResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVoteResponse",
            value: QueryVoteResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryVoteResponse.decode(message.value);
    },
    toProto(message) {
        return QueryVoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryVoteResponse",
            value: QueryVoteResponse.encode(message).finish()
        };
    }
};
function createBaseQueryVotesRequest() {
    return {
        proposalId: Long.UZERO,
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryVotesRequest = {
    typeUrl: "/cosmos.gov.v1beta1.QueryVotesRequest",
    aminoType: "cosmos-sdk/QueryVotesRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
            proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVotesRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            proposalId: Long.fromString(object.proposal_id),
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVotesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVotesRequest",
            value: QueryVotesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryVotesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryVotesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryVotesRequest",
            value: QueryVotesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVotesResponse() {
    return {
        votes: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryVotesResponse = {
    typeUrl: "/cosmos.gov.v1beta1.QueryVotesResponse",
    aminoType: "cosmos-sdk/QueryVotesResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.votes) {
            Vote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.votes.push(Vote.decode(reader, reader.uint32()));
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
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => Vote.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVotesResponse();
        message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => Vote.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVotesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVotesResponse",
            value: QueryVotesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryVotesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryVotesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryVotesResponse",
            value: QueryVotesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {
        paramsType: ""
    };
}
export const QueryParamsRequest = {
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
            paramsType: isSet(object.paramsType) ? String(object.paramsType) : ""
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
            typeUrl: "/cosmos.gov.v1beta1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        votingParams: VotingParams.fromPartial({}),
        depositParams: DepositParams.fromPartial({}),
        tallyParams: TallyParams.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/cosmos.gov.v1beta1.QueryParamsResponse",
    aminoType: "cosmos-sdk/QueryParamsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.votingParams !== undefined) {
            VotingParams.encode(message.votingParams, writer.uint32(10).fork()).ldelim();
        }
        if (message.depositParams !== undefined) {
            DepositParams.encode(message.depositParams, writer.uint32(18).fork()).ldelim();
        }
        if (message.tallyParams !== undefined) {
            TallyParams.encode(message.tallyParams, writer.uint32(26).fork()).ldelim();
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
                    message.votingParams = VotingParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.depositParams = DepositParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tallyParams = TallyParams.decode(reader, reader.uint32());
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
            votingParams: isSet(object.votingParams) ? VotingParams.fromJSON(object.votingParams) : undefined,
            depositParams: isSet(object.depositParams) ? DepositParams.fromJSON(object.depositParams) : undefined,
            tallyParams: isSet(object.tallyParams) ? TallyParams.fromJSON(object.tallyParams) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.votingParams !== undefined && (obj.votingParams = message.votingParams ? VotingParams.toJSON(message.votingParams) : undefined);
        message.depositParams !== undefined && (obj.depositParams = message.depositParams ? DepositParams.toJSON(message.depositParams) : undefined);
        message.tallyParams !== undefined && (obj.tallyParams = message.tallyParams ? TallyParams.toJSON(message.tallyParams) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.votingParams = object.votingParams !== undefined && object.votingParams !== null ? VotingParams.fromPartial(object.votingParams) : undefined;
        message.depositParams = object.depositParams !== undefined && object.depositParams !== null ? DepositParams.fromPartial(object.depositParams) : undefined;
        message.tallyParams = object.tallyParams !== undefined && object.tallyParams !== null ? TallyParams.fromPartial(object.tallyParams) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            votingParams: object?.voting_params ? VotingParams.fromAmino(object.voting_params) : undefined,
            depositParams: object?.deposit_params ? DepositParams.fromAmino(object.deposit_params) : undefined,
            tallyParams: object?.tally_params ? TallyParams.fromAmino(object.tally_params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.voting_params = message.votingParams ? VotingParams.toAmino(message.votingParams) : undefined;
        obj.deposit_params = message.depositParams ? DepositParams.toAmino(message.depositParams) : undefined;
        obj.tally_params = message.tallyParams ? TallyParams.toAmino(message.tallyParams) : undefined;
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
            typeUrl: "/cosmos.gov.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDepositRequest() {
    return {
        proposalId: Long.UZERO,
        depositor: ""
    };
}
export const QueryDepositRequest = {
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
            proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
            depositor: isSet(object.depositor) ? String(object.depositor) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
        message.depositor !== undefined && (obj.depositor = message.depositor);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDepositRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
        message.depositor = object.depositor ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            proposalId: Long.fromString(object.proposal_id),
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
        return QueryDepositRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDepositRequest",
            value: QueryDepositRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDepositRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDepositRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryDepositRequest",
            value: QueryDepositRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDepositResponse() {
    return {
        deposit: Deposit.fromPartial({})
    };
}
export const QueryDepositResponse = {
    typeUrl: "/cosmos.gov.v1beta1.QueryDepositResponse",
    aminoType: "cosmos-sdk/QueryDepositResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.deposit !== undefined) {
            Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
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
                    message.deposit = Deposit.decode(reader, reader.uint32());
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
            deposit: isSet(object.deposit) ? Deposit.fromJSON(object.deposit) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.deposit !== undefined && (obj.deposit = message.deposit ? Deposit.toJSON(message.deposit) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDepositResponse();
        message.deposit = object.deposit !== undefined && object.deposit !== null ? Deposit.fromPartial(object.deposit) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            deposit: object?.deposit ? Deposit.fromAmino(object.deposit) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.deposit = message.deposit ? Deposit.toAmino(message.deposit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDepositResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDepositResponse",
            value: QueryDepositResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDepositResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDepositResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryDepositResponse",
            value: QueryDepositResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDepositsRequest() {
    return {
        proposalId: Long.UZERO,
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryDepositsRequest = {
    typeUrl: "/cosmos.gov.v1beta1.QueryDepositsRequest",
    aminoType: "cosmos-sdk/QueryDepositsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
            proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDepositsRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            proposalId: Long.fromString(object.proposal_id),
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDepositsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDepositsRequest",
            value: QueryDepositsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDepositsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDepositsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryDepositsRequest",
            value: QueryDepositsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDepositsResponse() {
    return {
        deposits: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryDepositsResponse = {
    typeUrl: "/cosmos.gov.v1beta1.QueryDepositsResponse",
    aminoType: "cosmos-sdk/QueryDepositsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.deposits) {
            Deposit.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.deposits.push(Deposit.decode(reader, reader.uint32()));
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
            deposits: Array.isArray(object?.deposits) ? object.deposits.map((e) => Deposit.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? Deposit.toJSON(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDepositsResponse();
        message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            deposits: Array.isArray(object?.deposits) ? object.deposits.map((e) => Deposit.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDepositsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDepositsResponse",
            value: QueryDepositsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDepositsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDepositsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryDepositsResponse",
            value: QueryDepositsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTallyResultRequest() {
    return {
        proposalId: Long.UZERO
    };
}
export const QueryTallyResultRequest = {
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
            proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTallyResultRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            proposalId: Long.fromString(object.proposal_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTallyResultRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTallyResultRequest",
            value: QueryTallyResultRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTallyResultRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTallyResultRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryTallyResultRequest",
            value: QueryTallyResultRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTallyResultResponse() {
    return {
        tally: TallyResult.fromPartial({})
    };
}
export const QueryTallyResultResponse = {
    typeUrl: "/cosmos.gov.v1beta1.QueryTallyResultResponse",
    aminoType: "cosmos-sdk/QueryTallyResultResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.tally !== undefined) {
            TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
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
                    message.tally = TallyResult.decode(reader, reader.uint32());
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
            tally: isSet(object.tally) ? TallyResult.fromJSON(object.tally) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.tally !== undefined && (obj.tally = message.tally ? TallyResult.toJSON(message.tally) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTallyResultResponse();
        message.tally = object.tally !== undefined && object.tally !== null ? TallyResult.fromPartial(object.tally) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            tally: object?.tally ? TallyResult.fromAmino(object.tally) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tally = message.tally ? TallyResult.toAmino(message.tally) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTallyResultResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTallyResultResponse",
            value: QueryTallyResultResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTallyResultResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTallyResultResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.QueryTallyResultResponse",
            value: QueryTallyResultResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map