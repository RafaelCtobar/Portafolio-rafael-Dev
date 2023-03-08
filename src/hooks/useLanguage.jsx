import { useEffect, useState } from "react";
import getContext from "../context/importContext";
import { españolConfig, inglesConfig } from "../components/languagesConfig";

export default function useLanguage(){
    const { menu, language } = getContext();
    const [menuState, setMenuState] = menu;
    const [languageState, setLanguage] = language;
    const [anotation, setAnotation] = useState("ES");
    const [languageUse, setLanguageUse] = useState(españolConfig);
    useEffect(()=>{
        if(!languageState){
            setAnotation("ES")
            setLanguageUse(españolConfig)
        }
        else{
            setAnotation("EN")
            setLanguageUse(inglesConfig)
        }
    }, [languageState])


    const handleClick = () => setMenuState(menuState => !menuState);


    return {
        languageUse,
        languageState,
        menuState,
        setLanguage,
        setMenuState,
        anotation,
        handleClick,
    }
  
}

