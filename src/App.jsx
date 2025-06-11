import Header from './component/header';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Tutor from './pages/Tutor';
import Download from './pages/Download';
import Footer from './component/footer';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/introduction" element={<Intro />}></Route>
          <Route path="/tutorial" element={<Tutor />}></Route>
          <Route path="/download" element={<Download />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
