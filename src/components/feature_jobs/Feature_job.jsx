import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const Feature_job = () => {

    const [feature_job, setFeature_job] = useState([])

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data =>  setFeature_job(data))
    },[])

    // console.log(feature_job)

  return (
    <div>
      <h1 className="text-[30px] font-bold text-center">Featured Jobs</h1>
      <p className="text-center py-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid lg:grid-cols-2 gap-5 my-6">
          {
            feature_job.map((featureJob,id) => <JobCard key={id} featureJobs={featureJob}></JobCard> )
          }
      </div>
    </div>
  );
};

export default Feature_job;
