import Vue from 'vue';
import App from './App';
import './scss/index.scss';

//饿了么ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//主页面
new Vue({
    el:'#app',
    components:{App},
    render:h=>h(App)
});


