class UIMain extends eui.Component implements eui.UIComponent {
    btnExit: eui.Button;

    bg1: eui.Image;
    testToast: eui.Button;
    testExit: eui.Button;
    testBomb: eui.Button;
    testUid: eui.Button;
    testMatch: eui.Button;
    testCookie: eui.Button;
    testDie: eui.Button;
    testWin: eui.Button;
    player0: UIPlayer; // self user
    player1: UIPlayer;
    player2: UIPlayer;
    player3: UIPlayer;
    player4: UIPlayer;
    player5: UIPlayer;
    userName: eui.Label;
    players: UIPlayer[];
    hands: eui.List;
    stackCnt: eui.Label;
    deck: eui.Image;
    stack: eui.Image;
    playArea: eui.Image;
    direction: eui.Image; ko

    btnDrawCard: eui.Button;
    btnPlayCard: eui.Button;

    private cardSmScale = 0.5;
    private cardsArray: eui.ArrayCollection = new eui.ArrayCollection();

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
        this.initListeners();
        this.initPlayers();
        this.initHands();

        this.userName.visible = false;
        this.stackCnt.visible = false;
        this.userAction(false);

        this.bgTween();
    }

    setPlayerData(data: Player[], userSeat: number) {
        for (let i = 0; i < this.players.length; i++) {
            this.players[i].setPlayer(
                data[(i + userSeat) % data.length],
                i == 0
            );
        }
        this.userName.text = data[userSeat].nickname;
        this.userName.visible = true;
    }

    setUserHands(hands: Card[]) {
        let tmp: { [img: string]: string }[] = [];
        for (const c of hands) {
            tmp.push(CardMgr.inst.cards[c]);
        }

        this.cardsArray.replaceAll(tmp);
        // this.hands.selectedIndex = 0;
    }

    initPlayers() {
        this.players = [
            this.player0,
            this.player1,
            this.player2,
            this.player3,
            this.player4,
            this.player5
        ];

        this.setDefaultAvatar();
    }

    initHands() {
        this.hands.dataProvider = this.cardsArray;
        this.hands.itemRenderer = UICardItem;
        this.hands.allowMultipleSelection = false;
    }

    initListeners() {
        this.btnExit.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onBtnExitClick,
            this
        );
        this.btnDrawCard.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onBtnDrawClick,
            this
        );
        this.btnPlayCard.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onBtnPlayClick,
            this
        );
        this.hands.addEventListener(
            eui.ItemTapEvent.ITEM_TAP,
            this.onHandsSelected,
            this
        );
        GameDispatcher.inst.addEventListener(
            EventName.HANDS_REFRESH,
            this.onHandsRefresh,
            this
        );
        GameDispatcher.inst.addEventListener(
            EventName.USER_DEFUSE,
            this.onUserDefuse,
            this
        );

        // TODO: remove this test part
        this.initTestListeners();
    }

    private setDefaultAvatar(): void {
        this.player0.setAvatar('Avatar_1_png');
        this.player1.setAvatar('Avatar_2_png');
        this.player2.setAvatar('Avatar_3_png');
        this.player3.setAvatar('Avatar_4_png');
        this.player4.setAvatar('Avatar_5_png');
        this.player5.setAvatar('Avatar_6_png');
    }

    updateRoomInfo() {
        this.updateDirection();
        this.updateHandsCnt();
        this.updateStackCnt();
    }

    updateHandsCnt() {
        for (let i = 0; i < this.players.length; i++) {
            this.players[i].update();
        }
    }

    updateStackCnt() {
        this.stackCnt.text = `剩余${GameMgr.inst.stackCnt}张`;
    }

    updateDirection() {
        this.direction.scaleX = GameMgr.inst.clockwise ? -1 : 1;
    }

    showHandsCnt(show: boolean = true) {
        for (let i = 1; i < this.players.length; i++) {
            this.players[i].handsCnt.visible = show;
            this.players[i].handsBg.visible = show;
        }
    }

    showStackCnt(show: boolean = true) {
        this.stackCnt.visible = show;
    }

    userAction(action: boolean) {
        this.btnDrawCard.visible = action;
        this.btnPlayCard.visible = action;
    }

    // 其他玩家抓牌动画
    drawCard(uid: number) {
        for (const uip of this.players) {
            if (uip.player.uid === uid) {
                this.deck.source = RES.getRes(
                    CardMgr.inst.cards[Card.DECK]['img']
                );
                this.deck.visible = true;
                this.deck.x = this.stack.x;
                this.deck.y = this.stack.y;
                this.deck.scaleX = this.stack.scaleX;
                this.deck.scaleY = this.stack.scaleY;
                const globalPos = uip.parent.localToGlobal(uip.x, uip.y);
                const localPos = this.deck.parent.globalToLocal(
                    globalPos.x,
                    globalPos.y
                );
                const x = localPos.x + this.deck.width * this.cardSmScale * 0.5;
                const y = localPos.y;
                const tw = egret.Tween.get(this.deck);
                tw.to(
                    {
                        x: x,
                        y: y,
                        scaleX: this.cardSmScale,
                        scaleY: this.cardSmScale
                    },
                    1000
                ).to({ visible: false }, 0);
                break;
            }
        }
    }

    // 其他玩家出牌动画
    playCard(uid: number, card: Card) {
        for (const uip of this.players) {
            if (uip.player.uid === uid) {
                this.deck.visible = true;
                this.deck.source = RES.getRes(
                    CardMgr.inst.cards[Card.DECK]['img']
                );
                this.deck.scaleX = this.cardSmScale;
                this.deck.scaleY = this.cardSmScale;
                const globalPos = uip.parent.localToGlobal(uip.x, uip.y);
                const localPos = this.deck.parent.globalToLocal(
                    globalPos.x,
                    globalPos.y
                );
                this.deck.x =
                    localPos.x + this.deck.width * this.cardSmScale * 0.5;
                this.deck.y = localPos.y;
                const tw = egret.Tween.get(this.deck);
                tw.to(
                    {
                        x: this.playArea.x,
                        y: this.playArea.y,
                        scaleX: this.playArea.scaleX,
                        scaleY: this.playArea.scaleY
                    },
                    1000
                )
                    .to({ visible: false }, 0)
                    .call(() => {
                        this.playArea.source = RES.getRes(
                            CardMgr.inst.cards[card]['img']
                        );
                        this.playArea.visible = true;
                    });
                break;
            }
        }
    }

    // 自己抓牌
    userDrawCardAnim() {
        // TODO: 玩家抓拍动画
        this.deck.visible = true;
        this.deck.x = this.stack.x;
        this.deck.y = this.stack.y;
        this.deck.scaleX = this.stack.scaleX;
        this.deck.scaleY = this.stack.scaleY;
        const last = this.hands.getChildAt(this.hands.numChildren - 1)
        const globalPos = last.parent.localToGlobal(last.x, last.y)
        const localPos = this.deck.parent.globalToLocal(globalPos.x, globalPos.y)
        const x = localPos.x
        const y = localPos.y

        const tw = egret.Tween.get(this.deck)
        tw.to(
            {
                x: x,
                y: y,
            },
            1000
        )
            .to({ visible: false }, 0)
            .call(() => {
                User.inst.checkNextCard();
            })
    }

    // 自己出牌
    userPlayCard(card: Card) {

    }

    showUserDefusPop() {
        console.log('showUserDefusPop()')
    }

    // 背景动画
    private bgTween(): void {
        const tw = egret.Tween.get(this.bg1, { loop: true });
        tw.to({ rotation: 360 }, 30000).to({ rotation: 0 }, 0);
    }

    onHandsSelected(e: eui.PropertyEvent) {
        GameDispatcher.inst.dispatchEvent(
            new egret.Event(EventName.HANDS_REFRESH, false, false, {
                selectedIndex: this.hands.selectedIndex
            })
        );
    }

    onHandsRefresh(e: eui.PropertyEvent) {
        this.setUserHands(User.inst.hands);
    }

    onUserDefuse(e: eui.PropertyEvent) {
        this.showUserDefusPop()
    }

    onBtnExitClick() {
        GameMgr.inst.exitGame();
    }

    onBtnDrawClick() {
        this.userDrawCardAnim()
        User.inst.drawACard();
    }

    onBtnPlayClick() {
        if (this.hands.selectedIndex) {
            User.inst.playerACard(this.hands.selectedIndex);
        }
    }

    /////////////// TEST ///////////////

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
        this.testWin.addEventListener(
            egret.TouchEvent.TOUCH_TAP,
            this.onTestWin,
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

    onTestWin() {
        GameMgr.inst.toWin();
    }
}
