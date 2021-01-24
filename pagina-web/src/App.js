import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Cabecera from './components/Cabecera/Cabecera'
import Home from './components/Pages/Home/Home'
import About from './components/Pages/About/About'
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'
import Proyectos from './components/Pages/Proyectos/Proyectos'


const App = () => {
  return (

    <Router>
      <div className="main">
        {/* <Cabecera /> */}

        <Cabecera />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Chat1' component={Chat} />
          <Route exact path='/Chat' component={Join} />
          <Route exact path='/Proyect' component={Proyectos} />
          <Route exact path='/About' component={About} />

        </Switch>



      </div>

    </Router>

  );
}

export default App;
