class UIPlayer extends eui.Component implements eui.UIComponent {
    avatar: UIAvatar;
    playerName: eui.Label;
    handsBg: eui.Rect;
    handsCnt: eui.Label;
    player: Player;
    dead: eui.Rect;
    avatarBg0: eui.Rect;
    attack: eui.Image;
    favor: eui.Image;
    boom: eui.Image;
    bang: eui.Image;

    uiMain: UIMain;

    btnAttack: eui.Button;
    btnFavor: eui.Button;
    btnSwap: eui.Button;

    constructor() {
        super();
        this.skinName = 'yui.Player';
    }

    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }

    protected childrenCreated(): void {
        super.createChildren();
        this.onInit();
    }

    onInit(): void {
        this.handsCnt.visible = this.handsBg.visible = this.playerName.visible = false;
        this.initListeners();
    }

    private initListeners(): void {
        this.btnAttack.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onBtnAttackClick,
            this
        );

        this.btnFavor.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onBtnFavorClick,
            this
        );

        this.btnSwap.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onBtnSwapClick,
            this
        );
    }

    setPlayer(player: Player, isUser: boolean = false): void {
        this.player = player;
        this.playerName.text = player.nickname;
        this.seAvatarUrl(player.avatar);
        this.playerName.visible = !isUser;
        this.update();
    }

    update(): void {
        this.updateHandsCnt();
        this.updateState();
    }

    updateHandsCnt(): void {
        this.handsCnt.visible = this.handsBg.visible =
            this.player.state !== PlayerState.DEAD;
        this.handsCnt.text = this.player ? this.player.handsCnt.toString() : '';
    }

    updateState(): void {
        // console.log(`${this.player.nickname} ${this.player.state}`)
        this.bang.visible = false;
        this.attack.visible = false;
        this.boom.visible = false;
        this.favor.visible = false;
        if (this.player.state === PlayerState.DEFUSE) {
            this.boom.visible = true;
        } else if (this.player.state === PlayerState.DEAD) {
            this.dead.visible = true;
            this.bang.visible = true;
            this.avatarBg0.strokeColor = 0xcccccc;
            this.handsBg.visible = false;
            this.handsCnt.visible = false;
        } else if (this.player.state === PlayerState.FAVOR_2) {
            this.favor.visible = true;
        } else if (this.player.attackMark > 0) {
            this.attack.visible = true;
        }
    }

    showBtnAttack(show: boolean): void {
        this.btnAttack.visible = show;
    }

    showBtnFavor(show: boolean): void {
        this.btnFavor.visible = show;
    }

    showBtnSwap(show: boolean): void {
        this.btnSwap.visible = show;
    }

    setAvatar(avatar: string): void {
        this.avatar.setAvatar(avatar);
    }

    seAvatarUrl(avatarUrl: string): void {
        this.avatar.setAvatarUrl(avatarUrl);
    }

    setHandsCnt(handsCnt: number): void {
        this.handsCnt.text = handsCnt.toString();
    }

    onBtnAttackClick(): void {
        User.inst.attack(this.player.uid);
        if (this.uiMain) {
            this.uiMain.userAttack(false);
        }
    }

    onBtnFavorClick(): void {
        User.inst.favor(this.player.uid);
        if (this.uiMain) {
            this.uiMain.userFavor(false);
        }
    }

    onBtnSwapClick(): void {
        User.inst.swap(this.player.uid);
        if (this.uiMain) {
            this.uiMain.userSwap(false);
        }
    }
}
