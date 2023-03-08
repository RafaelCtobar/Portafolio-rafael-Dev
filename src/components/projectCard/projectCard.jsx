import Card from 'react-bootstrap/Card';
import Button from '../button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { AfterImgEffect } from './style';

export default function ProjectCard({ img, title, href, afterContent }) {
    return (

        <div className="col-12 col-md-6 col-xl-4 d-flex justify-content-center aling-items-center">
            <div className='m-2 bg-transparent p-2 text-white shadow-none ' 
            style={{ maxWidth: '400px'}}>


                <AfterImgEffect afterContent={'Contenido del after'}>
                    <img  src={img} alt={title}/>
                    <section>
                        {afterContent}
                    </section>
                </AfterImgEffect>

                <Card.Body className='text-center d-flex flex-column align-items-center'>
                    <Card.Title className='mt-3'>{title}</Card.Title>

                    <a href={href} target='_blank' style={{ textDecoration: 'none' }} >
                        <Button className={' m-2 me-3 ms-3 mt-4 text-center'}>
                            <div className='m-1'>Link</div>
                            <span className='m-1'>
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            </span>
                        </Button>
                    </a>
                </Card.Body>
            </div>

        </div>
    );
}
