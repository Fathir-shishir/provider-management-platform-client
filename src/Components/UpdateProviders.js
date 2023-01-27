import React from 'react';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateProviders = () => {
    const location = useLocation();
    const {_id} = location?.state?.data;
    const { register, handleSubmit} = useForm();
    const[singleprovider,setsingleprovider]= useState([])
    useEffect(()=>{
        fetch(`https://provider-management-platform-server.onrender.com/provider/${_id}`)
        .then(res=>res.json())
        .then(data=>setsingleprovider(data))
    },[])
    const onSubmit = (result) =>  { 
        result.contactperson = singleprovider.contactperson
        result.agreementsId = singleprovider.agreementsId
        result.dateuntil = singleprovider.dateuntil
        result.document = singleprovider.document
        result.employee_name = singleprovider.employee_name
        result.externalperson = singleprovider.externalperson
        result.notes = singleprovider.notes
        result.offerid = singleprovider.offerid
        result.provider_name = singleprovider.provider_name
        // result.rate = singleprovider.rate
    //    console.log(result)
       fetch(`https://provider-management-platform-server.onrender.com/provider/${_id}`,{
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
          
        <h1 className='text-center text-3xl font-bold '>Evaluation For {singleprovider.employee_name}</h1>
     {/* comment  */}
     <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 mt-5 justify-items-center'>
 <input  {...register("rate")}   type="text" placeholder="rate" class="input input-bordered w-full max-w-xs" />
<div class="modal-action">
 <input className='btn' type="submit"  />
</div>
 </form>
        
    
    </div>
    );
};

export default UpdateProviders;