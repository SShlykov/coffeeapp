import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Menu from "../Menu";
import MainPage from "./MainPage"

export default class FirstScreen extends Component {
    render(){
        return(
            <Router>
                <div className="preview">
                    <div className="container">
                        <Menu/>
                        <Switch>
                            <Route path="/" component={MainPage}/>
                            <Route path="/ourcoffee" component={() => <h1 className="title-big">Our Coffee</h1>}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}