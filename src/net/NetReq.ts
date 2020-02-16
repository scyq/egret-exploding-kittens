class NetReq {
    private $socket: SocketIOClient.Socket;

    public constructor() { }

    public set socket(socket: SocketIOClient.Socket) {
        this.$socket = socket;
    }

    private getReq() {
        const req: Proto.Req = {
            gameid: GameMgr.inst.gameid,
            uid: GameMgr.inst.uid,
            rid: GameMgr.inst.rid
        }
        return req;
    }

    public text(msg: string): void {
        const req: Proto.Req = this.getReq();
        req.text = msg;
        this.$socket.emit('text', req);
    }

    public joinRoom(msg: Proto.IReqJoinRoom): void {
        const req: Proto.Req = this.getReq();
        req.joinRoom = msg
        this.$socket.emit('joinRoom', req);
        egret.log('joinRoom')
    }

    public die(msg: Proto.IReqDie): void {
        const req: Proto.Req = this.getReq();
        req.die = msg        
        this.$socket.emit('die', req);
    }
}
