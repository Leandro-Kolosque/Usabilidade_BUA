import React from 'react';
import Card from './Card'; // Importe o componente Card

const CardList = () => {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Custom cards</h2> {/* Título dos cards */}
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5"> {/* Divisão da linha e definição de quantas colunas em diferentes tamanhos de tela */}
        <Card
          image="unsplash-photo-1.jpg" // Imagem do primeiro card
          title="Short title, long jacket" // Título do primeiro card
          location="Earth" // Localização do primeiro card
          time="3d" // Tempo do primeiro card
        />
        <Card
          image="unsplash-photo-2.jpg" // Imagem do segundo card
          title="Much longer title that wraps to multiple lines" // Título do segundo card
          location="Pakistan" // Localização do segundo card
          time="4d" // Tempo do segundo card
        />
        <Card
          image="unsplash-photo-3.jpg" // Imagem do terceiro card
          title="Another longer title belongs here" // Título do terceiro card
          location="California" // Localização do terceiro card
          time="5d" // Tempo do terceiro card
        />
      </div>
    </div>
  );
}

export default CardList;
