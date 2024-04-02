import React, { useEffect, useState } from 'react';
import '../pages/Enviroment_detail.css';

const Flowrate = ({ powerLevel, onPowerLevelChange }) => {
    const [currentPowerLevel, setCurrentPowerLevel] = useState(powerLevel);

    useEffect(() => {setCurrentPowerLevel(powerLevel);}, [powerLevel]);

    const handleValueChange = async (newValue) => {
        try {
            // GET the current state from the server
            const getResponse = await fetch(`http://localhost:5000/api/fan_power`);
            const getData = await getResponse.json();

            // Update local state with fetched value
            setCurrentPowerLevel(getData.fanpwm);

            // POST the new power level to the server
            const postResponse = await fetch(`http://localhost:5000/api/fan_power/${newValue}`, {
                method: 'POST',
            });
            const postData = await postResponse.json();

            // Update PowerLevel prop with the new value
            onPowerLevelChange(postData.fanpwm);
        } catch (error) {
            console.error('Error fetching or posting power:', error);
        }
    };

    return (
        <>
            <input
                type="range"
                orient="horizontal"
                min="0"
                max="100"
                step="1"
                value={currentPowerLevel}
                onChange={(ev) => {
                    const newValue = ev.target.value;
                    setCurrentPowerLevel(newValue); // Update local state immediately
                    handleValueChange(newValue); // Fetch and post new value
                }}
            />
            <div> {currentPowerLevel} % Power </div>
        </>
    );
};

export default Flowrate;
