import React from 'react'
import ic_home from '../components/Assets/icon-house.png'
import {  Link } from 'react-router-dom'
function CAMERA_DETAIL() {
  return (
    <div className='page_layout'>
      <div className='page_header'>
        <div className='homebtn'>
          <Link to='/' className='link'><img src={ic_home} alt="house_logo"></img></Link>
        </div>
        <div className='title'><h1>Camera</h1></div>
      </div>
      <div className='cam_content'></div>
    </div>
  )
}

export default CAMERA_DETAIL
