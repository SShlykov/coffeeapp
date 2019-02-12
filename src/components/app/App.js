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
            {id: 23, name:"Solimo Coffee Beans", weight:"1", country:"Columbia", price:"6.99", imgSrc:"https://hhp-blog.s3.amazonaws.com/2018/07/iStock-673468996.jpg"},
            {id: 24, name:"Solimo Coffee Beans", weight:"2", country:"Brazil", price:"10.73"},
            {id: 25, name:"Solimo Coffee Beans", weight:"2", country:"Brazil", price:"10.73", imgSrc:"https://i0.wp.com/www.healthline.com/hlcmsresource/images/AN_images/AN275-cup-of-coffee-732x549-Thumb.jpg?w=756"},
            {id: 26, name:"Solimo Coffee Beans", weight:"2", country:"Brazil", price:"10.73"},
        ],
        term: "",
        filter: ""
    };
    onType = e => {
        const term = e.target.value;
        this.setState({term});
        this.onSearchChange(term, e);
    };
    search = (arr, term) => {
        if(term.length === 0){
            return arr;
        }
        return arr.filter(item => {
            return item.name.toLowerCase().indexOf(term.toLowerCase())>-1;
        });
    };
    filter(items, filter) {
        switch (filter) {
            case "Brazil":
                return items.filter(item => item.country === "Brazil");
            case "Kenya":
                return items.filter(item => item.country === "Kenya");
            case "Columbia":
                return items.filter(item => item.country === "Columbia");
            default:
                return items;
        }
    }
    onSearchChange = (term) => {
        this.setState({ term });
    };
    onFilterChange = filter => {
        this.setState({ filter });
    };
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
      const {data, term, filter} = this.state;
      const visibleData = this.filter(this.search(data, term), filter);
      const bestItems = searchItems(visibleData, bestId);
      const FYPItems = searchItems(visibleData, FYPId);
      const regularItems = searchItems(visibleData, regularId);
    return (
      <Router>
          <>
              <input onChange={this.onType} value={this.state.term}/>
              <Switch>
                  <Route exact path="/" component={FirstScreen}/>
                  <Route path="/ourcoffee/" component={() =>  <FirstScreen heading="Our coffee"/>}/>
                  <Route path="/foryourpleasure/" component={() => <FirstScreen heading="For your pleasure"/>}/>
                  <Route path="/contacts/" component={() => <FirstScreen heading="Contact Us"/>}/>
              </Switch>
                  <Route exact path="/" component={() => <MainPage data={bestItems}/>}/>
                  <Route exact path="/ourcoffee/" component={() => <OurCoffee
                                                                        data={regularItems}
                                                                        filter={filter}
                                                                        onFilterChange={this.onFilterChange}
                                                                        onSearchChange={this.onSearchChange}
                                                                    />}/>
                  <Route exact path="/ourcoffee/:id" component={({match}) => {
                      const {id} = match.params;
                      return <ProductPage id={id} />
                  }}/>
                  <Route exact path="/foryourpleasure/" component={() => <ForYourPleasure data={FYPItems}/>}/>
                  <Route exact path="/contacts/" component={Contacts}/>
              <Footer/>
          </>
      </Router>
    );
  }
}
