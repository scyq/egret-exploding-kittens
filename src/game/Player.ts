class Player {
    uid: number;
    isBot: boolean;
    avatar: string;
    status: number;
    nickname: string;
    seat: number;
    handsCnt: number = -1;

    constructor(seat: number, player: Native.IMatchPlayer) {
        this.seat = seat;
        this.uid = player.uid;
        this.isBot = player.type === 1;
        this.avatar = player.avatar;
        this.status = 0;
        this.nickname = player.nickname;
    }
}
