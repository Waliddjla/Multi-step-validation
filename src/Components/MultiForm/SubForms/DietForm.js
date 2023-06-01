import React, {useState} from 'react'
import './SubForm.css'

export default function DietForm(props) {
    const handleRadio = () => {
        
    }

    const preventFunc = e => e.preventDefault();
  return (
    <form onSubmit={preventFunc}
    className='diet-form'>
    <p>Quelle est ton regime alimentaire ?</p>
    <label htmlFor="nodiet"> Pas de régime en particulier</label>
    <input onChange={handleRadio}
    type="radio"
    name='diet'
    id='nodiet'
    value='nodiet'/>

    <label htmlFor="homenivorous"> Homenivore</label>
    <input onChange={handleRadio}
    type="radio"
    name='diet'
    id='homenivorous'
    value='homenivorous'/>

    <label htmlFor="vegetarian">Végétarien</label>
    <input onChange={handleRadio}
    type="radio"
    name='diet'
    id='vegetarian'
    value='vegetarian'/>

    <label htmlFor="vegan">Vegan</label>
    <input onChange={handleRadio}
    type="radio"
    name='diet'
    id='vegan'
    value='vegan'/>
    <button onClick={() => props.modifyIndex(3)}>Valider</button>
    </form>
    
  )
}
