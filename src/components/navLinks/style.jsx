import styled from "styled-components";
import { Link } from "wouter";
import { mediaQueries, shadows, utilies } from "../../styledUtilies/utilesVariables";
export const NavLinkStyled = styled.div`
    text-decoration: none ;
    text-transform: uppercase;
    border: none;
    font-family: 'Roboto', sans-serif;
   
`
export const LinkStyled = styled(Link)`
    text-decoration: none;
    ${shadows.txtBlack}
    :hover{
        cursor: pointer;
        opacity: 0.7;
    }
    ${utilies.centrar}
    font-size: 1em;
    ${mediaQueries.small}{
        font-size: 1.2em;
    }
`