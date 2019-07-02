//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../tex/1.png',
      '../../tex/2.png',
      '../../tex/3.png'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 200
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onLoad: function() {}
})