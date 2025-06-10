import Header from './component/header';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Tutor from './pages/Tutor';
import Download from './pages/Download';
import Result from './pages/Result';

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
          <Route path="/:id" element={<Result />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
