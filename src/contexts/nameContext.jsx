<<<<<<< daf7b72c93603e1a70d3a69f9e0197c8a9f7c700
import { createContext, useContext, useState } from "react";

export const NameContext = createContext({
    name: "",
    updateName: (value) => { }
});
export const NameProvider = ({
    children
}) => {
    const [name, setName] = useState("");
    const updateName = (value) => {
        setName(value)       
    }
    return (
        <NameContext.Provider value={{
            name: name,
            updateName: updateName
        }}>
            {children}
        </NameContext.Provider>
    )
}
=======
import { createContext, useContext, useState } from "react";

export const NameContext = createContext({
    name: "",
    updateName: (value) => { }
});
export const NameProvider = ({
    children
}) => {
    const [name, setName] = useState("");
    const updateName = (value) => {
        setName(value)       
    }
    return (
        <NameContext.Provider value={{
            name: name,
            updateName: updateName
        }}>
            {children}
        </NameContext.Provider>
    )
}
>>>>>>> Update
export const useName = () => useContext(NameContext)