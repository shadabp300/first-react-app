import { useState } from "react";
import "./Clock.css"


const Clock = () => {

    let time = new Date().toLocaleTimeString()
    const [clock, setclock] = useState(time)
    
    const updateTime =()=> {
        time=new Date().toLocaleTimeString()
        setclock(time)
    }
    setInterval(updateTime,1000) 
    
    return (
        <>
        <h1> {clock} </h1>
        </>
    )
}
export default Clock;