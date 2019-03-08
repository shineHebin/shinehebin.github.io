import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Category from '../pages/category'
import Archives from '../pages/archives'

import Summary from '../pages/summary'

Vue.use(Router)

export default new Router({
    linkActiveClass: "active",
    routes: [{
        path: '/',
        name: 'index',
        component: Index
    }, {
        path: '/category',
        name: 'category',
        component: Category
    }, {
        path: '/archives',
        name: 'archives',
        component: Archives,
    }, {
        path: '/summary/details/:id',
        name: 'summary',
        component: Summary
    }]
})