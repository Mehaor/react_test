import {addNewDepartment, patchDepartment, getDepartmentList} from '../../src/store/departments';
import {Actions} from '../../src/constants';

describe('department_actions', () => {
    it('should create action to add new department', () => {
        const data = { name: "aaa"};
        const expectedAction = {
            type: Actions.DEPARTMENT_NEW,
            data
        }
        return expect(addNewDepartment(data)).toEqual(expectedAction);
    });

    it('should create action to request department list', () => {
        const expectedAction = {
            type: Actions.DEPARTMENT_LIST_GET,
        }
        return expect(getDepartmentList()).toEqual(expectedAction);
    });

    it('shpuld create action to patch existing employee', () => {
        const data = {name: "ccc"};
        const expectedAction = { type: Actions.DEPARTMENT_PATCH, data};
        return expect(patchDepartment(data)).toEqual(expectedAction);
    });

});

