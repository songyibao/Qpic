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
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$5 = {
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
          case "pic3":
            uni.navigateTo({
              url: "/pages/importSR/importSR"
            });
        }
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "swiper" }, [
        vue.createElementVNode("image", {
          src: "/static/swiper1.jpg",
          class: "swiper-item",
          mode: "aspectFill"
        })
      ]),
      vue.createElementVNode("view", { style: { "height": "4vw" } }),
      vue.createElementVNode("view", { class: "holder1" }, [
        vue.createElementVNode("view", { class: "holder2" }, [
          vue.createElementVNode("view", {
            onClick: _cache[0] || (_cache[0] = (...args) => $options.switchPage && $options.switchPage(...args)),
            id: "pic1",
            class: "pic",
            style: { "background": "url(/static/pic1.jpg)", "background-size": "cover" }
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
            style: { "background": "url(/static/pic2.jpg)", "background-size": "cover" }
          }),
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
            style: { "background": "url(/static/pic2.jpg)", "background-size": "cover" }
          }),
          vue.createElementVNode("view", { class: "flex_center tag_holder" }, [
            vue.createElementVNode("text", { style: { "color": "brown" } }, "焕新")
          ])
        ]),
        vue.createElementVNode("view", { class: "holder2" }, [
          vue.createElementVNode("view", {
            onClick: _cache[3] || (_cache[3] = (...args) => $options.switchPage && $options.switchPage(...args)),
            id: "pic4",
            class: "pic",
            style: { "background": "url(/static/pic1.jpg)", "background-size": "cover" }
          }),
          vue.createElementVNode("view", { class: "flex_center tag_holder" }, [
            vue.createElementVNode("text", { style: { "color": "brown" } }, "焕新")
          ])
        ])
      ]),
      vue.createElementVNode("view", {
        class: "flex_center",
        style: { "width": "100%", "height": "fit-content" }
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
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "C:/Users/72398/Documents/GitHub/Qpic/pages/index/index.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
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
  const serverUrl = "http://127.0.0.1:5000";
  const superResolutionUrl = serverUrl + "/uploadImg/1";
  const pic2dUrl = serverUrl + "/uploadImg/2";
  const _sfc_main$4 = {
    data() {
      return {
        tempFilePaths: [],
        res_image_base64: {}
      };
    },
    methods: {
      chooseImage: function() {
        var self = this;
        uni.chooseImage({
          count: 1,
          //默认9
          sizeType: ["original", "compressed"],
          //可以指定是原图还是压缩图，默认二者都有
          sourceType: ["album", "camera"],
          //从相册选择
          success: function(res) {
            formatAppLog("log", "at pages/import2d/import2d.vue:35", res.tempFilePaths[0]);
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
              formatAppLog("log", "at pages/import2d/import2d.vue:60", path);
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
              formatAppLog("error", "at pages/import2d/import2d.vue:75", error);
            });
          }
        });
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", {
        class: "pic",
        style: { "background": "url(/static/pic1.jpg)", "background-size": "cover" }
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
  const PagesImport2dImport2d = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "C:/Users/72398/Documents/GitHub/Qpic/pages/import2d/import2d.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", {
        class: "pic",
        style: { "background": "url(/static/pic2.jpg)", "background-size": "cover" }
      }, [
        vue.createElementVNode("view", { class: "flex_center tag_holder" }, [
          vue.createElementVNode("text", { style: { "color": "brown" } }, "漫转3D")
        ])
      ]),
      vue.createElementVNode("view", { class: "button" }, "＋ 导入")
    ]);
  }
  const PagesImport3dImport3d = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "C:/Users/72398/Documents/GitHub/Qpic/pages/import3d/import3d.vue"]]);
  const _sfc_main$2 = {
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
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesRenewRenew = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "C:/Users/72398/Documents/GitHub/Qpic/pages/renew/renew.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        tempFilePaths: [],
        res_image_base64: {}
      };
    },
    methods: {
      chooseImage: function() {
        var self = this;
        uni.chooseImage({
          count: 1,
          //默认9
          sizeType: ["original", "compressed"],
          //可以指定是原图还是压缩图，默认二者都有
          sourceType: ["album", "camera"],
          //从相册选择
          success: function(res) {
            formatAppLog("log", "at pages/importSR/importSR.vue:35", res.tempFilePaths[0]);
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
              formatAppLog("log", "at pages/importSR/importSR.vue:60", path);
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
              formatAppLog("error", "at pages/importSR/importSR.vue:75", error);
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
        style: { "background": "url(/static/pic1.jpg)", "background-size": "cover" }
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
  const PagesImportSRImportSR = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "C:/Users/72398/Documents/GitHub/Qpic/pages/importSR/importSR.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/import2d/import2d", PagesImport2dImport2d);
  __definePage("pages/import3d/import3d", PagesImport3dImport3d);
  __definePage("pages/renew/renew", PagesRenewRenew);
  __definePage("pages/importSR/importSR", PagesImportSRImportSR);
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
