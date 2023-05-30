var Calendar = require("../../service/Calendar.js");
const app = getApp();
Page({
  data: {
    placeholder:"当前无提醒事项",
    index:'',
    space:'',
    flag:false,
    down:0,
    nday:0,
    step:{
      name:"workbenchKey2",
      guideList:[
        {
          el:".content0",
          tips:"点击按钮查看上月提醒",
          style:"border-radius:8rpx;margin:0"
        },
        {
          el:".content1",
          tips:"点击按钮查看下月提醒",
          style:"border-radius:8rpx;margin:0"
        },
        {
          el:".content2",
          tips:"点击切换日期",
          style:"border-radius:8rpx;margin:0"
        },
        {
          el:".content3",
          tips:"点击更改该日期的提醒事件",
          style:"border-radius:8rpx;margin:0"
        },
      ]}
  },
  onLoad: function (options) {
    let nowDate = new Date()
    this.initCalendar(nowDate)
    for(let i=0;i<this.data.calendars.length;i++){
      if(this.data.calendars[i].date&&(!this.data.flag)){
        this.setData({
          space:i-1,
          flag:true,
        })
      }
      if(this.data.calendars[i].disabled==false&&!this.data.index){
        var calendars=this.data.calendars
        calendars[i].sign=true
        this.setData({
          index:i,
          calendars:calendars,
          nday:i,
        })
        break
      }
    }
  },
  /**
   * 初始化日历，
   * 然后在获取日历数据时，进行数据比对处理；
   * */
  initCalendar: function (paramDate, signDates) {
    var now = new Date();
    var nowMonth = now.getMonth();
    var nowYear = now.getFullYear();
    var showSign = false;
    if (nowMonth === paramDate.getMonth()
      && nowYear === paramDate.getFullYear()) {
      showSign = true;
    }
    //未来签到日期设置为空
    if (nowMonth < paramDate.getMonth()
      && nowYear <= paramDate.getFullYear()) {
      signDates = [];
    }
    var days = ["日", "一", "二", "三", "四", "五", "六"];
    var calendars = Calendar.getSignCalendar(paramDate);
    this.setData({
      year: paramDate.getFullYear(),
      month: paramDate.getMonth() + 1,
      calendars: calendars,
      days: days,
      preMonth: "<", 
      nextMonth: ">",
      showSign: showSign
    });
  },
  //上个月
  preMonth: function () {
    var dataYear = this.data.year;
    var dataMonth = this.data.month - 2;//月是从0开始的
    var paramDate = Calendar.parseDate(dataYear, dataMonth);
    this.initCalendar(paramDate);
    for(let i=0;i<this.data.calendars.length;i++){
      if(this.data.calendars[i].date){
        this.setData({
          space:i-1,
          down:this.data.down-1
        })
        break
      }
    }
    if(!this.data.down){
      var calendars=this.data.calendars
      calendars[this.data.nday+this.data.space].sign=true
      this.setData({
        calendars:calendars
      })
    }
  },
  //下个月
  nextMonth: function () {
    var dataYear = this.data.year;
    var dataMonth = this.data.month;
    var paramDate = Calendar.parseDate(dataYear, dataMonth);
    this.initCalendar(paramDate);
    for(let i=0;i<this.data.calendars.length;i++){
      if(this.data.calendars[i].date){
        this.setData({
          space:i-1,
          down:this.data.down+1
        })
        break
      }
    }
    if(!this.data.down){
      var calendars=this.data.calendars
      calendars[this.data.nday+this.data.space].sign=true
      this.setData({
        calendars:calendars
      })
    }
  },
  save: function(e){
    var calendars = this.data.calendars;
    if(this.data.index){
      calendars[this.data.index].content=e.detail.value;
    }
    this.setData({
      calendars:calendars
    })
  },
  touch: function(e){
    let i=e.currentTarget.dataset.id+this.data.space;
    var calendars = this.data.calendars;
    calendars[i].sign=true
    if(this.data.index!=i){
      calendars[this.data.index].sign=false
    }
    this.setData({
      calendars: calendars,
      index:i,
    })

  }
})