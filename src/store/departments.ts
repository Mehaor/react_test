import {Actions} from '../constants';

export function getDepartmentList() {
    return {type: Actions.DEPARTMENT_LIST_GET};
}

export function addNewDepartment(data: any) {
    return {type: Actions.DEPARTMENT_NEW, data};
}

export function patchDepartment(data: any) {
    return {type: Actions.DEPARTMENT_PATCH, data};
}

let initialState: any = {
    loading: false,
    error: false,
    items: []
}

export default function departments(state: any = initialState, action: any) {
    let items: any;
    switch(action.type) {
        case(Actions.DEPARTMENT_LIST_GET):
            return {...state, items: [], loading: true};
        case(Actions.DEPARTMENT_LIST_SET):
            return {...state, items: action.items, loading: false};
        case(Actions.DEPARTMENT_LIST_ERROR):
            return {...state, items: [], loading: false, error: true};
        case(Actions.DEPARTMENT_ADD):
            items = [...state.items];
            items.push(action.item);
            return {...state, items};
        case(Actions.DEPARTMENT_UPDATE):
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