var con = require("../../../../utils/data.js");
var app = getApp();
Page({
  data: {
    recommond: []
  },
  onLoad: function (options) {
    var that = this;
    var id = options.id;
    wx.request({
      url: con.getmodellist,
      method: "GET",
      data: { wxappid: con.wyy_user_wxappid, id: id },
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        // console.log(res.data);
        that.setData({
          recommond: res.data
        })
      }
    });
  },
  bindDetail: function (e) {
    var len = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../gallerD/gallerD?id=' + len,
    })
  }
})