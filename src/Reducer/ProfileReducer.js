const ProfileReducer = (state, action) => {
    switch (action.type) {
        case "IS_LOADING":
            return {
                ...state,
                is_loading: true
            };

        case "API_ERROR":
            return {
                ...state,
                is_loading: false,
                is_error: true
            };
            case "SET_API_DATA":
                
                return {
                    ...state,
                    is_loading: false,
                    is_error: false,
                    profiles: action.payload.users,
                    
                    
                };   
                case "FILTER_PROFILES":
                    let filterProfile=state.profiles.filter(profile => {
                        return profile.id==action.payload
                       
                    })
                    console.log(action.payload,"kkk")
      return {
        ...state,
        is_loading: false,
        is_error: false,
        filteredProfiles: filterProfile
      }; 

      case  "FILTER_STATUS":
      
        
      return {
          ...state,
          is_loading: false,
          is_error: false,
          status:action.payload.prop1,
          name:action.payload.prop2
          
          
      };  

        default:
            return state;
    }
}

export default ProfileReducer;