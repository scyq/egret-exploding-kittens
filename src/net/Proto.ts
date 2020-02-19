namespace Proto {
    export declare interface Req {
        gameid: number;
        uid: number;
        rid: string;
        text?: string;
        joinRoom?: IReqJoinRoom;
        die?: boolean;
    }

    export declare interface Res {
        text?: string;
        startGame?: boolean;
        overGame?: boolean;
        joinRoom?: IResJoinRoom;
    }

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
}
