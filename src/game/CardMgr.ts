enum Card {
    BOOM = 0, // 炸弹 x 5
    DEFUSE = 1, // 拆除 x 7
    SHUFFLE = 2, // 洗牌 x 6
    DRAWBACK = 3, // 抽底 x 6
    ATTACK = 4, // 甩锅 x 4
    ATTACT2 = 5, // 甩锅2 x2
    PREDICT = 6, // 预言 x 6
    XRAY = 7, // 透视 x 6
    REVERSE = 8, // 转向 x 6
    SKIP = 9, // 跳过 x 6
    FAVOR = 10, // 索要 x 5
    SWAP = 11, // 交换 x 5
    DECK = 12 // 卡背
}

class CardMgr {
    private static $mgr: CardMgr;
    static get inst(): CardMgr {
        if (!CardMgr.$mgr) {
            CardMgr.$mgr = new CardMgr();
        }
        return CardMgr.$mgr;
    }

    readonly cards: { [card: number]: { [img: string]: string } } = {}

    private constructor() {
        this.initCards();
    }

    initCards() {
        this.cards[Card.BOOM] = { img: 'Card_Boom_png' }
        this.cards[Card.DEFUSE] = { img: 'Card_Defuse_png' }
        this.cards[Card.SHUFFLE] = { img: 'Card_Shuffle_png' }
        this.cards[Card.DRAWBACK] = { img: 'Card_Draw_Last_png' }
        this.cards[Card.ATTACK] = { img: 'Card_Attack_png' }
        this.cards[Card.ATTACT2] = { img: 'Card_Attack_Double_png' }
        this.cards[Card.PREDICT] = { img: 'Card_Predict_png' }
        this.cards[Card.XRAY] = { img: 'Card_Xray_png' }
        this.cards[Card.REVERSE] = { img: 'Card_Reverse_png' }
        this.cards[Card.SKIP] = { img: 'Card_Skip_png' }
        this.cards[Card.FAVOR] = { img: 'Card_Favor_png' }
        this.cards[Card.SWAP] = { img: 'Card_Swap_png' }
        this.cards[Card.DECK] = { img: 'Deck_png' }
    }
}