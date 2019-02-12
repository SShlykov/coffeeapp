import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FirstScreen from "../FirstScreen";
import {Contacts, ForYourPleasure, MainPage, OurCoffee, ProductPage} from "../Pages"
import Footer from  "../Footer";

export default class App extends Component {
  render() {

    return (
      <Router>
          <>
              <Switch>
                  <Route exact path="/" component={FirstScreen}/>
                  <Route exact path="/ourcoffee" component={() => {return <FirstScreen heading="Our coffee"/>}}/>
                  <Route exact path="/foryourpleasure" component={() => {return <FirstScreen heading="For your pleasure"/>}}/>
                  <Route exact path="/contacts" component={() => {return <FirstScreen heading="Contact Us"/>}}/>
                  <Route exact path="/ourcoffee/:id" component={() => {return <FirstScreen heading="Our coffee"/>}}/>
              </Switch>
              <Switch>
                  <Route exact path="/" component={MainPage}/>
                  <Route exact path="/ourcoffee/" component={OurCoffee}/>
                  <Route exact path="/ourcoffee/:id" component={ProductPage}/>
                  <Route exact path="/foryourpleasure/" component={ForYourPleasure}/>
                  <Route exact path="/contacts/" component={Contacts}/>
              </Switch>
              <Footer/>
          </>
      </Router>
    );
  }
}
