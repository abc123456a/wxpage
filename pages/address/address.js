var util = require('../../utils/util.js')
var formatLocation = util.formatLocation
var app = getApp()
Page({
  data: {
    userInfo:[],
    list:[],
    user:"",
    pwd:"",
    str:"",
    hasLocation: false
  },
  onLoad:function(options){
     debugger;
     //如果有缓存
     if(wx.getStorageSync('userInfo')!=undefined&&options.list1==undefined&&!options.from){
        this.setData({
           userInfo:wx.getStorageSync('userInfo')
        })
     }
    if(options.list1!=undefined){
       if(options.from=="change"){
        var reTosave=wx.getStorageSync('userInfo');
        for(var i=0;i<reTosave.length;i++){
          if(i==options.eq){
            reTosave[i].user=options.user;
            reTosave[i].list1=options.list1;
            reTosave[i].list2=options.list2;
            reTosave[i].pwd=options.pwd;
            reTosave[i].str=options.str;
          }
        }
         console.log(reTosave)
          //来自修改地址标志
          this.setData({
            userInfo:reTosave
          })
          wx.setStorageSync('userInfo',reTosave);
         console.log(wx.getStorageSync('userInfo'))
       }else{
          //新增地址
          this.setData({
             userInfo:wx.getStorageSync('userInfo').concat({user:options.user,list1:options.list1,list2:options.list2,pwd:options.pwd,str:options.str})
          })
          wx.setStorageSync('userInfo',wx.getStorageSync('userInfo').concat({user:options.user,list1:options.list1,list2:options.list2,pwd:options.pwd,str:options.str}))
       }
    }
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
  },
  addChang:function(event){
    debugger;
    wx.navigateTo({
      url: '/pages/addressconf/addressconf?list='+event.currentTarget.dataset.alpha
    })
  }
})


