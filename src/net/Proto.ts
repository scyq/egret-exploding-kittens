namespace Proto {
    export declare interface Req {
        gameid: number;
        uid: number;
        rid: string;
        text?: string;
        joinRoom?: IReqJoinRoom;
        dealDone?: boolean;
        die?: boolean;
        drawACard?: IReqDrawACard;
        playACard?: IReqPlayACard;
    }

    export declare interface Res {
        text?: string;
        startGame?: boolean;
        overGame?: boolean;
        joinRoom?: IResJoinRoom;
        dealHands?: IResDealHands;
        roomInfo?: IComRoomInfo;
        drawCard?: IComCard;
        playCard?: IComCard;
    }

    /*****************************/
    /***********  Req  ***********/
    /*****************************/

    /**
     * 登陆玩家列表数据接口
     */
    export declare interface IReqJoinRoom {
        cookie: string;
        players: IComPlayerInfo[];
    }

    export declare interface IResJoinRoom {
        start: boolean;
        players: IComPlayerInfo[];
    }

    export declare interface IReqDrawACard {}

    export declare interface IReqPlayACard {
        cardIdx: number;
        target?: number;
    }

    /*****************************/
    /***********  Res  ***********/
    /*****************************/

    export declare interface IResDealHands {
        uid: number;
        hands: number[];
        mulliganCnt: number;
    }

    export declare interface IResDie {
        uids: number[];
    }

    /******************************/
    /*********** Common ***********/
    /******************************/

    /**
     * 玩家信息接口
     */
    export declare interface IComPlayerInfo {
        uid: number;
        type: number; // 1 = 机器人 0 = 正常玩家
        avatar: string;
        nickname: string;
        status: number; // 0 = wait, 1 = ready, 2 = dead
    }

    /**
     * 房间信息
     */
    export declare interface IComRoomInfo {
        state: RoomState;
        stackCnt: number;
        players: IComRoomPlayer[];
    }

    /**
     * 房间内的玩家信息
     */
    export declare interface IComRoomPlayer {
        uid: number;
        state: PlayerState;
        alive: boolean;
        online: boolean;
        handsCnt: number; // 手牌数
        attackMark: number; // 攻击标记数量
    }

    /**
     * 出牌/抓牌
     */
    export declare interface IComCard {
        uid: number;
        card?: number;
    }
}
