class Role {
    public uid: number;
    public isBot: boolean;
    public avatar: string;
    public status: number;
    public nickname: string;
    public seat: number;

    public constructor(seat: number, role: Native.IMatchPlayer) {
        this.seat = seat;
        this.uid = role.uid;
        this.isBot = role.type === 1;
        this.avatar = role.avatar;
        this.status = 0;
        this.nickname = role.nickname;
    }
}
