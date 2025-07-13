import React,{useContext} from "react";
import { weatherContext } from "./weathercontext";

const InputCity=()=>{
const weatherData=useContext(weatherContext);


return (
    <input 
    type="text"
    value={weatherData.searchCity}
    onChange={(e)=>weatherData.setSearchCity(e.target.value)}
    />
)



}
export default InputCity;