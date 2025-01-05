import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function UseEffectEx() {
    const [hookCounter, setHookCounter] = useState(0);
    const [hookCounter2, setHookCounter2] = useState(0);
    useEffect(() => {
        console.log("hookCounter or hookCounter2 was changed")
        console.log(
            `hookCounter is ${hookCounter} and hookCounter2 is ${hookCounter2}`
        );
    }, [hookCounter, hookCounter2]);

    const updateHookCounter = () => {
        setHookCounter((prevState) => ++prevState);
    }

    const updateHookCounter2 = () => {
        setHookCounter2((prevState) => ++prevState);
    }

    return (
        <div className="example">
            <h2>2. Use Effect: </h2>
            <a href="#ignore" onClick={updateHookCounter}>
                Increase hookCounter
            </a>
            <a href="#ignore" className="red" onClick={updateHookCounter2}>
                Increase hookCounter 2
            </a>
        </div>
    )
}