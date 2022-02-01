import './App.css';
import {Header} from './layout/Header'
import {Footer} from './layout/Footer'
import {Main} from "./layout/Main";

function App() {
    // const [counter, serCounter] = useState(0);

    return (
        <div className="App">
            <Header/>
            <Main/>
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
