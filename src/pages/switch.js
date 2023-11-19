import React, { useState } from 'react';
import '../pages/Switch.css'; 

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className={`switch-container ${isOn ? 'on' : 'off'}`} onClick={handleToggle}>
      <div className={`switch-slider ${isOn ? 'on' : 'off'}`}></div>
    </div>
  );
};

export default Switch;
