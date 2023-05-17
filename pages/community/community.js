var app=getApp();
Page({
  data: {
    // list_omf12FXL: [onLike, onLike, onLike, onLike, onLike],
    icon_like:'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645653dc5a7e3f0310b971f6/645856a0b98f5d001167ad7b/16835548175707643912.png',
    icon_unlike:'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645653dc5a7e3f0310b971f6/6458511ab98f5d001167aa35/16835096679921619599.png',
    like:'',
    count:'',
    comCount:''
  },
  onLike(e){
    wx.vibrateShort({
      type: 'type',
    })
    this.animation=wx.createAnimation({
      duration:300,
      timingFunction:'linear',
      delay:10,
      transformOrigin:'50% 50%'
    })
    let like=this.properties.like
    let count=this.properties.count
    count=like?count-1:count+1
    if(!like){
      setTimeout(function(){
        this.animation.scale(1.5).step();
        this.animation.scale(1.0).step();
        this.setData({
          animation:this.animation.export()
        })
      }.bind(this),50);
    }
    this.setData({
      count,like:!like
    })
    app.globalData.count=count
    app.globalData.like=!like
  },
  onShareAppMessage() {
    return {};
  },
  onShow(){
    this.setData({
      count:app.globalData.count,
      like:app.globalData.like,
      comCount:app.globalData.comCount,
    })
  }
});