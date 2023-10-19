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
    
    <>
      
      <nav >
        <ul className='function-menu-item'>
          
          {function_BarData.map((item,index)=>{
            return(
              <li key ={index} className={item.cName}>
                <Link to= {item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      
      
    </>
  )
}

export default FUNCTION_BAR
