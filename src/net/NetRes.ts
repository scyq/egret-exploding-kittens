class NetRes {
    public readonly handles: {
        msg: string,
        func: (res: Proto.Res) => void
    }[] = [
        { msg: 'text', func: this.text },
        { msg: 'joinRoom', func: this.joinRoom },
        { msg: 'dealHands', func: this.dealHands },
        { msg: 'startGame', func: this.startGame },
        { msg: 'overGame', func: this.overGame },
        { msg: 'roomInfo', func: this.roomInfo },
        { msg: 'drawCard', func: this.drawCard },
        { msg: 'playCard', func: this.playCard },
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

    public dealHands(res: Proto.Res): void {
        if (res === undefined || res.dealHands === undefined) { return; }
        GameMgr.inst.setUserHands(res.dealHands);
        console.log(res);
    }

    public roomInfo(res: Proto.Res): void {
        if (res === undefined || res.roomInfo === undefined) { return; }
        GameMgr.inst.setComRoomInfo(res.roomInfo);
    }

    public drawCard(res: Proto.Res): void {
        if (res === undefined || res.drawCard === undefined) { return; }
        GameMgr.inst.drawCard(res.drawCard.uid, res.drawCard.card);
    }

    public playCard(res: Proto.Res): void {
        if (res === undefined || res.playCard === undefined) { return; }
        GameMgr.inst.playCard(res.playCard.uid, res.playCard.card);
    }

    public startGame(res: Proto.Res): void {
        if (res === undefined || res.startGame === undefined) { return; }
        GameMgr.inst.startGame();
    }

    public overGame(res: Proto.Res): void {
        if (res === undefined || res.overGame === undefined) { return; }
        GameMgr.inst.gameover();
        // TODO: check others
    }
}
