import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyPostedJob = () => {
    const {user} =useContext(AuthContext)
    const [forUpdate ,setForUpdate] =useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/jobs/${user?.email}`, {
            method: "GET"
        })
        .then(res => res.json())
        .then(data => setForUpdate(data))

    },[])

    return (
        <div>

            {forUpdate.length}
            
        </div>
    );
};

export default MyPostedJob;