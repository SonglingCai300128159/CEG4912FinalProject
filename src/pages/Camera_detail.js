import ic_home from '../components/Assets/icon-house.png';
import { Link } from 'react-router-dom';
import React, { useRef, useEffect } from 'react';
import './camera_detail.css';

const CAMERA_DETAIL = () => {


  return (
    <div className='page_layout'>
      <div className='page_header'>
        <div className='homebtn'>
          <Link to='/' className='link'>
            <img src={ic_home} alt='house_logo' />
          </Link>
        </div>
        <div className='title'>
          <h1>Camera</h1>
        </div>
      </div>
      <div className='cam_content'>
        <div className='video_content'>
          <img src='http://localhost:5000/api/camera_feed'></img>
        </div>
        <div className='log'>
          <h3>Detect history</h3>
          <div>history log text</div>
        </div>
      </div>
    </div>
  );
};

export default CAMERA_DETAIL;
