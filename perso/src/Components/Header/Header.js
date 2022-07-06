import React,{useState} from 'react';
import ScrollService from './ScrollService/ScrollService';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesoneIcon} from '@fortawesome/react-fontawesome';
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
  let currentScreenSubscription =ScrollService.currenScreenBroadCaster.subscribe(updateCurrentScreen);
  return (
    <div className='header-container'>

    </div>
  )
}
