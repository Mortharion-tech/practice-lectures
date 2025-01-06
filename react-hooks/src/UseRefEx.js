import { useRef, useState, useEffect } from "react";

export default function UseRefEx() {
    const timerIdRef = {};
    console.log("render");
    console.log(timerIdRef);

    const [count, setCount] = useState(0);
}