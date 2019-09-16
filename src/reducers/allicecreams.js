import { combineReducers } from 'redux'
import { GET_ALL_ICECREAMS, ADD_TO_POPULAR } from '../constants/ActionTypes'

const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_POPULAR:
      return {
        ...state
      }
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_ICECREAMS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_ICECREAMS:
      return action.products.map(product => product.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getProduct = (state, id) =>
  state.byId[id]

export const getVisibleIcecreams = state =>
  state.visibleIds.map(id => getProduct(state, id))
