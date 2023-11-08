import { Link } from "react-router-dom";

import image from "../../assets/aa.gif"

const ErrorPage = () => {
    return (
        <div className="   mt-10">

            <div className="flex justify-center items-center">
                <img className="w-[30%]" src={image} alt="" />
            </div>


            <Link className="text-4xl flex items-center justify-center mt-4 " to='/'> <button className="btn btn-primary">Go Home</button> </Link>

        </div>
    );
};

export default ErrorPage;