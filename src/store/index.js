/**
 * vuex初始化
 * @author chenmb
 * @since 2020/11/12
 */

import Vue from 'vue';
import Vuex from 'vuex';

import user from './user';

const modules = {
  user,
};

Vue.use(Vuex);

export default new Vuex.Store({
  modules,
});
