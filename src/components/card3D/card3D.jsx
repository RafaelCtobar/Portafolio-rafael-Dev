import useLanguage from "../../hooks/useLanguage";
import { Card } from "./style";

export default function Card3D({img, title, content}){
    const {languageUse} = useLanguage();
    const {skillTargetSectionTitle} = languageUse;
    const contentToUse = content.split(",");
    
    return(
        <Card.father>
            <Card.card title = {title}>
                <Card.front>
                    <Card.frontBody>
                        <img loading="lazy" src={img} alt={title} 
                        className="w-100 h-100" style={{objectFit:'contain'}}/>
                    </Card.frontBody>
                </Card.front>


                <Card.back>
                    <Card.backBody>
                        <p className="fw-bold text-start ms-2 fs-5">
                            {skillTargetSectionTitle} 
                        </p>
                        <div>{
                                contentToUse.map(content=>{
                                    return <p key={Math.random()} className="m-1 p-0 text-start w-100">{content.trim()}</p>
                                })
                            }</div>
                    </Card.backBody>
                </Card.back>
            </Card.card>
            <h2>{title}</h2>
        </Card.father>
    );
}