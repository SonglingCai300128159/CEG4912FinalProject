import React, { useState, useEffect } from 'react';
import './ENVIRONMENT_MAIN.css';
import { useData } from './DataContext';
import cam_icon from './Assets/icons8-camera-64.png'
import ic_warning from './Assets/icons8-danger-96.png'
import Switch from '../pages/switch';

const detect_main = () => {
    return(
        
        <div className='container_cam'>
                <div id='monitor_title'>
                    <h3>Surveillance</h3>
                </div>
                <div id='monitor_content'>
                    <img src={cam_icon} alt='' className='icon' />
                    <Switch />
                </div>
                <div id='warning'>
                    <img src={ic_warning} id='img_warning'></img>
                    <h3>Detect: Human</h3>
                </div>

            <div className='vehicle'>

            </div>
        </div>
            
    )
}

export default detect_main;