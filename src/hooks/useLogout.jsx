import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../GlobleContext/AuthContext";
import toast from "react-hot-toast";

export const useLogout=()=>{
    const {dispatch}=useAuthContext()
    const navigate=useNavigate()

    const logout=()=>{
        // remove user form local storage
        localStorage.removeItem('user')
        navigate('/home')
        toast.success("Successfully logout")
        // dispatch logout action
        dispatch({type:'LOGOUT'})
    }

    return {logout}
}