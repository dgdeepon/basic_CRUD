import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postData } from '../redux/userReducer/Action';
import { getSingleData, localDataClean } from '../redux/singleReducer/Action';
import { useLocation } from 'react-router-dom';

function MainForm() {

    const [reload,setReload]=useState(false)
    const {data}=useSelector((store)=>{
        return store.singleReducer;
    })
    const loading=useSelector((store)=>{
        return store.singleReducer.isLoading;
    })
    const location=useLocation();

    const [inputVal,setInputVal]=useState({
        id: '',
        name: '',
        email: '',
        phone: ''
    })
    const dispatch=useDispatch();
    const {isLoading,isError}=useSelector((store)=>{
        return store.userReducer;
    })


    function handleChange(e){
        setInputVal({...inputVal,[e.target.name]:e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();

        // checking phone number
        if((/[0-5]/).test(inputVal.phone[0]) || isNaN(inputVal.phone)){
            alert('Invalid phone number');
            return;
        }

        dispatch(postData(inputVal));
        setInputVal({
            id: '',
            name: '',
            email: '',
            phone: ''
        })
    }

    let id=location.pathname.trim().split('/')[2];

    useEffect(()=>{
        if(isError){
            alert('Failed to add the data.');
        }


        if(id){

            dispatch(getSingleData({id,reload,setReload}));
        }

        return ()=>{
            dispatch(localDataClean)
        }
    },[isError])


    useEffect(()=>{

        setInputVal({
            id: data._id || '',
            name: data.name || '',
            email: data.email || '',
            phone: data.phone || ''
        })

    },[reload])


  return ( loading ? "Loading..." :
    <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} name='name' value={inputVal.name} required placeholder='Name'/>
        <input type='email' onChange={handleChange} name='email' value={inputVal.email} required placeholder='Email'/>
        <input type='text' onChange={handleChange} name='phone' value={inputVal.phone} minLength={10} maxLength={10} required placeholder='Phone'/>
        <button type='submit'>{isLoading ? "Loading...": id ? "Update" : "Create"}</button>
    </form>
  )
}

export default MainForm