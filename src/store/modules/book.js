import * as types from './bookTypes'

const book = {
  state: {
    fileName: ''
  },
  getters: {
    fileName: state => state.fileName
  },
  actions: {
    setFileName: ({ commit }, fileName) => {
      commit(types.SET_FILENAME, fileName)
    }
  },
  mutations: {
    [types.SET_FILENAME]: (state, fileName) => {
      state.fileName = fileName
    }
  }
}

export default book
