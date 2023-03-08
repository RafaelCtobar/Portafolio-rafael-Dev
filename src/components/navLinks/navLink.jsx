import { LinkStyled, NavLinkStyled } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function NavLink({ children, href, ico, img, className, menuState }) {
    const hrefs = {
        Home: "/",
        Skills: "/skills",
        Projects: "/projects",
        Contact: "/contact",
        Inicio: "/",
        Habilidades: "/skills",
        Proyectos: "/projects",
        Contacto: "/contact"
    } 
    return (
        <NavLinkStyled className={className} onClick = {menuState ? menuState : null}>
            <LinkStyled href={hrefs[href] || "/"} 
                className={`active text-white d-flex ${img ? null : "me-3 m-1"}`}
             >
                {ico ? 
                    <div className="m-2 me-3">
                        <FontAwesomeIcon icon = {ico}/>
                    </div>
                    : null
                }
                {children}
            </LinkStyled>
        </NavLinkStyled>
    );
}