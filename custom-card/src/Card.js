import React from 'react';

const Card = ({ image, title, location, time }) => { // Componente Card que recebe propriedades de imagem, título, localização e tempo
  return (
    <div className="col"> {/* Coluna Bootstrap */}
      <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}> {/* Card com estilo de capa, imagem de fundo e sombra */}
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"> {/* Container flexível para o conteúdo */}
          <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{title}</h3> {/* Título do card */}
          <ul className="d-flex list-unstyled mt-auto"> {/* Lista não ordenada flexível */}
            <li className="me-auto"> {/* Item flexível alinhado à direita */}
              <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" /> {/* Imagem do Bootstrap */}
            </li>
            <li className="d-flex align-items-center me-3"> {/* Item flexível com alinhamento vertical */}
              <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg> {/* Ícone de localização */}
              <small>{location}</small> {/* Localização */}
            </li>
            <li className="d-flex align-items-center"> {/* Item flexível com alinhamento vertical */}
              <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3" /></svg> {/* Ícone de calendário */}
              <small>{time}</small> {/* Tempo */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
