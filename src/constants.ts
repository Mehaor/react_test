export namespace Actions {
    export const DEPARTMENT_LIST_SET: string = 'department_list_set';
    export const DEPARTMENT_LIST_GET: string = 'department_list_get';
    export const DEPARTMENT_LIST_ERROR: string = 'department_list_error';
    export const DEPARTMENT_NEW: string = 'department_new';
    export const DEPARTMENT_ADD: string = 'department_add';
    export const DEPARTMENT_ADD_ERROR: string = 'department_add_error';
    export const DEPARTMENT_UPDATE: string = 'department_update';
    export const DEPARTMENT_PATCH: string = 'department_patch';
    export const DEPARTMENT_UPDATE_ERROR: string = 'department_edit_error';

    export const EMPLOYEE_LIST_SET: string = 'employee_list_set';
    export const EMPLOYEE_LIST_GET: string = 'employee_list_get';
    export const EMPLOYEE_LIST_ERROR: string = 'employee_list_error';
    export const EMPLOYEE_NEW: string = 'employee_new';
    export const EMPLOYEE_ADD: string = 'employee_add';
    export const EMPLOYEE_ADD_ERROR: string = 'employee_add_error';
    export const EMPLOYEE_PATCH: string = 'employee_patch';
    export const EMPLOYEE_UPDATE: string = 'employee_update';
    export const EMPLOYEE_UPDATE_ERROR: string = 'employee_update_error';

    export const SECTION_SET: string = 'section_set';
}

export namespace Schemas {
    export const DEPARTMENT_SCHEMA: any = {
        title: "Department",
        type: "object",
        required: ["name"],
        properties: {
            name: {
                type: "string",
                title: "name"
            }
        }
    };

    export const EMPLOYEE_SCHEMA: any = {
        title: "Employee",
        type: "object",
        required: ["firstName", "lastName", "departmentId"],

        properties: {
            firstName: {
                type: "string",
                title: "First name"
            },
            lastName: {
                type: "string",
                title: "Last name"
            },
            departmentId: {
                "type": "number",
                "title": "Department",

            }
        }

    };
}

export namespace Sections {
    export const SECTION_DEPARTMENTS: string = 'departments';
    export const SECTION_EMPLOYEES: string = 'employees';
    export const SECTIONS: string[] = [SECTION_DEPARTMENTS, SECTION_EMPLOYEES];

}