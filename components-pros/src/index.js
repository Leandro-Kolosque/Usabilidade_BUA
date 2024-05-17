import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button1 from './Button1';
import Button2 from './Button2';
import Button3 from './Button3';
import Image1 from './Image1';
import Image2 from './Image2';
import Image3 from './Image3';



// Componente principal que renderiza os outros componentes
const App = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Exemplo com Bootstrap e React</h1>
      <div className="row">

      <div className="col-md-4">
          <Button1 texto="Button 1" />
        </div>
        
        <div className="col-md-4">
          <Button2 texto="Button 2" />
        </div>

        <div className="col-md-4">
          <Button3 texto="Button 3" />
        </div>
        
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <Image1 />
          
        </div>
        <div className="col-md-4">
          <Image2 />
        </div>
        <div className="col-md-4">
          <Image3 />
    </div>
    </div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
