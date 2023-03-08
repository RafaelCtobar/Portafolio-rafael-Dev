import styled from  "styled-components";
import { colors, mediaQueries } from "../../styledUtilies/utilesVariables";

export const SectionStyled = styled.section`
    font-size: 1.1rem;
    ${mediaQueries.medium}{
        font-size: 1.2rem;
    }
`
export const StrongStyled= styled.strong`
    color: ${colors.secondary(1)};
`