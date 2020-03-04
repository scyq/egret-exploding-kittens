class UIMainPanel extends UIBasePanel {

    private textField: egret.TextField;
    private bgImg: egret.Bitmap;

    protected onInit(): void {
        this.bgImg = new egret.Bitmap();
        this.bgImg.texture = RES.getRes('Background_0_png');
        this.bgImg.width = this.stage.stageWidth;
        this.bgImg.height = this.stage.stageHeight;
        this.addChild(this.bgImg);

        const uiMain: UIMain = new UIMain();
        this.addChild(uiMain);
        uiMain.width = this.stage.stageWidth;
        uiMain.height = this.stage.stageHeight;
        GameMgr.inst.uiMain = uiMain;
    }

    private sendMessage(msg: string): void {
        this.trace(`send message: ${msg}`);
        NetMgr.inst.req.text(msg);
    }

    private receiveMessage(evt: egret.Event): void {
        this.trace(`recieve message: ${evt.data.msg}`);
    }

    private trace(msg: string): void {
        this.textField.text += '\n' + msg;
    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    private startAnimation(result: Array<any>): void {
        let parser = new egret.HtmlTextParser();

        let textflowArr = result.map((text) => parser.parse(text));
        let textField = this.textField;
        let count = -1;
        let change = () => {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            let textFlow = textflowArr[count];

            // 切换描述内容
            // Switch to described content
            textField.textFlow = textFlow;
            let tw = egret.Tween.get(textField);
            tw.to({ alpha: 1 }, 200);
            tw.wait(2000);
            tw.to({ alpha: 0 }, 200);
            tw.call(change, this);
        };

        change();
    }

    /**
     * 点击按钮
     * Click the button
     */
    private onButtonClick(e: egret.TouchEvent) {
        let panel = new eui.Panel();
        panel.title = 'Title';
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
    }
}
