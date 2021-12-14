/*
 * @Author: your name
 * @Date: 2020-07-23 09:48:43
 * @LastEditTime: 2021-12-14 11:49:03
 * @LastEditors: 赵婷婷
 * @Description: In User Settings Edit
 * @FilePath: \sucai-modal\src\main.js
 */

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { Message } from 'view-design';
// import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false;
Vue.prototype.$Message = Message;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
