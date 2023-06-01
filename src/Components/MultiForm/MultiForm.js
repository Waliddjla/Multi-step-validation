import React, {useState} from 'react'
import './MultiForm.css'
import Indicator from './Indicator/Indicator'

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
    </div>
  )
}

