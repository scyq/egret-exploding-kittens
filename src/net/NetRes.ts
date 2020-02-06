class NetRes {
    public readonly handles = [{ msg: 'news', func: this.recieveNews }];

    public constructor() {}

    public recieveNews(msg: string): void {
        GameDispatcher.inst.dispatchEvent(
            new egret.Event(EventName.TEST, false, false, { msg: msg })
        );
    }
}
