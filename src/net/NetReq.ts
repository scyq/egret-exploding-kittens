class NetReq {
    private $socket: egret.WebSocket

    constructor() { }


    set socket(socket: egret.WebSocket) {
        this.$socket = socket;
    }

    private getReq() {
        const req: Proto.Req = {
            gameid: GameMgr.inst.gameid,
            uid: GameMgr.inst.uid,
            rid: GameMgr.inst.rid,
        };
        return req;
    }

    private request(msg: Msg.IMessage): void {
        let sendData = new Msg.Message(msg);
        let sendByte: Uint8Array = Msg.Message.encode(sendData).finish();
        let dataBytes = new egret.ByteArray(sendByte);

        let buf = new egret.ByteArray()
        buf.writeByte(1);
        buf.writeShort(dataBytes.length + 4);
        buf.writeInt(3)
        buf.writeBytes(dataBytes);

        this.$socket.writeBytes(buf);
        this.$socket.flush();
    }

    private genRequestId(): string {
        return Math.floor(Math.random() * Math.floor(99999)).toString();
    }

    heartBeat(): void {
        let msg: Msg.IMessage = {
            requestId: this.genRequestId(),
            cmd: Msg.Message.CommandType.HEARTBEAT_REQ,
            content: "HEARTBEAT_REQ",
        };
        this.request(msg);
    }

    joinRoom(data: JoinRoom.IJoinRoomRequest): void {
        let msg: Msg.IMessage = {
            requestId: this.genRequestId(),
            cmd: Msg.Message.CommandType.JOIN_ROOM_REQ,
            content: "JOIN_ROOM_REQ",
            joinRoomReq: data
        };
        this.request(msg);
    }

    adjustCard(): void {
        let msg: Msg.IMessage = {
            requestId: this.genRequestId(),
            cmd: Msg.Message.CommandType.ADJUST_CARD_REQ,
            content: "ADJUST_CARD_REQ",
        };
        this.request(msg);
    }


    pickCard(): void {
        let msg: Msg.IMessage = {
            requestId: this.genRequestId(),
            cmd: Msg.Message.CommandType.PICK_CARD_REQ,
            content: "PICK_CARD_REQ",
        };
        this.request(msg);
    }

    releaseCard(data: JoinRoom.IJoinRoomRequest): void {
        let msg: Msg.IMessage = {
            requestId: this.genRequestId(),
            cmd: Msg.Message.CommandType.RELEASE_CARD_REQ,
            content: "RELEASE_CARD_REQ",
        };
        this.request(msg);
    }
}
