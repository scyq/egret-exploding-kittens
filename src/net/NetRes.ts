class NetRes {
    private readonly handlers: {
        msgType: Msg.Message.CommandType;
        func: (msg: Msg.IMessage) => void;
    }[] = [
        { msgType: Msg.Message.CommandType.HEARTBEAT_RESP, func: this.heartBeat },
        { msgType: Msg.Message.CommandType.RELEASE_CARD_RESP, func: this.releaseCard },
        { msgType: Msg.Message.CommandType.ROOM_INFO_NTF, func: this.roomInfo },
        { msgType: Msg.Message.CommandType.GAME_RANK_NTF, func: this.gameRank },
        { msgType: Msg.Message.CommandType.ERROR, func: this.error },
    ];

    response(msg: Msg.IMessage) {
        egret.log(`res: ${msg.content}`);
        this.handlers[msg.cmd].func(msg);
    }

    heartBeat(msg: Msg.IMessage) {
        egret.log('HEARTBEAT_RESP')
    }

    releaseCard(msg: Msg.IMessage) {
        if (msg.releaseCardResp) {
            egret.log(msg.releaseCardResp);
        }
    }

    roomInfo(msg: Msg.IMessage) {
        if (msg.roomInfoNtf) {
            egret.log(msg.roomInfoNtf);
            GameMgr.inst.updateRoomInfo(msg.roomInfoNtf);
        }
    }

    gameRank(msg: Msg.IMessage) {
        if (msg.gameRankingNtf) {
            egret.log(msg.gameRankingNtf);
        }
    }


    error(msg: Msg.IMessage) {
        if (msg.err) {
            egret.log(msg.err);
        }
    }
}
