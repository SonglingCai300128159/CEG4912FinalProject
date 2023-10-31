import CircularProgressBarWater from './CircularProgressBarWater';
import { useState } from 'react';
function WATER_MAIN() {
    const [percentage, setPercentage] = useState(35);
    return (
        <div>
            <h2>Water Tank</h2>
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