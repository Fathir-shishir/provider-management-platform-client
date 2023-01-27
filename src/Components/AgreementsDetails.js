import React, {  useEffect, useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import AddPositionModal from './AddPositionModal';
import AgreementsDetailsRow from './AgreementsDetailsRow';
import EvaluatedProfile from './EvaluatedProfile';
import ProviderDetaiilsRow from './ProviderDetaiilsRow';
import RegisteredProviderRow from './RegisteredProviderRow';

const AgreementsDetails = () => {
   const location = useLocation();
  const {_id,name} = location.state?.data;
  const [positionModal,setPositionModal]= useState(0)
  const[details, setDetails]=useState([])
  const[ProviderAoffer, setProviderAoffer]=useState([])
  const[ProviderBoffer, setProviderBoffer]=useState([])
  const[ProviderCoffer, setProviderCoffer]=useState([])
  const[ProviderDoffer, setProviderDoffer]=useState([])
  const[registeredProvider, setRegisteredProviders]=useState([])
  // const[test, setTest]=useState([])
  const[user]=useAuthState(auth)

  useEffect(()=>{
      fetch(`https://provider-management-platform-server.onrender.com/agreementsDetails/${_id}`)
      .then(res=>res.json())
      .then(data=>setDetails(data))
    
  },[])

  // fetching all array 
  useEffect(()=>{
    fetch('http://ec2-3-127-137-126.eu-central-1.compute.amazonaws.com/users/offers?provider=A')
    .then(res=>res.json())
    .then(data=>setProviderAoffer(data))
  
},[])
  useEffect(()=>{
    fetch('http://ec2-3-127-137-126.eu-central-1.compute.amazonaws.com/users/offers?provider=B')
    .then(res=>res.json())
    .then(data=>setProviderBoffer(data))
  
},[])
  useEffect(()=>{
    fetch('http://ec2-3-127-137-126.eu-central-1.compute.amazonaws.com/users/offers?provider=C')
    .then(res=>res.json())
    .then(data=>setProviderCoffer(data))
  
},[])
  useEffect(()=>{
    fetch('http://ec2-3-127-137-126.eu-central-1.compute.amazonaws.com/users/offers?provider=D')
    .then(res=>res.json())
    .then(data=>setProviderDoffer(data))
  
},[])



const allOffer= [...ProviderAoffer,...ProviderBoffer,...ProviderCoffer,...ProviderDoffer]
console.log(allOffer)

 if(allOffer){
  
  var item  = allOffer.filter(item => item.agreementsid === _id); 
//   allOffer.map((offer)=>{
//     fetch('http://localhost:5000/offers',{
//     method:'POST',
//     headers:{
//         'content-type':'application/json',
//     },
//     body: JSON.stringify(offer)

// })
// .then(res=>res.json())
// .then(data=>{
//     console.log(data)
// })
//   })

//     fetch('http://localhost:5000/offers',{
//     method:'POST',
//     headers:{
//         'content-type':'application/json',
//     },
//     body: JSON.stringify(allOffer)

// })
// .then(res=>res.json())
// .then(data=>{
//     console.log(data)
// })



 }


  // fetch registered provider
  useEffect(()=>{
      fetch(`https://provider-management-platform-server.onrender.com/offers/${_id}`)
      .then(res=>res.json())
      .then(json=>{
        json.map((evaluationMarks)=> {
         if(!evaluationMarks.evaluationMarks){
          evaluationMarks.evaluationMarks=0
         }
        })
        
        setRegisteredProviders(json)
      
      
        
      })

      
    
  },[])
   
  //    useEffect(()=>{
  //     const sortItem = registeredProvider.sort((a, b) =>a.rate.localeCompare(b.rate,undefined,{ numeric: true } ));
      
  // const sor= sortItem.reverse()
  // setTest(sor)
  //    },[registeredProvider])
   
    //  if (registeredProvider){
    //   const result = registeredProvider.sort((a,b)=>a?.rate?.localeCompare(b.rate, 0, { numeric: true }))
    //   const sor= result.reverse()
    //   setRegisteredProviders(sor)
    //  }

  // const result = registeredProvider?.sort((a,b)=>a?.rate?.localeCompare(b.rate, 0, { numeric: true }))
  //       const sor= result?.reverse()
  //       setRegisteredProviders(sor)

  
 
  return (
        <div>
        <div className="text-5xl font-bold text-center mt-10">
            <h1>Open Position for {name} </h1>
            

        </div>
        
            <div class="overflow-x-auto mt-10 flex gap-10 justify-center items-center">
  <table class="table table-zebra w-full basis-3/4 ">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Position ID</th>
        <th>Name</th>
        <th>Role</th>
      
        
      </tr>
    </thead>
    <tbody>
      
     {

      details.map((detail,index)=> <AgreementsDetailsRow details={detail} index={index}></AgreementsDetailsRow> )
     }
     
     
     
    </tbody>
  </table>
  
   
</div>
 <div className='mt-5 flex justify-center '>
    <label for="my-modal-7" onClick={()=>(setPositionModal(1))} class="btn">ADD MORE</label>
    </div>
    {
      positionModal ? <AddPositionModal setPositionModal={setPositionModal} value ={_id}
      name ={name}></AddPositionModal> : <p></p>
         }

 <EvaluatedProfile data={item}></EvaluatedProfile>

        
      </div>  
    );
};

export default AgreementsDetails;