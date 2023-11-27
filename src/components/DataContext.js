import { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [temperatureData, setTemperatureData] = useState(null);
  const [humidityData, setHumidityData] = useState(null);
  const [co2Data, setCO2Data] = useState(null);
  const [pm25Data, setPM25Data] = useState(null);
  const [BlackwaterPercentage, setBlackWaterPercentage] = useState(null);
  const [batteryPercentage, setBatteryPercentage] = useState(null);
  const [CleanwaterPercentage, setCleanWaterPercentage] = useState(null);
  const [GreywaterPercentage, setGreyWaterPercentage] = useState(null);
  const apiUrl = 'http://127.0.0.1:5000/api/temperature-data';

  const fetchData = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setTemperatureData(data.temperatureData);
        setHumidityData(data.humidityData);
        setCO2Data(data.co2Data);
        setPM25Data(data.pm25Data);
        setBatteryPercentage(data.batteryPercentage);
        setBlackWaterPercentage(data.BlackwaterPercentage);
        setCleanWaterPercentage(data.CleanwaterPercentage);
        setGreyWaterPercentage(data.GreywaterPercentage);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    // Fetch data initially when the provider mounts
    fetchData();

    // Set up a timer to fetch data periodically (e.g., every 2 seconds)
    const intervalId = setInterval(fetchData, 2000);

    // Clean up the timer when the provider unmounts
    return () => clearInterval(intervalId);
  }, []); // <-- Empty dependency array to run only once

  return (
    <DataContext.Provider
      value={{
        temperatureData,
        humidityData,
        co2Data,
        pm25Data,
        batteryPercentage,
        CleanwaterPercentage,
        BlackwaterPercentage,
        GreywaterPercentage,
        fetchData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
