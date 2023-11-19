import React from 'react'
import './Enviroment_detail.css'
//import FUNCTION_BAR from '../components/FUNCTION_BAR'
import ic_home from '../components/Assets/icon-house.png'
import {  Link } from 'react-router-dom'
function ENVIRONMENT_DETAIL() {
  return (
    <div className='page_layout'>
      <div className='page_header'>
        <div className='homebtn'>
          <Link to='/' className='link'><img src={ic_home} alt="house_logo"></img></Link>
        </div>
        <div className='title'><h1>Environment</h1></div>
      </div>
      <div className='env_content'></div>
    </div>
    
  )
}

export default ENVIRONMENT_DETAIL
