import React from 'react';
import eletronica from '../eletronica.png';
import './style.css';

function CardThree() {
    return(
        <div className="card">
            <img src={eletronica} alt="Curso de Excel Avançado" />
            <h3>Excel Avançado</h3>
            <p>Duração: 40 Horas</p>
            <p>Valor: </p>
        </div>
    )
}

export default CardThree;