enum GameState {
    INIT = 0,
    READY = 1
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
    private constructor() {
        egret.log('new GameMgr()');
    }

    private $roles: Role[] = [];
    private readonly $player: Player = Player.inst;
    private $matchInfo: Native.IMatchInfo;
    private $rid: string;
    private $uid: number;
    private $gameid: number = Config.GameId;

    private $state: GameState = GameState.INIT;
    private $cookie: string;

    private $loaded: boolean = false;   // scene loaded

    get uid(): number {
        return this.$uid
    }

    get rid(): string {
        return this.$rid
    }

    get gameid(): number {
        return this.$gameid
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

    setUid(uid: number) {
        egret.log(`UID: ${uid}`);

        if (this.$state === GameState.INIT) {
            this.$uid = uid;
            this.tryInitGame();
        }
    }

    setMatchInfo(info: Native.IMatchInfo) {
        egret.log(`GameState: ${this.$state}`);

        if (this.$state === GameState.INIT) {
            this.$matchInfo = info;
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
        egret.log(JSON.stringify(this.$matchInfo));

        this.$rid = this.$matchInfo.matchid;
        egret.log(`rid: ${this.$rid}`)
        for (let i = 0; i < this.$matchInfo.players.length; ++i) {
            const role = new Role(i, this.$matchInfo.players[i]);
            this.addRole(role);
            if (this.$uid === role.uid) {
                this.$player.role = this.$roles[0];
            }
        }
        this.$state = GameState.READY;
        this.reqJoinRoom();
    }

    private addRole(role: Role) {
        if (this.$roles.length < GameMgr.MAX_PLAYER_COUNT) {
            this.$roles.push(role);
        }
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
        NetMgr.inst.req.die({
            uid: this.$uid,
            gameid: this.$gameid,
            rid: this.$rid
        })
    }

    startGame() {
        egret.log('game start')
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

    gameover() {
        egret.log('Die');
    }
}
