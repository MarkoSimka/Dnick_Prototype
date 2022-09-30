import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Novosti";
import Products from "./components/pages/Covid-Test";
import Calendar from "./components/Calendar";
import Novosti2 from "./components/Novosti2";
import Login from "./components/Login";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Navbar>
            <Route path="/login" component={Login} />
            <Route path="/" exact component={Home} />
            <Route path="/novosti" component={Services} />
            <Route path="/novosti-rezulat" component={Novosti2} />
            <Route path="/covid-test" component={Products} />
            <Route path="/calendar" component={Calendar} />
          </Navbar>
        </Switch>
      </Router>
    </>
  );
}

export default App;
