import Vue from 'vue';
import VueRouter from 'vue-router';
import routers from './routes';

Vue.use(VueRouter);
let router = new VueRouter({
  routes: routers,
});
export default router;
