import { Coin } from "../../base/v1beta1/coin";
import { Input, Output } from "./bank";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseMsgSend() {
    return {
        fromAddress: "",
        toAddress: "",
        amount: []
    };
}
export const MsgSend = {
    typeUrl: "/cosmos.bank.v1beta1.MsgSend",
    aminoType: "cosmos-sdk/MsgSend",
    encode(message, writer = _m0.Writer.create()) {
        if (message.fromAddress !== "") {
            writer.uint32(10).string(message.fromAddress);
        }
        if (message.toAddress !== "") {
            writer.uint32(18).string(message.toAddress);
        }
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromAddress = reader.string();
                    break;
                case 2:
                    message.toAddress = reader.string();
                    break;
                case 3:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
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
            fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
            toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
        message.toAddress !== undefined && (obj.toAddress = message.toAddress);
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSend();
        message.fromAddress = object.fromAddress ?? "";
        message.toAddress = object.toAddress ?? "";
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            fromAddress: object.from_address,
            toAddress: object.to_address,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.from_address = message.fromAddress;
        obj.to_address = message.toAddress;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSend.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSend",
            value: MsgSend.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSend.decode(message.value);
    },
    toProto(message) {
        return MsgSend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.MsgSend",
            value: MsgSend.encode(message).finish()
        };
    }
};
function createBaseMsgSendResponse() {
    return {};
}
export const MsgSendResponse = {
    typeUrl: "/cosmos.bank.v1beta1.MsgSendResponse",
    aminoType: "cosmos-sdk/MsgSendResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendResponse();
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
        const message = createBaseMsgSendResponse();
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
        return MsgSendResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSendResponse",
            value: MsgSendResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSendResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSendResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.MsgSendResponse",
            value: MsgSendResponse.encode(message).finish()
        };
    }
};
function createBaseMsgMultiSend() {
    return {
        inputs: [],
        outputs: []
    };
}
export const MsgMultiSend = {
    typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
    aminoType: "cosmos-sdk/MsgMultiSend",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.inputs) {
            Input.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.outputs) {
            Output.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMultiSend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inputs.push(Input.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.outputs.push(Output.decode(reader, reader.uint32()));
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
            inputs: Array.isArray(object?.inputs) ? object.inputs.map((e) => Input.fromJSON(e)) : [],
            outputs: Array.isArray(object?.outputs) ? object.outputs.map((e) => Output.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.inputs) {
            obj.inputs = message.inputs.map(e => e ? Input.toJSON(e) : undefined);
        }
        else {
            obj.inputs = [];
        }
        if (message.outputs) {
            obj.outputs = message.outputs.map(e => e ? Output.toJSON(e) : undefined);
        }
        else {
            obj.outputs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgMultiSend();
        message.inputs = object.inputs?.map(e => Input.fromPartial(e)) || [];
        message.outputs = object.outputs?.map(e => Output.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            inputs: Array.isArray(object?.inputs) ? object.inputs.map((e) => Input.fromAmino(e)) : [],
            outputs: Array.isArray(object?.outputs) ? object.outputs.map((e) => Output.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.inputs) {
            obj.inputs = message.inputs.map(e => e ? Input.toAmino(e) : undefined);
        }
        else {
            obj.inputs = [];
        }
        if (message.outputs) {
            obj.outputs = message.outputs.map(e => e ? Output.toAmino(e) : undefined);
        }
        else {
            obj.outputs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgMultiSend.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgMultiSend",
            value: MsgMultiSend.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgMultiSend.decode(message.value);
    },
    toProto(message) {
        return MsgMultiSend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
            value: MsgMultiSend.encode(message).finish()
        };
    }
};
function createBaseMsgMultiSendResponse() {
    return {};
}
export const MsgMultiSendResponse = {
    typeUrl: "/cosmos.bank.v1beta1.MsgMultiSendResponse",
    aminoType: "cosmos-sdk/MsgMultiSendResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMultiSendResponse();
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
        const message = createBaseMsgMultiSendResponse();
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
        return MsgMultiSendResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgMultiSendResponse",
            value: MsgMultiSendResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgMultiSendResponse.decode(message.value);
    },
    toProto(message) {
        return MsgMultiSendResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.MsgMultiSendResponse",
            value: MsgMultiSendResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map