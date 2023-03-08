import styled from "styled-components";
import { colors, mediaQueries, utilies } from "../../styledUtilies/utilesVariables";

export const MainStyled = styled.div`
    ${utilies.medidas(100, 100, "%")}
    margin-top: ${utilies.top};
`

const fontUnit = 3;

export const H1styled = styled.h1`
    font-size: ${fontUnit}rem;
    ${mediaQueries.small}{
        font-size: ${fontUnit +1}rem;
    }
    ${mediaQueries.medium}{
        font-size: ${fontUnit +2}rem;
    }
`
export const NameStyled = styled.div`
    color: ${colors.secondary(1)};
`
export const IamStyled = styled.div`
    ${
        props => {
            const size = props.size == "Mellamo" ? `${fontUnit - 0.2}rem` : null
            return `font-size: ${size}`
        }
    }
`