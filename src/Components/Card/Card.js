import React from 'react'
import './Card.css'
import {FaStar} from "react-icons/fa";
import tick from '../../Images/tick.png'

const Card = (props) => {
  if(props.popular === 'yes'){
    return (
      <React.Fragment>
        <div className='popular-card'>
          <div className='header-tag'>
            <FaStar className='img1'/>
            <p className='text'>
            MOST POPULAR
            </p>
            <FaStar className='img2'/>
          </div>
          <div  className='card-heading'>{props.months} Months Pack ({props.tubes} tubes)</div>
          <p className='card-new-price'>₹{props.newprice}</p>
          <p className='saving'>Savings: ₹{props.oldprice - props.newprice}</p>
          <p className='card-old-price'>₹{props.oldprice}</p>
          <div className='bottom-tag'>
            <p className='saving-tag'>{props.saving}% Saved</p>
            <p className='result-tag'>Best Results</p>
          </div>
        </div>
      </React.Fragment>
    )
  }
  else{
    return(
      <React.Fragment>
        <div className='card'>
        <div className='card-heading'>{props.months} Months Pack ({props.tubes} tubes)</div>
        <p className='card-new-price'>₹{props.newprice}</p>
          <p className='saving' style={{color:'rgba(40, 51, 61, 1)'}}>Savings: ₹{props.oldprice - props.newprice}</p>
          <p className='card-old-price' style={{color:'rgba(40, 51, 61, 1)'}}>₹{props.oldprice}</p>
          <div className='bottom-tag'>
            <p className='saving-tag'>{props.saving}% Saved</p>
          </div>
        </div>
        {/* <div className='abc'></div> */}
        <img src={tick} className='abc'/>
        {/* <img src={tick} /> */}
      </React.Fragment>
    )
  }
}

export default Card
