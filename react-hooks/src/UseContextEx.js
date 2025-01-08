import { useReducer, createContext, useContext } from "react";

export const Context = createContext(null);

export default function UseContextEx() {
    const a = "LOL";

    return (
        <div>
            <Context.Provider value={a}>
                <A />
            </Context.Provider>
            <B />
        </div>
    );
}

function A() {
    const value = useContext(Context);
    return (
        <div style={{ border: '1px solid blue', padding: 10 }}>
            Context value from A: {value}
            <C />
        </div>
    );
}

function C() {
    const value = useContext(Context);
    return (
        <small style={{ border: '1px solid green', padding: 10 }}>
            Context value from C: {value}
        </small>
    );
}

function B() {
    const value = useContext(Context);
    return (
        <div style={{ border: '1px solid black', padding: 10 }}>
            Context value: {value}
        </div>
    );
}