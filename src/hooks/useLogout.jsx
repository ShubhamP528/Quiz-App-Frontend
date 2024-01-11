import { useAuthContext } from "../GlobleContext/AuthContext";
import toast from "react-hot-toast";

export const useLogout=()=>{
    const {dispatch}=useAuthContext()

    const logout=()=>{
        // remove user form local storage
        localStorage.removeItem('user')
        toast.success("Successfully logout")
        // dispatch logout action
        dispatch({type:'LOGOUT'})
    }

    return {logout}
}