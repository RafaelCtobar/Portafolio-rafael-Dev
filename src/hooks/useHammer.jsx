import Hammer from "hammerjs";
import { useRef, useState, useEffect } from "react";
import useLanguage from "./useLanguage";
import useMovil from "./useMovil";

export default function useHammer() {
    const [hammerApp, setHammer] = useState("");
    const [hammerMenu, setHammerMenu] = useState("");
    const {setMenuState} = useLanguage();
    const elementoApp = useRef(null);
    const elementoMenu = document.getElementById("menu");
    const isMovil = useMovil();

    useEffect(() => {
        if(elementoApp.current){
            const hammerApp = new Hammer.Manager(elementoApp.current);
            setHammer(hammerApp);
        }
        if(elementoMenu){
            const hammerMenu = new Hammer(elementoMenu);
            setHammerMenu(hammerMenu);
        }
    }, [elementoMenu])

   
    useEffect(()=>{
        if(isMovil){
           if(hammerApp){
                hammerApp.add(new Hammer.Tap({event: "doubleTap", taps: 2}))
                hammerApp.on("doubleTap", () => setMenuState(true));
           }
           if(hammerMenu){
                hammerMenu.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
                hammerMenu.on("swipeup", ()=> setMenuState(false))
           }
        }
    }, [hammerMenu])
   
    return {elementoApp}
}
