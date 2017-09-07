import * as React from 'react';
import {Link} from 'react-router-dom';
import {Sections} from '../constants';
import {withRouter} from 'react-router-dom';

export class Menu extends React.Component<any, any> {

    render() {
        let pathname: string= this.props.location.pathname;
        let className: string = "col-sm-3 col-md-3 d-none d-sm-block sidebar bg-light";
        return (<nav className={className}>
            <ul className="nav nav-pills flex-column">
                {Sections.SECTIONS.map((section: string) => {
                    let className = `nav-link${pathname.indexOf(section) != -1 ? " active" : ""}`;
                    return <li className="nav-item" key={section}>
                        <Link className={className} to={`/${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</Link>
                    </li>
                })}
            </ul>
        </nav>)
    }
}

export default withRouter(Menu);