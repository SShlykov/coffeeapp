import React from 'react';
import Image from "./Image";
import {shallow} from 'enzyme';

describe("Testing <Image />", () => {
    const image = shallow(<Image/>);
    describe("Testing snap & state", ()=>{
        it("Image has rendered correctly", () => {
            expect(image).toMatchSnapshot();
        })
    })
})