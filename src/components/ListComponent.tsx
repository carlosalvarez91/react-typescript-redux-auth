import React from 'react';
import ToDoType from '../types/ToDoType';

export default function ListComponent({data}: {data: ToDoType[]}): JSX.Element {
    return (
        <ul>
            {data.map(e=>{
                return <li key={e.id}>{e.title}</li>
            })}
        </ul>
    )
}

