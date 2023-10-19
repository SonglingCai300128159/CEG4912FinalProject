import CircularProgressBarBattery from './CircularProgressBarBattery';
import { useState } from 'react';
function BATTERY_MAIN() {
    const [percentage, setPercentage] = useState(30);
    return (
        <div>
            <h2>battery</h2>
            <CircularProgressBarBattery percentage={percentage} circleWidth="200" />
            <div>
            <input 
              type="range"
              min="0"
              max="100" 
              step="1" value={percentage} onChange={(ev)=>setPercentage(ev.target.value)}/>
              </div>
        </div>
    );
};

export default BATTERY_MAIN;