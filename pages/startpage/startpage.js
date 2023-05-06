Page({
  onShow: function () {
      setTimeout(function(){
        wx.redirectTo({
          url: '../userpage/userpage',
        })
      },1200);
    },
  })