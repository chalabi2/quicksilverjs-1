import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Long, toTimestamp, fromTimestamp, isSet, fromJsonTimestamp, DeepPartial, isObject } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Action is used as an enum to denote specific actions or tasks. */
export enum Action {
  /** ActionUndefined - Undefined action (per protobuf spec) */
  ActionUndefined = 0,
  /** ActionInitialClaim - Initial claim action */
  ActionInitialClaim = 1,
  /** ActionDepositT1 - Deposit tier 1 (e.g. > 5% of base_value) */
  ActionDepositT1 = 2,
  /** ActionDepositT2 - Deposit tier 2 (e.g. > 10% of base_value) */
  ActionDepositT2 = 3,
  /** ActionDepositT3 - Deposit tier 3 (e.g. > 15% of base_value) */
  ActionDepositT3 = 4,
  /** ActionDepositT4 - Deposit tier 4 (e.g. > 22% of base_value) */
  ActionDepositT4 = 5,
  /** ActionDepositT5 - Deposit tier 5 (e.g. > 30% of base_value) */
  ActionDepositT5 = 6,
  /** ActionStakeQCK - Active QCK delegation */
  ActionStakeQCK = 7,
  /** ActionSignalIntent - Intent is set */
  ActionSignalIntent = 8,
  /** ActionQSGov - Cast governance vote on QS */
  ActionQSGov = 9,
  /** ActionGbP - Governance By Proxy (GbP): cast vote on remote zone */
  ActionGbP = 10,
  /** ActionOsmosis - Provide liquidity on Osmosis */
  ActionOsmosis = 11,
  UNRECOGNIZED = -1,
}
export const ActionSDKType = Action;
export const ActionAmino = Action;
export function actionFromJSON(object: any): Action {
  switch (object) {
    case 0:
    case "ActionUndefined":
      return Action.ActionUndefined;
    case 1:
    case "ActionInitialClaim":
      return Action.ActionInitialClaim;
    case 2:
    case "ActionDepositT1":
      return Action.ActionDepositT1;
    case 3:
    case "ActionDepositT2":
      return Action.ActionDepositT2;
    case 4:
    case "ActionDepositT3":
      return Action.ActionDepositT3;
    case 5:
    case "ActionDepositT4":
      return Action.ActionDepositT4;
    case 6:
    case "ActionDepositT5":
      return Action.ActionDepositT5;
    case 7:
    case "ActionStakeQCK":
      return Action.ActionStakeQCK;
    case 8:
    case "ActionSignalIntent":
      return Action.ActionSignalIntent;
    case 9:
    case "ActionQSGov":
      return Action.ActionQSGov;
    case 10:
    case "ActionGbP":
      return Action.ActionGbP;
    case 11:
    case "ActionOsmosis":
      return Action.ActionOsmosis;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action.UNRECOGNIZED;
  }
}
export function actionToJSON(object: Action): string {
  switch (object) {
    case Action.ActionUndefined:
      return "ActionUndefined";
    case Action.ActionInitialClaim:
      return "ActionInitialClaim";
    case Action.ActionDepositT1:
      return "ActionDepositT1";
    case Action.ActionDepositT2:
      return "ActionDepositT2";
    case Action.ActionDepositT3:
      return "ActionDepositT3";
    case Action.ActionDepositT4:
      return "ActionDepositT4";
    case Action.ActionDepositT5:
      return "ActionDepositT5";
    case Action.ActionStakeQCK:
      return "ActionStakeQCK";
    case Action.ActionSignalIntent:
      return "ActionSignalIntent";
    case Action.ActionQSGov:
      return "ActionQSGov";
    case Action.ActionGbP:
      return "ActionGbP";
    case Action.ActionOsmosis:
      return "ActionOsmosis";
    case Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Status is used as an enum to denote zone status. */
export enum Status {
  StatusUndefined = 0,
  StatusActive = 1,
  StatusFuture = 2,
  StatusExpired = 3,
  UNRECOGNIZED = -1,
}
export const StatusSDKType = Status;
export const StatusAmino = Status;
export function statusFromJSON(object: any): Status {
  switch (object) {
    case 0:
    case "StatusUndefined":
      return Status.StatusUndefined;
    case 1:
    case "StatusActive":
      return Status.StatusActive;
    case 2:
    case "StatusFuture":
      return Status.StatusFuture;
    case 3:
    case "StatusExpired":
      return Status.StatusExpired;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Status.UNRECOGNIZED;
  }
}
export function statusToJSON(object: Status): string {
  switch (object) {
    case Status.StatusUndefined:
      return "StatusUndefined";
    case Status.StatusActive:
      return "StatusActive";
    case Status.StatusFuture:
      return "StatusFuture";
    case Status.StatusExpired:
      return "StatusExpired";
    case Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ZoneDrop represents an airdrop for a specific zone. */
export interface ZoneDrop {
  chainId: string;
  startTime: Date;
  duration: Duration;
  decay: Duration;
  allocation: Long;
  actions: string[];
  isConcluded: boolean;
}
export interface ZoneDropProtoMsg {
  typeUrl: "/quicksilver.airdrop.v1.ZoneDrop";
  value: Uint8Array;
}
/** ZoneDrop represents an airdrop for a specific zone. */
export interface ZoneDropAmino {
  chain_id: string;
  start_time?: Date;
  duration?: DurationAmino;
  decay?: DurationAmino;
  allocation: string;
  actions: string[];
  is_concluded: boolean;
}
export interface ZoneDropAminoMsg {
  type: "/quicksilver.airdrop.v1.ZoneDrop";
  value: ZoneDropAmino;
}
/** ZoneDrop represents an airdrop for a specific zone. */
export interface ZoneDropSDKType {
  chain_id: string;
  start_time: Date;
  duration: DurationSDKType;
  decay: DurationSDKType;
  allocation: Long;
  actions: string[];
  is_concluded: boolean;
}
export interface ClaimRecord_ActionsCompletedEntry {
  key: number;
  value: CompletedAction;
}
export interface ClaimRecord_ActionsCompletedEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface ClaimRecord_ActionsCompletedEntryAmino {
  key: number;
  value?: CompletedActionAmino;
}
export interface ClaimRecord_ActionsCompletedEntryAminoMsg {
  type: string;
  value: ClaimRecord_ActionsCompletedEntryAmino;
}
export interface ClaimRecord_ActionsCompletedEntrySDKType {
  key: number;
  value: CompletedActionSDKType;
}
/**
 * ClaimRecord represents a users' claim (including completed claims) for a
 * given zone.
 */
export interface ClaimRecord {
  chainId: string;
  address: string;
  /** Protobuf3 does not allow enum as map key */
  actionsCompleted: {
    [key: number]: CompletedAction;
  };
  maxAllocation: Long;
  baseValue: Long;
}
export interface ClaimRecordProtoMsg {
  typeUrl: "/quicksilver.airdrop.v1.ClaimRecord";
  value: Uint8Array;
}
/**
 * ClaimRecord represents a users' claim (including completed claims) for a
 * given zone.
 */
export interface ClaimRecordAmino {
  chain_id: string;
  address: string;
  /** Protobuf3 does not allow enum as map key */
  actions_completed?: {
    [key: number]: CompletedActionAmino;
  };
  max_allocation: string;
  base_value: string;
}
export interface ClaimRecordAminoMsg {
  type: "/quicksilver.airdrop.v1.ClaimRecord";
  value: ClaimRecordAmino;
}
/**
 * ClaimRecord represents a users' claim (including completed claims) for a
 * given zone.
 */
export interface ClaimRecordSDKType {
  chain_id: string;
  address: string;
  actions_completed: {
    [key: number]: CompletedActionSDKType;
  };
  max_allocation: Long;
  base_value: Long;
}
/** CompletedAction represents a claim action completed by the user. */
export interface CompletedAction {
  completeTime: Date;
  claimAmount: Long;
}
export interface CompletedActionProtoMsg {
  typeUrl: "/quicksilver.airdrop.v1.CompletedAction";
  value: Uint8Array;
}
/** CompletedAction represents a claim action completed by the user. */
export interface CompletedActionAmino {
  complete_time?: Date;
  claim_amount: string;
}
export interface CompletedActionAminoMsg {
  type: "/quicksilver.airdrop.v1.CompletedAction";
  value: CompletedActionAmino;
}
/** CompletedAction represents a claim action completed by the user. */
export interface CompletedActionSDKType {
  complete_time: Date;
  claim_amount: Long;
}
function createBaseZoneDrop(): ZoneDrop {
  return {
    chainId: "",
    startTime: new Date(),
    duration: Duration.fromPartial({}),
    decay: Duration.fromPartial({}),
    allocation: Long.UZERO,
    actions: [],
    isConcluded: false
  };
}
export const ZoneDrop = {
  typeUrl: "/quicksilver.airdrop.v1.ZoneDrop",
  encode(message: ZoneDrop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.decay !== undefined) {
      Duration.encode(message.decay, writer.uint32(34).fork()).ldelim();
    }
    if (!message.allocation.isZero()) {
      writer.uint32(40).uint64(message.allocation);
    }
    for (const v of message.actions) {
      writer.uint32(50).string(v!);
    }
    if (message.isConcluded === true) {
      writer.uint32(56).bool(message.isConcluded);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ZoneDrop {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZoneDrop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.decay = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.allocation = (reader.uint64() as Long);
          break;
        case 6:
          message.actions.push(reader.string());
          break;
        case 7:
          message.isConcluded = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ZoneDrop {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      decay: isSet(object.decay) ? Duration.fromJSON(object.decay) : undefined,
      allocation: isSet(object.allocation) ? Long.fromValue(object.allocation) : Long.UZERO,
      actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => String(e)) : [],
      isConcluded: isSet(object.isConcluded) ? Boolean(object.isConcluded) : false
    };
  },
  toJSON(message: ZoneDrop): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    message.decay !== undefined && (obj.decay = message.decay ? Duration.toJSON(message.decay) : undefined);
    message.allocation !== undefined && (obj.allocation = (message.allocation || Long.UZERO).toString());
    if (message.actions) {
      obj.actions = message.actions.map(e => e);
    } else {
      obj.actions = [];
    }
    message.isConcluded !== undefined && (obj.isConcluded = message.isConcluded);
    return obj;
  },
  fromPartial(object: DeepPartial<ZoneDrop>): ZoneDrop {
    const message = createBaseZoneDrop();
    message.chainId = object.chainId ?? "";
    message.startTime = object.startTime ?? undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.decay = object.decay !== undefined && object.decay !== null ? Duration.fromPartial(object.decay) : undefined;
    message.allocation = object.allocation !== undefined && object.allocation !== null ? Long.fromValue(object.allocation) : Long.UZERO;
    message.actions = object.actions?.map(e => e) || [];
    message.isConcluded = object.isConcluded ?? false;
    return message;
  },
  fromAmino(object: ZoneDropAmino): ZoneDrop {
    return {
      chainId: object.chain_id,
      startTime: object.start_time,
      duration: object?.duration ? Duration.fromAmino(object.duration) : undefined,
      decay: object?.decay ? Duration.fromAmino(object.decay) : undefined,
      allocation: Long.fromString(object.allocation),
      actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => e) : [],
      isConcluded: object.is_concluded
    };
  },
  toAmino(message: ZoneDrop): ZoneDropAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.start_time = message.startTime;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.decay = message.decay ? Duration.toAmino(message.decay) : undefined;
    obj.allocation = message.allocation ? message.allocation.toString() : undefined;
    if (message.actions) {
      obj.actions = message.actions.map(e => e);
    } else {
      obj.actions = [];
    }
    obj.is_concluded = message.isConcluded;
    return obj;
  },
  fromAminoMsg(object: ZoneDropAminoMsg): ZoneDrop {
    return ZoneDrop.fromAmino(object.value);
  },
  fromProtoMsg(message: ZoneDropProtoMsg): ZoneDrop {
    return ZoneDrop.decode(message.value);
  },
  toProto(message: ZoneDrop): Uint8Array {
    return ZoneDrop.encode(message).finish();
  },
  toProtoMsg(message: ZoneDrop): ZoneDropProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.ZoneDrop",
      value: ZoneDrop.encode(message).finish()
    };
  }
};
function createBaseClaimRecord_ActionsCompletedEntry(): ClaimRecord_ActionsCompletedEntry {
  return {
    key: 0,
    value: CompletedAction.fromPartial({})
  };
}
export const ClaimRecord_ActionsCompletedEntry = {
  encode(message: ClaimRecord_ActionsCompletedEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      CompletedAction.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimRecord_ActionsCompletedEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimRecord_ActionsCompletedEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = CompletedAction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClaimRecord_ActionsCompletedEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? CompletedAction.fromJSON(object.value) : undefined
    };
  },
  toJSON(message: ClaimRecord_ActionsCompletedEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = message.value ? CompletedAction.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ClaimRecord_ActionsCompletedEntry>): ClaimRecord_ActionsCompletedEntry {
    const message = createBaseClaimRecord_ActionsCompletedEntry();
    message.key = object.key ?? 0;
    message.value = object.value !== undefined && object.value !== null ? CompletedAction.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: ClaimRecord_ActionsCompletedEntryAmino): ClaimRecord_ActionsCompletedEntry {
    return {
      key: object.key,
      value: object?.value ? CompletedAction.fromAmino(object.value) : undefined
    };
  },
  toAmino(message: ClaimRecord_ActionsCompletedEntry): ClaimRecord_ActionsCompletedEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value ? CompletedAction.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: ClaimRecord_ActionsCompletedEntryAminoMsg): ClaimRecord_ActionsCompletedEntry {
    return ClaimRecord_ActionsCompletedEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimRecord_ActionsCompletedEntryProtoMsg): ClaimRecord_ActionsCompletedEntry {
    return ClaimRecord_ActionsCompletedEntry.decode(message.value);
  },
  toProto(message: ClaimRecord_ActionsCompletedEntry): Uint8Array {
    return ClaimRecord_ActionsCompletedEntry.encode(message).finish();
  }
};
function createBaseClaimRecord(): ClaimRecord {
  return {
    chainId: "",
    address: "",
    actionsCompleted: {},
    maxAllocation: Long.UZERO,
    baseValue: Long.UZERO
  };
}
export const ClaimRecord = {
  typeUrl: "/quicksilver.airdrop.v1.ClaimRecord",
  encode(message: ClaimRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    Object.entries(message.actionsCompleted).forEach(([key, value]) => {
      ClaimRecord_ActionsCompletedEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    if (!message.maxAllocation.isZero()) {
      writer.uint32(32).uint64(message.maxAllocation);
    }
    if (!message.baseValue.isZero()) {
      writer.uint32(40).uint64(message.baseValue);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          const entry3 = ClaimRecord_ActionsCompletedEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.actionsCompleted[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.maxAllocation = (reader.uint64() as Long);
          break;
        case 5:
          message.baseValue = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClaimRecord {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      address: isSet(object.address) ? String(object.address) : "",
      actionsCompleted: isObject(object.actionsCompleted) ? Object.entries(object.actionsCompleted).reduce<{
        [key: number]: CompletedAction;
      }>((acc, [key, value]) => {
        acc[Number(key)] = CompletedAction.fromJSON(value);
        return acc;
      }, {}) : {},
      maxAllocation: isSet(object.maxAllocation) ? Long.fromValue(object.maxAllocation) : Long.UZERO,
      baseValue: isSet(object.baseValue) ? Long.fromValue(object.baseValue) : Long.UZERO
    };
  },
  toJSON(message: ClaimRecord): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.address !== undefined && (obj.address = message.address);
    obj.actionsCompleted = {};
    if (message.actionsCompleted) {
      Object.entries(message.actionsCompleted).forEach(([k, v]) => {
        obj.actionsCompleted[k] = CompletedAction.toJSON(v);
      });
    }
    message.maxAllocation !== undefined && (obj.maxAllocation = (message.maxAllocation || Long.UZERO).toString());
    message.baseValue !== undefined && (obj.baseValue = (message.baseValue || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ClaimRecord>): ClaimRecord {
    const message = createBaseClaimRecord();
    message.chainId = object.chainId ?? "";
    message.address = object.address ?? "";
    message.actionsCompleted = Object.entries(object.actionsCompleted ?? {}).reduce<{
      [key: number]: CompletedAction;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = CompletedAction.fromPartial(value);
      }
      return acc;
    }, {});
    message.maxAllocation = object.maxAllocation !== undefined && object.maxAllocation !== null ? Long.fromValue(object.maxAllocation) : Long.UZERO;
    message.baseValue = object.baseValue !== undefined && object.baseValue !== null ? Long.fromValue(object.baseValue) : Long.UZERO;
    return message;
  },
  fromAmino(object: ClaimRecordAmino): ClaimRecord {
    return {
      chainId: object.chain_id,
      address: object.address,
      actionsCompleted: isObject(object.actions_completed) ? Object.entries(object.actions_completed).reduce<{
        [key: number]: CompletedAction;
      }>((acc, [key, value]) => {
        acc[Number(key)] = CompletedAction.fromAmino(value);
        return acc;
      }, {}) : {},
      maxAllocation: Long.fromString(object.max_allocation),
      baseValue: Long.fromString(object.base_value)
    };
  },
  toAmino(message: ClaimRecord): ClaimRecordAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.address = message.address;
    obj.actions_completed = {};
    if (message.actionsCompleted) {
      Object.entries(message.actionsCompleted).forEach(([k, v]) => {
        obj.actions_completed[k] = CompletedAction.toAmino(v);
      });
    }
    obj.max_allocation = message.maxAllocation ? message.maxAllocation.toString() : undefined;
    obj.base_value = message.baseValue ? message.baseValue.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ClaimRecordAminoMsg): ClaimRecord {
    return ClaimRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimRecordProtoMsg): ClaimRecord {
    return ClaimRecord.decode(message.value);
  },
  toProto(message: ClaimRecord): Uint8Array {
    return ClaimRecord.encode(message).finish();
  },
  toProtoMsg(message: ClaimRecord): ClaimRecordProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.ClaimRecord",
      value: ClaimRecord.encode(message).finish()
    };
  }
};
function createBaseCompletedAction(): CompletedAction {
  return {
    completeTime: new Date(),
    claimAmount: Long.UZERO
  };
}
export const CompletedAction = {
  typeUrl: "/quicksilver.airdrop.v1.CompletedAction",
  encode(message: CompletedAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completeTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completeTime), writer.uint32(10).fork()).ldelim();
    }
    if (!message.claimAmount.isZero()) {
      writer.uint32(16).uint64(message.claimAmount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CompletedAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompletedAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completeTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.claimAmount = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CompletedAction {
    return {
      completeTime: isSet(object.completeTime) ? fromJsonTimestamp(object.completeTime) : undefined,
      claimAmount: isSet(object.claimAmount) ? Long.fromValue(object.claimAmount) : Long.UZERO
    };
  },
  toJSON(message: CompletedAction): unknown {
    const obj: any = {};
    message.completeTime !== undefined && (obj.completeTime = message.completeTime.toISOString());
    message.claimAmount !== undefined && (obj.claimAmount = (message.claimAmount || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<CompletedAction>): CompletedAction {
    const message = createBaseCompletedAction();
    message.completeTime = object.completeTime ?? undefined;
    message.claimAmount = object.claimAmount !== undefined && object.claimAmount !== null ? Long.fromValue(object.claimAmount) : Long.UZERO;
    return message;
  },
  fromAmino(object: CompletedActionAmino): CompletedAction {
    return {
      completeTime: object.complete_time,
      claimAmount: Long.fromString(object.claim_amount)
    };
  },
  toAmino(message: CompletedAction): CompletedActionAmino {
    const obj: any = {};
    obj.complete_time = message.completeTime;
    obj.claim_amount = message.claimAmount ? message.claimAmount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CompletedActionAminoMsg): CompletedAction {
    return CompletedAction.fromAmino(object.value);
  },
  fromProtoMsg(message: CompletedActionProtoMsg): CompletedAction {
    return CompletedAction.decode(message.value);
  },
  toProto(message: CompletedAction): Uint8Array {
    return CompletedAction.encode(message).finish();
  },
  toProtoMsg(message: CompletedAction): CompletedActionProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.CompletedAction",
      value: CompletedAction.encode(message).finish()
    };
  }
};