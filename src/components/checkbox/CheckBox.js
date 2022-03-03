import React from "react";
import "../../styles/checkbox.css";

const CheckBox = (props) => {
  return (
        <div className="checkbox">
          <input className="bg-black " type="checkbox" id={props.id}  {...props}/>
          <label htmlFor={props.id} className=" before:bg-black after:bg-black"></label>
        </div>
  );
};

export default CheckBox;
