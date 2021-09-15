import React from 'react';
import autocad from './autocad.png';
import eletronica from './eletronica.png';
import excel from './excel.png'
import './style.css';

function Card() {
    return(
        <section className="card-container">

            <div className="card">
                <img src={autocad} alt="Curso de Auto Cad 2d" />
                <h3>Auto Cad 2D</h3>
                <p>Duração: 48 Horas</p>
                <p>Valor: </p>
            </div>

            <div className="card">
                <img src={excel} alt="Curso de Excel Avançado" />
                <h3>Excel Avançado</h3>
                <p>Duração: 40 Horas</p>
                <p>Valor: </p>
            </div>

            <div className="card">
                <img src={eletronica} alt="Curso de Auxiliar de Eletrônica" />
                <h3>Auxiliar de Eletrônica</h3>
                <p>Duração: 80 Horas</p>
                <p>Valor: </p>
            </div>

        </section>
    );
}

export default Card;