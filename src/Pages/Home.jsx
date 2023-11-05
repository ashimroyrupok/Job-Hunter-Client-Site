import Banner from "../components/Banner/Banner";
import { Toaster } from "react-hot-toast";
import Categories from "../components/Categories/Categories";

const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>


            <Toaster></Toaster>

        </div>
    );
};

export default Home;