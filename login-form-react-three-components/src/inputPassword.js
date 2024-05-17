import React from "react";
import './style.css';

function InputPassword(props){
return(
<div>

  <label htmlFor={props.id}>{props.label}</label>
  <input type={props.type} id={props.id} name={props.name} required/>
</div>

);


}
export default InputPassword;