import {DATA_CLEAN, GET_SINGLE_DATA_FAIL, GET_SINGLE_DATA_REQ, GET_SINGLE_DATA_SUCC} from './ActionType'


const init={
    data:{},
    isLoading:false,
    isError:false
}

export const singleReducer=(state=init,action)=>{
    switch(action.type){
        case GET_SINGLE_DATA_REQ:
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        case GET_SINGLE_DATA_SUCC:
            return {
                ...state,
                data:action.payload,
                isLoading:false,
                isError:false
            }
        case GET_SINGLE_DATA_FAIL:
            return {
                ...state,
                data:{},
                isLoading:false,
                isError:true
            }
        case DATA_CLEAN:
            return {
                ...state,
                data:{}
            }
        default:
            return state;
    }
}

