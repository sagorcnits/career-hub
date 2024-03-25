import { useEffect, useState } from "react";
import Job from "./Job";


const Jobs = () => {
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setAllJobs(data));
  }, []);

  return (
    <div >
      <h1 className="text-[30px] font-bold text-center">Job Category List</h1>
      <p className="text-center py-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid lg:grid-cols-4 gap-5 my-8">
        {allJobs.map((job, id) => (
          <Job key={id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
