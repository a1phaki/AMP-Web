import AboutANIA from '../component/AboutANIA';
import SystemArchitecture from '../component/SystemArchitecture';
import Performance from '../component/Performance';
import WelcomeBanner from '../component/WelcomeBanner';

export default function Intro() {
  return (
    <>
      <WelcomeBanner />
      <div className="container py-5">
        <div className="row mx-1 d-flex align-items-stretch">
          <div className="col-xl-6 col-12 d-flex flex-column">
            <AboutANIA />
          </div>
          <div className="col-xl-6 col-12 d-flex flex-column">
            <SystemArchitecture />
          </div>
        </div>
        <div className="row mx-1 mt-9">
          <div className="col">
            <Performance />
          </div>
        </div>
      </div>
    </>
  );
}
