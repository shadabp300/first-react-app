import { useState } from "react";
import "./LogIn.css"

const LogIn = () => {

    const [name, setname]=useState()
    const [firstName,setfirstName]=useState()

    const Name=(event) => {
        setname(event.target.value)
    }
    const updateName=() => {
        setfirstName(name)
        document.getElementById("input").value=""
    }

    return (
        <div className="Container">
            <h1> Hello {firstName}</h1>
            <input id="input" type="text" placeholder="Type Your Name" onChange={Name}></input> <br/>
            <button onClick={updateName}>Click Me👍</button>
        </div>
    );
}
export default LogIn; 