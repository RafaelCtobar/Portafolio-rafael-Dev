import { StyledQR } from "./style";
import { whatsApp } from "../links";
export default function QrCode(){
    return(
        <StyledQR href={whatsApp} target='_blank'>
            <img src='https://i.postimg.cc/MZC8zJbW/qr.png' alt="QR code for whatsapp" className='w-100'/>
        </StyledQR>
    );
}