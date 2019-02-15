import React from 'react';
import Filter from "./Filter";
import {shallow} from 'enzyme';

describe('Testing <Filter/>', () => {
    const filter = shallow(<Filter/>);
    describe('Testing snap & state', () => {
        it('Filter have rendered correctly', () => {
            expect(filter).toMatchSnapshot();
        });
        it('Filter state buttons is object', () => {
            expect(filter.state().buttons[0]).toBeObject();
        });
    });
});