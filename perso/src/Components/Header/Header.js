import React,{useState} from 'react';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import FontAwesoneIcon from '@fortawesome/react-fontawesome';
import '../styles/Header.css';
import Home from '../Home/Home';

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
    <div className='header-container'>
        <div className="header-option" onClik={() => setShowHeaderOptions(!showHeaderOptions)}>
            <div className="header-parent">
              <div className="head-hamburger" onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                 
              </div>

              <div className="header-logo">
                <span>IDC</span>
              </div>
              <div className={(showHeaderOptions)? "header-options show-hamburger-options":"header-option"}>
                  {getHeaderOptions}
              </div>
            </div>
        </div>
    </div>
  )
}
