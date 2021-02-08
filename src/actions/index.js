import { SIGN_IN, SIGN_OUT, GET_PROJECTS , GET_METADATA,CREATE_PROJECT} from "./types";
import projects from "../apis/projects";

export const signIn = (name, useremail) => {
  return {
    type: SIGN_IN,
    payload: {
      name: name,
      email: useremail,
    },
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const getProjectList = () => async (dispatch) => {
  const response = await projects.get("/project");
  dispatch({ type: GET_PROJECTS, payload: response.data });
};


export const getMetatData=()=>async(dispatch )=>{
  const response= await projects.get("/metadata");
  dispatch({ type: GET_METADATA, payload: response.data });

}


export const createProject=(formvalues)=>async(dispatch )=>{
  const response= await projects.post("/project/add",formvalues);

  console.log("CREATE",response.data);
  dispatch({ type: CREATE_PROJECT, payload: response.data });
}