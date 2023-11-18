import CircularProgressBarBattery from './CircularProgressBarBattery';
import React, { useState, useEffect } from 'react';
import { useData } from './DataContext';
const BATTERY_MAIN = () => {
  const {batteryPercentage,fetchData} = useData();
  
  return (
    <div>
      <h2>Battery</h2>
      <CircularProgressBarBattery batteryPercentage={batteryPercentage} circleWidth="200" />
    </div>
  );
};

export default BATTERY_MAIN;
