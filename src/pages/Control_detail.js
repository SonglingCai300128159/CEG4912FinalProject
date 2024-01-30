import React from 'react';
import ic_bed from '../components/Assets/icon-bed.png'
import ic_curtain from '../components/Assets/icons-curtain.png'
import '../pages/Control_detail.css'
import Switch from '../pages/switch'
import {  Link } from 'react-router-dom'
import ic_home from '../components/Assets/icon-house.png'
import first_floor from '../components/Assets/first_floor.jpg'
import ic_light from '../components/Assets/icons-light-50.png'
import Button from '../pages/Button'
import icon_arm from '../components/Assets/icon-arm-50.png'
import icon_up_left from '../components/Assets/icons-up-left-corner-48.png'
import icon_up_right from '../components/Assets/icons-up-right-corner-48.png'
import icon_down_left from '../components/Assets/icons-down-left-corner-48.png'
import icon_down_right from '../components/Assets/icons-down-right-corner-48.png'
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
                <Switch serialNumber={6}/>
              </div>
              <div className='logo_name'><h3>Curtain 1</h3></div>
          </div>
          <div id='indoor_btn'>
              <div className='logo_btn'>
                <div>
                  <img src={ic_curtain} alt=''></img>
                </div>
                <Switch serialNumber={7}/>
              </div>
              <div className='logo_name'><h3>Curtain 2</h3></div>
          </div>
          <div id='indoor_btn'>
              <div className='logo_btn'>
                <div>
                  <img src={ic_bed} alt=''></img>
                </div>
                <Switch serialNumber={8}/>
              </div>
              <div className='logo_name'><h3>Bed</h3></div>
          </div>
        </section>
        <section className='LED'>
          <div id='indoor_btn'>
            <div className='logo_btn'>
              <div>
                <img src={ic_light} alt=''></img>
              </div>
                <Switch serialNumber={0}/>
            </div>
            <div className='logo_name'><h3>Light 1</h3></div>
          </div>
          <div id='indoor_btn'>
            <div className='logo_btn'>
              <div>
                <img src={ic_light} alt=''></img>
              </div>
                <Switch serialNumber={1}/>
            </div>
            <div className='logo_name'><h3>Light 2</h3></div>
          </div>
          <div id='indoor_btn'>
            <div className='logo_btn'>
              <div>
                <img src={ic_light} alt=''></img>
              </div>
                <Switch serialNumber={2}/>
            </div>
            <div className='logo_name'><h3>Light 3</h3></div>
          </div>
          <div id='indoor_btn'>
            <div className='logo_btn'>
              <div>
                <img src={ic_light} alt=''></img>
              </div>
                <Switch serialNumber={3}/>
            </div>
            <div className='logo_name'><h3>Light 4</h3></div>
          </div>
          <div id='indoor_btn'>
            <div className='logo_btn'>
              <div>
                <img src={ic_light} alt=''></img>
              </div>
                <Switch serialNumber={4}/>
            </div>
            <div className='logo_name'><h3>Light 5</h3></div>
          </div>
          <div id='indoor_btn'>
            <div className='logo_btn'>
              <div>
                <img src={ic_light} alt=''></img>
              </div>
                <Switch serialNumber={5}/>
            </div>
            <div className='logo_name'><h3>Light 6</h3></div>
          </div>
        </section>
        <section id='arm'>
          <div id='arm1'>
            <div id='indoor_btn'>
              <div className='logo_btn'>
                <div>
                  <img src={icon_arm} alt=''></img>
                  <img src={icon_up_left}></img>
                </div>
                  <Button>Up</Button>
                  <Button>Down</Button>
              </div>
              <div className='logo_name'><h3>Suspension 1</h3></div>
            </div>
          </div>
          <div id='arm2'>
            <div id='indoor_btn'>
              <div className='logo_btn'>
                <div>
                  <img src={icon_arm} alt=''></img>
                  <img src={icon_up_right}></img>
                </div>
                <Button>Up</Button>
                <Button>Down</Button>
              </div>
              <div className='logo_name'><h3>Suspension 2</h3></div>
            </div>
          </div>
          <div id='arm3'>
            <div id='indoor_btn'>
              <div className='logo_btn'>
                <div>
                  <img src={icon_arm} alt=''></img>
                  <img src={icon_down_left}></img>
                </div>
                <Button>Up</Button>
                <Button>Down</Button>
              </div>
              <div className='logo_name'><h3>Suspension 3</h3></div>
            </div>
          </div>
          <div id='arm4'>
            <div id='indoor_btn'>
              <div className='logo_btn'>
                <div>
                  <img src={icon_arm} alt=''></img>
                  <img src={icon_down_right}></img>
                </div>
                <Button>Up</Button>
                <Button>Down</Button>
              </div>
              <div className='logo_name'><h3>Suspension 4</h3></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Control_detail
