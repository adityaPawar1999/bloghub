import { Route, Routes } from 'react-router-dom';

import style from './app.module.css'

import Navbar from './components/navbar2/Navbar';
import Homepage from './pages/homepage/Homepage';
import Post from './pages/posts/Post'
import Navbar1 from './components/navbar1/Navbar1';
import Footer from './components/footer/Footer';
import Create from './pages/create/Create';
import Login from './pages/login/Login';

function App() {
  return (
    <>
      <Navbar1 />
      <div className={style.global}>
        <div className='container'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/post' element={<Post />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </div>
        <br/>
        <Footer />
      </div>
    </>
  );
}

export default App;
