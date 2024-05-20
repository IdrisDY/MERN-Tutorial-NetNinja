const { createContext, useReducer } = require("react");

export const WorkoutsContext = createContext();

export const workoutReducer = (state,action)=>{
switch (action.type) {
    case 'SET_WORKOUTS':
        return{
            workouts:action.payload
        }

    case 'CREATE_WORKOUTS':
        return{
            workouts:[action.payload ,...state.workouts]
        }
    case 'DELETE_WORKOUT':

        return{
            workouts:state.workouts.filter(item=>item._id !== action.payload._id)
        }
    default:
        return state
        break;
}
}

export const WorkoutsContextProvider = ({ children }) => {

    const [state,dispatch] =  useReducer(workoutReducer,{
        workouts:null
    })

  return <WorkoutsContext.Provider value={{...state,dispatch}}>{children}</WorkoutsContext.Provider>;
};
