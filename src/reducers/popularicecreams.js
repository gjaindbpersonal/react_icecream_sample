import {
  ADD_TO_POPULAR,
} from '../constants/ActionTypes'

const initialState = {
  addedIds: []
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_POPULAR:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]
    default:
      return state
  }
}

export const getAddedIds = state => state.addedIds

const popularicecreams = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        addedIds: addedIds(state.addedIds, action)
      }
  }
}

export default popularicecreams
