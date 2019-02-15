import React from 'react';
import Search from "./Seach";
import {shallow} from 'enzyme';

describe('Testing <Search/>', () => {
    const seach = shallow(<Search id="1" type="best"/>);
    describe('Testing snap & state', () => {
        it('Search bar have rendered correctly', () => {
            expect(seach).toMatchSnapshot();
        });
        it('Search term state is exist', () => {
            expect(seach.state().term).toBe("");
        });        
    });
});