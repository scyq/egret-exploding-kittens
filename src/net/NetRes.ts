class NetRes {
    public readonly handles: {
        msg: string,
        func: (res: Proto.Res) => void
    }[] = [
        { msg: 'text', func: this.text },
        { msg: 'joinRoom', func: this.joinRoom },
        { msg: 'startGame', func: this.startGame },
        { msg: 'die', func: this.die },
    ];

    public text(res: Proto.Res): void {
        if (res === undefined || res.text === undefined) { return; }
        egret.log(res.text);
        // GameDispatcher.inst.dispatchEvent(
        //     new egret.Event(EventName.TEST, false, false, { msg: res.text })
        // );
    }

    public joinRoom(res: Proto.Res): void {
        if (res === undefined || res.joinRoom === undefined) { return; }
        // TODO: update player status, start not here
    }

    public startGame(res: Proto.Res): void {
        if (res === undefined || res.startGame === undefined) { return; }
        if (res.startGame) {
            GameMgr.inst.startGame();
        }
    }

    public die(res: Proto.Res): void {
        if (res === undefined || res.die === undefined) { return; }

        for (const uid of res.die.uids) {
            if (uid === GameMgr.inst.uid) {
                GameMgr.inst.gameover();
            }
        }

        // TODO: check others
    }
}
