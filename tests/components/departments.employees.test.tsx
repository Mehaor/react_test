import * as React from 'react';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router';
import {ItemList} from '../../src/components/shared/ItemList';
import {Sections} from '../../src/constants';

import {Departments} from '../../src/components/Departments';
import {Employees} from '../../src/components/Employees';

const props = {
    items: []
}

describe('<Departments />', () => {
    it('should render ItemList', () => {
        const wrapper = mount(<MemoryRouter><Departments {...props} /></MemoryRouter>);
        expect(wrapper.contains(<ItemList items={[]} section={Sections.SECTION_DEPARTMENTS} fields={['name']} />)).toEqual(true);
    })
});

describe('<Emoployees />', () => {
    it('should render ItemList', () => {
        const wrapper = mount(<MemoryRouter><Employees {...props} /></MemoryRouter>);
        expect(wrapper.contains(<ItemList items={[]} section={Sections.SECTION_EMPLOYEES} fields={['firstName', 'lastName']} />)).toEqual(true);
    })
});