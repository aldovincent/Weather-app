import { useState } from "react"
import "./header.css"
import { Search } from "@mui/icons-material"
export default function Header({newdata,olddata}) {
    
    
    
    return (
        <>
            <div className="banner">
                <div className="search">
                    <form onSubmit={olddata}>
                    <input type="text" className='searchfield' onChange={newdata} name="searchbar"/>
                    </form>
                </div>
                <div className="icon">
                    <Search/>
                </div>


            </div>
        </>

    )
}
