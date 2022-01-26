import React, { useEffect, useState } from 'react';
import ApiService from '../services/api.service';

interface ToDoObject {
    completed: boolean
    id: number
    title: string
    userId: number
}
const DashboardScreen: React.FC = ()=> {

    const [data, setData] =useState<ToDoObject[]>([])

    const fetchData = async() =>{
        const todos = await ApiService.getAllTodos() 
          setData(todos.data)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return <div> 
                <h1>dashboard screen</h1>
                <p>Fetched data:</p>
                <ul>
                    {data.map(e=>{
                        return <li key={e.id}>{e.title}</li>
                    })}
                </ul>
            </div>

}


export default DashboardScreen