import { GET_METADATA} from "../actions/types";


const INITIAL_STATE={
   
};

export default(state=INITIAL_STATE,action)=>{

    switch (action.type) {

        case GET_METADATA:
            
            return {...state, ...action.payload};
    
        default:
            return state;
    }
}