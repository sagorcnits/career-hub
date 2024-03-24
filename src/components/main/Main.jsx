import { useLoaderData } from "react-router-dom";
import Banner from "../banner/Banner";
import Feature_job from "../feature_jobs/Feature_job";
import Jobs from "../jobs_category/Jobs";


const Main = () => {

const data = useLoaderData()

    return (
        <div className="max-w-6xl mx-auto">
            <Banner></Banner>
            <Jobs></Jobs>
            <Feature_job data={data}></Feature_job>
        </div>
    );
};

export default Main;