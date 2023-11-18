import React, { useState, useEffect } from 'react';
import './ENVIRONMENT_MAIN.css';
import tem_icon from './Assets/icons8-temperature-48.png';
import humidity_icon from './Assets/icons8-humidity-50.png';
import air_icon from './Assets/icons8-air-50.png';
import { useData } from './DataContext';
const ENVIRONMENT_MAIN = () => {
    const { temperatureData, humidityData, co2Data, pm25Data } = useData();

    return(
        
            <div className='container'>
                <div className='temperature'>
                    <div>
                        <img src={tem_icon} alt='' className='icon' />
                        <div className='temperature_data'>
                            <div className='text'>Temp: </div>
                            <div className='data'>{temperatureData}</div>
                        </div>
                    </div>
                </div>
                <div className='humidity'>
                    <div>
                        <img src={humidity_icon} alt='' className='icon'/>
                        <div className='humidity_data'>
                            <div className='text'>Humidity: </div>
                            <div className='data'>{humidityData}</div>
                        </div>
                    </div>
                </div>
                <div className='air_condition'>
                    <div>
                        <img src={air_icon} alt='' className='icon' />
                        <div className='CO2_data'>
                            <div className='text'>CO2: </div>
                            <div className='data'>{co2Data}</div>
                        </div>
                        <div className='PM25_data'>
                            <div className='text'>PM2.5: </div>
                            <div className='data'>{pm25Data}</div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default ENVIRONMENT_MAIN;