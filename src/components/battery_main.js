import CircularProgressBarBattery from './CircularProgressBarBattery';
import React, { useState, useEffect } from 'react';
import { useData } from './DataContext';
import '../components/battery_main.css'
const BATTERY_MAIN = () => {
  const {batteryPercentage,fetchData} = useData();
  
  return (
    <div id='batterycmp'>
      <h2 className='BWTitle'>Battery</h2>
      <CircularProgressBarBattery batteryPercentage={batteryPercentage} circleWidth="200" />
    </div>
  );
};

export default BATTERY_MAIN;
