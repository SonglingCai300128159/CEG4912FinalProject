import React from 'react';
import'./Function_BarData.css';
import styled from 'styled-components';
import fan_ic from "./Assets/im_fan_100.png";
import water_ic from "./Assets/im_water.png";
import camera_ic from "./Assets/im_camera.png";
import battery_ic from "./Assets/im_battery.png";

export const function_BarData =[
    {
        title: '',
        path: '/fans',
        icon: <div className='ic'><img src={fan_ic} alt='' className='icon' /><div>Fan</div></div>,
        className:'navtext',
        TextColor:'white',
        
    },
    {
        title: '',
        path: '/water-tank',
        icon: <div className='ic'><img src={water_ic} alt='' className='icon' /><div>Water</div></div>,
        className:'navtext',
    },
    {
        title: '',
        path: '/battery',
        icon: <div className='ic'><img src={battery_ic} alt='' className='icon' /><div>Battery</div></div>,
        className:'navtext',
    },
    {
        title: '',
        path: '/camera',
        icon: <div className='ic'><img src={camera_ic} alt='' className='icon' /><div>Camera</div></div>,
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