import styled from "styled-components";
import { colors, utilies } from "../../styledUtilies/utilesVariables";

const communFrontAndBack = `
    ${utilies.medidas(100, 100, "%")}
    position: absolute;
    top: 0;
    left: 0;
    transform-style: preserve-3d;
    backface-visibility: visible;
`

export const Card = {
    father: styled.div`
    height: 100%;
    width: 200px;
    margin-bottom: 20px;
        h2{
            text-align: center;
            color: white !important;
        }
        :hover{
            cursor: pointer;
            & aside{
                transform: rotateY(180deg);
            }
        }
        perspective: 1000px;
    `,
    card: styled.aside`
        width: 100%;
        ${props=>{
            let title = props.title;
            if(title == "HTML" 
            || title == "CSS"  
            || title == "JavaScript"){
                return `min-height: 193px;`
            }
            return `min-height: 180px;`
        }}
        position: relative;
        transform-style:  preserve-3d;
        transition: all 1s;
        transition-delay: 0.13s;
    `,
    front: styled.div`
       ${communFrontAndBack}
       background-position: center;

    `,
    frontBody: styled.div`
        ${utilies.medidas(100, 100, "%")}
        text-align: center;
        padding: 10px;
        ${utilies.centrar}
        flex-direction: column;

    `,
    back: styled.div`
        ${communFrontAndBack}
        transform: rotateY(180deg);
        ${utilies.centrar}
    `,
    backBody: styled.div`
        transform: translateZ(60px);
        color: white;
        text-shadow: 1px 2px 1px black;
        font-weight: bold;
        text-align: center;
        backface-visibility: hidden;
        background-color: ${colors.primary(0.7)};
        padding: 5px;
        padding-bottom: 12px;
        min-width: 210px;
        max-width: 211px;
    `,
}