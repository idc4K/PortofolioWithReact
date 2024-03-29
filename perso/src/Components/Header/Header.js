import React,{useState} from 'react';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import FontAwesoneIcon from '@fortawesome/react-fontawesome';

import '../styles/Header.css';
import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { Link,NavLink } from 'react-router-dom';
export default function Header() {
  // const [selectedScreen,setSelectedScreen] = useState(0)
  // const [showHeaderOptions,setShowHeaderOptions] = useState(false)

  // const updateCurrentScreen = (currentScreen)=>{
  //   if(currentScreen || !currentScreen.screenInView)
  //   return;
  //   let screenIndex = Home(currentScreen.screenInView);
  //   if(screenIndex<0)
  //   return;
  // }
 

  // const getHeaderOptions = ()=>{
  //   return(
  //     Home.map((screen,i)=>(
  //       <div key={screen.Home} className={getHeaderOptionsClass(i)}
  //        onClik={()=> switchScreen(i,screen)}>
  //         <span>{screen.Home}</span>
  //       </div>
  //     ))
  //   )
  // }

  // const getHeaderOptionsClass = (index)=>{
  //   let classes = "header-option";
  //   if(index<Home.length -1)
  //   classes +="header-option-separator";

  //   if(selectedScreen === index)
  //   classes += "selected-header-option"
  //   return;

  // }

  // const switchScreen = (index,screen)=>{
  //   let screenComponent = document.getElementById(screen.Home)
  //   if(!screenComponent) return;

  //   screenComponent.scrollIntoView({behavior: "smooth"})

  // }
  const Bounce = styled.div`animation:4s ${keyframes `${bounce}` } infinite`;
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor : "#011B29"}}>
      <Link className="navbar-brand d-lg-none text" to="/" style={{textDecoration: "none"}} id="style"><div style={{border: "1px solid #333333", width:"120px",heigth:"110px"}} className="logo"><p style={{marginTop:"10px",fontFamily:'Just Another Hand,cursive'}}>IDC4k</p></div></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbarToggler7"
        aria-controls="myNavbarToggler7" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="myNavbarToggler7">
        <ul className="navbar-nav mx-auto">
            <li className="nav-item">
                <NavLink className="nav-link text" to="/"><p>Présentation</p></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text" to="/formation"><p>Formation</p></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text" to="/competence"><p>Compétences</p></NavLink>
            </li>
            <Link className="d-none d-lg-block text" to="/" style={{textDecoration: "none"}} id="style"><Bounce><div style={{border: "1px solid #333333", width:"120px",heigth:"110px"}} className="logo"><p style={{marginTop:"10px",fontFamily:'Just Another Hand,cursive'}}>IDC4k</p></div></Bounce></Link>
            <li className="nav-item">
                <NavLink className="nav-link text" to="/experiences"><p>Expériences</p></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text" to="realisation"><p>Realisations</p></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text" to="/contact"><p>Contact</p></NavLink>
            </li>
        </ul>
    </div>
</nav>
  )
}
