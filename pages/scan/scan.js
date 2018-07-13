Page({
  data: { //参与页面渲染数据
    logs: []
  },
  onLoad: function () { //页面渲染后执行
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  }
})

