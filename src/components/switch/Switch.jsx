import useLanguage from '../../hooks/useLanguage';
import {  SwitchStyled } from './style';

export default function Switch({color, size, setState}){
    const {languageState} = useLanguage();
    const handleChange = e =>{
        setState(e.target.checked)
    }
    return(
       <SwitchStyled color={color} size={size}>
            <input 
            type="checkbox" 
            id='switch' 
            onChange={handleChange}
            checked={languageState}/>
            <label htmlFor="switch"></label>
       </SwitchStyled>
    );
}