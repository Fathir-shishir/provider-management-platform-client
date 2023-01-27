import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Agreement = (props) => {
    const {_id,name, type,status,cycle,startTime,endTime,location}=props
       const data = { 
        name: name,
        type:type,
        status: status,
        cycle: cycle,
        startTime: startTime,
        endTime: endTime,
        location: location

       }
       fetch(`https://provider-management-platform-server.onrender.com/agreements/${_id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json',
        },
        body: JSON.stringify(data)

    })
    .then(res=>res.json())
    .then(data=>console.log("updated"))
    
       
    return (
        <div class="card w-96 bg-[#F5F5F5] text-black">
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{type}</p>
          <div className='flex gap-2 '>
          <span class="material-symbols-outlined">
cycle
</span>
<span>
<p>{cycle}</p>
</span>
          </div>
          <div className='flex gap-4'>
          <p>{startTime}</p>
          <p>{endTime}</p>
          </div>
          <div className='flex gap-2'>
          <span class="material-symbols-outlined">
location_on
</span>
<span>
<p>{location}</p>
</span>
          </div>
          <div className='bg-green-400 py-1 px-2'>
            <p className=' bold'>{status}</p>
          </div>
          <div className=' py-1 px-2'>
           {status == "closed"? <button class="btn bg-black"> <Link to="/review" state={{ data: {_id} } }>Review</Link> </button>: undefined} 
          </div>
         
          <div class="card-actions justify-end">
          <button class="btn bg-black"> <Link to="/agreementsDetails" state={{ data: {_id,name} } }>Check</Link> </button>
            <button class="btn bg-black"> <Link to="/updateMasterAgreements" state={{ data: {_id} } }>Update</Link> </button>
          </div>
        </div>
      </div>
    );
};

export default Agreement;
