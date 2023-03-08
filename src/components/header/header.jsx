import BarsIcon from "../barsIcon/barsIcon";
import Menu from "../menu/menu";
import { DivStyled, HeaderStyled, MyNav } from "./styles";
import NavLink from "../navLinks/navLink";
import Button from "../button/button";
import Switch from "../switch/Switch";
import useLanguage from "../../hooks/useLanguage";

export default function Header() {
    const {languageUse, menuState, setLanguage,setMenuState, handleClick, anotation}  = useLanguage();   
    const {menuItems} = languageUse;
    return (
        <>
            <Menu open={menuState} />
            <HeaderStyled>
                <DivStyled>
                    <div className="d-flex align-items-center">
                        <NavLink href={`${menuItems[0]}`} img={true}>
                            <img
                                onClick={()=> setMenuState(false)} 
                                src="https://i.postimg.cc/J0hM9XgR/logo.png" 
                                alt="Logo de Rafael Dev" 
                                style={{ maxWidth: "100px"}} 
                            />
                        </NavLink>
                        <div className="d-flex bg-transparent align-items-center ">
                            <Switch size={"medium"} setState={setLanguage}/>
                            <h4 className="m-0 ms-2">{anotation}</h4>
                        </div>
                    </div>
                    <BarsIcon handleClick={handleClick} open={menuState} />
                    <MyNav
                        className="ms-auto my-2"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        {
                            menuItems
                            .slice(0,3)
                            .map(link=> 
                                <NavLink key={link} 
                                         href={link}>
                                    {link}
                                </NavLink>)
                        }
                        <Button href={"contact"}>{menuItems[3]}</Button>
                    </MyNav>
                </DivStyled>
            </HeaderStyled>
        </>

    );
}