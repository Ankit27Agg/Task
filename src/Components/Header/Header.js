import React from 'react'
import menuBar from '../../Images/menu-bar.png'
import cartLogo from '../../Images/cart.png'
import './Header.css'
const Header = () => {
  return (
    <React.Fragment>
      <div className='header'>
        <img src={menuBar} alt='' className='menu-bar'/>
        <img src={cartLogo} alt='' className='cart-logo'/>
      </div>
      <p className='line'></p>
    </React.Fragment>
  )
}

export default Header
