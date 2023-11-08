import { useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

const MyBids = () => {
    const [BidData, setBidData] = useState([])
    const bids = useLoaderData()
    const { user } = useContext(AuthContext)
    // console.log(bids);
    useEffect(() => {
        const filterUserData = bids.filter(item => item.clientEmail == user?.email)
        setBidData(filterUserData)

    }, [bids, user?.email])

    const handleJOb = id => {
        console.log(id);
    }


    const handleComplete = id => {
        // console.log(id);
        fetch(`http://localhost:5000/bidJobs/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: "complete" })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = BidData.filter(item => item._id !== id)
                    const updated = BidData.find(item => item._id === id)
                    updated.status = "In progress";
                    const result = [updated, ...remaining]
                    setBidData(result)
                }
            })
    }

    // console.log(data);
    return (
        <div className="overflow-x-auto  h-[60vh] my-10 max-w-6xl mx-auto text-white ">

            <table className="table text-black">
                {/* head */}
                <thead>
                    <tr>
                        <th className="text-black text-xl" >Job Title</th>
                        <th className="text-black text-xl"> Your Email </th>
                        <th className="text-black text-xl">Deadline</th>
                        <th className="text-black text-xl"> Status </th>
                    </tr>
                </thead>
                {
                    BidData?.map(item => <tbody key={item._id}>
                        {/* row 1 */}
                        <tr>
                            <td>

                                {item?.jobTitle}
                            </td>
                            <td>
                                {item?.clientEmail}

                            </td>
                            <td>  {item?.deadline} </td>
                            <th>
                                {
                                    item?.status === "In progress" || item?.status === "Rejected" ?
                                        <div>
                                            {
                                                item?.status === "In progress" ? <div className="flex flex-col gap-1">
                                                    <ProgressBar
                                                        percent={50}
                                                        filledBackground="linear-gradient(to right, #FF0000, #008000)"
                                                    />
                                                    <button onClick={() => handleComplete(item?._id)} className="px-2 py-1 text-white bg-success mx-auto">Complete</button>
                                                </div> : <span className="font-bold text-error"> Canceled</span>
                                            }
                                        </div>
                                        :
                                        <div>
                                            {
                                                item?.status === "complete" ?
                                                    <div>
                                                        <ProgressBar
                                                            percent={100}
                                                            filledBackground="linear-gradient(to right, #FF0000, #008000)"
                                                        />
                                                    </div>

                                                    :
                                                    <Link onClick={() => handleJOb(item._id)}><button className="btn btn-primary btn-xs">Pending</button></Link>
                                            }
                                        </div>

                                }
                            </th>
                        </tr>
                    </tbody>)
                }


            </table>




            <Toaster></Toaster>
        </div>
    );
};

export default MyBids;