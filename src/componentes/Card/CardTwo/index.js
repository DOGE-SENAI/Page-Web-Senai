import React from 'react';
import excel from '../excel.png';
import './style.css';

function CardTwo() {
    return(
        <div className="card">
            <img src={excel} alt="Curso de Excel Avançado" />
            <h3>Excel Avançado</h3>
            <p>Duração: 40 Horas</p>
            <p>Valor: </p>
        </div>
    )
}

export default CardTwo;