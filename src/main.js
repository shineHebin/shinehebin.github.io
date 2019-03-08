// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import Axios from 'axios'
import hljs from "highlight.js"
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.prototype.$axios = Axios
Vue.config.productionTip = false

// 简单配置
nprogress.inc(0.2)
nprogress.configure({ easing: 'ease', speed: 500, showSpinner: false })

//语法高亮
Vue.directive('highlight', function(el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
})

router.beforeEach((to, from, next) => {
    nprogress.start()
    next()
})
router.afterEach(() => {
    nprogress.done()
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})