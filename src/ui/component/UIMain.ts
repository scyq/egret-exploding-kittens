class UIMain extends eui.Component implements eui.UIComponent {
    public table: eui.Image;
    public topList: eui.List;
    public dataArray: eui.ArrayCollection = new eui.ArrayCollection();
    public exit: eui.Button;

    public testToast: eui.Button;
    public testExit: eui.Button;
    public testBomb: eui.Button;
    public testMatch: eui.Button;

    public constructor() {
        super();
        this.skinName = 'resource/my_skins/Main.exml';
    }

    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }

    protected childrenCreated(): void {
        super.createChildren();
        this.onInit();
    }

    onInit(): void {
        this.topList.itemRenderer = UITopPlayerItem;
        this.topList.dataProvider = this.dataArray;
        const dataTestArray: number[] = [0, 1, 3, 4];
        this.dataArray.replaceAll(dataTestArray)
        this.exit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitClick, this);
        this.initTestListeners();
    }

    onExitClick() {
        yess.finishAndroidPage();
    }

    initTestListeners() {
        this.testToast.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTestToast, this);
        this.testExit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTestExit, this);
        this.testBomb.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTestBomb, this);
        this.testMatch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTestMatch, this);
    }

    onTestToast() {
        yess.showAndroidToast("yoyoyuoyoyoyoyo");
    }

    onTestExit() {
        yess.finishAndroidPage();
    }

    onTestBomb() {
        yess.gameBombsEnd({
            name: "this is a test bomb end json",
            status: "i am dead"
        });
    }

    onTestMatch() {
        yess.getBombsMatchInfo("platform.getMatchInfo");
    }
}