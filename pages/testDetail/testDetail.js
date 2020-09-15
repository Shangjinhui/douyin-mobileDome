// pages/testDetail/testDetail.js
Page({
  data: {
    mobile:'',
    fraction:90,
  },
  onLoad: function (options) {
    //console.log(options)
    this.setData({mobile:options.mobile})
  }
})