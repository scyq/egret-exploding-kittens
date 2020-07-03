class NetRes {
    private readonly handlers: any = {};

    initHandlers(): void {
        this.handlers[Msg.Message.CommandType.HEARTBEAT_RESP] = this.heartBeat;
        this.handlers[
            Msg.Message.CommandType.RELEASE_CARD_RESP
        ] = this.releaseCard;
        this.handlers[Msg.Message.CommandType.ROOM_INFO_NTF] = this.roomInfo;
        this.handlers[Msg.Message.CommandType.GAME_RANK_NTF] = this.gameRank;
        this.handlers[Msg.Message.CommandType.ERROR] = this.error;
    }

    response(msg: Msg.IMessage) {
        egret.log(`res: ${msg.cmd}`);
        this.handlers[msg.cmd as Msg.Message.CommandType](msg);
    }

    heartBeat(msg: Msg.IMessage) {
        egret.log('res: HEARTBEAT_RESP');
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
            GameMgr.inst.gameover(msg.gameRankingNtf.ranking);
        }
    }

    error(msg: Msg.IMessage) {
        if (msg.err) {
            egret.log(msg.err);
            GameMgr.inst.handleError(msg.err);
        }
    }
}
