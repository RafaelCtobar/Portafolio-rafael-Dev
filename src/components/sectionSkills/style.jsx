import styled from "styled-components";
import { colors, utilies } from "../../styledUtilies/utilesVariables";


export const SectionSkillStyled = styled.div`
    ${utilies.centrar}
    border-radius: 7px;
    h3{
        text-align: center;
        border-bottom: 3px solid ${colors.secondary(1)};
        width: 70%;
        margin-bottom: 20px;
        padding: 10px;
        color: white;
        font-weight: bold;
    }
`
