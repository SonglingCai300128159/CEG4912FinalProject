import React from 'react';
import ic_bed from '../components/Assets/icon-bed.png'
import ic_curtain from '../components/Assets/icons-curtain.png'
import '../pages/Control_detail.css'
import Switch from '../pages/switch'
import {  Link } from 'react-router-dom'
import ic_home from '../components/Assets/icon-house.png'
import first_floor from '../components/Assets/first_floor.jpg'
const Control_detail = () => {
  
  return (
    <div className='page_layout'>
      <div className='page_header'>
        <div className='homebtn'>
          <Link to='/' className='link'><img src={ic_home} alt="house_logo"></img></Link>
        </div>
        <div className='title'><h1>Indoor Control</h1></div>
      </div>
      
      <div className='control_content'>
        <section className='furniture'>
          <div id='indoor_btn'>
              <div className='logo_btn'>
                <div>
                  <img src={ic_curtain} alt=''></img>
                </div>
                <Switch />
              </div>
              <div className='logo_name'><h3>Curtain</h3></div>
          </div>
          <div id='indoor_btn'>
              <div className='logo_btn'>
                <div>
                  <img src={ic_curtain} alt=''></img>
                </div>
                <Switch />
              </div>
              <div className='logo_name'><h3>Curtain</h3></div>
          </div>
          <div id='indoor_btn'>
              <div className='logo_btn'>
                <div>
                  <img src={ic_bed} alt=''></img>
                </div>
                <Switch />
              </div>
              <div className='logo_name'><h3>Bed</h3></div>
          </div>
        </section>
        <section className='LED'>
        <div id='indoor_btn'>
              <div className='logo_btn'>
                <div>
                  <img src={ic_curtain} alt=''></img>
                </div>
                <Switch />
              </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Control_detail
