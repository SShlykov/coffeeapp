import React, {Component} from "react";
import cDataService from "../../../services/cDataService";
import InputMask from "react-input-mask";
export default class Form extends Component {
    state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      data: {},
        errorName:"",
        errorEmail:"",
        errorMessage:""
    };
    cDataService = new cDataService();
    _isFormValid = () => {
        this._isNameValid(this.state.name);
        this._isEmailValid(this.state.email);
        this._isMessageValid(this.state.message);
        return this._isNameValid(this.state.name)&&this._isEmailValid(this.state.email)&&this._isMessageValid
    };
    _isNameValid = (name) => {
        let errorName="";
        let regex1 = new RegExp(/[A-Za-z]{3,20}/gm);
        let regex2 = new RegExp(/[A-Za-z]{21}/gm);
        let regex3 = new RegExp(/[^A-Za-z]/gm);
        if (! regex1.test(name)&&regex2.test(name)){
            errorName="name length should be between 3 and 20";
            this.setState({errorName});
            return false
        }
        if(regex3.test(name)){
            errorName="name can contain only letters";
            this.setState({errorName});
            return false
        }
        this.setState({errorName});
        return true;
    };
    _isEmailValid = (email) => {
        let errorEmail="";
        let regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm)
        if(!regex.test(email)){
            errorEmail="email is not valid";
            this.setState({errorEmail});
            return false
        }
        this.setState({errorEmail});
        return true;
    };
    _isMessageValid = (message) => {
        let errorMessage="";
        let regex1 = new RegExp(/[A-Za-z0-9]{10}/gm);
        if(!regex1.test(message)){
            errorMessage="write at least 10 symbols";
            return false
        }
        this.setState({errorMessage});
        return true;
    };
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
        this._isFormValid();
        const {name, email, phone, message} = this.state;
        e.preventDefault();
        if(this._isFormValid()) {
            await this.updateDataObj(name, email, phone, message);
            await this.cDataService.postMessage(this.state.data);
            await this.props.submitListener();
        }
    };
    render() {
        const  {name, message, phone, email,errorEmail,errorMessage,errorName } = this.state;
        const errName = (errorName)?<div className="row col-6 offset-6 letter">{errorName}</div>:null;
        const errEmail = (errorEmail)?<div className="row col-6 offset-6 letter">{errorEmail}</div>:null;
        const errMessage = (errorMessage)?<div className="row col-6 offset-6 letter">{errorMessage}</div>:null;
        return (
            <form onSubmit={this.submitFunc} method="POST" className="contact-form">
                <label htmlFor="name" className="col-6 contact-label importantInput">Name</label>
                <input
                    type="name"
                    id="name"
                    className="col-6 contact-input"
                    value={name}
                    required
                    onChange={this.onType}
                    error={this.state.errorName}
                />
                {errName}
                <label htmlFor="e-mail" className="col-6 contact-label importantInput">E-mail</label>
                <input
                    type="e-mail"
                    id="email"
                    className="col-6 contact-input"
                    required
                    value={email}
                    onChange={this.onType}
                    error={this.state.errorEmail}
                />
                {errEmail}
                <label htmlFor="phone" className="col-6 contact-label">Phone</label>
                <InputMask
                    type="phone"
                    id="phone"
                    placeholder="+7 (...) ...-...."
                    mask="+7 (999) 999-9999"
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
                    required
                    className="col-12"
                    value={message}
                    onChange={this.onType}
                    error={this.state.errorMessage}
                />
                {errorMessage}
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
