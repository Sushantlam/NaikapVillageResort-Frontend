import { createContext, useEffect, useReducer } from "react"


const inititalValue ={
    email: JSON.parse(localStorage.getItem("email"))|| null,
    loading:false,
    error: null
}

export const AuthContext = createContext(inititalValue)
 const AuthReducer=(state,action)=>{
    switch(action.type)
    {
        case "Login_Start":
        return{
          email:null,
          loading:true,
          error:null
        
        }
        case "Login_Success":
            return{
                email:action.payload,
                loading:false,
                error:null
            }
            case "Login_Fail":
            return{
                email:null,
                loading:false,
                error:action.payload,
            }
            case "Log_Out":
            return{
                email:null,
                loading:false,
                error:null
            }
            default: 
           return state
    
    }
 }

 export const AuthContextProvider =({children})=>{
    
    

    const [state,dispatch]= useReducer(AuthReducer, inititalValue)
    useEffect(() => {
    
        localStorage.setItem("email", JSON.stringify(state.email))
    }, [state.email])
    return (<AuthContext.Provider value={{...state,dispatch}}>{children}</AuthContext.Provider>)
 }