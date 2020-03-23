class User {
    private static $user: User;
    static get inst() {
        if (!User.$user) {
            User.$user = new User();
        }
        return User.$user;
    }
    private constructor() { }

    player: Player;
    private $hands: Card[] = []; // 手牌
    nextCard: Card;

    get hands() {
        return this.$hands;
    }

    set hands(hands: Card[]) {
        if (this.player === undefined) {
            return;
        }
        this.$hands = hands;
        this.player.handsCnt = this.$hands.length;
    }

    drawACard() {
        NetMgr.inst.req.drawACard({});
    }

    playerACard(cardIdx: number) {
        NetMgr.inst.req.playACard({
            cardIdx,
            target: undefined
        });
        const card = this.hands.splice(cardIdx, 1)[0];
        // TODO: card effect

        GameDispatcher.inst.dispatchEvent(
            new egret.Event(EventName.HANDS_REFRESH, false, false)
        );
    }

    checkNextCard() {
        if (this.nextCard === Card.BOOM) {
            // TODO: check defuse
            GameMgr.inst.toDie();
            console.log('USER_DEFUSE')
            GameDispatcher.inst.dispatchEvent(
                new egret.Event(EventName.USER_DEFUSE, false, false)
            );
        } else {
            User.inst.hands.push(this.nextCard);
            // this.$uiMain.userDrawCard(nextCard);
            console.log('HANDS_REFRESH')
            GameDispatcher.inst.dispatchEvent(
                new egret.Event(EventName.HANDS_REFRESH, false, false)
            );
        }
    }
}
