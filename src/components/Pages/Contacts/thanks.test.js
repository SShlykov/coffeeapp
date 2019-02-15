import React from 'react';
import Thanks from "./Thanks";
import {shallow} from 'enzyme';

describe("Testing <Thanks />", () => {
    const page = shallow(<Thanks/>);
    describe("Testing snap & state", ()=>{
        it("Thanks has rendered correctly", () => {
            expect(page).toMatchSnapshot();
        })
    })
})