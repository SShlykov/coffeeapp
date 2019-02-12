import React, {Component} from "react";
import Menu from "../Menu";
import MainPage from "./MainPage"

export default class FirstScreen extends Component {
    render(){
        const {heading} = this.props;
        let clazzName = "preview";
        let component = <MainPage/>;
        if(heading) {
            clazzName = `banner ${heading.toLowerCase().replace(/\s/g,"")}`;
            component = <h1 className="title-big">{heading}</h1>
        }
        return(
                <div className={clazzName}>
                    <div className="container">
                        <Menu/>
                        {component}
                    </div>
                </div>
        )
    }
}