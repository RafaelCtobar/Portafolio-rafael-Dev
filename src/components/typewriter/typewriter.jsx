import React, { useEffect, useState } from "react";
import { TypewriterStyled } from "./style";

function Typewriter(){
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const words = ["Freelancer", "Front-end", "Developer"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300);
    const [arrText, setArrText] = useState([])
    const period = 1000;

    const tick=()=>{
        const i = loopNum % words.length;
        const fullText = words[i]
        const updateText = isDeleting ? 
                fullText.substring(0, text.length - 1 ) : 
                fullText.substring(0, text.length + 1);
        setText(updateText);
        if(isDeleting){
            setDelta(delta => delta /1.5);
        }
        if(!isDeleting && updateText == fullText){
            setIsDeleting(true);
            setDelta(period)
        }else if(isDeleting && updateText == ""){
            setIsDeleting(false)
            setLoopNum(loopNum + 1);
            setDelta(200)
        }
    }

    useEffect(()=>{
        const ticker = setInterval(()=>{
            tick()
        }, delta)
        setArrText(text.split(""))
        return () => {clearInterval(ticker)}
    }, [text])

    return(
        <TypewriterStyled >
            {arrText.map((t, index)=> <span key={index}>{t}</span>)}
        </TypewriterStyled>
    );
}
export default React.memo(Typewriter)