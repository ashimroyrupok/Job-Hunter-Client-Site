import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const JobDetails = () => {
    const { user } = useContext(AuthContext)
    const { deadline, description, minimumPice, maximumPrice, jobTitle,BuyerEmail } = useLoaderData()

    const handleBid = e => {
        e.preventDefault()
        const form = e.target;
        const BuyerEmail = form.buyerEmail.value;
        const clientEmail = form.clientEmail.value;
        const bidAmount = form.bidAmount.value;
        const deadline = form.deadline.value;
    }

    let date = new Date().toJSON().slice(0,16);

    return (
        <div className="grid grid-cols-2 ">

            <div>
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold"> {jobTitle} <span className="badge flex text-white  bg-[#327289] ">Full time</span>
                    </h2>
                    <p> <span className="text-red-500 font-semibold">Price</span>: {minimumPice}$ - {maximumPrice} </p>
                    <p>Deadline: {deadline} </p>
                    <p> {description} </p>
                    <div className="card-actions justify-end">

                        <button className="btn bg-[#327289] text-white font-semibold">Place your bid form
                        </button>

                    </div>
                </div>

            </div>




            <div className="max-w-[1240px] mx-auto mt-10 bg-[#327289]  my-7 ">
                <h3 className="text-5xl text-center items-center font-bold text-white">Your Biding information</h3>
                <div className="border-rose-100  border mt-6 p-4">
                    <form  >
                        <div className="flex justify-around items-center ">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Buyer Email</span>
                                </label>
                                <input type="buyerEmail" placeholder="Owner Email" readOnly value={BuyerEmail} className="input  input-bordered w-[90%] " name="email" />
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
                                    <span className="label-text font-semibold text-white"> Your bidding amount</span>
                                </label>
                                <input required type="text" placeholder="Type here Price" className="input  w-[90%] input-bordered " name="minimumPice" />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-white font-semibold"> Deadline </span>
                                </label>
                                <input defaultValue={date} readOnly required type="text" placeholder="Type here Short Description" className="input input-bordered w-[90%]" name="deadline" />
                            </div>
                        </div>
                        {/* <div className="flex justify-center items-center w-full">
                            <input className={`  ${BuyerEmail===user?.email ? "disabled:opacity-70" : "btn   border-[#1b2141] bg-[#327289] text-white hover:bg-[#1b2141] w-full mt-6" type="submit" value=" Bid on the project" }  `} />
                        </div> */}
                    </form>
                </div>

            </div>

        </div>
    );
};

export default JobDetails;