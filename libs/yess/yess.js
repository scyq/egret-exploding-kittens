var yess = {}

yess.exist = typeof YessAndroid !== "undefined"

yess.showAndroidToast = (toast) => {
    egret.log(`yess: showAndroidToast(${toast})`);
    if (yess.exist) {
        YessAndroid.showToast(toast);
    }
}

yess.finishAndroidPage = () => {
    egret.log('yess.finishAndroidPage()');
    if (yess.exist) {
        YessAndroid.finishPage();
    }
}

yess.gameBombsEnd = (gameResultJson) => {
    egret.log('yess.gameBombsEnd()');
    egret.log('gameResultJson')
    if (yess.exist) {
        YessAndroid.gameBombsEnd(gameResultJson);
    }
}

yess.getUid = (cbName) => {
    egret.log(`yess.getUid(${cbName})`);
    if (yess.exist) {
        YessAndroid.getUid(cbName);
    }
}

yess.getBombsMatchInfo = (cbName) => {
    egret.log(`yess.getBombsMatchInfo(${cbName})`);
    if (yess.exist) {
        YessAndroid.getBombsMatchInfo(cbName);
    }
}

yess.getCookie = (cUrl, cbName) => {
    egret.log(`yess.getCookie(${cUrl}, ${cbName})`);
    if (yess.exist) {
        YessAndroid.getCookie(cUrl, cbName);
    }
}

