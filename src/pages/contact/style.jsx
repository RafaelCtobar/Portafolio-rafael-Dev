import styled from 'styled-components';
import { colors, mediaQueries, utilies } from '../../styledUtilies/utilesVariables';

export const StyledContact = styled.main`
    padding-top: ${utilies.top};
    height: 100%;
    color: white;
    div{
        section{ 
            display: none;

            ${mediaQueries.medium}{
                display: block;
            }
        }
    }
    #container_row{
        margin: calc(${utilies.top} - 30px) 0px 0px 0px;
        ${mediaQueries.large}{
            margin: 50px 70px 50px 50px;
        }
    }
`
export const StyledH1 = styled.h1`
    color: ${colors.secondary(1)};
    text-transform: uppercase;
    font-weight: bold;
`