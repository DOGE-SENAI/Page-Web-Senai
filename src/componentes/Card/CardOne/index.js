import React from 'react';
import './style.css';

function CardOne() {
    return(
        <div className="card">
            <div className="img-card1"></div>

            <div className="text-card">
                <h3>Auto Cad 2D</h3>
                <p><b>Duração:</b> 48 Horas</p>
                <p><b>Área:</b> Tecnologia da Informação</p>
                <p><b>Valor:</b> <i>Consultar Preço na Unidade</i></p>
            </div>
            <p className="link"><a href="https://suicobrasileira.sp.senai.br/curso/54575/115/auto-cad-2d" target="_blank" rel="noreferrer">Ver detalhes...</a></p>

        </div>
    )
}

export default CardOne;