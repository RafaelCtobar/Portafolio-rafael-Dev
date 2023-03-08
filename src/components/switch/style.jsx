import styled from "styled-components";
import { colors, utilies } from "../../styledUtilies/utilesVariables";

const unit = "5px";

const sizes = {
    large: [75, 35, 25],
    medium: [60, 30, 20],
    small: [50, 25, 15]
}

export const SwitchStyled = styled.div`
    ${utilies.centrar}
    
    ${ props =>{
        const color = props.color ? props.color : colors.secondary(0.5)
        const size = props.size ? props.size : "medium"
        const [width, height, after] = sizes[size]
        return `input{
            ${utilies.medidas(0)}
            visibility: hidden;
        }
         label{
            ${utilies.medidas(width, height)}
            background-color: grey;
            display: block;
            border-radius: 100px;
            position: relative;
            cursor: pointer;
        }
        label:after{
            content: '';
            position: absolute;
            top: ${unit};
            left: ${unit};
            ${utilies.medidas(after)}
            background-color: white;
            border-radius: 50%;
            transition: all 0.5s ease;
        }
        input:checked + label{
            background-color: ${color};
        }
        input:checked + label:after{
            left: calc(100% - ${unit});
            transform: translateX(-100%);
        }`
     }   
    }
    
`