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
  onload() {
    console.log(this.properties.foodData);
  },
  methods: {
    // 这里是一个自定义方法
    customMethod() {
      this.setData({
        "someData": this.properties.foodData
      })
    },
    swiperChange(e) {
      this.setData({
        current: e.detail.current + 1
      });
    },
  }
})