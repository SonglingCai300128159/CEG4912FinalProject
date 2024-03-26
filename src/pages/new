import React, { useState, useEffect } from 'react';
import '../pages/Switch.css';

const Switch = ({ serialNumber }) => {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    const fetchInitialStatus = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/light-status/${serialNumber}`);
        const data = await response.json();
        setIsOn(data.light_status);
      } catch (error) {
        console.error('Error fetching initial light status:', error);
      }
    };

    fetchInitialStatus();
  }, [serialNumber]);

  const handleToggle = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/toggle-light/${serialNumber}`, {
        method: 'POST',
      });
      const data = await response.json();
      setIsOn(data.light_status);
    } catch (error) {
      console.error('Error toggling light:', error);
    }
  };

  return (
    <div className={`switch-container ${isOn ? 'on' : 'off'}`} onClick={handleToggle}>
      <div className={`switch-slider ${isOn ? 'on' : 'off'}`}></div>
    </div>
  );
};

export default Switch;
