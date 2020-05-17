class NetMgr {
    /* singleton */
    private static $mgr: NetMgr;
    static get inst(): NetMgr {
        if (!NetMgr.$mgr) {
            NetMgr.$mgr = new NetMgr();
        }
        return NetMgr.$mgr;
    }

    isConnected: boolean = false;

    private $socket: egret.WebSocket;
    req: NetReq;
    res: NetRes;

    private constructor() {
        this.$socket = new egret.WebSocket();
        this.initSocketListeners();

        this.req = new NetReq();
        this.res = new NetRes();
    }

    private initSocketListeners() {
        egret.log('initSocketListeners')
        this.$socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.$socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
    }

    connect(): void {
        if (this.isConnected) {
            // TODO:
        } else {
            const url = Config.NetServerConfig.url;
            const port = Config.NetServerConfig.port;
            const secured = Config.NetServerConfig.secured;
            egret.log(`Socket connect ${secured ? 'wss' : 'ws'}://${url}:${port}`)
            this.connectTo(url, port, secured);
        }
        this.req.socket = this.$socket;
        // const self = this;
        // console.debug(`WebSocket Connect => ${Config.ServerUrlDebug}`);
        // this.$socket = io.connect(Config.ServerUrlDebug, {
        //     reconnection: true,
        //     reconnectionAttempts: 10
        // });
        // this.req.socket = this.$socket;
        // this.registerHandles();
        // this.$socket.on('disconnect', self.disconnect);
    }

    private onSocketOpen(): void {
        egret.log('onSocketOpen')
        this.isConnected = true;
    }

    private onReceiveMessage(e: egret.ProgressEvent): void {
        egret.log('onReceiveMessage')
        const byte: egret.ByteArray = new egret.ByteArray();
        this.$socket.readBytes(byte);
        const reader = new protobuf.Reader(byte.bytes);
        const msg = JoinRoom.JoinRoomResponse.decode(reader);
        console.log(msg);
        // TODO: NetRes...
    }

    private connectTo(url: string, port: number, secured: boolean = false): void {
        if (secured) {
            let url2: string = `wss://${url}`;
            if (port && port > 0) {
                url2 = url2 + `:${port}`;
            }
            this.$socket.connectByUrl(url2);
        } else {
            this.$socket.connect(url, port);
        }
    }

    private registerHandles(): void {
        // for (const h of this.res.handles) {
        //     this.$socket.on(h.msg, (msg: Proto.Res) => {
        //         h.func(msg);
        //     });
        // }
    }

    disconnect(): void {
        egret.log(`Socket.io Disconnect => ${Config.ServerUrlDebug}`);
        this.$socket.close();
    }
}
