var app=getApp();
Page({
  data: {
    icon_like:'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645653dc5a7e3f0310b971f6/645856a0b98f5d001167ad7b/16835548175707643912.png',
    icon_unlike:'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645653dc5a7e3f0310b971f6/6458511ab98f5d001167aa35/16835096679921619599.png',
    like:'',
    count:'',
    content:'',
    bottomHeight:0,
    comment:0,
    comCount:'',
    flag:'',
    hideModal:true,
    animationData:{},
    c:''
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
    let id=app.globalData.id
    if(id==1){
      this.setData({
        comCount:app.globalData.comcount,
      })
    }
    else if(id==2){
      this.setData({
        comCount:app.globalData.comcount2,
      })
    }
    else if(id==3){
      this.setData({
        comCount:app.globalData.comcount3,
      })
    }
    else if(id==4){
      this.setData({
        comCount:app.globalData.comcount4,
      })
    }
    else if(id==5){
      this.setData({
        comCount:app.globalData.comcount5,
      })
    }
    else{
      this.setData({
        comCount:app.globalData.mycomcount,
      })
    }
    this.setData({
      count:app.globalData.count,
      like:app.globalData.like,
      content:app.globalData.content,
      c:app.globalData.comment
    })
    if((id&&this.data.comCount==4)||(!id&&this.data.comCount==1)){
      this.setData({
        flag:true
      })
    }
    else{
      this.setData({
        flag:false
      })
    }

  },
  bindfocus(e){
    console.log(e, '键盘弹起')
    console.log(e)
    this.setData({
      bottomHeight:e.detail.height //将键盘的高度设置为comment容器与page容器下边界之间的距离。
    })
  },
  bindinput(e){
    if(!this.data.flag){
      this.setData({
        content:e.detail.value
      })
    }
  },
  bindblur(e){
    console.log(e, '收起键盘')
    this.setData({
      bottomHeight:0,
      comment:0,
      content:e.detail.value
    })
  },
  sendOut(){
    if(this.data.content&&this.data.flag==false){
      this.setData({
        comCount:this.data.comCount+1,
        flag:true
      })
      app.globalData.content=this.data.content
      app.globalData.flag=this.data.flag
      let id=app.globalData.id
      if(id==1){
        app.globalData.comcount=this.data.comCount
      }
      else if(id==2){
        app.globalData.comcount2=this.data.comCount
      }
      else if(id==3){
        app.globalData.comcount3=this.data.comCount
      }
      else if(id==4){
        app.globalData.comcount4=this.data.comCount
      }
      else if(id==5){
        app.globalData.comcount5=this.data.comCount
      }
      else{
        app.globalData.mycomcount=this.data.comCount
      }
    }
  },
  com(){
    this.setData({
      comment:1
    })
  },
  del(){
    wx.showModal({
      title: '提示',
      content: '确定删除这条评论吗？',
      complete: (res) => {
        if (res.confirm) {
          this.setData({
            flag:false,
            comCount:this.data.comCount-1,
            content:''
          })
          //app.globalData.flag=this.data.flag
          let id=app.globalData.id
          if(id==1){
            app.globalData.comcount=this.data.comCount
          }
          else if(id==2){
            app.globalData.comcount2=this.data.comCount
          }
          else if(id==3){
            app.globalData.comcount3=this.data.comCount
          }
          else if(id==4){
            app.globalData.comcount4=this.data.comCount
          }
          else if(id==5){
            app.globalData.comcount5=this.data.comCount
          }
          else{
            app.globalData.mycomcount=this.data.comCount
          }
          app.globalData.comCount=this.data.comCount
          app.globalData.content=this.data.content
        }
      }
    })
  },
  showModal:function () {
    var that=this;
    that.setData({
     hideModal:false
    })
    var animation = wx.createAnimation({
     duration: 100,
     timingFunction:'ease',
    })
    this.animation = animation
    setTimeout(function(){
     that.fadeIn();
    },100) 
  },
  hideModal:function () {
    var that=this;
    var animation = wx.createAnimation({
     duration: 50,
     timingFunction:'ease',
    })
    this.animation = animation
    that.fadeDown();
    setTimeout(function(){
     that.setData({
      hideModal:true
     })  
    },50)
  },
   
  fadeIn:function(){
    this.animation.translateY(0).step()
    this.setData({
     animationData:this.animation.export()
    }) 
  },
  fadeDown:function(){
    this.animation.translateY(300).step()
    this.setData({
     animationData:this.animation.export(),
    })
  },
  report(){
    var that=this
    wx.showModal({
      title: '提示',
      content: '确定举报这条评论吗？',
      complete: (res) => {
        if (res.confirm) {
          wx.showModal({
            title: '提示',
            content: '举报成功',
          })
          that.hideModal()
        }
        if (res.cancel) {
            that.hideModal()
        }
      }
    })
  },
});
