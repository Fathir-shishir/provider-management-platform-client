import React from 'react';

const AgreementsDetailsRow = ({details,index}) => {
    const {name,type,_id} =details
    return (
        <tr>
        <th>{ index+ 1}</th>
        <td>{_id}</td>
        <td>{name}</td>
        <td> 
            <a href={type} target="_blank"> 
               <img className='w-30 h-40' src={type} alt="" clicked />
            </a>
        </td>
        
        
    </tr>
    
       
    );
};

export default AgreementsDetailsRow;