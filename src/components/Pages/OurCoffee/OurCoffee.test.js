import React from 'react';
import OurCoffee from "./OurCoffeePage";
import {shallow} from 'enzyme';

describe("Testing <OurCoffee />", () => {
    const page = shallow(<OurCoffee/>);
    describe("Testing snap & state", ()=>{
        it("OurCoffee has rendered correctly", () => {
            expect(page).toMatchSnapshot();
        })
    })
})