import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Zone {
  connection_id: string;
  chain_id: string;
  deposit_address: ICAAccount;
  withdrawal_address: ICAAccount;
  performance_address: ICAAccount;
  delegation_address: ICAAccount;
  account_prefix: string;
  local_denom: string;
  base_denom: string;
  redemption_rate: string;
  last_redemption_rate: string;
  validators: Validator[];
  aggregate_intent: ValidatorIntent[];
  /** deprecated */
  multi_send: boolean;
  liquidity_module: boolean;
  withdrawal_waitgroup: number;
  ibc_next_validators_hash: Uint8Array;
  validator_selection_allocation: Long;
  holdings_allocation: Long;
  /** deprecated */
  last_epoch_height: Long;
  tvl: string;
  unbonding_period: Long;
  messages_per_tx: Long;
  decimals: Long;
  unbonding_enabled: boolean;
  deposits_enabled: boolean;
  return_to_sender: boolean;
  is118: boolean;
  subzoneInfo: SubzoneInfo;
}
export interface ZoneProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.Zone";
  value: Uint8Array;
}
export interface ZoneAmino {
  connection_id: string;
  chain_id: string;
  deposit_address?: ICAAccountAmino;
  withdrawal_address?: ICAAccountAmino;
  performance_address?: ICAAccountAmino;
  delegation_address?: ICAAccountAmino;
  account_prefix: string;
  local_denom: string;
  base_denom: string;
  redemption_rate: string;
  last_redemption_rate: string;
  validators: ValidatorAmino[];
  aggregate_intent: ValidatorIntentAmino[];
  /** deprecated */
  multi_send: boolean;
  liquidity_module: boolean;
  withdrawal_waitgroup: number;
  ibc_next_validators_hash: Uint8Array;
  validator_selection_allocation: string;
  holdings_allocation: string;
  /** deprecated */
  last_epoch_height: string;
  tvl: string;
  unbonding_period: string;
  messages_per_tx: string;
  decimals: string;
  unbonding_enabled: boolean;
  deposits_enabled: boolean;
  return_to_sender: boolean;
  is_118: boolean;
  subzoneInfo?: SubzoneInfoAmino;
}
export interface ZoneAminoMsg {
  type: "/quicksilver.interchainstaking.v1.Zone";
  value: ZoneAmino;
}
export interface ZoneSDKType {
  connection_id: string;
  chain_id: string;
  deposit_address: ICAAccountSDKType;
  withdrawal_address: ICAAccountSDKType;
  performance_address: ICAAccountSDKType;
  delegation_address: ICAAccountSDKType;
  account_prefix: string;
  local_denom: string;
  base_denom: string;
  redemption_rate: string;
  last_redemption_rate: string;
  validators: ValidatorSDKType[];
  aggregate_intent: ValidatorIntentSDKType[];
  multi_send: boolean;
  liquidity_module: boolean;
  withdrawal_waitgroup: number;
  ibc_next_validators_hash: Uint8Array;
  validator_selection_allocation: Long;
  holdings_allocation: Long;
  last_epoch_height: Long;
  tvl: string;
  unbonding_period: Long;
  messages_per_tx: Long;
  decimals: Long;
  unbonding_enabled: boolean;
  deposits_enabled: boolean;
  return_to_sender: boolean;
  is_118: boolean;
  subzoneInfo: SubzoneInfoSDKType;
}
export interface SubzoneInfo {
  authority: string;
  base_chainID: string;
}
export interface SubzoneInfoProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.SubzoneInfo";
  value: Uint8Array;
}
export interface SubzoneInfoAmino {
  authority: string;
  base_chainID: string;
}
export interface SubzoneInfoAminoMsg {
  type: "/quicksilver.interchainstaking.v1.SubzoneInfo";
  value: SubzoneInfoAmino;
}
export interface SubzoneInfoSDKType {
  authority: string;
  base_chainID: string;
}
export interface LsmCaps {
  validator_cap: string;
  validator_bond_cap: string;
  global_cap: string;
}
export interface LsmCapsProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.LsmCaps";
  value: Uint8Array;
}
export interface LsmCapsAmino {
  validator_cap: string;
  validator_bond_cap: string;
  global_cap: string;
}
export interface LsmCapsAminoMsg {
  type: "/quicksilver.interchainstaking.v1.LsmCaps";
  value: LsmCapsAmino;
}
export interface LsmCapsSDKType {
  validator_cap: string;
  validator_bond_cap: string;
  global_cap: string;
}
export interface ICAAccount {
  address: string;
  /** balance defines the different coins this balance holds. */
  balance: Coin[];
  port_name: string;
  withdrawal_address: string;
  balance_waitgroup: number;
}
export interface ICAAccountProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.ICAAccount";
  value: Uint8Array;
}
export interface ICAAccountAmino {
  address: string;
  /** balance defines the different coins this balance holds. */
  balance: CoinAmino[];
  port_name: string;
  withdrawal_address: string;
  balance_waitgroup: number;
}
export interface ICAAccountAminoMsg {
  type: "/quicksilver.interchainstaking.v1.ICAAccount";
  value: ICAAccountAmino;
}
export interface ICAAccountSDKType {
  address: string;
  balance: CoinSDKType[];
  port_name: string;
  withdrawal_address: string;
  balance_waitgroup: number;
}
export interface Distribution {
  valoper: string;
  amount: Long;
}
export interface DistributionProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.Distribution";
  value: Uint8Array;
}
export interface DistributionAmino {
  valoper: string;
  amount: string;
}
export interface DistributionAminoMsg {
  type: "/quicksilver.interchainstaking.v1.Distribution";
  value: DistributionAmino;
}
export interface DistributionSDKType {
  valoper: string;
  amount: Long;
}
export interface WithdrawalRecord {
  chain_id: string;
  delegator: string;
  distribution: Distribution[];
  recipient: string;
  amount: Coin[];
  burn_amount: Coin;
  txhash: string;
  status: number;
  completion_time: Date;
  requeued: boolean;
  acknowledged: boolean;
  epoch_number: Long;
}
export interface WithdrawalRecordProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.WithdrawalRecord";
  value: Uint8Array;
}
export interface WithdrawalRecordAmino {
  chain_id: string;
  delegator: string;
  distribution: DistributionAmino[];
  recipient: string;
  amount: CoinAmino[];
  burn_amount?: CoinAmino;
  txhash: string;
  status: number;
  completion_time?: Date;
  requeued: boolean;
  acknowledged: boolean;
  epoch_number: string;
}
export interface WithdrawalRecordAminoMsg {
  type: "/quicksilver.interchainstaking.v1.WithdrawalRecord";
  value: WithdrawalRecordAmino;
}
export interface WithdrawalRecordSDKType {
  chain_id: string;
  delegator: string;
  distribution: DistributionSDKType[];
  recipient: string;
  amount: CoinSDKType[];
  burn_amount: CoinSDKType;
  txhash: string;
  status: number;
  completion_time: Date;
  requeued: boolean;
  acknowledged: boolean;
  epoch_number: Long;
}
export interface UnbondingRecord {
  chain_id: string;
  epoch_number: Long;
  validator: string;
  related_txhash: string[];
}
export interface UnbondingRecordProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.UnbondingRecord";
  value: Uint8Array;
}
export interface UnbondingRecordAmino {
  chain_id: string;
  epoch_number: string;
  validator: string;
  related_txhash: string[];
}
export interface UnbondingRecordAminoMsg {
  type: "/quicksilver.interchainstaking.v1.UnbondingRecord";
  value: UnbondingRecordAmino;
}
export interface UnbondingRecordSDKType {
  chain_id: string;
  epoch_number: Long;
  validator: string;
  related_txhash: string[];
}
export interface RedelegationRecord {
  chain_id: string;
  epoch_number: Long;
  source: string;
  destination: string;
  amount: Long;
  completion_time: Date;
}
export interface RedelegationRecordProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.RedelegationRecord";
  value: Uint8Array;
}
export interface RedelegationRecordAmino {
  chain_id: string;
  epoch_number: string;
  source: string;
  destination: string;
  amount: string;
  completion_time?: Date;
}
export interface RedelegationRecordAminoMsg {
  type: "/quicksilver.interchainstaking.v1.RedelegationRecord";
  value: RedelegationRecordAmino;
}
export interface RedelegationRecordSDKType {
  chain_id: string;
  epoch_number: Long;
  source: string;
  destination: string;
  amount: Long;
  completion_time: Date;
}
export interface TransferRecord {
  sender: string;
  recipient: string;
  amount: Coin;
}
export interface TransferRecordProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.TransferRecord";
  value: Uint8Array;
}
export interface TransferRecordAmino {
  sender: string;
  recipient: string;
  amount?: CoinAmino;
}
export interface TransferRecordAminoMsg {
  type: "/quicksilver.interchainstaking.v1.TransferRecord";
  value: TransferRecordAmino;
}
export interface TransferRecordSDKType {
  sender: string;
  recipient: string;
  amount: CoinSDKType;
}
export interface Validator {
  valoper_address: string;
  commission_rate: string;
  delegator_shares: string;
  voting_power: string;
  score: string;
  status: string;
  jailed: boolean;
  tombstoned: boolean;
  jailed_since: Date;
  /** Number of shares self bonded from the validator */
  validator_bond_shares: string;
  /** Number of shares either tokenized or owned by a liquid staking provider */
  liquid_shares: string;
}
export interface ValidatorProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.Validator";
  value: Uint8Array;
}
export interface ValidatorAmino {
  valoper_address: string;
  commission_rate: string;
  delegator_shares: string;
  voting_power: string;
  score: string;
  status: string;
  jailed: boolean;
  tombstoned: boolean;
  jailed_since?: Date;
  /** Number of shares self bonded from the validator */
  validator_bond_shares: string;
  /** Number of shares either tokenized or owned by a liquid staking provider */
  liquid_shares: string;
}
export interface ValidatorAminoMsg {
  type: "/quicksilver.interchainstaking.v1.Validator";
  value: ValidatorAmino;
}
export interface ValidatorSDKType {
  valoper_address: string;
  commission_rate: string;
  delegator_shares: string;
  voting_power: string;
  score: string;
  status: string;
  jailed: boolean;
  tombstoned: boolean;
  jailed_since: Date;
  validator_bond_shares: string;
  liquid_shares: string;
}
export interface DelegatorIntent {
  delegator: string;
  intents: ValidatorIntent[];
}
export interface DelegatorIntentProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.DelegatorIntent";
  value: Uint8Array;
}
export interface DelegatorIntentAmino {
  delegator: string;
  intents: ValidatorIntentAmino[];
}
export interface DelegatorIntentAminoMsg {
  type: "/quicksilver.interchainstaking.v1.DelegatorIntent";
  value: DelegatorIntentAmino;
}
export interface DelegatorIntentSDKType {
  delegator: string;
  intents: ValidatorIntentSDKType[];
}
export interface ValidatorIntent {
  valoper_address: string;
  weight: string;
}
export interface ValidatorIntentProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.ValidatorIntent";
  value: Uint8Array;
}
export interface ValidatorIntentAmino {
  valoper_address: string;
  weight: string;
}
export interface ValidatorIntentAminoMsg {
  type: "/quicksilver.interchainstaking.v1.ValidatorIntent";
  value: ValidatorIntentAmino;
}
export interface ValidatorIntentSDKType {
  valoper_address: string;
  weight: string;
}
export interface Delegation {
  delegation_address: string;
  validator_address: string;
  amount: Coin;
  height: Long;
  redelegation_end: Long;
}
export interface DelegationProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.Delegation";
  value: Uint8Array;
}
export interface DelegationAmino {
  delegation_address: string;
  validator_address: string;
  amount?: CoinAmino;
  height: string;
  redelegation_end: string;
}
export interface DelegationAminoMsg {
  type: "/quicksilver.interchainstaking.v1.Delegation";
  value: DelegationAmino;
}
export interface DelegationSDKType {
  delegation_address: string;
  validator_address: string;
  amount: CoinSDKType;
  height: Long;
  redelegation_end: Long;
}
export interface PortConnectionTuple {
  connection_id: string;
  port_id: string;
}
export interface PortConnectionTupleProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.PortConnectionTuple";
  value: Uint8Array;
}
export interface PortConnectionTupleAmino {
  connection_id: string;
  port_id: string;
}
export interface PortConnectionTupleAminoMsg {
  type: "/quicksilver.interchainstaking.v1.PortConnectionTuple";
  value: PortConnectionTupleAmino;
}
export interface PortConnectionTupleSDKType {
  connection_id: string;
  port_id: string;
}
export interface Receipt {
  chain_id: string;
  sender: string;
  txhash: string;
  amount: Coin[];
  first_seen?: Date;
  completed?: Date;
}
export interface ReceiptProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.Receipt";
  value: Uint8Array;
}
export interface ReceiptAmino {
  chain_id: string;
  sender: string;
  txhash: string;
  amount: CoinAmino[];
  first_seen?: Date;
  completed?: Date;
}
export interface ReceiptAminoMsg {
  type: "/quicksilver.interchainstaking.v1.Receipt";
  value: ReceiptAmino;
}
export interface ReceiptSDKType {
  chain_id: string;
  sender: string;
  txhash: string;
  amount: CoinSDKType[];
  first_seen?: Date;
  completed?: Date;
}
function createBaseZone(): Zone {
  return {
    connection_id: "",
    chain_id: "",
    deposit_address: ICAAccount.fromPartial({}),
    withdrawal_address: ICAAccount.fromPartial({}),
    performance_address: ICAAccount.fromPartial({}),
    delegation_address: ICAAccount.fromPartial({}),
    account_prefix: "",
    local_denom: "",
    base_denom: "",
    redemption_rate: "",
    last_redemption_rate: "",
    validators: [],
    aggregate_intent: [],
    multi_send: false,
    liquidity_module: false,
    withdrawal_waitgroup: 0,
    ibc_next_validators_hash: new Uint8Array(),
    validator_selection_allocation: Long.UZERO,
    holdings_allocation: Long.UZERO,
    last_epoch_height: Long.ZERO,
    tvl: "",
    unbonding_period: Long.ZERO,
    messages_per_tx: Long.ZERO,
    decimals: Long.ZERO,
    unbonding_enabled: false,
    deposits_enabled: false,
    return_to_sender: false,
    is118: false,
    subzoneInfo: SubzoneInfo.fromPartial({})
  };
}
export const Zone = {
  typeUrl: "/quicksilver.interchainstaking.v1.Zone",
  encode(message: Zone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection_id !== "") {
      writer.uint32(10).string(message.connection_id);
    }
    if (message.chain_id !== "") {
      writer.uint32(18).string(message.chain_id);
    }
    if (message.deposit_address !== undefined) {
      ICAAccount.encode(message.deposit_address, writer.uint32(26).fork()).ldelim();
    }
    if (message.withdrawal_address !== undefined) {
      ICAAccount.encode(message.withdrawal_address, writer.uint32(34).fork()).ldelim();
    }
    if (message.performance_address !== undefined) {
      ICAAccount.encode(message.performance_address, writer.uint32(42).fork()).ldelim();
    }
    if (message.delegation_address !== undefined) {
      ICAAccount.encode(message.delegation_address, writer.uint32(50).fork()).ldelim();
    }
    if (message.account_prefix !== "") {
      writer.uint32(58).string(message.account_prefix);
    }
    if (message.local_denom !== "") {
      writer.uint32(66).string(message.local_denom);
    }
    if (message.base_denom !== "") {
      writer.uint32(74).string(message.base_denom);
    }
    if (message.redemption_rate !== "") {
      writer.uint32(82).string(message.redemption_rate);
    }
    if (message.last_redemption_rate !== "") {
      writer.uint32(90).string(message.last_redemption_rate);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.aggregate_intent) {
      ValidatorIntent.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.multi_send === true) {
      writer.uint32(112).bool(message.multi_send);
    }
    if (message.liquidity_module === true) {
      writer.uint32(120).bool(message.liquidity_module);
    }
    if (message.withdrawal_waitgroup !== 0) {
      writer.uint32(128).uint32(message.withdrawal_waitgroup);
    }
    if (message.ibc_next_validators_hash.length !== 0) {
      writer.uint32(138).bytes(message.ibc_next_validators_hash);
    }
    if (!message.validator_selection_allocation.isZero()) {
      writer.uint32(144).uint64(message.validator_selection_allocation);
    }
    if (!message.holdings_allocation.isZero()) {
      writer.uint32(152).uint64(message.holdings_allocation);
    }
    if (!message.last_epoch_height.isZero()) {
      writer.uint32(160).int64(message.last_epoch_height);
    }
    if (message.tvl !== "") {
      writer.uint32(170).string(message.tvl);
    }
    if (!message.unbonding_period.isZero()) {
      writer.uint32(176).int64(message.unbonding_period);
    }
    if (!message.messages_per_tx.isZero()) {
      writer.uint32(184).int64(message.messages_per_tx);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(192).int64(message.decimals);
    }
    if (message.unbonding_enabled === true) {
      writer.uint32(200).bool(message.unbonding_enabled);
    }
    if (message.deposits_enabled === true) {
      writer.uint32(208).bool(message.deposits_enabled);
    }
    if (message.return_to_sender === true) {
      writer.uint32(216).bool(message.return_to_sender);
    }
    if (message.is118 === true) {
      writer.uint32(224).bool(message.is118);
    }
    if (message.subzoneInfo !== undefined) {
      SubzoneInfo.encode(message.subzoneInfo, writer.uint32(234).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Zone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection_id = reader.string();
          break;
        case 2:
          message.chain_id = reader.string();
          break;
        case 3:
          message.deposit_address = ICAAccount.decode(reader, reader.uint32());
          break;
        case 4:
          message.withdrawal_address = ICAAccount.decode(reader, reader.uint32());
          break;
        case 5:
          message.performance_address = ICAAccount.decode(reader, reader.uint32());
          break;
        case 6:
          message.delegation_address = ICAAccount.decode(reader, reader.uint32());
          break;
        case 7:
          message.account_prefix = reader.string();
          break;
        case 8:
          message.local_denom = reader.string();
          break;
        case 9:
          message.base_denom = reader.string();
          break;
        case 10:
          message.redemption_rate = reader.string();
          break;
        case 11:
          message.last_redemption_rate = reader.string();
          break;
        case 12:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 13:
          message.aggregate_intent.push(ValidatorIntent.decode(reader, reader.uint32()));
          break;
        case 14:
          message.multi_send = reader.bool();
          break;
        case 15:
          message.liquidity_module = reader.bool();
          break;
        case 16:
          message.withdrawal_waitgroup = reader.uint32();
          break;
        case 17:
          message.ibc_next_validators_hash = reader.bytes();
          break;
        case 18:
          message.validator_selection_allocation = (reader.uint64() as Long);
          break;
        case 19:
          message.holdings_allocation = (reader.uint64() as Long);
          break;
        case 20:
          message.last_epoch_height = (reader.int64() as Long);
          break;
        case 21:
          message.tvl = reader.string();
          break;
        case 22:
          message.unbonding_period = (reader.int64() as Long);
          break;
        case 23:
          message.messages_per_tx = (reader.int64() as Long);
          break;
        case 24:
          message.decimals = (reader.int64() as Long);
          break;
        case 25:
          message.unbonding_enabled = reader.bool();
          break;
        case 26:
          message.deposits_enabled = reader.bool();
          break;
        case 27:
          message.return_to_sender = reader.bool();
          break;
        case 28:
          message.is118 = reader.bool();
          break;
        case 29:
          message.subzoneInfo = SubzoneInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Zone {
    return {
      connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      deposit_address: isSet(object.deposit_address) ? ICAAccount.fromJSON(object.deposit_address) : undefined,
      withdrawal_address: isSet(object.withdrawal_address) ? ICAAccount.fromJSON(object.withdrawal_address) : undefined,
      performance_address: isSet(object.performance_address) ? ICAAccount.fromJSON(object.performance_address) : undefined,
      delegation_address: isSet(object.delegation_address) ? ICAAccount.fromJSON(object.delegation_address) : undefined,
      account_prefix: isSet(object.account_prefix) ? String(object.account_prefix) : "",
      local_denom: isSet(object.local_denom) ? String(object.local_denom) : "",
      base_denom: isSet(object.base_denom) ? String(object.base_denom) : "",
      redemption_rate: isSet(object.redemption_rate) ? String(object.redemption_rate) : "",
      last_redemption_rate: isSet(object.last_redemption_rate) ? String(object.last_redemption_rate) : "",
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      aggregate_intent: Array.isArray(object?.aggregate_intent) ? object.aggregate_intent.map((e: any) => ValidatorIntent.fromJSON(e)) : [],
      multi_send: isSet(object.multi_send) ? Boolean(object.multi_send) : false,
      liquidity_module: isSet(object.liquidity_module) ? Boolean(object.liquidity_module) : false,
      withdrawal_waitgroup: isSet(object.withdrawal_waitgroup) ? Number(object.withdrawal_waitgroup) : 0,
      ibc_next_validators_hash: isSet(object.ibc_next_validators_hash) ? bytesFromBase64(object.ibc_next_validators_hash) : new Uint8Array(),
      validator_selection_allocation: isSet(object.validator_selection_allocation) ? Long.fromValue(object.validator_selection_allocation) : Long.UZERO,
      holdings_allocation: isSet(object.holdings_allocation) ? Long.fromValue(object.holdings_allocation) : Long.UZERO,
      last_epoch_height: isSet(object.last_epoch_height) ? Long.fromValue(object.last_epoch_height) : Long.ZERO,
      tvl: isSet(object.tvl) ? String(object.tvl) : "",
      unbonding_period: isSet(object.unbonding_period) ? Long.fromValue(object.unbonding_period) : Long.ZERO,
      messages_per_tx: isSet(object.messages_per_tx) ? Long.fromValue(object.messages_per_tx) : Long.ZERO,
      decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.ZERO,
      unbonding_enabled: isSet(object.unbonding_enabled) ? Boolean(object.unbonding_enabled) : false,
      deposits_enabled: isSet(object.deposits_enabled) ? Boolean(object.deposits_enabled) : false,
      return_to_sender: isSet(object.return_to_sender) ? Boolean(object.return_to_sender) : false,
      is118: isSet(object.is118) ? Boolean(object.is118) : false,
      subzoneInfo: isSet(object.subzoneInfo) ? SubzoneInfo.fromJSON(object.subzoneInfo) : undefined
    };
  },
  toJSON(message: Zone): unknown {
    const obj: any = {};
    message.connection_id !== undefined && (obj.connection_id = message.connection_id);
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.deposit_address !== undefined && (obj.deposit_address = message.deposit_address ? ICAAccount.toJSON(message.deposit_address) : undefined);
    message.withdrawal_address !== undefined && (obj.withdrawal_address = message.withdrawal_address ? ICAAccount.toJSON(message.withdrawal_address) : undefined);
    message.performance_address !== undefined && (obj.performance_address = message.performance_address ? ICAAccount.toJSON(message.performance_address) : undefined);
    message.delegation_address !== undefined && (obj.delegation_address = message.delegation_address ? ICAAccount.toJSON(message.delegation_address) : undefined);
    message.account_prefix !== undefined && (obj.account_prefix = message.account_prefix);
    message.local_denom !== undefined && (obj.local_denom = message.local_denom);
    message.base_denom !== undefined && (obj.base_denom = message.base_denom);
    message.redemption_rate !== undefined && (obj.redemption_rate = message.redemption_rate);
    message.last_redemption_rate !== undefined && (obj.last_redemption_rate = message.last_redemption_rate);
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    if (message.aggregate_intent) {
      obj.aggregate_intent = message.aggregate_intent.map(e => e ? ValidatorIntent.toJSON(e) : undefined);
    } else {
      obj.aggregate_intent = [];
    }
    message.multi_send !== undefined && (obj.multi_send = message.multi_send);
    message.liquidity_module !== undefined && (obj.liquidity_module = message.liquidity_module);
    message.withdrawal_waitgroup !== undefined && (obj.withdrawal_waitgroup = Math.round(message.withdrawal_waitgroup));
    message.ibc_next_validators_hash !== undefined && (obj.ibc_next_validators_hash = base64FromBytes(message.ibc_next_validators_hash !== undefined ? message.ibc_next_validators_hash : new Uint8Array()));
    message.validator_selection_allocation !== undefined && (obj.validator_selection_allocation = (message.validator_selection_allocation || Long.UZERO).toString());
    message.holdings_allocation !== undefined && (obj.holdings_allocation = (message.holdings_allocation || Long.UZERO).toString());
    message.last_epoch_height !== undefined && (obj.last_epoch_height = (message.last_epoch_height || Long.ZERO).toString());
    message.tvl !== undefined && (obj.tvl = message.tvl);
    message.unbonding_period !== undefined && (obj.unbonding_period = (message.unbonding_period || Long.ZERO).toString());
    message.messages_per_tx !== undefined && (obj.messages_per_tx = (message.messages_per_tx || Long.ZERO).toString());
    message.decimals !== undefined && (obj.decimals = (message.decimals || Long.ZERO).toString());
    message.unbonding_enabled !== undefined && (obj.unbonding_enabled = message.unbonding_enabled);
    message.deposits_enabled !== undefined && (obj.deposits_enabled = message.deposits_enabled);
    message.return_to_sender !== undefined && (obj.return_to_sender = message.return_to_sender);
    message.is118 !== undefined && (obj.is118 = message.is118);
    message.subzoneInfo !== undefined && (obj.subzoneInfo = message.subzoneInfo ? SubzoneInfo.toJSON(message.subzoneInfo) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Zone>): Zone {
    const message = createBaseZone();
    message.connection_id = object.connection_id ?? "";
    message.chain_id = object.chain_id ?? "";
    message.deposit_address = object.deposit_address !== undefined && object.deposit_address !== null ? ICAAccount.fromPartial(object.deposit_address) : undefined;
    message.withdrawal_address = object.withdrawal_address !== undefined && object.withdrawal_address !== null ? ICAAccount.fromPartial(object.withdrawal_address) : undefined;
    message.performance_address = object.performance_address !== undefined && object.performance_address !== null ? ICAAccount.fromPartial(object.performance_address) : undefined;
    message.delegation_address = object.delegation_address !== undefined && object.delegation_address !== null ? ICAAccount.fromPartial(object.delegation_address) : undefined;
    message.account_prefix = object.account_prefix ?? "";
    message.local_denom = object.local_denom ?? "";
    message.base_denom = object.base_denom ?? "";
    message.redemption_rate = object.redemption_rate ?? "";
    message.last_redemption_rate = object.last_redemption_rate ?? "";
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.aggregate_intent = object.aggregate_intent?.map(e => ValidatorIntent.fromPartial(e)) || [];
    message.multi_send = object.multi_send ?? false;
    message.liquidity_module = object.liquidity_module ?? false;
    message.withdrawal_waitgroup = object.withdrawal_waitgroup ?? 0;
    message.ibc_next_validators_hash = object.ibc_next_validators_hash ?? new Uint8Array();
    message.validator_selection_allocation = object.validator_selection_allocation !== undefined && object.validator_selection_allocation !== null ? Long.fromValue(object.validator_selection_allocation) : Long.UZERO;
    message.holdings_allocation = object.holdings_allocation !== undefined && object.holdings_allocation !== null ? Long.fromValue(object.holdings_allocation) : Long.UZERO;
    message.last_epoch_height = object.last_epoch_height !== undefined && object.last_epoch_height !== null ? Long.fromValue(object.last_epoch_height) : Long.ZERO;
    message.tvl = object.tvl ?? "";
    message.unbonding_period = object.unbonding_period !== undefined && object.unbonding_period !== null ? Long.fromValue(object.unbonding_period) : Long.ZERO;
    message.messages_per_tx = object.messages_per_tx !== undefined && object.messages_per_tx !== null ? Long.fromValue(object.messages_per_tx) : Long.ZERO;
    message.decimals = object.decimals !== undefined && object.decimals !== null ? Long.fromValue(object.decimals) : Long.ZERO;
    message.unbonding_enabled = object.unbonding_enabled ?? false;
    message.deposits_enabled = object.deposits_enabled ?? false;
    message.return_to_sender = object.return_to_sender ?? false;
    message.is118 = object.is118 ?? false;
    message.subzoneInfo = object.subzoneInfo !== undefined && object.subzoneInfo !== null ? SubzoneInfo.fromPartial(object.subzoneInfo) : undefined;
    return message;
  },
  fromAmino(object: ZoneAmino): Zone {
    return {
      connection_id: object.connection_id,
      chain_id: object.chain_id,
      deposit_address: object?.deposit_address ? ICAAccount.fromAmino(object.deposit_address) : undefined,
      withdrawal_address: object?.withdrawal_address ? ICAAccount.fromAmino(object.withdrawal_address) : undefined,
      performance_address: object?.performance_address ? ICAAccount.fromAmino(object.performance_address) : undefined,
      delegation_address: object?.delegation_address ? ICAAccount.fromAmino(object.delegation_address) : undefined,
      account_prefix: object.account_prefix,
      local_denom: object.local_denom,
      base_denom: object.base_denom,
      redemption_rate: object.redemption_rate,
      last_redemption_rate: object.last_redemption_rate,
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromAmino(e)) : [],
      aggregate_intent: Array.isArray(object?.aggregate_intent) ? object.aggregate_intent.map((e: any) => ValidatorIntent.fromAmino(e)) : [],
      multi_send: object.multi_send,
      liquidity_module: object.liquidity_module,
      withdrawal_waitgroup: object.withdrawal_waitgroup,
      ibc_next_validators_hash: object.ibc_next_validators_hash,
      validator_selection_allocation: Long.fromString(object.validator_selection_allocation),
      holdings_allocation: Long.fromString(object.holdings_allocation),
      last_epoch_height: Long.fromString(object.last_epoch_height),
      tvl: object.tvl,
      unbonding_period: Long.fromString(object.unbonding_period),
      messages_per_tx: Long.fromString(object.messages_per_tx),
      decimals: Long.fromString(object.decimals),
      unbonding_enabled: object.unbonding_enabled,
      deposits_enabled: object.deposits_enabled,
      return_to_sender: object.return_to_sender,
      is_118: object.is_118,
      subzoneInfo: object?.subzoneInfo ? SubzoneInfo.fromAmino(object.subzoneInfo) : undefined
    };
  },
  toAmino(message: Zone): ZoneAmino {
    const obj: any = {};
    obj.connection_id = message.connection_id;
    obj.chain_id = message.chain_id;
    obj.deposit_address = message.deposit_address ? ICAAccount.toAmino(message.deposit_address) : undefined;
    obj.withdrawal_address = message.withdrawal_address ? ICAAccount.toAmino(message.withdrawal_address) : undefined;
    obj.performance_address = message.performance_address ? ICAAccount.toAmino(message.performance_address) : undefined;
    obj.delegation_address = message.delegation_address ? ICAAccount.toAmino(message.delegation_address) : undefined;
    obj.account_prefix = message.account_prefix;
    obj.local_denom = message.local_denom;
    obj.base_denom = message.base_denom;
    obj.redemption_rate = message.redemption_rate;
    obj.last_redemption_rate = message.last_redemption_rate;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = [];
    }
    if (message.aggregate_intent) {
      obj.aggregate_intent = message.aggregate_intent.map(e => e ? ValidatorIntent.toAmino(e) : undefined);
    } else {
      obj.aggregate_intent = [];
    }
    obj.multi_send = message.multi_send;
    obj.liquidity_module = message.liquidity_module;
    obj.withdrawal_waitgroup = message.withdrawal_waitgroup;
    obj.ibc_next_validators_hash = message.ibc_next_validators_hash;
    obj.validator_selection_allocation = message.validator_selection_allocation ? message.validator_selection_allocation.toString() : undefined;
    obj.holdings_allocation = message.holdings_allocation ? message.holdings_allocation.toString() : undefined;
    obj.last_epoch_height = message.last_epoch_height ? message.last_epoch_height.toString() : undefined;
    obj.tvl = message.tvl;
    obj.unbonding_period = message.unbonding_period ? message.unbonding_period.toString() : undefined;
    obj.messages_per_tx = message.messages_per_tx ? message.messages_per_tx.toString() : undefined;
    obj.decimals = message.decimals ? message.decimals.toString() : undefined;
    obj.unbonding_enabled = message.unbonding_enabled;
    obj.deposits_enabled = message.deposits_enabled;
    obj.return_to_sender = message.return_to_sender;
    obj.is_118 = message.is_118;
    obj.subzoneInfo = message.subzoneInfo ? SubzoneInfo.toAmino(message.subzoneInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: ZoneAminoMsg): Zone {
    return Zone.fromAmino(object.value);
  },
  fromProtoMsg(message: ZoneProtoMsg): Zone {
    return Zone.decode(message.value);
  },
  toProto(message: Zone): Uint8Array {
    return Zone.encode(message).finish();
  },
  toProtoMsg(message: Zone): ZoneProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.Zone",
      value: Zone.encode(message).finish()
    };
  }
};
function createBaseSubzoneInfo(): SubzoneInfo {
  return {
    authority: "",
    base_chainID: ""
  };
}
export const SubzoneInfo = {
  typeUrl: "/quicksilver.interchainstaking.v1.SubzoneInfo",
  encode(message: SubzoneInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.base_chainID !== "") {
      writer.uint32(18).string(message.base_chainID);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SubzoneInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubzoneInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.base_chainID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SubzoneInfo {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      base_chainID: isSet(object.base_chainID) ? String(object.base_chainID) : ""
    };
  },
  toJSON(message: SubzoneInfo): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.base_chainID !== undefined && (obj.base_chainID = message.base_chainID);
    return obj;
  },
  fromPartial(object: DeepPartial<SubzoneInfo>): SubzoneInfo {
    const message = createBaseSubzoneInfo();
    message.authority = object.authority ?? "";
    message.base_chainID = object.base_chainID ?? "";
    return message;
  },
  fromAmino(object: SubzoneInfoAmino): SubzoneInfo {
    return {
      authority: object.authority,
      base_chainID: object.base_chainID
    };
  },
  toAmino(message: SubzoneInfo): SubzoneInfoAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.base_chainID = message.base_chainID;
    return obj;
  },
  fromAminoMsg(object: SubzoneInfoAminoMsg): SubzoneInfo {
    return SubzoneInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: SubzoneInfoProtoMsg): SubzoneInfo {
    return SubzoneInfo.decode(message.value);
  },
  toProto(message: SubzoneInfo): Uint8Array {
    return SubzoneInfo.encode(message).finish();
  },
  toProtoMsg(message: SubzoneInfo): SubzoneInfoProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.SubzoneInfo",
      value: SubzoneInfo.encode(message).finish()
    };
  }
};
function createBaseLsmCaps(): LsmCaps {
  return {
    validator_cap: "",
    validator_bond_cap: "",
    global_cap: ""
  };
}
export const LsmCaps = {
  typeUrl: "/quicksilver.interchainstaking.v1.LsmCaps",
  encode(message: LsmCaps, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_cap !== "") {
      writer.uint32(10).string(message.validator_cap);
    }
    if (message.validator_bond_cap !== "") {
      writer.uint32(18).string(message.validator_bond_cap);
    }
    if (message.global_cap !== "") {
      writer.uint32(26).string(message.global_cap);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LsmCaps {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLsmCaps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_cap = reader.string();
          break;
        case 2:
          message.validator_bond_cap = reader.string();
          break;
        case 3:
          message.global_cap = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LsmCaps {
    return {
      validator_cap: isSet(object.validator_cap) ? String(object.validator_cap) : "",
      validator_bond_cap: isSet(object.validator_bond_cap) ? String(object.validator_bond_cap) : "",
      global_cap: isSet(object.global_cap) ? String(object.global_cap) : ""
    };
  },
  toJSON(message: LsmCaps): unknown {
    const obj: any = {};
    message.validator_cap !== undefined && (obj.validator_cap = message.validator_cap);
    message.validator_bond_cap !== undefined && (obj.validator_bond_cap = message.validator_bond_cap);
    message.global_cap !== undefined && (obj.global_cap = message.global_cap);
    return obj;
  },
  fromPartial(object: DeepPartial<LsmCaps>): LsmCaps {
    const message = createBaseLsmCaps();
    message.validator_cap = object.validator_cap ?? "";
    message.validator_bond_cap = object.validator_bond_cap ?? "";
    message.global_cap = object.global_cap ?? "";
    return message;
  },
  fromAmino(object: LsmCapsAmino): LsmCaps {
    return {
      validator_cap: object.validator_cap,
      validator_bond_cap: object.validator_bond_cap,
      global_cap: object.global_cap
    };
  },
  toAmino(message: LsmCaps): LsmCapsAmino {
    const obj: any = {};
    obj.validator_cap = message.validator_cap;
    obj.validator_bond_cap = message.validator_bond_cap;
    obj.global_cap = message.global_cap;
    return obj;
  },
  fromAminoMsg(object: LsmCapsAminoMsg): LsmCaps {
    return LsmCaps.fromAmino(object.value);
  },
  fromProtoMsg(message: LsmCapsProtoMsg): LsmCaps {
    return LsmCaps.decode(message.value);
  },
  toProto(message: LsmCaps): Uint8Array {
    return LsmCaps.encode(message).finish();
  },
  toProtoMsg(message: LsmCaps): LsmCapsProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.LsmCaps",
      value: LsmCaps.encode(message).finish()
    };
  }
};
function createBaseICAAccount(): ICAAccount {
  return {
    address: "",
    balance: [],
    port_name: "",
    withdrawal_address: "",
    balance_waitgroup: 0
  };
}
export const ICAAccount = {
  typeUrl: "/quicksilver.interchainstaking.v1.ICAAccount",
  encode(message: ICAAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.balance) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.port_name !== "") {
      writer.uint32(26).string(message.port_name);
    }
    if (message.withdrawal_address !== "") {
      writer.uint32(34).string(message.withdrawal_address);
    }
    if (message.balance_waitgroup !== 0) {
      writer.uint32(40).uint32(message.balance_waitgroup);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ICAAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseICAAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.balance.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.port_name = reader.string();
          break;
        case 4:
          message.withdrawal_address = reader.string();
          break;
        case 5:
          message.balance_waitgroup = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ICAAccount {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      balance: Array.isArray(object?.balance) ? object.balance.map((e: any) => Coin.fromJSON(e)) : [],
      port_name: isSet(object.port_name) ? String(object.port_name) : "",
      withdrawal_address: isSet(object.withdrawal_address) ? String(object.withdrawal_address) : "",
      balance_waitgroup: isSet(object.balance_waitgroup) ? Number(object.balance_waitgroup) : 0
    };
  },
  toJSON(message: ICAAccount): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.balance) {
      obj.balance = message.balance.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.balance = [];
    }
    message.port_name !== undefined && (obj.port_name = message.port_name);
    message.withdrawal_address !== undefined && (obj.withdrawal_address = message.withdrawal_address);
    message.balance_waitgroup !== undefined && (obj.balance_waitgroup = Math.round(message.balance_waitgroup));
    return obj;
  },
  fromPartial(object: DeepPartial<ICAAccount>): ICAAccount {
    const message = createBaseICAAccount();
    message.address = object.address ?? "";
    message.balance = object.balance?.map(e => Coin.fromPartial(e)) || [];
    message.port_name = object.port_name ?? "";
    message.withdrawal_address = object.withdrawal_address ?? "";
    message.balance_waitgroup = object.balance_waitgroup ?? 0;
    return message;
  },
  fromAmino(object: ICAAccountAmino): ICAAccount {
    return {
      address: object.address,
      balance: Array.isArray(object?.balance) ? object.balance.map((e: any) => Coin.fromAmino(e)) : [],
      port_name: object.port_name,
      withdrawal_address: object.withdrawal_address,
      balance_waitgroup: object.balance_waitgroup
    };
  },
  toAmino(message: ICAAccount): ICAAccountAmino {
    const obj: any = {};
    obj.address = message.address;
    if (message.balance) {
      obj.balance = message.balance.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.balance = [];
    }
    obj.port_name = message.port_name;
    obj.withdrawal_address = message.withdrawal_address;
    obj.balance_waitgroup = message.balance_waitgroup;
    return obj;
  },
  fromAminoMsg(object: ICAAccountAminoMsg): ICAAccount {
    return ICAAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: ICAAccountProtoMsg): ICAAccount {
    return ICAAccount.decode(message.value);
  },
  toProto(message: ICAAccount): Uint8Array {
    return ICAAccount.encode(message).finish();
  },
  toProtoMsg(message: ICAAccount): ICAAccountProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.ICAAccount",
      value: ICAAccount.encode(message).finish()
    };
  }
};
function createBaseDistribution(): Distribution {
  return {
    valoper: "",
    amount: Long.UZERO
  };
}
export const Distribution = {
  typeUrl: "/quicksilver.interchainstaking.v1.Distribution",
  encode(message: Distribution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valoper !== "") {
      writer.uint32(10).string(message.valoper);
    }
    if (!message.amount.isZero()) {
      writer.uint32(16).uint64(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Distribution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valoper = reader.string();
          break;
        case 2:
          message.amount = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Distribution {
    return {
      valoper: isSet(object.valoper) ? String(object.valoper) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  toJSON(message: Distribution): unknown {
    const obj: any = {};
    message.valoper !== undefined && (obj.valoper = message.valoper);
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Distribution>): Distribution {
    const message = createBaseDistribution();
    message.valoper = object.valoper ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  },
  fromAmino(object: DistributionAmino): Distribution {
    return {
      valoper: object.valoper,
      amount: Long.fromString(object.amount)
    };
  },
  toAmino(message: Distribution): DistributionAmino {
    const obj: any = {};
    obj.valoper = message.valoper;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DistributionAminoMsg): Distribution {
    return Distribution.fromAmino(object.value);
  },
  fromProtoMsg(message: DistributionProtoMsg): Distribution {
    return Distribution.decode(message.value);
  },
  toProto(message: Distribution): Uint8Array {
    return Distribution.encode(message).finish();
  },
  toProtoMsg(message: Distribution): DistributionProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.Distribution",
      value: Distribution.encode(message).finish()
    };
  }
};
function createBaseWithdrawalRecord(): WithdrawalRecord {
  return {
    chain_id: "",
    delegator: "",
    distribution: [],
    recipient: "",
    amount: [],
    burn_amount: Coin.fromPartial({}),
    txhash: "",
    status: 0,
    completion_time: new Date(),
    requeued: false,
    acknowledged: false,
    epoch_number: Long.ZERO
  };
}
export const WithdrawalRecord = {
  typeUrl: "/quicksilver.interchainstaking.v1.WithdrawalRecord",
  encode(message: WithdrawalRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    if (message.delegator !== "") {
      writer.uint32(18).string(message.delegator);
    }
    for (const v of message.distribution) {
      Distribution.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.burn_amount !== undefined) {
      Coin.encode(message.burn_amount, writer.uint32(50).fork()).ldelim();
    }
    if (message.txhash !== "") {
      writer.uint32(58).string(message.txhash);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.completion_time !== undefined) {
      Timestamp.encode(toTimestamp(message.completion_time), writer.uint32(74).fork()).ldelim();
    }
    if (message.requeued === true) {
      writer.uint32(80).bool(message.requeued);
    }
    if (message.acknowledged === true) {
      writer.uint32(88).bool(message.acknowledged);
    }
    if (!message.epoch_number.isZero()) {
      writer.uint32(96).int64(message.epoch_number);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawalRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawalRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;
        case 2:
          message.delegator = reader.string();
          break;
        case 3:
          message.distribution.push(Distribution.decode(reader, reader.uint32()));
          break;
        case 4:
          message.recipient = reader.string();
          break;
        case 5:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.burn_amount = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.txhash = reader.string();
          break;
        case 8:
          message.status = reader.int32();
          break;
        case 9:
          message.completion_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.requeued = reader.bool();
          break;
        case 11:
          message.acknowledged = reader.bool();
          break;
        case 12:
          message.epoch_number = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WithdrawalRecord {
    return {
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      distribution: Array.isArray(object?.distribution) ? object.distribution.map((e: any) => Distribution.fromJSON(e)) : [],
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      burn_amount: isSet(object.burn_amount) ? Coin.fromJSON(object.burn_amount) : undefined,
      txhash: isSet(object.txhash) ? String(object.txhash) : "",
      status: isSet(object.status) ? Number(object.status) : 0,
      completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined,
      requeued: isSet(object.requeued) ? Boolean(object.requeued) : false,
      acknowledged: isSet(object.acknowledged) ? Boolean(object.acknowledged) : false,
      epoch_number: isSet(object.epoch_number) ? Long.fromValue(object.epoch_number) : Long.ZERO
    };
  },
  toJSON(message: WithdrawalRecord): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.delegator !== undefined && (obj.delegator = message.delegator);
    if (message.distribution) {
      obj.distribution = message.distribution.map(e => e ? Distribution.toJSON(e) : undefined);
    } else {
      obj.distribution = [];
    }
    message.recipient !== undefined && (obj.recipient = message.recipient);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.burn_amount !== undefined && (obj.burn_amount = message.burn_amount ? Coin.toJSON(message.burn_amount) : undefined);
    message.txhash !== undefined && (obj.txhash = message.txhash);
    message.status !== undefined && (obj.status = Math.round(message.status));
    message.completion_time !== undefined && (obj.completion_time = message.completion_time.toISOString());
    message.requeued !== undefined && (obj.requeued = message.requeued);
    message.acknowledged !== undefined && (obj.acknowledged = message.acknowledged);
    message.epoch_number !== undefined && (obj.epoch_number = (message.epoch_number || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<WithdrawalRecord>): WithdrawalRecord {
    const message = createBaseWithdrawalRecord();
    message.chain_id = object.chain_id ?? "";
    message.delegator = object.delegator ?? "";
    message.distribution = object.distribution?.map(e => Distribution.fromPartial(e)) || [];
    message.recipient = object.recipient ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.burn_amount = object.burn_amount !== undefined && object.burn_amount !== null ? Coin.fromPartial(object.burn_amount) : undefined;
    message.txhash = object.txhash ?? "";
    message.status = object.status ?? 0;
    message.completion_time = object.completion_time ?? undefined;
    message.requeued = object.requeued ?? false;
    message.acknowledged = object.acknowledged ?? false;
    message.epoch_number = object.epoch_number !== undefined && object.epoch_number !== null ? Long.fromValue(object.epoch_number) : Long.ZERO;
    return message;
  },
  fromAmino(object: WithdrawalRecordAmino): WithdrawalRecord {
    return {
      chain_id: object.chain_id,
      delegator: object.delegator,
      distribution: Array.isArray(object?.distribution) ? object.distribution.map((e: any) => Distribution.fromAmino(e)) : [],
      recipient: object.recipient,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : [],
      burn_amount: object?.burn_amount ? Coin.fromAmino(object.burn_amount) : undefined,
      txhash: object.txhash,
      status: object.status,
      completion_time: object.completion_time,
      requeued: object.requeued,
      acknowledged: object.acknowledged,
      epoch_number: Long.fromString(object.epoch_number)
    };
  },
  toAmino(message: WithdrawalRecord): WithdrawalRecordAmino {
    const obj: any = {};
    obj.chain_id = message.chain_id;
    obj.delegator = message.delegator;
    if (message.distribution) {
      obj.distribution = message.distribution.map(e => e ? Distribution.toAmino(e) : undefined);
    } else {
      obj.distribution = [];
    }
    obj.recipient = message.recipient;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    obj.burn_amount = message.burn_amount ? Coin.toAmino(message.burn_amount) : undefined;
    obj.txhash = message.txhash;
    obj.status = message.status;
    obj.completion_time = message.completion_time;
    obj.requeued = message.requeued;
    obj.acknowledged = message.acknowledged;
    obj.epoch_number = message.epoch_number ? message.epoch_number.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: WithdrawalRecordAminoMsg): WithdrawalRecord {
    return WithdrawalRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: WithdrawalRecordProtoMsg): WithdrawalRecord {
    return WithdrawalRecord.decode(message.value);
  },
  toProto(message: WithdrawalRecord): Uint8Array {
    return WithdrawalRecord.encode(message).finish();
  },
  toProtoMsg(message: WithdrawalRecord): WithdrawalRecordProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.WithdrawalRecord",
      value: WithdrawalRecord.encode(message).finish()
    };
  }
};
function createBaseUnbondingRecord(): UnbondingRecord {
  return {
    chain_id: "",
    epoch_number: Long.ZERO,
    validator: "",
    related_txhash: []
  };
}
export const UnbondingRecord = {
  typeUrl: "/quicksilver.interchainstaking.v1.UnbondingRecord",
  encode(message: UnbondingRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    if (!message.epoch_number.isZero()) {
      writer.uint32(16).int64(message.epoch_number);
    }
    if (message.validator !== "") {
      writer.uint32(26).string(message.validator);
    }
    for (const v of message.related_txhash) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;
        case 2:
          message.epoch_number = (reader.int64() as Long);
          break;
        case 3:
          message.validator = reader.string();
          break;
        case 4:
          message.related_txhash.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnbondingRecord {
    return {
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      epoch_number: isSet(object.epoch_number) ? Long.fromValue(object.epoch_number) : Long.ZERO,
      validator: isSet(object.validator) ? String(object.validator) : "",
      related_txhash: Array.isArray(object?.related_txhash) ? object.related_txhash.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: UnbondingRecord): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.epoch_number !== undefined && (obj.epoch_number = (message.epoch_number || Long.ZERO).toString());
    message.validator !== undefined && (obj.validator = message.validator);
    if (message.related_txhash) {
      obj.related_txhash = message.related_txhash.map(e => e);
    } else {
      obj.related_txhash = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<UnbondingRecord>): UnbondingRecord {
    const message = createBaseUnbondingRecord();
    message.chain_id = object.chain_id ?? "";
    message.epoch_number = object.epoch_number !== undefined && object.epoch_number !== null ? Long.fromValue(object.epoch_number) : Long.ZERO;
    message.validator = object.validator ?? "";
    message.related_txhash = object.related_txhash?.map(e => e) || [];
    return message;
  },
  fromAmino(object: UnbondingRecordAmino): UnbondingRecord {
    return {
      chain_id: object.chain_id,
      epoch_number: Long.fromString(object.epoch_number),
      validator: object.validator,
      related_txhash: Array.isArray(object?.related_txhash) ? object.related_txhash.map((e: any) => e) : []
    };
  },
  toAmino(message: UnbondingRecord): UnbondingRecordAmino {
    const obj: any = {};
    obj.chain_id = message.chain_id;
    obj.epoch_number = message.epoch_number ? message.epoch_number.toString() : undefined;
    obj.validator = message.validator;
    if (message.related_txhash) {
      obj.related_txhash = message.related_txhash.map(e => e);
    } else {
      obj.related_txhash = [];
    }
    return obj;
  },
  fromAminoMsg(object: UnbondingRecordAminoMsg): UnbondingRecord {
    return UnbondingRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: UnbondingRecordProtoMsg): UnbondingRecord {
    return UnbondingRecord.decode(message.value);
  },
  toProto(message: UnbondingRecord): Uint8Array {
    return UnbondingRecord.encode(message).finish();
  },
  toProtoMsg(message: UnbondingRecord): UnbondingRecordProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.UnbondingRecord",
      value: UnbondingRecord.encode(message).finish()
    };
  }
};
function createBaseRedelegationRecord(): RedelegationRecord {
  return {
    chain_id: "",
    epoch_number: Long.ZERO,
    source: "",
    destination: "",
    amount: Long.ZERO,
    completion_time: new Date()
  };
}
export const RedelegationRecord = {
  typeUrl: "/quicksilver.interchainstaking.v1.RedelegationRecord",
  encode(message: RedelegationRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    if (!message.epoch_number.isZero()) {
      writer.uint32(16).int64(message.epoch_number);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    if (message.destination !== "") {
      writer.uint32(34).string(message.destination);
    }
    if (!message.amount.isZero()) {
      writer.uint32(40).int64(message.amount);
    }
    if (message.completion_time !== undefined) {
      Timestamp.encode(toTimestamp(message.completion_time), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;
        case 2:
          message.epoch_number = (reader.int64() as Long);
          break;
        case 3:
          message.source = reader.string();
          break;
        case 4:
          message.destination = reader.string();
          break;
        case 5:
          message.amount = (reader.int64() as Long);
          break;
        case 6:
          message.completion_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RedelegationRecord {
    return {
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      epoch_number: isSet(object.epoch_number) ? Long.fromValue(object.epoch_number) : Long.ZERO,
      source: isSet(object.source) ? String(object.source) : "",
      destination: isSet(object.destination) ? String(object.destination) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.ZERO,
      completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined
    };
  },
  toJSON(message: RedelegationRecord): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.epoch_number !== undefined && (obj.epoch_number = (message.epoch_number || Long.ZERO).toString());
    message.source !== undefined && (obj.source = message.source);
    message.destination !== undefined && (obj.destination = message.destination);
    message.amount !== undefined && (obj.amount = (message.amount || Long.ZERO).toString());
    message.completion_time !== undefined && (obj.completion_time = message.completion_time.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<RedelegationRecord>): RedelegationRecord {
    const message = createBaseRedelegationRecord();
    message.chain_id = object.chain_id ?? "";
    message.epoch_number = object.epoch_number !== undefined && object.epoch_number !== null ? Long.fromValue(object.epoch_number) : Long.ZERO;
    message.source = object.source ?? "";
    message.destination = object.destination ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.ZERO;
    message.completion_time = object.completion_time ?? undefined;
    return message;
  },
  fromAmino(object: RedelegationRecordAmino): RedelegationRecord {
    return {
      chain_id: object.chain_id,
      epoch_number: Long.fromString(object.epoch_number),
      source: object.source,
      destination: object.destination,
      amount: Long.fromString(object.amount),
      completion_time: object.completion_time
    };
  },
  toAmino(message: RedelegationRecord): RedelegationRecordAmino {
    const obj: any = {};
    obj.chain_id = message.chain_id;
    obj.epoch_number = message.epoch_number ? message.epoch_number.toString() : undefined;
    obj.source = message.source;
    obj.destination = message.destination;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    obj.completion_time = message.completion_time;
    return obj;
  },
  fromAminoMsg(object: RedelegationRecordAminoMsg): RedelegationRecord {
    return RedelegationRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: RedelegationRecordProtoMsg): RedelegationRecord {
    return RedelegationRecord.decode(message.value);
  },
  toProto(message: RedelegationRecord): Uint8Array {
    return RedelegationRecord.encode(message).finish();
  },
  toProtoMsg(message: RedelegationRecord): RedelegationRecordProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.RedelegationRecord",
      value: RedelegationRecord.encode(message).finish()
    };
  }
};
function createBaseTransferRecord(): TransferRecord {
  return {
    sender: "",
    recipient: "",
    amount: Coin.fromPartial({})
  };
}
export const TransferRecord = {
  typeUrl: "/quicksilver.interchainstaking.v1.TransferRecord",
  encode(message: TransferRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TransferRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TransferRecord {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: TransferRecord): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<TransferRecord>): TransferRecord {
    const message = createBaseTransferRecord();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: TransferRecordAmino): TransferRecord {
    return {
      sender: object.sender,
      recipient: object.recipient,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: TransferRecord): TransferRecordAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.recipient = message.recipient;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: TransferRecordAminoMsg): TransferRecord {
    return TransferRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: TransferRecordProtoMsg): TransferRecord {
    return TransferRecord.decode(message.value);
  },
  toProto(message: TransferRecord): Uint8Array {
    return TransferRecord.encode(message).finish();
  },
  toProtoMsg(message: TransferRecord): TransferRecordProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.TransferRecord",
      value: TransferRecord.encode(message).finish()
    };
  }
};
function createBaseValidator(): Validator {
  return {
    valoper_address: "",
    commission_rate: "",
    delegator_shares: "",
    voting_power: "",
    score: "",
    status: "",
    jailed: false,
    tombstoned: false,
    jailed_since: new Date(),
    validator_bond_shares: "",
    liquid_shares: ""
  };
}
export const Validator = {
  typeUrl: "/quicksilver.interchainstaking.v1.Validator",
  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valoper_address !== "") {
      writer.uint32(10).string(message.valoper_address);
    }
    if (message.commission_rate !== "") {
      writer.uint32(18).string(message.commission_rate);
    }
    if (message.delegator_shares !== "") {
      writer.uint32(26).string(message.delegator_shares);
    }
    if (message.voting_power !== "") {
      writer.uint32(34).string(message.voting_power);
    }
    if (message.score !== "") {
      writer.uint32(42).string(message.score);
    }
    if (message.status !== "") {
      writer.uint32(50).string(message.status);
    }
    if (message.jailed === true) {
      writer.uint32(56).bool(message.jailed);
    }
    if (message.tombstoned === true) {
      writer.uint32(64).bool(message.tombstoned);
    }
    if (message.jailed_since !== undefined) {
      Timestamp.encode(toTimestamp(message.jailed_since), writer.uint32(74).fork()).ldelim();
    }
    if (message.validator_bond_shares !== "") {
      writer.uint32(82).string(message.validator_bond_shares);
    }
    if (message.liquid_shares !== "") {
      writer.uint32(90).string(message.liquid_shares);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valoper_address = reader.string();
          break;
        case 2:
          message.commission_rate = reader.string();
          break;
        case 3:
          message.delegator_shares = reader.string();
          break;
        case 4:
          message.voting_power = reader.string();
          break;
        case 5:
          message.score = reader.string();
          break;
        case 6:
          message.status = reader.string();
          break;
        case 7:
          message.jailed = reader.bool();
          break;
        case 8:
          message.tombstoned = reader.bool();
          break;
        case 9:
          message.jailed_since = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.validator_bond_shares = reader.string();
          break;
        case 11:
          message.liquid_shares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Validator {
    return {
      valoper_address: isSet(object.valoper_address) ? String(object.valoper_address) : "",
      commission_rate: isSet(object.commission_rate) ? String(object.commission_rate) : "",
      delegator_shares: isSet(object.delegator_shares) ? String(object.delegator_shares) : "",
      voting_power: isSet(object.voting_power) ? String(object.voting_power) : "",
      score: isSet(object.score) ? String(object.score) : "",
      status: isSet(object.status) ? String(object.status) : "",
      jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
      tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : false,
      jailed_since: isSet(object.jailed_since) ? fromJsonTimestamp(object.jailed_since) : undefined,
      validator_bond_shares: isSet(object.validator_bond_shares) ? String(object.validator_bond_shares) : "",
      liquid_shares: isSet(object.liquid_shares) ? String(object.liquid_shares) : ""
    };
  },
  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.valoper_address !== undefined && (obj.valoper_address = message.valoper_address);
    message.commission_rate !== undefined && (obj.commission_rate = message.commission_rate);
    message.delegator_shares !== undefined && (obj.delegator_shares = message.delegator_shares);
    message.voting_power !== undefined && (obj.voting_power = message.voting_power);
    message.score !== undefined && (obj.score = message.score);
    message.status !== undefined && (obj.status = message.status);
    message.jailed !== undefined && (obj.jailed = message.jailed);
    message.tombstoned !== undefined && (obj.tombstoned = message.tombstoned);
    message.jailed_since !== undefined && (obj.jailed_since = message.jailed_since.toISOString());
    message.validator_bond_shares !== undefined && (obj.validator_bond_shares = message.validator_bond_shares);
    message.liquid_shares !== undefined && (obj.liquid_shares = message.liquid_shares);
    return obj;
  },
  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = createBaseValidator();
    message.valoper_address = object.valoper_address ?? "";
    message.commission_rate = object.commission_rate ?? "";
    message.delegator_shares = object.delegator_shares ?? "";
    message.voting_power = object.voting_power ?? "";
    message.score = object.score ?? "";
    message.status = object.status ?? "";
    message.jailed = object.jailed ?? false;
    message.tombstoned = object.tombstoned ?? false;
    message.jailed_since = object.jailed_since ?? undefined;
    message.validator_bond_shares = object.validator_bond_shares ?? "";
    message.liquid_shares = object.liquid_shares ?? "";
    return message;
  },
  fromAmino(object: ValidatorAmino): Validator {
    return {
      valoper_address: object.valoper_address,
      commission_rate: object.commission_rate,
      delegator_shares: object.delegator_shares,
      voting_power: object.voting_power,
      score: object.score,
      status: object.status,
      jailed: object.jailed,
      tombstoned: object.tombstoned,
      jailed_since: object.jailed_since,
      validator_bond_shares: object.validator_bond_shares,
      liquid_shares: object.liquid_shares
    };
  },
  toAmino(message: Validator): ValidatorAmino {
    const obj: any = {};
    obj.valoper_address = message.valoper_address;
    obj.commission_rate = message.commission_rate;
    obj.delegator_shares = message.delegator_shares;
    obj.voting_power = message.voting_power;
    obj.score = message.score;
    obj.status = message.status;
    obj.jailed = message.jailed;
    obj.tombstoned = message.tombstoned;
    obj.jailed_since = message.jailed_since;
    obj.validator_bond_shares = message.validator_bond_shares;
    obj.liquid_shares = message.liquid_shares;
    return obj;
  },
  fromAminoMsg(object: ValidatorAminoMsg): Validator {
    return Validator.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorProtoMsg): Validator {
    return Validator.decode(message.value);
  },
  toProto(message: Validator): Uint8Array {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message: Validator): ValidatorProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
function createBaseDelegatorIntent(): DelegatorIntent {
  return {
    delegator: "",
    intents: []
  };
}
export const DelegatorIntent = {
  typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntent",
  encode(message: DelegatorIntent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    for (const v of message.intents) {
      ValidatorIntent.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorIntent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorIntent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.intents.push(ValidatorIntent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegatorIntent {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      intents: Array.isArray(object?.intents) ? object.intents.map((e: any) => ValidatorIntent.fromJSON(e)) : []
    };
  },
  toJSON(message: DelegatorIntent): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    if (message.intents) {
      obj.intents = message.intents.map(e => e ? ValidatorIntent.toJSON(e) : undefined);
    } else {
      obj.intents = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<DelegatorIntent>): DelegatorIntent {
    const message = createBaseDelegatorIntent();
    message.delegator = object.delegator ?? "";
    message.intents = object.intents?.map(e => ValidatorIntent.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DelegatorIntentAmino): DelegatorIntent {
    return {
      delegator: object.delegator,
      intents: Array.isArray(object?.intents) ? object.intents.map((e: any) => ValidatorIntent.fromAmino(e)) : []
    };
  },
  toAmino(message: DelegatorIntent): DelegatorIntentAmino {
    const obj: any = {};
    obj.delegator = message.delegator;
    if (message.intents) {
      obj.intents = message.intents.map(e => e ? ValidatorIntent.toAmino(e) : undefined);
    } else {
      obj.intents = [];
    }
    return obj;
  },
  fromAminoMsg(object: DelegatorIntentAminoMsg): DelegatorIntent {
    return DelegatorIntent.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegatorIntentProtoMsg): DelegatorIntent {
    return DelegatorIntent.decode(message.value);
  },
  toProto(message: DelegatorIntent): Uint8Array {
    return DelegatorIntent.encode(message).finish();
  },
  toProtoMsg(message: DelegatorIntent): DelegatorIntentProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntent",
      value: DelegatorIntent.encode(message).finish()
    };
  }
};
function createBaseValidatorIntent(): ValidatorIntent {
  return {
    valoper_address: "",
    weight: ""
  };
}
export const ValidatorIntent = {
  typeUrl: "/quicksilver.interchainstaking.v1.ValidatorIntent",
  encode(message: ValidatorIntent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valoper_address !== "") {
      writer.uint32(10).string(message.valoper_address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorIntent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorIntent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valoper_address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorIntent {
    return {
      valoper_address: isSet(object.valoper_address) ? String(object.valoper_address) : "",
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },
  toJSON(message: ValidatorIntent): unknown {
    const obj: any = {};
    message.valoper_address !== undefined && (obj.valoper_address = message.valoper_address);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorIntent>): ValidatorIntent {
    const message = createBaseValidatorIntent();
    message.valoper_address = object.valoper_address ?? "";
    message.weight = object.weight ?? "";
    return message;
  },
  fromAmino(object: ValidatorIntentAmino): ValidatorIntent {
    return {
      valoper_address: object.valoper_address,
      weight: object.weight
    };
  },
  toAmino(message: ValidatorIntent): ValidatorIntentAmino {
    const obj: any = {};
    obj.valoper_address = message.valoper_address;
    obj.weight = message.weight;
    return obj;
  },
  fromAminoMsg(object: ValidatorIntentAminoMsg): ValidatorIntent {
    return ValidatorIntent.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorIntentProtoMsg): ValidatorIntent {
    return ValidatorIntent.decode(message.value);
  },
  toProto(message: ValidatorIntent): Uint8Array {
    return ValidatorIntent.encode(message).finish();
  },
  toProtoMsg(message: ValidatorIntent): ValidatorIntentProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.ValidatorIntent",
      value: ValidatorIntent.encode(message).finish()
    };
  }
};
function createBaseDelegation(): Delegation {
  return {
    delegation_address: "",
    validator_address: "",
    amount: Coin.fromPartial({}),
    height: Long.ZERO,
    redelegation_end: Long.ZERO
  };
}
export const Delegation = {
  typeUrl: "/quicksilver.interchainstaking.v1.Delegation",
  encode(message: Delegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegation_address !== "") {
      writer.uint32(10).string(message.delegation_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(32).int64(message.height);
    }
    if (!message.redelegation_end.isZero()) {
      writer.uint32(40).int64(message.redelegation_end);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Delegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation_address = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.height = (reader.int64() as Long);
          break;
        case 5:
          message.redelegation_end = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Delegation {
    return {
      delegation_address: isSet(object.delegation_address) ? String(object.delegation_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      redelegation_end: isSet(object.redelegation_end) ? Long.fromValue(object.redelegation_end) : Long.ZERO
    };
  },
  toJSON(message: Delegation): unknown {
    const obj: any = {};
    message.delegation_address !== undefined && (obj.delegation_address = message.delegation_address);
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.redelegation_end !== undefined && (obj.redelegation_end = (message.redelegation_end || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Delegation>): Delegation {
    const message = createBaseDelegation();
    message.delegation_address = object.delegation_address ?? "";
    message.validator_address = object.validator_address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.redelegation_end = object.redelegation_end !== undefined && object.redelegation_end !== null ? Long.fromValue(object.redelegation_end) : Long.ZERO;
    return message;
  },
  fromAmino(object: DelegationAmino): Delegation {
    return {
      delegation_address: object.delegation_address,
      validator_address: object.validator_address,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
      height: Long.fromString(object.height),
      redelegation_end: Long.fromString(object.redelegation_end)
    };
  },
  toAmino(message: Delegation): DelegationAmino {
    const obj: any = {};
    obj.delegation_address = message.delegation_address;
    obj.validator_address = message.validator_address;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.redelegation_end = message.redelegation_end ? message.redelegation_end.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DelegationAminoMsg): Delegation {
    return Delegation.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegationProtoMsg): Delegation {
    return Delegation.decode(message.value);
  },
  toProto(message: Delegation): Uint8Array {
    return Delegation.encode(message).finish();
  },
  toProtoMsg(message: Delegation): DelegationProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.Delegation",
      value: Delegation.encode(message).finish()
    };
  }
};
function createBasePortConnectionTuple(): PortConnectionTuple {
  return {
    connection_id: "",
    port_id: ""
  };
}
export const PortConnectionTuple = {
  typeUrl: "/quicksilver.interchainstaking.v1.PortConnectionTuple",
  encode(message: PortConnectionTuple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection_id !== "") {
      writer.uint32(10).string(message.connection_id);
    }
    if (message.port_id !== "") {
      writer.uint32(18).string(message.port_id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PortConnectionTuple {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortConnectionTuple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection_id = reader.string();
          break;
        case 2:
          message.port_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PortConnectionTuple {
    return {
      connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
      port_id: isSet(object.port_id) ? String(object.port_id) : ""
    };
  },
  toJSON(message: PortConnectionTuple): unknown {
    const obj: any = {};
    message.connection_id !== undefined && (obj.connection_id = message.connection_id);
    message.port_id !== undefined && (obj.port_id = message.port_id);
    return obj;
  },
  fromPartial(object: DeepPartial<PortConnectionTuple>): PortConnectionTuple {
    const message = createBasePortConnectionTuple();
    message.connection_id = object.connection_id ?? "";
    message.port_id = object.port_id ?? "";
    return message;
  },
  fromAmino(object: PortConnectionTupleAmino): PortConnectionTuple {
    return {
      connection_id: object.connection_id,
      port_id: object.port_id
    };
  },
  toAmino(message: PortConnectionTuple): PortConnectionTupleAmino {
    const obj: any = {};
    obj.connection_id = message.connection_id;
    obj.port_id = message.port_id;
    return obj;
  },
  fromAminoMsg(object: PortConnectionTupleAminoMsg): PortConnectionTuple {
    return PortConnectionTuple.fromAmino(object.value);
  },
  fromProtoMsg(message: PortConnectionTupleProtoMsg): PortConnectionTuple {
    return PortConnectionTuple.decode(message.value);
  },
  toProto(message: PortConnectionTuple): Uint8Array {
    return PortConnectionTuple.encode(message).finish();
  },
  toProtoMsg(message: PortConnectionTuple): PortConnectionTupleProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.PortConnectionTuple",
      value: PortConnectionTuple.encode(message).finish()
    };
  }
};
function createBaseReceipt(): Receipt {
  return {
    chain_id: "",
    sender: "",
    txhash: "",
    amount: [],
    first_seen: undefined,
    completed: undefined
  };
}
export const Receipt = {
  typeUrl: "/quicksilver.interchainstaking.v1.Receipt",
  encode(message: Receipt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.txhash !== "") {
      writer.uint32(26).string(message.txhash);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.first_seen !== undefined) {
      Timestamp.encode(toTimestamp(message.first_seen), writer.uint32(42).fork()).ldelim();
    }
    if (message.completed !== undefined) {
      Timestamp.encode(toTimestamp(message.completed), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Receipt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReceipt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.txhash = reader.string();
          break;
        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.first_seen = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.completed = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Receipt {
    return {
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      txhash: isSet(object.txhash) ? String(object.txhash) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      first_seen: isSet(object.first_seen) ? fromJsonTimestamp(object.first_seen) : undefined,
      completed: isSet(object.completed) ? fromJsonTimestamp(object.completed) : undefined
    };
  },
  toJSON(message: Receipt): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.sender !== undefined && (obj.sender = message.sender);
    message.txhash !== undefined && (obj.txhash = message.txhash);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.first_seen !== undefined && (obj.first_seen = message.first_seen.toISOString());
    message.completed !== undefined && (obj.completed = message.completed.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<Receipt>): Receipt {
    const message = createBaseReceipt();
    message.chain_id = object.chain_id ?? "";
    message.sender = object.sender ?? "";
    message.txhash = object.txhash ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.first_seen = object.first_seen ?? undefined;
    message.completed = object.completed ?? undefined;
    return message;
  },
  fromAmino(object: ReceiptAmino): Receipt {
    return {
      chain_id: object.chain_id,
      sender: object.sender,
      txhash: object.txhash,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : [],
      first_seen: object?.first_seen,
      completed: object?.completed
    };
  },
  toAmino(message: Receipt): ReceiptAmino {
    const obj: any = {};
    obj.chain_id = message.chain_id;
    obj.sender = message.sender;
    obj.txhash = message.txhash;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    obj.first_seen = message.first_seen;
    obj.completed = message.completed;
    return obj;
  },
  fromAminoMsg(object: ReceiptAminoMsg): Receipt {
    return Receipt.fromAmino(object.value);
  },
  fromProtoMsg(message: ReceiptProtoMsg): Receipt {
    return Receipt.decode(message.value);
  },
  toProto(message: Receipt): Uint8Array {
    return Receipt.encode(message).finish();
  },
  toProtoMsg(message: Receipt): ReceiptProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.Receipt",
      value: Receipt.encode(message).finish()
    };
  }
};