class NetMgr {
    private static $mgr: NetMgr;
    public static get inst() {
        if (!NetMgr.$mgr) {
            NetMgr.$mgr = new NetMgr();
        }
        return NetMgr.$mgr;
    }

    private constructor() { };

    private $socket: SocketIOClient.Socket;

    public connect(): void {
        const self = this;
        console.log(`Socket.io Connect => ${Config.ServerUrlDebug}`);
        this.$socket = io.connect(Config.ServerUrlDebug);

        this.$socket.on('disconnect', () => {
            self.disconnect();
        });

        this.$socket.on('news', (msg) => {
            self.recieveNews(msg);
        })
    }

    public close(): void {
        this.$socket.close();
    }

    private disconnect(): void {
        console.log(`Socket.io Connect => ${Config.ServerUrlDebug}`);
    }


    public sendMessage(msg: string): void {
        this.$socket.emit("message", msg);
    }

    public reqJoinRoom(playerList: Proto.IReqJoinRoom): void {
        if (playerList) {
            this.$socket.emit("joinRoom", playerList)
            console.log('send playerList');
            console.log(playerList);
        }
    }

    public recieveNews(msg: string): void {
        GameDispatcher.inst.dispatchEvent(new egret.Event(EventName.TEST, false, false, { 'msg': msg }));
    }
}