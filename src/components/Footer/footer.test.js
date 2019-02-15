import React from 'react';
import Footer from "./Footer";
import {shallow} from 'enzyme';

describe('Testing <Footer/>', () => {
    const footer = shallow(<Footer id="1" type="best"/>);
    describe('Testing snap & state', () => {
        it('Footer have rendered correctly', () => {
            expect(footer).toMatchSnapshot();
        });
    });
});