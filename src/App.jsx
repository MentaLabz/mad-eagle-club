import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import './Components/Css/media.css'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>

    <Routes>
      <Route index path='/' element={<Home/>}></Route>
    </Routes>

    <Footer/>
    </div>
  );
}

export default App;
