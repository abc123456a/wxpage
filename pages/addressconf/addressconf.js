//index.js
//获取应用实例
var app = getApp()
var order = ['demo1', 'demo2', 'demo3']
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    user: '',
    pwd: '',
    str: '',
    toView: 'green',
    array: ['北京', '上海', '广州', '河南','河北', '东北', '山西', '陕西','广东', '黑龙江', '西藏', '云南'], 
    array1: ['北京市', '上海市', '郑州市', '周口市','新郑市', '项城市', '鹿邑市', '鄢陵市','广东', '黑龙江', '西藏', '云南'], 
    array2: ['朝阳区', '顺义区', '昌平区', '苹果园区'], 
    index: 0,
    from:"add",
    eqs:""
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    this.setData({
      eqs:options.list
    })
    //来自修改
    if(options.list!=undefined){
      wx.setNavigationBarTitle({ title: "修改地址"})
      this.setData({
         from:"change",
         userInfo:(wx.getStorageSync('userInfo'))[options.list]
      })
    }
  },
  inputUser:function(e){
    this.setData({
      user:e.detail.value
    })
  },
  inputPwd:function(e){
    this.setData({
      pwd:e.detail.value
    })
  },
  inputStr:function(e){
    this.setData({
      str:e.detail.value
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
  },
  delete: function(e){
    var lod=wx.getStorageSync('userInfo');
    lod.splice(this.data.eqs,1);
    this.setData({
            userInfo:lod
          })
    wx.setStorageSync('userInfo',lod);
    wx.navigateTo({
      url:'/pages/address/address',
    })
  },
  next: function(e){  
    var that = this
    var urlT='/pages/address/address?list='+that.data.array[that.data.index]+"&list1="+that.data.array1[that.data.index]+"&list2="+that.data.array2[that.data.index]+"&user="+that.data.user+"&pwd="+that.data.pwd+"&str="+that.data.str;
    if(that.data.eqs!=""){
      urlT+="&eq="+that.data.eqs+"&from="+this.data.from
    }
    wx.navigateTo({  
      url: urlT,
    })  
  },
})

