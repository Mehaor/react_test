import {Actions} from '../../src/constants';
import reducer from '../../src/store/departments';

const mockItems: any[] = [{name: 'aaa', id: 1}, {name: 'bbb', id: 2}];

const mockStoreWithItems = {
    loading: false,
    items: mockItems,
    error: false
}

describe('department_reducers', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            loading: false,
            error: false,
            items: []
        });
    });
    it('should set loading to true and items to empty array', () => {
        expect(reducer(undefined, {type: Actions.DEPARTMENT_LIST_GET})).toEqual({
            loading: true,
            error: false,
            items: []
        });
    });
    it('should set loading to false, items to empty array and error to true', () => {
        expect(reducer(undefined, {type: Actions.DEPARTMENT_LIST_ERROR})).toEqual({
            loading: false,
            error: true,
            items: []
        });
    });

    it('should set item list, loading to false, error to false', () => {
        expect(reducer(undefined, {type: Actions.DEPARTMENT_LIST_SET, items: mockItems})).toEqual({
            loading: false,
            error: false,
            items: mockItems
        });
    });

    it('should add new item to items array', () => {
        expect(reducer(mockStoreWithItems, {type: Actions.DEPARTMENT_ADD, item: {name: 'ccc', id: 3} })).toEqual({
            loading: false,
            error: false,
            items: [...mockItems, {name: 'ccc', id: 3}]
        })
    });

    it('should update existing item', () => {
        expect(reducer(mockStoreWithItems, {type: Actions.DEPARTMENT_UPDATE, item: {name: 'ccc', id: 2} })).toEqual({
            loading: false,
            error: false,
            items: [{name: 'aaa', id: 1}, {name: 'ccc', id: 2}]
        })
    });

})