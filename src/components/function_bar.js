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
import { BrowserRouter, Link } from 'react-router-dom'

import { function_BarData } from './Function_BarData';

function FUNCTION_BAR() {
  return (
    
    <>
      <BrowserRouter>
      <nav >
        <ul className='function-menu-item'>
          
          {function_BarData.map((item,index)=>{
            return(
              <li key ={index} className={'item.cName'}>
                <Link to= {item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      </BrowserRouter>
      
    </>
  )
}

export default FUNCTION_BAR
