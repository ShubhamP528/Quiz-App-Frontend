import { createContext, useContext, useState } from "react";
// import { useQuestionhook } from "../hooks/useQuestion";

const AppContext=createContext()

export const AppContextProvider=({children})=>{

    // const {questions, subject, setSubject}=useQuestionhook()
    const [ans, setAns]=useState([])

   const value={ans,setAns}
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
} 

export const useAppContext=()=>{
    return useContext(AppContext)
}