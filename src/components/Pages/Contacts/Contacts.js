import React, {Component} from "react";
import cofmaf from "./img/CofMaf.png";
import arrowLeft from "./img/ArrowLeft.png"
import {BeansLogo} from "../../SmallComp";

export default class Contacts extends Component {
    state ={
        form: true
    };
    submitFunc = (e) =>{
      e.preventDefault();
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
        let form = () => {
            return (
                <form  onSubmit={this.submitFunc} className="contact-form">
                    <label htmlFor="name" className="col-6 contact-label importantInput">Name</label>
                    <input type="name" id="name" className="col-6 contact-input"/>
                    <label htmlFor="e-mail" className="col-6 contact-label importantInput">E-mail</label>
                    <input type="e-mail" id="e-mail" className="col-6 contact-input"/>
                    <label htmlFor="phone" className="col-6 contact-label">Phone</label>
                    <input type="phone" id="phone" placeholder="+7(...)...-...." className="col-6 contact-input"/>
                    <label htmlFor="message" id="labelMes" className="col-12 text-center contact-label importantInput">Your message</label>
                    <textarea placeholder="Tell us..." name="message" id="message" rows="4" className="col-12"/>
                    <div className="centred">
                        <input type="submit" value="Send us" className="anotherButton"/>
                    </div>
                </form>
            )
        };
        let thanks = () => {
            return(
                <div className="thanksBlock">
                    <h2 className="title thanksTitle">
                        Thank you so much<br/>
                        We contact you as soon as posible
                    </h2>
                    <div className="cofmafImage">
                        <img src={cofmaf} alt="icon"/>
                    </div>
                    <div className="centred">
                        <button className="anotherButton" onClick={this.anotherMes}>Another ?&nbsp; <img src={arrowLeft} alt="↩"/></button>
                    </div>
                </div>
            )
        };
        let content = (this.state.form)? form(): thanks();
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