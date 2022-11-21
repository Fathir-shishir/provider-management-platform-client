import React, { useState } from 'react';
import useAgreements from '../Hooks/useAgreements';
import AddAgreementsModal from './AddAgreementsModal';
import Agreement from './Agreement';

const Agreements = () => {
    const [agreements, setAgreements] = useAgreements([])
    const [agreementsModal,setAgreementsModal]= useState(0)
    return (
        <div className='grid grid-cols-3 gap-2 justify-items-center my-10'>
        
        
        {  
            agreements.map((agreement)=><Agreement agreement={agreement} ></Agreement>)
        }
         <div className='flex items-center'>
         <label for="my-modal-6" onClick={()=>(setAgreementsModal(1))} class="btn">ADD MORE</label>
          
         {
            agreementsModal ? <AddAgreementsModal setAgreementsModal={setAgreementsModal} ></AddAgreementsModal> : <p></p>
         }
         </div>

        
            
        </div>
    );
};

export default Agreements;