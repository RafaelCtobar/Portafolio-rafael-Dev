import { useEffect, useRef } from "react";

export default function useSEO(title, descripcion){
    const prevTitle = useRef(document.title);
    const prevDescription = useRef(document.querySelector("meta[name='description']").getAttribute("content"));
    useEffect(()=>{
        const previousTitle = prevTitle.current;
        if(title) document.title = `Rafael Dev | ${title}`;
        return ()=> document.title = previousTitle;
    }, [title]);
    useEffect(()=>{
        const previDescritpion = prevDescription.current;
        const metaDescription = document.querySelector("meta[name='description']");
        if(descripcion) metaDescription.setAttribute("content", descripcion)
        
        return ()=> metaDescription.setAttribute("content", previDescritpion)
    }, [descripcion])
}