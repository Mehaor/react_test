import * as React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import  Menu  from './Menu';

import {getDepartmentList} from '../store/departments';
import {getEmployeeList} from '../store/employees';

export const Index = () => <h2>Index</h2>;

class Base extends React.Component<any, any> {

    componentDidMount() {
        this.props.getDepartments();
        this.props.getEmployees();
    }

    render() {
        return (<div className="container-fluid">
            <div className="row">
                <Menu isSidebar={true} />
                    <main className="col-sm-9 ml-sm-auto col-md-9 pt-3" role="main" >
                        {this.props.children}
                    </main>
                </div>
        </div>);
    }
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        getDepartments: () => {dispatch(getDepartmentList())},
        getEmployees: () => {dispatch(getEmployeeList())}
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Base));