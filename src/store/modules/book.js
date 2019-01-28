import * as types from './bookTypes';

const book = {
  state: {
    fileName: '',
    menuVisible: false,
    settingVisible: -1,
    defaultFontSize: 16
  },
  getters: {
    fileName: state => state.fileName,
    menuVisible: state => state.menuVisible,
    settingVisible: state => state.settingVisible,
    defaultFontSize: state => state.defaultFontSize
  },
  actions: {
    setFileName: ({ commit }, fileName) => {
      commit(types.SET_FILENAME, fileName);
    },
    setMenuVisible: ({ commit }, menuVisible) => {
      commit(types.SET_MENUVISIBLE, menuVisible);
    },
    setSettingVisible: ({ commit }, settingVisible) => {
      commit(types.SET_SETTINGVISIBLE, settingVisible);
    },
    setDefaultFontSize: ({ commit }, defaultFontSize) => {
      commit(types.SET_DEFAULT_FONT_SIZE, defaultFontSize);
    }
  },
  mutations: {
    [types.SET_FILENAME]: (state, fileName) => {
      state.fileName = fileName;
    },
    [types.SET_MENUVISIBLE]: (state, menuVisible) => {
      state.menuVisible = menuVisible;
    },
    [types.SET_SETTINGVISIBLE]: (state, settingVisible) => {
      if (state.settingVisible === settingVisible) {
        state.settingVisible = -1;
      } else {
        state.settingVisible = settingVisible;
      }
    },
    [types.SET_DEFAULT_FONT_SIZE]: (state, defaultFontSize) => {
      state.defaultFontSize = defaultFontSize;
    }
  }
};

export default book;
