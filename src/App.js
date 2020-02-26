import React from 'react';
// Agregamos elementos de react router
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExercicesContainer from './pages/ExercicesContainer';
import ExercicesNewContainer from './pages/ExercicesNewContainer';
import NotFound from './pages/NotFound.js'

const App = () => {
  return (
    // creamos las rutas del proyecto y mandan a llamar sus componentes
    <BrowserRouter>
      <Switch>
        <Route exact path="/exercice" component={ExercicesContainer}/>
        <Route exact path="/exercice/new" component={ExercicesNewContainer}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
