import { useState } from 'react';
import React from 'react';
import'./watermain.css';
import { useData } from './DataContext';
const WATER_MAIN3 = () =>{
    //const [percentage, setPercentage] = useState(35);
    //const [filled, setFilled]= useState(35);
    const { GreywaterPercentage } = useData(50);
    return (
      <div id='watercmp'>
       
       <h3 className='BWTitle'>Grey Water</h3>
        <div id='watercontent'>
            <div class="watercircle" style={{
            background: `linear-gradient(#84adc8 ${100-GreywaterPercentage}%, #1f3b6e ${100-GreywaterPercentage+10}%)`,
            }}>
            <p class="circle-text">{GreywaterPercentage}%</p>
            </div>
        </div>
        
      </div>
    );

    
};

export default WATER_MAIN3;