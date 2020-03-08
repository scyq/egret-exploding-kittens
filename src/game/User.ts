class User {
    private static $user: User;
    static get inst() {
        if (!User.$user) {
            User.$user = new User();
        }
        return User.$user;
    }
    private constructor() {}

    private $player: Player;
    private $hands: Card[] = []; // 手牌

    set player(player: Player) {
        this.$player = player;
    }

    get hands() {
        return this.$hands;
    }

    set hands(hands: Card[]) {
        if (this.$player === undefined) {return;}
        this.$hands = hands;
        this.$player.handsCnt = this.$hands.length;
    }
}
