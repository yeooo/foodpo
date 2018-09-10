//引入本地json数据，这里引入的就是第一步定义的json数据
const comment = require('../../data/comment.js');
Page({
  data: {
    comment: {},
  },
  // 生命周期函数--监听页面加载
  onLoad() {
    this.setData({ comment: comment.comment });
    console.log(this.data.comment);
  }
})
