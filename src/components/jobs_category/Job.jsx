

const Job = ({job}) => {
    const {logo,category_name,availability} = job;
    return (

        <div className="card  bg-[#7E90FE0D] p-2 border">
       <img className="w-[40px] ml-8 mt-4" src={logo} alt="Icon" />
        <div className="card-body">
          <h2 className="card-title">{category_name}</h2>
          <p>{availability}</p>
          
        </div>
      </div>
    );
};

export default Job;