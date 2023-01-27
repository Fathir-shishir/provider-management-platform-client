import React from "react";

const Project = () => {
  return (
    <div id="projects" className="bg-[#EFEFEF] pt-16 pb-20 text-[#112B3C] font-ralway ">
      <div className=" ">
        <div className="mb-16 ">
          <h1 className="text-5xl  font-bold  text-[#112B3C] text-center">
            Project <span className="text-blue-600">Overview</span>{" "}
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row md:items-center justify-center">
          <div className="flex-1">
            <div className="">
              <img style={{width:"50%"}}
                className="bg-shadow rounded-full bg-white p-2   md:top-[-20px] md:left-10  left-12 "
                src="https://qph.cf2.quoracdn.net/main-qimg-11036d78c9a5814e760cdb2e8236c188-lq"
                alt=""
              />
             
            </div>
          </div>
          <div className="flex-1  ">
            <h1 className="text-4xl font-bold mb-2 text-[#A9B55A]">
              Synopsis
            </h1>
            <p className="  text-2xl">
            we developed a platform that share any availability about job availabilities with a project description. Customer needs to register and then login to view the job availability. Here the Customer is a Provider.Provider of another company who has employees suitable for the profiles on the portal. The provider enters the details for the chosen profile and is awaiting his result. The staff of the portal receives the details and evaluates the profile. Based on the evaluation the result is announced to the provider. With a positive result, the provider is issued an offer, if it is otherwise, the providers data is passed on to new projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
