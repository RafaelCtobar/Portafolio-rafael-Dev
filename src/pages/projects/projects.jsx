import ProjectCard from "../../components/projectCard/projectCard";
import { StyledProjects } from "./style";
import { motion } from 'framer-motion';
import useLanguage from "../../hooks/useLanguage";
import projectData from '../../components/dataProjects.json';
import useSEO from "../../hooks/useSEO";


export default function Projects() {
    useSEO('Projects', 'Rafael Dev projects section')
    const { languageUse } = useLanguage();
    const { menuItems } = languageUse;
    const {projects} = projectData;
    return (
        <StyledProjects>
            <div className="text-center mt-4">
                <motion.h1 initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, type: "spring" }}>
                    {menuItems[2]}
                </motion.h1>
            </div>

            <motion.div className="d-flex justify-content-center aling-items-center mt-4 me-4"
                initial={{x:2000}}
                animate={{x:0}}
                transition={{delay:0.1, type:'spring', duration:0.3}}
                >

                <div className="container ">
                    <div className="row ">
                        {
                            projects.map(project=>{
                                return (
                                    <ProjectCard
                                        key={Math.random()} 
                                        img={project.img}
                                        title={
                                            menuItems[2] == 'Proyectos' ? project.title : project.titulo
                                        }
                                        href={project.href}
                                        afterContent={
                                            menuItems[2] == 'Proyectos' ? project.contenidoAntes : project.afterContent
                                        }
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            </motion.div>


        </StyledProjects>
    )
} 
