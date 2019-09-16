import icecreamService from '../api/IcecreameApi'
import * as types from '../constants/ActionTypes'

const receiveIcecreams = products => ({
  type: types.GET_ALL_ICECREAMS,
  products
})

export const getAllIcecreams = () => dispatch => {
  icecreamService.getIcecreamBrands(products => {
    dispatch(receiveIcecreams(products))
  })
}

const addToPopularUnsafe = productId => ({
  type: types.ADD_TO_POPULAR,
  productId
})


export const addToPopular = productId => (dispatch, getState) => {
    dispatch(addToPopularUnsafe(productId))
}


