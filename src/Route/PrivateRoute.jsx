import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext)
    if(loading){
        return <img src="https://i.ibb.co/Z2hvNXM/Loading.gif" alt="" />
    }
    if(user?.email){
        return children
    }

   return <Navigate to='/login'></Navigate>
    
};

export default PrivateRoute;