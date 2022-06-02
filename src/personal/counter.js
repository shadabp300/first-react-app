import { useState } from "react";

const Counter= () => {
    const [counter, func]=useState(0)

    const Increment= () => {
        func((val) => {
            return val+1
        })
    }

    const Decrement= () => {
        func((val) => {
            return val-1
        })
    }

    return(
        <div>
        <button onClick={Increment}>Increment</button>
        <div>{counter}</div>
        <button onClick={Decrement}>Decrement</button>
        </div>
    )
}
export default Counter