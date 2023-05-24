var app=getApp();
Page({
  data: {
    bordercolor:"#707070",
    content:''
  },

  onShareAppMessage() {
    return {};
  },
  report(){
    var that=this
    wx.showModal({
      title: '提示',
      content: '确定退出编辑吗？（内容将不保存）',
      complete: (res) => {
        if (res.confirm) {
          wx.navigateBack({
            url: '../community/community',
          })
        }
        if (res.cancel) {
        }
      }
    })
  },
  border:function(event){
    if(event.detail.value){
      this.setData({
        bordercolor:"transparent"
      })
    } 
    else{
      this.setData({
        bordercolor:"#707070"
      })
    }
    this.setData({
      content:event.detail.value
    })
  },
  save(){
    wx.navigateBack({
      url: '../community/community',
    })
    app.globalData.mycom=this.data.content
    app.globalData.showme="true"
  }
});
