import React from 'react';
import './App.css';
import About from './About';
import Header from './Header'
import Portfolio from './Portfolio'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div id="body">
    <Header />
    <Switch>
      <Route exact path={'/'} compnent={Home} />
      <Route path={'./about'} component={About} />
      <Route path={'./portfolio'} component={Portfolio} />
    </Switch>
    </div>
  );
}

function Home(props) {
  return(
    <div className="App">
      <h1>Hello portfolio!</h1>
    </div>
  )
}

export default App;

