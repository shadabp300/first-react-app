import { useState } from "react";

const Counter = () => {
    const [counter, funct]=useState(0)

    const increment= () => {
        funct(() => {
            return counter+1 
        })
        // funct((val) => {
        //     return val+1 
        // })
        funct(() => {
            return counter+1 
        })
    }
    
    const decrement = () => {
        funct ((val) => {
            return val-1
        })
    }
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <div>{counter}</div>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}
export default Counter