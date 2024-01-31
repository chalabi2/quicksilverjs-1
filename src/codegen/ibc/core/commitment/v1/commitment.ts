import { CommitmentProof, CommitmentProofAmino, CommitmentProofSDKType } from "../../../../confio/proofs";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../../helpers";
/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 */
export interface MerkleRoot {
  hash: Uint8Array;
}
export interface MerkleRootProtoMsg {
  type_url: "/ibc.core.commitment.v1.MerkleRoot";
  value: Uint8Array;
}
/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 */
export interface MerkleRootAmino {
  hash: Uint8Array;
}
export interface MerkleRootAminoMsg {
  type: "cosmos-sdk/MerkleRoot";
  value: MerkleRootAmino;
}
/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 */
export interface MerkleRootSDKType {
  hash: Uint8Array;
}
/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 */
export interface MerklePrefix {
  key_prefix: Uint8Array;
}
export interface MerklePrefixProtoMsg {
  type_url: "/ibc.core.commitment.v1.MerklePrefix";
  value: Uint8Array;
}
/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 */
export interface MerklePrefixAmino {
  key_prefix: Uint8Array;
}
export interface MerklePrefixAminoMsg {
  type: "cosmos-sdk/MerklePrefix";
  value: MerklePrefixAmino;
}
/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 */
export interface MerklePrefixSDKType {
  key_prefix: Uint8Array;
}
/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 */
export interface MerklePath {
  key_path: string[];
}
export interface MerklePathProtoMsg {
  type_url: "/ibc.core.commitment.v1.MerklePath";
  value: Uint8Array;
}
/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 */
export interface MerklePathAmino {
  key_path: string[];
}
export interface MerklePathAminoMsg {
  type: "cosmos-sdk/MerklePath";
  value: MerklePathAmino;
}
/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 */
export interface MerklePathSDKType {
  key_path: string[];
}
/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 */
export interface MerkleProof {
  proofs: CommitmentProof[];
}
export interface MerkleProofProtoMsg {
  type_url: "/ibc.core.commitment.v1.MerkleProof";
  value: Uint8Array;
}
/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 */
export interface MerkleProofAmino {
  proofs: CommitmentProofAmino[];
}
export interface MerkleProofAminoMsg {
  type: "cosmos-sdk/MerkleProof";
  value: MerkleProofAmino;
}
/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 */
export interface MerkleProofSDKType {
  proofs: CommitmentProofSDKType[];
}
function createBaseMerkleRoot(): MerkleRoot {
  return {
    hash: new Uint8Array()
  };
}
export const MerkleRoot = {
  typeUrl: "/ibc.core.commitment.v1.MerkleRoot",
  aminoType: "cosmos-sdk/MerkleRoot",
  encode(message: MerkleRoot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MerkleRoot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerkleRoot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MerkleRoot {
    return {
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
    };
  },
  toJSON(message: MerkleRoot): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MerkleRoot>): MerkleRoot {
    const message = createBaseMerkleRoot();
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MerkleRootAmino): MerkleRoot {
    return {
      hash: object.hash
    };
  },
  toAmino(message: MerkleRoot): MerkleRootAmino {
    const obj: any = {};
    obj.hash = message.hash;
    return obj;
  },
  fromAminoMsg(object: MerkleRootAminoMsg): MerkleRoot {
    return MerkleRoot.fromAmino(object.value);
  },
  toAminoMsg(message: MerkleRoot): MerkleRootAminoMsg {
    return {
      type: "cosmos-sdk/MerkleRoot",
      value: MerkleRoot.toAmino(message)
    };
  },
  fromProtoMsg(message: MerkleRootProtoMsg): MerkleRoot {
    return MerkleRoot.decode(message.value);
  },
  toProto(message: MerkleRoot): Uint8Array {
    return MerkleRoot.encode(message).finish();
  },
  toProtoMsg(message: MerkleRoot): MerkleRootProtoMsg {
    return {
      typeUrl: "/ibc.core.commitment.v1.MerkleRoot",
      value: MerkleRoot.encode(message).finish()
    };
  }
};
function createBaseMerklePrefix(): MerklePrefix {
  return {
    key_prefix: new Uint8Array()
  };
}
export const MerklePrefix = {
  typeUrl: "/ibc.core.commitment.v1.MerklePrefix",
  aminoType: "cosmos-sdk/MerklePrefix",
  encode(message: MerklePrefix, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key_prefix.length !== 0) {
      writer.uint32(10).bytes(message.key_prefix);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MerklePrefix {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerklePrefix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key_prefix = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MerklePrefix {
    return {
      key_prefix: isSet(object.key_prefix) ? bytesFromBase64(object.key_prefix) : new Uint8Array()
    };
  },
  toJSON(message: MerklePrefix): unknown {
    const obj: any = {};
    message.key_prefix !== undefined && (obj.key_prefix = base64FromBytes(message.key_prefix !== undefined ? message.key_prefix : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MerklePrefix>): MerklePrefix {
    const message = createBaseMerklePrefix();
    message.key_prefix = object.key_prefix ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MerklePrefixAmino): MerklePrefix {
    return {
      key_prefix: object.key_prefix
    };
  },
  toAmino(message: MerklePrefix): MerklePrefixAmino {
    const obj: any = {};
    obj.key_prefix = message.key_prefix;
    return obj;
  },
  fromAminoMsg(object: MerklePrefixAminoMsg): MerklePrefix {
    return MerklePrefix.fromAmino(object.value);
  },
  toAminoMsg(message: MerklePrefix): MerklePrefixAminoMsg {
    return {
      type: "cosmos-sdk/MerklePrefix",
      value: MerklePrefix.toAmino(message)
    };
  },
  fromProtoMsg(message: MerklePrefixProtoMsg): MerklePrefix {
    return MerklePrefix.decode(message.value);
  },
  toProto(message: MerklePrefix): Uint8Array {
    return MerklePrefix.encode(message).finish();
  },
  toProtoMsg(message: MerklePrefix): MerklePrefixProtoMsg {
    return {
      typeUrl: "/ibc.core.commitment.v1.MerklePrefix",
      value: MerklePrefix.encode(message).finish()
    };
  }
};
function createBaseMerklePath(): MerklePath {
  return {
    key_path: []
  };
}
export const MerklePath = {
  typeUrl: "/ibc.core.commitment.v1.MerklePath",
  aminoType: "cosmos-sdk/MerklePath",
  encode(message: MerklePath, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.key_path) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MerklePath {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerklePath();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key_path.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MerklePath {
    return {
      key_path: Array.isArray(object?.key_path) ? object.key_path.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: MerklePath): unknown {
    const obj: any = {};
    if (message.key_path) {
      obj.key_path = message.key_path.map(e => e);
    } else {
      obj.key_path = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MerklePath>): MerklePath {
    const message = createBaseMerklePath();
    message.key_path = object.key_path?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MerklePathAmino): MerklePath {
    return {
      key_path: Array.isArray(object?.key_path) ? object.key_path.map((e: any) => e) : []
    };
  },
  toAmino(message: MerklePath): MerklePathAmino {
    const obj: any = {};
    if (message.key_path) {
      obj.key_path = message.key_path.map(e => e);
    } else {
      obj.key_path = [];
    }
    return obj;
  },
  fromAminoMsg(object: MerklePathAminoMsg): MerklePath {
    return MerklePath.fromAmino(object.value);
  },
  toAminoMsg(message: MerklePath): MerklePathAminoMsg {
    return {
      type: "cosmos-sdk/MerklePath",
      value: MerklePath.toAmino(message)
    };
  },
  fromProtoMsg(message: MerklePathProtoMsg): MerklePath {
    return MerklePath.decode(message.value);
  },
  toProto(message: MerklePath): Uint8Array {
    return MerklePath.encode(message).finish();
  },
  toProtoMsg(message: MerklePath): MerklePathProtoMsg {
    return {
      typeUrl: "/ibc.core.commitment.v1.MerklePath",
      value: MerklePath.encode(message).finish()
    };
  }
};
function createBaseMerkleProof(): MerkleProof {
  return {
    proofs: []
  };
}
export const MerkleProof = {
  typeUrl: "/ibc.core.commitment.v1.MerkleProof",
  aminoType: "cosmos-sdk/MerkleProof",
  encode(message: MerkleProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.proofs) {
      CommitmentProof.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MerkleProof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerkleProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proofs.push(CommitmentProof.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MerkleProof {
    return {
      proofs: Array.isArray(object?.proofs) ? object.proofs.map((e: any) => CommitmentProof.fromJSON(e)) : []
    };
  },
  toJSON(message: MerkleProof): unknown {
    const obj: any = {};
    if (message.proofs) {
      obj.proofs = message.proofs.map(e => e ? CommitmentProof.toJSON(e) : undefined);
    } else {
      obj.proofs = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MerkleProof>): MerkleProof {
    const message = createBaseMerkleProof();
    message.proofs = object.proofs?.map(e => CommitmentProof.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MerkleProofAmino): MerkleProof {
    return {
      proofs: Array.isArray(object?.proofs) ? object.proofs.map((e: any) => CommitmentProof.fromAmino(e)) : []
    };
  },
  toAmino(message: MerkleProof): MerkleProofAmino {
    const obj: any = {};
    if (message.proofs) {
      obj.proofs = message.proofs.map(e => e ? CommitmentProof.toAmino(e) : undefined);
    } else {
      obj.proofs = [];
    }
    return obj;
  },
  fromAminoMsg(object: MerkleProofAminoMsg): MerkleProof {
    return MerkleProof.fromAmino(object.value);
  },
  toAminoMsg(message: MerkleProof): MerkleProofAminoMsg {
    return {
      type: "cosmos-sdk/MerkleProof",
      value: MerkleProof.toAmino(message)
    };
  },
  fromProtoMsg(message: MerkleProofProtoMsg): MerkleProof {
    return MerkleProof.decode(message.value);
  },
  toProto(message: MerkleProof): Uint8Array {
    return MerkleProof.encode(message).finish();
  },
  toProtoMsg(message: MerkleProof): MerkleProofProtoMsg {
    return {
      typeUrl: "/ibc.core.commitment.v1.MerkleProof",
      value: MerkleProof.encode(message).finish()
    };
  }
};