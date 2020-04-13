enum PlayerState {
    QUEUE = 0, // 未加入
    READY = 1, // 准备就绪
    DEAL_DONE = 2, // 手牌就绪
    WAIT = 3, // 等待其他玩家行动
    ACTION = 4, // 行动阶段
    DEFUSE = 5, // 拆弹阶段
    ATTACK = 6, // 选择攻击对象
    PREDICT = 7, // 看预言牌阶段
    XRAY = 8, // 看透视牌阶段
    FAVOR_1 = 9, // 选择索要对象
    FAVOR_2 = 10, // 选择给出的牌
    DEAD = 11, // 死亡
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
            player.avatar = Config.avatarBase + player.avatar;
        }
        this.avatar = encodeURI(player.avatar);
        this.state = PlayerState.QUEUE;
        this.nickname = player.nickname;
    }
}
