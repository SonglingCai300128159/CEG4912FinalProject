import React from 'react';
import ic_bed from '../components/Assets/icon-bed.png'
import ic_curtain from '../components/Assets/icons-curtain.png'
import ic_curtain2 from '../components/Assets/icons-curtain-rev.png'
import '../pages/Control_detail.css'
import Switch from '../pages/switch'
import {  Link } from 'react-router-dom'
import ic_home from '../components/Assets/icon-house.png'
import Button from '../pages/Button'
import icon_arm from '../components/Assets/icon-arm-50.png'
import icon_up_left from '../components/Assets/icons-up-left-corner-48.png'
import icon_up_right from '../components/Assets/icons-up-right-corner-48.png'
import icon_down_left from '../components/Assets/icons-down-left-corner-48.png'
import icon_down_right from '../components/Assets/icons-down-right-corner-48.png'
import icon_bedroom from '../components/Assets/icons8-bedroom-100.png'
import ic_sofa from '../components/Assets/icons8-sofa-96.png'
import ic_bath from '../components/Assets/icons8-bathroom-100.png'
import ic_kitchen from '../components/Assets/icons8-kitchen-100.png'
import ic_box from '../components/Assets/icons8-box-100.png'
const Control_detail = () => {
  
  return (
    <div className='page_layout_c'>
      <div className='page_header'>
        <div className='homebtn'>
          <Link to='/' className='link'><img src={ic_home} alt="house_logo"></img></Link>
        </div>
        <div className='title'><h1>Indoor Control</h1></div>
      </div>
      
      <div className='control_content'>
        <section className='furniture'>
          <h3>Furniture control</h3>
          <div className='furniture_content'>
            <div id='indoor_btn'>
                <div className='logo_btn'>
                  <div>
                    <img src={ic_curtain2} alt=''></img>
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
          </div>
        </section>
        <section className='LED'>
          <h3>Light control</h3>
          <div className='LED_content'>
            <div id='indoor_btn'>
              <div className='logo_btn'>
                <div>
                  <img src={icon_bedroom} alt=''></img>
                </div>
                  <Switch serialNumber={0}/>
              </div>
              <div className='logo_name'><h3>Bedroom</h3></div>
            </div>
            <div id='indoor_btn'>
              <div className='logo_btn'>
                <div>
                  <img src={ic_sofa} alt=''></img>
                </div>
                  <Switch serialNumber={1}/>
              </div>
              <div className='logo_name'><h3>Living Room</h3></div>
            </div>
            <div id='indoor_btn'>
              <div className='logo_btn'>
                <div>
                  <img src={ic_bath} alt=''></img>
                </div>
                  <Switch serialNumber={2}/>
              </div>
              <div className='logo_name'><h3>Bathroom</h3></div>
            </div>
            <div id='indoor_btn'>
              <div className='logo_btn'>
                <div>
                  <img src={ic_kitchen} alt=''></img>
                </div>
                  <Switch serialNumber={3}/>
              </div>
              <div className='logo_name'><h3>Kitchen</h3></div>
            </div>
            <div id='indoor_btn'>
              <div className='logo_btn'>
                <div>
                  <img src={ic_box} alt=''></img>
                </div>
                  <Switch serialNumber={4}/>
              </div>
              <div className='logo_name'><h3>Storeroom 1</h3></div>
            </div>
            <div id='indoor_btn'>
              <div className='logo_btn'>
                <div>
                  <img src={ic_box} alt=''></img>
                </div>
                  <Switch serialNumber={5}/>
              </div>
              <div className='logo_name'><h3>Storeroom 2</h3></div>
            </div>
          </div>
        </section>
        <section id='arm'>
          <h3>Suspension control</h3>
          <div className='arm_content'>
            <div id='arm1'>
              <div id='indoor_btn2'>
                <div className='logo_btn'>
                  <div>
                    <img src={icon_arm} alt=''></img>
                    <img src={icon_up_left} alt=''></img>
                  </div>
                    <Button>Up</Button>
                    <Button>Down</Button>
                </div>
                <div className='logo_name'><h3>Suspension 1</h3></div>
              </div>
            </div>
            <div id='arm2'>
              <div id='indoor_btn2'>
                <div className='logo_btn'>
                  <div>
                    <img src={icon_arm} alt=''></img>
                    <img src={icon_up_right} alt=''></img>
                  </div>
                  <Button>Up</Button>
                  <Button>Down</Button>
                </div>
                <div className='logo_name'><h3>Suspension 2</h3></div>
              </div>
            </div>
            <div id='arm3'>
              <div id='indoor_btn2'>
                <div className='logo_btn'>
                  <div>
                    <img src={icon_arm} alt=''></img>
                    <img src={icon_down_left} alt=''></img>
                  </div>
                  <Button>Up</Button>
                  <Button>Down</Button>
                </div>
                <div className='logo_name'><h3>Suspension 3</h3></div>
              </div>
            </div>
            <div id='arm4'>
              <div id='indoor_btn2'>
                <div className='logo_btn'>
                  <div>
                    <img src={icon_arm} alt=''></img>
                    <img src={icon_down_right} alt=''></img>
                  </div>
                  <Button>Up</Button>
                  <Button>Down</Button>
                </div>
                <div className='logo_name'><h3>Suspension 4</h3></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Control_detail
