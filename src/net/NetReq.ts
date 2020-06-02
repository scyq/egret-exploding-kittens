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
        console.log('123123123123123123123123123123')
        let sendData = new Msg.Message(msg);
        let sendByte: Uint8Array = Msg.Message.encode(sendData).finish();
        let dataBytes = new egret.ByteArray(sendByte);

        let buf = new egret.ByteArray()
        buf.writeByte(1);
        buf.writeShort(dataBytes.length + 4);
        buf.writeInt(3)
        buf.writeBytes(dataBytes);

        this.$socket.writeBytes(buf);
        // this.$socket.flush();
    }

    // testJoinRoomReq() {
    joinRoom(data: JoinRoom.IJoinRoomRequest): void {
        let msg: Msg.IMessage = {
            requestId: Math.floor(Math.random() * Math.floor(99999)).toString(),
            cmd: Msg.Message.CommandType.JOIN_ROOM,
            content: "Join Room",
            joinRoomReq: data
        };
        this.request(msg);
    }


    text(msg: string): void { }
    // joinRoom(msg: Proto.IReqJoinRoom): void {
    //     // const req: Proto.Req = this.getReq();
    //     // req.joinRoom = msg;
    //     // egret.log('joinRoom');
    //     // egret.log(req.joinRoom);
    //     // this.$socket.emit('joinRoom', req);
    // }

    die(msg: boolean): void {
        // const req: Proto.Req = this.getReq();
        // req.die = msg;
        // this.$socket.emit('die', req);
    }

    win(msg: boolean): void {
        // const req: Proto.Req = this.getReq();
        // req.win = msg;
        // this.$socket.emit('win', req);
    }

    drawACard(msg: Proto.IReqDrawACard): void {
        // const req: Proto.Req = this.getReq();
        // req.drawACard = msg;
        // this.$socket.emit('drawACard', req);
    }

    playACard(msg: Proto.IReqPlayACard): void {
        // const req: Proto.Req = this.getReq();
        // req.playACard = msg;
        // this.$socket.emit('playACard', req);
    }

    attack(msg: Proto.IComCard): void {
        // const req: Proto.Req = this.getReq();
        // req.attack = msg;
        // this.$socket.emit('attack', req);
    }
}
