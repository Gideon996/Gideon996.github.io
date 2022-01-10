import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'


import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import router from './router'

import VueAnalytics from 'vue-analytics';

import titleMixin from './mixins/titleMixin'

Vue.config.productionTip = false

Vue.component('v-icon', Icon)
Vue.use(BootstrapVue)
Vue.mixin(titleMixin)
Vue.use(VueAnalytics)

new Vue({
  id: 'UA-12345678-1',
  router,
  render: h => h(App)
}).$mount('#app')
