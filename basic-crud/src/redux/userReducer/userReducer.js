import { DATA_ADD_FAIL, DATA_ADD_REQ, DATA_ADD_SUCC, DATA_DELETE_FAIL, DATA_DELETE_REQ, DATA_DELETE_SUCC, DATA_FAIL, DATA_REQ, DATA_SUCC, DATA_UPDATE_FAIL, DATA_UPDATE_REQ, DATA_UPDATE_SUCC } from "./ActionType";


const init={
    data:[],
    isLoading:false,
    isError:false
}

export const userReducer=(state=init,action)=>{
    switch(action.type){

        // get cases
        case DATA_REQ:
            return{
                ...state,
                data:[],
                isLoading:true,
                isError:false
            }
        case DATA_SUCC:
            return {
                ...state,
                data:action.payload,
                isLoading:false,
                isError:false
            }
        case DATA_FAIL:
            return {
                ...state,
                data:[],
                isLoading:false,
                isError:true
            }

            // adding cases
        case DATA_ADD_REQ:
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        case DATA_ADD_SUCC:
            return {
                ...state,
                isLoading:false,
                isError:false
            }
        case DATA_ADD_FAIL:
            return {
                ...state,
                isLoading:false,
                isError:true
            } 

            // update cases
        case DATA_UPDATE_REQ:
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        case DATA_UPDATE_SUCC:
            return {
                ...state,
                isLoading:false,
                isError:false
            }
        case DATA_UPDATE_FAIL:
            return {
                ...state,
                isLoading:false,
                isError:true
            }

            // delete cases
        case DATA_DELETE_REQ:
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        case DATA_DELETE_SUCC:
            return {
                ...state,
                isLoading:false,
                isError:false
            }
        case DATA_DELETE_FAIL:
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        default:
            return state;
    }
}