import React, { useState } from 'react'
import "./style.css"


const App=()=> {

  const [lat,setLat]=useState("");
  const [long,setLong]=useState("");
  const [hemisphere,setHemisphere]=useState("");

  function findLocation(){
    //navigator,geolocation,
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position)=>{
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
          if(position.coords.latitude>0){
            setHemisphere("Northen Hemisphere")
          }
          else if(position.coords.latitude<0){
            setHemisphere("Southen Hemisphere")
          }
          else{
            setHemisphere("Equator");
          }
        }
      );
    }
  }

  return (
    <div>
    <div>
      <button onClick={findLocation}>Find My Location</button>
    </div>
    <div className='print'>
      <h1 style={{color:"orange"}}>latitude:{lat}</h1>
      <h1 style={{color:"white"}}>Longitude:{long}</h1>
      <h1 style={{color:"lightgreen"}}>Hemisphere:{hemisphere}</h1>
    </div>
    </div>
  )

}

export default App