import React from 'react';
import FilterPanel from "./FilterPanel";
import {shallow} from 'enzyme';

describe('Testing <FilterPanel/>', () => {
    const panel = shallow(<FilterPanel/>);
    describe('Testing snap & state', () => {
        it('FilterPanel bar have rendered correctly', () => {
            expect(panel).toMatchSnapshot();
        });    
    });
});