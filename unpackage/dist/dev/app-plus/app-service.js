if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$6 = {
    data() {
      return {
        title: "Hello"
      };
    },
    onLoad() {
    },
    methods: {
      switchPage: function(e) {
        formatAppLog("log", "at pages/index/index.vue:75", e.currentTarget.id);
        switch (e.currentTarget.id) {
          case "pic1":
            uni.navigateTo({
              url: "/pages/import2d/import2d"
            });
            break;
          case "pic2":
            uni.navigateTo({
              url: "/pages/import3d/import3d"
            });
            break;
          case "pic3":
            uni.navigateTo({
              url: "/pages/importSR/importSR"
            });
            break;
          case "pic4":
            uni.navigateTo({
              url: "/pages/importStyle/importStyle"
            });
            break;
        }
      },
      getImage: function(e) {
        var self = this;
        var cmr = plus.camera.getCamera();
        cmr.captureImage(function(p) {
          plus.io.resolveLocalFileSystemURL(p, function(entry) {
            var imgURL = entry.toLocalURL();
            uni.showActionSheet({
              itemList: ["动漫风格", "景深效果", "清晰度增强"],
              success: function(res) {
                switch (res.tapIndex) {
                  case 0:
                    uni.navigateTo({
                      url: "/pages/import2d/import2d?url=" + imgURL
                    });
                    break;
                  case 1:
                    uni.navigateTo({
                      url: "/pages/import3d/import3d?url=" + imgURL
                    });
                    break;
                  case 2:
                    self.compressImage(imgURL).then(function(compressedPath) {
                      uni.navigateTo({
                        url: "/pages/importSR/importSR?url=" + compressedPath
                      });
                    }).catch(function(errorMessage) {
                      formatAppLog("log", "at pages/index/index.vue:136", "compress error");
                    });
                    break;
                }
              },
              fail: function(res) {
                formatAppLog("log", "at pages/index/index.vue:145", res.errMsg);
              }
            });
          }, function(e2) {
            plus.nativeUI.toast("读取拍照文件错误：" + e2.message);
          });
        }, function(e2) {
        }, {
          filter: "image"
        });
      },
      // 压缩图片函数
      compressImage: function(sourcePath) {
        return new Promise(function(resolve, reject) {
          var targetPath = plus.io.convertLocalFileSystemURL("_doc/compressed.jpg");
          var options = {
            src: sourcePath,
            // 原始图片路径
            dst: targetPath,
            // 压缩后图片路径
            width: "20%",
            height: "20%",
            //quality: 5, // 压缩质量，可调整压缩比例，范围为0-100
            overwrite: true
            // 是否覆盖源文件
          };
          plus.zip.compressImage(options, function(event) {
            formatAppLog("log", "at pages/index/index.vue:175", "压缩后", JSON.stringify(event));
            resolve(event.target);
          }, function(error) {
            reject(error.message);
          });
        });
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createCommentVNode(' <view class="swiper"> '),
      vue.createElementVNode("image", {
        src: "/static/swiper1.jpg",
        class: "swiper-item",
        mode: "aspectFill"
      }),
      vue.createCommentVNode(" </view> "),
      vue.createElementVNode("view", { style: { "height": "4vw" } }),
      vue.createElementVNode("view", { class: "holder1" }, [
        vue.createElementVNode("view", { class: "holder2" }, [
          vue.createElementVNode("view", {
            onClick: _cache[0] || (_cache[0] = (...args) => $options.switchPage && $options.switchPage(...args)),
            id: "pic1",
            class: "pic",
            style: { "background": "url(/static/2d.jpg)", "background-size": "cover" }
          }),
          vue.createElementVNode("view", { class: "flex_center tag_holder" }, [
            vue.createElementVNode("text", { style: { "color": "brown" } }, "漫转2D")
          ])
        ]),
        vue.createElementVNode("view", { class: "holder2" }, [
          vue.createElementVNode("view", {
            onClick: _cache[1] || (_cache[1] = (...args) => $options.switchPage && $options.switchPage(...args)),
            id: "pic2",
            class: "pic",
            style: { "background": "url(/static/3d.gif)", "background-size": "cover" }
          }),
          vue.createCommentVNode(' <video src="/static/3d.mp4" autoplay="true" loop="true"></video> '),
          vue.createElementVNode("view", { class: "flex_center tag_holder" }, [
            vue.createElementVNode("text", { style: { "color": "brown" } }, "漫转3D")
          ])
        ])
      ]),
      vue.createElementVNode("view", {
        class: "holder1",
        style: { "margin-bottom": "10px" }
      }, [
        vue.createElementVNode("view", { class: "holder2" }, [
          vue.createElementVNode("view", {
            onClick: _cache[2] || (_cache[2] = (...args) => $options.switchPage && $options.switchPage(...args)),
            id: "pic3",
            class: "pic",
            style: { "background": "url(/static/pic3.png)", "background-size": "cover", "background-color": "white" }
          }),
          vue.createElementVNode("view", { class: "flex_center tag_holder" }, [
            vue.createElementVNode("text", { style: { "color": "brown" } }, "图像焕新")
          ])
        ]),
        vue.createElementVNode("view", { class: "holder2" }, [
          vue.createElementVNode("view", {
            onClick: _cache[3] || (_cache[3] = (...args) => $options.switchPage && $options.switchPage(...args)),
            id: "pic4",
            class: "pic",
            style: { "background": "url(/static/style.jpg)", "background-size": "cover" }
          }),
          vue.createElementVNode("view", { class: "flex_center tag_holder" }, [
            vue.createElementVNode("text", { style: { "color": "brown" } }, "风格迁移")
          ])
        ])
      ]),
      vue.createElementVNode("view", {
        class: "flex_center",
        style: { "width": "100%", "height": "fit-content" },
        onClick: _cache[4] || (_cache[4] = (...args) => $options.getImage && $options.getImage(...args))
      }, [
        vue.createCommentVNode(' <view class="flex_center photo_holder"> '),
        vue.createElementVNode("image", {
          src: "/static/photo.png",
          class: "photo"
        }),
        vue.createCommentVNode(" </view> ")
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "C:/Users/72398/Documents/GitHub/Qpic/pages/index/index.vue"]]);
  function dataUrlToBase64(str) {
    var array = str.split(",");
    return array[array.length - 1];
  }
  var index = 0;
  function getNewFileId() {
    return Date.now() + String(index++);
  }
  function biggerThan(v1, v2) {
    var v1Array = v1.split(".");
    var v2Array = v2.split(".");
    var update = false;
    for (var index2 = 0; index2 < v2Array.length; index2++) {
      var diff = v1Array[index2] - v2Array[index2];
      if (diff !== 0) {
        update = diff > 0;
        break;
      }
    }
    return update;
  }
  function base64ToPath(base64) {
    return new Promise(function(resolve, reject) {
      if (typeof window === "object" && "document" in window) {
        base64 = base64.split(",");
        var type = base64[0].match(/:(.*?);/)[1];
        var str = atob(base64[1]);
        var n = str.length;
        var array = new Uint8Array(n);
        while (n--) {
          array[n] = str.charCodeAt(n);
        }
        return resolve((window.URL || window.webkitURL).createObjectURL(new Blob([array], { type })));
      }
      var extName = base64.split(",")[0].match(/data\:\S+\/(\S+);/);
      if (extName) {
        extName = extName[1];
      } else {
        reject(new Error("base64 error"));
      }
      var fileName = getNewFileId() + "." + extName;
      if (typeof plus === "object") {
        var basePath = "_doc";
        var dirPath = "uniapp_temp";
        var filePath = basePath + "/" + dirPath + "/" + fileName;
        if (!biggerThan(plus.os.name === "Android" ? "1.9.9.80627" : "1.9.9.80472", plus.runtime.innerVersion)) {
          plus.io.resolveLocalFileSystemURL(basePath, function(entry) {
            entry.getDirectory(dirPath, {
              create: true,
              exclusive: false
            }, function(entry2) {
              entry2.getFile(fileName, {
                create: true,
                exclusive: false
              }, function(entry3) {
                entry3.createWriter(function(writer) {
                  writer.onwrite = function() {
                    resolve(filePath);
                  };
                  writer.onerror = reject;
                  writer.seek(0);
                  writer.writeAsBinary(dataUrlToBase64(base64));
                }, reject);
              }, reject);
            }, reject);
          }, reject);
          return;
        }
        var bitmap = new plus.nativeObj.Bitmap(fileName);
        bitmap.loadBase64Data(base64, function() {
          bitmap.save(filePath, {}, function() {
            bitmap.clear();
            resolve(filePath);
          }, function(error) {
            bitmap.clear();
            reject(error);
          });
        }, function(error) {
          bitmap.clear();
          reject(error);
        });
        return;
      }
      if (typeof wx === "object" && wx.canIUse("getFileSystemManager")) {
        var filePath = wx.env.USER_DATA_PATH + "/" + fileName;
        wx.getFileSystemManager().writeFile({
          filePath,
          data: dataUrlToBase64(base64),
          encoding: "base64",
          success: function() {
            resolve(filePath);
          },
          fail: function(error) {
            reject(error);
          }
        });
        return;
      }
      reject(new Error("not support"));
    });
  }
  const serverUrl = "http://10.202.221.49:5000";
  const superResolutionUrl = serverUrl + "/uploadImg/1";
  const pic2dUrl = serverUrl + "/uploadImg/2";
  const styleTransferUrl = serverUrl + "/uploadImg/styleTransfer";
  const _sfc_main$5 = {
    data() {
      return {
        pass: false,
        tempFilePaths: [],
        res_image_base64: {}
      };
    },
    onLoad(e) {
      formatAppLog("log", "at pages/import2d/import2d.vue:29", e);
      if (e.hasOwnProperty("url")) {
        this.pass = true;
        this.tempFilePaths.push(e.url);
      }
    },
    onReady(e) {
      if (this.pass) {
        formatAppLog("log", "at pages/import2d/import2d.vue:39", "开始上传");
        this.uploadImage(this.tempFilePaths);
      }
    },
    methods: {
      chooseImage: function() {
        var self = this;
        uni.chooseImage({
          count: 1,
          //默认9
          sizeType: ["compressed"],
          //可以指定是原图还是压缩图，默认二者都有
          sourceType: ["album", "camera"],
          //从相册选择
          success: function(res) {
            formatAppLog("log", "at pages/import2d/import2d.vue:52", res.tempFilePaths[0]);
            formatAppLog("log", "at pages/import2d/import2d.vue:54", "文件url列表", res.tempFilePaths);
            self.uploadImage(res.tempFilePaths);
          }
        });
      },
      uploadImage: function(tempFilePaths) {
        var self = this;
        uni.showLoading({
          title: "图片上传中"
        });
        uni.uploadFile({
          url: pic2dUrl,
          filePath: tempFilePaths[0],
          name: "file",
          success: (uploadFileRes) => {
            var res = JSON.parse(uploadFileRes.data);
            self.res_image_base64 = res.data;
            uni.showLoading({
              title: "预览加载中"
            });
            base64ToPath(self.res_image_base64).then((path) => {
              uni.hideLoading();
              formatAppLog("log", "at pages/import2d/import2d.vue:79", path);
              var urls = [];
              urls.push(path);
              uni.previewImage({
                urls,
                indicator: "none"
              });
              plus.nativeUI.toast(
                "转换成功, 长按保存到相册",
                {
                  duration: "long"
                }
              );
            }).catch((error) => {
              formatAppLog("error", "at pages/import2d/import2d.vue:94", error);
            });
          }
        });
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", {
        class: "pic",
        style: { "background": "url(/static/2d.jpg)", "background-size": "cover" }
      }, [
        vue.createElementVNode("view", { class: "flex_center tag_holder" }, [
          vue.createElementVNode("text", { style: { "color": "brown", "font-size": "45rpx" } }, "漫转2D")
        ])
      ]),
      vue.createElementVNode("view", {
        class: "button",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.chooseImage && $options.chooseImage(...args))
      }, "＋ 导入")
    ]);
  }
  const PagesImport2dImport2d = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "C:/Users/72398/Documents/GitHub/Qpic/pages/import2d/import2d.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {};
    },
    onLoad(e) {
      if (e.hasOwnProperty("url")) {
        this.pass = true;
        this.tempFilePaths.push(e.url);
      }
    },
    onReady(e) {
      if (this.pass) {
        this.uploadImage(this.tempFilePaths);
      }
    },
    methods: {}
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", {
        class: "pic",
        style: { "background": "url(/static/3d.gif)", "background-size": "cover" }
      }, [
        vue.createElementVNode("view", { class: "flex_center tag_holder" }, [
          vue.createElementVNode("text", { style: { "color": "brown", "font-size": "45rpx" } }, "漫转3D")
        ])
      ]),
      vue.createElementVNode("view", { class: "button" }, "＋ 导入")
    ]);
  }
  const PagesImport3dImport3d = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "C:/Users/72398/Documents/GitHub/Qpic/pages/import3d/import3d.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {
        title: "Hello"
      };
    },
    onLoad() {
    },
    methods: {
      switchPage: function(e) {
        switch (e.currentTarget.id) {
          case "pic1":
            uni.navigateTo({
              url: "/pages/import2d/import2d"
            });
            break;
          case "pic2":
            uni.navigateTo({
              url: "/pages/import3d/import3d"
            });
            break;
        }
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("swiper", {
        class: "swiper",
        circular: "",
        autoplay: true
      }, [
        vue.createElementVNode("swiper-item", null, [
          vue.createElementVNode("image", {
            src: "/static/renew_swiper1.jpg",
            class: "swiper-item",
            mode: "aspectFit"
          })
        ])
      ]),
      vue.createElementVNode("view", { style: { "height": "5%" } }),
      vue.createElementVNode("view", { class: "holder1" }, [
        vue.createElementVNode("view", {
          onClick: _cache[0] || (_cache[0] = (...args) => $options.switchPage && $options.switchPage(...args)),
          id: "pic1",
          class: "pic",
          style: { "background": "url(/static/pic1.jpg)", "background-size": "cover" }
        }, [
          vue.createElementVNode("view", { class: "flex_center tag_holder" }, [
            vue.createElementVNode("text", { style: { "color": "brown" } }, "漫转2D")
          ])
        ]),
        vue.createElementVNode("view", {
          onClick: _cache[1] || (_cache[1] = (...args) => $options.switchPage && $options.switchPage(...args)),
          id: "pic2",
          class: "pic",
          style: { "background": "url(/static/pic2.jpg)", "background-size": "cover" }
        }, [
          vue.createElementVNode("view", { class: "flex_center tag_holder" }, [
            vue.createElementVNode("text", { style: { "color": "brown" } }, "漫转3D")
          ])
        ])
      ])
    ]);
  }
  const PagesRenewRenew = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "C:/Users/72398/Documents/GitHub/Qpic/pages/renew/renew.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        pass: false,
        tempFilePaths: [],
        res_image_base64: {}
      };
    },
    onLoad(e) {
      formatAppLog("log", "at pages/importSR/importSR.vue:29", e);
      if (e.hasOwnProperty("url")) {
        this.pass = true;
        this.tempFilePaths.push(e.url);
      }
    },
    onReady(e) {
      if (this.pass) {
        this.uploadImage(this.tempFilePaths);
      }
    },
    methods: {
      chooseImage: function() {
        var self = this;
        uni.chooseImage({
          count: 1,
          //默认9
          sizeType: ["compressed"],
          //可以指定是原图还是压缩图，默认二者都有
          sourceType: ["album", "camera"],
          //从相册选择
          success: function(res) {
            formatAppLog("log", "at pages/importSR/importSR.vue:51", res.tempFilePaths[0]);
            self.uploadImage(res.tempFilePaths);
          }
        });
      },
      uploadImage: function(tempFilePaths) {
        var self = this;
        uni.showLoading({
          title: "处理中"
        });
        uni.uploadFile({
          url: superResolutionUrl,
          filePath: tempFilePaths[0],
          name: "file",
          success: (uploadFileRes) => {
            var res = JSON.parse(uploadFileRes.data);
            self.res_image_base64 = res.data;
            uni.showLoading({
              title: "预览加载中"
            });
            base64ToPath(self.res_image_base64).then((path) => {
              uni.hideLoading();
              formatAppLog("log", "at pages/importSR/importSR.vue:76", path);
              var urls = [];
              urls.push(path);
              uni.previewImage({
                urls,
                indicator: "none"
              });
              plus.nativeUI.toast(
                "转换成功, 长按保存到相册",
                {
                  duration: "long"
                }
              );
            }).catch((error) => {
              formatAppLog("error", "at pages/importSR/importSR.vue:91", error);
            });
          }
        });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", {
        class: "pic",
        style: { "background": "url(/static/pic3.png)", "background-size": "cover", "background-color": "lightblue" }
      }, [
        vue.createElementVNode("view", { class: "flex_center tag_holder" }, [
          vue.createElementVNode("text", { style: { "color": "brown", "font-size": "45rpx" } }, "模糊变清晰")
        ])
      ]),
      vue.createElementVNode("view", {
        class: "button",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.chooseImage && $options.chooseImage(...args))
      }, "＋ 导入")
    ]);
  }
  const PagesImportSRImportSR = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "C:/Users/72398/Documents/GitHub/Qpic/pages/importSR/importSR.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        tempFilePaths: [],
        res_image_base64: {}
      };
    },
    methods: {
      chooseContentImage: function() {
        var self = this;
        uni.chooseImage({
          count: 1,
          //默认9
          sizeType: ["compressed"],
          //可以指定是原图还是压缩图，默认二者都有
          sourceType: ["album", "camera"],
          //从相册选择
          success: function(res) {
            var newarr2 = self.tempFilePaths.concat(res.tempFilePaths);
            self.tempFilePaths = newarr2;
          }
        });
      },
      chooseStyleImage: function() {
        var self = this;
        uni.chooseImage({
          count: 1,
          //默认9
          sizeType: ["compressed"],
          //可以指定是原图还是压缩图，默认二者都有
          sourceType: ["album", "camera"],
          //从相册选择
          success: function(res) {
            var newarr2 = self.tempFilePaths.concat(res.tempFilePaths);
            self.tempFilePaths = newarr2;
            formatAppLog("log", "at pages/importStyle/importStyle.vue:56", "test");
            if (self.tempFilePaths.length == 2) {
              self.uploadImage(self.tempFilePaths);
            }
          }
        });
      },
      uploadImage: function(tempFilePaths) {
        var self = this;
        uni.showLoading({
          title: "处理中，请耐心等待"
        });
        var files = [];
        tempFilePaths.forEach((item, index2) => {
          var obj = {};
          obj.uri = item;
          obj.name = "file" + index2;
          files.push(obj);
        });
        formatAppLog("log", "at pages/importStyle/importStyle.vue:75", files);
        uni.uploadFile({
          url: styleTransferUrl,
          files,
          success: (uploadFileRes) => {
            var res = JSON.parse(uploadFileRes.data);
            self.res_image_base64 = res.data;
            uni.showLoading({
              title: "预览加载中"
            });
            base64ToPath(self.res_image_base64).then((path) => {
              uni.hideLoading();
              formatAppLog("log", "at pages/importStyle/importStyle.vue:89", path);
              var urls = [];
              urls.push(path);
              uni.previewImage({
                urls,
                indicator: "none"
              });
              plus.nativeUI.toast(
                "转换成功, 长按保存到相册",
                {
                  duration: "long"
                }
              );
              self.tempFilePaths = newarr;
            }).catch((error) => {
              formatAppLog("error", "at pages/importStyle/importStyle.vue:105", error);
            });
          },
          error: (res) => {
            uni.showToast({
              title: "网络请求错误"
            });
          }
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", {
        class: "pic",
        style: { "background": "url(/static/style.jpg)", "background-size": "cover" }
      }, [
        vue.createElementVNode("view", { class: "flex_center tag_holder" }, [
          vue.createElementVNode("text", { style: { "color": "brown", "font-size": "45rpx" } }, "风格迁移")
        ])
      ]),
      vue.createElementVNode("view", { class: "button_holder" }, [
        vue.createElementVNode(
          "view",
          {
            class: "button",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.chooseContentImage && $options.chooseContentImage(...args))
          },
          vue.toDisplayString($data.tempFilePaths.length >= 1 ? "已选择" : "选择内容图片"),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "view",
          {
            class: "button",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.chooseStyleImage && $options.chooseStyleImage(...args))
          },
          vue.toDisplayString($data.tempFilePaths.length == 2 ? "已选择" : "选择目标风格图片"),
          1
          /* TEXT */
        )
      ])
    ]);
  }
  const PagesImportStyleImportStyle = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "C:/Users/72398/Documents/GitHub/Qpic/pages/importStyle/importStyle.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/import2d/import2d", PagesImport2dImport2d);
  __definePage("pages/import3d/import3d", PagesImport3dImport3d);
  __definePage("pages/renew/renew", PagesRenewRenew);
  __definePage("pages/importSR/importSR", PagesImportSRImportSR);
  __definePage("pages/importStyle/importStyle", PagesImportStyleImportStyle);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/72398/Documents/GitHub/Qpic/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
