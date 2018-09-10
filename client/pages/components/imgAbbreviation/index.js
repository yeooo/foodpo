Component({
  properties: {
    abbreviationList: {
      type: Object,
      value: {}
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod() {
      this.setData({
        "someData": this.properties.foodData
      })
    }
  }
})