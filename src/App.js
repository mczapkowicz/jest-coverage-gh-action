import logo from './logo.svg';
import './App.css';
import {Component} from "./Component";
import {Component2} from "./Component2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a>
          Learn preactas
        </a>
      </header>
      <Component test="a"/>
      <Component2 test="a"/>
    </div>
  );
}

export default App;
