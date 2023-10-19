import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";

export const function_BarData =[
    {
        title: 'Fans',
        path: '/fans',
        icon: <FaIcons.FaFan/>,
        className:'nav-text',
    },
    {
        title: 'Water-tank',
        path: '/water-tank',
        icon: <GiIcons.GiWaterDrop/>,
        className:'nav-text',
    },
    {
        title: 'Battery',
        path: '/battery',
        icon: <BiIcons.BiSolidBatteryLow/>,
        className:'nav-text',
    },
    {
        title: 'Camera',
        path: '/camera',
        icon: <AiIcons.AiFillVideoCamera/>,
        className:'nav-text',
    },
    /*
    
    {
        title: 'Home',
        path: '/',
        /*icon: <AiIcons.AiFillVideoCamera/>,
        className:'nav-text',
    }*/

]