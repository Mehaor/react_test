import * as React from 'react';
import {mount} from 'enzyme';
import MenuWithRouter, {Menu} from '../../src/components/Menu';
import {Link, StaticRouter, MemoryRouter} from 'react-router-dom';
import {Sections} from '../../src/constants';


let wrapper;


describe('<Menu />', () => {
    it('should render nav', () => {
        wrapper = mount(<MemoryRouter><MenuWithRouter /></MemoryRouter>)
        expect(wrapper.find('nav')).toHaveLength(1);
    });

    it('should have two links', () => {
        wrapper = mount(<MemoryRouter><MenuWithRouter /></MemoryRouter>)
        expect(wrapper.find('.nav-link')).toHaveLength(2);
    });

    it('should have no active links', () => {
        wrapper = mount(<MemoryRouter initialEntries={[`/`]}><MenuWithRouter /></MemoryRouter>)
        expect(wrapper.find('.active')).toHaveLength(0);
    });
    it('should have an active link', () => {
        wrapper = mount(<MemoryRouter initialEntries={[`/${Sections.SECTION_DEPARTMENTS}`]}><MenuWithRouter /></MemoryRouter>);
        expect(wrapper.find('.active')).toHaveLength(1);
    });
});