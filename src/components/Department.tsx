import * as React from 'react';
import {connect} from 'react-redux';
import {Schemas} from '../constants';
import Form from "react-jsonschema-form";
import {addNewDepartment, patchDepartment} from '../store/departments';

export class Department extends React.Component<any, any> {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(d: any) {
        let {addNewDepartment, patchDepartment, isNew} = this.props;
        if (isNew) {
            addNewDepartment(d.formData);
        }
        else {
            patchDepartment(d.formData); 
        }
        this.props.history.push('/departments');
        
    }

    render() {
        let {isNew, item} = this.props;
        if (!isNew && !item) {
            return null;
        }
        return (<Form schema={Schemas.DEPARTMENT_SCHEMA} formData={item} onSubmit={this.handleSubmit} />);
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    let id = parseInt(ownProps.match.params.departmentId) || null;
    return {
        isNew: ownProps.match.params.departmentId === 'add',
        item: state.departments.items.find((item: any) => { return item.id === id }) || null,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {

        addNewDepartment: (data: any) => {dispatch(addNewDepartment(data))},
        patchDepartment: (data: any) => {dispatch(patchDepartment(data))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Department);