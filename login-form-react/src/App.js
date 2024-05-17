import React from 'react';
import './style.css';
import InputText from './InputText';
import InputPassword from './InputPassword';
import Button from './Button';

function App() {
  return (
    <div className="container">
      <form>
        <h2>Tela de Login</h2>
        <InputText type="text" label="Usuário:" id="username" name="username" />
        <InputPassword type="password" label="Senha:" id="password" name="password" />
        <Button type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
