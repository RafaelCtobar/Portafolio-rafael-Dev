import { Link } from "wouter";
import { ButtonStyles } from "./style";
export default function Button({ children, href, className, onClick }) {

    return (
        <>
            {href  ?
                <Link href={`#/${href}`} className={className}>
                    < ButtonStyles >
                        {children}
                    </ButtonStyles >
                </Link> :
                < ButtonStyles onClick={onClick} className={className}>
                    {children}
                </ButtonStyles >
            }
            
        </>

    );
}