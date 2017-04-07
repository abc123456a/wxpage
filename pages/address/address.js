var util = require('../../utils/util.js')
var formatLocation = util.formatLocation
Page({
  data: {
    userInfo: {},
    list:[],
    hasLocation: false
  },
  onLoad:function(options){
       debugger;
       console.log(options);
  },
  getLocation: function () {
    var that = this
    wx.getLocation({
      success: function (res) {
        console.log(res)
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude)
        })
      }
    })
  },
  clear: function () {
    this.setData({
      hasLocation: false
    })
  }
})


