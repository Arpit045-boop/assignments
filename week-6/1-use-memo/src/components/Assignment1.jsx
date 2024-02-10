import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    // const expensiveValue = 1; 
    const expensiveValue  = useMemo(()=>{
        var result = 1 ; 
        var val = input;
        while(val){
            result *= val;
            val -= 1;
        }
        return result;
    },[input])

    // Your solution ends here
    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}
