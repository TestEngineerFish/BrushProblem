// miniprogram/pages/brushProblem/brushProblem.js

const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    title: "",
    answer: false,
    current_page: 0,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var problem = getApp().globalData.problemList[0]
    this.setData({
      title: problem["title"],
      answer: problem["isTrue"],
      current_page: 0,
    })
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

  left(event) 
  {
    var isRight = this.isRight(false)
    this.nextProlem()
  },

  right(event)
  {
    var isRight = this.isRight(true)
    this.nextProlem()
  },

  nextProlem: function () {
    var page = this.data["current_page"] + 1
    var problemList = getApp().globalData.problemList
    if (page < problemList.length){
      this.setData({
        current_page: page,
        title: problemList[page]["title"],
        answer: problemList[page]["isTrue"]
      })
    }
  },

  isRight: function (isTrue) {
    var answer = this.data["answer"]
    if (answer) {
      wx.showToast({
        title: '聪明',
      })
    } else {
      wx.showToast({
        title: '笨蛋',
        icon: 'none'
      })
    }
    return answer == isTrue
  }


})

function getTitle()
{
  this.setData({
    title: "外部函数"
  })
}