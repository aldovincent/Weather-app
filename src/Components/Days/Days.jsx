import "./days.css"
import { Cloud } from "@mui/icons-material"
import {week} from "../../dummy"
export default function Days({dayitem}) {
  console.log(dayitem)
  // const fdata=dayitem.filter((details)=>{
  //  return details.desc!=="light rain"
  // })
  // console.log("fdata",fdata);
   const gdata=dayitem.filter((details)=>{
    return details.desc=="moderate rain"
   })
   console.log("gdata",gdata);
  return (
    <>
      <div className="item">
        <div class="row">
          {dayitem.map((value,key) =>
          <div className="col-sm-2">
           
            <div className="gem">
              <p className="menu1">{value.day}</p>
              <Cloud className="menu2"/>
              <p>{value.hTemp}</p>
                

               
              <p>{value.desc}</p>
            </div>
          
          </div>
          )}
        </div>
      </div>


    </>
  )
}
