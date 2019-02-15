import React from 'react';
import PostForm from "./PostForm";
import {shallow} from 'enzyme';

describe("Testing <PostForm />", () => {
    const form = shallow(<PostForm/>);
    describe("Testing snap & state", ()=>{
        it("PostForm has rendered correctly", () => {
            expect(form).toMatchSnapshot();
        });
        it("PostForm state 'name' is empty string" , ()=>{
            expect(form.state().name).toBe("");
        })
        it("PostForm state 'email' is empty string" , ()=>{
            expect(form.state().email).toBe("");
        })
        it("PostForm state 'phone' is empty string" , ()=>{
            expect(form.state().phone).toBe("");
        })
        it("PostForm state 'message' is empty string" , ()=>{
            expect(form.state().message).toBe("");
        })
        it("PostForm state 'data' is empty object" , ()=>{
            expect(form.state().data).toBeObject();
        })
        it("PostForm state 'errorName' is empty string" , ()=>{
            expect(form.state().errorName).toBe("");
        })
        it("PostForm state 'errorEmail' is empty string" , ()=>{
            expect(form.state().errorEmail).toBe("");
        })
        it("PostForm state 'errorEmail' is empty string" , ()=>{
            expect(form.state().errorEmail).toBe("");
        })
        it("PostForm state 'errorMessage' is empty string" , ()=>{
            expect(form.state().errorMessage).toBe("");
        })
    })
    describe("Handlers tests", () => {
        it("testing updateDataObj", () => {
            let name = "sergey", 
                email = "sshlykov@icovt.ru", 
                phone = "+79130024328",
                message = "Hello World"
            form.instance().updateDataObj(name, email, phone, message);
            expect(form.state().data.name).toBe(name);
            expect(form.state().data.email).toBe(email);
            expect(form.state().data.phone).toBe(phone);
            expect(form.state().data.message).toBe(message);
        })
    })
})