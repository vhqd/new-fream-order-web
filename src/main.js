import store from 'store';
import App from './app.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'utils/element-ui';
import singleSpaVue from 'single-spa-vue';
import router from 'router';
import { setEvtBus } from 'utils/event-bus';

import 'assets/styles/clear.css';

Vue.use(VueRouter);
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
