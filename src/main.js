import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from 'axios'
import 'bootstrap'

import currencyFilter from '@/filters/currencyFilter';
import timestamp from '@/filters/timestamp';

Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.filter('currency', currencyFilter)
Vue.filter('timestamp', timestamp)

import zhTWValidate from 'vee-validate/dist/locale/zh_TW';
import VeeValidate, { Validator } from 'vee-validate';
Validator.localize('zh_TW', zhTWValidate);
Vue.use(VeeValidate, {
  locale: 'zh_TW',
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`

    axios.post(api).then(res => {
      if (res.data.success)
        next()
      else
        next({
          path: '/login'
        })
    }).catch(err => {
      console.log(err)
    })
  } else next()
})
