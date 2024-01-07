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
import Contact from "./Pages/Contact/Contact";

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
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/jobs/:id",
                element: <PrivateRoute>
                    <JobDetails></JobDetails>
                </PrivateRoute>,
                loader: () => fetch('https://job-hunter-server-site.vercel.app/jobs', { credentials: "include" })

            },
            {
                path: "/myBids",
                element: <PrivateRoute>
                    <MyBids></MyBids>
                </PrivateRoute>,
                // loader: () => fetch('https://job-hunter-server-site.vercel.app/bidJobs', { credentials: "include" })

            },
            {
                path: "/myPostedJob",
                element: <PrivateRoute>
                    <MyPostedJob></MyPostedJob>
                </PrivateRoute>,
            },
            {

                path: "/updateJob/:id",
                element: <UpdateJob></UpdateJob>,
                loader: () => fetch('https://job-hunter-server-site.vercel.app/jobs')
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