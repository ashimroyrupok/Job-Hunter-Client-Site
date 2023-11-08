import Banner from "../components/Banner/Banner";
import { Toaster } from "react-hot-toast";
import Categories from "../components/Categories/Categories";
import Partner from "../components/Partner/Partner";
import Review from "../components/Review/Review";
import { Helmet } from "react-helmet";

const Home = () => {




    return (
        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>JB | Home </title>
            </Helmet>

            <Banner></Banner>
            <Categories></Categories>

            <Review></Review>
            <Partner></Partner>
            <Toaster></Toaster>

        </div>
    );
};

export default Home;