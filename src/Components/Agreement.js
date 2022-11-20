import React from 'react';

const Agreement = (props) => {
    const {name, type,status,cycle,startTime,endTime,location}=props.agreement
    console.log(props.agreement)
    return (
        <div class="card w-96 bg-neutral text-neutral-content">
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{type}</p>
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
            <button class="btn btn-primary">Check</button>
            <button class="btn btn-ghost">{status}</button>
          </div>
        </div>
      </div>
    );
};

export default Agreement;