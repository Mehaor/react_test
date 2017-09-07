import * as React from 'react';
import {connect} from 'react-redux';
import {ItemList} from './shared/ItemList';
import {Sections} from '../constants';

export class Departments extends React.PureComponent<any, any> {

    render() {
        let {items, loading} = this.props;
        return (<ItemList items={items} section={Sections.SECTION_DEPARTMENTS} fields={['name']} />);
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        items: state.departments.items,
        loading: state.departments.loading,
    }
}


export default connect(mapStateToProps, null)(Departments);