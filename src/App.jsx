import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./Components/Css/media.css";
import Footer from "./Components/Footer/Footer";
import Partners from "./Components/Partners/Partners";
import { useState } from "react";
import Newbar from "./Components/News/Newbar";
import Maintenance from "./Components/Maintenance/Maintenance";

function App() {
  const [accounts, setAccounts] = useState([]);
  return (
    <section className="App">
      <header className="App-header">
        <Newbar/>
        <Navbar accounts={accounts} setAccount={setAccounts} />
      </header>

      <Routes>
        {/*<Route
          index
          path="/"
          element={<Maintenance/>}
  ></Route>*/}
        {<Route
          index
          path="/"
          element={<Home accounts={accounts} setAccount={setAccounts} />}
  ></Route>}
        <Route index path="/partners" element={<Partners />}></Route>
        <Route index path="/roadmap" element={<Maintenance />}></Route>
        <Route index path="/merch" element={<Maintenance />}></Route>
        <Route index path="/blog" element={<Maintenance />}></Route>
        <Route index path="/mec" element={<Maintenance />}></Route>
        
      </Routes>

      <Footer />
    </section>
  );
}

export default App;
