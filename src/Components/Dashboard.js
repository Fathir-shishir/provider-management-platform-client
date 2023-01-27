import React, { useEffect, useState } from 'react';
import DashboardRow from './DashboardRow';

const Dashboard = () => {
    const[selectedProfile, setSelectedProfile]=useState([])
    useEffect(()=>{
        fetch('https://provider-management-platform-server.onrender.com/selectedProfile')
        .then(res=>res.json())
        .then(data=>{
            
            setSelectedProfile(data)
        })
    },[])
    return (
        <div>
       <div className="text-5xl font-bold underline text-center mt-10">
     
          <h1>Selected Profiles</h1>
            
        </div>

        <div class="overflow-x-auto mt-10 flex gap-10 justify-center items-center">
  <table class="table table-zebra w-full basis-3/4 my-5">
    {/* <!-- head --> */}
    <thead>
      <tr>
      <th></th>
        <th>employeeid</th>
        <th>positionid</th>
        <th>agreementsid</th>
        {/* <th>agreementsId</th> */}
        {/* <th>dateuntil</th> */}
        {/* <th>document</th> */}
        <th>employee_name</th>
        <th>Provider Name</th>
        <th>contactperson</th>
        <th>externalperson</th>
        <th>rate</th>
        {/* <th>offerid</th> */}
        
        <th>notes</th>
        <th>dateuntil</th>
        <th>status</th>

        
      </tr>
    </thead>
    <tbody>
      
     {
      
        selectedProfile?.map((detail,index)=> <DashboardRow details={detail} index={index}></DashboardRow> )
      
     }

  
     
     
     
    </tbody>
  </table>
   
</div>
      
  </div>
    );
};

export default Dashboard;