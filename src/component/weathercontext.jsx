import React,{createContext,useState} from "react";

export const weatherContext=createContext(null);

export function WeatherProvider(props){
    const [data,setData]=useState(null);
    const [searchCity,setSearchCity]=useState("");
    const fetchData=async()=> {
          if (!searchCity) return;

    try {
        const response=await fetch(`https://api.weatherapi.com/v1/current.json?key=bb747be1b01143878d2114934253006&q=${searchCity}&aqi=no`);
        const weatherData1= await response.json();
        setData(weatherData1);}
        catch(err){
            console.error("error fetching weather data:",err);
        }
    }
         const fetchLocation = () => {
    if (!navigator.geolocation) {
      
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=bb747be1b01143878d2114934253006&q=${position.coords.latitude},${position.coords.longitude}25&aqi=no`
          );
          const weatherData = await response.json();
          setData(weatherData);
          
        } catch (err) {
          console.error("Error fetching location-based weather:", err);
          
        }
      },
      (err) => {
        console.error("Geolocation error:", err);
        
      }
    );
  };

    
    return (
        
        

        <weatherContext.Provider value={{data,setData,searchCity,setSearchCity,fetchData,fetchLocation}}>
{
props.children
}
        </weatherContext.Provider>
    )
}
