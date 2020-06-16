import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/es'
import DateDropdown from 'vue-date-dropdown'


Vue.use(ElementUI, {locale}, DateDropdown);

Vue.config.productionTip = false

Vue.directive('uppercase', {
	update (el) {
		el.value = el.value.toUpperCase()
	},
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
