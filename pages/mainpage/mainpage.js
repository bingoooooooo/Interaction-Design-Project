var app=getApp()
import {
  formatDate
} from '../../utils/util';
Page({
  data: {
    week:[,,,,,,],
    day:''
  },
  onLoad(){
    var date=formatDate(new Date());
    var weekArray = new Array(0, 1, 2, 3, 4, 5, 6)
    var week =weekArray[new Date(date).getDay()]
    this.setData({
      day:week
    })
    for(let i=week;i<7;i++){
      app.globalData.week[i]=0
    }
    this.setData({
      week:app.globalData.week
    })
  },
  push:function(e){
    let i=e.currentTarget.dataset.id;
    if(i==7){
      let week=[,,,,,,]
      app.globalData.ramlen=(Math.floor(Math.random()*5+1))
      for(let j=0;j<7;j++){
        week[j]=(Math.floor(Math.random()*3))
        app.globalData.motion[j]=(Math.floor(Math.random()*4))
      }
      this.setData({
        week:week
      })
      app.globalData.week=week
    }
    else if(this.data.week[i]==1){
      app.globalData.len=this.data.day-i+7*app.globalData.ramlen
      app.globalData.mot=app.globalData.motion[i]
      app.globalData.nmon=app.globalData.mon[i]
      wx.navigateTo({
        url: '../letterbefore/letterbefore',
      })
    }
    else if(this.data.week[i]==2){
      app.globalData.len=this.data.day-i+7*app.globalData.ramlen
      app.globalData.mot=app.globalData.motion[i]
      wx.navigateTo({
        url: '../letterbefore1/letterbefore1',
      })
    }
  },
  onShareAppMessage() {
    return {};
  },
});