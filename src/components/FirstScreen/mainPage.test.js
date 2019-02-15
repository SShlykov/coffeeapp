import React from 'react';
import MainPage from "./MainPage";
import {shallow} from 'enzyme';

describe('Testing <MainPage/>', () => {
    const page = shallow(<MainPage id="1" type="best"/>);
    describe('Testing snap & state', () => {
        it('MainPage have rendered correctly', () => {
            expect(page).toMatchSnapshot();
        });
    });
});