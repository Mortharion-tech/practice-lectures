import { useRef, useState, useEffect } from "react";

export default function UseRefEx() {
    //  Example 1
    const timerIdRef = useRef(0);
    //  working too but slightly less efficient
   /*  const [timerIdRef, setTimer] = useState({}); */

    console.log("render");

    const [count, setCount] = useState(0);

    const startHandler = () => {
        if (timerIdRef.current) {
            return;
        }
        timerIdRef.current = setInterval(() => setCount((c) => c + 1), 1000);
        console.log(timerIdRef.current, "here");
    };

    const stopHandler = () => {
        clearInterval(timerIdRef.current);
        timerIdRef.current = 0;
    };

    useEffect(() => {
        return () => clearInterval(timerIdRef.current);
    }, []);

    //  Example 2
    const inputRef = useRef();
    const inputWithValueRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
        inputWithValueRef.current.value = "Initial input value";
    }, []);

    const updateInputValue = () => {
        inputWithValueRef.current.value += "a";
    };
}