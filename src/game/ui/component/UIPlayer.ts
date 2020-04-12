class UIPlayer extends eui.Component implements eui.UIComponent {
    avatar: UIAvatar;
    playerName: eui.Label;
    handsBg: eui.Rect;
    handsCnt: eui.Label;
    player: Player;
    dead: eui.Rect;
    avatarBg0: eui.Rect;
    attack: eui.Image;
    boom: eui.Image;
    bang: eui.Image;

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
    }

    setPlayer(player: Player, isUser: boolean = false): void {
        this.player = player;
        this.playerName.text = player.nickname;
        this.seAvatarUrl(player.avatar);
        this.playerName.visible = !isUser;
        this.update();
    }

    update() {
        this.updateHandsCnt();
        this.updateState();
    }

    updateHandsCnt() {
        this.handsCnt.visible = this.handsBg.visible = this.player.state !== PlayerState.DEAD;
        this.handsCnt.text = this.player ? this.player.handsCnt.toString() : '';
    }

    updateState() {
        // console.log(`${this.player.nickname} ${this.player.state}`)
        if (this.player.state === PlayerState.DEFUSE) {
            this.boom.visible = true;
            this.bang.visible = false;
            this.attack.visible = false;
        } else if (this.player.state === PlayerState.DEAD) {
            this.dead.visible = true;
            this.avatarBg0.strokeColor = 0xcccccc;
            this.attack.visible = false;
            this.boom.visible = false;
            this.bang.visible = true;
            this.handsBg.visible = false;
            this.handsCnt.visible = false;
        } else if (this.player.attackMark > 0) {
            this.boom.visible = false;
            this.attack.visible = true;
        } else {
            this.bang.visible = false;
            this.attack.visible = false;
            this.boom.visible = false;
        }
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
}
