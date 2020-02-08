class UIBasePanel extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        // 当被添加到舞台的时候触发 (被添加到舞台,说明资源组已经加载完成)
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createView, this)
    }

    protected createView(): void {
        console.log(`Add to stage ${this.getName()}`);
        this.onInit();
    }

    protected onInit(): void { }

    protected getName(): string {
        let comp: any = this.constructor;
        return comp.name;
    }
}