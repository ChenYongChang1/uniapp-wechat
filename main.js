import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$serverUrl = 'https://unidemo.dcloud.net.cn';

import wechat from './wechat.js'
if(wechat.isWechat()){
    Vue.prototype.$wechat =wechat;
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()