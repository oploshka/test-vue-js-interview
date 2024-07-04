

export default {
  state: {
    userListPage: {
      lastFilter: {},
    },
  },
  getters: {
    userListPageLastFilter(state) {
      return state.userListPage.lastFilter;
    }
  },
  mutations: {
    setUserListPageLastFilter (state, filter) {
      state.userListPage.lastFilter = filter;
    },
  },
  actions: {
    // Вроде mutations было нельзя вызвать на прямую, по этому если что делаем алиас в actions
  }
};
