import { CiDollar, CiLocationOn } from "react-icons/ci";
import { FaCalendarDays } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getLocalStorage, saveLocalStorage } from "../../js/localStorage";
const JobDetails = () => {
  const id = useParams();
  const convertID = parseInt(id.id);
  const data = useLoaderData();
  const detailsJob = data.find((job) => job.id === convertID);

  const handleApply = () => {
    const localStoreData = getLocalStorage();
    const exitstdata = localStoreData.find((data) => data === convertID);
    // console.log(exitstdata);
    if (!exitstdata) {
      saveLocalStorage(convertID);
      toast("Your Apply Sucsess Wow 🤷‍♂️");
    }else {
      toast.warn("Sorry already applied 😍")
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-2">
      <ToastContainer></ToastContainer>
      <h1 className="text-[40px] font-bold manrope-font text-center">
        Job Details
      </h1>
      <div className="grid md:grid-cols-3 gap-5 my-20">
        <div className="md:col-span-2 leading-10">
          <p>
            <span className="font-bold">Job Description:</span>{" "}
            {detailsJob.job_description}
          </p>
          <p>
            <span className="font-bold">job_responsibility:</span>{" "}
            {detailsJob.job_responsibility}
          </p>
          <h1 className="font-bold">Educational Requirements:</h1>
          <p>{detailsJob.educational_requirements}</p>

          <h1 className="font-bold">Experiences:</h1>
          <p>{detailsJob.experiences}</p>
        </div>

        <div>
          <div className="bg-gradient-to-r from-[rgba(126,144,254,0.10)] to-[rgba(152,115,255,0.10)] p-4 rounded-lg">
            <h1 className="font-bold border-b border-[#7E90FE] pb-2 text-[20px]">
              Job Details
            </h1>
            <div className="flex items-center gap-2 py-2">
              <CiDollar className="text-[#7E90FE] text-[20px]"></CiDollar>
              <p className="text-[#474747]">
                <span className="font-bold">Salary : </span>
                {detailsJob.salary}(Per Month)
              </p>
            </div>
            <div className="flex items-center gap-2 py-2">
              <FaCalendarDays className="text-[#7E90FE] text-[20px]"></FaCalendarDays>
              <p className="text-[#474747]">
                <span className="font-bold">Job Title : </span>{" "}
                {detailsJob.job_title}
              </p>
            </div>
            <h1 className="font-bold text-[20px] text-[#1A1919] py-2 border-b border-[#7E90FE]">
              Contact Information
            </h1>
            <div className="flex items-center gap-2 py-4">
              <IoCall className="text-[#7E90FE] text-[20px]"></IoCall>
              <p className="text-[#474747]">
                <span className="font-bold">Phone : </span>{" "}
                {detailsJob.contact_information.phone}
              </p>
            </div>
            <div className="flex items-center gap-2 py-2">
              <MdOutlineMail className="text-[#7E90FE] text-[20px]"></MdOutlineMail>
              <p className="text-[#474747]">
                <span className="font-bold">Email : </span>
                {detailsJob.contact_information.email}
              </p>
            </div>
            <div className="flex items-center gap-2 py-2">
              <CiLocationOn className="text-[#7E90FE] text-[20px]"></CiLocationOn>
              <p className="text-[#474747]">
                <span className="font-bold">Address :</span>{" "}
                {detailsJob.contact_information.address}
              </p>
            </div>
          </div>

          <button
            onClick={handleApply}
            className="btn mt-4 w-full text-[18px] text-white font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
