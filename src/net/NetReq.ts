class NetReq {
    private $socket: egret.WebSocket

    constructor() { }

    // testJoinRoomReq() {
    joinRoom(data: JoinRoom.IJoinRoomRequest): void {
        let createInstance
        let sendData = new JoinRoom.JoinRoomRequest(data);
        let sendByte: Uint8Array = JoinRoom.JoinRoomRequest.encode(sendData).finish();
        let byteArray = new egret.ByteArray(sendByte)
        this.$socket.writeBytes(byteArray);
        this.$socket.flush();
    }

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

    text(msg: string): void {
        // const req: Proto.Req = this.getReq();
        // req.text = msg;
        // this.$socket.emit('text', req);
    }

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
