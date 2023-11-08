import { useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import { Helmet } from "react-helmet";

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
        fetch(`https://job-hunter-server-site.vercel.app/bidJobs/${id}`, {
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
        <div className="overflow-x-auto dark:bg-black dark:text-white   h-[60vh] my-10 max-w-6xl mx-auto text-white ">

            <Helmet>
                <meta charSet="utf-8" />
                <title>JB | My Bids </title>
            </Helmet>

            <table className="table text-black">
                {/* head */}
                <thead>
                    <tr>
                        <th className="text-black dark:text-white  text-xl" >Job Title</th>
                        <th className="text-black dark:text-white  text-xl"> Your Email </th>
                        <th className="text-black dark:text-white  text-xl">Deadline</th>
                        <th className="text-black dark:text-white  text-xl"> Status </th>
                    </tr>
                </thead>
                {
                    BidData?.map(item => <tbody key={item._id}>
                        {/* row 1 */}
                        <tr className="dark:text-white ">
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
                                                    <button onClick={() => handleComplete(item?._id)} className="px-2 py-1  text-white bg-success mx-auto">Complete</button>
                                                </div> : <span className="font-bold text-error"> Canceled</span>
                                            }
                                        </div>
                                        :
                                        <div>
                                            {
                                                item?.status === "complete" ?
                                                    <div>
                                                        {/* {window.location.reload(1)} */}
                                                        <ProgressBar
                                                            percent={100}
                                                            filledBackground="linear-gradient(to right, #FF0000, #008000)"
                                                        />
                                                    </div>

                                                    :
                                                    <button className="btn btn-primary btn-xs">Pending</button>
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