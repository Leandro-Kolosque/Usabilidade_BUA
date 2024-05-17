import React from "react";
import Input from "./Input";
import './style.css';

function App(){
  return(
    <div className="container">
      <form>
        <h2>Tela de Login</h2>
        <Input type="text" label="Usuário"  id="username" name="username"/> 
        <Input type="password" label="Senha" id="password" name="password"/> 
        <Input type="submit" value="Login"/>

      </form>
    </div>

  );
}

export default App;