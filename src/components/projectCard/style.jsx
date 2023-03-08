import styled from  'styled-components';
import {colors, mediaQueries, utilies } from '../../styledUtilies/utilesVariables';


export const AfterImgEffect = styled.div`
    position: relative;
    overflow: hidden;
    cursor:auto;
    img{
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 7px;
    }
    ${utilies.centrar}

    section{
        ${utilies.medidas(100, 100, '%')}
        ${utilies.centrar}
        text-align: center;
        position: absolute;
        top: 0;
        background-color: ${colors.primary(1)};
        transform: translateY(-1000px); 
        transition: all 0.7s ease;
        padding:10px;
        cursor:auto;
        font-weight: bold;
        font-size: 0.8em;
        
    }
    ${mediaQueries.small}{
        height: 250px;
        section{
            font-size: 1.1em;
        }
    }
    
    :hover{
        cursor: wait;
        opacity: 0.8;
        section{
            transform:translateY(0)
        }
    }
`