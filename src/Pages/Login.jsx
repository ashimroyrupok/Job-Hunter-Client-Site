import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import animation from "../assets/Animation - 1696665460395.gif"

const Login = () => {
    const navigate = useNavigate()
    const { login, googleSignin } = useContext(AuthContext)
    // console.log(login);
    const handleLogin = async(e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);
        const toastId = toast.loading("logging in....")

        try {
            await login(email, password)
            toast.success('login success', { id: toastId })
            navigate('/')


        }
        catch (err) {
            toast.error(err.message, { id: toastId })

        }
    }

    const handleGoogleSign = () => {

        const toastLoading = toast.loading("logging in....")


        googleSignin()
            .then(res => {
                console.log(res);
                toast.success('login successful', {id:toastLoading})
                navigate('/');

            })
            .catch(err => {
                toast.error(err.message , {id: toastLoading})
            })
    }

    return (
        <div className="bg-base-200 my-11 py-3 ">
            <h3 className=" text-center font-bold mt-14 text-5xl">Login Now</h3>
            <div className="hero min-h-[60vh]  ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" h-full  flex-1">

                        {/* <img className="h-[700px]" src="https://i.ibb.co/vHw7yzr/access-control-system-abstract-concept-335657-3180-removebg-preview.png" alt="" /> */}
                        <img className="h-[700px]" src="https://i.ibb.co/BnZrLF7/Animation-1696665460395.gif" alt="" />

                    </div>
                    <div className="card flex-1 flex-shrink-0 w-full h-[75%] max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn hover:bg-[#1dafe0]  bg-[#327289] text-white ">Login</button>
                            </div>
                            <div className="my-3 text-center">
                                <p className="text-gray-400 font-semibold" >New in Job Hunter? <span className=" font-bold text-[#327289] underline"> <Link to='/register'>Register</Link> </span> </p>
                            </div>
                            <div className="w-full text-center">
                                <h2 onClick={handleGoogleSign} className="btn hover:bg-[#1dafe0]  bg-[#327289] text-white ">  <FcGoogle className="text-3xl font-bold"></FcGoogle> Sign in With Google </h2>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Login;