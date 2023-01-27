
  import React from "react";
  import { useNavigate } from "react-router-dom";
  import useProjects from "../Hooks/useProjects";
 
  
  const AboutUs = () => {
    const navigate = useNavigate();
    const [projects] = useProjects();
    return (
      <div id="about" className=" bg-slate-900 text-white font-ralway">
        <div className="  pt-16 pb-20">
          <div className="">
            <h1 className="text-4xl md:text-5xl  font-bold  text-white text-center">
              About <span className="text-[#A9B55A]">US</span>{" "}
            </h1>
            <p className="ml-1 mt-2 text-gray-400 text-center">See our technological information</p>
            {/* <p className="w-full ml-1  bg-orange-500 rounded-full mt-2 h-[1px]"></p> */}
          </div>
  
          <div className="grid grid-cols-3 gap-20 md:gap-10 mt-16 justify-items-center">
          {projects.map((p) => (
              <div key={p.id} className={`project     `}>
  
                <div  className="">
                  <img
                    style={{borderRadius:"15px 0 0 50px"}}
                    src={p.img}
                    className="h-[220px] hover:scale-105 transition-all duration-500  rounded-md"
                    alt=""
                  />
                </div>
                <div className="flex justify-between items-center pt-2">
                  <h1 className=" text-center text-lg font-ralway  font-bold ">
                    {p.name}
                  </h1>
                  
                </div>
              </div>
            ))} 
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  
  