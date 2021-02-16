import './App.css';
import { Fragment } from 'react';

function App() {
  const windows = window.innerWidth;
  if (windows > 767) {
    return (
      <div className="desktop">
      <h1>App disponivel apenas para celulares.</h1>
    </div>
    );
  } else {
    return (
      <div className="mobile">
        <h1>App Kodokan</h1>
      </div>
    );
  };
}

export default App;
