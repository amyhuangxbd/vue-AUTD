const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
const GET_DATA = 'GET_DATA'

export default {
  [GET_DATA] (state, payload) {
    if (payload.res.httpStatusCode === 200) {
      state.itemDetail = payload.res.topiclist
    }
  },

  [ADD_ITEMNUM] (state, payload) {
    state.itemNum += payload.num
  },

  [REMBER_ANSWER] (state, payload) {
    state.answerid[state.itemNum] = payload.id
  },

  [REMBER_TIME] (state) {
    state.timer = setInterval(() => {
      state.allTime++
    }, 1000)
  },

  [INITIALIZE_DATA] (state) {
    state.itemNum = 1
    state.allTime = 0
  }
}
