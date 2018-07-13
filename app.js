//app.js
const AV = require('./libs/av-weapp-min.js');
App({
  onLaunch: function () { //小程序启动后 触发的函数
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);
  },
  onShow:function () {
    AV.init({
      appId: 'wx49908a92b21c52e9',
      appKey: 'osXv6BSAQzX8YLz9nmzUitbg',
    });
  },
  scroll:function(e){
    console.log(e);
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
});