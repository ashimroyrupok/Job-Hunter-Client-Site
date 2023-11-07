import { useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const MyBids = () => {
    const [data, setData] = useState([])
    const bids = useLoaderData()
    const { user } = useContext(AuthContext)
    // console.log(bids);
    useEffect(() => {
        const filterUserData = bids.filter(item => item.clientEmail == user?.email)
        setData(filterUserData)

    }, [bids, user?.email])

    const handleJOb = id => {
        console.log(id);
    }

    console.log(data);
    return (
        <div className="my-10">

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
                    data?.map(item => <tbody key={item._id}>
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
                                <Link onClick={() => handleJOb(item._id)}><button className="btn btn-primary btn-xs">Pending</button></Link>
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