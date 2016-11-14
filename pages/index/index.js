//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '欢迎使用',
    userInfo: {},
    animationData:{}
  },
  onShow: function(){
    console.log(this.data.motto)
    var animation = wx.createAnimation({
        duration: 2000,
        timingFunction: 'ease',
    })

    setTimeout(function() {
      animation.opacity(1).translateY(70).step()
      this.setData({
        animationData:animation.export()
      })
    }.bind(this), 500)
  
  
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  viewLogin:function(){
    wx.navigateTo({
      url: '../login/login',
      success: function(res){
        // success
        //wx.showToast({title: '成功',})
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
