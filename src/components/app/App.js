import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FirstScreen from "../FirstScreen";
import {Contacts, ForYourPleasure, MainPage, OurCoffee, ProductPage} from "../Pages"
import Footer from  "../Footer";

export default class App extends Component {
    state = {
        data: [
            {id: 1, name:"Solimo Coffee Beans", weight:"2", price:"10.73"},
            {id: 2, name:"Presto Coffee Beans", weight:"1", price:"15.99"},
            {id: 3, name:"AROMISTICO Coffee", weight:"1", price:"6.99"},
            {id: 4, name:"AROMISTICO Coffee", weight:"1", price:"6.99"},
            {id: 10, name:"AROMISTICO Coffee", weight:"1", country:"Brazil", price:"6.99"},
            {id: 11, name:"AROMISTICO Coffee", weight:"1", country:"Kenya", price:"6.99"},
            {id: 12, name:"AROMISTICO Coffee", weight:"1", country:"Columbia", price:"6.99"},
            {id: 13, name:"AROMISTICO Coffee", weight:"1", country:"Brazil", price:"6.99"},
            {id: 14, name:"AROMISTICO Coffee", weight:"1", country:"Brazil", price:"6.99"},
            {id: 15, name:"AROMISTICO Coffee", weight:"1", country:"Brazil", price:"6.99"},
            {id: 21, name:"Solimo Coffee Beans", weight:"2", country:"Brazil", price:"10.73"},
            {id: 22, name:"Presto Coffee Beans", weight:"1", country:"Brazil", price:"15.99"},
            {id: 23, name:"Solimo Coffee Beans", weight:"1", country:"Brazil", price:"6.99", imgSrc:"https://hhp-blog.s3.amazonaws.com/2018/07/iStock-673468996.jpg"},
            {id: 24, name:"Solimo Coffee Beans", weight:"2", country:"Brazil", price:"10.73"},
            {id: 25, name:"Solimo Coffee Beans", weight:"2", country:"Brazil", price:"10.73", imgSrc:"https://i0.wp.com/www.healthline.com/hlcmsresource/images/AN_images/AN275-cup-of-coffee-732x549-Thumb.jpg?w=756"},
            {id: 26, name:"Solimo Coffee Beans", weight:"2", country:"Brazil", price:"10.73"},
        ]
    }
  render() {
      let bestId = [1,2,3];
      let FYPId = [10,11,12,13,14,15];
      let regularId = [21,22,23,24,25,26];
      const searchItems = (obj, arr) => obj.filter(item => {
          if(arr.includes(item.id)){
              return item
          }
          return null
      })
      const bestItems = searchItems(this.state.data, bestId);
      const FYPItems = searchItems(this.state.data, FYPId);
      const regularItems = searchItems(this.state.data, regularId);
    return (
      <Router>
          <>
              <Switch>
                  <Route exact path="/" component={FirstScreen}/>
                  <Route path="/ourcoffee/" component={() =>  <FirstScreen heading="Our coffee"/>}/>
                  <Route path="/foryourpleasure/" component={() => <FirstScreen heading="For your pleasure"/>}/>
                  <Route path="/contacts/" component={() => <FirstScreen heading="Contact Us"/>}/>
              </Switch>
              <Switch>
                  <Route exact path="/" component={() => <MainPage data={bestItems}/>}/>
                  <Route exact path="/ourcoffee/" component={() => <OurCoffee data={regularItems}/>}/>
                  <Route exact path="/ourcoffee/:id" component={({match}) => {
                      const {id} = match.params;
                      return <ProductPage id={id} />
                  }}/>
                  <Route exact path="/foryourpleasure/" component={() => <ForYourPleasure data={FYPItems}/>}/>
                  <Route exact path="/contacts/" component={Contacts}/>
              </Switch>
              <Footer/>
          </>
      </Router>
    );
  }
}
