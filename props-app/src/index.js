import React from "react"
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";

const App = () =>{

  return(
    <div className ="container mt-4">
      <h1 className ="text-center mb-4">Exemplo com Boostratp e React</h1>
      <div className="row">
        <div className="col-md-4">
        <Button1 texto= "Primeiro Botão"/>
        </div>
     

        <div className="col-md-4">
        <Button2 texto= "Segundo Botão"/>
        </div>

        <div className="col-md-4">
        <Button3 texto= "Terceiro Botão"/>
        </div>
    
      </div>
      </div>


  );

}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
