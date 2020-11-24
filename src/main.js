import store from 'store';
import App from './app.vue';
import Vue from 'vue';
import router from 'router';
import ElementUI from 'utils/element-ui';
import singleSpaVue from 'single-spa-vue';
import { setEvtBus } from 'utils/event-bus';

import elSelectScroll from 'utils/elSelectScroll';
import { resultHandle } from 'utils/mixins';
import 'assets/styles/clear.css';
//下拉分页加载指令
Vue.directive('el-select-scroll', elSelectScroll);
Vue.mixin(resultHandle);
Vue.prototype.$store = store;

Vue.use(ElementUI);

const appOptions = {
  el: '#user',
  store,
  router,
  render(h) {
    return h(App);
  },
};

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions,
});

export const bootstrap = vueLifecycles.bootstrap;

export const mount = (props) => {
  setEvtBus(props.eventBus);
  return vueLifecycles.mount(props);
};

export const unmount = vueLifecycles.unmount;

if (window.__INDEPENDENT__) {
  delete appOptions.el;
  new Vue(appOptions).$mount('#app');
}

if (module.hot) {
  module.hot.accept();
}
