import React, { useEffect } from "react";
import { useState} from "react";

const BaseContext = React.createContext({
    error: "No exite provider"
})

export function GetContext({children}){
    const [local, setLocal] = useState(localStorage.getItem("Language") == "true");
    const [menuState, setMenuState] = useState(false);
    const [language, setLanguage] = useState(local);
    localStorage.setItem("Language", language);

    useEffect(()=>{
        setLocal(localStorage.getItem("Language"))
    }, [])

    const states = {
        menu: [menuState, setMenuState],
        language: [language, setLanguage]
    }
    return(
        <BaseContext.Provider value={states}>
            {children}
        </BaseContext.Provider>
    );
}
export default BaseContext;