import Place from "./Components/Place/Place"
import Header from "./Components/Header/Header";
import Temperature from "./Components/Temperature/Temperature";
import Days from "./Components/Days/Days";
import { useState } from "react"
import Loader from "./Components/Loader/Loader";
import axios from  "axios";
import { Key } from "@mui/icons-material";




export default function App() {
  const [weatherData,setWeatherData]=useState({
    input:'',
    current:{},
    weekinfo:[],
    loading:false,
    error:false,

  })
 
  


  const change=(event)=>{
    var value=event.target.value

    setWeatherData({...weatherData,input:value})
  }
  console.log(weatherData);

   const handleSearchCity = e => {
     e.preventDefault();
     setWeatherData({
       ...weatherData,
       loading:true,
     })
     axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${weatherData.input}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a`)
     .then((datas)=>{
    //  axios.get(`http://api.openweathermap.org/data/2.5/forecast?zip=673001,IN&units=imperial&APPID=4f35aa6018a7c52c068ab9fb74cf1576`)
    //  .then((datas)=>{
     console.log(datas);
    //  console.log("Data List Loaded",datas.data.list)
    //  const dailyData= datas.data.list.filter((reading)=>
    //   reading.dt_txt.includes("12:00:00")
    //  );
    //  console.log(dailyData)
    //  setWeatherData({...weatherData,weekinfo:dailyData})

     
     const months = ['january','February','March','April','May','June','July','August','september','october','November','December']
     const days = ['Sunday','Monday','Tuesday','wednesday','Thursday','Friday','Saturday','Sunday']
     const currentDate = new Date()
     console.log("day----",currentDate);
     const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]
     }`;
     console.log(currentDate.getMonth())
     console.log("date--",date);
     const sunset = new Date(datas.data?.list[0]?.sunset * 1000).toLocaleTimeString()
     console.log(sunset);
     const sunrise = new Date(datas.data?.list[0]?.sunrise * 1000).toLocaleTimeString().slice(0,4)
     console.log(sunrise);


   



     const currentData={
      city:datas?.data?.city?.name,
      country:datas?.data?.city?.country,
      pressure:datas?.data?.list[0]?.pressure,
      humidity:datas?.data?.list[0]?.humidity,
      sunrise:datas?.data?.list[0]?.sunrise,
      sunset:datas?.data?.list[0]?.sunset,
      clouds:datas?.data?.list[0]?.clouds,
      desc:datas?.data?.weather?.list[0]?.description,
      main:datas?.data?.weather?.list[0]?.main,
      icon:datas?.data?.weather?.list[0]?.icon,
      population:datas?.data?.city?.population,
      wind:datas?.data?.list[0]?.speed,
      htemp:datas?.data?.list[0]?.temp.max,
      ltemp:datas?.data?.list[0]?.temp.min,
      date
     
     }
     const weekData = datas.data.list
     console.log(weekData)
     const weekinfo = weekData.map((datas,index)=> {
      return{
       key:index,
       main:datas?.weather[0].main,
       day: new Date(datas.dt*1000).toLocaleString('en-us',{weekday:'long',year:'numeric',month:'long',day:'numeric'}).slice(0,3),
       desc:datas?.weather[0].description,
       icon:datas?.weather[0].icon,
       hTemp:datas?.temp?.max,
       lTemp:datas?.temp?.min,
       
       
      
      }})
      setWeatherData({
        ...weatherData,
        current:currentData,
        weekinfo,
        loading:false,
        error:false,
   })
   

   

      



    
    
  

     })


    
      
    }

   console.log("kkkk",weatherData);
   

  





  return (
    <>
    <div className="banner">
        <Header newdata={change}   olddata={handleSearchCity}/>

        <h1>{weatherData.weekinfo.data?.city.name}</h1>
        
        {weatherData.loading === true ? <Loader/> : 
        <>
        {weatherData?.current?.dt !== "" ? 
        <>
          <Place Placeitem={weatherData.current}/>
          <Temperature   tempitem={weatherData.weekinfo}/>
          <Days  dayitem={weatherData.weekinfo}/>
        </>
        :
        <p>sorry! we dont have information on specified loaction</p>
        }
        
        </>
        }

    </div>
    </>
  );
}


