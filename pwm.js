import React, { useState, useEffect } from 'react';
import '../pages/Enviroment_detail.css';

const Flowrate = ({ PowerLevel }) => {
    const [Power, setPower] = useState(0);

    useEffect(() => {
        const fetchInitialStatus = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/fan_power/${PowerLevel}`);
                const data = await response.json();
                setPower(data.fanpwm);
            } catch (error) {
                console.error('Error fetching initial light status:', error);
            }
        };

        fetchInitialStatus();
    }, [PowerLevel]);

    const handleValue = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/fan_power/${PowerLevel}`, {
                method: 'POST',
            });
            const data = await response.json();
            setPower(data.fanpwm);
        } catch (error) {
            console.error('Error fectching power:', error);
        }
    };

    return (
        <>
        <input
            type="range"
            orient="horizontal"
            min="0"
            max="100"
            step="1" value={Power}
            onChange={(ev) => {
                setPower(ev.target.value);
                handleValue(ev);
            }}
        />
        
        <div> {Power} % Power</div>
        </>
    );
};

export default Flowrate;
