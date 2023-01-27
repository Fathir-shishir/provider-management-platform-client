import React, { useEffect, useState } from 'react';
import RegisteredProviderRow from './RegisteredProviderRow';

const EvaluatedProfile = (props) => {
 
  
 
    const sortItem = props?.data?.sort((a, b) => 
   { return parseInt(b.rate) - parseInt(a.rate)});
    
   console.log(sortItem)
    return (
        <div>
       <div className="text-5xl font-bold underline text-center mt-10">
     
          <h1>Evaluate Profiles</h1>
            
        </div>

        <div class="overflow-x-auto mt-10 flex gap-10 justify-center items-center">
  <table class="table table-zebra w-full basis-3/4 my-5">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Position ID</th>
        <th>Employee Name</th>
        <th>Provider Name</th>
        {/* <th>agreementsId</th> */}
        {/* <th>dateuntil</th> */}
        {/* <th>document</th> */}
        <th>Contact Person</th>
        <th>External Person</th>
        <th>notes</th>
        {/* <th>offerid</th> */}
        
        <th>rate</th>
        <th>Valid Untill</th>
        <th>Save</th>
        
      </tr>
    </thead>
    <tbody>
      
     {
      
        sortItem?.map((detail,index)=> <RegisteredProviderRow details={detail} index={index}></RegisteredProviderRow> )
      
     }

  
     
     
     
    </tbody>
  </table>
   
</div>
      
  </div>
    );
};

export default EvaluatedProfile;