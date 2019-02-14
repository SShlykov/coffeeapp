import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FirstScreen from "../FirstScreen";
import {Contacts, ForYourPleasure, MainPage, OurCoffee, ErrorCatcher} from "../Pages"
import Footer from  "../Footer";
import cDataService from "../../services/cDataService";
import ErrorMessage from "../ErrorMessage";

export default class App extends Component {
    state = {
        coffeeData: [],
        best: [],
        goods:[],
        term: "",
        filter: "",
        error: false,
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
    componentDidCatch(error) {
        this.setState({
            error: error.name||error.message
        })
    }

    onType = e => {
        e.preventDefault();
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
      const filterForMe = (data, filter, term) => this.filter(this.search(data, term), filter);
      const {coffeeData, best, goods, term, filter} = this.state;
      const regularItems = filterForMe(coffeeData, filter, term);
      if (this.state.error){
          return <ErrorMessage error={this.state.error}/>
      }
    return (
      <Router>
          <>
              <Switch>
                  <Route exact path="/" component={FirstScreen}/>
                  <Route path="/ourcoffee/" component={() =>  <FirstScreen heading="Our coffee"/>}/>
                  <Route path="/foryourpleasure/" component={() => <FirstScreen heading="For your pleasure"/>}/>
                  <Route path="/contacts/" component={() => <FirstScreen heading="Contact Us"/>}/>
              </Switch>
                  <Route exact path="/" component={() => <MainPage data={best}/>}/>
                  <Route exact path="/ourcoffee/" render={() => <OurCoffee data={regularItems} filter={filter} onFilterChange={this.onFilterChange} onSearchChange={this.onSearchChange}/>}/>
                  <Route exact path="/ourcoffee/:id" component={({match}) => {
                      const {id} = match.params;
                      return <ErrorCatcher id={id} />
                  }}/>
                  <Route exact path="/foryourpleasure/" component={() => <ForYourPleasure data={goods}/>}/>
                  <Route exact path="/contacts/" component={Contacts}/>
              <Footer/>
          </>
      </Router>
    );
  }
}
