import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext)
    if(loading){
        return <div className="w-full mx-auto flex items-center justify-center">
            <img className="text-center" src="https://i.ibb.co/Z2hvNXM/Loading.gif" alt="" />
        </div>
    }
    if(user?.email){
        return children
    }

   return <Navigate to='/login'></Navigate>
    
};

export default PrivateRoute;