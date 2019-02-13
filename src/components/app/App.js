import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FirstScreen from "../FirstScreen";
import {Contacts, ForYourPleasure, MainPage, OurCoffee, ProductPage} from "../Pages"
import Footer from  "../Footer";
import cDataService from "../../services/cDataService"

export default class App extends Component {
    state = {
        coffeeData: [],
        best: [],
        goods:[],
        term: "",
        filter: ""
    };
    cDataService = new cDataService();
    componentDidMount() {
        let service = this.cDataService;
        service.getAllBestsellers()
            .then((items) => {this.setState({best: items})})
        service.getAllCoffee()
            .then((items) => {this.setState({coffeeData: items})})
        service.getAllGoods()
            .then((items) => {this.setState({goods: items})})
    }
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
    filter = (items, filter) => {
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
      const filterForMe = (data, filter, term) => {
          return this.filter(this.search(data, term), filter)
      }
      const {coffeeData, best, goods, term, filter} = this.state;
      const bestItems = filterForMe(best, filter, term);
      const FYPItems = filterForMe(goods, filter, term);
      const regularItems = filterForMe(coffeeData, filter, term);
      console.log(this.state.data);
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
