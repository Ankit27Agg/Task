import React from 'react'
import './PriceTag.css'

const PriceTag = () => {
  return (
    <React.Fragment>
      <div className='price'>
        <div className='new-price'>₹899</div>
        <div className='old-price'>₹1299</div>
      </div>
    </React.Fragment>
  )
}

export default PriceTag
