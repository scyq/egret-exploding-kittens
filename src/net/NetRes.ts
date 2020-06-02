class NetRes {
    private readonly handlers: {
        msgType: Msg.Message.CommandType;
        func: (msg: Msg.IMessage) => void;
    }[] = [
        { msgType: Msg.Message.CommandType.NORMAL, func: this.text },
        { msgType: Msg.Message.CommandType.HEARTBEAT_RESPONSE, func: this.dealHands },
        { msgType: Msg.Message.CommandType.JOIN_ROOM, func: this.startGame },
        { msgType: Msg.Message.CommandType.HANDS_UPDATE, func: this.overGame },
        { msgType: Msg.Message.CommandType.ADJUST_CARD, func: this.roomInfo },
        { msgType: Msg.Message.CommandType.ROOM_UPDATE, func: this.drawCard },
        { msgType: Msg.Message.CommandType.PICK, func: this.playCard },
        { msgType: Msg.Message.CommandType.RELEASE, func: this.predict },
        { msgType: Msg.Message.CommandType.CLEAR_BOOM, func: this.xray },
        { msgType: Msg.Message.CommandType.TEST, func: this.xray },
    ];

    response(msg: Msg.IMessage) {
        console.log("NetMgr.inst.response()")
        console.log(msg);
        this.handlers[msg.cmd].func(msg);
    }

    joinRoom(msg: Msg.IMessage) {
        if (msg.joinRoomResp) {
            console.log(msg.joinRoomReq)
        }
    }

    adjustCard(msg: Msg.IMessage) {
        if (msg.adjustCardResp) {
            console.log(msg.adjustCardReq);
        }
    }

    roomInfo(msg: Msg.IMessage) {
        if (msg.roomInfo) {
            console.log(msg.roomInfo);
        }
    }

    getCard(msg: Msg.IMessage) {
        if (msg.getCardInfo) {
            console.log(msg.getCardInfo);
        }
    }


    text(res: Proto.Res): void {
        if (res === undefined || res.text === undefined) {
            return;
        }
        egret.log(res.text);
        // GameDispatcher.inst.dispatchEvent(
        //     new egret.Event(EventName.TEST, false, false, { msg: res.text })
        // );
    }

    err(res: Proto.Res): void {
        // if (res === undefined || res.err === undefined) {
        //     return;
        // }
        // GameMgr.inst.handleError(res.err);
    }

    dealHands(res: Proto.Res): void {
        // if (res === undefined || res.dealHands === undefined) {
        //     return;
        // }
        // GameMgr.inst.setUserHands(res.dealHands);
    }

    // roomInfo(res: Proto.Res): void {
    //     // if (res === undefined || res.roomInfo === undefined) {
    //     //     return;
    //     // }
    //     // GameMgr.inst.setComRoomInfo(res.roomInfo);
    // }

    startGame(res: Proto.Res): void {
        // if (res === undefined || res.startGame === undefined) {
        //     return;
        // }
        // GameMgr.inst.startGame();
    }

    overGame(res: Proto.Res): void {
        // if (res === undefined || res.overGame === undefined) {
        //     return;
        // }
        // GameMgr.inst.gameover(res.overGame);
        // TODO: check others
    }

    drawCard(res: Proto.Res): void {
        // if (res === undefined || res.drawCard === undefined) {
        //     return;
        // }
        // GameMgr.inst.drawCard(res.drawCard.uid, res.drawCard.card);
    }

    playCard(res: Proto.Res): void {
        // if (res === undefined || res.playCard === undefined) {
        //     return;
        // }
        // GameMgr.inst.playCard(res.playCard.uid, res.playCard.card);
    }

    predict(res: Proto.Res): void {
        // if (res === undefined || res.predict === undefined) {
        //     return;
        // }
        // User.inst.boomSeq = res.predict.target[0];
    }

    xray(res: Proto.Res): void {
        // if (res === undefined || res.xray === undefined) {
        //     return;
        // }
        // const card3: Card[] = [];
        // for (let i = 0; i < res.xray.length; i++) {
        //     card3.push(res.xray[i].card as Card);
        // }
        // User.inst.card3 = card3;
    }
}
