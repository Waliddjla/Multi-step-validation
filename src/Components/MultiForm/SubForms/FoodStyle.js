import React, { useRef } from "react";
import "./SubForm.css";

export default function FoodStyle(props) {
  const preventFunc = (e) => {
    e.preventDefault();
  };
  const handelReturn = () => {
    props.modifyIndex(2)
  }

  return (
    <form className="checkbox-form" onSubmit={preventFunc}>
      <p>Quelles sont tes cuisines préférées ? </p>
      <span>Choix Multiples.</span>
      <label htmlFor="algerienne">Algerienne</label>
      <input type="checkbox" id="algerienne" value="algerienne" />

      <label htmlFor="italien">Italienne</label>
      <input type="checkbox" id="italien" value="italien" />

      <label htmlFor="indien">Indienne</label>
      <input type="checkbox" id="indien" value="indien" />

      <label htmlFor="chinoi">Chinoise</label>
      <input type="checkbox" id="chinoi" value="chinoi" />

      <label htmlFor="france">Francaise</label>
      <input type="checkbox" id="france" value="france" />

      <label htmlFor="mexicain">Mexicaine</label>
      <input type="checkbox" id="mexicain" value="mexicain" />

      <div className="container-nav-btns">
      <button onClick={handelReturn} type="button" className="prev">Précédent</button>
      <button>Valider</button>
        
      </div>
    </form>
  );
}
