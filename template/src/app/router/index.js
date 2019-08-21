import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [{
    path: '/home',
    name: 'home',
    component: () => import('@/app/components/Home.vue'),
    props: true
}];

//创建router实例
const router = new VueRouter({
    routes
});

export default router;