/**
 * 默认的Platform信息，连接后台服务器
 * @class DebugPlatform
 * @implements {IPlatform}
 */

class DebugPlatform implements IPlatform {
    public name: string = "debug";
    private token: string = 'DontGG';

    async getUserInfo() {
        return { nickName: "username" }
    }

    async login() {
        NetMgr.inst.connect();
    }

    async relogin() {
        NetMgr.inst.connect();
    }
}