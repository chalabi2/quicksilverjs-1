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
exports.Params = void 0;
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseParams() {
    return {
        denomCreationFee: []
    };
}
exports.Params = {
    typeUrl: "/quicksilver.tokenfactory.v1beta1.Params",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.denomCreationFee) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomCreationFee.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            denomCreationFee: Array.isArray(object?.denomCreationFee) ? object.denomCreationFee.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denomCreationFee) {
            obj.denomCreationFee = message.denomCreationFee.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.denomCreationFee = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.denomCreationFee = object.denomCreationFee?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            denomCreationFee: Array.isArray(object?.denom_creation_fee) ? object.denom_creation_fee.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.denomCreationFee) {
            obj.denom_creation_fee = message.denomCreationFee.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.denom_creation_fee = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map