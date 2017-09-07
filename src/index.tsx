import * as React from "react";
import * as ReactDOM from "react-dom";
import {connect, Provider} from 'react-redux';
import {store} from './store/store';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Base, {Index} from './components/Base';
import Departments from './components/Departments';
import Department from './components/Department';

import Employees from './components/Employees';
import Employee from './components/Employee';

import './styles/style.scss';


class App  extends React.Component<any, any> {
    
        constructor(props: any) {
            super(props);
        }
    
        render() {
            return (<Provider store={store}>
                <BrowserRouter>
                    <Base>
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route path="/departments/:departmentId" component={Department} />
                        <Route exact path="/departments" component={Departments} />
                        <Route path="/employees/:employeeId" component={Employee} />
                        <Route exact path="/employees" component={Employees} />
                    </Switch>
                    </Base>
                </BrowserRouter>
            </Provider>);
        }
    }
    
ReactDOM.render(<App/>, document.getElementById("app"));