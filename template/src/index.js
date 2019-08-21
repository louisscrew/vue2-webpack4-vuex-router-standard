import Vue from 'vue';
import router from '@/app/router';
import store from '@/app/store';
import App from '@/App.vue';
//加载样式
import '@/static/index.scss';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});