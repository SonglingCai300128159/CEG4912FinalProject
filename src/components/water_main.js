import CircularProgressBarWater from './CircularProgressBarWater';
import { useState } from 'react';
import React from 'react';
import'./watermain.css';
function WATER_MAIN() {
    const [percentage, setPercentage] = useState(35);
    const [filled, setFilled]= useState(35);
    return (
        <div>
            <p>water here</p>
            <div className="progressbarwater">
                <div style={{
                    height: '100%',
                    width: `${filled}%`,
                    backgroundColor: '#008cff',
                    
                }}></div>
                <span className='progressfont'>CleanWater {filled}%</span>
            </div>
            <CircularProgressBarWater percentage={percentage} circleWidth="200" />
            <input 
              type="range" 
              min="0" 
              max="100" 
              step="1" value={percentage} onChange={(ev)=>setPercentage(ev.target.value)} />
        </div>
    );

    
};

export default WATER_MAIN;