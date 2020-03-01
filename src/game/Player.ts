class Player {
    public uid: number;
    public isBot: boolean;
    public avatar: string;
    public status: number;
    public nickname: string;
    public seat: number;

    public constructor(seat: number, player: Native.IMatchPlayer) {
        this.seat = seat;
        this.uid = player.uid;
        this.isBot = player.type === 1;
        this.avatar = player.avatar;
        this.status = 0;
        this.nickname = player.nickname;
    }
}
