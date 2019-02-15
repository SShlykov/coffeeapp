import React from 'react';
import Spinner from "./index";
import {shallow} from 'enzyme';

describe("Testing <Spinner />", () => {
    const image = shallow(<Spinner/>);
    describe("Testing snap & state", ()=>{
        it("Spinner has rendered correctly", () => {
            expect(image).toMatchSnapshot();
        })
    })
})