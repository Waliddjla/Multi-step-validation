import React, {useState} from 'react'
import './MultiForm.css'
import Indicator from './Indicator/Indicator'
import CardBegin from './Infos/CardBegin'
import CardEnd from './Infos/CardEnd'

export default function MultiForm() {


    const [formIndex, setfomIndex] = useState(1)
    const [allFormData, setallFormData] = useState({
        dietForm:"",
        foodStyle: [],
        allergies: [],
        prefs: {}

    })
  return (
    <div className='container-multiform '>
      <Indicator />
      <CardBegin/>
      
    </div>
  )
}

