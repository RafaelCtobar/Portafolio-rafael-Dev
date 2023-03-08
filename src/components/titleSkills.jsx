import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../styledUtilies/utilesVariables";

export default function TitleSkills({children, icon, className}) {
    return (
        <div className={`w-100 pt-4 ${className}`} style={{borderBottom: "3px solid white"}}>
            <div className="d-flex justify-content-center pb-3">
                <h2>{children}</h2>
                <div className="h-100  ms-3 fs-4" style={{ color: colors.secondary(1) }}>
                    <FontAwesomeIcon icon={icon} />
                </div>
            </div>
        </div>
    );
}