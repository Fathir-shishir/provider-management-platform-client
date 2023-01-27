import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';



const PostReview = () => {
    const location = useLocation();
    const {_id} = location?.state?.data;
    const { register, handleSubmit } = useForm();
    const onSubmit = (result) =>  { 
        result.argeementsID = _id
        fetch('https://provider-management-platform-server.onrender.com/review',{
        method:'POST',
        headers:{
            'content-type':'application/json',
        },
        body: JSON.stringify(result)

    })
    .then(res=>res.json())
    .then(data=>{
        {toast('Updated')}
    })
    }
    return (
        <div className='m-5'>
          
        <h1 className='text-center text-3xl font-bold '>ADD REVIEW</h1>
     {/* comment  */}
     <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 mt-5 justify-items-center'>
 <input  {...register("Provider_Name")}   type="text" placeholder="Provider Name" class="input input-bordered w-full max-w-xs" />
 <input  {...register("raiting",{valueAsNumber:true})}   type="text" placeholder="Rate between 1 to 5" class="input input-bordered w-full max-w-xs" />
 <textarea  {...register("descriptions")}   type="text" placeholder="comments" class="input input-bordered w-full max-w-xs" />
<div class="modal-action">
 <input className='btn' type="submit"  />
</div>
 </form>
        
    
    </div>
      
    );
};

export default PostReview;