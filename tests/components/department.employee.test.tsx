import * as React from 'react';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router';
import {Department} from '../../src/components/Department';
import {Employee} from '../../src/components/Employee';
import {Schemas} from '../../src/constants';

const departmentItem = {id: 1, name: ''};
const employeeItem = {id: 1, firstName: 'aa', lastName: 'bb', departmentId: 1};

const departmentProps = {
    isNew: false,
    item: departmentItem
}

const employeeSchema = {...Schemas.EMPLOYEE_SCHEMA};
employeeSchema.properties.departmentId.enum = [departmentItem.id];
employeeSchema.properties.departmentId.enumNames = [departmentItem.name];

const employeeProps = {
    isNew: false,
    item: employeeItem,
    schema: employeeSchema,
    departmentsLoading: false
}


describe('<Department />', () => {

    it ('should render null when not is new or no item', () => {
        const wrapper = mount(<MemoryRouter><Department /></MemoryRouter>);
        expect(wrapper.html()).toEqual(null);
    });

    it ('should render form when there is item', () => {
        let props = departmentProps;
        const wrapper = mount(<MemoryRouter><Department {...props} /></MemoryRouter>);
        expect(wrapper.find('form')).toHaveLength(1);
    });
    it ('should render form when is new', () => {
        let props = {isNew: true, item: null};
        const wrapper = mount(<MemoryRouter><Department {...props} /></MemoryRouter>);
        expect(wrapper.find('form')).toHaveLength(1);
    });
});

describe('<Department />', () => {
    
    it ('should render null when not is new or no item', () => {
        const wrapper = mount(<MemoryRouter><Employee /></MemoryRouter>);
        expect(wrapper.html()).toEqual(null);
    });

    it ('should render form when there is item', () => {
        let props = employeeProps
        const wrapper = mount(<MemoryRouter><Employee {...props} /></MemoryRouter>);
        expect(wrapper.find('form')).toHaveLength(1);
    });

    it ('should render form when item is new', () => {
        let props = {...employeeProps, item: null, isNew: true};
        const wrapper = mount(<MemoryRouter><Employee {...props} /></MemoryRouter>);
        expect(wrapper.find('form')).toHaveLength(1);
    })

    it ('should render null when departments are still loading', () => {
        let props = {...employeeProps, departmentsLoading: true};
        const wrapper = mount(<MemoryRouter><Employee {...props} /></MemoryRouter>);
        expect(wrapper.html()).toEqual(null);
    })
});