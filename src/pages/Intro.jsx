import AboutANIA from "../component/AboutANIA";
import Workflow from "../component/WorkFlow";
import Performance from "../component/Performance";

export default function Intro(){
    return <>
        <div className='container py-5 bg-success'>
            <div className="row mx-1 d-flex align-items-stretch">
                <div className="col-6 d-flex flex-column">
                    <AboutANIA/>
                </div>
                <div className="col-6 d-flex flex-column">
                    <Workflow/>
                </div>
            </div>
                <div className="row mx-1 mt-9">
                    <div className="col">
                        <Performance/>
                    </div>
                </div>                
        </div>
    </>
}