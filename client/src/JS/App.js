import React from 'react';
import '../CSS/App.css';
import '../CSS/logo.css'
import '../CSS/post-container.css'
import '../CSS/footer.css'
import About from './About';
import Header from './Header'
import Portfolio from './Portfolio'
import Footer from './Footer'
import { Switch, Route } from 'react-router-dom'
import Poster from '../Images/poster.svg'

function App() {
  

  return (
    <div id="mainContainer">
      
        <Header />

      <section id="content">
        <Switch>
          <Route exact path={'/'}>
            <Home />
          </Route>
          <Route path={'/about'} component={About} />
          <Route path={'/portfolio'} component={Portfolio} />
        </Switch>
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

function Home(props) {
  return (
    <div className="App">

      <div id="poster-container">
        <img id="poster" src={Poster} alt="poster"></img>
      </div>

    </div>
  )
}

export default App;

