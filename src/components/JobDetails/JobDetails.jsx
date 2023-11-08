import { useContext, useEffect, useState, } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import swal from "sweetalert";

const JobDetails = () => {
    const { user } = useContext(AuthContext)
    const data =useLoaderData()
    const {id} = useParams()
    // console.log(id);
    // console.log(data);
    const [bidData , setBidData] = useState({})
    const {  jobTitle } = bidData
    // console.log(jobTitle);

    const navigate = useNavigate()

    const handleBid = e => {
        e.preventDefault()
        const form = e.target;
        const BuyerEmail = form.buyerEmail.value;
        const clientEmail = form.clientEmail.value;
        const bidAmount = form.bidAmount.value;
        const deadline = form.deadline.value;
        const bidData = { BuyerEmail, clientEmail, bidAmount, deadline, jobTitle }
        // setBidData(bidData)
        // console.log(bidData);

        fetch('http://localhost:5000/bidJobs', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bidData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged == true) {
                    swal("Good job!", "Your Bid successful!", "success");
                    navigate('/myBids')

                }
            })

    }

    useEffect(()=> {
        const filter = data.find(item => item._id === id)
        setBidData(filter);

    },[])

    console.log(bidData);


    const handleBidForm = () => {
        const BidForm = document.getElementById('BidForm')
        BidForm.classList.remove('hidden')

    }



    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 ">

            <div>
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold"> {bidData?.jobTitle} <span className="badge flex text-white  bg-[#327289] ">Full time</span>
                    </h2>
                    <p> <span className="text-red-500 font-semibold">Price</span>: {bidData?.minimumPice}$ - {bidData?.maximumPrice} </p>
                    <p> <span className="font-semibold  ">Deadline</span> : {bidData?.deadline} </p>
                    <p className="text-slate-400"> <span className="text-xs text-black font-semibold">Job Description</span> {bidData?.description} </p>
                    <div className="card-actions justify-end">

                        <button onClick={handleBidForm} className="btn bg-[#327289] text-white font-semibold">Place your bid form
                        </button>

                    </div>
                </div>

            </div>

            <div id="BidForm"  className="max-w-[1240px] hidden mx-auto mt-10 bg-[#327289]  my-7 ">
                <h3 className="text-5xl text-center items-center font-bold text-white">Biding information</h3>
                <div className="border-rose-100  border mt-6 p-4">
                    <form onSubmit={handleBid} >
                        <div className="flex justify-around items-center ">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Buyer Email</span>
                                </label>
                                <input type="buyerEmail" placeholder="Owner Email" readOnly value={bidData?.BuyerEmail} className="input  input-bordered w-[90%] " name="buyerEmail" />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Your Email</span>
                                </label>
                                <input required defaultValue={user?.email} type="email" placeholder="Type here job title" className="input input-bordered w-[90%]" name="clientEmail" />
                            </div>
                        </div>
                        <div className="flex justify-around items-center ">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text font-semibold text-white"> Bidding amount</span>
                                </label>
                                <input required type="text" placeholder="Type here Price" className="input  w-[90%] input-bordered " name="bidAmount" />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text  text-white font-semibold"> Deadline </span>
                                </label>
                                <input readOnly defaultValue={bidData?.deadline} required type="text" placeholder="Type here Short Description" className="input input-bordered w-[90%]" name="deadline" />
                            </div>
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <input disabled={user?.email === bidData?.BuyerEmail} id="buttonBid" className="btn border-[#1b2141] bg-[#327289] text-white hover:bg-[#1b2141] w-full mt-6" type="submit" value=" Bid Now" />
                        </div>
                    </form>
                </div>

            </div>


        </div>
    );
}

export default JobDetails;



