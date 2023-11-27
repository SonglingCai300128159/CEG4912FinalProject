import CircularProgressBarWater from './CircularProgressBarWater';
import { useState } from 'react';
import React from 'react';
import'./watermain.css';
import { useData } from './DataContext';
const WATER_MAIN = () =>{
    //const [percentage, setPercentage] = useState(35);
    //const [filled, setFilled]= useState(35);
    const { BlackwaterPercentage,CleanwaterPercentage,GreywaterPercentage } = useData(50);
    return (
      <div id='watercmp'>
       
       <h2 className='BWTitle'>Water System</h2>
        <div id='watercontent'>
            <div class="watercircle" style={{
            background: `linear-gradient(#84adc8 ${100-CleanwaterPercentage}%, #1f3b6e ${100-CleanwaterPercentage+10}%)`,
            }}>
            <p class="circle-text">{CleanwaterPercentage}%</p>
            </div>
            <div class="watercircle" style={{
            background: `linear-gradient(#84adc8 ${100-GreywaterPercentage}%, #1f3b6e ${100-GreywaterPercentage+10}%)`,
            }}>
            <p class="circle-text">{GreywaterPercentage}%</p>
            </div>
            <div class="watercircle" style={{
            background: `linear-gradient(#84adc8 ${100-BlackwaterPercentage}%, #1f3b6e ${100-BlackwaterPercentage+10}%)`,
            }}>
            <p class="circle-text">{BlackwaterPercentage}%</p>
            </div>
        </div>
        
      </div>
    );

    
};

export default WATER_MAIN;