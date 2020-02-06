class NetReq {
    private $socket: SocketIOClient.Socket;

    public constructor() {}

    public set socket(socket: SocketIOClient.Socket) {
        this.$socket = socket;
    }

    public testMessage(msg: string): void {
        this.$socket.emit('test', msg);
    }

    public reqJoinRoom(playerList: Proto.IReqJoinRoom): void {
        if (playerList) {
            this.$socket.emit('joinRoom', playerList);
            console.log('send playerList');
            console.log(playerList);
        }
    }
}
