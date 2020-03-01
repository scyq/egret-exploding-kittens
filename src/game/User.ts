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

    set player(player: Player) {
        this.$player = player;
    }
}
