class UIAvatar extends eui.Component implements  eui.UIComponent {
    avatar: eui.Image;
    mask: eui.Rect;

	public constructor() {
		super();
		this.skinName = 'yui.Avatar'
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}