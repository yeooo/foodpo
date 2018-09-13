//index.js
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
    data: {
        dataInfo: {
            img: [],
            des: '',
            location: '添加地点'
        }
    },
    // 上传图片接口
    doUpload: function () {
        var that = this
        // 选择图片
        wx.chooseImage({
            // count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: function (res) {
                // util.showBusy('正在上传');
                let tempFiles = res.tempFilePaths,
                    filePaths = [];
                //把选择的图片 添加到集合里
                for (let i in tempFiles) {
                    filePaths.push(tempFiles[i])
                }
                that.setData({
                    [`dataInfo.img`]: filePaths
                });

            },
            fail: function (e) {
                console.error(e)
            }
        })
    },

    /**
     * send data
     */
    send() {
        util.showSuccess('发布中');
        for (let i in this.data.dataInfo.img) {
            wx.uploadFile({
                url: config.service.uploadUrl,
                filePath: this.data.dataInfo.img[i],
                name: 'file',
                success: function (res) {
                    res = JSON.parse(res.data)
                },

                fail: function (e) {
                    util.showModel('上传图片失败')
                }
            })
        }
        util.showSuccess('发布成功');
    },

    loadInfo() {
        let _this = this;
        wx.chooseLocation({
            success: function (res) {
                console.log(res);
                _this.setData({
                    [`dataInfo.location`]: res.name
                })
            }
        })

    }
})
