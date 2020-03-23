var yess = {}

yess.exists = typeof YessAndroid !== "undefined"

yess.showAndroidToast = (toast) => {
    egret.log(`yess: showAndroidToast(${toast})`);
    if (yess.exists) {
        YessAndroid.showToast(toast);
    }
}

yess.finishAndroidPage = () => {
    egret.log('yess.finishAndroidPage()');
    if (yess.exists) {
        YessAndroid.finishPage();
    }
}

yess.gameBombsEnd = (type, isWdh, gameResultJson) => {
    egret.log('yess.gameBombsEnd()');
    egret.log('gameResultJson')
    if (yess.exists) {
        YessAndroid.gameBombsEnd(type, isWdh, gameResultJson);
    }
}

yess.getUid = (cbName) => {
    egret.log(`yess.getUid(${cbName})`);
    if (yess.exists) {
        YessAndroid.getUid(cbName);
    }
}

yess.getBombsWdh = (cb) => {
    egret.log(`yess.getBombsWdh(${cbName})`)
    if (yess.exists) {
        YessAndroid.getBombsWdh(cbName);
    }
}

yess.getBombsMatchInfo = (cbName) => {
    egret.log(`yess.getBombsMatchInfo(${cbName})`);
    if (yess.exists) {
        YessAndroid.getBombsMatchInfo(cbName);
    }
}

yess.getCookie = (cUrl, cbName) => {
    egret.log(`yess.getCookie(${cUrl}, ${cbName})`);
    if (yess.exists) {
        YessAndroid.getCookie(cUrl, cbName);
    }
}



