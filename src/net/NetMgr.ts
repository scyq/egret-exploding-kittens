class NetMgr {
    /* singleton */
    private static $mgr: NetMgr;
    static get inst(): NetMgr {
        if (!NetMgr.$mgr) {
            NetMgr.$mgr = new NetMgr();
        }
        return NetMgr.$mgr;
    }

    private $socket: SocketIOClient.Socket;
    req: NetReq;
    res: NetRes;

    private constructor() {
        this.req = new NetReq();
        this.res = new NetRes();
    }

    connect(): void {
        console.debug(`Socket.io Connect => ${Config.ServerUrlDebug}`);
        this.$socket = io.connect(Config.ServerUrlDebug, {
            reconnection: true,
            reconnectionAttempts: 10
        });
        this.req.socket = this.$socket;
        this.registerHandles();
        this.$socket.on('disconnect', this.disconnect);
    }

    private registerHandles(): void {
        for (const h of this.res.handles) {
            this.$socket.on(h.msg, (msg: Proto.Res) => {
                h.func(msg);
            });
        }
    }

    disconnect(): void {
        console.log(`Socket.io Disconnect => ${Config.ServerUrlDebug}`);
    }
}
