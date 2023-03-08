import { SkillStyled } from "./style";
import { motion,  } from "framer-motion";
import { faCode, faGlobe, faVialCircleCheck  } from "@fortawesome/free-solid-svg-icons"
import skillData from "../../components/dataSkills.json"
import TitleSkills from "../../components/titleSkills";
import useLanguage from "../../hooks/useLanguage";
import SectionSkills from "../../components/sectionSkills/sectionSkills";
import useSEO from "../../hooks/useSEO";

export default function Skills() {
    useSEO('Skills', 'Rafael Dev skills section');
    const { languageUse } = useLanguage();
    const { menuItems, insideTitle } = languageUse;
    const { frontEnd, otherSkills, testing } = skillData;
    
    const frontArray = [
        frontEnd.basic,
        frontEnd.cssTools,
        frontEnd.libraries
    ]

    return (
        <SkillStyled className="text-white ps-1 ">
            <div className="mt-4">
                <motion.h1 className="text-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, type: "spring" }}>
                    {menuItems[1].toUpperCase()}
                </motion.h1>

                <motion.section className="h-100 p-3"
                    initial={{ y: 2000 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.4, type: "spring", delay: 0.1 }}>
                    <TitleSkills icon={faCode}>Front-End</TitleSkills>
                    <div className="row">
                        {insideTitle.map((element, index) => {
                            return (
                                <SectionSkills
                                    key={index}
                                    title={element}
                                    arrayToUse={frontArray[index]} />
                            );
                        })}
                    </div>
                    <TitleSkills icon={faGlobe}>
                        {
                            menuItems[1][0] == "S" ? "Other skills" : "Otras habilidades"
                        }
                    </TitleSkills>
                    <motion.div className="row"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, type: "spring" }}>
                        
                        <SectionSkills 
                            direction="row" 
                            arrayToUse={otherSkills} />

                    </motion.div>

                    <TitleSkills 
                        icon={faVialCircleCheck}
                        className='mt-4'>
                        Testing
                    </TitleSkills>

                    <motion.div className="row"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, type: "spring" }}>
                        
                        <SectionSkills 
                            direction="row" 
                            arrayToUse={testing} />

                    </motion.div>
                </motion.section>
            </div>

        </SkillStyled>
    );
}

