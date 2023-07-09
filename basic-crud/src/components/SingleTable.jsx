import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getSingleData, localDataClean } from '../redux/singleReducer/Action';

function SingleTable() {

    const [reload,setReload]=useState(false)
    const {data}=useSelector((store)=>{
        return store.singleReducer;
    })
    const loading=useSelector((store)=>{
        return store.singleReducer.isLoading;
    })
    const location=useLocation();
    const dispatch=useDispatch();


    useEffect(()=>{
        const id=location.pathname.trim().split('/')[2];
        dispatch(getSingleData({id,reload,setReload}))

        return ()=>{
            dispatch(localDataClean)
        }
    },[])



  return ( loading ? "Loading..." :
    <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{data._id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
            </tr>
        </tbody>
    </table>
  )
};

export default SingleTable;