
var con = require("../../../../utils/data.js");
var app = getApp();
Page({
  data: {
    galler: {},
    height: {},
    width: {},
  },
  onLoad: function (options) {
    var that = this;
    var id = options.id;
    wx.request({
      url: con.getphotodetail,
      method: 'GET',
      data: { wxappid: con.wyy_user_wxappid, id: id },
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        that.setData({
          galler: res.data
        })

      },
    });

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.windowHeight,
          width: res.windowWidth
        })
      },
    })
  },

})