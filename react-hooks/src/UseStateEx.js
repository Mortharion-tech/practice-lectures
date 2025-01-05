import { useState } from "react";

export default function UseStateEx() {
    const [hookCounter, setHookCounter] = useState(0);
    
    let variableCounter = 0;

    const updateHookCounter = () => {
        console.log("old hookCounter: " + hookCounter);
       /*  setHookCounter((prevState) => ++prevState); */
        setHookCounter(hookCounter + 1);
        console.log("new hookCounter: " + hookCounter);
    }

    const updateVariableCounter = () => {
        variableCounter++;
        console.log("variableCounter: " + variableCounter);
    }

    return (
        <div className="example">
            <h2>1. Use State: </h2>
            <div className="row">
                <div className="example-container">
                    <h3>hook counter: {hookCounter}</h3>
                    <a href="#ignore" onClick={updateHookCounter}>
                        Increase hook counter
                    </a>
                </div>
                <div className="example-container">
                    <h3>variable counter: {variableCounter}</h3>
                    <a href="#ignore" className="green" onClick={updateVariableCounter}>
                        Increase variable count
                    </a>
                </div>
            </div>
        </div>
    )
}