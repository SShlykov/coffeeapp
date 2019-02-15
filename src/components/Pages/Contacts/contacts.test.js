import React from 'react';
import Contacts from "./contacts";
import {shallow} from 'enzyme';

describe("Testing <Contacts />", () => {
    const page = shallow(<Contacts/>);
    describe("Testing snap & state", ()=>{
        it("Contacts has rendered correctly", () => {
            expect(page).toMatchSnapshot();
        });
        it("RandomChar state 'form' is true" , ()=>{
            expect(page.state().form).toBeTruthy();
        })
    })
    describe("Handlers tests", () => {
        it("testing submitListener", () => {
            page.instance().submitListener();
            expect(page.state().form).toBeFalsy();
        })
        it("testing anotherMes", () => {
            page.instance().submitListener();
            page.instance().anotherMes();
            expect(page.state().form).toBeTruthy();
        })
    })
})