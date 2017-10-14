var con = require("../../../utils/data.js");
var app = getApp();
Page({
  data: {
    carSystem: []
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: con.getserieslist,
      method: 'GET',
      data: { wxappid: con.wyy_user_wxappid },
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        // console.log(res.data);
        that.setData({
          carSystem: res.data
        })
      }
    });
  },
  bindTotal: function (e) {
    var len = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'gallerItem/gallerItem?id=' + len
    })
  }
})
