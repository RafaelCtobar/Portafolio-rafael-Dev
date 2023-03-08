import { H1styled, MainStyled, NameStyled } from "./style";
import useLanguage from "../../hooks/useLanguage";
import Typewriter from "../typewriter/typewriter";
import Button from "../button/button"
import SectionBio from "../sectionBio/sectionBio";


export default function Main() {
    const { languageUse } = useLanguage();
    const { title, button } = languageUse;
    const arrayTitle = title.split(" ");
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/16G3MY9fUu7RrtfH7lOeKlWFHKaoTJ5KD/view?usp=sharing";
    link.target = "_blank"
    const handleClick = () => {
        link.click();
    }
    return (
        <MainStyled className="text-white pt-4 ps-1 ">
            <h2 style={{ fontSize: "2.3rem" }}>{arrayTitle[0]} <br /></h2>
            <H1styled >
               
                    {
                        arrayTitle[1] == "Mellamo" ? "Me llamo" : arrayTitle[1]
                    }
               
                <NameStyled className="d-flex flex-wrap">
                    <div className="text-white me-3">
                        {arrayTitle[2]}
                    </div>
                    {arrayTitle[3]}
                </NameStyled>
                {`${arrayTitle[4]} ${arrayTitle[5]}`}
            </H1styled>
            <Typewriter />
            <SectionBio/>
            <Button className="p-3 pe-5 ps-5 mt-3" onClick={handleClick}>
                {button}
            </Button>
        </MainStyled>
    );
}