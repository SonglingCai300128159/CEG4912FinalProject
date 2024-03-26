import CircularProgressBarBattery from './CircularProgressBarBattery';
import React, { useState, useEffect } from 'react';
import { useData } from './DataContext';
import '../components/battery_main.css'
const BATTERY_MAIN = () => {
  const {batteryPercentage,fetchData,batteryvoltage,batterycurrent} = useData();
  const bPercentage = Math.ceil((batteryvoltage-10.5)/2.1*100);
  const timeleft =(7.2*bPercentage/100)/(batterycurrent)
  return (
    <div id='batterycmp'>
      <h3 className='BWTitle'>Battery Status</h3>
      <CircularProgressBarBattery batteryPercentage={bPercentage} circleWidth="200"  />
      <h5>Lasts {timeleft} hours</h5>
    </div>
  );
};

export default BATTERY_MAIN;
