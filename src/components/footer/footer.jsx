import SocialIcons from "../socialIcons/socialIcons";
import { FooterStyled } from "./style";
import { faLinkedin, faTwitter, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { gitHub, linkedin, twitter, whatsApp } from "../links";
import useLanguage from "../../hooks/useLanguage";

export default function Footer() {
    const icons = [faTwitter, faLinkedin, faGithub, faWhatsapp];
    const address = [twitter, linkedin, gitHub, whatsApp];
    const { languageUse } = useLanguage();
    const { footerContact } = languageUse;
    return (
        <FooterStyled className="text-white d-flex flex-column">
            <SocialIcons icons={icons} address={address} />
            <div className=" w-100 text-center ps-3">
                <p className="mt-4">
                    <FontAwesomeIcon icon={faEnvelope} /> {footerContact[1]} rafaelctobar569@gmail.com
                </p>
                <p className="m-4">
                    <FontAwesomeIcon icon={faPhone} /> {footerContact[0]} +57 3162724069
                </p>
                <p style={{opacity:0.8, fontSize: "0.9rem"}} className='m-4'>{footerContact[2]}</p>
            </div>
        </FooterStyled>
    );
}
