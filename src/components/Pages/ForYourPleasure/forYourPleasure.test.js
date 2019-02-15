import React from 'react';
import ForYourPleasure from "./forYourPleasure";
import {shallow} from 'enzyme';

describe("Testing <ForYourPleasure />", () => {
    const page = shallow(<ForYourPleasure/>);
    describe("Testing snap & state", ()=>{
        it("ForYourPleasure has rendered correctly", () => {
            expect(page).toMatchSnapshot();
        })
    })
})