import styled from "styled-components";
import { colors, utilies } from "../../styledUtilies/utilesVariables";

export const SkillStyled = styled.main`
    ${utilies.medidas(100, 100, "%")}
    padding-top: ${utilies.top};
    div{
        h1{
            color: ${colors.secondary(1)};
            font-weight: bold;
        }
    }
`

export const BackgroundBars = styled.div`
    border-radius: 10px;
    background: ${colors.primary(1)};
    background-image: repeating-linear-gradient(
        -45deg, 
        hsla(0, 0%, 70%, .1),
        hsla(0, 0%, 70%, .1) 15px,
        transparent 0, transparent 30px
    );
    
`