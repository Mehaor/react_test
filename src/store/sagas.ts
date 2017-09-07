import { call, put, takeEvery } from 'redux-saga/effects';
import {api} from '../api';
import {Actions} from '../constants';

// Department worker sagas

export function* getDepartments() {
    
    try {
        const {data} = yield call(api.get, '/departments');
        yield put({ type: Actions.DEPARTMENT_LIST_SET, items: data });
    }
    catch(err) {
    }   
}

export function* addNewDepartment(action: any) {
    try {
        const {data} = yield call(api.post, '/departments', {...action.data});
        yield put({ type: Actions.DEPARTMENT_ADD, item: data });
    }
    catch(err) {}   
}

export function* updateDepartment(action: any) {
    try {
        const {data} = yield call(api.patch, `/departments/${action.data.id}`, {...action.data});
        yield put({ type: Actions.DEPARTMENT_UPDATE, item: data });
    }
    catch(err) {
        console.log(err);
    }   
}

// Employee worker sagas

export function* getEmployees(): any {
    try {
        const {data} = yield call(api.get, '/employees');
        yield put({ type: Actions.EMPLOYEE_LIST_SET, items: data });
    }
    catch(err) {
    }   
}

export function* addNewEmployee(action: any) {
    try {
        const {data} = yield call(api.post, '/employees', {...action.data});
        yield put({ type: Actions.EMPLOYEE_ADD, item: data });
    }
    catch(err) {}   
}

export function* updateEmployee(action: any) {
    try {
        const {data} = yield call(api.patch, `/employees/${action.data.id}`, {...action.data});
        yield put({ type: Actions.EMPLOYEE_UPDATE, item: data });
    }
    catch(err) {}   
}

// Department watchers

export function* watchAddDepartment() {
    yield takeEvery(Actions.DEPARTMENT_NEW, addNewDepartment);
}

export function* watchPatchDepartment() {
    yield takeEvery(Actions.DEPARTMENT_PATCH, updateDepartment );
}

export function* watchGetDepartments() {
    yield takeEvery(Actions.DEPARTMENT_LIST_GET, getDepartments);
}

// Employee watchers

export function* watchAddEmployee() {
    yield takeEvery(Actions.EMPLOYEE_NEW, addNewEmployee);
}

export function* watchPatchEmployee() {
    yield takeEvery(Actions.EMPLOYEE_PATCH, updateEmployee );
}

export function* watchGetEmployees() {
    yield takeEvery(Actions.EMPLOYEE_LIST_GET, getEmployees);
}


// Root saga

export default function* rootSaga() {
    yield [
        watchGetDepartments(),
        watchAddDepartment(),
        watchPatchDepartment(),
        watchGetEmployees(),
        watchAddEmployee(),
        watchPatchEmployee()
    ]
}