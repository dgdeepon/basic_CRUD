import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, getData } from '../redux/userReducer/Action';
import { Link } from 'react-router-dom';
import SingleTable from './SingleTable';

function DataTable() {

    const dispatch=useDispatch();
    const {data,isLoading}=useSelector((store)=>{
        return store.userReducer;
    })
    const [reload,setReload]=useState(false);

    function dataMapping(data,key){
        return <tr key={key}>
            <td>{data._id}</td>
            <td>{data.name}</td>
            <td>
                <Link to={`singleData/${data._id}`}>
                <button>View</button>
            </Link>
            </td>
            <td>
                <Link to={`/addUpdate/${data._id}`}>
                <button>Edit</button>
                </Link>
                </td>
            <td><button onClick={()=>{
                dispatch(deleteData({id:data._id,setReload,reload}));
            }}>Delete</button></td>
        </tr>
    }
    useEffect(()=>{
        dispatch(getData);
    },[reload])


  return (
    <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>VIEW</th>
            <th>EDIT</th>
            <th>DELETE</th>
            </tr>
        </thead>
        <tbody>
            {data?.map((el,i)=>{
                return dataMapping(el,i);
            })}
        </tbody>
    </table>
  )
}

export default DataTable