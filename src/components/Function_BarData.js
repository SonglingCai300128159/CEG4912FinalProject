import React from 'react';
import'./Function_BarData.css';
//import styled from 'styled-components';
import fan_ic from "./Assets/im_fan_100.png";
//import water_ic from "./Assets/im_water.png";
import camera_ic from "./Assets/im_camera.png";
//import battery_ic from "./Assets/im_battery.png";
import control_ic from "./Assets/icons-control-50.png"
import ic_info from '../components/Assets/icon-info-50.png'

export const function_BarData =[
    {
        title: '',
        path: '/air',
        icon: <div className='ic'><img src={fan_ic} alt='' className='icon' /><div className='btnname'>Environment</div></div>,
        className:'navtext',
        TextColor:'white',
        
    },
    /*
    {
        title: '',
        path: '/water-tank',
        icon: <div className='ic'><img src={water_ic} alt='' className='icon' /><div className='btnname'>Water</div></div>,
        className:'navtext',
    },
    */
    {
        title: '',
        path: '/control',
        icon: 
            <div className='ic'>
                <img src={control_ic} alt='' className='icon' />
                <div className='btnname'>Control</div>
            </div>,
        className:'navtext',
    },
    {
        title: '',
        path: '/camera',
        icon: <div className='ic'><img src={camera_ic} alt='' className='icon' /><div className='btnname'>Camera</div></div>,
        className:'navtext',
    },
    {
        title: '',
        path: '/info',
        icon: 
            <div className='ic'>
                <img src={ic_info} alt='' className='icon' />
                <div className='btnname'>User Guide</div>
            </div>,
        className:'navtext',
    },
    /*
    
    {
        title: 'Home',
        path: '/',
        /*icon: <AiIcons.AiFillVideoCamera/>,
        className:'nav-text',
    }*/

]