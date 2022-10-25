import "./temperature.css"
import { Cloud, WbTwilight,LightMode } from "@mui/icons-material"
export default function Temperature({tempitem}) {
  console.log(tempitem)
  return (
    <>
      <div className="celcius">
        <Cloud className="new" />
        <div className="new1">
          <WbTwilight className="new2"/>
          {/* <span>{tempitem?.data?.list[0]?.feels_like?.day}</span> */}
         <span>32.2C</span>
        </div>
        <div className="new3">
            <LightMode className="new4"/>
            {/* <span>{tempitem?.data?.list[0]?.sunset}</span>  */}
            <span>35.5C</span>

        </div>
        <div className="new5">
          <span className="item1">27.82C</span>
        </div>
        <div className="new6">
          {/* <span className="item2">{tempitem?.data?.list[0]?.temp?.night}</span> */}
          <span>Rain,ligth,sun</span>
        </div>
        

        

      </div>
    
   
   
   </>
  )
}
