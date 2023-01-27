import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const AddPositionModal = (props) => {
   
    const {setPositionModal,value,name} = props
    const { register, handleSubmit } = useForm();
    const onSubmit = (result) =>  { 
        result.agreementName =name
        console.log("result",result)

        fetch('https://provider-management-platform-server.onrender.com/agreementsDetails',{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body: JSON.stringify(result)
    
        })
        .then(res=>res.json())
        .then(data=>{
            setPositionModal(0)
            toast('added')
            ;
            console.log(data)
        })
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-7" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
      <div className='flex justify-between'>
      <h3 class="font-bold text-lg"> Add Posision for {name}</h3>
    <button className='btn' onClick={()=>{setPositionModal(0)}}>CLOSE</button>
      </div>
     <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 mt-5'>
     <input  {...register("name")} type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" />
     <input {...register("type")} type="text" placeholder="Role pdf link" class="input input-bordered w-full max-w-xs" />
     <input {...register("agreementsId")} type="text" placeholder="key" value={value} class="input input-bordered w-full max-w-xs" />
     
    <div class="modal-action">
     <input className='btn' type="submit"  />
    </div>
     </form>
      
  </div>
</div>
        </div>
    );
};

export default AddPositionModal;