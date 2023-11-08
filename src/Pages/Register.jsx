import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

const Register = () => {

    const { signup, userData } = useContext(AuthContext)
    // console.log(userData);
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photourl = form.photourl.value;
        const password = form.password.value;
        // console.log(name,email,photourl,password);
        signup(email, password)
            .then(res => {
                console.log(res.user);
                toast.success("user created successful")
                userData(name, photourl)
                navigate('/')
            })
            .catch(err => {
                // console.log(err.message);
                const error = err.message
                toast.error(error)
            })
    }
    return (
        <div className="bg-base-200 my-11 py-3 ">
            <Helmet>
                <meta charSet="utf-8" />
                <title>JB | Register </title>
            </Helmet>
            <h3 className=" text-center font-bold mt-14 text-5xl">Register Now</h3>
            <div className="hero min-h-[70vh]  ">
                <div className="hero-content flex-col lg:flex-row">

                    <div className="card flex-1   w-full  max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input name="photourl" type="text" placeholder="photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn hover:bg-[#1dafe0]  bg-[#327289] text-white ">Register</button>
                            </div>
                            <div className="my-3 text-center">
                                <p className="text-gray-400 font-semibold" >Already have an account? <span className=" font-bold text-[#327289] underline"> <Link to="/login">Login</Link> </span> </p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Register;