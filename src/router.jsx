import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AddJob from "./Pages/AddJob/AddJob";
import JobDetails from "./components/JobDetails/JobDetails";
import MyBids from "./Pages/MyBids/MyBids";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import MyPostedJob from "./Pages/MyPostedJob/MyPostedJob";
import UpdateJob from "./components/UpdateJob/UpdateJob";
import BIdRequest from "./Pages/BIdRequest/BIdRequest";
import PrivateRoute from "./Route/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/addjob",
                element: <PrivateRoute>
                    <AddJob></AddJob>
                </PrivateRoute>
            },
            {
                path: "/jobs/:id",
                element: <PrivateRoute>
                    <JobDetails></JobDetails>
                </PrivateRoute>,
                loader: () => fetch('http://localhost:5000/jobs')

            },
            // {
            //     path: "/myBids",
            //     element: <PrivateRoute>
            //         <MyBids></MyBids>
            //     </PrivateRoute>,
            //     loader: () => fetch('http://localhost:5000/bidJobs')

            // },
            {
                path: "/myPostedJob",
                element: <PrivateRoute>
                    <MyPostedJob></MyPostedJob>
                </PrivateRoute>,
            },
            {

                path: "/updateJob/:id",
                element: <UpdateJob></UpdateJob>,
                loader: () => fetch('http://localhost:5000/jobs')
            },
            {
                path: "/bidRequest",
                element: <PrivateRoute>
                    <BIdRequest></BIdRequest>
                </PrivateRoute>
            }


        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>

    }

]);

export default router;