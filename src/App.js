import React, {useContext,useEffect} from "react";
import Card from "./component/card";
import InputCity from "./component/inputcity";
import Button from "./component/Button.jsx";


import './App.css';
import { weatherContext } from "./component/weathercontext.jsx";

function App() {
  const weatherData=useContext(weatherContext);
  console.log(weatherData)
  useEffect(()=>{
   weatherData.fetchLocation();
  
  },[])

  return (
<div className="App">
  <h1>
    Weather Forecast
  </h1>
<InputCity />
<Button onClick={weatherData.fetchData} value="search"/>
<Card />

</div>

  );
}

export default App;
