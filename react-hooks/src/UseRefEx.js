import { useRef, useState, useEffect } from "react";

export default function UseRefEx() {
    const timerIdRef = {};
    console.log("render");
    console.log(timerIdRef);

    const [count, setCount] = useState(0);

    const startHandler = () => {
        if (timerIdRef.current) {
            return;
        }
        timerIdRef.current = setInterval(() => setCount((c) => c + 1), 1000);
    };
}