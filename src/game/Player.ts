enum PlayerState {
    QUEUE = 0, // 未加入
    READY = 1, // 准备就绪
    DEAL_DONE = 2, // 手牌就绪
    WAIT = 3, // 等待其他玩家行动
    ACTION = 4, // 行动阶段
    DEAD = 5 // 死亡
}

class Player {
    uid: number;
    isBot: boolean;
    avatar: string;
    status: PlayerState;
    nickname: string;
    seat: number;
    handsCnt: number = -1;

    constructor(seat: number, player: Native.IMatchPlayer) {
        this.seat = seat;
        this.uid = player.uid;
        this.isBot = player.type === 1;
        this.avatar = player.avatar;
        this.status = PlayerState.QUEUE;
        this.nickname = player.nickname;
    }
}
