/**
 * 默认的Platform信息，连接后台服务器
 * @class DebugPlatform
 * @implements {IPlatform}
 */

class DebugPlatform implements IPlatform {
    name: string = 'debug';
    private token: string = 'DontGG';

    async getUserInfo(): Promise<any> {
        return 'hey hey';
    }

    async login(): Promise<void> {
        NetMgr.inst.connect();
    }

    async relogin(): Promise<void> {
        NetMgr.inst.connect();
    }

    setUid(uid: number): void {
        GameMgr.inst.setUid(uid);
    }

    setWdh(wdh: number): void {
        GameMgr.inst.setWdh(wdh);
    }

    setMatchInfo(strInfo: string): void {
        const info: Native.IMatchInfo = JSON.parse(strInfo);
        GameMgr.inst.setMatchInfo(info);
    }

    setCookie(strCookie: string): void {
        GameMgr.inst.setCookie(strCookie);
    }
}
