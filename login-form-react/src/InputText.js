import React from 'react';

function InputText({ label, id, name, type }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} required />
    </div>
  );
}

export default InputText;
