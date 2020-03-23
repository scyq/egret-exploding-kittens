declare var yess: YessStatic;

declare module 'yess' {
    export = yess;
}

interface YessStatic {
    exists: boolean;
    showAndroidToast(msg: string): void;
    finishAndroidPage(): void;
    gameBombsEnd(type: number, isWdh: number, gameResultJson: string): void;
    getUid(cbName: string): void;
    getBombsWdh(cbName: string): void;
    getBombsMatchInfo(cbName: string): void;
    getCookie(cUrl: string, cbName: string): void;
}
