var app = getApp();
Page({
  data: {
  },
  chooseImg: function() {
    var that = this;
    wx.chooseImage({
      
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths[0]);
        that.setData({ imageSrc: tempFilePaths[0]})
      }
    })
  }
})
