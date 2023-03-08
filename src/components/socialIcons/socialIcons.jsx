import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIconsStyled } from "./style";

export default function SocialIcons({ icons, address }) {
    return (
        <div style={{ fontSize: "1.7rem", width:'70%',}} className="mt-2 d-flex justify-content-between ">
            {
                icons.map((icon, index) => {
                    return (
                    <SocialIconsStyled 
                        href={address[index]} 
                        key={index} 
                        target="_blank" 
                        className="p-2 text-white"
                        aria-label="Follow me for more information">
                        <FontAwesomeIcon icon={icon} />
                    </SocialIconsStyled>
                    )
                })
            }
        </div>
    );
}