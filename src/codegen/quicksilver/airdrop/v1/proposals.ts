import { ZoneDrop, ZoneDropAmino, ZoneDropSDKType } from "./airdrop";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
export interface RegisterZoneDropProposal {
  title: string;
  description: string;
  zone_drop: ZoneDrop;
  claim_records: Uint8Array;
}
export interface RegisterZoneDropProposalProtoMsg {
  type_url: "/quicksilver.airdrop.v1.RegisterZoneDropProposal";
  value: Uint8Array;
}
export interface RegisterZoneDropProposalAmino {
  title: string;
  description: string;
  zone_drop?: ZoneDropAmino;
  claim_records: Uint8Array;
}
export interface RegisterZoneDropProposalAminoMsg {
  type: "/quicksilver.airdrop.v1.RegisterZoneDropProposal";
  value: RegisterZoneDropProposalAmino;
}
export interface RegisterZoneDropProposalSDKType {
  title: string;
  description: string;
  zone_drop: ZoneDropSDKType;
  claim_records: Uint8Array;
}
function createBaseRegisterZoneDropProposal(): RegisterZoneDropProposal {
  return {
    title: "",
    description: "",
    zone_drop: ZoneDrop.fromPartial({}),
    claim_records: new Uint8Array()
  };
}
export const RegisterZoneDropProposal = {
  typeUrl: "/quicksilver.airdrop.v1.RegisterZoneDropProposal",
  encode(message: RegisterZoneDropProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.zone_drop !== undefined) {
      ZoneDrop.encode(message.zone_drop, writer.uint32(26).fork()).ldelim();
    }
    if (message.claim_records.length !== 0) {
      writer.uint32(34).bytes(message.claim_records);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterZoneDropProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterZoneDropProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.zone_drop = ZoneDrop.decode(reader, reader.uint32());
          break;
        case 4:
          message.claim_records = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisterZoneDropProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      zone_drop: isSet(object.zone_drop) ? ZoneDrop.fromJSON(object.zone_drop) : undefined,
      claim_records: isSet(object.claim_records) ? bytesFromBase64(object.claim_records) : new Uint8Array()
    };
  },
  toJSON(message: RegisterZoneDropProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.zone_drop !== undefined && (obj.zone_drop = message.zone_drop ? ZoneDrop.toJSON(message.zone_drop) : undefined);
    message.claim_records !== undefined && (obj.claim_records = base64FromBytes(message.claim_records !== undefined ? message.claim_records : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<RegisterZoneDropProposal>): RegisterZoneDropProposal {
    const message = createBaseRegisterZoneDropProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.zone_drop = object.zone_drop !== undefined && object.zone_drop !== null ? ZoneDrop.fromPartial(object.zone_drop) : undefined;
    message.claim_records = object.claim_records ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RegisterZoneDropProposalAmino): RegisterZoneDropProposal {
    return {
      title: object.title,
      description: object.description,
      zone_drop: object?.zone_drop ? ZoneDrop.fromAmino(object.zone_drop) : undefined,
      claim_records: object.claim_records
    };
  },
  toAmino(message: RegisterZoneDropProposal): RegisterZoneDropProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.zone_drop = message.zone_drop ? ZoneDrop.toAmino(message.zone_drop) : undefined;
    obj.claim_records = message.claim_records;
    return obj;
  },
  fromAminoMsg(object: RegisterZoneDropProposalAminoMsg): RegisterZoneDropProposal {
    return RegisterZoneDropProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterZoneDropProposalProtoMsg): RegisterZoneDropProposal {
    return RegisterZoneDropProposal.decode(message.value);
  },
  toProto(message: RegisterZoneDropProposal): Uint8Array {
    return RegisterZoneDropProposal.encode(message).finish();
  },
  toProtoMsg(message: RegisterZoneDropProposal): RegisterZoneDropProposalProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.RegisterZoneDropProposal",
      value: RegisterZoneDropProposal.encode(message).finish()
    };
  }
};