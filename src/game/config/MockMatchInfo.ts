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
                nickname: '玩家1'
            },
            {
                uid: 102,
                type: 1,
                avatar: 'https://endaye.com/img/icon-shield-01-64x64.png',
                mobile: '11291502685',
                nickname: '玩家2'
            },
            {
                uid: 103,
                type: 0,
                avatar: 'https://endaye.com/img/icon-cane-01-64x64.png',
                mobile: '11291502685',
                nickname: '玩家3'
            },
            {
                uid: 104,
                type: 1,
                avatar: 'https://endaye.com/img/icon-magic-01-64x64.png',
                mobile: '11291502685',
                nickname: '玩家4'
            },
            {
                uid: 105,
                type: 1,
                avatar: 'https://endaye.com/img/icon-att-01-64x64.png',
                mobile: '11291502685',
                nickname: '玩家5'
            },
            {
                uid: 106,
                type: 1,
                avatar: 'https://endaye.com/img/icon-shield-01-64x64.png',
                mobile: '11291502685',
                nickname: '玩家6'
            }
        ]
    };

    export const MockUid: number = 103;
    export const MockWdh: number = -1;

    export const MockCookie: string = 'mock cookie';
}
