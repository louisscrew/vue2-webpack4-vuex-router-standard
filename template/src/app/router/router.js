import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const listPage = resolve => require(['@/app/components/list.vue'], resolve);
const detailPage = resolve => require(['@/app/components/detail.vue'], resolve);
// 配置路由
const routes = [{
        path: '/list',
        name: 'list',
        component: listPage,
        props: true
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: detailPage,
        props: true
    }
];
// 生成路由实例
const router = new VueRouter({
    routes
});


export {
    router
};