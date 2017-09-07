import * as React from 'react';
import {Link} from 'react-router-dom';

export const ItemList = (props: {items: any[], section: string, fields: string[]}) => <div>
    <table className="table table-striped">
        <caption>{props.section.toUpperCase()}</caption>
        <thead>
            <tr>{ ['#', ...props.fields].map((field: string) => { return  <td key={field}>{field}</td>})}</tr>
        </thead>
        <tbody>
        {
            props.items.map((item: any, index: number) => {
                return <tr key={item.id}>
                    {
                        ['id', ...props.fields].map((field: string) => {
                            return item[field] ? <td key={field}><Link to={`/${props.section}/${item.id}`}>{item[field]}</Link></td> : null
                        })
                    }
                </tr>
            })
        }
        </tbody>
    </table>
    <Link to={`/${props.section}/add`} className="btn btn-primary">Add</Link>
</div>;