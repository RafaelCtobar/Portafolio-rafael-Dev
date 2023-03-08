import Card3D from "../card3D/card3D";
import { SectionSkillStyled } from "./style";
import useLanguage from "../../hooks/useLanguage";

export default function SectionSkills({title, arrayToUse, direction = "column"}){
    const {anotation} = useLanguage();
    return (
        <>
        <div className={`col-12 ${direction != "column" ? "" : "col-lg-4"}`}>
            <SectionSkillStyled 
            className={`shadow-lg mt-5 
                    ${direction != "column" ? " w-100 flex-row flex-wrap justify-content-evenly align-items-center"
                     : 
                    "flex-column"}`}>
               {direction == "column" && <h3>{title}</h3>}
                {
                    arrayToUse.map((dato, index)=>{
                        return (
                            <Card3D key={index}
                            img={dato.img}
                            title={dato.title}
                            content={anotation == "ES" ? dato.conocimiento : dato.knowledge}
                            />
                        );
                    })
                }
            </SectionSkillStyled>
        </div>
        </>
    );
}