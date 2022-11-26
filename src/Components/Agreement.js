import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AgreementsDetails from './AgreementsDetails';

const Agreement = (props) => {
    const {_id,name, type,status,cycle,startTime,endTime,location,agreementsDetails}=props.agreement
    return (
        <div class="card w-96 bg-neutral text-neutral-content">
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{type}</p>
          <p>{_id}</p>
          <div className='flex gap-2 '>
          <span class="material-symbols-outlined">
cycle
</span>
<span>
<p>{cycle}</p>
</span>
          </div>
          <div className='flex gap-4'>
          <p>{startTime}</p>
          <p>{endTime}</p>
          </div>
          <div className='flex gap-2'>
          <span class="material-symbols-outlined">
location_on
</span>
<span>
<p>{location}</p>
</span>
          </div>
         
          <div class="card-actions justify-end">
          <button class="btn btn-primary"> <Link to="/agreementsDetails" state={{ data: agreementsDetails }}>Check</Link> </button>
            
            <button class="btn btn-ghost" >{status}</button>
          </div>
        </div>
      </div>
    );
};

export default Agreement;

//  to =``