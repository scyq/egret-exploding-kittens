namespace Proto {
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

