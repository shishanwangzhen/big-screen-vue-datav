import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store';
import dataV from '@jiaminghi/data-view';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入全局css
import './assets/scss/style.scss';
import "./assets/iconfont/iconfont.css"
// 按需引入vue-awesome图标
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/chart-bar.js';
import 'vue-awesome/icons/chart-area.js';
import 'vue-awesome/icons/chart-pie.js';
import 'vue-awesome/icons/chart-line.js';
import 'vue-awesome/icons/align-left.js';
// 引入axios
import axios from 'axios'
Vue.prototype.$axios = axios

// 引入Bus
import Bus from './bus'
Vue.prototype.$bus = Bus

// 屏幕自适应
import './rem' 

//引入echart
//4.x 引用方式
// import * as echarts from 'echarts'
//5.x 引用方式为按需引用
//希望使用5.x版本的话,需要在package.json中更新版本号,并切换引用方式
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false;

// 注册全局组件
import projectName from "./components/projectName.vue";
import topRight from "./components/topRight.vue";
import table from "./components/table.vue"
import projectTop from './components/projectTop.vue'
import mask from './components/mask.vue'
import delect from './components/v-delect.vue'
import edit from './components/v-edit.vue'
import configure from './components/v-configuration.vue'
import addDevices from "./components/v-addDevice.vue"
import details from "./components/v-detail.vue"
import day from "./components/v-day.vue"
import addInputList from './components/v-addInputList.vue'
import instructions from './components/v-editInstructions'
import unbinding from './components/v-unbinding'
import latestNews from './components/v-latestNews'
Vue.component('v-projectName',projectName)
Vue.component('v-topRight',topRight)
Vue.component('Table',table)
Vue.component('projectTop',projectTop)
Vue.component('v-mask',mask)
Vue.component('v-delect',delect)
Vue.component('v-edit',edit)
Vue.component('v-configuration',configure)
Vue.component('v-addDevices',addDevices)
Vue.component('v-details',details)
Vue.component('v-day',day)
Vue.component('v-addInputList',addInputList)
Vue.component('v-editInstructions',instructions)
Vue.component("v-unbinding",unbinding)
Vue.component('v-latestNews',latestNews)



// 全局注册
Vue.component('icon', Icon);
Vue.use(dataV);
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
