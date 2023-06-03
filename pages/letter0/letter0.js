var app=getApp()
import {
  formatDate
} from '../../utils/util';
Page({
  data: { 
    date:' ',
    isone:50,
    istwo:50,
    isthree:50,
    isfour:50,
    bordercolor:"#f49512a1",
    content:'',
    placeholder:"点击虚线框内输入",
    day:'',
    step:{
      name:"workbenchKey",
      guideList:[
        {
          el:".content0",
          tips:"点击这里返回上一页",
          style:"border-radius:8rpx;margin:0"
        },
        {
          el:".content1",
          tips:"点击这里保存日记",
          style:"border-radius:8rpx;margin:0"
        },
        {
          el:".content2",
          tips:"在这里选择今日心情",
          style:"border-radius:8rpx;margin:0"
        },
        {
          el:".content3",
          tips:"在虚线框内点击输入日记",
          style:"border-radius:8rpx;margin:0"
        },
        {
          el:".content4",
          tips:"左右滑动切换信纸图标",
          style:"border-radius:8rpx;margin:0"
        },
      ]
    }
  },
  onLoad(options){
    var DATE=formatDate(new Date());
    this.setData({
      date:DATE,
      content:app.globalData.letter
    })
    var weekArray = new Array(0, 1, 2, 3, 4, 5, 6)
    var week =weekArray[new Date(this.data.date).getDay()]
    this.setData({
      day:week
    })
  },
  push1(e){
    let isone=this.data.isone
    let istwo=this.data.istwo
    let isthree=this.data.isthree
    let isfour=this.data.istfour
    this.setData({
      isone:0,
      istwo:50,
      isthree:50,
      isfour:50
    })
  },
  push2(e){
    let isone=this.data.isone
    let istwo=this.data.istwo
    let isthree=this.data.isthree
    let isfour=this.data.istfour
    this.setData({
      isone:50,
      istwo:0,
      isthree:50,
      isfour:50
    })
  },
  push3(e){
    let isone=this.data.isone
    let istwo=this.data.istwo
    let isthree=this.data.isthree
    let isfour=this.data.istfour
    this.setData({
      isone:50,
      istwo:50,
      isthree:0,
      isfour:50
    })
  },
  push4(e){
    let isone=this.data.isone
    let istwo=this.data.istwo
    let isthree=this.data.isthree
    let isfour=this.data.istfour
    this.setData({
      isone:50,
      istwo:50,
      isthree:50,
      isfour:0
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
  report(){
    var that=this
    wx.showModal({
      title: '提示',
      content: '确定退出编辑吗？（将丢失未保存的内容）',
      complete: (res) => {
        if (res.confirm) {
          wx.redirectTo({
            url: '../mainpage/mainpage',
          })
        }
        if (res.cancel) {
        }
      }
    })
  },
  save(){
    app.globalData.letter=this.data.content
    wx.showModal({
      title: '提示',
      content: '保存成功!',
      complete: (res) => {
        if (res.confirm) {
        }
        if (res.cancel) {
        }
      }
    })
    app.globalData.week[this.data.day]=1
    app.globalData.mon[this.data.day]=this.data.content
  },

});