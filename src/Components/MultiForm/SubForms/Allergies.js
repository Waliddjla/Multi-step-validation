import React, { useRef} from "react";
import "./SubForm.css";

export default function Allergies(props) {
  const preventFunc = (e) => {
    e.preventDefault();

    const styleData = {
        allergies: []
    }
    allChechBoxes.current.forEach(checkbox => {
        if (checkbox.checked) {
            styleData.allergies.push(checkbox.value)
        
        }
    })
    props.modifyIndex(5,styleData);
  };

  const allChechBoxes = useRef([])
  const addCheck = el => {
    if (el && !allChechBoxes.current.includes(el)) {
        allChechBoxes.current.push(el);
    }
  }


  const handelReturn = () => {
    props.modifyIndex(3)
  }

  return (
    <form className="checkbox-form" onSubmit={preventFunc}>
      <p>Quelles sont tes Allergies ? </p>
      <span>Choix Multiples.</span>
      <label htmlFor="milk">Lait</label>
      <input ref={addCheck} type="checkbox" id="milk" value="milk" />

      <label htmlFor="pollen">Pollen</label>
      <input ref={addCheck} type="checkbox" id="pollen" value="pollen" />

      <label htmlFor="noix">Noix</label>
      <input ref={addCheck} type="checkbox" id="noix" value="noix" />

      <label htmlFor="oeuf">Oeufs</label>
      <input ref={addCheck} type="checkbox" id="oeuf" value="oeuf" />

      <label htmlFor="fruitmere">Fruit De mer</label>
      <input ref={addCheck} type="checkbox" id="fruitmere" value="fruitmere" />

      <label htmlFor="gluten">Gluten</label>
      <input ref={addCheck} type="checkbox" id="gluten" value="gluten" />

      <div className="container-nav-btns">
      <button onClick={handelReturn} type="button" className="prev">Précédent</button>
      <button>Valider</button>
        
      </div>
    </form>
  );
}
