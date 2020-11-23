/**
 * 用户管理全局状态
 * @author chenmb
 * @since 2020/11/12
 */
import { getList } from 'api/user';

const state = {
  list: [],
};

const mutations = {
  setList(state, payload) {
    state.list = payload;
  },
};

const actions = {
  async fetch({ state, commit }) {
    let list = [];
    try {
      const params = { authId: '7715741018907525120' };
      list = await getList(params);
    } catch (error) {
      console.log(error);
    }
    commit('setList', list);
  },
};

export default { namespaced: true, state, mutations, actions };
