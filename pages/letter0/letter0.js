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
    bordercolor:"#f49512a1"
  },
  onLoad(options){
    var DATE=formatDate(new Date());
    this.setData({
      date:DATE,
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
      console.log(event.detail.value)
    } 
    else{
      this.setData({
        bordercolor:"#f49512a1"
      })
    }
  }
});