import axios from "axios";
import { DATA_ADD_FAIL, DATA_ADD_REQ, DATA_ADD_SUCC, DATA_DELETE_FAIL, DATA_DELETE_REQ, DATA_DELETE_SUCC, DATA_FAIL, DATA_REQ, DATA_SUCC, DATA_UPDATE_FAIL, DATA_UPDATE_REQ, DATA_UPDATE_SUCC } from "./ActionType"


// get
export const getData=(dispatch)=>{
    dispatch({type:DATA_REQ});

    axios.get(`${process.env.REACT_APP_API}/user`)
    .then((res)=>{
        dispatch({type:DATA_SUCC,payload:res.data.data});
    }).catch((err)=>{
        dispatch({type:DATA_FAIL})
    })
};

// post and put
export const postData=(data)=>(dispatch)=>{
    
    // put
    if(data.id){
        dispatch({type:DATA_UPDATE_REQ});

        axios.put(`${process.env.REACT_APP_API}/user/update/${data.id}`,{name:data.name,email:data.email,phone:data.phone})
        .then((res)=>{
            alert(res.data.message)
            dispatch({type:DATA_UPDATE_SUCC});
        }).catch((err)=>{
            dispatch({type:DATA_UPDATE_FAIL});
        })


    }else{
        // post
        dispatch({type:DATA_ADD_REQ});
        
        axios.post(`${process.env.REACT_APP_API}/user/addUser`,{name:data.name,email:data.email,phone:data.phone})
        .then((res)=>{
            alert(res.data.message);
            dispatch({type:DATA_ADD_SUCC,payload:res.data.data});
        }).catch((err)=>{
            dispatch({type:DATA_ADD_FAIL})
        })
    }
};

// delete
export const deleteData=({id,setReload,reload})=>(dispatch)=>{
    dispatch({type:DATA_DELETE_REQ});

    axios.delete(`${process.env.REACT_APP_API}/user/delete/${id}`)
    .then((res)=>{
        alert(res.data.message);
        // reloading the main component
        setReload(!reload);
        dispatch({type:DATA_DELETE_SUCC});
    }).catch((err)=>{
        dispatch({type:DATA_DELETE_FAIL});
    })
}

