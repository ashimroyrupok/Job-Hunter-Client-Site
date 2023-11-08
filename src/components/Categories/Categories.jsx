import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const Categories = () => {
    const [allJob, setAllJob] = useState([])
    const [webJob, setWebJob] = useState([])
    const [marketingJOb, setMarketingJOb] = useState([])
    const [graphicsJob, setGraphicsJob] = useState([])


    useEffect(() => {
        fetch('https://job-hunter-server-site.vercel.app/jobs')
            .then(res => res.json())
            .then(data => setAllJob(data))
    }, [])

    const tabs = (tab) => {
        // setTab(index);
        if (tab == 1) {
            const filterWb = allJob.filter(job => job.selectedCategory == "Web Development")
            setWebJob(filterWb);
        }
        if (tab == 2) {
            const filter = allJob.filter(job => job.selectedCategory == "Digital Marketing")
            setMarketingJOb(filter)
        }
        if (tab == 3) {
            const filterGraphics = allJob.filter(job => job.selectedCategory == "Graphics Design")
            setGraphicsJob(filterGraphics)
        }

    }




    return (
        <Tabs>
            <TabList className='dark:text-white'>
                <Tab onClick={() => tabs(1)}>Web Development</Tab>
                <Tab onClick={() => tabs(2)}>Digital Marketing</Tab>
                <Tab onClick={() => tabs(3)}>Graphics Design</Tab>
            </TabList>

            <TabPanel >
                <div className='grid dark:bg-black ml-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-3'>
                    {
                        webJob.length == 0 ? allJob.filter(job => job.selectedCategory == "Web Development").map(job => <div key={job._id} className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body dark:text-white  dark:bg-black ">
                                <h2 className="card-title dark:text-white  text-xl font-bold"> {job?.jobTitle} <span className="badge flex text-white  bg-[#327289] ">Full time</span>
                                </h2>
                                <p className="dark:text-white "> <span className="text-red-500  font-semibold">Price</span> : {job?.minimumPice}$ - {job?.maximumPrice}$ </p>
                                <p>Deadline: {job?.deadline} </p>
                                <p> {job?.description.slice(0, 200)} </p>
                                <div className="card-actions justify-end">
                                    <Link to={`jobs/${job._id}`}>
                                        <button className="btn bg-[#327289] text-white font-semibold">Bid Now</button> 
                                    </Link>
                                </div>
                            </div>
                        </div>) : webJob.map(job => <div key={job._id} className="card w-96 bg-base-100 shadow-xl">

                            <div className="card-body dark:bg-black dark:text-white ">
                                <h2 className="card-title dark:text-white  text-xl font-bold"> {job?.jobTitle} <span className="badge flex text-white  bg-[#327289] ">Full time</span>
                                </h2>
                                <p> <span className="text-red-500 font-semibold">Price</span>: {job?.minimumPice}$ - {job?.maximumPrice} </p>
                                <p className="dark:text-white ">Deadline: {job?.deadline} </p>
                                <p className="dark:text-white "> {job?.description.slice(0, 200)} </p>
                                <div className="card-actions justify-end">
                                <Link to={`jobs/${job._id}`}>
                                        <button className="btn bg-[#327289] text-white font-semibold">Bid Now</button> 
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </TabPanel>
            <TabPanel >
                <div className='grid ml-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-3'>
                    {
                        marketingJOb.map(job => <div key={job._id} className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body dark:bg-black dark:text-white ">
                                <h2 className="card-title text-xl font-bold"> {job?.jobTitle} <span className="badge flex text-white  bg-[#327289] ">Full time</span>
                                </h2>
                                <p> <span className="text-red-500 font-semibold">Price</span>: {job?.minimumPice}$ - {job?.maximumPrice} </p>
                                <p>Deadline: {job?.deadline} </p>
                                <p> {job?.description.slice(0, 200)} </p>
                                <div className="card-actions justify-end">
                                <Link to={`jobs/${job._id}`}>
                                        <button className="btn bg-[#327289] text-white font-semibold">Bid Now</button> 
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </TabPanel>
            <TabPanel >
                <div className='grid ml-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-3 gap-y-3'>
                    {
                        graphicsJob.map(job => <div key={job._id} className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body dark:bg-black  dark:text-white ">
                                <h2 className="card-title text-xl font-bold"> {job?.jobTitle} <span className="badge flex text-white  bg-[#327289] ">Full time</span>
                                </h2>
                                <p> <span className="text-red-500 font-semibold">Price</span>: {job?.minimumPice}$ - {job?.maximumPrice} </p>
                                <p>Deadline: {job?.deadline} </p>
                                <p> {job?.description.slice(0, 200)} </p>
                                <div className="card-actions justify-end">
                                <Link to={`jobs/${job._id}`}>
                                        <button className="btn bg-[#327289] text-white font-semibold">Bid Now</button> 
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </TabPanel>


        </Tabs>
    )
}

//   render(Categories);

export default Categories;