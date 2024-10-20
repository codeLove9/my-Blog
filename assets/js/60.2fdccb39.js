(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{415:function(s,e,a){"use strict";a.r(e);var n=a(2),t=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("使用axios进行请求，而配置代理过程")]),s._v(" "),e("h2",{attrs:{id:"第一种"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一种"}},[s._v("#")]),s._v(" 第一种")]),s._v(" "),e("p",[s._v("在package.json中，添加"),e("code",[s._v("proxy")]),s._v("配置项,之后所有的请求都会指向该地址"),e("br"),s._v("\n但这种方法只能配置一次，也只有一个")]),s._v(" "),e("p",[s._v("示例：")]),s._v(" "),e("div",{staticClass:"language-react line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('"proxy":"https://localhost:5000"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("添加后，重启项目！！！让配置文件加载生效"),e("br"),s._v("\n然后就可以进行请求了"),e("br"),s._v("\n比如请求地址是 "),e("code",[s._v("http://localhost:5000/api/index/index")]),e("br"),s._v("\n那就可以写")]),s._v(" "),e("div",{staticClass:"language-react line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("axios.get(\"/api/index/index\").then(\n  response => {console.log('成功了',response.data);},\n  error => {console.log('失败了',error);}\n)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"第二种"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二种"}},[s._v("#")]),s._v(" 第二种")]),s._v(" "),e("p",[s._v("在"),e("code",[s._v("src")]),s._v("中，新建"),e("code",[s._v("setupProxy.js")]),s._v("（必须是这个名字，react脚手架会识别），在文件中写以下配置内容（最近的项目要使用高版本这个，不然会导致项目无法启动）："),e("br"),s._v("\nhttp-proxy-middleware高版本（2以上）：")]),s._v(" "),e("div",{staticClass:"language-react line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("const proxy = require('http-proxy-middleware')//引入http-proxy-middleware，react脚手架已经安装\n\nmodule.exports = function(app){\n  app.use(\n    proxy.createProxyMiddleware('/api',{            //遇见/api1前缀的请求，就会触发该代理配置\n      target:'http://localhost:5000',               //请求转发给谁\n      changeOrigin:true,                            //控制服务器收到的请求头中Host的值\n      pathRewrite:{'^/api':''}                      //重写请求路径，下面有示例解释\n    }),\n    proxy.createProxyMiddleware('/api2',{\n      target:'http://localhost:5001',\n      changeOrigin:true,\n      pathRewrite:{'^/api2':''}\n    }),\n  )\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("p",[s._v("写好以后，重启项目！！！"),e("br"),s._v("\n然后进行请求")]),s._v(" "),e("p",[s._v("假设地址是 "),e("code",[s._v("http://localhost:5000/api/index/index")])]),s._v(" "),e("div",{staticClass:"language-react line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("//没有开启重写路径\naxios.get(\"/api/index/index\").then(\n  response => {console.log('成功了',response.data);},\n  error =>  {console.log('失败了',error);}\n)\n//开启重写路径\naxios.get(\"/api/api/index/index\").then(\n  response => {console.log('成功了',response.data);},\n  error => {console.log('失败了',error);}\n)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);