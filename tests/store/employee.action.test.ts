import {addNewEmployee, patchEmployee, getEmployeeList} from '../../src/store/employees';
import {Actions} from '../../src/constants';

describe('employee_actions', () => {
    it('should create action to add new employee', () => {
        const data = {
            firstName: "aaa",
            lastName: "bbb",
            departmentId: 5
        };
        const expectedAction = {
            type: Actions.EMPLOYEE_NEW,
            data
        }
        return expect(addNewEmployee(data)).toEqual(expectedAction);
    });

    it('should create action to request employee list', () => {
        const expectedAction = {
            type: Actions.EMPLOYEE_LIST_GET,
        }
        return expect(getEmployeeList()).toEqual(expectedAction);
    });

    it('shpuld create action to patch existing employee', () => {
        const data = {
            firstName: "ccc",
            lastName: "ddd",
            departmentId: 5
        };
        const expectedAction = { type: Actions.EMPLOYEE_PATCH, data};
        return expect(patchEmployee(data)).toEqual(expectedAction);
    });

});

