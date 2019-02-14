import React, {Component} from "react";
import {BeansLogo} from "../../SmallComp";
import Thanks from "./Thanks";
import Form from "./PostForm";

export default class Contacts extends Component {
    state ={
        form: true
    };
    submitListener = () => {
        this.setState({
            form: false
        })
    };
    anotherMes = () => {
      this.setState({
          form: true
      })
    };
    render() {

        let content = (this.state.form)? <Form submitListener={this.submitListener}/>: <Thanks anotherMes={this.anotherMes}/>;
        return(
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="contacts-title">
                                <div className="title bold">Tell us about your tastes</div>
                                <BeansLogo dark/>
                            </div>
                            {content}
                        </div>
                    </div>
                </div>
            </>
        )
    }

}