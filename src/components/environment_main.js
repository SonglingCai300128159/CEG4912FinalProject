import React, { useState, useEffect } from 'react';
import './ENVIRONMENT_MAIN.css';
import tem_icon from './Assets/icons8-temperature-48.png';
import humidity_icon from './Assets/icons8-humidity-50.png';
import air_icon from './Assets/icons8-air-50.png';
import { useData } from './DataContext';
import cam_icon from './Assets/icons8-camera-64.png'
import ic_warning from './Assets/icons8-danger-96.png'
import Switch from '../pages/switch';

const ENVIRONMENT_MAIN = () => {
    const { temperatureData, humidityData, pm10Data, pm25Data } = useData();

    return(
        
            <div className='container'>
                <div className='env'>
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
                <div className='monitor'>
                    <div id='monitor_title'>
                        <img src={cam_icon} alt='' className='icon' />
                        <p>Surveillance System</p>
                    </div>
                    <div id='monitor_content'>
                        <Switch />
                    </div>
                    <div id='warning'>
                        <img src={ic_warning} id='img_warning'></img>
                        <h3>Detect: Human</h3>
                    </div>
                </div>
                <div className='vehicle'>

                </div>
            </div>
            
    )
}

export default ENVIRONMENT_MAIN;