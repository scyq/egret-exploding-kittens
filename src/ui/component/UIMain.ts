class UIMain extends eui.Component implements eui.UIComponent {
    public table: eui.Image;
    public topList: eui.List;
    public dataArray: eui.ArrayCollection = new eui.ArrayCollection();
    public exit: eui.Button;

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

    protected onInit(): void {
        this.topList.itemRenderer = UITopPlayerItem;
        this.topList.dataProvider = this.dataArray;
        const dataTestArray: number[] = [0, 1, 3, 4];
        this.dataArray.replaceAll(dataTestArray)
        this.exit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitClick, this);
    }

    protected onExitClick() {
        console.log('onExitClick')
        showAndroidToast("yoyoyoyoyoyyo");
    }
}