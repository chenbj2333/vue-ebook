import * as types from './bookTypes';

const book = {
  state: {
    fileName: '',
    menuVisible: false
  },
  getters: {
    fileName: state => state.fileName,
    menuVisible: state => state.menuVisible
  },
  actions: {
    setFileName: ({ commit }, fileName) => {
      commit(types.SET_FILENAME, fileName);
    },
    setMenuVisible: ({ commit }, menuVisible) => {
      commit(types.SET_MENUVISIBLE, menuVisible);
    }
  },
  mutations: {
    [types.SET_FILENAME]: (state, fileName) => {
      state.fileName = fileName;
    },
    [types.SET_MENUVISIBLE]: (state, menuVisible) => {
      state.menuVisible = menuVisible;
    }
  }
};

export default book;
