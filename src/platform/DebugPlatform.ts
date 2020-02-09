/**
 * 默认的Platform信息，连接后台服务器
 * @class DebugPlatform
 * @implements {IPlatform}
 */

class DebugPlatform implements IPlatform {
    public name: string = 'debug';
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

    showToast(msg: string): void {
        console.log(msg);
    }
    
    finishPage(): void { }

    gameBombsEnd(): void { }

    bombsMatchInfoCallback(): void { }
}
