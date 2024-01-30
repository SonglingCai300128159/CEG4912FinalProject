import { useState } from 'react';
import React from 'react';
import'./watermain.css';
import { useData } from './DataContext';
const WATER_MAIN2 = () =>{
    //const [percentage, setPercentage] = useState(35);
    //const [filled, setFilled]= useState(35);
    const { CleanwaterPercentage } = useData(50);
    return (
      <div id='watercmp'>
       
       <h3 className='BWTitle'>Clean Water</h3>
        <div id='watercontent'>
            <div class="watercircle" style={{
            background: `linear-gradient(#84adc8 ${100-CleanwaterPercentage}%, #1f3b6e ${100-CleanwaterPercentage+10}%)`,
            }}>
            <p class="circle-text">{CleanwaterPercentage}%</p>
            </div>
        </div>
        
      </div>
    );

    
};

export default WATER_MAIN2;