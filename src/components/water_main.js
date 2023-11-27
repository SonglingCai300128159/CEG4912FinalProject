import CircularProgressBarWater from './CircularProgressBarWater';
import { useState } from 'react';
import React from 'react';
import'./watermain.css';
import { useData } from './DataContext';
const WATER_MAIN = () =>{
    //const [percentage, setPercentage] = useState(35);
    //const [filled, setFilled]= useState(35);
    const { BlackwaterPercentage,CleanwaterPercentage,GreywaterPercentage } = useData();
    return (
        <div>
            <p>water here</p>
            <div className="progressbarwater">
                <div style={{
                    height: '100%',
                    width: `${CleanwaterPercentage}%`,
                    backgroundColor: '#008cff',
                    
                }}></div>
                <span className='progressfont'>CleanWater {CleanwaterPercentage}%</span>
            </div>
            
        </div>
    );

    
};

export default WATER_MAIN;