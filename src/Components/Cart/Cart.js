import React from 'react'
import './Cart.css'
import cartLogo from '../../Images/cart.png'

const Cart = () => {
  return (
    <React.Fragment>
      <div className='cart'>
        <img src={cartLogo} alt='' className='cart-img'/>
        <div className='cart-content'>ADD TO CART</div>
      </div>
    </React.Fragment>
  )
}

export default Cart
