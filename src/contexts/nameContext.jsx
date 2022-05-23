import { createContext, useContext, useState } from "react";

export const NameContext = createContext({
    name: "test",
    updateName: (value) => { }
});
export const NameProvider = ({
    children
}) => {
    const [name, setName] = useState("test");
    const updateName = (value) => {
        console.log(value)
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
export const useName = () => useContext(NameContext)