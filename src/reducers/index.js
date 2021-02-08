import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import projectdataReducer from "./projectdataReducer";

export default combineReducers({
  auth: authReducer,
  projects: projectReducer,
  projectdata: projectdataReducer,
  form : formReducer
});
