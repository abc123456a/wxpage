//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'conttact页面',
    userInfo: {},
     background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
     pro_list: [{
      id:'list1',
      photo2:'ph_tx2.png',
      photo3:'ph_tx3.png',
      photo4:'ph_tx.png',
      photo5:'ph_ai.png',
      info:'圆环吊坠侧开叉吊带连衣裙',
      money:'￥106.16'
    },{
      id:'list2',
      photo2:'ph_tx1.png',
      photo3:'ph_tx1.png',
      photo4:'ph_tx.png',
      photo5:'ph_ai.png',
      info:'2017春季新款V领连衣裙',
      money:'￥130.66'
    },{
      id:'list3',
      photo2:'ph_tx3.png',
      photo3:'ph_tx2.png',
      photo4:'ph_tx.png',
      photo5:'ph_ai.png',
      info:'2017春夏韩版丝绒字母T恤',
      money:'￥166.33'
    },{
      id:'list4',
      photo2:'ph_tx2.png',
      photo3:'ph_tx3.png',
      photo4:'ph_tx.png',
      photo5:'ph_ai.png',
      info:'圆环吊坠侧开叉吊带连衣裙',
      money:'￥106.16'
    },{
      id:'list5',
      photo2:'ph_tx1.png',
      photo3:'ph_tx1.png',
      photo4:'ph_tx.png',
      photo5:'ph_ai.png',
      info:'2017春季新款V领连衣裙',
      money:'￥130.66'
    },{
      id:'list6',
      photo2:'ph_tx3.png',
      photo3:'ph_tx2.png',
      photo4:'ph_tx.png',
      photo5:'ph_ai.png',
      info:'2017春夏韩版丝绒字母T恤',
      money:'￥166.33'
    }],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    nullHouse:true
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    var that = this
    for(var i=0;i<that.data.pro_list.length;i++){
       if(options.index==that.data.pro_list[i].id){
          that.setData({
             userInfo:{
              photo2:that.data.pro_list[i].photo2,
              photo3:that.data.pro_list[i].photo3,
              photo4:that.data.pro_list[i].photo4,
              photo5:that.data.pro_list[i].photo5,
              info:that.data.pro_list[i].info,
              money:that.data.pro_list[i].money
              }
          })
          console.log(that.data.userInfo);
       }
     }
  },
  onUnload:function(){

  },
  clickBuy:function(){
   this.setData({
    nullHouse:false, //弹窗显示
    }) 
  }
})
