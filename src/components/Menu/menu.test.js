import React from 'react';
import Menu from "./Menu";
import {shallow} from 'enzyme';

describe('Testing <Menu/>', () => {
    const menu = shallow(<Menu/>);
    describe('Testing snap & state', () => {
        it('Menu bar have rendered correctly', () => {
            expect(menu).toMatchSnapshot();
        });    
    });
});