import React from 'react'
import ic_home from '../components/Assets/icon-house.png'
import {  Link } from 'react-router-dom'
import img_info from '../components/Assets/information.png'

function Info_DETAIL() {
  return (
    <div className='page_layout'>
      <div className='page_header'>
        <div className='homebtn'>
          <Link to='/' className='link'><img src={ic_home} alt="house_logo"></img></Link>
        </div>
        <div className='title'><h1>User Guide</h1></div>
      </div>
      <div className='info_content'>
        <img src={img_info} id='info_content'></img>
      </div>
    </div>
  )
}

export default Info_DETAIL
