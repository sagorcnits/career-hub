import { NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <div className="navbar my-4 max-w-6xl mx-auto manrope_font">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" mr-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 *:text-[16px]"
          >
            
              <li>
              <NavLink to="/">Statistics</NavLink>
              </li>
         
           
              <li>
              <NavLink to="/applied">Applied Jobs</NavLink>
              </li>
          
            
              <li>
              <NavLink to="/blog">Blog</NavLink>
              </li>
          
          </ul>
        </div>
        <a className=" text-2xl font-bold ">CareerHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Statistics</NavLink>
          </li>
          <li>
            <NavLink to="/applied">Applied Jobs</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-[18px] text-white font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
          Star Applying
        </a>
      </div>
    </div>
  );
};

export default Navber;
