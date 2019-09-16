import React from 'react'
import Icecream from './Icecream'

const PopularIcecreamList  = ({ popularIcecreams }) => {
  const haspopularIcecreams = popularIcecreams.length > 0
  const nodes = haspopularIcecreams ? (
    popularIcecreams.map(icecream =>
      <Icecream
        brand={icecream.brand}
        rating={icecream.rating}
      />
    )
  ) : (
    <em>Click on icecream brands you like, may be they become popular some day.</em>
  )

  return (
    <div>
      <h3>Most Popular icecreams in india</h3>
      <div>{nodes}</div>
    </div>
  )
}


export default PopularIcecreamList
