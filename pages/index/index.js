//index.js
//获取应用实例
var app = getApp()
var order = ['demo1', 'demo2', 'demo3']
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    toView: 'green',
    items:[{
      id:'list1',
      photo1:'ph_list1.jpg',
      photo2:'ph_tx2.png',
      photo3:'ph_tx3.png',
      photo4:'ph_tx.png',
      photo5:'ph_ai.png',
      photo6:'ph_sp.png',
      info:'圆环吊坠侧开叉吊带连衣裙',
      money:'￥106.16'
    },{
      id:'list2',
      photo1:'ph_list2.png',
      photo2:'ph_tx1.png',
      photo3:'ph_tx1.png',
      photo4:'ph_tx.png',
      photo5:'ph_ai.png',
      photo6:'ph_sp.png',
      info:'2017春季新款V领连衣裙',
      money:'￥130.66'
    },{
      id:'list3',
      photo1:'ph_list3.png',
      photo2:'ph_tx3.png',
      photo3:'ph_tx2.png',
      photo4:'ph_tx.png',
      photo5:'ph_ai.png',
      photo6:'ph_sp.png',
      info:'2017春夏韩版丝绒字母T恤',
      money:'￥166.33'
    },{
      id:'list4',
      photo1:'ph_list1.jpg',
      photo2:'ph_tx2.png',
      photo3:'ph_tx3.png',
      photo4:'ph_tx.png',
      photo5:'ph_ai.png',
      photo6:'ph_sp.png',
      info:'圆环吊坠侧开叉吊带连衣裙',
      money:'￥106.16'
    },{
      id:'list5',
      photo1:'ph_list2.png',
      photo2:'ph_tx1.png',
      photo3:'ph_tx1.png',
      photo4:'ph_tx.png',
      photo5:'ph_ai.png',
      photo6:'ph_sp.png',
      info:'2017春季新款V领连衣裙',
      money:'￥130.66'
    },{
      id:'list6',
      photo1:'ph_list3.png',
      photo2:'ph_tx3.png',
      photo3:'ph_tx2.png',
      photo4:'ph_tx.png',
      photo5:'ph_ai.png',
      photo6:'ph_sp.png',
      info:'2017春夏韩版丝绒字母T恤',
      money:'￥166.33'
    }]
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

