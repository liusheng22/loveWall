//logs.js
var util = require('../../utils/util.js')
Page({
  data: { //参与页面渲染数据
    logs: []
  },
  onLoad: function () { //页面渲染后执行
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
