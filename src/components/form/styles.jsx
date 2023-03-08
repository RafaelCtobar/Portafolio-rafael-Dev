import styled from 'styled-components';
import { colors } from '../../styledUtilies/utilesVariables';

export const FormStyled = styled.form`
    width: 100%;
    #label2{
        margin: 0;
    }
  
`
export const FormControlTextTarea = styled.textarea`
    background-color: transparent;
    resize: none;
    height: 350px;
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
        + #label2{
            transform: translateY(-10px) translateX(-2px) scale(0.8);
            opacity: 0.6;
        }
    }
    
`
export const ImgStyled = styled.div`
    position: absolute;
    bottom: 50px;
    right: 0px;
    width: 40%;

`
