import { PlaceOutlined } from "@mui/icons-material"
import "./place.css"

export default function Place({Placeitem}) {
  console.log(Placeitem)
  return (
    <>
    <div className="city">
        <div className="italic">
          <span>{Placeitem?.city}</span>
        </div>
        <div className="key1">
          <span>{Placeitem?.date}</span>
        </div>
        <div className="key2">
           <span>{Placeitem?.population}</span>
        </div>
    </div>
    </>
  )
}
