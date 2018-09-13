Component({
  properties: {
    labelText: {
      type: String,
      value: ''
    },
    itemLink: {
      type: String,
      value: ''
    }
  },
  methods: {
    // 这里是一个自定义方法
    gotoLink() {
      console.log(this.data.itemLink);
      let _this = this;
      wx.navigateTo({
        url: _this.data.itemLink
      })
    }
  }
})