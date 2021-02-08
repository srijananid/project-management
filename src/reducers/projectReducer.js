import { GET_PROJECTS,CREATE_PROJECT} from "../actions/types";
import _ from 'lodash';

const INITIAL_STATE={
   
};

export default(state=INITIAL_STATE,action)=>{

    switch (action.type) {

        case GET_PROJECTS:
            return {...state, ..._.mapKeys(action.payload,'qouteNumber')};

        case CREATE_PROJECT:
            return {...state, projectid:action.payload };
    
        default:
            return state;
    }
}