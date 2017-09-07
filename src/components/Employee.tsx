import * as React from 'react';
import {connect} from 'react-redux';
import {Schemas} from '../constants';
import Form from "react-jsonschema-form";
import {addNewEmployee, patchEmployee} from '../store/employees';


export class Employee extends React.Component<any, any> {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(d: any) {
        let {addNewEmployee, patchEmployee, isNew} = this.props;
        if (isNew) {
            addNewEmployee(d.formData);
        }
        else {
            patchEmployee(d.formData);
        }
        this.props.history.push('/employees');
    }

    render() {
        let {isNew, item, schema, departmentsLoading} = this.props;
        if ((!isNew && !item) || departmentsLoading) {
            return null;
        }
        return (<Form formData={item} onSubmit={this.handleSubmit} schema={schema} />);

    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    let id = parseInt(ownProps.match.params.employeeId) || null;
    let schema = {...Schemas.EMPLOYEE_SCHEMA };
    schema.properties.departmentId.enum = state.departments.items.map((department: any) => { return department.id});
    schema.properties.departmentId.enumNames = state.departments.items.map((department: any) => { return department.name});
    return {
        isNew: ownProps.match.params.employeeId === 'add',
        schema,
        item: state.employees.items.find((item: any) => { return item.id === id }) || null,
        departmentsLoading: state.departments.loading
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addNewEmployee: (data: any) => {dispatch(addNewEmployee(data))},
        patchEmployee: (data: any) => {dispatch(patchEmployee(data))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employee);