//引入本地json数据，这里引入的就是第一步定义的json数据
const comment = require('../../data/comment.js');
Page({
  data: {
    comment: {},
    animation: '',
    btnOpacity: 0,
    commentData: ''
  },
  // 生命周期函数--监听页面加载
  onLoad() {
    this.setData({ comment: comment.comment });
    // 页面渲染完成
    //实例化一个动画
    this.animation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 300,
      timingFunction: 'linear',
      delay: 0
    })
  },
  bindFocus() {
    console.log(1);
    this.animation.opacity(1).step();
    this.setData({
      //输出动画
      animation: this.animation.export(),
      btnOpacity: 1
    })
  },
  loseBlur() {
    console.log(2);
    this.animation.opacity(0).step();
    this.setData({
      //输出动画
      animation: this.animation.export(),
      btnOpacity: 0
    })
  },
  // set value
  bindkeyInput(e) {
    this.setData({
      commentData: e.detail.value,
    })
  },
  like(e) {
    let index = e.currentTarget.dataset.index;
    let arr = this.data.comment.comment;

    if (arr[index].isSelected) {
      arr[index].isSelected = false;
    } else {
      arr[index].isSelected = true;
    }
    this.setData({
      [`comment.comment[${index}].isSelected`]: arr[index].isSelected
    })
  },
  sendData() {
    if (this.data.commentData) {
      wx.showModal({
        title: '提示',
        content: this.data.commentData,
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '请不要发送空的评论哦~',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  }
})
