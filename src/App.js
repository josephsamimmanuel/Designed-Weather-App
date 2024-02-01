import axios from "axios"
import { useState } from "react"
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
          <div style={{backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)"}} className=" p-2 rounded-md shadow">
              <h2 className=" font-medium text-xl">Hey!🌤️</h2>
              <p  className=" text-xs">Do you want to know the weather Report :)</p>
              <input onChange={handleinput} type="text" className=" rounded-md h-6 text-base mt-2 p-1 outline-none" placeholder="City name" /><br />
              <button onClick={getdata} className=" bg-black text-white rounded-lg p-2 text-xs mt-2">Get Report⚡</button>
              <p className=" text-sm mt-2">Degree: {deg} | City: {city} | Weather: {desc}</p>
          </div>
      </div>)
}

export default App