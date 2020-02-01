class NetMgr {
    public static mgr: NetMgr;
    public static get inst() {
        if (!NetMgr.mgr) {
            NetMgr.mgr = new NetMgr();
        }
        return NetMgr.mgr;
    }

    private constructor() { };

    private socket: SocketIOClient.Socket;

    public connect(): void {
        const self = this;
        console.log(`Socket.io Connect => ${Config.ServerUrlDebug}`);
        this.socket = io.connect(Config.ServerUrlDebug);

        this.socket.on('disconnect', () => {
            self.disconnect();
        });

        this.socket.on('news', (data) => {
            self.trace('receive message: ' + data);
        })
    }

    public close(): void {
        this.socket.close();
    }

    private disconnect(): void {
        console.log(`Socket.io Connect => ${Config.ServerUrlDebug}`);
    }


    public sendMessage(msg: string): void {
        this.trace("send message: " + msg);
        this.socket.emit("message", msg);
    }

    private trace(msg: string): void {
        console.log(msg);
        const d = new egret.EventDispatcher();
        // this.textfield.text += "\n" + msg;
    }
}