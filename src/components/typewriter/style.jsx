import styled from "styled-components";
import { colors, mediaQueries } from "../../styledUtilies/utilesVariables";



export const TypewriterStyled = styled.div`
    color: ${colors.secondary(1)};
    font-family: 'Roboto Mono', monospace;
    font-size: 3rem;
    height: 70px;
    transform: translateY(-10px);
    ${mediaQueries.small}{
        font-size: 4rem;
        height: 90px;
    }
    ${mediaQueries.medium}{
        font-size: 5rem;
        height: 100px;
    }
    span:last-child{
    border-right: 2px solid white;
    height: 20px;
    animation: write 0.3s infinite step-end alternate;
    @keyframes write{
        50%{border-color: transparent;}
    } 
   }
   
`