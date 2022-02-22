import React from 'react'
import './Information.css'
import arrow from '../../Images/arrow.png'
import { FaStar } from "react-icons/fa";
import {FaStarHalfAlt} from "react-icons/fa";

const Information = () => {
  return (
    <React.Fragment>
        <p className='heading'>
          Everyday rinse and reload
        </p>
        <p className='content'>
          Achieve your dream skin goal with this complete package of skincare produts that will rejuvenate your day.
        </p>
        <div className='extra-info'>

          <div className='star-rating'>
            <div className='star-outer'>
              <FaStar className='star-inner'/>
              <FaStar className='star-inner'/>
              <FaStar className='star-inner'/>
              <FaStar className='star-inner'/>
              <FaStarHalfAlt className='star-inner'/>
            </div>
        
          </div>

          <div className='number-rating'>4.5</div>

          <div className='reviews'>
            {/* <div> */}
              Click to read reviews
            {/* </div> */}
            <img src={arrow} alt=''/>
          </div>
          
        </div>
    </React.Fragment>
  )
}

export default Information
