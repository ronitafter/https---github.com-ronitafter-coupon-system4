import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {TestComp1} from './components/TestComp1'
import {Header} from './layout/Header'
import {Footer} from './layout/Footer'
import { Routes, Route, Link } from "react-router-dom";
import Home from './layout/Home/Home';
import About from './layout/About/About';
import Coupons from './layout/Coupons/Coupons';
import Login from './layout/Login/Login';





function App() {
  // const [counter, serCounter] = useState(0);

  return (
    <div className="App">
    <Home/>
    <About/>
    <Coupons/>
    <Header/>
    <Login/>
    <main>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coupons" element={<Coupons />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
    <Footer/>
      {/* <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // <h1>counter = {counter}</h1>
      // <button onClick={() => serCounter(counter + 1)}>+</button>
      //  <button onClick={() => serCounter(counter - 1)}>-</button>

      //  <TestComp1 counter={counter} />
  // </header>*/}
    </div>
  );
}

export default App;
