class GameDispatcher extends egret.EventDispatcher {
    private static _instance: GameDispatcher;
    public constructor() {
        super();
    }

    public static get inst(): GameDispatcher {
        if (!GameDispatcher._instance) {
            GameDispatcher._instance = new GameDispatcher();
        }
        return GameDispatcher._instance;
    }

    public addEventListener(
        eventName: string,
        func: Function,
        thisObj: any,
        useCapture: boolean = false,
        priority: number = 1
    ): void {
        super.addEventListener(eventName, func, thisObj, useCapture, priority);
    }

    public removeEventListener(
        eventName: string,
        func: Function,
        thisObj: any,
        useCapture: boolean = false
    ): void {
        super.removeEventListener(eventName, func, thisObj, useCapture);
    }

    public hasEventListener(eventName: string): boolean {
        return super.hasEventListener(eventName);
    }

    public once(
        eventName: string,
        func: Function,
        thisObj: any,
        useCapture: boolean = false
    ): void {
        super.once(eventName, func, thisObj, useCapture);
    }

    public dispatchEvent(event: egret.Event): boolean {
        let t1: number = egret.getTimer();
        let result: boolean = super.dispatchEvent(event);
        let gap: number = egret.getTimer() - t1;
        if (gap > 5) {
            console.log(`send Evt gap = ${gap} name = ${event.type}`);
        }
        return result;
    }

    public willTrigger(eventName: string): boolean {
        return super.willTrigger(eventName);
    }
}
