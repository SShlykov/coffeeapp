import React from 'react';
import Items from "./Items";
import {shallow} from 'enzyme';

describe('Testing <Items/>', () => {
    const items = shallow(<Items data={[{id: 1, name: "my name", price: "my price", url: "wow"}, {id: 2, name: "othersu name", price: "othersu price", url: "wow"}]}/>);
    describe('Testing snap & state', () => {
        it('Items bar have rendered correctly', () => {
            expect(items).toMatchSnapshot();
        });    
    });
});