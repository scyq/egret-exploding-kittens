/**
 * 默认的Platform信息，连接后台服务器
 * @class DebugPlatform
 * @implements {IPlatform}
 */

class DebugPlatform implements IPlatform {
    public name: string = "debug";
    private token: string = 'DontGG';
    private playerList: Proto.IReqJoinRoom;

    async getUserList(): Promise<Proto.IReqJoinRoom> {
        if (Config.TestMode) {
            // send fake data
            console.log(`Send fake data`);
            this.playerList = TestMode.FakePlayerList
        } else {
            // get data from native app
            // playerList = YessAndroid.getBombMatchInfo();
        }
        NetMgr.inst.reqJoinRoom(this.playerList);
        return this.playerList;
    }

    async getUserInfo(): Promise<Proto.IReqPlayerInfo> {
        return this.playerList.players[0];
    }

    async login(): Promise<void> {
        NetMgr.inst.connect();
    }

    async relogin(): Promise<void> {
        NetMgr.inst.connect();
    }
}