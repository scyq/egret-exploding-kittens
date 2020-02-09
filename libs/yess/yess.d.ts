declare var yess: YessStatic;

declare module 'yess' {
    export = yess;
}

interface YessStatic {
    showAndroidToast(msg: string): void;
    finishAndroidPage():void;
    gameBombsEnd(gameResultJson:any):void;
    getBombsMatchInfo(cbName:string):void;
}