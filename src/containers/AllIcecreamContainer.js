import React from 'react'
import { connect } from 'react-redux'
import { addToPopular } from '../actions'
import { getVisibleIcecreams } from '../reducers/allicecreams'
import IcecreamItem from '../components/IcecreamItem'
import IcecreamList from '../components/IcecreamList'

const AllIcecreamContainer = ({ icecreams, addToPopular }) => (
  
  <IcecreamList title="All icecreams brands in india">
    {icecreams.map(icecream =>
      <IcecreamItem
        key={icecream.id}
        icecream={icecream}
        onAddToPopularClicked={() => addToPopular(icecream.id)} />
    )}
  </IcecreamList>  
)


const mapStateToProps = function(state){
 console.log("all icecreams", state);
 return { icecreams: getVisibleIcecreams(state.products)}
}

export default connect(
  mapStateToProps,
  { addToPopular }
)(AllIcecreamContainer)
