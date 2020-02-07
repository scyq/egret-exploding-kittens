class NetMgr {
    /* singleton */
    private static $mgr: NetMgr;
    static get inst() {
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
        const self = this;
        console.log(`Socket.io Connect => ${Config.ServerUrlDebug}`);
        this.$socket = io.connect(Config.ServerUrlDebug, {
            reconnection: true,
            reconnectionAttempts: 10
        });
        this.req.socket = this.$socket;
        this.registerHandles();
        this.$socket.on('disconnect', () => {
            self.disconnect();
        });
    }

    private registerHandles(): void {
        for (const h of this.res.handles) {
            this.$socket.on(h.msg, (msg) => {
                h.func(msg);
            });
        }
    }

    private disconnect(): void {
        console.log(`Socket.io Disconnect => ${Config.ServerUrlDebug}`);
        this.$socket.close();
    }
}
