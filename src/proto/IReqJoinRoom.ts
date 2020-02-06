namespace Proto {
    /**
     * 登陆玩家列表数据接口
     */
    export declare interface IReqJoinRoom {
        uid: number;
        status: number;
        matchid: string;
        players: Proto.IReqPlayerInfo[];
    }

    /**
     * 玩家信息接口
     */
    export declare interface IReqPlayerInfo {
        uid: number;
        type: number;    // 1 = 机器人 0 = 正常玩家
        avatar: string;
        gameid: number;
        mobile: string;
        status: number;
        nickname: string;
        matchTime: string;
        preMatchId: string;
    }
}


