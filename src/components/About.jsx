import React from 'react';
import "./About.css"
import Sign from './Sign'
import Skills from './Skills'
import undraw from '../assets/img/undraw.png'
const About = () => {
    return (
        <main className="content-about " id="sobre">
            <div className="container">
                <div className="row">
                    <div className="div-about col-lg-6 col-sm-15">
                        <div>
                            <Sign title="Sobre Mim"></Sign>
                            <p>Ola, sou o Aquila, tenho 18 e atualmente sou um ilustrador 2D com foco em desenhos cartonizados,faço principalmente capas para albuns, retratos para pessoas ou visualizers para musicas,tenho conhecimento em photoshop, paint too sai e firealpaca para fazer meus desenhos.</p>
                        </div>
                        <div>
                            <Skills></Skills>
                            <Skills.Paint></Skills.Paint>
                            <Skills.Photoshop></Skills.Photoshop>
                        </div>
                    </div>
                    <div className="div-contact col-lg-6 col-sm-15">
                        <div>
                            <Sign title="Contato"></Sign>
                            <p><i class="fa fa-envelope" aria-hidden="true"></i>Email:aquilaafas.fernando@gmail.com <br></br><i className="fa fa-instagram"></i>
                            Instagram: @aquilaartz</p>
                        </div>
                        <div>
                            <img className="undraw" src={undraw}></img>
                        </div>
                    </div>
                </div>
            </div>
           
        </main>
    );
}

export default About;
