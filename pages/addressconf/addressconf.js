//index.js
//获取应用实例
var app = getApp()
var order = ['demo1', 'demo2', 'demo3']
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    toView: 'green',
    array: ['北京', '上海', '广州', '河南','河北', '东北', '山西', '陕西','广东', '黑龙江', '西藏', '云南'], 
    array1: ['北京市', '上海市', '郑州市', '周口市','新郑市', '项城市', '鹿邑市', '鄢陵市','广东', '黑龙江', '西藏', '云南'], 
    array2: ['朝阳区', '顺义区', '昌平区', '苹果园区'], 
    index: 0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  next: function(e){  
    debugger;
    wx.navigateTo({  
      url: '/pages/address/address?list='+JSON.stringify(this.data.array),  
    })  
  },
  bindPickerChange: function (e) {  
    this.setData({  
      index: e.detail.value  
    })  
  },
  bindCityChange: function(e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindDistrictChange: function(e) {
    this.setData({
      index: e.detail.value
    })
  },
   upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
  scrollToTop: function(e) {
    this.setAction({
      scrollTop: 0
    })
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})

