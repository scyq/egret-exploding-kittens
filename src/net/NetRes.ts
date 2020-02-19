class NetRes {
    public readonly handles: {
        msg: string,
        func: (res: Proto.Res) => void
    }[] = [
        { msg: 'text', func: this.text },
        { msg: 'joinRoom', func: this.joinRoom },
        { msg: 'startGame', func: this.startGame },
        { msg: 'overGame', func: this.overGame },
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

    public overGame(res: Proto.Res): void {
        if (res === undefined || res.overGame === undefined) { return; }

        if (res.overGame) {
            GameMgr.inst.gameover();
        } else {
            egret.log('game continues')
        }

        // TODO: check others
    }
}
