Component({
  properties: {
    foodData: {
      type: Object,
      value: {}
    },
    userData: {
      type: Object,
      value: {}
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {},
    current: 1
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      // console.log(this.data.foodData.comment[4])
    }
  },
  methods: {
    like() {
      console.log(1)
    },
    collect() {
      console.log(1)
    },
    onShareAppMessage: function () {
      // 用户点击右上角分享
      return {
        title: 'title', // 分享标题
        desc: 'desc', // 分享描述
        path: 'path' // 分享路径
      }
    },
    book() {
      console.log(1)
    },
    // save current image number
    swiperChange(e) {
      this.setData({
        current: e.detail.current + 1
      });
    },
    // go to comment page
    gotoCommentPage() {
      wx.navigateTo({
        url: '/pages/comment/index'
      })
    }
  }
})