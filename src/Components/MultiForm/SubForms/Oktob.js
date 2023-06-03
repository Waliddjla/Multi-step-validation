import React, { useState } from "react";
import "./SubForm.css";

export default function Oktob(props) {

    const [formData, setformData] = useState({
        prefs: {
            love:"",
            hate:""
        }
      });

  const preventFunc = (e) => {
    e.preventDefault()
  };
  const handleTextarea = (e, pref) => {
    if (pref=== "love"){
        setformData({
            prefs: {

                ...formData.prefs,
                love: e.target.value  
            }
        })
    }
    else if (pref === "hate") {
        setformData({
            prefs: {
                ...formData.prefs,
                hate: e.target.value
            }
        })
        
    }
  }

  const handelReturn = () => {
    props.modifyIndex(4)
  };
  return (
    <form className="preferences-form" onSubmit={preventFunc}>
      <p>Parle-nous des aliments que tu préfères et que tu détestes !</p>

      <label htmlFor="prefered">
        Tes aliments préférés, séparés par virgule :
      </label>
      <textarea onChange={e=> handleTextarea(e, 'love')}
      id="prefered" placeholder="un ou plusieurs, si tu an en as" />
      <label htmlFor="hated">
        Tes aliments détestés, séparés par virgule :
      </label>
      <textarea onChange={e=> handleTextarea(e, 'hate')}
      id="hated" placeholder="un ou plusieurs, si tu an en as" />

      <div className="container-nav-btns">
        <button onClick={handelReturn} type="button" className="prev">
          Précédent
        </button>
        <button onClick={() => props.modifyIndex(6, formData)}
        >Valider</button>
      </div>
    </form>
  );
}
