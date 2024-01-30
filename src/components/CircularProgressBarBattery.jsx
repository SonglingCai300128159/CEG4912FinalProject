import React from 'react'

const CircularProgressBarBattery = ({batteryPercentage, circleWidth}) => {
const radius = 85;
const dashArray= radius* Math.PI * 2;
const dashOffset= dashArray-(dashArray*batteryPercentage) /100;

  return (
    <div>
        <svg 
          width={circleWidth} 
          height={circleWidth} 
          viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
        <circle cx={circleWidth / 2}cy={circleWidth/2} 
        strokeWidth="15px" r={radius} className='circleBackendBattery'></circle>
        <circle cx={circleWidth / 2}cy={circleWidth/2} 
        strokeWidth="15px" r={radius} className='circleMonitorBattery'
        style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
        }}
        transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
        >
        </circle>
        <text x="50%" y="50%" dy= "0.3em" textAnchor='middle' className='BatteryText' fill='white'>{batteryPercentage}%</text> 



        </svg>
    </div>
  )
}

export default CircularProgressBarBattery