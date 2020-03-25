enum PlayerState {
    QUEUE = 0, // 未加入
    READY = 1, // 准备就绪
    DEAL_DONE = 2, // 手牌就绪
    WAIT = 3, // 等待其他玩家行动
    ACTION = 4, // 行动阶段
    DEFUSE = 5, // 拆弹阶段
    DEAD = 6 // 死亡
}

class Player {
    uid: number;
    isBot: boolean;
    avatar: string;
    state: PlayerState;
    nickname: string;
    seat: number;
    attackMark: number = 0;
    handsCnt: number = -1;

    constructor(seat: number, player: Native.IMatchPlayer) {
        this.seat = seat;
        this.uid = player.uid;
        this.isBot = player.type === 1;
        if (player.avatar.substr(0, 4) !== 'http') {
            player.avatar = Config.avatarBase + player.avatar
        }
        this.avatar = player.avatar;
        this.state = PlayerState.QUEUE;
        this.nickname = player.nickname;
    }
}
