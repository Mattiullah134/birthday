import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import FrontPage from './component/FrontPage';
import Images from './component/Images';
import NavBar from './component/NavBar';
import Videos from './component/Videos';
import Music from './component/bg-tune.mp3';
import { useEffect, useState } from 'react';
const sound = new Audio(Music);
function App() {
  const [backChange, setBackChange] = useState(false);
  useEffect(() => {

    setTimeout(() => {

      setBackChange(true);
      // sound.play();
      console.log('main run hova hoon')
    }, 3000);
    setTimeout(() => {
      // sound.pause();

      setBackChange(false);
      console.log('main run hova hoon')
    }, 9000);
  }, [])
  return (
    <BrowserRouter>
      <div className="app" >
        <NavBar />
        <Routes>
          <Route exat path='/' element={<FrontPage backChange={backChange} />} />
          <Route exat path='/image' element={<Images />} />
          <Route exat path='/video' element={<Videos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
