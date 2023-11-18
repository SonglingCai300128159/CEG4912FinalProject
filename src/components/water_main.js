import CircularProgressBarWater from './CircularProgressBarWater';
import React, { useContext, useEffect } from 'react';
import { useData } from './DataContext';

const WATER_MAIN = () => {
  const { waterPercentage } = useData();

  return (
    <div>
      <h2>Water Tank</h2>
      <CircularProgressBarWater waterPercentage={waterPercentage} circleWidth="200" />
      <CircularProgressBarWater waterPercentage={waterPercentage} circleWidth="200" />
      <CircularProgressBarWater waterPercentage={waterPercentage} circleWidth="200" />
    </div>
  );
};

export default WATER_MAIN;

