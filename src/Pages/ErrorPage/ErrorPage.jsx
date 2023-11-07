import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="   mt-10">

            <div className="flex justify-center items-center">
                <img src="https://i.ibb.co/JqLqWBn/404.webp" alt="" />
            </div>


            <Link className="text-4xl flex items-center justify-center mt-4 " to='/'> <button className="btn btn-primary">Go Home</button> </Link>

        </div>
    );
};

export default ErrorPage;