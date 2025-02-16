import { setPaginationParams } from "../../../../helpers";
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.channel = this.channel.bind(this);
        this.channels = this.channels.bind(this);
        this.connectionChannels = this.connectionChannels.bind(this);
        this.channelClientState = this.channelClientState.bind(this);
        this.channelConsensusState = this.channelConsensusState.bind(this);
        this.packetCommitment = this.packetCommitment.bind(this);
        this.packetCommitments = this.packetCommitments.bind(this);
        this.packetReceipt = this.packetReceipt.bind(this);
        this.packetAcknowledgement = this.packetAcknowledgement.bind(this);
        this.packetAcknowledgements = this.packetAcknowledgements.bind(this);
        this.unreceivedPackets = this.unreceivedPackets.bind(this);
        this.unreceivedAcks = this.unreceivedAcks.bind(this);
        this.nextSequenceReceive = this.nextSequenceReceive.bind(this);
    }
    /* Channel queries an IBC Channel. */
    async channel(params) {
        const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}`;
        return await this.req.get(endpoint);
    }
    /* Channels queries all the IBC channels of a chain. */
    async channels(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `ibc/core/channel/v1/channels`;
        return await this.req.get(endpoint, options);
    }
    /* ConnectionChannels queries all the channels associated with a connection
     end. */
    async connectionChannels(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `ibc/core/channel/v1/connections/${params.connection}/channels`;
        return await this.req.get(endpoint, options);
    }
    /* ChannelClientState queries for the client state for the channel associated
     with the provided channel identifiers. */
    async channelClientState(params) {
        const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/client_state`;
        return await this.req.get(endpoint);
    }
    /* ChannelConsensusState queries for the consensus state for the channel
     associated with the provided channel identifiers. */
    async channelConsensusState(params) {
        const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/consensus_state/revision/${params.revisionNumber}/height/${params.revisionHeight}`;
        return await this.req.get(endpoint);
    }
    /* PacketCommitment queries a stored packet commitment hash. */
    async packetCommitment(params) {
        const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/packet_commitments/${params.sequence}`;
        return await this.req.get(endpoint);
    }
    /* PacketCommitments returns all the packet commitments hashes associated
     with a channel. */
    async packetCommitments(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/packet_commitments`;
        return await this.req.get(endpoint, options);
    }
    /* PacketReceipt queries if a given packet sequence has been received on the
     queried chain */
    async packetReceipt(params) {
        const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/packet_receipts/${params.sequence}`;
        return await this.req.get(endpoint);
    }
    /* PacketAcknowledgement queries a stored packet acknowledgement hash. */
    async packetAcknowledgement(params) {
        const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/packet_acks/${params.sequence}`;
        return await this.req.get(endpoint);
    }
    /* PacketAcknowledgements returns all the packet acknowledgements associated
     with a channel. */
    async packetAcknowledgements(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        if (typeof params?.packetCommitmentSequences !== "undefined") {
            options.params.packet_commitment_sequences = params.packetCommitmentSequences;
        }
        const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/packet_acknowledgements`;
        return await this.req.get(endpoint, options);
    }
    /* UnreceivedPackets returns all the unreceived IBC packets associated with a
     channel and sequences. */
    async unreceivedPackets(params) {
        const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/packet_commitments/${params.packetCommitmentSequences}/unreceived_packets`;
        return await this.req.get(endpoint);
    }
    /* UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     with a channel and sequences. */
    async unreceivedAcks(params) {
        const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/packet_commitments/${params.packetAckSequences}/unreceived_acks`;
        return await this.req.get(endpoint);
    }
    /* NextSequenceReceive returns the next receive sequence for a given channel. */
    async nextSequenceReceive(params) {
        const endpoint = `ibc/core/channel/v1/channels/${params.channelId}/ports/${params.portId}/next_sequence`;
        return await this.req.get(endpoint);
    }
}
//# sourceMappingURL=query.lcd.js.map