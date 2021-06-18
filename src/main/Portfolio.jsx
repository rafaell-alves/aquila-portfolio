import React from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Home from '../components/Home'
import About from '../components/About'
import MyGalery from '../components/MyGalery'
const Portfolio = () => {
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <About></About>
            <MyGalery></MyGalery>
            
        </div>
    );
}

export default Portfolio;
