import { MenuStyled } from './style';
import { motion } from "framer-motion"
import { variantsMenu } from '../../styledUtilies/utiliesFramerVariants';
import Nav from 'react-bootstrap/Nav';
import NavLink from '../navLinks/navLink';
import useLanguage from '../../hooks/useLanguage';

const MenuMotion = motion(MenuStyled);

export default function Menu({ open }) {
    const {languageUse, setMenuState} = useLanguage();
    const {menuItems, icons} = languageUse;
    return (
        <div id='menu' >
            <MenuMotion
                initial={{ y: -1000 }}
                animate={open ? "open" : "close"}
                variants={variantsMenu}>
                <nav className='text-white mt-3'>
                    <Nav className="d-flex flex-column m-0" >
                        {menuItems.map((link, index) => {
                            return <NavLink 
                            menuState={()=>setMenuState(false)}
                            href={link} 
                            key={index} 
                            ico={icons[index]}>
                                {link}
                            </NavLink>
                        })}
                    </Nav>
                </nav>
            </MenuMotion>
           
        </div>
    );
}

