import React from 'react';

function InputPassword({ label, id, name, type }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} required />
    </div>
  );
}

export default InputPassword;
