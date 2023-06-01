import React from 'react'
import './Indicator.css'
import healthy from './icons/healthy.svg'
import love from './icons/love.svg'
import diet from './icons/diet.svg'
import thumb from './icons/thumb.svg'
import allergy from './icons/allergy.svg'


export default function Indicator() {
  return (
    <div className='container-indicator'> 
      <div className="lines">
        <div className="line upper-line"></div>
        <div className=" line under-line"></div>
        <div className="container-img">
          <div className="bloc-img">
            <img src={healthy} alt="image" />
            </div>
            <div className="bloc-img">
            <img src={love} alt="image" />
              </div>
            <div className="bloc-img">
            <img src={allergy} alt="image" />
            </div>
            <div className="bloc-img">
            <img src={diet} alt="image" />
            </div>
            <div className="bloc-img">
            <img src={thumb} alt="image" />
            </div>
        </div>
      </div>



    </div>
  )
}
