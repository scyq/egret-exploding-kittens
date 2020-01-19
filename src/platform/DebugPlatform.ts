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
        Http.inst.setBaseUrl(Config.ServerUrlDebug)
        Http.inst.get('test').then(data => {
            console.log(data)
        }).catch(err => {
            console.error(err)
        })
    }

    async relogin() {

    }
}