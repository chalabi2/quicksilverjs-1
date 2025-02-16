import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
export var ScalarType;
(function (ScalarType) {
    ScalarType[ScalarType["SCALAR_TYPE_UNSPECIFIED"] = 0] = "SCALAR_TYPE_UNSPECIFIED";
    ScalarType[ScalarType["SCALAR_TYPE_STRING"] = 1] = "SCALAR_TYPE_STRING";
    ScalarType[ScalarType["SCALAR_TYPE_BYTES"] = 2] = "SCALAR_TYPE_BYTES";
    ScalarType[ScalarType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ScalarType || (ScalarType = {}));
export const ScalarTypeSDKType = ScalarType;
export const ScalarTypeAmino = ScalarType;
export function scalarTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SCALAR_TYPE_UNSPECIFIED":
            return ScalarType.SCALAR_TYPE_UNSPECIFIED;
        case 1:
        case "SCALAR_TYPE_STRING":
            return ScalarType.SCALAR_TYPE_STRING;
        case 2:
        case "SCALAR_TYPE_BYTES":
            return ScalarType.SCALAR_TYPE_BYTES;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ScalarType.UNRECOGNIZED;
    }
}
export function scalarTypeToJSON(object) {
    switch (object) {
        case ScalarType.SCALAR_TYPE_UNSPECIFIED:
            return "SCALAR_TYPE_UNSPECIFIED";
        case ScalarType.SCALAR_TYPE_STRING:
            return "SCALAR_TYPE_STRING";
        case ScalarType.SCALAR_TYPE_BYTES:
            return "SCALAR_TYPE_BYTES";
        case ScalarType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseInterfaceDescriptor() {
    return {
        name: "",
        description: ""
    };
}
export const InterfaceDescriptor = {
    typeUrl: "/cosmos_proto.InterfaceDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
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
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
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
            name: isSet(object.name) ? String(object.name) : "",
            description: isSet(object.description) ? String(object.description) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInterfaceDescriptor();
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            name: object.name,
            description: object.description
        };
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.description = message.description;
        return obj;
    },
    fromAminoMsg(object) {
        return InterfaceDescriptor.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return InterfaceDescriptor.decode(message.value);
    },
    toProto(message) {
        return InterfaceDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos_proto.InterfaceDescriptor",
            value: InterfaceDescriptor.encode(message).finish()
        };
    }
};
function createBaseScalarDescriptor() {
    return {
        name: "",
        description: "",
        fieldType: []
    };
}
export const ScalarDescriptor = {
    typeUrl: "/cosmos_proto.ScalarDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        writer.uint32(26).fork();
        for (const v of message.fieldType) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseScalarDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.fieldType.push(reader.int32());
                        }
                    }
                    else {
                        message.fieldType.push(reader.int32());
                    }
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
            name: isSet(object.name) ? String(object.name) : "",
            description: isSet(object.description) ? String(object.description) : "",
            fieldType: Array.isArray(object?.fieldType) ? object.fieldType.map((e) => scalarTypeFromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        if (message.fieldType) {
            obj.fieldType = message.fieldType.map(e => scalarTypeToJSON(e));
        }
        else {
            obj.fieldType = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseScalarDescriptor();
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.fieldType = object.fieldType?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            name: object.name,
            description: object.description,
            fieldType: Array.isArray(object?.field_type) ? object.field_type.map((e) => scalarTypeFromJSON(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.description = message.description;
        if (message.fieldType) {
            obj.field_type = message.fieldType.map(e => scalarTypeToJSON(e));
        }
        else {
            obj.field_type = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ScalarDescriptor.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ScalarDescriptor.decode(message.value);
    },
    toProto(message) {
        return ScalarDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos_proto.ScalarDescriptor",
            value: ScalarDescriptor.encode(message).finish()
        };
    }
};
//# sourceMappingURL=cosmos.js.map