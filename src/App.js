import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Branca from './pages/FaixaBranca';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/About" component={ About } />
          <Route path="/faixabranca" component={ Branca } />
        </Switch>
    );
}

export default App;
