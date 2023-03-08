import styled from 'styled-components';
import { colors, mediaQueries } from '../../styledUtilies/utilesVariables';

export const ContainerLabel = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    font-size: 0.9em;
    position: relative;
    ${mediaQueries.small}{
        font-size: 1em;
    }
`
export const FloatingLabel = styled.label`
    display: block;
    z-index: -1;
    margin: 0;
    margin-top: 10px;
    left: 5px;
    position: absolute;
    transform-origin: 0 0;
    transition: all 0.3s ease;
    color: white;
    font-weight: bold;
    font-size: 1.2em;

`
export const FormControlInput = styled.input`
    background-color: transparent;
    box-sizing: none;
    outline: none;
    border-style: none none solid none;
    padding: 20px 20px 0px 0px;
    width: 99%;
    transition: all 0.2s;
    border-bottom: 2px solid gray;
    color: transparent;
    ::placeholder{
        color: transparent;
    }
    :focus, :not(:placeholder-shown){
        border-bottom: 2px solid ${colors.secondary(1)};
        color: white;
        + #label{
            transform: translateY(-10px) translateX(-2px) scale(0.8);
            opacity: 0.6;
        }
    }
    
`