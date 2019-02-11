import React, { Component } from "react";
import MainPage from "../Pages/MainPage"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from  "../Footer";
import OurCoffee from "../Pages/OurCoffee"
import FirstScreen from "../FirstScreen"

export default class App extends Component {
  render() {

    return (
      <Router>
          <>
              <Route path="/" component={FirstScreen}/>
              <Switch>
                  <Route exact path="/" component={MainPage}/>
                  <Route exact path="/ourcoffee/" component={OurCoffee}/>
                  <Route exact path="/foryourpleasure/" component={()=><h1>This is for your pleasure</h1>}/>
              </Switch>
              <Footer/>
          </>
      </Router>
    );
  }
}
