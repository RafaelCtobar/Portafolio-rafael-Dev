import styled from "styled-components";
import { mediaQueries, utilies } from "../../styledUtilies/utilesVariables";

export const AsideStyled = styled.aside`
    ${utilies.medidas(90, 90, "%")}
    ${utilies.centrar}
    opacity: 0.8;
    margin:20px 0 0 20px;
    ${mediaQueries.small}{
         margin-top: 40px;
    }
    ${mediaQueries.medium}{
         margin-top: 80px;
    }
`