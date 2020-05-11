import React from "react";
import './App.css';
import Main from './components/Main';
import Coffee from './components/Coffee';
import Roasters from './components/Roasters';
import RoastersPage from './components/RoastersPage';
import { Switch, Route } from "react-router";
function App() {
  return (
    <div className="App">
     
        <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route exact path="/roasters" component={Roasters} />
        <Route exact path="/coffees" component={Coffee} />
        <Route exact path="/coffees" component={Coffee} />
        <Route exact path="/roastersPage" component={RoastersPage} />
        



      </Switch>
    </div>
   
  );
}

export default App;
