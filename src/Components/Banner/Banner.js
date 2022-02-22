import React from 'react'
import './Banner.css'
import leftBottle from '../../Images/leftBottle.png'
import rightBottle from '../../Images/rightBottle1.png'
import rightBottleBottom from '../../Images/rightBottle2.png'
const Banner = () => {
  return (
    <React.Fragment>
        <div className='rectangle'>
          <div className='shadow'></div>
          <div className='center-bottle'></div>
          <img src={leftBottle} alt='' className='left-bottle'/>
          <img src={rightBottle} alt='' className='right-bottle' />
          <img src={rightBottleBottom} alt='' className='right-bottle-bottom' />
        </div>
    </React.Fragment>
  )
}

export default Banner
