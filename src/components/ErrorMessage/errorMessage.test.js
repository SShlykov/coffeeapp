import React from 'react';
import ErrorMessage from "./ErrorMessage";
import {shallow} from 'enzyme';

describe('Testing <ErrorMessage/>', () => {
    const error = shallow(<ErrorMessage/>);
    describe('Testing snap & state', () => {
        it('ErrorMessage bar have rendered correctly', () => {
            expect(error).toMatchSnapshot();
        });    
    });
});