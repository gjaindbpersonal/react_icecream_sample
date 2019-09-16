import React from 'react'
import { connect } from 'react-redux'
import { getPopularIcecreams } from '../reducers'
import PopularIcecreamList from '../components/PopularIcecreamList'

const PopularIcecreamContainer = ({ popularIcecreams }) => (
  <PopularIcecreamList popularIcecreams={popularIcecreams}/>
)


const mapStateToProps = function(state) {
  console.log("Popular icecream state", state)
  return {
    popularIcecreams: getPopularIcecreams(state)
  }
}

export default connect(mapStateToProps)(PopularIcecreamContainer)
