import { Header, Data, Commit } from "./types";
import { EvidenceList } from "./evidence";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
function createBaseBlock() {
    return {
        header: Header.fromPartial({}),
        data: Data.fromPartial({}),
        evidence: EvidenceList.fromPartial({}),
        lastCommit: Commit.fromPartial({})
    };
}
export const Block = {
    typeUrl: "/tendermint.types.Block",
    encode(message, writer = _m0.Writer.create()) {
        if (message.header !== undefined) {
            Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.data !== undefined) {
            Data.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
        }
        if (message.lastCommit !== undefined) {
            Commit.encode(message.lastCommit, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data = Data.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.evidence = EvidenceList.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.lastCommit = Commit.decode(reader, reader.uint32());
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
            header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
            data: isSet(object.data) ? Data.fromJSON(object.data) : undefined,
            evidence: isSet(object.evidence) ? EvidenceList.fromJSON(object.evidence) : undefined,
            lastCommit: isSet(object.lastCommit) ? Commit.fromJSON(object.lastCommit) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
        message.data !== undefined && (obj.data = message.data ? Data.toJSON(message.data) : undefined);
        message.evidence !== undefined && (obj.evidence = message.evidence ? EvidenceList.toJSON(message.evidence) : undefined);
        message.lastCommit !== undefined && (obj.lastCommit = message.lastCommit ? Commit.toJSON(message.lastCommit) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlock();
        message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
        message.data = object.data !== undefined && object.data !== null ? Data.fromPartial(object.data) : undefined;
        message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceList.fromPartial(object.evidence) : undefined;
        message.lastCommit = object.lastCommit !== undefined && object.lastCommit !== null ? Commit.fromPartial(object.lastCommit) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            header: object?.header ? Header.fromAmino(object.header) : undefined,
            data: object?.data ? Data.fromAmino(object.data) : undefined,
            evidence: object?.evidence ? EvidenceList.fromAmino(object.evidence) : undefined,
            lastCommit: object?.last_commit ? Commit.fromAmino(object.last_commit) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.header = message.header ? Header.toAmino(message.header) : undefined;
        obj.data = message.data ? Data.toAmino(message.data) : undefined;
        obj.evidence = message.evidence ? EvidenceList.toAmino(message.evidence) : undefined;
        obj.last_commit = message.lastCommit ? Commit.toAmino(message.lastCommit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Block.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Block.decode(message.value);
    },
    toProto(message) {
        return Block.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Block",
            value: Block.encode(message).finish()
        };
    }
};
//# sourceMappingURL=block.js.map