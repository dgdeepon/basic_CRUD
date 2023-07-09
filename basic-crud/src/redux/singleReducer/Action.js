import axios from "axios";
import { DATA_CLEAN, GET_SINGLE_DATA_FAIL, GET_SINGLE_DATA_REQ, GET_SINGLE_DATA_SUCC, SET_DATA } from "./ActionType"


export const localDataClean=(dispatch)=>{
    dispatch({type:DATA_CLEAN});
}

export const getSingleData=({id,reload,setReload})=>(dispatch)=>{
    dispatch({type:GET_SINGLE_DATA_REQ});

    axios.get(`${process.env.REACT_APP_API}/user/${id}`)
    .then((res)=>{
        setReload(!reload)
        dispatch({type:GET_SINGLE_DATA_SUCC,payload:res.data.user});
    }).catch((err)=>{
        dispatch({type:GET_SINGLE_DATA_FAIL});
    })
}