import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Toaster } from "react-hot-toast";

import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

const BIdRequest = () => {

    const { user } = useContext(AuthContext)
    const [reqData, setReqData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/bidJobs/${user?.email}`, {
            method: "GET",
        })
            .then(res => res.json())
            .then(data => {
                setReqData(data);
            })
    }, [user?.email])


    const handleAccept = id => {
        // console.log(id);
        fetch(`http://localhost:5000/bidJobs/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: "In progress" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reqData.filter(item => item._id !== id)
                    const updated = reqData.find(item => item._id === id)
                    updated.status = "In progress";
                    const result = [updated, ...remaining]
                    setReqData(result)
                }
            })

    }

    const handleDelete = id => {
        console.log(id);
        fetch(`http://localhost:5000/bidJobs/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: "Rejected" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reqData.filter(item => item._id !== id)
                    const updated = reqData.find(item => item._id === id)
                    updated.status = "Rejected";
                    const result = [updated, ...remaining]
                    setReqData(result)
                }
            })
    }

    return (
        <div className="my-10">

            <table className="table text-black">
                {/* head */}
                <thead>
                    <tr>
                        <th className="text-black text-xl" >Job Title</th>
                        <th className="text-black text-xl"> Client Email </th>
                        <th className="text-black text-xl"> Bid Amount </th>
                        <th className="text-black text-xl">Deadline</th>
                        <th className="text-black text-xl"> Status </th>
                        {/* <th className="text-black text-xl"> Status </th> */}
                    </tr>
                </thead>
                {
                    reqData?.map(item => <tbody key={item._id}>
                        {/* row 1 */}
                        <tr>
                            <td>  {item?.jobTitle} </td>
                            <td>  {item?.clientEmail}  </td>
                            <td>  {item?.bidAmount} $ </td>
                            <td>  {item?.deadline} </td>
                            <td>
                                {
                                    item?.status === "In progress" || item?.status === "Rejected" ? <div>
                                        {
                                            item?.status === "In progress" ? <ProgressBar
                                            percent={50}
                                            filledBackground="linear-gradient(to right, #FF0000, #008000)"
                                        /> : <span className="font-bold text-error"> Rejected</span>
                                        }
                                    </div> :
                                    <div> 
                                        {
                                            item?.status === "complete" ? <ProgressBar
                                            percent={100}
                                            filledBackground="linear-gradient(to right, #FF0000, #008000)"
                                        />  :
                                            <div className="flex gap-4">

                                            <button onClick={() => handleAccept(item?._id)} className="btn  btn-success">Accept</button>
                                            <button onClick={() => handleDelete(item?._id)} className="btn mx-2 btn-error">Delete</button>

                                        </div>
                                        }
                                    </div>




                                }



                            </td>
                            {/* <td>
                                <Link><button className="btn btn-primary btn-xs">Pending</button></Link>
                            </td> */}
                        </tr>
                    </tbody>)
                }


            </table>




            <Toaster></Toaster>
        </div>
    );
};

export default BIdRequest;