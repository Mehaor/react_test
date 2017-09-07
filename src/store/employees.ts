import {Actions} from '../constants';

export function getEmployeeList() {
    return {type: Actions.EMPLOYEE_LIST_GET};
}

export function addNewEmployee(data: any) {
    return {type: Actions.EMPLOYEE_NEW, data};
}

export function patchEmployee(data: any) {
    return {type: Actions.EMPLOYEE_PATCH, data};
}

let initialState: any = {
    loading: false,
    error: false,
    items: []
}


export default function employees(state: any = initialState, action: any) {
    let items: any;
    switch(action.type) {
        case(Actions.EMPLOYEE_LIST_GET):
        return {...state, items: [], loading: true};
    case(Actions.EMPLOYEE_LIST_SET):
        return {...state, items: action.items, loading: false, error: false};
    case(Actions.EMPLOYEE_LIST_ERROR):
        return {...state, items: [], loading: false, error: true};
    case(Actions.EMPLOYEE_ADD):
        items = [...state.items];
        items.push(action.item);
        return {...state, items};
    case(Actions.EMPLOYEE_UPDATE):
        items = [...state.items];
        let insertIndex = items.findIndex((item: any) => {return item.id === action.item.id});
        if (insertIndex > -1) {
            items.splice(insertIndex, 1, action.item);
        }
        else {
            items.push(action.item);
        }
        return {...state, items};
    }

    return state;
}