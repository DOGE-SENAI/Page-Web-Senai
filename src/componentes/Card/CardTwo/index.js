import React from 'react';
import './style.css';

function CardTwo() {
    return(
        <div className="card">
            <div className="img-card2"></div>

            <div className="text-card">
                <h3>Auxiliar de Eletrônica</h3>
                <p><b>Duração:</b> 40 Horas</p>
                <p><b>Área:</b> Eletrônica</p>
                <p><b>Valor:</b> <i>Consultar Preço na Unidade</i> </p>
            </div>

            <p className="link"><a href="https://suicobrasileira.sp.senai.br/curso/54929/115/auxiliar-de-eletronica" target="_blank" rel="noreferrer">Ver detalhes...</a></p>
        </div>
    )
}

export default CardTwo;