import React,{useState} from 'react';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import FontAwesoneIcon from '@fortawesome/react-fontawesome';

import '../styles/Header.css';

import { Link } from 'react-router-dom';
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
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor : "pink"}}>
      <Link className="navbar-brand d-lg-none" to="/">IDC4K</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbarToggler7"
        aria-controls="myNavbarToggler7" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="myNavbarToggler7">
        <ul className="navbar-nav mx-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/">Présentation</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/formation">Formation</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/competence">Compétences</Link>
            </li>
            <a className="d-none d-lg-block" to="/">IDC4k</a>
            <li className="nav-item">
                <Link className="nav-link" to="/experiences">Expériences</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="realisation">Realisations</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
            </li>
        </ul>
    </div>
</nav>
  )
}
