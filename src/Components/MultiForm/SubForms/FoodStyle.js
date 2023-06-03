import React, { useRef} from "react";
import "./SubForm.css";

export default function FoodStyle(props) {
  const preventFunc = (e) => {
    e.preventDefault();

    const styleData = {
        foodStyle: []
    }
    allChechBoxes.current.forEach(checkbox => {
        if (checkbox.checked) {
            styleData.foodStyle.push(checkbox.value)
        
        }
    })
    props.modifyIndex(4,styleData);
  };

  const allChechBoxes = useRef([])
  const addCheck = el => {
    if (el && !allChechBoxes.current.includes(el)) {
        allChechBoxes.current.push(el);
    }
  }


  const handelReturn = () => {
    props.modifyIndex(2)
  }

  return (
    <form className="checkbox-form" onSubmit={preventFunc}>
      <p>Quelles sont tes cuisines préférées ? </p>
      <span>Choix Multiples.</span>
      <label htmlFor="algerien">Algerienne</label>
      <input ref={addCheck} type="checkbox" id="algerien" value="algerien" />

      <label htmlFor="italien">Italienne</label>
      <input ref={addCheck} type="checkbox" id="italien" value="italien" />

      <label htmlFor="indien">Indienne</label>
      <input ref={addCheck} type="checkbox" id="indien" value="indien" />

      <label htmlFor="chinoi">Chinoise</label>
      <input ref={addCheck} type="checkbox" id="chinoi" value="chinoi" />

      <label htmlFor="france">Francaise</label>
      <input ref={addCheck} type="checkbox" id="france" value="france" />

      <label htmlFor="mexicain">Mexicaine</label>
      <input ref={addCheck} type="checkbox" id="mexicain" value="mexicain" />

      <div className="container-nav-btns">
      <button onClick={handelReturn} type="button" className="prev">Précédent</button>
      <button>Valider</button>
        
      </div>
    </form>
  );
}
