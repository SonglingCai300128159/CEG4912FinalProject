import React, { useState, useEffect }  from 'react'
import './Enviroment_detail.css'
//import FUNCTION_BAR from '../components/FUNCTION_BAR'
import ic_home from '../components/Assets/icon-house.png'
import {  Link } from 'react-router-dom'
import {useData} from '../components/DataContext'
import Thermometer from 'react-thermometer-component'
import "rsuite/dist/rsuite.min.css"
import air_icon from "../components/Assets/icons8-air-50.png"
import pm25_ic from '../components/Assets/pm25.png'
import pm10_ic from '../components/Assets/pm10.png'
import co2_ic from '../components/Assets/co2.png'
import { Progress } from 'rsuite'
import ic_fan_power from '../components/Assets/Fan_power.png'

const ENVIRONMENT_DETAIL = () => {
  const{temperatureData,humidityData,co2Data,pm25Data,pm10Data} = useData();
  const[percentage, setPercentage] = useState(20);
  return (
    <div className='page_layout'>
      <div className='page_header'>
        <div className='homebtn'><Link to='/' className='link'><img src={ic_home} alt="house_logo"></img></Link></div>
        <div className='title'><h1>Environment</h1></div>
      </div>
      <div className='env_content' >
        <div className='temperature_cmp'>
            <Thermometer 
            theme="dark" 
            value={temperatureData}
            max="50"
            steps="5"
            format="°C" 
            size="large"
            height="600"
            className="bigThermometer"/>
            <div className='temperature_data'>
                <h4 className='text'>Temp: </h4>
                <h4 className='data'>{temperatureData}°C</h4>
            </div>        
        </div>

        
        <div className='humidity_cmp' style={{height: 600}}>
            <Progress.Line vertical strokeWidth={40} percent={humidityData} status="active" style={{height:500}}/>
                            <div className='humidity_data'>
                                <h4 className='text'>Humidity: </h4>
                                <h4 className='data'>{humidityData}%</h4>
                            </div>
        </div>
        
                 
        <div className='air_cmp'>
            <div className='air_content'>
                <img src={pm10_ic} alt='' className='airicon' />
                <div className='air_display'>
                    <h3 className='text'>PM 10 : </h3>
                    <h3 className='data'>{pm10Data}</h3>
                </div>
                
            </div>
            <div className='air_content'>
                <img src={pm25_ic} alt='' className='airicon' />
                <div className='air_display'>
                    <h3 className='text'>PM 2.5 : </h3>
                    <h3 className='data'>{pm25Data}</h3>
                </div>
                
            </div>
            <div className='air_content'>
                <img src={co2_ic} alt='' className='airicon' />
                <div className='air_display'>
                    <h3 className='text'>CO2 : </h3>
                    <h3 className='data'>{co2Data}</h3>
                </div>
            </div>
        </div>
        <div id='setpower'>
            <img src={ic_fan_power} alt='' id='fanicon' />
            <div>
                
            </div>
            <input   
                type="range" 
                orient="vertical"
                min="0" 
                max="100" 
                step="1" value={percentage} onChange={(ev)=>setPercentage(ev.target.value)}
                
            />
                <div>{percentage}% Power</div>
        </div>
                   
      </div>
    </div>
  )
}

export default ENVIRONMENT_DETAIL
