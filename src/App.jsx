import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import './Components/Css/media.css'
import Footer from './Components/Footer/Footer';
import Partners from './Components/Partners/Partners';

function App() {
  return (
    <section className="App">
      <header className="App-header">
        <Navbar/>
      </header>

    <Routes>
      <Route index path='/' element={<Home/>}></Route>
      <Route index path='/partners' element={<Partners/>}></Route>
    </Routes>

    <Footer/>
    </section>
  );
}

export default App;
