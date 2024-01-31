import { Params, ParamsAmino, ParamsSDKType, KeyedProtocolData, KeyedProtocolDataAmino, KeyedProtocolDataSDKType } from "./participationrewards";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
/** GenesisState defines the participationrewards module's genesis state. */
export interface GenesisState {
  params: Params;
  protocol_data: KeyedProtocolData[];
}
export interface GenesisStateProtoMsg {
  type_url: "/quicksilver.participationrewards.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the participationrewards module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  protocol_data: KeyedProtocolDataAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/quicksilver.participationrewards.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the participationrewards module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  protocol_data: KeyedProtocolDataSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    protocol_data: []
  };
}
export const GenesisState = {
  typeUrl: "/quicksilver.participationrewards.v1.GenesisState",
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.protocol_data) {
      KeyedProtocolData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.protocol_data.push(KeyedProtocolData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      protocol_data: Array.isArray(object?.protocol_data) ? object.protocol_data.map((e: any) => KeyedProtocolData.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.protocol_data) {
      obj.protocol_data = message.protocol_data.map(e => e ? KeyedProtocolData.toJSON(e) : undefined);
    } else {
      obj.protocol_data = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.protocol_data = object.protocol_data?.map(e => KeyedProtocolData.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      protocol_data: Array.isArray(object?.protocol_data) ? object.protocol_data.map((e: any) => KeyedProtocolData.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.protocol_data) {
      obj.protocol_data = message.protocol_data.map(e => e ? KeyedProtocolData.toAmino(e) : undefined);
    } else {
      obj.protocol_data = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/quicksilver.participationrewards.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};