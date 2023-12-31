import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { BsFillMoonFill, BsSun } from "react-icons/bs";

const Navbar = () => {
    const { logout, user } = useContext(AuthContext)
    // console.log(user);

    const handleLogout = () => {
        logout()
            .then(() => {
                // console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }


    const [toggle, setToggle] = useState(
        JSON.parse(localStorage.getItem("theme"))
            ? JSON.parse(localStorage.getItem("theme"))
            : false
    );

    const element = document.documentElement;

    localStorage.setItem("theme", JSON.stringify(toggle));

    useEffect(() => {
        if (toggle) {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
    }, [toggle]);




    return (
        <div className="navbar bg-base-200 dark:bg-black dark:text-white lg:px-16 mt-3 rounded-full shadow-blue-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm z-50 dropdown-content mt-3  p-2 font-semibold shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li>
                            <a>Job</a>
                            <ul className="p-2">
                                <li className="my-1"><NavLink to='/addjob'>Add Job</NavLink></li>
                                <li><NavLink to="/myPostedJob">My Posted Jobs</NavLink></li>
                            </ul>
                        </li>
                        <li className="my-1"><NavLink to='/myBids'>My Bids</NavLink></li>
                        <li className="my-1"><NavLink to='/contact'>Contact</NavLink></li>
                        <li className="my-1"><NavLink to='/bidRequest'>Bids Request</NavLink></li>
                        {/* <li><NavLink to='/postjob'>Post Job</NavLink></li> */}
                    </ul>
                </div>
                <h2 className="text-3xl font-bold">ᒍᗷ</h2>
                <Link className="btn btn-ghost normal-case  font-bold text-xl">Job <span className="font-bold text-[#02D0D8]">Hunter</span> </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-semibold px-1">
                    <li ><NavLink to='/'>Home</NavLink></li>
                    <li className="mx-2" tabIndex={0}>
                        <details>
                            <summary>Job</summary>
                            <ul className="px-2 z-50 w-[150px]">
                                <li className="my-1 text-sm w-full"><NavLink to='/addjob'>Add Job</NavLink></li>
                                <li><NavLink to="/myPostedJob">My Posted Jobs</NavLink></li>
                            </ul>
                        </details>
                    </li>
                    <li className="mx-2"><NavLink to='/myBids'>My Bids</NavLink></li>
                    <li className="my-1"><NavLink to='/contact'>Contact</NavLink></li>
                    <li className="mx-2"><NavLink to="/bidRequest">Bids Request</NavLink></li>
                    {/* <li><NavLink to='/postjob'>Post Job</NavLink></li> */}
                </ul>
            </div>
            <div className="navbar-end">
                <div className=" mr-2 lg:mr-10">

                    <h3 onClick={() => setToggle(!toggle)}> {toggle ? <BsSun className="font-bold text-2xl"></BsSun> : <BsFillMoonFill className="font-bold text-2xl"></BsFillMoonFill>} </h3>

                </div>
                {
                    user?.email ? <div className="dropdown  z-50 dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><p> {user?.displayName} </p></li>
                            <li><button onClick={handleLogout} className=" text-center text-white text-sm my-1 bg-[#327289]">Logout</button></li>
                        </ul>
                    </div> : <Link to="/login"><button className="btn text-white hover:bg-[#1dafe0] bg-[#327289]">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;