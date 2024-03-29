import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from "./components/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home compiler="typescript" framework="react" location="42 campus" />
      </header>
    </div>
  );
}

export default App;
