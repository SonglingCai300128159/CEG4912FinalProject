import React from 'react'

const CircularProgressBarWater = ({waterPercentage, circleWidth}) => {
const radius = 85;
const dashArray= radius* Math.PI * 2;
const dashOffset= dashArray-(dashArray*waterPercentage) /100;

  return (
    <div>
        <svg 
            width={circleWidth} 
            height={circleWidth} 
            viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
        <circle cx={circleWidth / 2}cy={circleWidth/2} 
        strokeWidth="15px" r={radius} className='circleBackendWater'></circle>
        <circle cx={circleWidth / 2}cy={circleWidth/2} 
        strokeWidth="15px" r={radius} className='circleMonitorWater'
        style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
        }}
        transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
        >
        </circle>
        <text x="50%" y="50%" dy= "0.3em" textAnchor='middle' className='WaterText'>{waterPercentage}%</text> 



        </svg>
    </div>
  )
}

export default CircularProgressBarWater