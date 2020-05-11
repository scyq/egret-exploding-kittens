namespace Proto {
    export declare interface Req {
        gameid: number; // game id
        uid: number; // user id
        rid: string; // room id
        text?: string; // 文本(测试用)
        joinRoom?: IReqJoinRoom; // 玩家加入，房间匹配信息
        dealDone?: boolean; // 发牌结束
        die?: boolean; // 立即死亡
        win?: boolean; // 立即获胜
        drawACard?: IReqDrawACard; // 玩家抓一张牌
        playACard?: IReqPlayACard; // 玩家出一张牌
        giveACard?: IReqGiveACard; // 玩家给他人一张牌
        action?: boolean; // true:当前玩家继续; false:下一玩家
        attack?: IComCard; // 甩锅牌技能
        favor?: IComCard; // 索要牌技能
        favorGive?: IComCard; // 索要牌技能; 被索要的时候给出牌
        swap?: IComCard; // 交换牌技能
    }

    export declare interface Res {
        text?: string; // 文本(测试用)
        err?: IResError; // 错误
        startGame?: boolean; // 游戏开始
        overGame?: number[]; // 游戏结束,死亡玩家uid数组
        dealHands?: IResDealHands; // 手牌
        roomInfo?: IComRoomInfo; // 房间信息
        drawCard?: IComCard; // 抓到的牌
        playCard?: IComCard; // 打出的牌
        predict?: IComCard; // 预言牌技能
        xray?: IComCard[]; // 透视牌技能
    }

    /*****************************/
    /***********  Req  ***********/
    /*****************************/

    /**
     * 登陆玩家列表数据接口
     */
    export declare interface IReqJoinRoom {
        cookie: string; // 玩家缓存cookie
        wdh: number; // 武道会id
        players: IComPlayerInfo[]; // 房间玩家基本信息
    }

    export declare interface IResJoinRoom {
        start: boolean;
        players: IComPlayerInfo[];
    }

    export declare interface IReqDrawACard { }

    export declare interface IReqPlayACard {
        cardIdx: number; // 玩家打出的第几张手牌
        target?: number[]; // 牌的技能指定的目标玩家
    }

    export declare interface IReqGiveACard {
        cardIdx: number;
        target?: number[];
    }

    export declare interface IReqChooseTarget {
        card: number; // 在Deck.ts中, 对应的 enum Card
        target?: number[]; // 牌的技能指定的目标玩家
    }

    /*****************************/
    /***********  Res  ***********/
    /*****************************/

    export declare interface IResError {
        uid: number; // user id
        msg: string; // error message
        exit: boolean; // 客户端是否直接退出游戏
    }

    export declare interface IResDealHands {
        uid: number; // user id
        hands: number[]; // 手牌数组; 手牌在Deck.ts中, 对应的 enum Card
        mulliganCnt: number; // 剩余起手牌调度次数
    }

    export declare interface IResDie {
        uids: number[]; // dead user ids
    }

    /******************************/
    /*********** Common ***********/
    /******************************/

    /**
     * 玩家信息接口
     */
    export declare interface IComPlayerInfo {
        uid: number; // user id
        type: number; // 1 = 机器人 0 = 正常玩家
        avatar: string; // 头像
        nickname: string; // 玩家昵称
        status: number; // 0 = wait, 1 = ready, 2 = dead
    }

    /**
     * 房间信息
     */
    export declare interface IComRoomInfo {
        state: RoomState; // 房间状态
        stackCnt: number; // 牌堆剩余牌数
        clockwise: boolean; // 当前玩家先后顺序
        players: IComRoomPlayer[]; // 房间内玩家信息
    }

    /**
     * 房间内的玩家信息
     */
    export declare interface IComRoomPlayer {
        uid: number; // user id
        state: PlayerState; // 玩家状态
        alive: boolean; // 活着/死亡
        online: boolean; // 是否掉线
        hands: Card[]; // 手牌
        handsCnt: number; // 手牌数
        attackMark: number; // 攻击标记数量
    }

    /**
     * 出牌/抓牌
     */
    export declare interface IComCard {
        uid: number; // user id
        card?: number; // 在Deck.ts中, 对应的 enum Card
        target?: number[]; // 牌的技能指定的目标玩家
    }
}
