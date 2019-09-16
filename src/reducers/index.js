import { combineReducers } from 'redux'
import popularicecreams, * as fromPopular from './popularicecreams'
import products, * as fromAllIcecreams from './allicecreams'

export default combineReducers({
  popularicecreams,
  products
})

const getAddedIds = state => fromPopular.getAddedIds(state.popularicecreams)
const getIcecream = (state, id) => fromAllIcecreams.getProduct(state.products, id)



export const getPopularIcecreams = state =>
getAddedIds(state).map(id => ({
  ...getIcecream(state, id)
}))



