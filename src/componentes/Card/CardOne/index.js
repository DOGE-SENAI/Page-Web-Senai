import React from 'react';
import './style.css';

function CardOne() {
    return(
        <div className="card">
            <div className="img-card"></div>
            <div className="text-card">
                <h3>Auto Cad 2D</h3>
                <p><span className="text-bold">Carga Horária:</span> 48 Horas</p>
                <p><span className="text-bold">Área:</span> Tecnologia da Informação</p>
                <p><span className="text-bold">Valor:</span> R$59,99</p>
            </div>
        </div>
    )
}

export default CardOne;