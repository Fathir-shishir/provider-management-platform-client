import React from 'react';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateMasterAgreements = () => {
    const location = useLocation();
  const {_id} = location?.state?.data;
  const[singleAgreements,setSingleAgreements]= useState([])

    useEffect(()=>{
        fetch(`https://provider-management-platform-server.onrender.com/agreements/${_id}`)
        .then(res=>res.json())
        .then(data=>setSingleAgreements(data))
    },[])

       // comment 
    const { register, handleSubmit} = useForm();
    const onSubmit = (result) =>  { 
        result.name = singleAgreements.name
        result.type = singleAgreements.type
        result.location = singleAgreements.location
        result.status = singleAgreements.status
       console.log(result)
       fetch(`https://provider-management-platform-server.onrender.com/agreements/${_id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json',
        },
        body: JSON.stringify(result)

    })
    .then(res=>res.json())
    .then(data=>{toast('Updated')})
    }
    

  
    return (
        <div className='m-5'>
          
            <h1 className='text-center text-3xl font-bold '>Update Master agreements for {singleAgreements?.name}</h1>
         {/* comment  */}
         <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 mt-5 justify-items-center'>
     <input  {...register("name")}   type="text" placeholder={singleAgreements.name} class="input input-bordered w-full max-w-xs" disabled/>
     <input {...register("type")} type="text" placeholder={singleAgreements.type}class="input input-bordered w-full max-w-xs" disabled />
     <input {...register("status")} type="text" placeholder={singleAgreements.status}class="input input-bordered w-full max-w-xs"  disabled/>
     <input {...register("cycle")} type="text" placeholder={singleAgreements.cycle} class="input input-bordered w-full max-w-xs" required />
     <input {...register("startTime")} type="text" placeholder={singleAgreements.startTime} class="input input-bordered w-full max-w-xs" required/>
     <input {...register("endTime")} type="text" placeholder={singleAgreements.endTime}class="input input-bordered w-full max-w-xs" required />
     <input {...register("location")} type="text" placeholder={singleAgreements.location} class="input input-bordered w-full max-w-xs" disabled/>
     
    <div class="modal-action">
     <input className='btn' type="submit"  />
    </div>
     </form>
            
        
        </div>
    );
};

export default UpdateMasterAgreements;