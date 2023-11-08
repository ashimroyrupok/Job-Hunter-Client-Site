import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const UpdateJob = () => {


    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const job = useLoaderData()
    const [updatedJob, setUpdatedJob] = useState({})


    useEffect(() => {
        const find = job.find(item => item._id === id)
        setUpdatedJob(find);

    }, [id, job])
    // console.log(updatedJob);


    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target
        const BuyerEmail = form.email.value
        const jobTitle = form.jobTitle.value

        const select = document.getElementById("categorySelect");
        const selectedOption = select.options[select.selectedIndex];
        const selectedCategory = selectedOption.value;


        const deadline = form.deadline.value;
        const minimumPice = form.minimumPice.value

        const maximumPrice = form.maximumPrice.value;
        const description = form.description.value;
        const products = { BuyerEmail, jobTitle, selectedCategory, minimumPice, deadline, maximumPrice, description }

        fetch(`https://job-hunter-server-site.vercel.app/jobs/${updatedJob._id}`,{
            method:"PUT",
            headers:{
                'Content-Type':"application/json"
            },
            body: JSON.stringify(products)
        })
        .then(res => res.json())
        .then(data =>{ 
            console.log(data)
            if(data.modifiedCount > 0){
                toast.success('updated successful')
            }
        })

        
    }

    return (
        <div className="max-w-[1240px] mx-auto mt-10 bg-[#327289]  my-7 ">
            <h3 className="text-5xl text-center items-center font-bold text-white">Update Job Information</h3>
            <div className="border-rose-100  border mt-6 p-4">
                <form onSubmit={handleUpdate} >
                    <div className="flex justify-around items-center ">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Email of the Buyer</span>
                            </label>
                            <input type="email" placeholder="Buyer Email" readOnly value={updatedJob?.BuyerEmail} className="input opacity-75  input-bordered w-[90%] " name="email" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Job Title</span>
                            </label>
                            <input required type="text" defaultValue={updatedJob?.jobTitle} placeholder="Type here job title" className="input input-bordered w-[90%]" name="jobTitle" />
                        </div>
                    </div>
                    <div className="flex  my-4 items-center justify-center">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Job Category</span>
                            </label>
                            <select value={updatedJob?.selectedCategory} required id="categorySelect" className="select border-gray-400 w-[90%] ">
                                <option selected>Pick up the category</option>
                                <option >Web Development</option>
                                <option>Digital Marketing</option>
                                <option>Graphics Design</option>

                            </select>
                        </div>
                        <div  className="w-full">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text font-semibold text-white">Deadline ( {updatedJob?.deadline} ) </span>
                                </label>
                                <input required  type="date" placeholder="Type here job deadline" className="input  w-[90%] input-bordered " name="deadline" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-around items-center ">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold text-white">Minimum price</span>
                            </label>
                            <input required defaultValue={updatedJob?.minimumPice} type="text" placeholder="Type here Price" className="input  w-[90%] input-bordered " name="minimumPice" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Maximum price</span>
                            </label>
                            <input required defaultValue={updatedJob?.maximumPrice} type="text" placeholder="Type here Short Description" className="input input-bordered w-[90%]" name="maximumPrice" />
                        </div>
                    </div>
                    <div className="flex justify-around items-center ">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Description</span>
                            </label>
                            <div className="w-[40%]">
                                <textarea required defaultValue={updatedJob?.description} className=" w-full border-2 border-gray-400" name="description" id="" cols="20" rows="4" ></textarea>
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-center items-center w-full">
                        <input className="btn  border-[#1b2141] bg-[#327289] text-white hover:bg-[#1b2141] w-full mt-6" type="submit" value="Update Now" />
                    </div>
                </form>
            </div>

            <Toaster></Toaster>

        </div>

    );
};

export default UpdateJob;