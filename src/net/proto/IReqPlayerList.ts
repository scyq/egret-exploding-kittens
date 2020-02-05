namespace Proto {
    /**
     * 登陆玩家列表数据接口
     */
    export declare interface IReqPlayerList {
        uid: number;
        status: number;
        matchid: string;
        players: Proto.IReqPlayerInfo[];
    }
}


