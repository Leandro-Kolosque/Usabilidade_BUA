import React from 'react';

const Image1 = ({texto}) => {
  return (
    <img src="bird1.jpg" alt="Imagem 1" className="img-fluid" >
    {texto}
    </img>
  );
}

export default Image1