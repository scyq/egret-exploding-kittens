enum GameState {
    INIT = 0,
    READY = 1
}

// 和服务器一致
enum RoomState {
    SETUP = 0, // 等待玩家加入，全部玩家READY后发牌
    DEAL = 1, // shuffle，发牌/换手牌，全部结束后游戏开始
    PLAY = 2, // 游戏阶段
    RESULT = 3, // 结算
    OVER = 4, // 结束
    DONE = 5 // 结束所有操作
}

class GameMgr {
    private static readonly MAX_PLAYER_COUNT = 6;

    /* singleton */
    private static $mgr: GameMgr;
    static get inst(): GameMgr {
        if (!GameMgr.$mgr) {
            GameMgr.$mgr = new GameMgr();
        }
        return GameMgr.$mgr;
    }
    private constructor() { }

    private $players: Player[] = [];
    private readonly $user: User = User.inst;
    private $matchInfo: Native.IMatchInfo;
    private $rid: string;
    private $uid: number;
    private $gameid: number = Config.GameId;

    private $state: GameState = GameState.INIT;
    private $roomState: RoomState = RoomState.SETUP;
    private $cookie: string;

    private $loaded: boolean = false;   // scene $loaded
    private $uiMain: UIMain;
    userSeat: number = 0;
    stackCnt: number = 0;

    get uid(): number {
        return this.$uid
    }

    get rid(): string {
        return this.$rid
    }

    get gameid(): number {
        return this.$gameid
    }

    get players(): Player[] {
        return this.$players;
    }

    set uiMain(ui: UIMain) {
        this.$uiMain = ui;
    }

    getUid() {
        if (yess.exist) {
            egret.log('NATIVE mode');
            yess.getUid('platform.setUid');
        } else {
            egret.log('TEST mode');
            this.setUid(TestMode.MockUid);
        }
    }

    getMatchInfo() {
        if (yess.exist) {
            egret.log('NATIVE mode');
            yess.getBombsMatchInfo('platform.setMatchInfo');
        } else {
            egret.log('TEST mode');
            this.setMatchInfo(TestMode.MockMatchInfo);
        }
    }

    getCookie() {
        if (yess.exist) {
            egret.log('NATIVE mode');
            yess.getCookie('http://47.94.202.234', 'platform.setCookie');
        } else {
            egret.log('TEST mode');
            this.setCookie(TestMode.MockCookie);
        }
    }

    setUid(uid: string | number) {
        egret.log(`UID: ${uid}`);
        if (this.$state === GameState.INIT) {
            this.$uid = +uid;
            this.tryInitGame();
        }
    }

    setMatchInfo(info: Native.IMatchInfo) {
        egret.log(`GameState: ${this.$state}`);

        if (this.$state === GameState.INIT) {
            this.$matchInfo = info;
            for (let i = 0; i < this.$matchInfo.players.length; ++i) {
                const mip = this.$matchInfo.players[i];
                const player = new Player(i, mip);
                this.$players.push(player);
            }
            this.tryInitGame();
        }
    }

    setCookie(strCookie: string) {
        egret.log(`cookie: ${strCookie}`);
        if (this.$state === GameState.INIT) {
            this.$cookie = strCookie;
            this.tryInitGame();
        }
    }

    setUserHands(dealHands: Proto.IResDealHands) {
        console.log(dealHands)
        if (dealHands.uid === this.uid) {
            User.inst.hands = dealHands.hands;
            console.log(User.inst.hands);
            this.$uiMain.setUserHands(User.inst.hands)
        }
    }

    setComRoomInfo(roomInfo: Proto.IComRoomInfo) {
        this.$roomState = roomInfo.state;
        this.stackCnt = roomInfo.stackCnt;
        let tp: Player;
        let rp: Proto.IComRoomPlayer;
        for (let i = 0; i < this.$players.length; i++) {
            tp = this.$players[i];
            rp = roomInfo.players[i];
            tp.status = rp.state;
            tp.handsCnt = rp.handsCnt;
            tp.attackMark = rp.attackMark;
        }
        console.log('setComRoomInfo')
        console.log(roomInfo)
        this.$uiMain.updateRoomInfo();
        this.$uiMain.showHandsCnt();
        this.$uiMain.showStackCnt();
    }


    sceneLoaded() {
        if (this.$state === GameState.INIT) {
            this.$loaded = true;
            this.tryInitGame();
        }
    }

    private tryInitGame() {
        egret.log('Try init game');
        if (this.$state === GameState.INIT && this.$uid && this.$matchInfo && this.$cookie && this.$loaded) {
            this.initGame();
        }
    }

    private initGame() {
        egret.log('Init game');
        for (let i = 0; i < this.$players.length; i++) {
            if (this.$players[i].uid === this.$uid) {
                User.inst.player = this.$players[i];
                this.userSeat = i;
                break;
            }
        }

        this.$uiMain.setPlayerData(this.$players, this.userSeat);

        // egret.log(JSON.stringify(this.$matchInfo));

        this.$rid = this.$matchInfo.matchid;
        egret.log(`rid: ${this.$rid}`)

        this.$state = GameState.READY;
        this.reqJoinRoom();
    }

    reqJoinRoom() {
        const players: Proto.IComPlayerInfo[] = []
        for (const p of this.$matchInfo.players) {
            players.push({
                uid: p.uid,
                type: p.type,
                avatar: p.avatar,
                nickname: p.nickname,
                status: 0
            })
        }
        const playerList: Proto.IReqJoinRoom = {
            cookie: this.$cookie,
            players,
        }
        NetMgr.inst.req.joinRoom(playerList);
    }

    toDie() {
        NetMgr.inst.req.die(true)
    }

    startGame() {
        egret.log('game start')
        this.$uiMain.updateHandsCnt();
        this.$uiMain.showHandsCnt(true);
    }

    showToast(msg?: string) {
        if (!msg) {
            msg = 'yess yess yess'
        }
        yess.showAndroidToast(msg);
    }

    exitGame() {
        yess.finishAndroidPage();
    }

    gameBombsEnd() {
        yess.gameBombsEnd({
            name: 'this is a test bomb end json',
            status: 'i am dead'
        });
    }

    drawCard(uid: number, card?: Card) {
        if (uid === User.inst.player.uid) {
            // TODO: User draw a card
        } else {
            this.$uiMain.drawCard(uid);
        }
    }

    playCard(uid: number, card?: Card) {
        if (uid === User.inst.player.uid) {
            // TODO: User draw a card
        } else if (card !== undefined) {
            this.$uiMain.playCard(uid, card);
        }
    }

    gameover() {
        egret.log('Game Over');
        // TODO: exit game
    }

}
