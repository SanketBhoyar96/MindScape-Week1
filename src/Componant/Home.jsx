// import axios from 'axios';
import React from 'react'
import Header from './Header'
import Body from './Body'

import './Styles.css'
// -----------------------React Router---------------------------

  import {useNavigate } from 'react-router-dom'   
import HomeBanner from './HomeBanner'
import ProGallary from './ProGallary'
import Footer from './Footer'

const Home = () => {
  const router=useNavigate();
  return (
    <div id='home'>
      <Header/>
      <Body/>
      <HomeBanner/>
      <ProGallary/>
      <Footer/>
    </div>
  )
}
export default Home;















