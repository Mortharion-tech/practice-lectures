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

    return (
        <div className="example">
            <h2>3. Use Ref: </h2>
            <div>
                <h3>Timer: {count}</h3>
                <div>
                    <a href="#i" onClick={startHandler}>
                        Start
                    </a>
                    <a href="#i" className="red" onClick={stopHandler}>
                        Stop
                    </a>
                </div>
            </div>
            <div className="example-ref">
                <div className="form-group">
                    <input
                        ref={inputRef}
                        className="form-field"
                        type="email"
                        placeholder="=Email"
                    />
                    <span>@gmail.com</span>
                </div>
            </div>
            <div className="example-ref">
                <div>
                    <input className="form-field" ref={inputWithValueRef}></input>
                </div>
            </div>
        </div>
    )
}