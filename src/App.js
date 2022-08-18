import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar1 from "./components/Navbar/Navbar1";
import Italian from "./components/Cusines/Italian/Italian";
import SingleItalian from "./components/Cusines/Italian/SingleItalian";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import AddForm from "./components/Add/AddForm";
import {
  CountryProvider,
  CountryContext,
} from "./components/context/CountryContext";
import React, { useContext, useEffect } from "react";

function App() {
  return (
    <>
      <CountryProvider>
        <div className="App">
          {/* <Navbar1 /> */}
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/italian">
                <Italian />
              </Route>
              <Route exact path="/indian">
                <Italian />
              </Route>
              <Route exact path="/mexican">
                <Italian />
              </Route>
              <Route exact path="/turkish">
                <Italian />
              </Route>
              <Route exact path="/american">
                <Italian />
              </Route>
              <Route exact path="/korean">
                <Italian />
              </Route>
              <Route exact path="/french">
                <Italian />
              </Route>

              <Route exact path="/italian/:id">
                <SingleItalian />
              </Route>
              <Route exact path="/indian/:id">
                <SingleItalian />
              </Route>
              <Route exact path="/mexican/:id">
                <SingleItalian />
              </Route>
              <Route exact path="/turkish/:id">
                <SingleItalian />
              </Route>
              <Route exact path="/american/:id">
                <SingleItalian />
              </Route>
              <Route exact path="/korean/:id">
                <SingleItalian />
              </Route>
              <Route exact path="/french/:id">
                <SingleItalian />
              </Route>

              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/addItalian">
                <AddForm />
              </Route>
            </Switch>
          </Router>
        </div>
      </CountryProvider>
    </>
  );
}

export default App;
