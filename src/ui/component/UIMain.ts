class UIMain extends eui.Component implements eui.UIComponent {
    public table: eui.Image;
    public topList: eui.List;
    public dataArray: eui.ArrayCollection = new eui.ArrayCollection();

    public constructor() {
        super();
        this.skinName = 'resource/my_skins/Main.exml';
    }

    protected partAdded(partName: string, instance: any): void {
        console.log(partName);
        super.partAdded(partName, instance);
    }

    protected childrenCreated(): void {
        super.createChildren();
        this.OnInit();
    }

    protected OnInit(): void {
        this.topList.itemRenderer = UITopPlayerItem;
        this.topList.dataProvider = this.dataArray;
        const dataTestArray: number[] = [0, 1, 3, 4];
        this.dataArray.replaceAll(dataTestArray)
        console.log("aslkdjfa;lskdjf;alskdjf;lasjkdf")
    }
}