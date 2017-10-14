var con = require("../../../utils/data.js");
var app = getApp();
Page({
  data: {
    list: [],
    article: []
  },
  onLoad: function (options) {
    var that = this;
    var id = options.id;

    wx.request({
      url: con.gettarticallist,
      mthod: "GET",
      data: { wxappid: con.wyy_user_wxappid, typeid: id },
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        console.log(res.data.info);
        console.log(11111);
        that.setData({
          articleTwo: res.data.info
        })
      }
    })
  },
  bindViewD: function (e) {
    var len = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'articleD/articleD?id=' + len,
    })
  }
})