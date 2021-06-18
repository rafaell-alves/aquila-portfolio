import React from 'react';
import './MyGalery.css'
import Sign from './Sign'
import Picture from './Picture'
import art1 from '../assets/img/na onda.png'

import art2 from '../assets/img/alien.jpeg'

import art3 from '../assets/img/xama.jpeg'

import art4 from '../assets/img/onepiece.jpeg'

import art5 from '../assets/img/duzz.jpeg'


import art6 from '../assets/img/personal.png'

const MyGalery = () => {
    return (
        <main  className="content-gallery " id="galeria">
            <div className="container">
                <div className="div-contact col-lg-12 col-sm-15">
                    <Sign title="Minha Galeria"></Sign>
                </div>
            </div>
            <div className="container containe-pictures">
                <div className="row div-pictures  row-cols-md-4 row-cols-xl-4 row-cols-lg-2">
                    <Picture alt={'Cover Art "na onda"'} src={art1} name='Cover Art "na onda"'></Picture>
                        <Picture alt={"Participação em concurso"} src={art2} name="Participação em concurso"></Picture>
                        <Picture alt={"Xamã Fanart"}  src={art3} name="Xamã Fanart"></Picture>
                 
                        <Picture alt={"One Piece Fanart"}  src={art4} name="One Piece Fanart"></Picture>
                        <Picture alt={"Duzz valorant fanart"}  src={art5} name="Duzz valorant fanart"></Picture>
                        <Picture alt={"Personal Chatacter"}  src={art6} name="Personal Chatacter"></Picture>
                    
                        
                   
                </div>
            </div>
           
        </main>
    );
}

export default MyGalery;
