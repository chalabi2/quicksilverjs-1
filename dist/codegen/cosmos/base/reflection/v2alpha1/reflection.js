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
exports.QueryMethodDescriptor = exports.QueryServiceDescriptor = exports.QueryServicesDescriptor = exports.GetTxDescriptorResponse = exports.GetTxDescriptorRequest = exports.GetQueryServicesDescriptorResponse = exports.GetQueryServicesDescriptorRequest = exports.GetConfigurationDescriptorResponse = exports.GetConfigurationDescriptorRequest = exports.GetCodecDescriptorResponse = exports.GetCodecDescriptorRequest = exports.GetChainDescriptorResponse = exports.GetChainDescriptorRequest = exports.GetAuthnDescriptorResponse = exports.GetAuthnDescriptorRequest = exports.MsgDescriptor = exports.ConfigurationDescriptor = exports.InterfaceAcceptingMessageDescriptor = exports.InterfaceImplementerDescriptor = exports.InterfaceDescriptor = exports.CodecDescriptor = exports.ChainDescriptor = exports.SigningModeDescriptor = exports.AuthnDescriptor = exports.TxDescriptor = exports.AppDescriptor = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../../helpers");
function createBaseAppDescriptor() {
    return {
        authn: exports.AuthnDescriptor.fromPartial({}),
        chain: exports.ChainDescriptor.fromPartial({}),
        codec: exports.CodecDescriptor.fromPartial({}),
        configuration: exports.ConfigurationDescriptor.fromPartial({}),
        queryServices: exports.QueryServicesDescriptor.fromPartial({}),
        tx: exports.TxDescriptor.fromPartial({})
    };
}
exports.AppDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.AppDescriptor",
    aminoType: "cosmos-sdk/AppDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.authn !== undefined) {
            exports.AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
        }
        if (message.chain !== undefined) {
            exports.ChainDescriptor.encode(message.chain, writer.uint32(18).fork()).ldelim();
        }
        if (message.codec !== undefined) {
            exports.CodecDescriptor.encode(message.codec, writer.uint32(26).fork()).ldelim();
        }
        if (message.configuration !== undefined) {
            exports.ConfigurationDescriptor.encode(message.configuration, writer.uint32(34).fork()).ldelim();
        }
        if (message.queryServices !== undefined) {
            exports.QueryServicesDescriptor.encode(message.queryServices, writer.uint32(42).fork()).ldelim();
        }
        if (message.tx !== undefined) {
            exports.TxDescriptor.encode(message.tx, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authn = exports.AuthnDescriptor.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chain = exports.ChainDescriptor.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.codec = exports.CodecDescriptor.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.configuration = exports.ConfigurationDescriptor.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.queryServices = exports.QueryServicesDescriptor.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.tx = exports.TxDescriptor.decode(reader, reader.uint32());
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
            authn: (0, helpers_1.isSet)(object.authn) ? exports.AuthnDescriptor.fromJSON(object.authn) : undefined,
            chain: (0, helpers_1.isSet)(object.chain) ? exports.ChainDescriptor.fromJSON(object.chain) : undefined,
            codec: (0, helpers_1.isSet)(object.codec) ? exports.CodecDescriptor.fromJSON(object.codec) : undefined,
            configuration: (0, helpers_1.isSet)(object.configuration) ? exports.ConfigurationDescriptor.fromJSON(object.configuration) : undefined,
            queryServices: (0, helpers_1.isSet)(object.queryServices) ? exports.QueryServicesDescriptor.fromJSON(object.queryServices) : undefined,
            tx: (0, helpers_1.isSet)(object.tx) ? exports.TxDescriptor.fromJSON(object.tx) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authn !== undefined && (obj.authn = message.authn ? exports.AuthnDescriptor.toJSON(message.authn) : undefined);
        message.chain !== undefined && (obj.chain = message.chain ? exports.ChainDescriptor.toJSON(message.chain) : undefined);
        message.codec !== undefined && (obj.codec = message.codec ? exports.CodecDescriptor.toJSON(message.codec) : undefined);
        message.configuration !== undefined && (obj.configuration = message.configuration ? exports.ConfigurationDescriptor.toJSON(message.configuration) : undefined);
        message.queryServices !== undefined && (obj.queryServices = message.queryServices ? exports.QueryServicesDescriptor.toJSON(message.queryServices) : undefined);
        message.tx !== undefined && (obj.tx = message.tx ? exports.TxDescriptor.toJSON(message.tx) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAppDescriptor();
        message.authn = object.authn !== undefined && object.authn !== null ? exports.AuthnDescriptor.fromPartial(object.authn) : undefined;
        message.chain = object.chain !== undefined && object.chain !== null ? exports.ChainDescriptor.fromPartial(object.chain) : undefined;
        message.codec = object.codec !== undefined && object.codec !== null ? exports.CodecDescriptor.fromPartial(object.codec) : undefined;
        message.configuration = object.configuration !== undefined && object.configuration !== null ? exports.ConfigurationDescriptor.fromPartial(object.configuration) : undefined;
        message.queryServices = object.queryServices !== undefined && object.queryServices !== null ? exports.QueryServicesDescriptor.fromPartial(object.queryServices) : undefined;
        message.tx = object.tx !== undefined && object.tx !== null ? exports.TxDescriptor.fromPartial(object.tx) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            authn: object?.authn ? exports.AuthnDescriptor.fromAmino(object.authn) : undefined,
            chain: object?.chain ? exports.ChainDescriptor.fromAmino(object.chain) : undefined,
            codec: object?.codec ? exports.CodecDescriptor.fromAmino(object.codec) : undefined,
            configuration: object?.configuration ? exports.ConfigurationDescriptor.fromAmino(object.configuration) : undefined,
            queryServices: object?.query_services ? exports.QueryServicesDescriptor.fromAmino(object.query_services) : undefined,
            tx: object?.tx ? exports.TxDescriptor.fromAmino(object.tx) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.authn = message.authn ? exports.AuthnDescriptor.toAmino(message.authn) : undefined;
        obj.chain = message.chain ? exports.ChainDescriptor.toAmino(message.chain) : undefined;
        obj.codec = message.codec ? exports.CodecDescriptor.toAmino(message.codec) : undefined;
        obj.configuration = message.configuration ? exports.ConfigurationDescriptor.toAmino(message.configuration) : undefined;
        obj.query_services = message.queryServices ? exports.QueryServicesDescriptor.toAmino(message.queryServices) : undefined;
        obj.tx = message.tx ? exports.TxDescriptor.toAmino(message.tx) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AppDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AppDescriptor",
            value: exports.AppDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AppDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.AppDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.AppDescriptor",
            value: exports.AppDescriptor.encode(message).finish()
        };
    }
};
function createBaseTxDescriptor() {
    return {
        fullname: "",
        msgs: []
    };
}
exports.TxDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.TxDescriptor",
    aminoType: "cosmos-sdk/TxDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        for (const v of message.msgs) {
            exports.MsgDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.msgs.push(exports.MsgDescriptor.decode(reader, reader.uint32()));
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
            fullname: (0, helpers_1.isSet)(object.fullname) ? String(object.fullname) : "",
            msgs: Array.isArray(object?.msgs) ? object.msgs.map((e) => exports.MsgDescriptor.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        if (message.msgs) {
            obj.msgs = message.msgs.map(e => e ? exports.MsgDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.msgs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxDescriptor();
        message.fullname = object.fullname ?? "";
        message.msgs = object.msgs?.map(e => exports.MsgDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            fullname: object.fullname,
            msgs: Array.isArray(object?.msgs) ? object.msgs.map((e) => exports.MsgDescriptor.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.fullname = message.fullname;
        if (message.msgs) {
            obj.msgs = message.msgs.map(e => e ? exports.MsgDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.msgs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TxDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxDescriptor",
            value: exports.TxDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TxDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.TxDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.TxDescriptor",
            value: exports.TxDescriptor.encode(message).finish()
        };
    }
};
function createBaseAuthnDescriptor() {
    return {
        signModes: []
    };
}
exports.AuthnDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.AuthnDescriptor",
    aminoType: "cosmos-sdk/AuthnDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.signModes) {
            exports.SigningModeDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthnDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signModes.push(exports.SigningModeDescriptor.decode(reader, reader.uint32()));
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
            signModes: Array.isArray(object?.signModes) ? object.signModes.map((e) => exports.SigningModeDescriptor.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signModes) {
            obj.signModes = message.signModes.map(e => e ? exports.SigningModeDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.signModes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAuthnDescriptor();
        message.signModes = object.signModes?.map(e => exports.SigningModeDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            signModes: Array.isArray(object?.sign_modes) ? object.sign_modes.map((e) => exports.SigningModeDescriptor.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.signModes) {
            obj.sign_modes = message.signModes.map(e => e ? exports.SigningModeDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.sign_modes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AuthnDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AuthnDescriptor",
            value: exports.AuthnDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AuthnDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.AuthnDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.AuthnDescriptor",
            value: exports.AuthnDescriptor.encode(message).finish()
        };
    }
};
function createBaseSigningModeDescriptor() {
    return {
        name: "",
        number: 0,
        authnInfoProviderMethodFullname: ""
    };
}
exports.SigningModeDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.SigningModeDescriptor",
    aminoType: "cosmos-sdk/SigningModeDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== 0) {
            writer.uint32(16).int32(message.number);
        }
        if (message.authnInfoProviderMethodFullname !== "") {
            writer.uint32(26).string(message.authnInfoProviderMethodFullname);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSigningModeDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.number = reader.int32();
                    break;
                case 3:
                    message.authnInfoProviderMethodFullname = reader.string();
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
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : "",
            number: (0, helpers_1.isSet)(object.number) ? Number(object.number) : 0,
            authnInfoProviderMethodFullname: (0, helpers_1.isSet)(object.authnInfoProviderMethodFullname) ? String(object.authnInfoProviderMethodFullname) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.number !== undefined && (obj.number = Math.round(message.number));
        message.authnInfoProviderMethodFullname !== undefined && (obj.authnInfoProviderMethodFullname = message.authnInfoProviderMethodFullname);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSigningModeDescriptor();
        message.name = object.name ?? "";
        message.number = object.number ?? 0;
        message.authnInfoProviderMethodFullname = object.authnInfoProviderMethodFullname ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            name: object.name,
            number: object.number,
            authnInfoProviderMethodFullname: object.authn_info_provider_method_fullname
        };
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.number = message.number;
        obj.authn_info_provider_method_fullname = message.authnInfoProviderMethodFullname;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SigningModeDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SigningModeDescriptor",
            value: exports.SigningModeDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SigningModeDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.SigningModeDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.SigningModeDescriptor",
            value: exports.SigningModeDescriptor.encode(message).finish()
        };
    }
};
function createBaseChainDescriptor() {
    return {
        id: ""
    };
}
exports.ChainDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.ChainDescriptor",
    aminoType: "cosmos-sdk/ChainDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChainDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
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
            id: (0, helpers_1.isSet)(object.id) ? String(object.id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseChainDescriptor();
        message.id = object.id ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            id: object.id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ChainDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ChainDescriptor",
            value: exports.ChainDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ChainDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.ChainDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.ChainDescriptor",
            value: exports.ChainDescriptor.encode(message).finish()
        };
    }
};
function createBaseCodecDescriptor() {
    return {
        interfaces: []
    };
}
exports.CodecDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.CodecDescriptor",
    aminoType: "cosmos-sdk/CodecDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.interfaces) {
            exports.InterfaceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCodecDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interfaces.push(exports.InterfaceDescriptor.decode(reader, reader.uint32()));
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
            interfaces: Array.isArray(object?.interfaces) ? object.interfaces.map((e) => exports.InterfaceDescriptor.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.interfaces) {
            obj.interfaces = message.interfaces.map(e => e ? exports.InterfaceDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.interfaces = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCodecDescriptor();
        message.interfaces = object.interfaces?.map(e => exports.InterfaceDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            interfaces: Array.isArray(object?.interfaces) ? object.interfaces.map((e) => exports.InterfaceDescriptor.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.interfaces) {
            obj.interfaces = message.interfaces.map(e => e ? exports.InterfaceDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.interfaces = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CodecDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CodecDescriptor",
            value: exports.CodecDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CodecDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.CodecDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.CodecDescriptor",
            value: exports.CodecDescriptor.encode(message).finish()
        };
    }
};
function createBaseInterfaceDescriptor() {
    return {
        fullname: "",
        interfaceAcceptingMessages: [],
        interfaceImplementers: []
    };
}
exports.InterfaceDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceDescriptor",
    aminoType: "cosmos-sdk/InterfaceDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        for (const v of message.interfaceAcceptingMessages) {
            exports.InterfaceAcceptingMessageDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.interfaceImplementers) {
            exports.InterfaceImplementerDescriptor.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInterfaceDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.interfaceAcceptingMessages.push(exports.InterfaceAcceptingMessageDescriptor.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.interfaceImplementers.push(exports.InterfaceImplementerDescriptor.decode(reader, reader.uint32()));
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
            fullname: (0, helpers_1.isSet)(object.fullname) ? String(object.fullname) : "",
            interfaceAcceptingMessages: Array.isArray(object?.interfaceAcceptingMessages) ? object.interfaceAcceptingMessages.map((e) => exports.InterfaceAcceptingMessageDescriptor.fromJSON(e)) : [],
            interfaceImplementers: Array.isArray(object?.interfaceImplementers) ? object.interfaceImplementers.map((e) => exports.InterfaceImplementerDescriptor.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        if (message.interfaceAcceptingMessages) {
            obj.interfaceAcceptingMessages = message.interfaceAcceptingMessages.map(e => e ? exports.InterfaceAcceptingMessageDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.interfaceAcceptingMessages = [];
        }
        if (message.interfaceImplementers) {
            obj.interfaceImplementers = message.interfaceImplementers.map(e => e ? exports.InterfaceImplementerDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.interfaceImplementers = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInterfaceDescriptor();
        message.fullname = object.fullname ?? "";
        message.interfaceAcceptingMessages = object.interfaceAcceptingMessages?.map(e => exports.InterfaceAcceptingMessageDescriptor.fromPartial(e)) || [];
        message.interfaceImplementers = object.interfaceImplementers?.map(e => exports.InterfaceImplementerDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            fullname: object.fullname,
            interfaceAcceptingMessages: Array.isArray(object?.interface_accepting_messages) ? object.interface_accepting_messages.map((e) => exports.InterfaceAcceptingMessageDescriptor.fromAmino(e)) : [],
            interfaceImplementers: Array.isArray(object?.interface_implementers) ? object.interface_implementers.map((e) => exports.InterfaceImplementerDescriptor.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.fullname = message.fullname;
        if (message.interfaceAcceptingMessages) {
            obj.interface_accepting_messages = message.interfaceAcceptingMessages.map(e => e ? exports.InterfaceAcceptingMessageDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.interface_accepting_messages = [];
        }
        if (message.interfaceImplementers) {
            obj.interface_implementers = message.interfaceImplementers.map(e => e ? exports.InterfaceImplementerDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.interface_implementers = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.InterfaceDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/InterfaceDescriptor",
            value: exports.InterfaceDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.InterfaceDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.InterfaceDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceDescriptor",
            value: exports.InterfaceDescriptor.encode(message).finish()
        };
    }
};
function createBaseInterfaceImplementerDescriptor() {
    return {
        fullname: "",
        typeUrl: ""
    };
}
exports.InterfaceImplementerDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor",
    aminoType: "cosmos-sdk/InterfaceImplementerDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        if (message.typeUrl !== "") {
            writer.uint32(18).string(message.typeUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInterfaceImplementerDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.typeUrl = reader.string();
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
            fullname: (0, helpers_1.isSet)(object.fullname) ? String(object.fullname) : "",
            typeUrl: (0, helpers_1.isSet)(object.typeUrl) ? String(object.typeUrl) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        message.typeUrl !== undefined && (obj.typeUrl = message.typeUrl);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInterfaceImplementerDescriptor();
        message.fullname = object.fullname ?? "";
        message.typeUrl = object.typeUrl ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            fullname: object.fullname,
            typeUrl: object.type_url
        };
    },
    toAmino(message) {
        const obj = {};
        obj.fullname = message.fullname;
        obj.type_url = message.typeUrl;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.InterfaceImplementerDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/InterfaceImplementerDescriptor",
            value: exports.InterfaceImplementerDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.InterfaceImplementerDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.InterfaceImplementerDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor",
            value: exports.InterfaceImplementerDescriptor.encode(message).finish()
        };
    }
};
function createBaseInterfaceAcceptingMessageDescriptor() {
    return {
        fullname: "",
        fieldDescriptorNames: []
    };
}
exports.InterfaceAcceptingMessageDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor",
    aminoType: "cosmos-sdk/InterfaceAcceptingMessageDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        for (const v of message.fieldDescriptorNames) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInterfaceAcceptingMessageDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.fieldDescriptorNames.push(reader.string());
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
            fullname: (0, helpers_1.isSet)(object.fullname) ? String(object.fullname) : "",
            fieldDescriptorNames: Array.isArray(object?.fieldDescriptorNames) ? object.fieldDescriptorNames.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        if (message.fieldDescriptorNames) {
            obj.fieldDescriptorNames = message.fieldDescriptorNames.map(e => e);
        }
        else {
            obj.fieldDescriptorNames = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInterfaceAcceptingMessageDescriptor();
        message.fullname = object.fullname ?? "";
        message.fieldDescriptorNames = object.fieldDescriptorNames?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            fullname: object.fullname,
            fieldDescriptorNames: Array.isArray(object?.field_descriptor_names) ? object.field_descriptor_names.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.fullname = message.fullname;
        if (message.fieldDescriptorNames) {
            obj.field_descriptor_names = message.fieldDescriptorNames.map(e => e);
        }
        else {
            obj.field_descriptor_names = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.InterfaceAcceptingMessageDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/InterfaceAcceptingMessageDescriptor",
            value: exports.InterfaceAcceptingMessageDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.InterfaceAcceptingMessageDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.InterfaceAcceptingMessageDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor",
            value: exports.InterfaceAcceptingMessageDescriptor.encode(message).finish()
        };
    }
};
function createBaseConfigurationDescriptor() {
    return {
        bech32AccountAddressPrefix: ""
    };
}
exports.ConfigurationDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.ConfigurationDescriptor",
    aminoType: "cosmos-sdk/ConfigurationDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.bech32AccountAddressPrefix !== "") {
            writer.uint32(10).string(message.bech32AccountAddressPrefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigurationDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bech32AccountAddressPrefix = reader.string();
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
            bech32AccountAddressPrefix: (0, helpers_1.isSet)(object.bech32AccountAddressPrefix) ? String(object.bech32AccountAddressPrefix) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.bech32AccountAddressPrefix !== undefined && (obj.bech32AccountAddressPrefix = message.bech32AccountAddressPrefix);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConfigurationDescriptor();
        message.bech32AccountAddressPrefix = object.bech32AccountAddressPrefix ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            bech32AccountAddressPrefix: object.bech32_account_address_prefix
        };
    },
    toAmino(message) {
        const obj = {};
        obj.bech32_account_address_prefix = message.bech32AccountAddressPrefix;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConfigurationDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConfigurationDescriptor",
            value: exports.ConfigurationDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConfigurationDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.ConfigurationDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.ConfigurationDescriptor",
            value: exports.ConfigurationDescriptor.encode(message).finish()
        };
    }
};
function createBaseMsgDescriptor() {
    return {
        msgTypeUrl: ""
    };
}
exports.MsgDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.MsgDescriptor",
    aminoType: "cosmos-sdk/MsgDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.msgTypeUrl !== "") {
            writer.uint32(10).string(message.msgTypeUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgTypeUrl = reader.string();
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
            msgTypeUrl: (0, helpers_1.isSet)(object.msgTypeUrl) ? String(object.msgTypeUrl) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDescriptor();
        message.msgTypeUrl = object.msgTypeUrl ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            msgTypeUrl: object.msg_type_url
        };
    },
    toAmino(message) {
        const obj = {};
        obj.msg_type_url = message.msgTypeUrl;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgDescriptor",
            value: exports.MsgDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.MsgDescriptor",
            value: exports.MsgDescriptor.encode(message).finish()
        };
    }
};
function createBaseGetAuthnDescriptorRequest() {
    return {};
}
exports.GetAuthnDescriptorRequest = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest",
    aminoType: "cosmos-sdk/GetAuthnDescriptorRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAuthnDescriptorRequest();
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
        const message = createBaseGetAuthnDescriptorRequest();
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
        return exports.GetAuthnDescriptorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetAuthnDescriptorRequest",
            value: exports.GetAuthnDescriptorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetAuthnDescriptorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetAuthnDescriptorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest",
            value: exports.GetAuthnDescriptorRequest.encode(message).finish()
        };
    }
};
function createBaseGetAuthnDescriptorResponse() {
    return {
        authn: exports.AuthnDescriptor.fromPartial({})
    };
}
exports.GetAuthnDescriptorResponse = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse",
    aminoType: "cosmos-sdk/GetAuthnDescriptorResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.authn !== undefined) {
            exports.AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAuthnDescriptorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authn = exports.AuthnDescriptor.decode(reader, reader.uint32());
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
            authn: (0, helpers_1.isSet)(object.authn) ? exports.AuthnDescriptor.fromJSON(object.authn) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authn !== undefined && (obj.authn = message.authn ? exports.AuthnDescriptor.toJSON(message.authn) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetAuthnDescriptorResponse();
        message.authn = object.authn !== undefined && object.authn !== null ? exports.AuthnDescriptor.fromPartial(object.authn) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            authn: object?.authn ? exports.AuthnDescriptor.fromAmino(object.authn) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.authn = message.authn ? exports.AuthnDescriptor.toAmino(message.authn) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetAuthnDescriptorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetAuthnDescriptorResponse",
            value: exports.GetAuthnDescriptorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetAuthnDescriptorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetAuthnDescriptorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse",
            value: exports.GetAuthnDescriptorResponse.encode(message).finish()
        };
    }
};
function createBaseGetChainDescriptorRequest() {
    return {};
}
exports.GetChainDescriptorRequest = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest",
    aminoType: "cosmos-sdk/GetChainDescriptorRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetChainDescriptorRequest();
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
        const message = createBaseGetChainDescriptorRequest();
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
        return exports.GetChainDescriptorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetChainDescriptorRequest",
            value: exports.GetChainDescriptorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetChainDescriptorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetChainDescriptorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest",
            value: exports.GetChainDescriptorRequest.encode(message).finish()
        };
    }
};
function createBaseGetChainDescriptorResponse() {
    return {
        chain: exports.ChainDescriptor.fromPartial({})
    };
}
exports.GetChainDescriptorResponse = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse",
    aminoType: "cosmos-sdk/GetChainDescriptorResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== undefined) {
            exports.ChainDescriptor.encode(message.chain, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetChainDescriptorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = exports.ChainDescriptor.decode(reader, reader.uint32());
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
            chain: (0, helpers_1.isSet)(object.chain) ? exports.ChainDescriptor.fromJSON(object.chain) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain ? exports.ChainDescriptor.toJSON(message.chain) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetChainDescriptorResponse();
        message.chain = object.chain !== undefined && object.chain !== null ? exports.ChainDescriptor.fromPartial(object.chain) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chain: object?.chain ? exports.ChainDescriptor.fromAmino(object.chain) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain ? exports.ChainDescriptor.toAmino(message.chain) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetChainDescriptorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetChainDescriptorResponse",
            value: exports.GetChainDescriptorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetChainDescriptorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetChainDescriptorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse",
            value: exports.GetChainDescriptorResponse.encode(message).finish()
        };
    }
};
function createBaseGetCodecDescriptorRequest() {
    return {};
}
exports.GetCodecDescriptorRequest = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest",
    aminoType: "cosmos-sdk/GetCodecDescriptorRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCodecDescriptorRequest();
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
        const message = createBaseGetCodecDescriptorRequest();
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
        return exports.GetCodecDescriptorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetCodecDescriptorRequest",
            value: exports.GetCodecDescriptorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetCodecDescriptorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetCodecDescriptorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest",
            value: exports.GetCodecDescriptorRequest.encode(message).finish()
        };
    }
};
function createBaseGetCodecDescriptorResponse() {
    return {
        codec: exports.CodecDescriptor.fromPartial({})
    };
}
exports.GetCodecDescriptorResponse = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse",
    aminoType: "cosmos-sdk/GetCodecDescriptorResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.codec !== undefined) {
            exports.CodecDescriptor.encode(message.codec, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCodecDescriptorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codec = exports.CodecDescriptor.decode(reader, reader.uint32());
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
            codec: (0, helpers_1.isSet)(object.codec) ? exports.CodecDescriptor.fromJSON(object.codec) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.codec !== undefined && (obj.codec = message.codec ? exports.CodecDescriptor.toJSON(message.codec) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetCodecDescriptorResponse();
        message.codec = object.codec !== undefined && object.codec !== null ? exports.CodecDescriptor.fromPartial(object.codec) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            codec: object?.codec ? exports.CodecDescriptor.fromAmino(object.codec) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.codec = message.codec ? exports.CodecDescriptor.toAmino(message.codec) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetCodecDescriptorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetCodecDescriptorResponse",
            value: exports.GetCodecDescriptorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetCodecDescriptorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetCodecDescriptorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse",
            value: exports.GetCodecDescriptorResponse.encode(message).finish()
        };
    }
};
function createBaseGetConfigurationDescriptorRequest() {
    return {};
}
exports.GetConfigurationDescriptorRequest = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest",
    aminoType: "cosmos-sdk/GetConfigurationDescriptorRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetConfigurationDescriptorRequest();
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
        const message = createBaseGetConfigurationDescriptorRequest();
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
        return exports.GetConfigurationDescriptorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetConfigurationDescriptorRequest",
            value: exports.GetConfigurationDescriptorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetConfigurationDescriptorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetConfigurationDescriptorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest",
            value: exports.GetConfigurationDescriptorRequest.encode(message).finish()
        };
    }
};
function createBaseGetConfigurationDescriptorResponse() {
    return {
        config: exports.ConfigurationDescriptor.fromPartial({})
    };
}
exports.GetConfigurationDescriptorResponse = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse",
    aminoType: "cosmos-sdk/GetConfigurationDescriptorResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            exports.ConfigurationDescriptor.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetConfigurationDescriptorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = exports.ConfigurationDescriptor.decode(reader, reader.uint32());
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
            config: (0, helpers_1.isSet)(object.config) ? exports.ConfigurationDescriptor.fromJSON(object.config) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined && (obj.config = message.config ? exports.ConfigurationDescriptor.toJSON(message.config) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetConfigurationDescriptorResponse();
        message.config = object.config !== undefined && object.config !== null ? exports.ConfigurationDescriptor.fromPartial(object.config) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            config: object?.config ? exports.ConfigurationDescriptor.fromAmino(object.config) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.config = message.config ? exports.ConfigurationDescriptor.toAmino(message.config) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetConfigurationDescriptorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetConfigurationDescriptorResponse",
            value: exports.GetConfigurationDescriptorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetConfigurationDescriptorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetConfigurationDescriptorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse",
            value: exports.GetConfigurationDescriptorResponse.encode(message).finish()
        };
    }
};
function createBaseGetQueryServicesDescriptorRequest() {
    return {};
}
exports.GetQueryServicesDescriptorRequest = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest",
    aminoType: "cosmos-sdk/GetQueryServicesDescriptorRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetQueryServicesDescriptorRequest();
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
        const message = createBaseGetQueryServicesDescriptorRequest();
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
        return exports.GetQueryServicesDescriptorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetQueryServicesDescriptorRequest",
            value: exports.GetQueryServicesDescriptorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetQueryServicesDescriptorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetQueryServicesDescriptorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest",
            value: exports.GetQueryServicesDescriptorRequest.encode(message).finish()
        };
    }
};
function createBaseGetQueryServicesDescriptorResponse() {
    return {
        queries: exports.QueryServicesDescriptor.fromPartial({})
    };
}
exports.GetQueryServicesDescriptorResponse = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse",
    aminoType: "cosmos-sdk/GetQueryServicesDescriptorResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.queries !== undefined) {
            exports.QueryServicesDescriptor.encode(message.queries, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetQueryServicesDescriptorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queries = exports.QueryServicesDescriptor.decode(reader, reader.uint32());
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
            queries: (0, helpers_1.isSet)(object.queries) ? exports.QueryServicesDescriptor.fromJSON(object.queries) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.queries !== undefined && (obj.queries = message.queries ? exports.QueryServicesDescriptor.toJSON(message.queries) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetQueryServicesDescriptorResponse();
        message.queries = object.queries !== undefined && object.queries !== null ? exports.QueryServicesDescriptor.fromPartial(object.queries) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            queries: object?.queries ? exports.QueryServicesDescriptor.fromAmino(object.queries) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.queries = message.queries ? exports.QueryServicesDescriptor.toAmino(message.queries) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetQueryServicesDescriptorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetQueryServicesDescriptorResponse",
            value: exports.GetQueryServicesDescriptorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetQueryServicesDescriptorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetQueryServicesDescriptorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse",
            value: exports.GetQueryServicesDescriptorResponse.encode(message).finish()
        };
    }
};
function createBaseGetTxDescriptorRequest() {
    return {};
}
exports.GetTxDescriptorRequest = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest",
    aminoType: "cosmos-sdk/GetTxDescriptorRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxDescriptorRequest();
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
        const message = createBaseGetTxDescriptorRequest();
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
        return exports.GetTxDescriptorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetTxDescriptorRequest",
            value: exports.GetTxDescriptorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetTxDescriptorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetTxDescriptorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest",
            value: exports.GetTxDescriptorRequest.encode(message).finish()
        };
    }
};
function createBaseGetTxDescriptorResponse() {
    return {
        tx: exports.TxDescriptor.fromPartial({})
    };
}
exports.GetTxDescriptorResponse = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse",
    aminoType: "cosmos-sdk/GetTxDescriptorResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx !== undefined) {
            exports.TxDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxDescriptorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = exports.TxDescriptor.decode(reader, reader.uint32());
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
            tx: (0, helpers_1.isSet)(object.tx) ? exports.TxDescriptor.fromJSON(object.tx) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? exports.TxDescriptor.toJSON(message.tx) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTxDescriptorResponse();
        message.tx = object.tx !== undefined && object.tx !== null ? exports.TxDescriptor.fromPartial(object.tx) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            tx: object?.tx ? exports.TxDescriptor.fromAmino(object.tx) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx ? exports.TxDescriptor.toAmino(message.tx) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetTxDescriptorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetTxDescriptorResponse",
            value: exports.GetTxDescriptorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetTxDescriptorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetTxDescriptorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse",
            value: exports.GetTxDescriptorResponse.encode(message).finish()
        };
    }
};
function createBaseQueryServicesDescriptor() {
    return {
        queryServices: []
    };
}
exports.QueryServicesDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServicesDescriptor",
    aminoType: "cosmos-sdk/QueryServicesDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.queryServices) {
            exports.QueryServiceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryServicesDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queryServices.push(exports.QueryServiceDescriptor.decode(reader, reader.uint32()));
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
            queryServices: Array.isArray(object?.queryServices) ? object.queryServices.map((e) => exports.QueryServiceDescriptor.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.queryServices) {
            obj.queryServices = message.queryServices.map(e => e ? exports.QueryServiceDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.queryServices = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryServicesDescriptor();
        message.queryServices = object.queryServices?.map(e => exports.QueryServiceDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            queryServices: Array.isArray(object?.query_services) ? object.query_services.map((e) => exports.QueryServiceDescriptor.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.queryServices) {
            obj.query_services = message.queryServices.map(e => e ? exports.QueryServiceDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.query_services = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryServicesDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryServicesDescriptor",
            value: exports.QueryServicesDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryServicesDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.QueryServicesDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServicesDescriptor",
            value: exports.QueryServicesDescriptor.encode(message).finish()
        };
    }
};
function createBaseQueryServiceDescriptor() {
    return {
        fullname: "",
        isModule: false,
        methods: []
    };
}
exports.QueryServiceDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServiceDescriptor",
    aminoType: "cosmos-sdk/QueryServiceDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        if (message.isModule === true) {
            writer.uint32(16).bool(message.isModule);
        }
        for (const v of message.methods) {
            exports.QueryMethodDescriptor.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryServiceDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.isModule = reader.bool();
                    break;
                case 3:
                    message.methods.push(exports.QueryMethodDescriptor.decode(reader, reader.uint32()));
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
            fullname: (0, helpers_1.isSet)(object.fullname) ? String(object.fullname) : "",
            isModule: (0, helpers_1.isSet)(object.isModule) ? Boolean(object.isModule) : false,
            methods: Array.isArray(object?.methods) ? object.methods.map((e) => exports.QueryMethodDescriptor.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        message.isModule !== undefined && (obj.isModule = message.isModule);
        if (message.methods) {
            obj.methods = message.methods.map(e => e ? exports.QueryMethodDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.methods = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryServiceDescriptor();
        message.fullname = object.fullname ?? "";
        message.isModule = object.isModule ?? false;
        message.methods = object.methods?.map(e => exports.QueryMethodDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            fullname: object.fullname,
            isModule: object.is_module,
            methods: Array.isArray(object?.methods) ? object.methods.map((e) => exports.QueryMethodDescriptor.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.fullname = message.fullname;
        obj.is_module = message.isModule;
        if (message.methods) {
            obj.methods = message.methods.map(e => e ? exports.QueryMethodDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.methods = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryServiceDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryServiceDescriptor",
            value: exports.QueryServiceDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryServiceDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.QueryServiceDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServiceDescriptor",
            value: exports.QueryServiceDescriptor.encode(message).finish()
        };
    }
};
function createBaseQueryMethodDescriptor() {
    return {
        name: "",
        fullQueryPath: ""
    };
}
exports.QueryMethodDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.QueryMethodDescriptor",
    aminoType: "cosmos-sdk/QueryMethodDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.fullQueryPath !== "") {
            writer.uint32(18).string(message.fullQueryPath);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMethodDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.fullQueryPath = reader.string();
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
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : "",
            fullQueryPath: (0, helpers_1.isSet)(object.fullQueryPath) ? String(object.fullQueryPath) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.fullQueryPath !== undefined && (obj.fullQueryPath = message.fullQueryPath);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryMethodDescriptor();
        message.name = object.name ?? "";
        message.fullQueryPath = object.fullQueryPath ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            name: object.name,
            fullQueryPath: object.full_query_path
        };
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.full_query_path = message.fullQueryPath;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryMethodDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryMethodDescriptor",
            value: exports.QueryMethodDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryMethodDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.QueryMethodDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.QueryMethodDescriptor",
            value: exports.QueryMethodDescriptor.encode(message).finish()
        };
    }
};
//# sourceMappingURL=reflection.js.map