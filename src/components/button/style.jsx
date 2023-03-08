import styled from "styled-components";
import { colors, mediaQueries, shadows } from "../../styledUtilies/utilesVariables";

export const ButtonStyles = styled.button`
     background-color: transparent;
    border: 2px solid ${colors.secondary(0.7)};
    background: rgb(2,0,36);
    background-color: transparent;
    border-radius: 7px;
    box-shadow:  inset 0 0 0 0 #296446;
    text-transform: uppercase;
    transition: all 0.3s ease;
    ${shadows.txtBlack}
    font-family: 'Roboto', sans-serif;
    color: white;
    padding:0 30px 0 30px;
    min-width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${mediaQueries.small}{
        width: auto;
    }
    :hover{
        background-color: ${colors.secondary(0.6)};
    }
    :active{
        transform: scale(0.8);
    }
`

