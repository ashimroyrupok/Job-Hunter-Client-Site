import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Toaster } from "react-hot-toast";

import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import { Helmet } from "react-helmet";

const BIdRequest = () => {

    const { user } = useContext(AuthContext)
    const [reqData, setReqData] = useState([])

    useEffect(() => {
        fetch(`https://job-hunter-server-site.vercel.app/bidJobs/${user?.email}`, { credentials: "include" }, {
            method: "GET",
        })
            .then(res => res.json())
            .then(data => {
                setReqData(data);
            })
    }, [user?.email])


    const handleAccept = id => {
        // console.log(id);
        fetch(`https://job-hunter-server-site.vercel.app/bidJobs/${id}`, {
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
        fetch(`https://job-hunter-server-site.vercel.app/bidJobs/${id}`, {
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
        <div className="overflow-x-auto  my-10 max-w-6xl mx-auto text-white ">

            <Helmet>
                <meta charSet="utf-8" />
                <title>JB | Bid Request </title>
            </Helmet>

            <table className="table text-black dark:bg-black dark:text-white">
                {/* head */}
                <thead>
                    <tr className="w-full">
                        <th className="text-black dark:text-white text-xl w-[20%]" >Job Title</th>
                        <th className="text-black dark:text-white text-xl w-[20%]"> Client Email </th>
                        <th className="text-black dark:text-white text-xl w-[20%]"> Bid Amount </th>
                        <th className="text-black dark:text-white text-xl w-[20%]">Deadline</th>
                        <th className="text-black dark:text-white text-xl w-[20%]"> Status </th>
                        {/* <th className="text-black text-xl"> Status </th> */}
                    </tr>
                </thead>
                {
                    reqData?.map(item => <tbody key={item._id}>
                        {/* row 1 */}
                        <tr className="w-full">
                            <td className="w-[20%]">  {item?.jobTitle} </td>
                            <td className="w-[20%]">  {item?.clientEmail}  </td>
                            <td className="w-[20%]">  {item?.bidAmount} $ </td>
                            <td className="w-[20%]">  {item?.deadline} </td>
                            <td className="w-[20%]">
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
                                                /> :
                                                    <div className="flex gap-4">

                                                        <button onClick={() => handleAccept(item?._id)} className="btn  btn-success">Accept</button>
                                                        <button onClick={() => handleDelete(item?._id)} className="btn mx-2 btn-error">Delete</button>

                                                    </div>
                                            }
                                        </div>




                                }



                            </td>
                        </tr>
                    </tbody>)
                }


            </table>




            <Toaster></Toaster>
        </div>
    );
};

export default BIdRequest;