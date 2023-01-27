import React from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const SelectedProfile = () => {
    const location = useLocation();
    const {details} = location?.state?.data;
    const { register, handleSubmit} = useForm();
   const {employeeid,positionid,agreementsid,employee_name,provider_name,contactperson,externalperson,rate,notes,dateuntil,document,status} = details

   const onSubmit = (result) =>  { 
    result.employeeid = employeeid
    result.positionid = positionid
    result.agreementsid = agreementsid
    result.employee_name = employee_name
    result.provider_name = provider_name
    result.contactperson = contactperson
    result.externalperson = externalperson
    result.rate = rate
    result.notes = notes
    result.dateuntil = dateuntil
    result.document = document
    // result.rate = singleprovider.rate
//    console.log(result)
fetch('https://provider-management-platform-server.onrender.com/selectedProfile',{
    method:'POST',
    headers:{
        'content-type':'application/json',
    },
    body: JSON.stringify(result)

})
.then(res=>res.json())
.then(data=>{
    toast('added')
    
})
}
    return (
        <div>
             <h1>hello from selected profile {agreementsid}</h1>


             <div>
             <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 mt-5 justify-items-center'>
 <input  {...register("employeeid")}   type="text" placeholder={employeeid} class="input input-bordered w-full max-w-xs" />
 <input  {...register("positionid")}   type="text" placeholder={positionid} class="input input-bordered w-full max-w-xs" />
 <input  {...register("agreementsid")}   type="text" placeholder={agreementsid} class="input input-bordered w-full max-w-xs" />
 <input  {...register("employee_name")}   type="text" placeholder={employee_name} class="input input-bordered w-full max-w-xs" />
 <input  {...register("provider_name")}   type="text" placeholder={provider_name} class="input input-bordered w-full max-w-xs" />
 <input  {...register("contactperson")}   type="text" placeholder={contactperson} class="input input-bordered w-full max-w-xs" />
 <input  {...register("externalperson")}   type="text" placeholder={externalperson} class="input input-bordered w-full max-w-xs" />
 <input  {...register("rate")}   type="text" placeholder={rate} class="input input-bordered w-full max-w-xs" />
 <input  {...register("notes")}   type="text" placeholder={notes} class="input input-bordered w-full max-w-xs" />
 <input  {...register("dateuntil")}   type="text" placeholder={dateuntil} class="input input-bordered w-full max-w-xs" />
 <input  {...register("document")}   type="text" placeholder={document} class="input input-bordered w-full max-w-xs" />
 <input  {...register("status")}   type="text" placeholder={status} class="input input-bordered w-full max-w-xs" />
<div class="modal-action">
 <input className='btn' type="submit"  />
</div>
 </form>
             </div>
        </div>
    );
};

export default SelectedProfile;