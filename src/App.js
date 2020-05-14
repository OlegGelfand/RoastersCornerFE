import React from "react";
import "./App.css";
import Main from "./components/Main";
import Coffee from "./components/Coffee";
import Roasters from "./components/Roasters";
import RoastersPage from "./components/RoastersPage";
import Footer from "./components/Footer";
import CoffeePage from "./components/CoffeePage";
import Feedback from "./components/Feedback";
import RoasterInfo from "./components/RoasterInfo";
import { Switch, Route } from "react-router";
import {  BreakpointProvider } from "react-socks";
function App() {
  return (
    <div className="App">
      <BreakpointProvider>
        <Switch>
          <Route exact={true} path="/" component={Main} />
          <Route exact path="/roasters" component={Roasters} />
          <Route exact path="/roasters/:companyName" component={RoasterInfo} />
          <Route exact path="/coffees" component={Coffee} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/coffeePage" component={CoffeePage} />
          <Route exact path="/roastersPage" component={RoastersPage} />
          <Route exact path="/feedback" component={Feedback}/>
        </Switch>
      </BreakpointProvider>
    </div>
  );
}

export default App;
