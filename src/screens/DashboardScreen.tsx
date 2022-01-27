import React, { useEffect, useState } from 'react';
import ListComponent from '../components/ListComponent';
import ApiService from '../services/api.service';
import ToDoType from '../types/ToDoType';

const DashboardScreen: React.FC = ()=> {

    const [data, setData] =useState<ToDoType[]>([])

    const fetchData = async() =>{
        const response = await ApiService.getAllTodos() 
        setData(response.data)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return <div> 
                <h1>dashboard screen</h1>
                <p>Fetched data:</p>
                <ListComponent data={data} />
            </div>

}


export default DashboardScreen