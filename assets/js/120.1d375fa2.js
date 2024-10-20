(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{472:function(t,e,a){"use strict";a.r(e);var r=a(2),v=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("想要对Vue的理解的更深，学习生命周期是不可或缺的")])]),t._v(" "),e("h2",{attrs:{id:"生命周期钩子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生命周期钩子"}},[t._v("#")]),t._v(" 生命周期钩子")]),t._v(" "),e("p",[e("strong",[t._v("何为生命周期：")])]),t._v(" "),e("ul",[e("li",[t._v("通俗地讲，生命周期即"),e("strong",[t._v("Vue实例或组件从创建到被消灭的一系列过程")]),t._v("，中间的各个节点被称为钩子")])]),t._v(" "),e("p",[t._v("生命周期图示： "),e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dc77a9d701624a4cb9a2091934b31855~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp",alt:"在这里插入图片描述"}})]),t._v(" "),e("h2",{attrs:{id:"浏览器渲染过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染过程"}},[t._v("#")]),t._v(" 浏览器渲染过程")]),t._v(" "),e("p",[t._v("要深刻理解生命周期的各个节点，就必须了解浏览器的渲染过程")]),t._v(" "),e("ul",[e("li",[t._v("构建DOM树")]),t._v(" "),e("li",[t._v("构建css规则树,根据执行顺序解析js文件。")]),t._v(" "),e("li",[t._v("构建渲染树Render Tree")]),t._v(" "),e("li",[t._v("渲染树布局layout")]),t._v(" "),e("li",[t._v("渲染树绘制")])]),t._v(" "),e("h2",{attrs:{id:"英语课堂"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#英语课堂"}},[t._v("#")]),t._v(" 英语课堂")]),t._v(" "),e("p",[t._v("既然我们分析的是"),e("code",[t._v("created")]),t._v("和"),e("code",[t._v("mounted")]),t._v("钩子，单词对我们的理解也有所帮助")]),t._v(" "),e("ul",[e("li",[t._v("created：已创建")]),t._v(" "),e("li",[t._v("mounted：已挂载")])]),t._v(" "),e("h2",{attrs:{id:"生命周期中的浏览器渲染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生命周期中的浏览器渲染"}},[t._v("#")]),t._v(" 生命周期中的浏览器渲染")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("生命周期")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("是否获取dom节点")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("是否获取data")])]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("是否获取methods")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("beforeCreate")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("created")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("beforeMount")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("mounted")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("是")])])])]),t._v(" "),e("p",[t._v("从文章开头的生命周期图示可以看出")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("created")]),t._v("在模板渲染成html前调用")]),t._v(" "),e("li",[e("code",[t._v("mounted")]),t._v("在模板渲染成html后调用")])]),t._v(" "),e("h3",{attrs:{id:"beforecreate阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beforecreate阶段"}},[t._v("#")]),t._v(" beforeCreate阶段")]),t._v(" "),e("p",[t._v("对浏览器来说，整个渲染流程尚未开始或者说准备开始，对vue来说，实例尚未被初始化，data observer和 event/watcher也还未被调用，在此阶段，对data、methods或文档节点的调用现在无法得到正确的数据。")]),t._v(" "),e("h2",{attrs:{id:"created阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#created阶段"}},[t._v("#")]),t._v(" created阶段")]),t._v(" "),e("p",[t._v("对浏览器来说，渲染整个HTML文档时,dom节点、css规则树与js文件被解析后，但是没有进入被浏览器render过程，上述资源是尚未挂载在页面上，也就是在vue生命周期中对应的"),e("code",[t._v("created")]),t._v("阶段，实例已经被初始化，但是还没有挂载至 "),e("strong",[t._v("$el")]),t._v("上，所以我们无法获取到对应的节点，但是此时我们是可以获取到vue中data与methods中的数据的")]),t._v(" "),e("h3",{attrs:{id:"beforemount阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beforemount阶段"}},[t._v("#")]),t._v(" beforeMount阶段")]),t._v(" "),e("p",[t._v("实际上与"),e("code",[t._v("created")]),t._v("阶段类似，节点尚未挂载，但是依旧可以获取到data与methods中的数据。")]),t._v(" "),e("h2",{attrs:{id:"mounted阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mounted阶段"}},[t._v("#")]),t._v(" mounted阶段")]),t._v(" "),e("p",[t._v("对浏览器来说，已经完成了dom与css规则树的render，并完成对render tree进行了布局，而浏览器收到这一指令，调用渲染器的paint（）在屏幕上显示，而对于vue来说，在"),e("code",[t._v("mounted")]),t._v("阶段，vue的"),e("strong",[t._v("template成功挂载在$el中")]),t._v("，此时一个完整的页面已经能够显示在浏览器中，所以在这个阶段，即可以调用节点了（关于这一点，在笔者测试中，在mounted方法中打断点然后run，依旧能够在浏览器中看到整体的页面）。")]),t._v(" "),e("h2",{attrs:{id:"使用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),e("p",[t._v("通过浏览器的渲染过程，可以总结出"),e("code",[t._v("created")]),t._v("和"),e("code",[t._v("mounted")]),t._v("的使用场景")]),t._v(" "),e("ul",[e("li",[t._v("created：通常用于"),e("strong",[t._v("初始化某些属性值")]),t._v("，例如data中的数据，然后再渲染成视图。")]),t._v(" "),e("li",[t._v("mounted：通常在初始化页面完成后，"),e("strong",[t._v("对html的dom节点进行需要的操作")]),t._v("。")])]),t._v(" "),e("p",[t._v("因此，在"),e("code",[t._v("created")]),t._v("中，是无法进行DOM操作的，而"),e("code",[t._v("mounted")]),t._v("可以获取渲染出来的所有属性值。")]),t._v(" "),e("h2",{attrs:{id:"参考文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fv3.cn.vuejs.org%2Fapi%2Foptions-lifecycle-hooks.html",title:"https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("生命周期钩子 | Vue.js (vuejs.org)"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fblog.csdn.net%2Fxdnloveme%2Farticle%2Fdetails%2F78035065",title:"https://blog.csdn.net/xdnloveme/article/details/78035065",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue生命周期中mounted和created的区别"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000020058583",title:"https://segmentfault.com/a/1190000020058583",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue中created与mounted区别"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=v.exports}}]);