import styled from 'styled-components';
import { colors, utilies } from '../../styledUtilies/utilesVariables';

export const StyledProjects = styled.section`
    padding-top: ${utilies.top};
    ${utilies.centrar}
    flex-direction: column;
    div{
        h1{
            color: ${colors.secondary(1)};
            font-weight: bold;
            text-transform: uppercase;
        }
    }
`