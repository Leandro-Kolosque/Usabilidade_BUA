import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa os estilos do Bootstrap
import CardList from './CardList'; // Importa o componente CardList

ReactDOM.render( // Renderiza o componente CardList dentro do elemento com o ID 'root'
  <CardList />, // Componente CardList
  document.getElementById('root') // Elemento onde o componente será renderizado
);
