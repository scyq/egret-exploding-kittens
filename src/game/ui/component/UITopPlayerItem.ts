class UITopPlayerItem extends eui.ItemRenderer {
    public constructor() {
        super();
        this.skinName = 'resource/my_skins/TopPlayerItem.exml';
    }

    protected dataChanged(): void {
        console.log('data changed')
    }
}