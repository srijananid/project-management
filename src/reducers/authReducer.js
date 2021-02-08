import { SIGN_IN, SIGN_OUT ,GET_PROJECTS} from "../actions/types";
import _ from 'lodash';

const INITIAL_STATE={
    isSignedIn:null,
    email : null,
    name:null
};

export default(state=INITIAL_STATE,action)=>{

    switch (action.type) {

        case SIGN_IN:
            return {...state, isSignedIn : true, email:action.payload.email , name:action.payload.name};

    
        case SIGN_OUT:
            return {...state, isSignedIn : false,email:null};
    
        default:
            return state;
    }
}