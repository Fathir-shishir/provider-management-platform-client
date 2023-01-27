import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddAgreementsModal = (props) => {
    // const [newAggrements,setNewAgreements]= useState([])
    const {setAgreementsModal} = props
    const { register, handleSubmit } = useForm();
    const onSubmit = (result) =>  { 
        result.status="published"
        fetch('https://provider-management-platform-server.onrender.com/agreements',{
        method:'POST',
        headers:{
            'content-type':'application/json',
        },
        body: JSON.stringify(result)

    })
    .then(res=>res.json())
    .then(data=>{
        setAgreementsModal(0)
        toast('added')
        ;
        console.log(data)
    })
    }
    
  
  
  

    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
      <div className='flex justify-between'>
      <h3 class="font-bold text-lg"> ADD AGREEMENTS</h3>
    <button className='btn' onClick={()=>{setAgreementsModal(0)}}>CLOSE</button>
      </div>
     <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 mt-5'>
     <input  {...register("name")} type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" required />
     <input {...register("type")} type="text" placeholder="Type(Single or Team)" class="input input-bordered w-full max-w-xs" required/>
     <input {...register("cycle")} type="number" placeholder="Cycle" class="input input-bordered w-full max-w-xs" required />
     <input {...register("startTime")} type="text" placeholder="Start Time(Year-Month-Day )" class="input input-bordered w-full max-w-xs" required />
     <input {...register("endTime")} type="text" placeholder="End Time(Year-Month-Day )" class="input input-bordered w-full max-w-xs" required/>
     <input {...register("location")} type="text" placeholder="Location" class="input input-bordered w-full max-w-xs" required/>
     
    <div class="modal-action">
     <input className='btn' type="submit"  />
    </div>
     </form>
      
  </div>
</div>
        </div>
    );
};

export default AddAgreementsModal;