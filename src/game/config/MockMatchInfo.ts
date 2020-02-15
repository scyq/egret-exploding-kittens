namespace TestMode {
    /**
     * status 游戏状态：
     * 0 => 匹配中
     * 1 => 匹配成功
     * -1 => 匹配失败
     * 10 => 游戏结算中
     * -10 => 游戏结算异常
     * 100 => 游戏结束
     */
    export const MockMatchInfo: Native.IMatchInfo = {
        // uid: 101,
        status: 1, // status = 1 参考以上结果
        matchid: '21234123412341234', // 用后续matchId 去进行游戏结算
        players: [
            {
                uid: 101,
                type: 1, // 1 = 机器人 0 = 正常玩家
                avatar: 'https://endaye.com/img/icon-att-01-64x64.png',
                mobile: '11291502685',
                nickname: 'player1',
            },
            {
                uid: 102,
                type: 1,
                avatar: 'https://endaye.com/img/icon-att-01-64x64.png',
                mobile: '11291502685',
                nickname: 'player2',
            },
            {
                uid: 103,
                type: 1,
                avatar: 'https://endaye.com/img/icon-att-01-64x64.png',
                mobile: '11291502685',
                nickname: 'player3',
            },
            {
                uid: 104,
                type: 1,
                avatar: 'https://endaye.com/img/icon-att-01-64x64.png',
                mobile: '11291502685',
                nickname: 'player4',
            },
            {
                uid: 105,
                type: 1,
                avatar: 'https://endaye.com/img/icon-att-01-64x64.png',
                mobile: '11291502685',
                nickname: 'player5',
            },
            {
                uid: 106,
                type: 1,
                avatar: 'https://endaye.com/img/icon-att-01-64x64.png',
                mobile: '11291502685',
                nickname: 'player6',
            }
        ]
    };

    export const MockUid: number = 101;

    export const MockCookie: string = 'mock cookie';
}
