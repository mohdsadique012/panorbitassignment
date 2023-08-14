import { useContext, createContext, useEffect,useState, useReducer } from "react";
import AllProfile from "../Reducer/ProfileReducer"
import  axios  from 'axios';

/* API URL */
const ALLPRODUCTURL = "https://panorbit.in/api/users.json"

const AppContext = createContext();

/* Initial State */
const intialState = {
    is_loading: false,
    is_error: false,
    profiles: [],
    status:true,
    name:"Profile",
    filteredProfiles:[],
    randomProfile:[],
    is_single_loading: false,
    is_single_error: false,
};



const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AllProfile, intialState);
    const getProfile = async (url) => {
  
        dispatch({ type: "IS_LOADING" });
        try {
            const res = await axios.get(url);
            const profiles = await res.data;
           console.log(profiles,"111")
            dispatch({ type: "SET_API_DATA", payload: profiles });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    }

    const getProfileId = async (id) => {
         console.log(id,"jjj")
        dispatch({ type: "IS_LOADING" });
        try {
            dispatch({ type: "FILTER_PROFILES", payload: id });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    }
    function getStatus(status,profile) {
        console.log(status,profile,"fkgbvkiszhjfiskf")
        dispatch({ type: "IS_LOADING" });
        try {
            dispatch({ type: "FILTER_STATUS",  payload: { prop1: status, prop2: profile }, });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
        
      }
     
      
    useEffect(() => {   
        getProfile(ALLPRODUCTURL)     
       
    }, []);
    return (
        <AppContext.Provider value={{ ...state, getProfile ,getProfileId,getStatus}}  >
            {children}
        </AppContext.Provider>
    );
}

const useProfileGlobal = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useProfileGlobal };