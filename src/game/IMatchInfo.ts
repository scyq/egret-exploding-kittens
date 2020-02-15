namespace Native {
    /**
     * Andoird登陆玩家列表数据接口
     */
    export declare interface IMatchInfo {
        // uid: number;
        status: number;
        matchid: string;
        players: Native.IMatchPlayer[];
    }

    /**
     * 玩家信息接口
     */
    export declare interface IMatchPlayer {
        uid: number;
        type: number; // 1 = 机器人 0 = 正常玩家
        avatar: string;
        nickname: string;
        mobile:string;
        ranking?:number;
        diamond?:number;
        energy?:number;
        mb?:number;
        todayMb?:number;
    }
}
