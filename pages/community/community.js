var app=getApp();
Page({
  data: {
    obj:[
      {
        name:"赛文",
        content:"如何清醒上早八？",
        id:1,
        like:'',
        count:'',
        animationData:{},
        comcount:'',
      },
      {
        name:"迪迦",
        content:"可以空腹喝牛奶吗？",
        id:2,
        like:'',
        count:'',
        animationData:{},
        comcount:'',
      },
      {
        name:"赛文",
        content:"可以空腹喝牛奶吗？",
        id:3,
        like:'',
        count:'',
        animationData:{},
        comcount:'',
      },
      {
        name:"赛文",
        content:"可以空腹喝牛奶吗？",
        id:4,
        like:'',
        count:'',
        animationData:{},
        comcount:'',
      },
      {
        name:"赛文",
        content:"可以空腹喝牛奶吗？",
        id:5,
        like:'',
        count:'',
        animationData:{},
        comcount:'',
      },
    ],
    icon_like:'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645653dc5a7e3f0310b971f6/645856a0b98f5d001167ad7b/16835548175707643912.png',
    icon_unlike:'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/645653dc5a7e3f0310b971f6/6458511ab98f5d001167aa35/16835096679921619599.png',
    hideModal:true,
    animationData:{},
    showme:'',
    mycom:'',
    pushmycom:false,
    mylike:'',
    mycount:'',
    mycomcount:'',
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
    let like=''
    let i=''
    let count=''
    if(e.currentTarget.dataset.id){
      i=e.currentTarget.dataset.id
      like=this.data.obj[i-1].like
      count=this.data.obj[i-1].count
    }
    else{
      like=this.data.mylike
      count=this.data.mycount
    }
    count=like?count-1:count+1
    if(!like){
      setTimeout(function(){   
        if(i){
          this.animation.scale(1.5).step();   
          this.animation.scale(1.0).step();
          if(i==1){
            this.setData({
              'obj[0].animation':this.animation.export()
            })
          }
          else if(i==2){
            this.setData({
            'obj[1].animation':this.animation.export()
            })
          }
          else if(i==3){
            this.setData({
              'obj[2].animation':this.animation.export()
            })
          }
          else if(i==4){
            this.setData({
              'obj[3].animation':this.animation.export()
            })
          }
          else if(i==5){
            this.setData({
              'obj[4].animation':this.animation.export()
            })
          }
        }
        else{
          this.animation.scale(1.5).step();   
          this.animation.scale(1.0).step();
          this.setData({
            animation:this.animation.export()
          })
        }
      }.bind(this),50);
    }
    if(i==1){
      this.setData({
        'obj[0].count':count,
        'obj[0].like':!this.data.obj[0].like
      })
      this.changedata1()
    }
    else if(i==2){
      this.setData({
        'obj[1].count':count,
        'obj[1].like':!this.data.obj[1].like
      })
      this.changedata2()
    }
    else if(i==3){
      this.setData({
        'obj[2].count':count,
        'obj[2].like':!this.data.obj[2].like
      })
      this.changedata3()
    }
    else if(i==4){
      this.setData({
        'obj[3].count':count,
        'obj[3].like':!this.data.obj[3].like
      })
      this.changedata4()
    }
    else if(i==5){
      this.setData({
        'obj[4].count':count,
        'obj[4].like':!this.data.obj[4].like
      })
      this.changedata5()
    }
    else{
      this.setData({
        mycount:count,
        mylike:!this.data.mylike
      })
      this.changedata()
    }
  },
  changedata(){
    app.globalData.mycount=this.data.mycount
    app.globalData.mylike=!this.data.mylike
  },
  changedata1(){
    app.globalData.count=this.data.count
    app.globalData.like=!this.data.obj[0].like
  },
  changedata2(){
    app.globalData.count2=this.data.count
    app.globalData.like2=!this.data.obj[1].like
  },
  changedata3(){
    app.globalData.count3=this.data.count
    app.globalData.like3=!this.data.obj[2].like
  },
  changedata4(){
    app.globalData.count4=this.data.count
    app.globalData.like4=!this.data.obj[3].like
  },
  changedata5(){
    app.globalData.count5=this.data.count
    app.globalData.like5=!this.data.obj[4].like
  },
  onShareAppMessage() {
    return {};
  },
  onShow(){
    this.setData({
      count:app.globalData.count,
      'obj[0].like':app.globalData.like,
      'obj[1].like':app.globalData.like2,
      'obj[2].like':app.globalData.like3,
      'obj[3].like':app.globalData.like4,
      'obj[4].like':app.globalData.like5,
      'obj[0].count':app.globalData.count,
      'obj[1].count':app.globalData.count2,
      'obj[2].count':app.globalData.count3,
      'obj[3].count':app.globalData.count4,
      'obj[4].count':app.globalData.count5,
      'obj[0].comcount':app.globalData.comcount,
      'obj[1].comcount':app.globalData.comcount2,
      'obj[2].comcount':app.globalData.comcount3,
      'obj[3].comcount':app.globalData.comcount4,
      'obj[4].comcount':app.globalData.comcount5,
      showme:app.globalData.showme,
      mycom:app.globalData.mycom,
      pushmycom:false,
      mylike:app.globalData.mylike,
      mycount:app.globalData.mycount,
      mycomcount:app.globalData.mycomcount,
    })
  },
  showModal:function (e) {
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
    if(e.currentTarget.dataset.id)
    {
      this.setData({
        pushmycom:false
      })
    }
    else{
      this.setData({
        pushmycom:true
      })
    }
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
  report2(){
    var that=this
    wx.showModal({
      title: '提示',
      content: '确定删除这条评论吗？',
      complete: (res) => {
        if (res.confirm) {
          wx.showModal({
            title: '提示',
            content: '删除成功',
          })
          that.setData({
            mycom:'',
            showme:false
          })
          app.globalData.showme=that.data.showme
          that.hideModal()
        }
        if (res.cancel) {
            that.hideModal()
        }
      }
    })
  },
  comment:function(e){
    let i=e.currentTarget.dataset.id
    if(i)
    {
      app.globalData.comment=this.data.obj[i-1].content
    }
    else{
      app.globalData.comment=this.data.mycom
    }
    app.globalData.id=i
  }
});