import React from 'react';
import Item from "./Item";
import {shallow} from 'enzyme';

describe('Testing <Item/>', () => {
    const item = shallow(<Item id="1" type="best"/>);
    describe('Testing snap & state', () => {
        it('Item have rendered correctly', () => {
            expect(item).toMatchSnapshot();
        });
    });
});