var app = getApp();
Page({
    data:{
        bannerSrc:"../../image/user-banner.jpg",
        userInfo:{},
        avatarUrl:"",
        userinfoList:[
            {text:"我的表白",icon:"icon-aixin01",url:"../user-comment/user-comment"},
            { text: "我的位置", icon: "icon-wode", url: "../location/location" },
            { text: "扫码", icon: "icon-sousuo-sousuo", url: "../scan/scan" },
            { text: "关于", icon: "icon-xinxi2", url: "../user-about/user-about" }
        ]
    },
    onLoad: function () {
        var that = this;
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo){
            //更新数据
            that.setData({
                userInfo:userInfo,
            });
        });
    },

})