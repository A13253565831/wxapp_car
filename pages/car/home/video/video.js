// pages/weiyunyi/home/video/video.js
var app = getApp();
var con = require("../../../../utils/data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.getVideoHttp();
  },
  getVideoHttp: function () {
    var that = this;
    wx.request({
      url: con.getvideo,
      data: { wxappid: con.wyy_user_wxappid },
      method: 'GET',
      header: {
        "Content-Type": 'application/json'
      },
      success: function (res) {
        // console.log(res.data.info);
        that.setData({
          videoList: res.data
        })
        console.log(111, res.data);
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {   
  },
  onShareAppMessage: function () {
  
  }
})

