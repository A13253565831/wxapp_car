var con = require("../../../../utils/data.js");
var WxParse = require("../../../../wxParse/wxParse.js");
var app = getApp();
Page({
  data: {
    artD: {
      // title: '我的内容',
      // img: '../../../../images/run_car/audi.png',
      // cont: '这款车好棒'
    }
  },
  onLoad: function (options) {
    var that = this;
    var id = options.id;
    wx.request({
      url: con.getmodeldetail,
      data: { wxappid: con.wyy_user_wxappid, id: id },
      method: 'GET',
      header: {
        'Content-Type': 'application/json',
      },
      success: function (res) {
        console.log(res.data);
        WxParse.wxParse('arta', 'html', res.data.details, that, 0);
        that.setData({
          artD: res.data
        })
      }
    })
  }
})
