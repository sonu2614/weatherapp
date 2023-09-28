import React, { useState } from 'react'
import "./style.css"


const App1=()=> {

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
          updateHemisphere(position.coords.latitude)
        }
      );
    }
  }
  function updateHemisphere(lat){
    if(lat>0){
        setHemisphere("Northen Hemisphere")
      }
      else if(lat<0){
        setHemisphere("Southen Hemisphere")
      }
      else{
        setHemisphere("Equator");
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
      {/* lat && updateHemisphere() */}
      <h1 style={{color:"lightgreen"}}>Hemisphere:{hemisphere}</h1>
    </div>
    </div>
  )

}

export default App1