import { useContext } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../Provider/AuthProvider';


const AddJob = () => {
    const { user } = useContext(AuthContext)

    const handleForm = e => {
        e.preventDefault();
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
        // console.log(products);

        fetch("http://localhost:5000/jobs", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    swal("Good job!", "Product added Successful!", "success")
                    form.reset()
                
                }
            })






    }

    return (
        <div className="max-w-[1240px] mx-auto mt-10 bg-[#327289]  my-7 ">
            <h3 className="text-5xl text-center items-center font-bold text-white">Post Job</h3>
            <div className="border-rose-100  border mt-6 p-4">
                <form onSubmit={handleForm} >
                    <div className="flex justify-around items-center ">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Email of the employer</span>
                            </label>
                            <input type="email" placeholder="Owner Email" readOnly value={user?.email} className="input  input-bordered w-[90%] " name="email" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Job Title</span>
                            </label>
                            <input required type="text" placeholder="Type here job title" className="input input-bordered w-[90%]" name="jobTitle" />
                        </div>
                    </div>
                    <div className="flex  my-4 items-center justify-center">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Job Category</span>
                            </label>
                            <select required id="categorySelect" className="select border-gray-400 w-[90%] ">
                                <option disabled selected>Pick up the category</option>
                                <option >Web Development</option>
                                <option>Digital Marketing</option>
                                <option>Graphics Design</option>

                            </select>
                        </div>
                        <div className="w-full">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text font-semibold text-white">Deadline</span>
                                </label>
                                <input required type="date" placeholder="Type here job deadline" className="input  w-[90%] input-bordered " name="deadline" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-around items-center ">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold text-white">Minimum price</span>
                            </label>
                            <input required type="text" placeholder="Type here Price" className="input  w-[90%] input-bordered " name="minimumPice" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Maximum price</span>
                            </label>
                            <input required type="text" placeholder="Type here Short Description" className="input input-bordered w-[90%]" name="maximumPrice" />
                        </div>
                    </div>
                    <div className="flex justify-around items-center ">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Description</span>
                            </label>
                            <div className="w-[40%]">
                                <textarea required className=" w-full border-2 border-gray-400" name="description" id="" cols="20" rows="4" ></textarea>
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-center items-center w-full">
                        <input className="btn mt-2 border-[#1b2141] bg-[#327289] text-white hover:bg-[#1b2141] w-full mt-6" type="submit" value="Submit Now" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddJob;