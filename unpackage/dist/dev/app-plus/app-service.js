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
  const _sfc_main$4 = {
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
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("swiper", {
        class: "swiper",
        circular: "",
        autoplay: true
      }, [
        vue.createElementVNode("swiper-item", null, [
          vue.createElementVNode("image", {
            src: "/static/swiper1.png",
            class: "swiper-item",
            mode: "aspectFill"
          })
        ]),
        vue.createElementVNode("swiper-item", null, [
          vue.createElementVNode("image", {
            src: "/static/swiper2.jpg",
            class: "swiper-item",
            mode: "aspectFill"
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
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "C:/Users/72398/HBuilderProjects/tool/pages/index/index.vue"]]);
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
        style: { "background": "url(/static/pic1.jpg)", "background-size": "cover" }
      }, [
        vue.createElementVNode("view", { class: "flex_center tag_holder" }, [
          vue.createElementVNode("text", { style: { "color": "brown", "font-size": "45rpx" } }, "漫转2D")
        ])
      ]),
      vue.createElementVNode("view", { class: "button" }, "＋ 导入")
    ]);
  }
  const PagesImport2dImport2d = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "C:/Users/72398/HBuilderProjects/tool/pages/import2d/import2d.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesImport3dImport3d = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "C:/Users/72398/HBuilderProjects/tool/pages/import3d/import3d.vue"]]);
  const _sfc_main$1 = {
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
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesRenewRenew = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "C:/Users/72398/HBuilderProjects/tool/pages/renew/renew.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/import2d/import2d", PagesImport2dImport2d);
  __definePage("pages/import3d/import3d", PagesImport3dImport3d);
  __definePage("pages/renew/renew", PagesRenewRenew);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
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
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/72398/HBuilderProjects/tool/App.vue"]]);
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
