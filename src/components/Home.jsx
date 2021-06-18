import React from 'react';
import icon from '../assets/img/icon.png'
import bi_palette from '../assets/img/bi_palette.png'

import "./Home.css"
const Home = () => {
    return (
        <main className="content-home" id="home">
            <div className="div-content col-lg-3 col-sm-1 col-5">
                <img alt="icon" src={icon}></img>
                <div className="div-name">
                    <h1>AquilaArts</h1>
                    <img alt="icon-bi-pattern" src={bi_palette}></img>
                </div>
                <h2>Illustrador 2D</h2>
            </div>
        </main>
        
    );
}

export default Home;
