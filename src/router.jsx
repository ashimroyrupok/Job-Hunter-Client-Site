import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AddJob from "./Pages/AddJob/AddJob";
import JobDetails from "./components/JobDetails/JobDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [

            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/addjob",
                element: <AddJob></AddJob>
            },
            {
                path: "/postjob",
                element: <AddJob></AddJob>
            },
            {
                path:"/jobs/:id",
                element: <JobDetails></JobDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)

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