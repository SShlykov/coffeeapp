import React from 'react';
import ProductPage from "./ProductPage";
import {shallow} from 'enzyme';

describe('Testing <ProductPage/>', () => {
    const item = shallow(<ProductPage/>);
    describe('Testing snap & state', () => {
        it('ProductPage have rendered correctly', () => {
            expect(item).toMatchSnapshot();
        });
    });
});