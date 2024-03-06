import axios from "axios"
import { useState } from "react"
import './App.css'

function App() {
  const [deg,setdeg]=useState("")
  const [city,setcity]=useState("")
  const [desc,setdesc]=useState("")
  const [enteredvalue,setvalue]=useState("")

function handleinput(event){
console.log(event.target.value)
setvalue(event.target.value)
}

  function getdata()
  {
    var weather=axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredvalue}&appid=ee949cc184264765ad2f53c854eb1a81`)
    weather.then(function(data){
      console.log(data.data)
      // console.log(data.data.main.temp)
      setdeg(data.data.main.temp)
      setcity(data.data.name)
      setdesc(data.data.weather[0].main)
    })
  }
  return (
      <div className="flex flex-row justify-center h-[100vh] items-center" >
          <div style={{backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)"}} className=" p-5 rounded-md shadow">
              <h1 className=" font-bold text-4xl m-5 mb-4">Hey!🌤️</h1>
              <p  className=" text-xl m-5">Do you want to know the weather Report :)</p>
              <input onChange={handleinput} type="text" className=" rounded-md h-6 w-80 text-base mb-3 ml-5 p-5 mt-2 outline-none" placeholder="City name" /><br />
              <button onClick={getdata} className=" bg-black text-white rounded-lg p-2 text-lg mb-3 ml-5 mt-4">Get Report⚡</button>
             <p className=" text-lg mt-2 p-5"> <i class="fa-solid fa-temperature-quarter"></i> Degree: {deg} | <i class="fa-solid fa-location-dot"></i>  City: {city} | <i class="fa-solid fa-cloud-rain"></i> Weather: {desc}</p>
             
          </div>
      </div>)
}

export default App