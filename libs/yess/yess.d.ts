declare var yess: YessStatic;

declare module 'yess' {
    export = yess;
}

interface YessStatic {
    exist: boolean;
    showAndroidToast(msg: string): void;
    finishAndroidPage(): void;
    gameBombsEnd(gameResultJson: any): void;
    getUid(cbName: string):void;
    getBombsMatchInfo(cbName: string): void;
    getCookie(cUrl: string, cbName: string): void;
}
