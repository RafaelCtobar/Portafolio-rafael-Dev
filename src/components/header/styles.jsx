import styled from "styled-components";
import {colors, mediaQueries} from "../../styledUtilies/utilesVariables"
import Nav from 'react-bootstrap/Nav';


export const HeaderStyled = styled.header`
    opacity: 1;
    width: 100%;
    height: 70px;
    background-color: ${colors.primary(1)};
    ${mediaQueries.medium}{
        opacity: 0.9;
    }
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
`
export const DivStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 10px 10px 10px 10px;
`
export const MyNav = styled(Nav)`
    display: none;
    ${mediaQueries.medium}{
        display: flex;
    }
`