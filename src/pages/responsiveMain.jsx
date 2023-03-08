import Ilustration from '../components/ilustration/ilustration';
import SVG from "../imgs/ilustration2.svg"
import Main from '../components/main/main';

export default function ResponsiveMain() {
    return (
        <main className="container-fluid">
            <div className="row" >
                <div className="col-12 col-lg-6">
                    <Main/>
                </div>
                <div className="col-12 col-lg-6">
                    <Ilustration src={SVG}/>
                </div>
            </div>
        </main>
    );
}