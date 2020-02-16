class UIMainPanel extends UIBasePanel {

    private textField: egret.TextField;
    private bgImg: egret.Bitmap;

    protected onInit(): void {
        this.bgImg = new egret.Bitmap();
        this.bgImg.texture = RES.getRes('background_png');
        this.bgImg.width = this.stage.stageWidth;
        this.bgImg.height = this.stage.stageHeight;
        this.addChild(this.bgImg);

        const uiMain: UIMain = new UIMain();
        this.addChild(uiMain);

        // const self = this;

        // const sky = this.createBitmapByName('background_png');
        // this.addChild(sky);
        // const stageW = this.stage.stageWidth;
        // const stageH = this.stage.stageHeight;
        // sky.width = stageW;
        // sky.height = stageH;

        // let topMask = new egret.Shape();
        // topMask.graphics.beginFill(0x000000, 0.5);
        // topMask.graphics.drawRect(0, 0, stageW, 172);
        // topMask.graphics.endFill();
        // topMask.y = 33;
        // this.addChild(topMask);

        // let icon: egret.Bitmap = this.createBitmapByName('egret_icon_png');
        // this.addChild(icon);
        // icon.x = 26;
        // icon.y = 33;

        // let line = new egret.Shape();
        // line.graphics.lineStyle(2, 0xffffff);
        // line.graphics.moveTo(0, 0);
        // line.graphics.lineTo(0, 117);
        // line.graphics.endFill();
        // line.x = 172;
        // line.y = 61;
        // this.addChild(line);

        // let colorLabel = new egret.TextField();
        // colorLabel.textColor = 0xffffff;
        // colorLabel.width = stageW - 172;
        // colorLabel.textAlign = 'center';
        // colorLabel.text = 'Hello Egret';
        // colorLabel.size = 24;
        // colorLabel.x = 172;
        // colorLabel.y = 80;
        // this.addChild(colorLabel);

        // let textField = new egret.TextField();
        // this.addChild(textField);
        // textField.alpha = 0;
        // textField.width = stageW - 172;
        // textField.textAlign = egret.HorizontalAlign.CENTER;
        // textField.size = 24;
        // textField.textColor = 0xffffff;
        // textField.x = 172;
        // textField.y = 135;
        // this.textField = textField;

        // let button = new eui.Button();
        // button.label = 'Click!';
        // button.horizontalCenter = 0;
        // button.verticalCenter = 0;
        // this.addChild(button);
        // button.addEventListener(
        //     egret.TouchEvent.TOUCH_TAP,
        //     this.onButtonClick,
        //     this
        // );

        // this.stage.addEventListener(
        //     egret.TouchEvent.TOUCH_BEGIN,
        //     () => {
        //         self.sendMessage('message content');
        //     },
        //     this
        // );

        // GameDispatcher.inst.addEventListener(
        //     EventName.TEST,
        //     this.receiveMessage,
        //     this
        // );



        // const result = await RES.getResAsync('description_json');
        // this.startAnimation(result);
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
