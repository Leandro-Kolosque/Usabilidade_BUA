import React from 'react';

function Button(props) {
  return (
    <input type={props.type} value={props.value} />
  );
}

export default Button;
