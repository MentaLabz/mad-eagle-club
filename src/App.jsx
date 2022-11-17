import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import './Components/Css/media.css'
import Footer from './Components/Footer/Footer';
import Partners from './Components/Partners/Partners';
import { useState } from 'react';

function App() {

  const [accounts, setAccounts] = useState([]);
  return (
    <section className="App">
      <header className="App-header">
        <Navbar accounts={accounts} setAccount={setAccounts} />
      </header>

    <Routes>
      <Route index path='/' element={<Home accounts={accounts} setAccount={setAccounts} />}></Route>
      <Route index path='/partners' element={<Partners/>}></Route>
    </Routes>

    <Footer/>
    </section>
  );
}

export default App;
