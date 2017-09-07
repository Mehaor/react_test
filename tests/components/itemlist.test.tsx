import * as React from 'react';
import {shallow} from 'enzyme';
import {ItemList} from '../../src/components/shared/ItemList';
import {Link} from 'react-router-dom';

const section = 'departments';
const mockItems: any[] = [{name: 'aaa', id: 1}, {name: 'bbb', id: 2}];

const wrapper = shallow(<ItemList section={section} items={mockItems} fields={['name']} />);

describe('<ItemList />', () => {
    it('should render table', () => {
        expect(wrapper.find('table')).toBeTruthy();
    });
    
    it('should as many table rows as items', () => {
        expect(wrapper.find('tbody tr')).toHaveLength(mockItems.length);
    });

    it('should have one add button', () => {
        expect(wrapper.find('.btn')).toHaveLength(1);
    });
    it('should have correct add button', () => {
        expect(wrapper.contains(<Link className="btn btn-primary" to={`/${section}/add`}>Add</Link>)).toEqual(true);
    });
})