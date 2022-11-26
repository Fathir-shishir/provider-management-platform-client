import React, { useEffect, useState } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import AgreementsDetailsRow from './AgreementsDetailsRow';

const AgreementsDetails = () => {
  
  // const {agreementsDetails}=useParams()
  // const[agreementDetails, setAgreementDetail]=useState([])
  const location = useLocation();
  const details = location.state?.data;
  console.log(details)
  // useEffect(()=>{
  //     fetch(`http://localhost:5000/agreementsDetails/${agreementsDetails}`)
  //     .then(res=>res.json())
  //     .then(data=>setAgreementDetail(data))
  // },[agreementsDetails])

  // const {name,type} = agreementDetails

  // console.log(agreementDetails)

    return (
        <div>
        <div className="text-5xl font-bold underline text-center mt-10">
            <h1>Open Position</h1>
            

        </div>
        
            <div class="overflow-x-auto mt-10">
  <table class="table table-zebra w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Role</th>
        <th>Experience</th>
      </tr>
    </thead>
    <tbody>
     {
       details.map((detail,index)=> <AgreementsDetailsRow detail={detail} index={index}>

       </AgreementsDetailsRow>)
     }
     
     
     
    </tbody>
  </table>
</div>
      </div>  
    );
};

export default AgreementsDetails;