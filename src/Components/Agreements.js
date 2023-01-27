import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useAgreements from '../Hooks/useAgreements';
import AddAgreementsModal from './AddAgreementsModal';
import Agreement from './Agreement';

const Agreements = () => {
    const [agreements, setAgreements] = useAgreements([])
    const [agreementsModal,setAgreementsModal]= useState(0)
    const today = new Date().toLocaleDateString("fr-CA")
    
    // console.log(agreements[0])
    return (
        <div>

        
        <div className='grid grid-cols-3 gap-2 justify-items-center my-10'>
        
        
        {  
            agreements.map((agreement)=>
            agreement.endTime < today? <Agreement
             _id={agreement._id} 
             name={agreement.name} 
             type={agreement.type} 
             status="closed"
             cycle={agreement.cycle} 
             startTime={agreement.startTime} 
             endTime={agreement.endTime} 
             location={agreement.location} 
            
             >

            </Agreement>:
            <Agreement
             _id={agreement._id} 
             name={agreement.name} 
             type={agreement.type} 
             status="published"
             cycle={agreement.cycle} 
             startTime={agreement.startTime} 
             endTime={agreement.endTime} 
             location={agreement.location} 
            
             >

            </Agreement>
             )
        }
         <div className='flex items-center'>
         
          
         {
            agreementsModal ? <AddAgreementsModal setAgreementsModal={setAgreementsModal} ></AddAgreementsModal> : <p></p>
         }
         </div>

        
           
        </div>
         <div className='flex items-center justify-center my-10'>
         <label for="my-modal-6" onClick={()=>(setAgreementsModal(1))} class="btn bg-black">ADD MORE</label>  
         </div>
        </div>
    );
};

export default Agreements;