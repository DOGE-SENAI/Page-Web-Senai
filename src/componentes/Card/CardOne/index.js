import React from 'react';
import autocad from '../autocad.png';
import './style.css';

function CardOne() {
    return(
        <div className="card">
            <img src={autocad} alt="Curso de Auto Cad 2d" />
            <h3>Auto Cad 2D</h3>
            <p>Duração: 48 Horas</p>
            <p>Valor: </p>
        </div>
    )
}

export default CardOne;