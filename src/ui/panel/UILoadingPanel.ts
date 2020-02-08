class UILoadingPanel extends UIBasePanel implements RES.PromiseTaskReporter {

    private textField: egret.TextField;
    private bgImg: egret.Bitmap;

    protected onInit(): void {
        const stageW = this.stage.stageWidth;
        const stageH = this.stage.stageHeight;

        this.bgImg = new egret.Bitmap();
        this.bgImg.texture = RES.getRes('background_png');
        this.addChild(this.bgImg);

        this.bgImg.width = stageW;
        this.bgImg.height = stageH;

        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.width = stageW;
        this.textField.y = stageH * .5 - 50;
        this.textField.height = 100;
        this.textField.textAlign = 'center';
    }

    public onProgress(current: number, total: number): void {
        this.textField.text = `Loading...${current}/${total}`;
    }
}
