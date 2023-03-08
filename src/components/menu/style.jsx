import styled from "styled-components";
import { colors, mediaQueries } from "../../styledUtilies/utilesVariables";

export const MenuStyled = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    font-size: 2rem;
    text-align: center;
    z-index: 900;
    width: 100%;
    height: 91vh;
    margin-top: 70px;
    background-color: ${colors.primary(0.95)};
    & div{
        margin-top: 50px;
    }
    ${mediaQueries.medium}{
        display: none;
    }
`