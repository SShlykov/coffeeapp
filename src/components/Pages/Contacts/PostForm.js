import React, {Component} from "react";
import cDataService from "../../../services/cDataService";

export default class Form extends Component {
    state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      data: {},
    };
    cDataService = new cDataService();
    onType = ( e ) => {
        let val = e.target.value;
        let attr = e.target.id;
        this.setState({[attr]:val});
    };
    updateDataObj = (name, email, phone, message)=> {
        this.setState({
            data: {name:name, email:email, phone:phone, message: message}
        });
    };
    submitFunc = async (e) =>{
        const {name, email, phone, message} = this.state;
        e.preventDefault();
        await this.updateDataObj(name, email, phone, message);
        await this.cDataService.postMessage(this.state.data);
        await this.props.submitListener();
    };
    render() {
        const  {name, message, phone, email} = this.state;
        return (
            <form onSubmit={this.submitFunc} method="POST" className="contact-form">
                <label htmlFor="name" className="col-6 contact-label importantInput">Name</label>
                <input
                    type="name"
                    id="name"
                    className="col-6 contact-input"
                    value={name}
                    onChange={this.onType}
                />
                <label htmlFor="e-mail" className="col-6 contact-label importantInput">E-mail</label>
                <input
                    type="e-mail"
                    id="email"
                    className="col-6 contact-input"
                    value={email}
                    onChange={this.onType}
                />
                <label htmlFor="phone" className="col-6 contact-label">Phone</label>
                <input
                    type="phone"
                    id="phone"
                    placeholder="+7(...)...-...."
                    className="col-6 contact-input"
                    value={phone}
                    onChange={this.onType}
                />
                <label htmlFor="message" id="labelMes" className="col-12 text-center contact-label importantInput">Your
                    message</label>
                <textarea
                    placeholder="Tell us..."
                    name="message"
                    id="message"
                    className="col-12"
                    value={message}
                    onChange={this.onType}
                />
                <div className="centred">
                    <input
                        type="submit"
                        value="Send us"
                        className="anotherButton"
                    />
                </div>
            </form>
        )
    }
};
