class Player {
    private static $p: Player;
    static get inst() {
        if (!Player.$p) {
            Player.$p = new Player();
        }
        return Player.$p;
    }
    private constructor() {}

    private $role: Role;

    set role(role: Role) {
        this.$role = role;
    }
}
