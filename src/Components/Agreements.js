import React from 'react';
import useAgreements from '../Hooks/useAgreements';
import Agreement from './Agreement';

const Agreements = () => {
    const [agreements, setAgreements] = useAgreements([])
    return (
        <div className='grid grid-cols-3 gap-2 justify-items-center mt-10'>
        
        {  
            agreements.map((agreement)=><Agreement agreement={agreement} ></Agreement>)
        }

        
            
        </div>
    );
};

export default Agreements;