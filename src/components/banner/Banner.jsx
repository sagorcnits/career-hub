

const Banner = () => {
    return (
        <div className="max-w-6xl my-8 mx-auto flex flex-col-reverse lg:flex-row gap-5 items-center px-2 lg:px-0">
           <div className="flex-1 space-y-4">
               <h1 className="text-[40px]  md:text-[70px] manrope-font font-bold lg:leading-[80px]">One Step <br /> Closer To Your <span className="text-[#9873FF]">Dream Job</span> </h1>
               <p className="text-[#757575] manrope-font">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
               <button className="btn text-[18px] text-white font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Get Started</button>
           </div>
           <div className="flex-1">
              <img className="w-[80%] mx-auto" src="user.png" alt="user_img" />
           </div>
        </div>
    );
};

export default Banner;