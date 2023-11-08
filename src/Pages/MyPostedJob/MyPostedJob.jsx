import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyPostedJob = () => {
    const { user } = useContext(AuthContext)
    const [forUpdate, setForUpdate] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/jobs/${user?.email}`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setForUpdate(data)
            })

    }, [user?.email])
    console.log(forUpdate);

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/jobs/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => console.log(data))

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

                const remaining = forUpdate.filter(item => item._id !== id)
                setForUpdate(remaining)
            }
        });


    }

    return (
        <div className="my-10">

            <Helmet>
                <meta charSet="utf-8" />
                <title>JB | Posted Job </title>
            </Helmet>

            <div className='grid ml-4 dark:bg-black dark:text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-3 gap-y-3'>
                {
                    forUpdate.map(job => <div key={job._id} className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body dark:bg-black">
                            <h2 className="card-title text-xl font-bold"> {job?.jobTitle} <span className="badge flex text-white dark:bg-black dark:text-white  bg-[#327289] ">Full time</span>
                            </h2>
                            <p> <span className="text-red-500 dark:text-white  font-semibold">Price</span>: {job?.minimumPice}$ - {job?.maximumPrice} </p>
                            <p className="dark:text-white ">Deadline: {job?.deadline} </p>
                            <p className="dark:text-white "> {job?.description.slice(0, 200)} </p>
                            <div className="card-actions justify-end">
                                <Link to={`/updateJob/${job?._id}`}>
                                    <button className="btn dark:text-white  bg-[#327289] text-white font-semibold">Update</button>
                                </Link>
                                <Link onClick={() => handleDelete(job?._id)}>
                                    <button className="btn dark:text-white  bg-error text-white font-semibold">Delete</button>
                                </Link>

                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default MyPostedJob;