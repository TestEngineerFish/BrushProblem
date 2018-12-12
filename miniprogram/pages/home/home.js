// miniprogram/pages/home/home.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    images: [
      "http://cc.cocimg.com/api/uploads//20181211/1544515938660238.jpg",
      "http://cc.cocimg.com/api/uploads//20181211/1544514800555781.png"
      ],
    indicatorDots: true,
    autoplay: true,
    circular: true,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  play: function () {
    console.log("I'm comming")
    wx.cloud.callFunction({
      name: 'getData',
      complete: res => {
        app.globalData.problemList = res["result"]["data"]
        // 获取完数据后跳转到答题页面
        wx.navigateTo({
          url: '../brushProblem/brushProblem',
        })
      }
    })
  }
})