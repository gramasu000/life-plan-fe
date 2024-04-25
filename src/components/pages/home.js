import React from 'react'
import Navbar from './navbar.js'
import '../css/home.css'
import GridIndex from '../grid-index.jsx'
import CalendarView from '../sandbox/calendar-view.jsx'

import  { useState } from 'react'


function Home ({fName, lName, home, agent}){

  
  return (
  <div className='home'>
    <Navbar/>
    <div>this is the home page</div>
    <GridIndex />
    <div><hr></hr></div>
    <div><CalendarView /></div>
    <hr></hr>
    
  </div>
  )
}
export default Home