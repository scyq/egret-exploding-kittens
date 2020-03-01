class UITopPlayerItem extends eui.ItemRenderer {

    avatar: eui.Image;
    icon: eui.Image;
    constructor() {
        super();
        this.skinName = 'resource/my_skins/TopPlayerItem.exml';
    }

    protected dataChanged(): void {
        console.log('data changed')
        this.addAvatar(this.data.avatar)
    }

    async addAvatar(url: string) {
        let imgLoader = new egret.ImageLoader();
        imgLoader.crossOrigin = "anonymous";// 跨域请求
        imgLoader.load(url);// 去除链接中的转义字符‘\’
        imgLoader.once(egret.Event.COMPLETE, (evt: egret.Event) => {
            if (evt.currentTarget.data) {
                egret.log("加载头像成功: " + evt.currentTarget.data);
                let texture = new egret.Texture();
                texture.bitmapData = evt.currentTarget.data;
                let bitmap = new egret.Bitmap(texture);
                bitmap.width = bitmap.height = 80;
                bitmap.x = bitmap.y = 10;
                this.avatar.source = texture;
            }
        }, this)
    }
}
