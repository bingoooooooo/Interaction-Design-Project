var app=getApp()
import {
  formatDate,formatBeforeDate
} from '../../utils/util';
Page({
  data: { 
    date:'',
    isone:'',
    istwo:'',
    isthree:'',
    isfour:'',
    bordercolor:"#f49512a1",
    content:'', 
  },
  onLoad(options){
    var DATE=formatDate(new Date());
    let str=app.globalData.nmon
    str.replace(/\\n/g,"\n")
    this.setData({
      date:DATE,
      content:app.globalData.letter,
      isone:(app.globalData.mot==0)?0:50,
      istwo:(app.globalData.mot==1)?0:50,
      isthree:(app.globalData.mot==2)?0:50,
      isfour:(app.globalData.mot==3)?0:50,
      content:str,
    })
    var dATE=formatBeforeDate(new Date(),app.globalData.len)
    this.setData({
      date:dATE
    })
  },
  datePickerBindchange:function(e){
    this.setData({
      dateValue:e.detail.value
    })
  },
  onShareAppMessage() {
    return {};
  },
  border:function(event){
    if(event.detail.value){
      this.setData({
        bordercolor:"transparent"
      })
    } 
    else{
      this.setData({
        bordercolor:"#f49512a1"
      })
    }
    this.setData({
      content:event.detail.value
    })
  },

});