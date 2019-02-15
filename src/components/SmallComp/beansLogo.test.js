import React from 'react';
import BeansLogo from "./BeansLogo";
import {shallow} from 'enzyme';

describe("Testing <BeansLogo />", () => {
    const image = shallow(<BeansLogo/>);
    describe("Testing snap & state", ()=>{
        it("BeansLogo has rendered correctly", () => {
            expect(image).toMatchSnapshot();
        })
    })
})