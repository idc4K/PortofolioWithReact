import React from 'react';
import '../styles/Home.css';
import Profile from './Profile';
import Footer from './Footer/Footer';
import Header from '../Header/Header';
export default function Home() {
  return (
    <div className='home-container'>
        <Header/>
        <Profile />
        <Footer/>
    </div>
  )
}
