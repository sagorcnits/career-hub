import { CiDollar, CiLocationOn } from "react-icons/ci";
import { NavLink } from "react-router-dom";



const JobCard = ({featureJobs}) => {
const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,} = featureJobs;
// console.log(featureJobs)
    return (
        <div className="border border-[#E8E8E8] rounded-lg p-4">
            <img className="py-2" src={logo} alt="Job " />
            <h2 className="text-2xl font-bold text-[#474747]">{job_title}</h2>
            <p className="text-[#757575] font-bold">{company_name}</p>
            <div className="flex gap-5 py-2 *:border *:px-7 *:py-2 *:rounded-lg *:text-[18px] *:text-[#9873FF] *:font-bold *:border-[#9873FF]">
             
                <button >{remote_or_onsite}</button>               
                <button >{job_type}</button>
            </div>
            <div className="flex gap-5 py-2 *:font-bold *:text-[#757575]">
                <p className="flex items-center gap-2"><CiLocationOn></CiLocationOn> {location}</p>
                <p className="flex items-center gap-2"><CiDollar></CiDollar> {salary}</p>
            </div>
            <NavLink to={`/jobDetails/${id}`}>
            <button  className="btn mt-4 text-[18px] text-white font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</button>
            </NavLink>
        </div>
    );
};

export default JobCard;