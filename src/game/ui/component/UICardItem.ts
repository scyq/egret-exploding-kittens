class UICardItem extends eui.ItemRenderer {
	deck: eui.Image;
	card: eui.Image;

	private scaleSelected = 1.2;

	constructor() {
		super();
		this.skinName = 'yui.CardItem';
		this.addEventListener(eui.UIEvent.CREATION_COMPLETE, this.onComplete, this)
	}

	private onComplete() {
		GameDispatcher.inst.addEventListener(EventName.CARD_SELECT, this.onSelectChange, this)
	};

	protected dataChanged(): void {
		this.changeCard();
		this.showCard();
	}

	private changeCard(): void {
		this.card.source = RES.getRes(this.data.img);
		
		if (this.selected && this.scaleX < this.scaleSelected) {
			egret.Tween.get(this).to({ scaleX: this.scaleSelected , scaleY: this.scaleSelected}, 150)
		} else if (!this.selected && this.scaleX > 1) {
			egret.Tween.get(this).to({ scaleX: 1 , scaleY: 1}, 150)
		}
	}

	onSelectChange(e: egret.Event) {
		this.selected = this.itemIndex === e.data.selectedIndex
		this.dataChanged();
	}

	showCard(show: boolean = true): void {
		this.deck.visible = !show;
		this.card.visible = show;
	}
}