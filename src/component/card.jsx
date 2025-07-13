import React,{useContext} from "react";
import { weatherContext } from "./weathercontext";



const Card=()=>{
    
    const weatherdata=useContext(weatherContext);
    
    

    
    return(
        <div>
        
        <div className="weather">
            <img src={weatherdata?.data?.current?.condition.icon} />
        <h4>{weatherdata?.data?.current?.temp_c} C</h4>
        <p>{weatherdata?.data?.location?.name},{weatherdata?.data?.location?.region},{weatherdata?.data?.location?.country}</p>
        </div>
        </div>
    )


}

export default Card;