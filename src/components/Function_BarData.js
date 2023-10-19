import React from 'react';
import'./Function_BarData.css';
/*import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import { Button } from 'react-bootstrap';
import fan_icon from "./Assets/icons8-cold-96.png";*/
import styled from 'styled-components';
import fan_ic from "./Assets/im_fan_100.png";
import water_ic from "./Assets/im_water.png";
import camera_ic from "./Assets/im_camera.png";
import battery_ic from "./Assets/im_battery.png";
const Buttons = styled.button`
  background-color: rgba(255, 250, 250, 0.2);
  border-style: solid;
  color: white;
  font-size: 15px;
  padding: 10px 60px;
  border-radius: 40px;
  border-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const function_BarData =[
    {
        title: '',
        path: '/fans',
        icon: <Buttons><img src={fan_ic} alt='' className='icon' /><div>Fan</div></Buttons>,
        className:'navtext',
        TextColor:'white',

    },
    {
        title: '',
        path: '/water-tank',
        icon: <Buttons><img src={water_ic} alt='' className='icon' /><div>Water</div></Buttons>,
        className:'navtext',
    },
    {
        title: '',
        path: '/battery',
        icon: <Buttons><img src={battery_ic} alt='' className='icon' /><div>Battery</div></Buttons>,
        className:'navtext',
    },
    {
        title: '',
        path: '/camera',
        icon: <Buttons><img src={camera_ic} alt='' className='icon' /><div>Camera</div></Buttons>,
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