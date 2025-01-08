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
