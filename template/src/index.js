import Vue from 'vue';
import App from '@/App.vue';
//引用router
import { router } from '@/app/router/router.js';
//样式引用
import '@/static/theme.scss';

//声明实例
window.app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
