import React,{useState} from 'react';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import FontAwesoneIcon from '@fortawesome/react-fontawesome';
import '../styles/Header.css';
import Home from '../Home/Home';
import { Link } from 'react-router-dom';
export default function Header() {
  const [selectedScreen,setSelectedScreen] = useState(0)
  const [showHeaderOptions,setShowHeaderOptions] = useState(false)

  const updateCurrentScreen = (currentScreen)=>{
    if(currentScreen || !currentScreen.screenInView)
    return;
    let screenIndex = Home(currentScreen.screenInView);
    if(screenIndex<0)
    return;
  }
 

  const getHeaderOptions = ()=>{
    return(
      Home.map((screen,i)=>(
        <div key={screen.Home} className={getHeaderOptionsClass(i)}
         onClik={()=> switchScreen(i,screen)}>
          <span>{screen.Home}</span>
        </div>
      ))
    )
  }

  const getHeaderOptionsClass = (index)=>{
    let classes = "header-option";
    if(index<Home.length -1)
    classes +="header-option-separator";

    if(selectedScreen === index)
    classes += "selected-header-option"
    return;

  }

  const switchScreen = (index,screen)=>{
    let screenComponent = document.getElementById(screen.Home)
    if(!screenComponent) return;

    screenComponent.scrollIntoView({behavior: "smooth"})
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <Link class="navbar-brand" to="/">Navbar</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <Link class="nav-link" to="/">Présentation <span class="sr-only">(current)</span></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/formation">Formation</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/competences">Compétences</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/realisation">Réalisation</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
    </nav>
  )
}
