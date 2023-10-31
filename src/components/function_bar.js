
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
// function_bar.js
function FUNCTION_BAR() {
  return (
    <nav className='functionmenuitem'>
      <div className='flex-container'>
        {function_BarData.map((item, index) => {
          return (
            <div key={index} className={item.className}>
              <button className='custombtn'>
                <Link to={item.path} className='link'>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </button>
            </div>
          );
        })}
      </div>
    </nav>
  );
}


export default FUNCTION_BAR
