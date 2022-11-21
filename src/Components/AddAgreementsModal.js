import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddAgreementsModal = (props) => {
    // const [newAggrements,setNewAgreements]= useState([])
    const {setAgreementsModal} = props
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>  { 
         console.log(data) 
    }
    // console.log(newAggrements)
  
    // fetch('http://localhost:5000/agreements',{
    //     method:'POST',
    //     headers:{
    //         'cotent-type':'application/json'
    //     },
    //     body: JSON.stringify(newAggrements)
    // })
    // .then(res=>res.json())
    // .then(data=>{
    //     setAgreementsModal(0)
    //     toast('added')
    // })

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
     <input  {...register("name")} type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" />
     <input {...register("type")} type="text" placeholder="Type" class="input input-bordered w-full max-w-xs" />
     <input {...register("status")} type="text" placeholder="Status" class="input input-bordered w-full max-w-xs" />
     <input {...register("cycle")} type="text" placeholder="Cycle" class="input input-bordered w-full max-w-xs" />
     <input {...register("startTime")} type="text" placeholder="Start Time" class="input input-bordered w-full max-w-xs" />
     <input {...register("endTime")} type="text" placeholder="End Time" class="input input-bordered w-full max-w-xs" />
     <input {...register("location")} type="text" placeholder="Location" class="input input-bordered w-full max-w-xs" />
     
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