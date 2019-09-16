import React from 'react'
import Icecream from './Icecream'

const IcecreamItem = ({ icecream, onAddToPopularClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <Icecream brand={icecream.brand} rating={icecream.rating}/>
    <button onClick={onAddToPopularClicked}>
      Like it!
    </button>
  </div>
)

export default IcecreamItem
