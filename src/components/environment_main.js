import React, { useState, useEffect } from 'react';
import  './ENVIRONMENT_MAIN.css'
import tem_icon from './Assets/icons8-temperature-48.png'
import humidity_icon from './Assets/icons8-humidity-50.png'
import air_icon from './Assets/icons8-air-50.png'
const ENVIRONMENT_MAIN =()=>{
    const [temperatureData, setTemperatureData] = useState(null);
    const [humidityData, setHumidityData] = useState(null);
    const [co2Data, setCO2Data] = useState(null);
    const [pm25Data, setPM25Data] = useState(null);

    useEffect(() => {
    // 发起HTTP GET请求以获取温度数据
    fetch('http://your-temperature-sensor-api-endpoint')
      .then((response) => response.json())
      .then((data) => setTemperatureData(data))
      .catch((error) => console.error('Error fetching temperature data:', error));
     // 空数组表示只在组件加载时执行一次

    // 发起HTTP GET请求以获取湿度数据
    fetch('http://your-humidity-sensor-api-endpoint')
      .then((response) => response.json())
      .then((data) => setHumidityData(data))
      .catch((error) => console.error('Error fetching humidity data:', error));

    // 发起HTTP GET请求以获取CO2数据
    fetch('http://your-co2-sensor-api-endpoint')
      .then((response) => response.json())
      .then((data) => setCO2Data(data))
      .catch((error) => console.error('Error fetching CO2 data:', error));

    // 发起HTTP GET请求以获取PM2.5数据
    fetch('http://your-pm25-sensor-api-endpoint')
      .then((response) => response.json())
      .then((data) => setPM25Data(data))
      .catch((error) => console.error('Error fetching PM2.5 data:', error));
  }, []); // 空数组表示只在组件加载时执行一次

    return(
        
            <div className='container'>
                <div className='temperature'>
                    <div>
                        <img src={tem_icon} alt='' className='icon' />
                        <div className='temperature_data'>
                            <div className='text'>Temp: </div>
                            <div className='data'>{temperatureData ? temperatureData.temp : 'Loading...'}</div>
                        </div>
                    </div>
                </div>
                <div className='humidity'>
                    <div>
                        <img src={humidity_icon} alt='' className='icon'/>
                        <div className='humidity_data'>
                            <div className='text'>Humidity: </div>
                            <div className='data'>{humidityData ? humidityData.humidity : 'Loading...'}</div>
                        </div>
                    </div>
                </div>
                <div className='air_condition'>
                    <div>
                        <img src={air_icon} alt='' className='icon' />
                        <div className='CO2_data'>
                            <div className='text'>CO2: </div>
                            <div className='data'>{co2Data ? co2Data.co2 : 'Loading...'}</div>
                        </div>
                        <div className='PM25_data'>
                            <div className='text'>PM2.5: </div>
                            <div className='data'>{pm25Data ? pm25Data.pm25 : 'Loading...'}</div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default ENVIRONMENT_MAIN;