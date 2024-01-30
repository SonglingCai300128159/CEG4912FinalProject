import React, { useState, useEffect } from 'react';
import './ENVIRONMENT_MAIN.css';
import tem_icon from './Assets/icons-temperature-48.png';
import humidity_icon from './Assets/icons-humidity-50.png';
import air_icon from './Assets/icons8-air-50.png';
import { useData } from './DataContext';

const ENVIRONMENT_MAIN = () => {
    const { temperatureData, humidityData, pm10Data, pm25Data } = useData();

    return(
        
            <div className='container'>
                <div className='env'>
                    <div className='temperature'>
                        <img src={tem_icon} alt='' className='icon' />
                        <div className='temperature_data'>
                            <div className='text'>Temp: </div>
                            <div className='data'>{temperatureData}</div>
                        </div>
                    </div>
                    <div className='humidity'>
                        <img src={humidity_icon} alt='' className='icon'/>
                        <div className='humidity_data'>
                            <div className='text'>Humidity: </div>
                            <div className='data'>{humidityData}</div>
                        </div>
                    </div>
                    <div className='air_condition'>
                        <img src={air_icon} alt='' className='icon' />
                        <div className='PM10_data'>
                            <div className='text'>PM10: </div>
                            <div className='data'>{pm10Data}</div>
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