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
exports.TxProof = exports.BlockMeta = exports.LightBlock = exports.SignedHeader = exports.Proposal = exports.CommitSig = exports.Commit = exports.Vote = exports.Data = exports.Header = exports.BlockID = exports.Part = exports.PartSetHeader = exports.signedMsgTypeToJSON = exports.signedMsgTypeFromJSON = exports.SignedMsgTypeAmino = exports.SignedMsgTypeSDKType = exports.SignedMsgType = exports.blockIDFlagToJSON = exports.blockIDFlagFromJSON = exports.BlockIDFlagAmino = exports.BlockIDFlagSDKType = exports.BlockIDFlag = void 0;
const proof_1 = require("../crypto/proof");
const types_1 = require("../version/types");
const timestamp_1 = require("../../google/protobuf/timestamp");
const validator_1 = require("./validator");
const helpers_1 = require("../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
/** BlockIdFlag indicates which BlcokID the signature is for */
var BlockIDFlag;
(function (BlockIDFlag) {
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_UNKNOWN"] = 0] = "BLOCK_ID_FLAG_UNKNOWN";
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_ABSENT"] = 1] = "BLOCK_ID_FLAG_ABSENT";
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_COMMIT"] = 2] = "BLOCK_ID_FLAG_COMMIT";
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_NIL"] = 3] = "BLOCK_ID_FLAG_NIL";
    BlockIDFlag[BlockIDFlag["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BlockIDFlag || (exports.BlockIDFlag = BlockIDFlag = {}));
exports.BlockIDFlagSDKType = BlockIDFlag;
exports.BlockIDFlagAmino = BlockIDFlag;
function blockIDFlagFromJSON(object) {
    switch (object) {
        case 0:
        case "BLOCK_ID_FLAG_UNKNOWN":
            return BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN;
        case 1:
        case "BLOCK_ID_FLAG_ABSENT":
            return BlockIDFlag.BLOCK_ID_FLAG_ABSENT;
        case 2:
        case "BLOCK_ID_FLAG_COMMIT":
            return BlockIDFlag.BLOCK_ID_FLAG_COMMIT;
        case 3:
        case "BLOCK_ID_FLAG_NIL":
            return BlockIDFlag.BLOCK_ID_FLAG_NIL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BlockIDFlag.UNRECOGNIZED;
    }
}
exports.blockIDFlagFromJSON = blockIDFlagFromJSON;
function blockIDFlagToJSON(object) {
    switch (object) {
        case BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN:
            return "BLOCK_ID_FLAG_UNKNOWN";
        case BlockIDFlag.BLOCK_ID_FLAG_ABSENT:
            return "BLOCK_ID_FLAG_ABSENT";
        case BlockIDFlag.BLOCK_ID_FLAG_COMMIT:
            return "BLOCK_ID_FLAG_COMMIT";
        case BlockIDFlag.BLOCK_ID_FLAG_NIL:
            return "BLOCK_ID_FLAG_NIL";
        case BlockIDFlag.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.blockIDFlagToJSON = blockIDFlagToJSON;
/** SignedMsgType is a type of signed message in the consensus. */
var SignedMsgType;
(function (SignedMsgType) {
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_UNKNOWN"] = 0] = "SIGNED_MSG_TYPE_UNKNOWN";
    /** SIGNED_MSG_TYPE_PREVOTE - Votes */
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PREVOTE"] = 1] = "SIGNED_MSG_TYPE_PREVOTE";
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PRECOMMIT"] = 2] = "SIGNED_MSG_TYPE_PRECOMMIT";
    /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PROPOSAL"] = 32] = "SIGNED_MSG_TYPE_PROPOSAL";
    SignedMsgType[SignedMsgType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SignedMsgType || (exports.SignedMsgType = SignedMsgType = {}));
exports.SignedMsgTypeSDKType = SignedMsgType;
exports.SignedMsgTypeAmino = SignedMsgType;
function signedMsgTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SIGNED_MSG_TYPE_UNKNOWN":
            return SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN;
        case 1:
        case "SIGNED_MSG_TYPE_PREVOTE":
            return SignedMsgType.SIGNED_MSG_TYPE_PREVOTE;
        case 2:
        case "SIGNED_MSG_TYPE_PRECOMMIT":
            return SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT;
        case 32:
        case "SIGNED_MSG_TYPE_PROPOSAL":
            return SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SignedMsgType.UNRECOGNIZED;
    }
}
exports.signedMsgTypeFromJSON = signedMsgTypeFromJSON;
function signedMsgTypeToJSON(object) {
    switch (object) {
        case SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN:
            return "SIGNED_MSG_TYPE_UNKNOWN";
        case SignedMsgType.SIGNED_MSG_TYPE_PREVOTE:
            return "SIGNED_MSG_TYPE_PREVOTE";
        case SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT:
            return "SIGNED_MSG_TYPE_PRECOMMIT";
        case SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL:
            return "SIGNED_MSG_TYPE_PROPOSAL";
        case SignedMsgType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.signedMsgTypeToJSON = signedMsgTypeToJSON;
function createBasePartSetHeader() {
    return {
        total: 0,
        hash: new Uint8Array()
    };
}
exports.PartSetHeader = {
    typeUrl: "/tendermint.types.PartSetHeader",
    encode(message, writer = _m0.Writer.create()) {
        if (message.total !== 0) {
            writer.uint32(8).uint32(message.total);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePartSetHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total = reader.uint32();
                    break;
                case 2:
                    message.hash = reader.bytes();
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
            total: (0, helpers_1.isSet)(object.total) ? Number(object.total) : 0,
            hash: (0, helpers_1.isSet)(object.hash) ? (0, helpers_1.bytesFromBase64)(object.hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.total !== undefined && (obj.total = Math.round(message.total));
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePartSetHeader();
        message.total = object.total ?? 0;
        message.hash = object.hash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            total: object.total,
            hash: object.hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.total = message.total;
        obj.hash = message.hash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PartSetHeader.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PartSetHeader.decode(message.value);
    },
    toProto(message) {
        return exports.PartSetHeader.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.PartSetHeader",
            value: exports.PartSetHeader.encode(message).finish()
        };
    }
};
function createBasePart() {
    return {
        index: 0,
        bytes: new Uint8Array(),
        proof: proof_1.Proof.fromPartial({})
    };
}
exports.Part = {
    typeUrl: "/tendermint.types.Part",
    encode(message, writer = _m0.Writer.create()) {
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        if (message.bytes.length !== 0) {
            writer.uint32(18).bytes(message.bytes);
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePart();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                case 2:
                    message.bytes = reader.bytes();
                    break;
                case 3:
                    message.proof = proof_1.Proof.decode(reader, reader.uint32());
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
            index: (0, helpers_1.isSet)(object.index) ? Number(object.index) : 0,
            bytes: (0, helpers_1.isSet)(object.bytes) ? (0, helpers_1.bytesFromBase64)(object.bytes) : new Uint8Array(),
            proof: (0, helpers_1.isSet)(object.proof) ? proof_1.Proof.fromJSON(object.proof) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.bytes !== undefined && (obj.bytes = (0, helpers_1.base64FromBytes)(message.bytes !== undefined ? message.bytes : new Uint8Array()));
        message.proof !== undefined && (obj.proof = message.proof ? proof_1.Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePart();
        message.index = object.index ?? 0;
        message.bytes = object.bytes ?? new Uint8Array();
        message.proof = object.proof !== undefined && object.proof !== null ? proof_1.Proof.fromPartial(object.proof) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            index: object.index,
            bytes: object.bytes,
            proof: object?.proof ? proof_1.Proof.fromAmino(object.proof) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index;
        obj.bytes = message.bytes;
        obj.proof = message.proof ? proof_1.Proof.toAmino(message.proof) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Part.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Part.decode(message.value);
    },
    toProto(message) {
        return exports.Part.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Part",
            value: exports.Part.encode(message).finish()
        };
    }
};
function createBaseBlockID() {
    return {
        hash: new Uint8Array(),
        partSetHeader: exports.PartSetHeader.fromPartial({})
    };
}
exports.BlockID = {
    typeUrl: "/tendermint.types.BlockID",
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.partSetHeader !== undefined) {
            exports.PartSetHeader.encode(message.partSetHeader, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.partSetHeader = exports.PartSetHeader.decode(reader, reader.uint32());
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
            hash: (0, helpers_1.isSet)(object.hash) ? (0, helpers_1.bytesFromBase64)(object.hash) : new Uint8Array(),
            partSetHeader: (0, helpers_1.isSet)(object.partSetHeader) ? exports.PartSetHeader.fromJSON(object.partSetHeader) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.partSetHeader !== undefined && (obj.partSetHeader = message.partSetHeader ? exports.PartSetHeader.toJSON(message.partSetHeader) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlockID();
        message.hash = object.hash ?? new Uint8Array();
        message.partSetHeader = object.partSetHeader !== undefined && object.partSetHeader !== null ? exports.PartSetHeader.fromPartial(object.partSetHeader) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            hash: object.hash,
            partSetHeader: object?.part_set_header ? exports.PartSetHeader.fromAmino(object.part_set_header) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash;
        obj.part_set_header = message.partSetHeader ? exports.PartSetHeader.toAmino(message.partSetHeader) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BlockID.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BlockID.decode(message.value);
    },
    toProto(message) {
        return exports.BlockID.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.BlockID",
            value: exports.BlockID.encode(message).finish()
        };
    }
};
function createBaseHeader() {
    return {
        version: types_1.Consensus.fromPartial({}),
        chainId: "",
        height: helpers_1.Long.ZERO,
        time: new Date(),
        lastBlockId: exports.BlockID.fromPartial({}),
        lastCommitHash: new Uint8Array(),
        dataHash: new Uint8Array(),
        validatorsHash: new Uint8Array(),
        nextValidatorsHash: new Uint8Array(),
        consensusHash: new Uint8Array(),
        appHash: new Uint8Array(),
        lastResultsHash: new Uint8Array(),
        evidenceHash: new Uint8Array(),
        proposerAddress: new Uint8Array()
    };
}
exports.Header = {
    typeUrl: "/tendermint.types.Header",
    encode(message, writer = _m0.Writer.create()) {
        if (message.version !== undefined) {
            types_1.Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        if (!message.height.isZero()) {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(34).fork()).ldelim();
        }
        if (message.lastBlockId !== undefined) {
            exports.BlockID.encode(message.lastBlockId, writer.uint32(42).fork()).ldelim();
        }
        if (message.lastCommitHash.length !== 0) {
            writer.uint32(50).bytes(message.lastCommitHash);
        }
        if (message.dataHash.length !== 0) {
            writer.uint32(58).bytes(message.dataHash);
        }
        if (message.validatorsHash.length !== 0) {
            writer.uint32(66).bytes(message.validatorsHash);
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(74).bytes(message.nextValidatorsHash);
        }
        if (message.consensusHash.length !== 0) {
            writer.uint32(82).bytes(message.consensusHash);
        }
        if (message.appHash.length !== 0) {
            writer.uint32(90).bytes(message.appHash);
        }
        if (message.lastResultsHash.length !== 0) {
            writer.uint32(98).bytes(message.lastResultsHash);
        }
        if (message.evidenceHash.length !== 0) {
            writer.uint32(106).bytes(message.evidenceHash);
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(114).bytes(message.proposerAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = types_1.Consensus.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chainId = reader.string();
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.lastBlockId = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.lastCommitHash = reader.bytes();
                    break;
                case 7:
                    message.dataHash = reader.bytes();
                    break;
                case 8:
                    message.validatorsHash = reader.bytes();
                    break;
                case 9:
                    message.nextValidatorsHash = reader.bytes();
                    break;
                case 10:
                    message.consensusHash = reader.bytes();
                    break;
                case 11:
                    message.appHash = reader.bytes();
                    break;
                case 12:
                    message.lastResultsHash = reader.bytes();
                    break;
                case 13:
                    message.evidenceHash = reader.bytes();
                    break;
                case 14:
                    message.proposerAddress = reader.bytes();
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
            version: (0, helpers_1.isSet)(object.version) ? types_1.Consensus.fromJSON(object.version) : undefined,
            chainId: (0, helpers_1.isSet)(object.chainId) ? String(object.chainId) : "",
            height: (0, helpers_1.isSet)(object.height) ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO,
            time: (0, helpers_1.isSet)(object.time) ? (0, helpers_1.fromJsonTimestamp)(object.time) : undefined,
            lastBlockId: (0, helpers_1.isSet)(object.lastBlockId) ? exports.BlockID.fromJSON(object.lastBlockId) : undefined,
            lastCommitHash: (0, helpers_1.isSet)(object.lastCommitHash) ? (0, helpers_1.bytesFromBase64)(object.lastCommitHash) : new Uint8Array(),
            dataHash: (0, helpers_1.isSet)(object.dataHash) ? (0, helpers_1.bytesFromBase64)(object.dataHash) : new Uint8Array(),
            validatorsHash: (0, helpers_1.isSet)(object.validatorsHash) ? (0, helpers_1.bytesFromBase64)(object.validatorsHash) : new Uint8Array(),
            nextValidatorsHash: (0, helpers_1.isSet)(object.nextValidatorsHash) ? (0, helpers_1.bytesFromBase64)(object.nextValidatorsHash) : new Uint8Array(),
            consensusHash: (0, helpers_1.isSet)(object.consensusHash) ? (0, helpers_1.bytesFromBase64)(object.consensusHash) : new Uint8Array(),
            appHash: (0, helpers_1.isSet)(object.appHash) ? (0, helpers_1.bytesFromBase64)(object.appHash) : new Uint8Array(),
            lastResultsHash: (0, helpers_1.isSet)(object.lastResultsHash) ? (0, helpers_1.bytesFromBase64)(object.lastResultsHash) : new Uint8Array(),
            evidenceHash: (0, helpers_1.isSet)(object.evidenceHash) ? (0, helpers_1.bytesFromBase64)(object.evidenceHash) : new Uint8Array(),
            proposerAddress: (0, helpers_1.isSet)(object.proposerAddress) ? (0, helpers_1.bytesFromBase64)(object.proposerAddress) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version ? types_1.Consensus.toJSON(message.version) : undefined);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.height !== undefined && (obj.height = (message.height || helpers_1.Long.ZERO).toString());
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.lastBlockId !== undefined && (obj.lastBlockId = message.lastBlockId ? exports.BlockID.toJSON(message.lastBlockId) : undefined);
        message.lastCommitHash !== undefined && (obj.lastCommitHash = (0, helpers_1.base64FromBytes)(message.lastCommitHash !== undefined ? message.lastCommitHash : new Uint8Array()));
        message.dataHash !== undefined && (obj.dataHash = (0, helpers_1.base64FromBytes)(message.dataHash !== undefined ? message.dataHash : new Uint8Array()));
        message.validatorsHash !== undefined && (obj.validatorsHash = (0, helpers_1.base64FromBytes)(message.validatorsHash !== undefined ? message.validatorsHash : new Uint8Array()));
        message.nextValidatorsHash !== undefined && (obj.nextValidatorsHash = (0, helpers_1.base64FromBytes)(message.nextValidatorsHash !== undefined ? message.nextValidatorsHash : new Uint8Array()));
        message.consensusHash !== undefined && (obj.consensusHash = (0, helpers_1.base64FromBytes)(message.consensusHash !== undefined ? message.consensusHash : new Uint8Array()));
        message.appHash !== undefined && (obj.appHash = (0, helpers_1.base64FromBytes)(message.appHash !== undefined ? message.appHash : new Uint8Array()));
        message.lastResultsHash !== undefined && (obj.lastResultsHash = (0, helpers_1.base64FromBytes)(message.lastResultsHash !== undefined ? message.lastResultsHash : new Uint8Array()));
        message.evidenceHash !== undefined && (obj.evidenceHash = (0, helpers_1.base64FromBytes)(message.evidenceHash !== undefined ? message.evidenceHash : new Uint8Array()));
        message.proposerAddress !== undefined && (obj.proposerAddress = (0, helpers_1.base64FromBytes)(message.proposerAddress !== undefined ? message.proposerAddress : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.version = object.version !== undefined && object.version !== null ? types_1.Consensus.fromPartial(object.version) : undefined;
        message.chainId = object.chainId ?? "";
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        message.time = object.time ?? undefined;
        message.lastBlockId = object.lastBlockId !== undefined && object.lastBlockId !== null ? exports.BlockID.fromPartial(object.lastBlockId) : undefined;
        message.lastCommitHash = object.lastCommitHash ?? new Uint8Array();
        message.dataHash = object.dataHash ?? new Uint8Array();
        message.validatorsHash = object.validatorsHash ?? new Uint8Array();
        message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
        message.consensusHash = object.consensusHash ?? new Uint8Array();
        message.appHash = object.appHash ?? new Uint8Array();
        message.lastResultsHash = object.lastResultsHash ?? new Uint8Array();
        message.evidenceHash = object.evidenceHash ?? new Uint8Array();
        message.proposerAddress = object.proposerAddress ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            version: object?.version ? types_1.Consensus.fromAmino(object.version) : undefined,
            chainId: object.chain_id,
            height: helpers_1.Long.fromString(object.height),
            time: object.time,
            lastBlockId: object?.last_block_id ? exports.BlockID.fromAmino(object.last_block_id) : undefined,
            lastCommitHash: object.last_commit_hash,
            dataHash: object.data_hash,
            validatorsHash: object.validators_hash,
            nextValidatorsHash: object.next_validators_hash,
            consensusHash: object.consensus_hash,
            appHash: object.app_hash,
            lastResultsHash: object.last_results_hash,
            evidenceHash: object.evidence_hash,
            proposerAddress: object.proposer_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version ? types_1.Consensus.toAmino(message.version) : undefined;
        obj.chain_id = message.chainId;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time;
        obj.last_block_id = message.lastBlockId ? exports.BlockID.toAmino(message.lastBlockId) : undefined;
        obj.last_commit_hash = message.lastCommitHash;
        obj.data_hash = message.dataHash;
        obj.validators_hash = message.validatorsHash;
        obj.next_validators_hash = message.nextValidatorsHash;
        obj.consensus_hash = message.consensusHash;
        obj.app_hash = message.appHash;
        obj.last_results_hash = message.lastResultsHash;
        obj.evidence_hash = message.evidenceHash;
        obj.proposer_address = message.proposerAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Header.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Header.decode(message.value);
    },
    toProto(message) {
        return exports.Header.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Header",
            value: exports.Header.encode(message).finish()
        };
    }
};
function createBaseData() {
    return {
        txs: []
    };
}
exports.Data = {
    typeUrl: "/tendermint.types.Data",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.txs) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(reader.bytes());
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
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => (0, helpers_1.bytesFromBase64)(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => (0, helpers_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseData();
        message.txs = object.txs?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e);
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Data.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Data.decode(message.value);
    },
    toProto(message) {
        return exports.Data.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Data",
            value: exports.Data.encode(message).finish()
        };
    }
};
function createBaseVote() {
    return {
        type: 0,
        height: helpers_1.Long.ZERO,
        round: 0,
        blockId: exports.BlockID.fromPartial({}),
        timestamp: new Date(),
        validatorAddress: new Uint8Array(),
        validatorIndex: 0,
        signature: new Uint8Array()
    };
}
exports.Vote = {
    typeUrl: "/tendermint.types.Vote",
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (!message.height.isZero()) {
            writer.uint32(16).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(24).int32(message.round);
        }
        if (message.blockId !== undefined) {
            exports.BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        if (message.validatorAddress.length !== 0) {
            writer.uint32(50).bytes(message.validatorAddress);
        }
        if (message.validatorIndex !== 0) {
            writer.uint32(56).int32(message.validatorIndex);
        }
        if (message.signature.length !== 0) {
            writer.uint32(66).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.height = reader.int64();
                    break;
                case 3:
                    message.round = reader.int32();
                    break;
                case 4:
                    message.blockId = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.validatorAddress = reader.bytes();
                    break;
                case 7:
                    message.validatorIndex = reader.int32();
                    break;
                case 8:
                    message.signature = reader.bytes();
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
            type: (0, helpers_1.isSet)(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
            height: (0, helpers_1.isSet)(object.height) ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO,
            round: (0, helpers_1.isSet)(object.round) ? Number(object.round) : 0,
            blockId: (0, helpers_1.isSet)(object.blockId) ? exports.BlockID.fromJSON(object.blockId) : undefined,
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? (0, helpers_1.fromJsonTimestamp)(object.timestamp) : undefined,
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress) ? (0, helpers_1.bytesFromBase64)(object.validatorAddress) : new Uint8Array(),
            validatorIndex: (0, helpers_1.isSet)(object.validatorIndex) ? Number(object.validatorIndex) : 0,
            signature: (0, helpers_1.isSet)(object.signature) ? (0, helpers_1.bytesFromBase64)(object.signature) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
        message.height !== undefined && (obj.height = (message.height || helpers_1.Long.ZERO).toString());
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.blockId !== undefined && (obj.blockId = message.blockId ? exports.BlockID.toJSON(message.blockId) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.validatorAddress !== undefined && (obj.validatorAddress = (0, helpers_1.base64FromBytes)(message.validatorAddress !== undefined ? message.validatorAddress : new Uint8Array()));
        message.validatorIndex !== undefined && (obj.validatorIndex = Math.round(message.validatorIndex));
        message.signature !== undefined && (obj.signature = (0, helpers_1.base64FromBytes)(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVote();
        message.type = object.type ?? 0;
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        message.round = object.round ?? 0;
        message.blockId = object.blockId !== undefined && object.blockId !== null ? exports.BlockID.fromPartial(object.blockId) : undefined;
        message.timestamp = object.timestamp ?? undefined;
        message.validatorAddress = object.validatorAddress ?? new Uint8Array();
        message.validatorIndex = object.validatorIndex ?? 0;
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            type: (0, helpers_1.isSet)(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
            height: helpers_1.Long.fromString(object.height),
            round: object.round,
            blockId: object?.block_id ? exports.BlockID.fromAmino(object.block_id) : undefined,
            timestamp: object.timestamp,
            validatorAddress: object.validator_address,
            validatorIndex: object.validator_index,
            signature: object.signature
        };
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.round = message.round;
        obj.block_id = message.blockId ? exports.BlockID.toAmino(message.blockId) : undefined;
        obj.timestamp = message.timestamp;
        obj.validator_address = message.validatorAddress;
        obj.validator_index = message.validatorIndex;
        obj.signature = message.signature;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Vote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Vote.decode(message.value);
    },
    toProto(message) {
        return exports.Vote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Vote",
            value: exports.Vote.encode(message).finish()
        };
    }
};
function createBaseCommit() {
    return {
        height: helpers_1.Long.ZERO,
        round: 0,
        blockId: exports.BlockID.fromPartial({}),
        signatures: []
    };
}
exports.Commit = {
    typeUrl: "/tendermint.types.Commit",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.blockId !== undefined) {
            exports.BlockID.encode(message.blockId, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.signatures) {
            exports.CommitSig.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.round = reader.int32();
                    break;
                case 3:
                    message.blockId = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signatures.push(exports.CommitSig.decode(reader, reader.uint32()));
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
            height: (0, helpers_1.isSet)(object.height) ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO,
            round: (0, helpers_1.isSet)(object.round) ? Number(object.round) : 0,
            blockId: (0, helpers_1.isSet)(object.blockId) ? exports.BlockID.fromJSON(object.blockId) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => exports.CommitSig.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || helpers_1.Long.ZERO).toString());
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.blockId !== undefined && (obj.blockId = message.blockId ? exports.BlockID.toJSON(message.blockId) : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e ? exports.CommitSig.toJSON(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommit();
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        message.round = object.round ?? 0;
        message.blockId = object.blockId !== undefined && object.blockId !== null ? exports.BlockID.fromPartial(object.blockId) : undefined;
        message.signatures = object.signatures?.map(e => exports.CommitSig.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            height: helpers_1.Long.fromString(object.height),
            round: object.round,
            blockId: object?.block_id ? exports.BlockID.fromAmino(object.block_id) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => exports.CommitSig.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.round = message.round;
        obj.block_id = message.blockId ? exports.BlockID.toAmino(message.blockId) : undefined;
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e ? exports.CommitSig.toAmino(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Commit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Commit.decode(message.value);
    },
    toProto(message) {
        return exports.Commit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Commit",
            value: exports.Commit.encode(message).finish()
        };
    }
};
function createBaseCommitSig() {
    return {
        blockIdFlag: 0,
        validatorAddress: new Uint8Array(),
        timestamp: new Date(),
        signature: new Uint8Array()
    };
}
exports.CommitSig = {
    typeUrl: "/tendermint.types.CommitSig",
    encode(message, writer = _m0.Writer.create()) {
        if (message.blockIdFlag !== 0) {
            writer.uint32(8).int32(message.blockIdFlag);
        }
        if (message.validatorAddress.length !== 0) {
            writer.uint32(18).bytes(message.validatorAddress);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(34).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitSig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockIdFlag = reader.int32();
                    break;
                case 2:
                    message.validatorAddress = reader.bytes();
                    break;
                case 3:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.signature = reader.bytes();
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
            blockIdFlag: (0, helpers_1.isSet)(object.blockIdFlag) ? blockIDFlagFromJSON(object.blockIdFlag) : -1,
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress) ? (0, helpers_1.bytesFromBase64)(object.validatorAddress) : new Uint8Array(),
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? (0, helpers_1.fromJsonTimestamp)(object.timestamp) : undefined,
            signature: (0, helpers_1.isSet)(object.signature) ? (0, helpers_1.bytesFromBase64)(object.signature) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.blockIdFlag !== undefined && (obj.blockIdFlag = blockIDFlagToJSON(message.blockIdFlag));
        message.validatorAddress !== undefined && (obj.validatorAddress = (0, helpers_1.base64FromBytes)(message.validatorAddress !== undefined ? message.validatorAddress : new Uint8Array()));
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.signature !== undefined && (obj.signature = (0, helpers_1.base64FromBytes)(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommitSig();
        message.blockIdFlag = object.blockIdFlag ?? 0;
        message.validatorAddress = object.validatorAddress ?? new Uint8Array();
        message.timestamp = object.timestamp ?? undefined;
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            blockIdFlag: (0, helpers_1.isSet)(object.block_id_flag) ? blockIDFlagFromJSON(object.block_id_flag) : -1,
            validatorAddress: object.validator_address,
            timestamp: object.timestamp,
            signature: object.signature
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block_id_flag = message.blockIdFlag;
        obj.validator_address = message.validatorAddress;
        obj.timestamp = message.timestamp;
        obj.signature = message.signature;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommitSig.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CommitSig.decode(message.value);
    },
    toProto(message) {
        return exports.CommitSig.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.CommitSig",
            value: exports.CommitSig.encode(message).finish()
        };
    }
};
function createBaseProposal() {
    return {
        type: 0,
        height: helpers_1.Long.ZERO,
        round: 0,
        polRound: 0,
        blockId: exports.BlockID.fromPartial({}),
        timestamp: new Date(),
        signature: new Uint8Array()
    };
}
exports.Proposal = {
    typeUrl: "/tendermint.types.Proposal",
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (!message.height.isZero()) {
            writer.uint32(16).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(24).int32(message.round);
        }
        if (message.polRound !== 0) {
            writer.uint32(32).int32(message.polRound);
        }
        if (message.blockId !== undefined) {
            exports.BlockID.encode(message.blockId, writer.uint32(42).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(50).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(58).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.height = reader.int64();
                    break;
                case 3:
                    message.round = reader.int32();
                    break;
                case 4:
                    message.polRound = reader.int32();
                    break;
                case 5:
                    message.blockId = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.signature = reader.bytes();
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
            type: (0, helpers_1.isSet)(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
            height: (0, helpers_1.isSet)(object.height) ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO,
            round: (0, helpers_1.isSet)(object.round) ? Number(object.round) : 0,
            polRound: (0, helpers_1.isSet)(object.polRound) ? Number(object.polRound) : 0,
            blockId: (0, helpers_1.isSet)(object.blockId) ? exports.BlockID.fromJSON(object.blockId) : undefined,
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? (0, helpers_1.fromJsonTimestamp)(object.timestamp) : undefined,
            signature: (0, helpers_1.isSet)(object.signature) ? (0, helpers_1.bytesFromBase64)(object.signature) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
        message.height !== undefined && (obj.height = (message.height || helpers_1.Long.ZERO).toString());
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.polRound !== undefined && (obj.polRound = Math.round(message.polRound));
        message.blockId !== undefined && (obj.blockId = message.blockId ? exports.BlockID.toJSON(message.blockId) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.signature !== undefined && (obj.signature = (0, helpers_1.base64FromBytes)(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProposal();
        message.type = object.type ?? 0;
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        message.round = object.round ?? 0;
        message.polRound = object.polRound ?? 0;
        message.blockId = object.blockId !== undefined && object.blockId !== null ? exports.BlockID.fromPartial(object.blockId) : undefined;
        message.timestamp = object.timestamp ?? undefined;
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            type: (0, helpers_1.isSet)(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
            height: helpers_1.Long.fromString(object.height),
            round: object.round,
            polRound: object.pol_round,
            blockId: object?.block_id ? exports.BlockID.fromAmino(object.block_id) : undefined,
            timestamp: object.timestamp,
            signature: object.signature
        };
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.round = message.round;
        obj.pol_round = message.polRound;
        obj.block_id = message.blockId ? exports.BlockID.toAmino(message.blockId) : undefined;
        obj.timestamp = message.timestamp;
        obj.signature = message.signature;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Proposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Proposal.decode(message.value);
    },
    toProto(message) {
        return exports.Proposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Proposal",
            value: exports.Proposal.encode(message).finish()
        };
    }
};
function createBaseSignedHeader() {
    return {
        header: exports.Header.fromPartial({}),
        commit: exports.Commit.fromPartial({})
    };
}
exports.SignedHeader = {
    typeUrl: "/tendermint.types.SignedHeader",
    encode(message, writer = _m0.Writer.create()) {
        if (message.header !== undefined) {
            exports.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.Commit.encode(message.commit, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignedHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = exports.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commit = exports.Commit.decode(reader, reader.uint32());
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
            header: (0, helpers_1.isSet)(object.header) ? exports.Header.fromJSON(object.header) : undefined,
            commit: (0, helpers_1.isSet)(object.commit) ? exports.Commit.fromJSON(object.commit) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined && (obj.header = message.header ? exports.Header.toJSON(message.header) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? exports.Commit.toJSON(message.commit) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignedHeader();
        message.header = object.header !== undefined && object.header !== null ? exports.Header.fromPartial(object.header) : undefined;
        message.commit = object.commit !== undefined && object.commit !== null ? exports.Commit.fromPartial(object.commit) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            header: object?.header ? exports.Header.fromAmino(object.header) : undefined,
            commit: object?.commit ? exports.Commit.fromAmino(object.commit) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.header = message.header ? exports.Header.toAmino(message.header) : undefined;
        obj.commit = message.commit ? exports.Commit.toAmino(message.commit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SignedHeader.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.SignedHeader.decode(message.value);
    },
    toProto(message) {
        return exports.SignedHeader.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.SignedHeader",
            value: exports.SignedHeader.encode(message).finish()
        };
    }
};
function createBaseLightBlock() {
    return {
        signedHeader: exports.SignedHeader.fromPartial({}),
        validatorSet: validator_1.ValidatorSet.fromPartial({})
    };
}
exports.LightBlock = {
    typeUrl: "/tendermint.types.LightBlock",
    encode(message, writer = _m0.Writer.create()) {
        if (message.signedHeader !== undefined) {
            exports.SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
        }
        if (message.validatorSet !== undefined) {
            validator_1.ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLightBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signedHeader = exports.SignedHeader.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validatorSet = validator_1.ValidatorSet.decode(reader, reader.uint32());
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
            signedHeader: (0, helpers_1.isSet)(object.signedHeader) ? exports.SignedHeader.fromJSON(object.signedHeader) : undefined,
            validatorSet: (0, helpers_1.isSet)(object.validatorSet) ? validator_1.ValidatorSet.fromJSON(object.validatorSet) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.signedHeader !== undefined && (obj.signedHeader = message.signedHeader ? exports.SignedHeader.toJSON(message.signedHeader) : undefined);
        message.validatorSet !== undefined && (obj.validatorSet = message.validatorSet ? validator_1.ValidatorSet.toJSON(message.validatorSet) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLightBlock();
        message.signedHeader = object.signedHeader !== undefined && object.signedHeader !== null ? exports.SignedHeader.fromPartial(object.signedHeader) : undefined;
        message.validatorSet = object.validatorSet !== undefined && object.validatorSet !== null ? validator_1.ValidatorSet.fromPartial(object.validatorSet) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            signedHeader: object?.signed_header ? exports.SignedHeader.fromAmino(object.signed_header) : undefined,
            validatorSet: object?.validator_set ? validator_1.ValidatorSet.fromAmino(object.validator_set) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.signed_header = message.signedHeader ? exports.SignedHeader.toAmino(message.signedHeader) : undefined;
        obj.validator_set = message.validatorSet ? validator_1.ValidatorSet.toAmino(message.validatorSet) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LightBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.LightBlock.decode(message.value);
    },
    toProto(message) {
        return exports.LightBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.LightBlock",
            value: exports.LightBlock.encode(message).finish()
        };
    }
};
function createBaseBlockMeta() {
    return {
        blockId: exports.BlockID.fromPartial({}),
        blockSize: helpers_1.Long.ZERO,
        header: exports.Header.fromPartial({}),
        numTxs: helpers_1.Long.ZERO
    };
}
exports.BlockMeta = {
    typeUrl: "/tendermint.types.BlockMeta",
    encode(message, writer = _m0.Writer.create()) {
        if (message.blockId !== undefined) {
            exports.BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
        }
        if (!message.blockSize.isZero()) {
            writer.uint32(16).int64(message.blockSize);
        }
        if (message.header !== undefined) {
            exports.Header.encode(message.header, writer.uint32(26).fork()).ldelim();
        }
        if (!message.numTxs.isZero()) {
            writer.uint32(32).int64(message.numTxs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockId = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.blockSize = reader.int64();
                    break;
                case 3:
                    message.header = exports.Header.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.numTxs = reader.int64();
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
            blockId: (0, helpers_1.isSet)(object.blockId) ? exports.BlockID.fromJSON(object.blockId) : undefined,
            blockSize: (0, helpers_1.isSet)(object.blockSize) ? helpers_1.Long.fromValue(object.blockSize) : helpers_1.Long.ZERO,
            header: (0, helpers_1.isSet)(object.header) ? exports.Header.fromJSON(object.header) : undefined,
            numTxs: (0, helpers_1.isSet)(object.numTxs) ? helpers_1.Long.fromValue(object.numTxs) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.blockId !== undefined && (obj.blockId = message.blockId ? exports.BlockID.toJSON(message.blockId) : undefined);
        message.blockSize !== undefined && (obj.blockSize = (message.blockSize || helpers_1.Long.ZERO).toString());
        message.header !== undefined && (obj.header = message.header ? exports.Header.toJSON(message.header) : undefined);
        message.numTxs !== undefined && (obj.numTxs = (message.numTxs || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlockMeta();
        message.blockId = object.blockId !== undefined && object.blockId !== null ? exports.BlockID.fromPartial(object.blockId) : undefined;
        message.blockSize = object.blockSize !== undefined && object.blockSize !== null ? helpers_1.Long.fromValue(object.blockSize) : helpers_1.Long.ZERO;
        message.header = object.header !== undefined && object.header !== null ? exports.Header.fromPartial(object.header) : undefined;
        message.numTxs = object.numTxs !== undefined && object.numTxs !== null ? helpers_1.Long.fromValue(object.numTxs) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            blockId: object?.block_id ? exports.BlockID.fromAmino(object.block_id) : undefined,
            blockSize: helpers_1.Long.fromString(object.block_size),
            header: object?.header ? exports.Header.fromAmino(object.header) : undefined,
            numTxs: helpers_1.Long.fromString(object.num_txs)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block_id = message.blockId ? exports.BlockID.toAmino(message.blockId) : undefined;
        obj.block_size = message.blockSize ? message.blockSize.toString() : undefined;
        obj.header = message.header ? exports.Header.toAmino(message.header) : undefined;
        obj.num_txs = message.numTxs ? message.numTxs.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BlockMeta.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BlockMeta.decode(message.value);
    },
    toProto(message) {
        return exports.BlockMeta.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.BlockMeta",
            value: exports.BlockMeta.encode(message).finish()
        };
    }
};
function createBaseTxProof() {
    return {
        rootHash: new Uint8Array(),
        data: new Uint8Array(),
        proof: proof_1.Proof.fromPartial({})
    };
}
exports.TxProof = {
    typeUrl: "/tendermint.types.TxProof",
    encode(message, writer = _m0.Writer.create()) {
        if (message.rootHash.length !== 0) {
            writer.uint32(10).bytes(message.rootHash);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rootHash = reader.bytes();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.proof = proof_1.Proof.decode(reader, reader.uint32());
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
            rootHash: (0, helpers_1.isSet)(object.rootHash) ? (0, helpers_1.bytesFromBase64)(object.rootHash) : new Uint8Array(),
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            proof: (0, helpers_1.isSet)(object.proof) ? proof_1.Proof.fromJSON(object.proof) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.rootHash !== undefined && (obj.rootHash = (0, helpers_1.base64FromBytes)(message.rootHash !== undefined ? message.rootHash : new Uint8Array()));
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.proof !== undefined && (obj.proof = message.proof ? proof_1.Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxProof();
        message.rootHash = object.rootHash ?? new Uint8Array();
        message.data = object.data ?? new Uint8Array();
        message.proof = object.proof !== undefined && object.proof !== null ? proof_1.Proof.fromPartial(object.proof) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            rootHash: object.root_hash,
            data: object.data,
            proof: object?.proof ? proof_1.Proof.fromAmino(object.proof) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.root_hash = message.rootHash;
        obj.data = message.data;
        obj.proof = message.proof ? proof_1.Proof.toAmino(message.proof) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TxProof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TxProof.decode(message.value);
    },
    toProto(message) {
        return exports.TxProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.TxProof",
            value: exports.TxProof.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map