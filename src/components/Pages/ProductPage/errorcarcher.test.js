import React from 'react';
import ErrorCatcher from "./ErrorCatcher";
import {shallow} from 'enzyme';

describe('Testing <ErrorCatcher/>', () => {
    const item = shallow(<ErrorCatcher id="1" type="best"/>);
    describe('Testing snap & state', () => {
        it('ErrorCatcher have rendered correctly', () => {
            expect(item).toMatchSnapshot();
        });
    });
});