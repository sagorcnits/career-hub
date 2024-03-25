import { useEffect, useState } from "react";
import { CiDollar, CiLocationOn } from "react-icons/ci";
import { useLoaderData } from "react-router-dom";
import { getLocalStorage } from "../../js/localStorage";

const Applied = () => {
  const [localStoredata, setLocalStoredata] = useState([]);
  const allJobData = useLoaderData();

  useEffect(() => {
    const storeData = getLocalStorage();
    if (allJobData.length > 0) {
      const jobsApplied = allJobData.filter((job) =>
        storeData.includes(job.id)
      );
      setLocalStoredata(jobsApplied);
    }
  }, []);

  //   console.log(localStoredata);
  return (
    <div className="max-w-6xl mx-auto my-8 px-2">
      <h1 className="text-4xl font-bold text-center my-8">Applied Jobs</h1>
      {localStoredata.map((job, id) => {
        const {
          logo,
          job_title,
          company_name,
          remote_or_onsite,
          location,
          job_type,
          salary,
        } = job;
        return (
          <div
            key={id}
            className="md:flex justify-between p-6 items-center border rounded-lg mt-4"
          >
            <div className="md:flex  gap-4">
              <div className="md:bg-[#F4F4F4] flex justify-center items-center px-2 py-4 rounded-lg">
                <img src={logo} alt="google" />
              </div>
              <div>
                <h1 className="text-[#474747] font-bold">{job_title}</h1>
                <p className="text-[#757575]">{company_name}</p>
                <div className="flex gap-5 py-2 *:border *:px-7 *:py-2 *:rounded-lg *:text-[18px] *:text-[#9873FF] *:font-bold *:border-[#9873FF]">
                  <button>{remote_or_onsite}</button>
                  <button>{job_type}</button>
                </div>
                <div className="flex gap-5 py-2 *:font-bold *:text-[#757575]">
                  <p className="flex items-center gap-2">
                    <CiLocationOn></CiLocationOn> {location}
                  </p>
                  <p className="flex items-center gap-2">
                    <CiDollar></CiDollar> {salary}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button className="btn mt-4 text-[18px] text-white font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
                View Details
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Applied;
