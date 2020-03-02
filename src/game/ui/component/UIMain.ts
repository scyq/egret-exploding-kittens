class UIMain extends eui.Component implements eui.UIComponent {
    exit: eui.Button;

    testToast: eui.Button;
    testExit: eui.Button;
    testBomb: eui.Button;
    testUid: eui.Button;
    testMatch: eui.Button;
    testCookie: eui.Button;
    testDie: eui.Button;

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
        this.exit.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onExitClick,
            this
        );
        this.initTestListeners();
    }

    onExitClick() {
        GameMgr.inst.exitGame();
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
