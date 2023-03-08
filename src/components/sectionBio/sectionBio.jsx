import {faArrowTurnUp} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useLanguage from "../../hooks/useLanguage";
import {StrongStyled, SectionStyled} from "./style"
export default function SectionBio(){
    const {languageUse} = useLanguage();
    const {bio} = languageUse;
    return(
        <SectionStyled className="text-white fw-bold mb-2 lh-base ">
              {bio}
                <StrongStyled >
                  navbar
                </StrongStyled>
             
              {<FontAwesomeIcon 
                className="ms-2 border rounded-circle p-1 pe-2 ps-2" 
                icon={faArrowTurnUp}
                />}.
        </SectionStyled>
    );
}