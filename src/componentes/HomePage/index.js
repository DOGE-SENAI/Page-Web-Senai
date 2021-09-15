import React from 'react';
import CardOne from '../Card/CardOne';
import CardTwo from '../Card/CardTwo';
import CardThree from '../Card/CardThree';
import './style.css';

function HomePage() {
    return(
        <div className="home-page">
            <CardOne />
            <CardTwo />
            <CardThree />
        </div>
    );
}

export default HomePage;