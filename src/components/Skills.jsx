import React from 'react';
import './Skills.css'
import alpaca from '../assets/img/image 1.png'

import paint from '../assets/img/image 2.png'

import photoshop from '../assets/img/image 3.png'
import circle from '../assets/img/Ellipse 93.png'

import half from '../assets/img/Ellipse 96.png'


const Skills = () => {
    return (
        <div className="skill-div container">
            
            <div className="row">
                
                <img className="col-sm-3 col-3" alt="alpaca" src={alpaca}></img>
             
                <div className="col-10 col-sm-6 row skills">
                <h4 >Nivel de conhecimento:</h4>
                    <img className="dot" alt="skills" src={circle}></img>
                    
                    <img className="dot" alt="skills" src={circle}></img>
                    
                    <img className="dot" alt="skills" src={circle}></img>
                    
                    
                    <img className="half-dot" alt="skills-half" src={half}></img>
                </div>
            </div>
            
        </div>
    );
}



const Paint = () => {
    return (
        <div className="skill-div container">
            
            <div className="row">
                
                <img className="col-sm-3 col-3" alt="paint" src={paint}></img>
             
                <div className="col-10 col-sm-6 row skills">
                <h4 >Nivel de conhecimento:</h4>
                    <img className="dot" alt="skills" src={circle}></img>
                    
                    <img className="dot" alt="skills" src={circle}></img>
                    
                    <img className="dot" alt="skills" src={circle}></img>
                    
                                        
                    <img className="dot" alt="skills" src={circle}></img>
                    
                                        
                    <img className="dot" alt="skills" src={circle}></img>
                    
                    
                </div>
            </div>
            
        </div>
    );
}



const Photoshop = () => {
    return (
        <div className="skill-div container">
            
            <div className="row">
                
                <img className="col-sm-3 col-3" alt="photoshop" src={photoshop}></img>
             
                <div className="col-10 col-sm-6 row skills">
                <h4 >Nivel de conhecimento:</h4>
                    <img className="dot" alt="skills" src={circle}></img>
                    
                    <img className="dot" alt="skills" src={circle}></img>
                    
                    <img className="dot" alt="skills" src={circle}></img>
                    
                                        
                    <img className="dot" alt="skills" src={circle}></img>
                    
                                        
                    <img className="dot" alt="skills" src={circle}></img>
                    
                    
                </div>
            </div>
            
        </div>
    );
}
Skills.Paint = Paint;
Skills.Photoshop = Photoshop;


export default Skills;
