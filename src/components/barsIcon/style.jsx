import styled from "styled-components";
import {stylesIconBar} from "../../styledUtilies/utilesIconBar"
import { mediaQueries } from "../../styledUtilies/utilesVariables";

export const Bars = styled.div`
    ${stylesIconBar.styledBase}
    ${ props => {
        if(props.state) return stylesIconBar.stylesTransition
        else return stylesIconBar.styledBase
    }}  
`
export const ConteinerBars = styled.div`
    transform: translateX(-5px);
    height: 36px;
    display: flex;
    align-items: center;
    cursor: pointer;
    :hover{
        opacity: 0.7;
    }
    ${mediaQueries.medium}{
        display: none;
    }
`