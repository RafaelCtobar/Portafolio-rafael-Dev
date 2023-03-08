import { Bars, ConteinerBars } from "./style";

export default function BarsIcon({open, handleClick}) {
    return (
        <ConteinerBars onClick={handleClick}>
            <Bars state={open}/>
        </ConteinerBars>
    );
}