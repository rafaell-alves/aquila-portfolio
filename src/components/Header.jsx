import "./Header.css"
import logo from '../assets/img/Logo.png'

import React, { Component } from 'react'

export default class Header extends Component {
	
	

    constructor(props) {
		super(props);
		this.showToggleNav = this.showToggleNav.bind(this);
		this.changeBackground = this.changeBackground.bind(this);
		this.state = {
			 navBar:false,
			 isActive: false
		};
	 }
  

	   showToggleNav() {
			if(this.state.isActive == false){
			this.setState({ isActive: true });
			}else{
				this.setState({ isActive: false });
			}
		}

		changeBackground(){
			if(window.scrollY >= 40){
				this.setState({navBar:true});
			}else{
				this.setState({navBar:false});
			}
		}
		
		componentDidMount(){
			window.addEventListener('scroll',this.changeBackground);
		}
		
    render() {
        return (
            <nav className={this.state.navBar == true ?"navbar active" : "navbar"}>
					<div className="div-logo">
						<img className="logo"src={logo}></img>

					</div>
				
					<div className="nav-default">
					<ul className="nav">
						<li><a href="#home">Home</a></li>
						<li><a href="#sobre">Sobre</a></li>
						<li><a href="#galeria">Galeria</a></li>
					</ul>
					</div>
					<div className="hamburguer-menu">
						<i className={this.state.isActive == true ? "fa fa-times" : "fa fa-bars"} isActive={this.state.isActive}  onClick={this.showToggleNav} aria-hidden="true"></i>
					</div>				
					<ul className={ this.state.isActive == true ? "nav-responsive" : "hidden"} >
							<li><a href="#home">Home</a></li>
							<li><a href="#sobre">Sobre</a></li>
							<li><a href="#galeria">Galeria</a></li>
					</ul>
					
            
         </nav>
        )
    }
}