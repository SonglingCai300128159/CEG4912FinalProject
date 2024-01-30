import ic_home from '../components/Assets/icon-house.png'
import {  Link } from 'react-router-dom'
import React,{useRef, useEffect, useState} from 'react';
import "./camera_detail.css"
function CAMERA_DETAIL() {
  const videoRef =useRef(null);
  
  const getVideo =()=>{
    navigator.mediaDevices.getUserMedia({video:{width:640, height:480}})
    .then(stream=>{
      let video = videoRef.current;
      video.srcObject=stream;
      video.play();
    })
    .catch(err=>{
      console.error(err);
    })
  }
  useEffect(()=>{
    getVideo();
  },[videoRef])
  return (
    <div className='page_layout'>
      <div className='page_header'>
        <div className='homebtn'>
          <Link to='/' className='link'><img src={ic_home} alt="house_logo"></img></Link>
        </div>
        <div className='title'><h1>Camera</h1></div>
      </div>
      <div className='cam_content'>
        <div className='video_content'>
          <video ref={videoRef}></video>
        </div>
      </div>
      
    </div>
  )
}

export default CAMERA_DETAIL
