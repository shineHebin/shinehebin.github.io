import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    linkActiveClass: "active",
    routes: [{
        path: '/',
        name: 'index',
        component: () => import('../pages/index'),
    }, {
        path: '/category',
        name: 'category',
        component: () => import('../pages/category'),
    }, {
        path: '/archives',
        name: 'archives',
        component: () => import('../pages/archives'),
    }, {
        path: '/summary/details/:id',
        name: 'summary',
        component: () => import('../pages/summary'),
    }]
})