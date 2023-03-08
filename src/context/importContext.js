import { useContext } from "react";
import BaseContext from "../context/getContext";

export default function getContext(){
    const states = useContext(BaseContext)
    return states;
}
