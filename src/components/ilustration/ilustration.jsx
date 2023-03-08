import { AsideStyled } from "./style";
import {motion} from "framer-motion";

export default function Ilustration({src}){
    return (
        <AsideStyled >
            <motion.img 
                loading="lazy"
                src={src} 
                alt="ilustration space SVG" 
                className="w-100 h-100 p-2"
                animate={{
                    rotate: [0, 3, 0, -3, 0],
                    scale: [1, 0.95, 1, 0.95, 1]
                }}
                transition={{ ease: "linear", duration: 3, repeat: Infinity }}>
            </motion.img>
        </AsideStyled>
    )
}