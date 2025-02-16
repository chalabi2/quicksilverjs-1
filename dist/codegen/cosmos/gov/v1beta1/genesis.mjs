import { Deposit, Vote, Proposal, DepositParams, VotingParams, TallyParams } from "./gov";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
    return {
        startingProposalId: Long.UZERO,
        deposits: [],
        votes: [],
        proposals: [],
        depositParams: DepositParams.fromPartial({}),
        votingParams: VotingParams.fromPartial({}),
        tallyParams: TallyParams.fromPartial({})
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.gov.v1beta1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.startingProposalId.isZero()) {
            writer.uint32(8).uint64(message.startingProposalId);
        }
        for (const v of message.deposits) {
            Deposit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.votes) {
            Vote.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.proposals) {
            Proposal.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.depositParams !== undefined) {
            DepositParams.encode(message.depositParams, writer.uint32(42).fork()).ldelim();
        }
        if (message.votingParams !== undefined) {
            VotingParams.encode(message.votingParams, writer.uint32(50).fork()).ldelim();
        }
        if (message.tallyParams !== undefined) {
            TallyParams.encode(message.tallyParams, writer.uint32(58).fork()).ldelim();
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
                    message.startingProposalId = reader.uint64();
                    break;
                case 2:
                    message.deposits.push(Deposit.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.votes.push(Vote.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.proposals.push(Proposal.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.depositParams = DepositParams.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.votingParams = VotingParams.decode(reader, reader.uint32());
                    break;
                case 7:
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
            startingProposalId: isSet(object.startingProposalId) ? Long.fromValue(object.startingProposalId) : Long.UZERO,
            deposits: Array.isArray(object?.deposits) ? object.deposits.map((e) => Deposit.fromJSON(e)) : [],
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => Vote.fromJSON(e)) : [],
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => Proposal.fromJSON(e)) : [],
            depositParams: isSet(object.depositParams) ? DepositParams.fromJSON(object.depositParams) : undefined,
            votingParams: isSet(object.votingParams) ? VotingParams.fromJSON(object.votingParams) : undefined,
            tallyParams: isSet(object.tallyParams) ? TallyParams.fromJSON(object.tallyParams) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.startingProposalId !== undefined && (obj.startingProposalId = (message.startingProposalId || Long.UZERO).toString());
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? Deposit.toJSON(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? Proposal.toJSON(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        message.depositParams !== undefined && (obj.depositParams = message.depositParams ? DepositParams.toJSON(message.depositParams) : undefined);
        message.votingParams !== undefined && (obj.votingParams = message.votingParams ? VotingParams.toJSON(message.votingParams) : undefined);
        message.tallyParams !== undefined && (obj.tallyParams = message.tallyParams ? TallyParams.toJSON(message.tallyParams) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.startingProposalId = object.startingProposalId !== undefined && object.startingProposalId !== null ? Long.fromValue(object.startingProposalId) : Long.UZERO;
        message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
        message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
        message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
        message.depositParams = object.depositParams !== undefined && object.depositParams !== null ? DepositParams.fromPartial(object.depositParams) : undefined;
        message.votingParams = object.votingParams !== undefined && object.votingParams !== null ? VotingParams.fromPartial(object.votingParams) : undefined;
        message.tallyParams = object.tallyParams !== undefined && object.tallyParams !== null ? TallyParams.fromPartial(object.tallyParams) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            startingProposalId: Long.fromString(object.starting_proposal_id),
            deposits: Array.isArray(object?.deposits) ? object.deposits.map((e) => Deposit.fromAmino(e)) : [],
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => Vote.fromAmino(e)) : [],
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => Proposal.fromAmino(e)) : [],
            depositParams: object?.deposit_params ? DepositParams.fromAmino(object.deposit_params) : undefined,
            votingParams: object?.voting_params ? VotingParams.fromAmino(object.voting_params) : undefined,
            tallyParams: object?.tally_params ? TallyParams.fromAmino(object.tally_params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.starting_proposal_id = message.startingProposalId ? message.startingProposalId.toString() : undefined;
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        obj.deposit_params = message.depositParams ? DepositParams.toAmino(message.depositParams) : undefined;
        obj.voting_params = message.votingParams ? VotingParams.toAmino(message.votingParams) : undefined;
        obj.tally_params = message.tallyParams ? TallyParams.toAmino(message.tallyParams) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map