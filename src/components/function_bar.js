/*function FUNCTION_BAR() {
    return (
        <div>
            <ul>
                <li>function here</li>
                <li>function here</li>
                <li>function here</li>
                <li>function here</li>
                <li>function here</li>
                <li>function here</li>
                <li>function here</li>
                <li>function here</li>
                <li>function here</li>
                <li>function here</li>
                <li>function here</li>
                <li>function here</li>
            </ul>
        </div>
    );
};

export default FUNCTION_BAR;*/


import React from 'react'
import {  Link } from 'react-router-dom'
import { function_BarData } from './Function_BarData';
/*
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import Battery_detail from '../pages/Battery_detail';
import Water_detail from '../pages/Battery_detail';
import Enviroment_detail from '../pages/Enviroment_detail';
import Camera_detail from '../pages/Camera_detail';
*/  
function FUNCTION_BAR() {
  return (
      
      <nav>
        <div className='functionmenuitem'>
        {function_BarData.map((item,index)=>{
            return(<ul className='divider'>
              <div key ={index} className={item.className} >
                <Link to= {item.path} className='link'>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </div></ul>
            )
          })}
          
        </div>
      </nav>
      
      
  )
}

export default FUNCTION_BAR
