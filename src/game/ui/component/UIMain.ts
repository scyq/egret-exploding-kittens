class UIMain extends eui.Component implements eui.UIComponent {
    exit: eui.Button;

    testToast: eui.Button;
    testExit: eui.Button;
    testBomb: eui.Button;
    testUid: eui.Button;
    testMatch: eui.Button;
    testCookie: eui.Button;
    testDie: eui.Button;
    player0: UIPlayer;  // self user
    player1: UIPlayer;
    player2: UIPlayer;
    player3: UIPlayer;
    player4: UIPlayer;
    player5: UIPlayer;
    userName: eui.Label;
    players: UIPlayer[];

    constructor() {
        super();
        this.skinName = 'yui.Main';
    }

    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }

    protected childrenCreated(): void {
        super.createChildren();
        this.onInit();
    }

    onInit(): void {
        this.initListeners();

        this.userName.visible = false;

        this.players = [
            this.player0,
            this.player1,
            this.player2,
            this.player3,
            this.player4,
            this.player5,
        ]

        this.setDefaultAvatar();
    }

    setDefaultAvatar(): void {
        this.player0.setAvatar('Avatar_1_png')
        this.player1.setAvatar('Avatar_2_png')
        this.player2.setAvatar('Avatar_3_png')
        this.player3.setAvatar('Avatar_4_png')
        this.player4.setAvatar('Avatar_5_png')
        this.player5.setAvatar('Avatar_6_png')
    }

    setPlayerData(data: Player[], userSeat: number) {
        for (let i = 0; i < this.players.length; i++) {
            this.players[i].setPlayer(data[(i + userSeat) % data.length], i == 0);
        }
        this.userName.text = data[userSeat].nickname
        this.userName.visible = true;
    }


    initListeners() {
        this.exit.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onExitClick,
            this
        );

        // TODO: remove this test part
        this.initTestListeners();
    }

    initTestListeners() {
        this.testToast.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onTestToast,
            this
        );
        this.testExit.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onTestExit,
            this
        );
        this.testBomb.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onTestBomb,
            this
        );
        this.testUid.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onTestUid,
            this
        );
        this.testMatch.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onTestMatch,
            this
        );
        this.testCookie.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onTestCookie,
            this
        );
        this.testDie.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onTestDie,
            this
        );
    }

    onExitClick() {
        GameMgr.inst.exitGame();
    }


    onTestToast() {
        GameMgr.inst.showToast();
    }

    onTestExit() {
        GameMgr.inst.exitGame();
    }

    onTestBomb() {
        GameMgr.inst.gameBombsEnd();
    }

    onTestUid() {
        GameMgr.inst.getUid();
    }

    onTestMatch() {
        GameMgr.inst.getMatchInfo();
    }

    onTestCookie() {
        GameMgr.inst.getCookie();
    }

    onTestDie() {
        GameMgr.inst.toDie();
    }
}
