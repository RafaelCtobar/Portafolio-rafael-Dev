import useLanguage from '../../hooks/useLanguage';
import Button from '../button/button';
import LabelFloating from '../labelFloating/labelFloating';
import { ContainerLabel, FloatingLabel } from '../labelFloating/styles';
import { FormControlTextTarea, FormStyled, ImgStyled} from './styles';

export default function MyForm() {
    const {languageUse} = useLanguage();
    const {form} = languageUse;
 
    return (
        <FormStyled action="https://formsubmit.co/58fcef39605873a0f289b830ba299f77" method="POST" className='position-relative'>
            <LabelFloating className={'mb-3'} label={form[1]} type='text' name={'name'} />
            <LabelFloating className={'mb-4'} label={form[2]} type='email' name={'email'} />
            <ContainerLabel>
                <FormControlTextTarea required placeholder='Todos los detalles...' name='detail'></FormControlTextTarea>
                <FloatingLabel htmlFor='detail' id='label2'>{form[3]+'...'}</FloatingLabel>
            </ContainerLabel>

            <div className='d-flex justify-content-center m-2'>
                <Button className={'p-2 w-50'}>{form[4]}</Button>
            </div>
           
        </FormStyled>
    );
} 