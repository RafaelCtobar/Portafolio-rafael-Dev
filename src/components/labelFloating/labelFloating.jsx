import { FormControlInput, FloatingLabel, ContainerLabel } from "./styles";

export default function LabelFloating({className, label, type, style, name}) {
    return (
        <ContainerLabel className={` ${className}`} style={style}>
                <FormControlInput required autoComplete="off" type={type} name={name} placeholder="Placeholder" />
                <FloatingLabel htmlFor={name} id='label' >{label}</FloatingLabel>
        </ContainerLabel>
    );
}