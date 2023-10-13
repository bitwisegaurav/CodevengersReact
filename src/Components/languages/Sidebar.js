import React from 'react';
import '../css/sidebar.css';

const sidebarData = [
  {
    topic: 'Introduction',
    url: '../mysql/introduction.html',
  },
  {
    topic: 'DataTypes',
    url: '../mysql/datatypes.html',
  },
  {
    topic: 'Database',
    url: '../mysql/database.html',
  },
  {
    topic: 'Table',
    url: '../mysql/table.html',
  },
  {
    topic: 'Alter Table',
    url: '../mysql/alter_table.html',
  },
  {
    topic: 'Insert and Update rows',
    url: '../mysql/insert_update.html',
  },
  {
    topic: 'Select data',
    url: '../mysql/select.html',
  },
  {
    topic: 'Delete rows',
    url: '../mysql/delete_rows.html',
  },
  {
    topic: 'Clause',
    url: '../mysql/clause.html',
  },
  {
    topic: 'Operators (is, in, not in, between, like)',
    url: '../mysql/operators.html',
  },
  {
    topic: 'Copy Table',
    url: '../mysql/copy_table.html',
  },
  {
    topic: 'Group Functions',
    url: '../mysql/group_function.html',
  },
  {
    topic: 'Primary Key',
    url: '../mysql/primary_key.html',
  },
  {
    topic: 'Foreign Key',
    url: '../mysql/foreign_key.html',
  },
  {
    topic: 'Constraints',
    url: '../mysql/constraints.html',
  },
  {
    topic: 'Dual Table',
    url: '../mysql/dual_table.html',
  },
  {
    topic: 'Scalar Functions',
    url: '../mysql/scalar_functions.html',
  },
  {
    topic: 'Date Functions',
    url: '../mysql/date_functions.html',
  },
  {
    topic: 'Views',
    url: '../mysql/views.html',
  },
  {
    topic: 'Subquery',
    url: '../mysql/subquery.html',
  },
  {
    topic: 'Joins',
    url: '../mysql/joins.html',
  },
];

function Items(props){
    return (
        <div>
            <li key={props.index} className="topic">
                <a href={props.item.url} target="sidesec">
                    {props.item.topic}
                </a>
            </li>
        </div>
    );
}

export default function Sidebar() {
  return (
    <aside>
      <h1>MySQL</h1>
      <ul>
        {sidebarData.map((item, index) => (
          <Items index={index} item={item} />
        ))}
      </ul>
    </aside>
  );
}