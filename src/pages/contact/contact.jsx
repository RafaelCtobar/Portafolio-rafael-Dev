import MyForm from "../../components/form/form";
import QrCode from "../../components/qrcode/qrcode";
import { StyledContact, StyledH1 } from "./style";
import {motion} from 'framer-motion';
import useLanguage from "../../hooks/useLanguage";
import useSEO from "../../hooks/useSEO";

export default function Contact() {
    useSEO('Contact', 'Rafael Dev contact section')
    const {languageUse} = useLanguage();
    const {form} = languageUse;
    return (
        <StyledContact>
            <div className="row" id="container_row">
                <motion.section 
                className="col-12 col-lg-6"
                initial={{scale:0}}
                animate={{scale:0.9}}
                transition={{type:'spring', duration:0.5}}>
                    <QrCode />
                </motion.section>
                <motion.div 
                className="col-12 col-lg-6"
                initial={{y:-1000}}
                animate={{y:0}}
                transition={{type:'spring', duration:0.3, delay:0.2}}>
                    <StyledH1>
                        {form[0]}
                    </StyledH1>
                    <MyForm />
                </motion.div >
            </div>
        </StyledContact>
    );
}