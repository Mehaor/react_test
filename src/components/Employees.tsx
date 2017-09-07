import * as React from 'react';
import {connect} from 'react-redux';
import {ItemList} from './shared/ItemList';
import {Sections} from '../constants';

export class Employees extends React.PureComponent<any, any> {

    render() {
        let {items, loading, section} = this.props;
        return (<ItemList items={items} section={Sections.SECTION_EMPLOYEES} fields={['firstName', 'lastName']} />);
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        items: state.employees.items,
        loading: state.employees.loading
    }
}

export default connect(mapStateToProps, null)(Employees);